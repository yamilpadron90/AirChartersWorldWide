
var message = 
{
    'ShowNotification': function(_message, _time)
    {
        message.private.Load('MessageFromJsNotification', _message, _time);
    },
    'ShowError': function(_message, _time)
    {
        message.private.Load('MessageFromJsError', _message, _time);
    },
    'ShowWarning': function(_message, _time)
    {
        message.private.Load('MessageFromJsWarning', _message, _time);
    }
};

message.private = 
{
    'id': 0,
    'screenWidth': 0,
    'screenHeight': 0,
    'div': null,
    'Load': function(_type, _message, _time)
    {
        this.screenHeight = window.innerHeight;
        this.screenWidth = window.innerWidth;
        //console.log(this.screenHeight, this.screenWidth);
        
        /* Create Div */
        
        var myDiv;

        document.body.insertAdjacentHTML("afterbegin", "<div id='MessageFromJs"+this.id+"' class='MessageFromJs "+_type+"'>"+ _message +"</div>");
        myDiv = document.getElementById("MessageFromJs" + this.id);
        myDiv.setAttribute('alt', this.id);
        
        /* Style */
        myDiv.style.left = ((this.screenWidth / 2) - (myDiv.offsetWidth / 2)) + "px";
        myDiv.style.top = ((this.screenHeight / 2) - (myDiv.offsetHeight / 2)) + "px";
        
        setTimeout(function()
        {
            //console.time("cache node");
            var conter = 9;
            var myInt = setInterval(function()
            {
                document.getElementById("MessageFromJs" + myDiv.getAttribute('alt')).style.opacity = "0." + conter;
                if(conter === 0)
                {
                    document.getElementById("MessageFromJs" + myDiv.getAttribute('alt')).remove();
                    delete myDiv;
                    delete conter;
                    clearInterval(myInt);
                }
                else
                    conter--;
            }, 100);
            //console.timeEnd("cache node");
        }, _time * 1000);
        
        this.id++;
    },
};

//message.ShowNotification("Hello, my first message", 4);
/*message.ShowError("Hello, my Second message", 4);
message.ShowWarning("Hello, my Third message", 4);*/