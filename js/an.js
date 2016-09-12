/*transition.number = 3;
transition.elem = 'myVideo';
transition.Start();*/

yamil.Create();

yamil.AddMenu("Charter Quote Request Form", function()
{
    console.log("Charter Quote Request Form");
    yamilform.panel.Show("FormFlight");
    window.scrollTo(0, 0);
});

yamil.AddMenu("Contact", function()
{
    console.log("Contact");
    yamilform.panel.Show("FormContactUs");
});

document.getElementById("XMLMenuReserveFlight").addEventListener("click", function(e)
{
    yamilform.panel.Show("FormFlight");  
    window.scrollTo(0, 0);
});

document.getElementById("XMLMenuContact").addEventListener("click", function(e)
{
    yamilform.panel.Show("FormContactUs");
});

document.getElementById("XMLMenuReserveFlight1").addEventListener("click", function(e)
{
    yamilform.panel.Show("FormFlight");  
    window.scrollTo(0, 0);
});

document.getElementById("XMLMenuContact1").addEventListener("click", function(e)
{
    yamilform.panel.Show("FormContactUs");
});

/* Contact Form */

document.getElementById("contButtonSendRequest").addEventListener("click", function(e)
{
    if(FormContact.Load())
    {
        message.ShowError("Please complete the empty and yellow fields!", 4);
    }
    else
    {
        var a = request.Create();
        a.url = "js/php/mail/mail.php";
        a.method = 'POST';
        a.responseFunc = function(response)
        {
            console.log(a);
            FormContact.CleanInputs();
            yamilform.panel.Hide("FormContactUs");
            console.log(response);
        };
        a.parm = 
        {
            'title': "FromContactUs",
            'message': FormContact.data.innerHTML
        };
        request.Start(a);        
    }

});

document.getElementById("contCancel").addEventListener("click", function(e)
{
    yamilform.panel.Hide("FormContactUs");    
});

/* End Contact Form */

/* Flight Form */

/* Variables */

var FlightsTable = document.getElementById("FlightsTable");
var AddFlight = document.getElementById("AddFlight");
var flightConter = 3;

function CheckNumber(f)
{
    for (n = 0; n < 10; n++) 
    {
        if (f == n) 
        {
            return true;
        }            
    }    
    return false;
};

document.getElementById("SendRequestBtn").addEventListener("click", function(e){
    if(FormFlight.Load()){
        message.ShowError("Please complete the empty and yellow fields!", 4);
    }else{
        var a = request.Create();
        a.url = "js/php/mail/mail.php";
        a.method = 'POST';
        a.responseFunc = function(response)
        {
            console.log(a);
            FormFlight.CleanInputs();
            yamilform.panel.Hide("FormFlight");            
        };
        a.parm = 
        {
            'title': 'FromCharterForm',
            'message': FormFlight.data.innerHTML
        };
        request.Start(a); 
    }
});

document.getElementById("flightPassengersNumber").addEventListener("keyup", function(e)
{
    for (i = 0; i < this.value.length; i++) 
    {
        if(CheckNumber(this.value[i]) === false)
        {
            this.value = 0;
            message.ShowWarning("Please just numbers", 4);
            this.focus;
        }
    }
    //console.log(this.value);
});

AddFlight.addEventListener("click", function(e)
{
    console.log("My lang is " + Session.Get("lang"));
    var newRow = "";
    newRow += "<tr class='row"+flightConter+"'>";
        newRow += "<td>LEG "+ flightConter +" - Departure City :</td>";
        newRow += "<td>Arrival City :</td>";
        newRow += "<td>Departure Date :</td>";
        newRow += "<td>Est. Departure Time :</td>";
    newRow += "</tr>";
    newRow += "<tr class='row"+flightConter+"'>";
        newRow += "<td><input type='text' id='departure"+flightConter+"' /></td>";
        newRow += "<td><input type='text' id='arrival"+flightConter+"' /></td>";
        newRow += "<td><input type='text' id='date"+flightConter+"' class='flightDate' /></td>";
        newRow += "<td>";
            newRow += "<select>";
                newRow += "<option value='00:00'>00:00</option>";
                newRow += "<option value='01:00'>01:00</option>";
                newRow += "<option value='02:00'>02:00</option>";
                newRow += "<option value='03:00'>03:00</option>";
                newRow += "<option value='04:00'>04:00</option>";
                newRow += "<option value='05:00'>05:00</option>";
                newRow += "<option value='06:00'>06:00</option>";
                newRow += "<option value='07:00'>07:00</option>";
                newRow += "<option value='08:00'>08:00</option>";
                newRow += "<option value='09:00'>09:00</option>";
                newRow += "<option value='10:00'>10:00</option>";
                newRow += "<option value='11:00'>11:00</option>";
                newRow += "<option value='12:00'>12:00</option>";
                newRow += "<option value='13:00'>13:00</option>";
                newRow += "<option value='14:00'>14:00</option>";
                newRow += "<option value='15:00'>15:00</option>";
                newRow += "<option value='16:00'>16:00</option>";
                newRow += "<option value='17:00'>17:00</option>";
                newRow += "<option value='18:00'>18:00</option>";
                newRow += "<option value='19:00'>19:00</option>";
                newRow += "<option value='20:00'>20:00</option>";
                newRow += "<option value='21:00'>21:00</option>";
                newRow += "<option value='22:00'>22:00</option>";
                newRow += "<option value='23:00'>23:00</option>";
                newRow += "<option value='24:00'>24:00</option>";
            newRow += "</select>";
        newRow += "</td>";
        newRow += "<td>";
            newRow += "<button onclick='DeleteRow("+flightConter+")'>Delete</button>";
        newRow += "</td>";
    newRow += "</tr>";
    FlightsTable.innerHTML += newRow;
    flightConter++;
    delete newRow;
    $(document).ready(function()
    {
        //console.log("Hellow world from jquery");
        $(".flightDate").datepicker();
    });
}, true);

function DeleteRow(id){
    var list = document.getElementsByClassName("row"+id);
    var myArray = [];
    for(var item in list){
        if(item !== "length" && item !== "item" && item !== "namedItem"){
            //console.log(item);
            //console.log(list[item]);          
            myArray.push(list[item]);
            //list[item].parentNode.removeChild(list[item]);
        }
    }
    for(var item in myArray)
        myArray[item].parentNode.removeChild(myArray[item]);
};

/* End Flight Form */

//yamilVAL.AddAlert("contName", "Empty field");
//yamilVAL.AddAlert("contCompany", "Empty field");
//yamilVAL.AddAlert("contMemo", "Empty field");





