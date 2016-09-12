
var transition = {
    'div': null,
    'listImages': new Array(),
    'time': 5,
    'folder': null,
    'format': 'jpg',
    'folder': 'pass',
    'Interval': null,
    'number': 0,
    'elem': null,
    
    /*'Ping': function(file){
        window.location('pass/' + )
        return false;
    },*/
    
    'Start': function(){
        if(this.div === null){
            this.div = document.getElementById(this.elem);
        }
        
        /* Get List of User */
        for (i = 0; i < this.number; i++) {
            this.listImages[i] = this.folder + '/' + '0' + i.toString() + '.' + this.format;
        }
        
        this.Core();
    },
    
    'Core': function(){
        /*for(var i in this.listImages)
            console.log(this.listImages[i]);*/
        //console.log(this.div);
        
        this.div.style.backgroundImage = "url('"+ this.listImages[0] +"')";
        var size = 100;
        var c = 1;
        var animation = null;
        var ourDiv = null;
        this.Interval = setInterval(function(){
            //console.log(transition.listImages[c]);
            
            if(ourDiv === null)
                ourDiv = document.getElementById(transition.elem);
            
            ourDiv.style.backgroundImage = "url('"+ transition.listImages[c] +"')";
            if(c === (transition.number - 1))
                c = 0;
            else
                c++;
            /* Animation */
            size = 100;
            clearInterval(animation);
            animation = setInterval(function(){
                size += 0.1;
                ourDiv.style.backgroundSize = size.toString() + '%';
            }, 10);
            
        }, this.time * 1000);
    }
    
};