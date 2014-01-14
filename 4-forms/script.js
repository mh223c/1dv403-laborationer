"use strict";
var Validation = {
    
    init:function(){
    var button = document.querySelector("#singlebutton"); 
    button.setAttribute("type", "submit");
    
        
        var fornamnInput = document.querySelector("#Fornamn");
        var surnameInput = document.querySelector("#Efternamn");
        var zipCodeInput = document.querySelector("#Postnummer");
        
        var allowedName = /^[\ws*$åäöÅÄÖ][^0-9]/;
        var allowedPostalNumber = /^[0-9]{5}$|^[0-9]{3}-[0-9]{2}$|^[0-9]{3}\s[0-9]{2}$|^SE\d{5}$|^SE\s\d{5}$|^SE\d{3}-\d{2}$|^SE\d{3}\s\d{2}$|^SE\s[0-9]{3}\s[0-9]{2}$|^SE\s[0-9]{3}-\d{2}$/;
        var allowedEmail = /\S+@\S+\.\S+/;
        
        
        
        fornamnInput.onblur = function(){
            var fornamnValue = document.querySelector("#Fornamn").value;
            
            if(allowedName.test(fornamnValue)){
                fornamnInput.style.background = "transparent";
                fornamnInput.style.borderColor="#66CD00";
            }
            else{
                fornamnInput.style.background = "transparent";
                fornamnInput.style.borderColor="#FF3030";
            }
        };
        
        
        surnameInput.onblur = function(){
            var surnameValue = document.querySelector("#Efternamn").value;
            
            if(allowedName.test(surnameValue)){
                surnameInput.style.background = "transparent";
                surnameInput.style.borderColor="#66CD00";
            }
            else{
                surnameInput.style.background = "transparent";
                surnameInput.style.borderColor="#ff3030";
            }
        };
        
        zipCodeInput.onblur = function(){
            var zipCodeValue = document.querySelector("#Postnummer").value;
            
            if(allowedPostalNumber.test(zipCodeValue)){
                zipCodeInput.style.background = "transparent";
                zipCodeInput.style.borderColor="#66CD00";
            }
            else{
                zipCodeInput.style.background = "transparent";
                zipCodeInput.style.borderColor="#ff3030";
            }
        };
        
    },
    
    
    
};
window.onload = Validation.init;