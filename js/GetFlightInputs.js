
/* Get Resources from Flight */

var FormFlight = {
    'data': null,
    'c': 0,
    'InputList': new Array(),
    
    'GetInput': function(field){
        for(var item in field){
            //console.log(field[item].nodeName);
   
            if(field[item].nodeName === "INPUT"){
                //console.log(field[item].getAttribute("id"), field[item]);
                this.InputList[this.c++] = field[item];
            }

            if(field[item].nodeName !== undefined){
                if(field[item].childNodes.length > 0){
                    this.GetInput(field[item].childNodes);
                }
            }                
        }
    },
    
    'Load': function(){
        var errorFound = false;
        if(this.data === null){
            this.data = document.getElementById("FormFlight");
        }
        this.GetInput(this.data.childNodes);
        console.log("#===========================#");
        for(var item in this.InputList){
            /*console.log(this.InputList[item].getAttribute("id"), 
                            this.InputList[item].getAttribute("type"),
                                this.InputList[item].getAttribute("class"));*/
            /*if(this.InputList[item].getAttribute("id") === "cf0"){
                console.log(this.InputList[item].checked);
            }*/
            if(this.InputList[item].getAttribute("class") === "ob" &&
                    this.InputList[item].value.length === 0){
                console.log("Error in ", this.InputList[item].getAttribute("id"));
                this.InputList[item].style.backgroundColor = 'yellow';
                errorFound = true;
            }
            if(this.InputList[item].getAttribute("class") === "ob" &&
                    this.InputList[item].value.length > 0){
                console.log("Error in ", this.InputList[item].getAttribute("id"));
                this.InputList[item].style.backgroundColor = 'white';
            }                       
            if(this.InputList[item].getAttribute("id") === "date1" &&
                this.InputList[item].value.length === 0){
                this.InputList[item].style.backgroundColor = 'yellow';
                errorFound = true;
            } 
            if(this.InputList[item].getAttribute("id") === "date1" &&
                this.InputList[item].value.length > 0){
                this.InputList[item].style.backgroundColor = 'white';
            }             
        }
        return errorFound;
    },
    
    'CleanInputs': function(){
        if(this.data === null){
            this.data = document.getElementById("FormFlight");
        }
        this.GetInput(this.data.childNodes);
        console.log("#===========================#");
        for(var item in this.InputList){
            if(this.InputList[item].getAttribute("type") === "checkbox"){
                this.InputList[item].checked = false;
            }
            if(this.InputList[item].getAttribute("type") === "text"){
                this.InputList[item].value = "";
            }
            if(this.InputList[item].style.backgroundColor === "yellow"){
                this.InputList[item].style.backgroundColor = "white";
            }
        }        
    },
    
};

