
var yamilform = {};

yamilform.global = 
{
    "last": null,
    "reference": null,
    "height": 0,
    "width": 0,
    'arrayFrom': new Array()
};

yamilform.panel = 
{
    'Show': function(_id)
    {
        try
        {
            yamilform.global.last = _id;
            if(yamilform.global.reference === null)
            {
                //console.log("a")
                //document.body.innerHTML += "<div class='yamilbackground'></div>";
                document.body.insertAdjacentHTML("afterbegin", "<div class='yamilbackground'></div>");
                yamilform.global.reference = document.getElementsByClassName("yamilbackground")[0];
                yamilform.global.reference.addEventListener("click", function(e)
                {
                    yamilform.panel.Hide(yamilform.global.last);
                });
            }
            yamilform.panel.Core();
            if(yamilform.global.arrayFrom[_id] !== undefined && yamilform.global.arrayFrom[_id] !== null)
            {
                yamilform.position.UpdatePosition();
                yamilform.global.arrayFrom[_id].style.visibility = "visible";
                yamilform.global.reference.style.visibility = "visible";
                //console.log(yamilform.global.arrayFrom[_id]);
            }
        }
        catch(e)
        {
            console.error(e);
        }
    },
    'Hide': function(_id)
    {
        try
        {
            if(yamilform.global.arrayFrom[_id] !== undefined && yamilform.global.arrayFrom[_id] !== null)
            {
                yamilform.global.arrayFrom[_id].style.visibility = "hidden";
                yamilform.global.reference.style.visibility = "hidden";
            }
        }
        catch(e)
        {
            console.error(e);
        }        
    },
    'Core': function()
    {
        var ref = document.getElementsByClassName("yamilform");
        for(var item in ref)
        {
            //console.log(ref[item]);
            if(
                ref[item].id !== undefined 
                && ref[item].id !== null 
                && ref[item].id !== "")
            {
                if(item !== "length" && item !== "namedItem" && item !== "item")
                {
                    yamilform.global.arrayFrom[ref[item].id] = ref[item];
                }
            }
        }
    }
};

yamilform.position = 
{
    'UpdatePosition' : function()
    {
        yamilform.global.height = window.innerHeight;
        yamilform.global.width = window.innerWidth;
        //console.log(yamilform.global.height, yamilform.global.width);

        for(var item in yamilform.global.arrayFrom)
        {
            if(yamilform.global.arrayFrom[item].clientHeight > yamilform.global.height)
            {
                yamilform.global.arrayFrom[item].style.position = "absolute";
                yamilform.global.arrayFrom[item].style.top = "5%";
            }
            else
            {
                yamilform.global.arrayFrom[item].style.position = "fixed";
                /* Top */
                var z = yamilform.global.height / 2;
                var x = z - (yamilform.global.arrayFrom[item].clientHeight / 2);
                yamilform.global.arrayFrom[item].style.top = x + "px";
            }



            /* Left */
            var z = yamilform.global.width / 2;
            var x = z - (yamilform.global.arrayFrom[item].clientWidth / 2);
            yamilform.global.arrayFrom[item].style.left = x + "px";
        }
    }
};


