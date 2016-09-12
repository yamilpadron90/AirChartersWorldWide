
var request = 
{
    'conter' : 1,
    'CreateObject' : function()
    {
        return {
            'id' : 0,
            'parm': {},
            'url': null,
            'method': 'GET',
            'response': null,
            'responseText': null,
            'responseXML' : null,
            'responseFunc': function()
            {
                
            },
            'async': true,
            'loaded' : false,
        };        
    },
};

request.Create = function()
{
    var myObject = request.CreateObject();
    myObject.id = request.conter;
    request.conter++;
    return myObject;
}

request.Start = function(myObject)
{
    
    var xmlhttp;
    if(window.XMLHttpRequest)
    {
        xmlhttp = new XMLHttpRequest();
    }
    else
    {
        xmlhttp = new ActiveXobject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function()
    {
        if(xmlhttp.readyState == 4 && xmlhttp.status == 200)
        {
            //alert("Load! " + xmlhttp.responseText);
            //console.log(xmlhttp);
            myObject.loaded = true;
            myObject.response = xmlhttp.responseText;
            myObject.responseText = xmlhttp.responseText;
            myObject.responseXML = xmlhttp.responseXML;
            myObject.responseFunc(xmlhttp.response);
        }
    };
    xmlhttp.timeout = 2000;
    xmlhttp.ontimeout = function()
    {
        console.warn("We still waiting for the request");
    }
    var myStr = "?&";
    for(var i in myObject.parm)
    {
        //console.log(myObject.parm[i], i);
        myStr += i + "=" + myObject.parm[i] + "&";
    }    
    //myStr = myStr.substr(0, myStr.length - 1);
    console.log("params " + myStr);
    if(myObject.method === 'GET')
    {
        xmlhttp.open("GET", myObject.url + myStr, myObject.async);    
        xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        xmlhttp.send(null);
    }
    if(myObject.method === 'POST')
    {
        xmlhttp.open("POST", myObject.url, myObject.async);
        xmlhttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
        //xmlhttp.setRequestHeader("Content-length", myStr.length);
        //xmlhttp.setRequestHeader("Connection", "close");
        xmlhttp.send(myStr);
    }    
    
};

/*var a = request.Create();
a.url = "js/yamil/session.php";
//a.url = "test.php";
a.method = 'GET';
a.responseFunc = function()
{
    console.log(a);
}
a.parm = 
{
    'type': 'SET',
    'id' : 'name',
    'data' : 'Yamil Rodriguez Padron'
}
request.Start(a);*/