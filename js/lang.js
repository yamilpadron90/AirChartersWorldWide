
/* Event to handle the website's language */

Session.Get("lang", function(e)
{
    //console.log(e);
    //console.log(navigator.language);
});

/*if(Session.Check("lang") === "1")
{
    console.log("intro");
    ReadXML.Open("lang-" + Session.Get("lang"));
}*/

document.getElementById("English").addEventListener("click", function(e)
{
    ReadXML.Open("lang-en");
    Session.Set("lang", "en");
    //Session.Get("lang");
}, true);

document.getElementById("Spanish").addEventListener("click", function(e)
{
    ReadXML.Open("lang-es");
    Session.Set("lang", "es");
    //Session.Get("lang");
}, true);