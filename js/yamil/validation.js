
var yamilVAL = {};

yamilVAL.global = 
{
    'mArray': new Array(),
    'refDiv': null,
    'divLeft': 0,
    'divTop': 0,
    'GetCoordinates': function (obj)
    {
        var p = {};
        p.x = obj.offsetLeft;
        p.y = obj.offsetTop;
        while (obj.offsetParent) 
        {
            p.x = p.x + obj.offsetParent.offsetLeft;
            p.y = p.y + obj.offsetParent.offsetTop;
            if (obj == document.getElementsByTagName("body")[0]) {
                break;
            }
            else 
            {
                obj = obj.offsetParent;
            }
        }
        return p;
    }

};



yamilVAL.AddAlert = function(_id, _message)
{
    yamilVAL.global.mArray[_id] = _message;
    yamilVAL.Core(_id);
};

yamilVAL.Core = function(_id)
{
    window.addEventListener('load',function()
    {
        try
        {
            document.getElementById(_id).addEventListener("blur", function(e)
            {
                if(yamilVAL.global.refDiv === null)
                {
                    document.body.insertAdjacentHTML("afterbegin", "<div class='yamilVAL'></div>");
                    yamilVAL.global.refDiv = document.getElementsByClassName("yamilVAL")[0];                    
                }
                
                if(this.value.length === 0)
                {
                    var obj = yamilVAL.global.GetCoordinates(this);
                    console.log(obj.x);
                    yamilVAL.global.refDiv.style.left = obj.x + "px";
                    var top = obj.y + 30;
                    yamilVAL.global.refDiv.style.top = top + "px";
                    yamilVAL.global.refDiv.style.visibility = "visible";
                    yamilVAL.global.refDiv.innerHTML = yamilVAL.global.mArray[_id];
                    this.focus()
                }
                else
                {
                    yamilVAL.global.refDiv.style.visibility = "hidden";
                }
            });
        }
        catch(e)
        {
            console.error(e);
        }
    });
};

/*
yamilVAL.AddAlert("asd", "The name is important");
yamilVAL.AddAlert("sss", "The name is important too");
 */


