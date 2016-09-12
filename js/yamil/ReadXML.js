
/* Creating Object to 'read' documents XML */
var ReadXML = {};

ReadXML.Open = function(_file)
{
    //console.log("File to be load " + _file);
    var mXML = new XMLHttpRequest();
    mXML.onreadystatechange = function()
    {
        //console.log(mXML.readyState, mXML.status);
        if(mXML.readyState === 4 && mXML.status === 200)
        {
            // Read XML
            //console.log(mXML);
            ReadXML.Process(mXML);
            return true;
        }
//        else
//        {
//            console.error("Error opening XML document");
//            return false;
//        }
    };
    mXML.open("GET", "xml/" + _file + ".xml", true);
    mXML.send();
};

ReadXML.Process = function(mXML)
{
    //console.log(mXML.responseXML);
    try
    {
        var tags = mXML.responseXML.getElementsByTagName("item")
        for(var item in tags)
        {
            if(item !== "length" && item !== "item" && item !== "namedItem" && item !== null)
            {
                var name = tags[item].getAttribute("name");
                var value = tags[item].getAttribute("value");        
                try
                {
                    //console.log(name, value);
                    document.getElementById(name).innerHTML = value;            
                }
                catch(e)
                {
                    console.warn(e);
                }
                finally
                {
                    //..
                }            
            }
        }        
    } 
    catch (e) 
    {
        console.error("Error geting XML language : " + e);
    }

};

/*ReadXML.Close = function()
{
    
};*/

ReadXML.Open("lang-en");
