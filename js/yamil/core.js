
var yamil = {};

yamil.global = 
{
    'posX': 0,
    'posY': 0,
    'reference': null,
    'started': false,
    'standBy': false,
};

yamil.private = 
{
    'mconter': 0,
    mconterIncrement: function()
    {
        this.mconter++;
    },
    mconterDecrement: function()
    {
        this.mconter--;
    },
    mconterReset: function()
    {
        this.mconter = 0;
    },
    'mInterval': null
};

yamil.div = 
{
    'Width': 5,
    'Heigth': 5,
    'Background': "white",
    'borderColor': "gray",
    'Color': "gray",
    'fontFamily': "Arial",
    'fontSize': 12,
    'listPadding': 5,
    'listStyle': "circle"
};

yamil.menu = 
{
    'arrayMenu': new Array()
};

if (window.Event) 
{
    document.captureEvents(Event.MOUSEMOVE);
}

document.addEventListener('contextmenu', function(ev) {
    ev.preventDefault();
    if(yamil.global.standBy === true)
    {
        yamil.list.Hide();
    }
    else
    {
        yamil.list.Show();
    }
    return false;
}, false);

document.onmousemove = function(e)
{
    if(yamil.global.started === true)
    {
        yamil.global.posX = e.clientX + 20;
        yamil.global.posY = e.clientY + 20;        
        yamil.Update();
    }
};

yamil.list = 
{
    'Hide': function()
    {
        yamil.global.reference.innerHTML = "";
        yamil.global.reference.style.width = yamil.div.Width + "px";
        yamil.global.reference.style.height = yamil.div.Heigth + "px";
        yamil.global.reference.style.padding = "0px";
        yamil.global.reference.style.cursor = "auto";      
        yamil.global.standBy = false;
    },
    'Show': function()
    {
        yamil.global.reference.innerHTML = "";
        for(var item in yamil.menu.arrayMenu)
        {
            yamil.global.reference.innerHTML += "<li id='yamil_item_"+ item +"'>" + item.replace("_", " ") + "</li>";
        }
        for(var item in yamil.menu.arrayMenu)
        {
            yamil.list.Core(item);
        }
        yamil.global.reference.style.width = "auto";
        yamil.global.reference.style.height = "auto";
        yamil.global.reference.style.padding = "5px";
        yamil.global.reference.style.cursor = "pointer";
        yamil.global.standBy = true;
    },
    'Core': function(item)
    {
        document.getElementById("yamil_item_" + item).addEventListener("click", function(e)
        {
            yamil.menu.arrayMenu[item]();
            yamil.list.Hide();
        });       
    }
};

yamil.Update = function()
{
    if(yamil.global.standBy === false)
    {
        yamil.global.reference.style.left = yamil.global.posX + "px";
        yamil.global.reference.style.top = yamil.global.posY + "px";
    }
};

yamil.AddMenu = function(_title, _function)
{
    /* validate white space */
    var re = _title.replace(" ", "_");
    yamil.menu.arrayMenu[re] = _function;
};

yamil.Animation = function()
{
    var c = 1;
    setInterval(function()
    {
        yamil.global.reference.style.boxShadow = "0px 0px "+ ((c > 10) ? c = 1 : c++) +"px " + yamil.div.borderColor;
    }, 100);
};

yamil.Create = function()
{
    var style;
    style  = "<style>";
        style += "#yamil_is_your_friend";
        style += "{";
            style += "position: fixed;";
            style += "width: " + yamil.div.Width + "px;";
            style += "height: " + yamil.div.Heigth + "px;";
            style += "background-color: " + yamil.div.Background + ";";
            style += "left: " + yamil.global.posX + "px;";
            style += "top: " + yamil.global.posY + "px;";
            style += "border-radius: 10px;";
            style += "font-family: "+ yamil.div.fontFamily +";";
            style += "color: "+ yamil.div.Color +";";
            style += "font-size: "+ yamil.div.fontSize +"px;";
            style += "box-shadow: 0px 0px 10px "+ yamil.div.Color +" ;";
        style += "}";
        style += "#yamil_is_your_friend > li";
        style += "{";
            style += "list-style: "+ yamil.div.listStyle +";";
            style += "padding: "+ yamil.div.listPadding +"px;";
        style += "}";
        style += "#yamil_is_your_friend > li:hover";
        style += "{";
            style += "text-decoration: underline;";
        style += "}";        
    style += "</style>";
    var div;
    div = "<div id='yamil_is_your_friend'></div>";
    document.getElementsByTagName("body")[0].innerHTML += style + div;
    
    document.getElementsByTagName("body")[0].addEventListener("click", function(e){
        yamil.list.Hide();
    });

    yamil.global.reference = document.getElementById("yamil_is_your_friend");
    yamil.global.started = true;
    yamil.Animation();

};
