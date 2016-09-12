
var menuFixed = null;
document.onscroll = function(e){
    e.preventDefault();
    
    if(menuFixed === null)
        menuFixed = document.getElementsByClassName("MenuFixed")[0];
    
    //console.log(window.scrollY);
    if(window.scrollY > 300){
        menuFixed.style.visibility = "visible";
    }else{
        menuFixed.style.visibility = "hidden";
    }
};