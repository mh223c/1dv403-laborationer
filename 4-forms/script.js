"use strict";
var Validation = {
    
    init:function(){
    var button = document.querySelector("#singlebutton"); 


        var fornamnInput = document.querySelector("#Fornamn");
        var surnameInput = document.querySelector("#Efternamn");
        var zipCodeInput = document.querySelector("#Postnummer");
        var emailInput = document.querySelector("#Epost");
        
        var allowedName = /^[\ws*$åäöÅÄÖ][^0-9]/;
        var allowedPostalNumber = /^[0-9]{5}$|^[0-9]{3}-[0-9]{2}$|^[0-9]{3}\s[0-9]{2}$|^SE\d{5}$|^SE\s\d{5}$|^SE\d{3}-\d{2}$|^SE\d{3}\s\d{2}$|^SE\s[0-9]{3}\s[0-9]{2}$|^SE\s[0-9]{3}-\d{2}$/;
        var allowedEmail = /\S+@\S+\.\S+/;
        
        // Förnamn-validering
        
        fornamnInput.onblur = function(){
            var fornamnValue = document.querySelector("#Fornamn").value;
            var p = document.getElementById("fornamnFel");
            if(p.firstChild !== null){
                p.removeChild(p.firstChild);
            }
            
            if(allowedName.test(fornamnValue)){
                fornamnInput.style.background = "transparent";
                fornamnInput.style.borderColor="#66CD00";
                return true;
            }
            
            else{
                fornamnInput.style.background = "transparent";
                fornamnInput.style.borderColor="#FF3030";
                var text = document.createTextNode("Detta fält får inte lämnas tomt!");
                p.appendChild(text);
                return false;
            }
        };
        
        // Efternamn-validering
        
        surnameInput.onblur = function(){
            var surnameValue = document.querySelector("#Efternamn").value;
            var p = document.getElementById("efternamnFel");
            if(p.firstChild !== null){
                p.removeChild(p.firstChild);
            }
            
            if(allowedName.test(surnameValue)){
                surnameInput.style.background = "transparent";
                surnameInput.style.borderColor="#66CD00";
                return true;
            }
            else{
                surnameInput.style.background = "transparent";
                surnameInput.style.borderColor="#ff3030";
                var text = document.createTextNode("Detta fält får inte lämnas tomt!");
                p.appendChild(text);
                return false;
            }
        };
        
        // Postnummer-validering
        
        zipCodeInput.onblur = function(){
            var zipCodeValue = document.querySelector("#Postnummer").value;
            var p = document.getElementById("postnummerFel");
            if(p.firstChild !== null){
                p.removeChild(p.firstChild);
            }
            
            if(allowedPostalNumber.test(zipCodeValue)){
                zipCodeInput.style.background = "transparent";
                zipCodeInput.style.borderColor="#66CD00";
                return true;
            }
            else{
                zipCodeInput.style.background = "transparent";
                zipCodeInput.style.borderColor="#ff3030";
                var text = document.createTextNode("Detta fält får inte lämnas tomt!");
                p.appendChild(text);
                return false;
            }
        };
        
        // Email-validering
        
        emailInput.onblur = function(){
            var emailValue = document.querySelector("#Epost").value;
            var p = document.getElementById("emailFel");
            if(p.firstChild !== null){
                p.removeChild(p.firstChild);
            }
            
            if(allowedEmail.test(emailValue)){
                emailInput.style.background = "transparent";
                emailInput.style.borderColor="#66CD00";
                return true;
            }
            else{
                emailInput.style.background = "transparent";
                emailInput.style.borderColor="#ff3030";
                var text = document.createTextNode("Detta fält får inte lämnas tomt!");
                p.appendChild(text);
                return false;
            }
        };
        
        button.onclick = function(){

            if(fornamnInput.onblur() && surnameInput.onblur() && zipCodeInput.onblur() && emailInput.onblur()){
                
                var div = document.createElement("div");
                div.setAttribute("id", "popUp");
                var form = document.getElementById("form");
                form.appendChild(div);
                document.body.appendChild(form);


                // Förnamn utskrift
                
                var fornamnValue = document.querySelector("#Fornamn").value;
                var fornamnDiv = document.createElement("div");
                var fornamnP = document.createElement("p");
                fornamnDiv.appendChild(fornamnP);
                div.appendChild(fornamnDiv);
                fornamnP.appendChild(document.createTextNode("Förnamn: " + fornamnValue));
                
                // Efternamn utskrift

                var surnameValue = document.querySelector("#Efternamn").value;
                var surnameDiv = document.createElement("div");
                var surnameP = document.createElement("p");
                surnameDiv.appendChild(surnameP);
                div.appendChild(surnameDiv);
                surnameP.appendChild(document.createTextNode("Efternamn: " + surnameValue));
                
                // Postnummer utskrift
                
                var zipCodeValue = document.querySelector("#Postnummer").value;
                var zipCodeDiv = document.createElement("div");
                var zipCodeP = document.createElement("p");
                zipCodeDiv.appendChild(zipCodeP);
                div.appendChild(zipCodeDiv);
                zipCodeP.appendChild(document.createTextNode("Postnummer: " + zipCodeValue));
                
                // Email utskrift
                
                var emailValue = document.querySelector("#Epost").value;
                var emailDiv = document.createElement("div");
                var emailP = document.createElement("p");
                emailDiv.appendChild(emailP);
                div.appendChild(emailDiv);
                emailP.appendChild(document.createTextNode("Email: " + emailValue));
                
                // Rullgardin utskrift
                
                var rollDownValue = document.querySelector("#rullgardin").value;
                var rollDownDiv = document.createElement("div");
                var rollDownP = document.createElement("p");
                rollDownDiv.appendChild(rollDownP);
                div.appendChild(rollDownDiv);
                rollDownP.appendChild(document.createTextNode("Prismodell: " + rollDownValue));
                
                // Disable fält
                
                fornamnInput.setAttribute("disabled", false);
                surnameInput.setAttribute("disabled", false);
                zipCodeInput.setAttribute("disabled", false);
                emailInput.setAttribute("disabled", false);
                
                var button = document.createElement("button");
                var click = document.createTextNode("Skicka");
                button.setAttribute("id", "knappis");
                button.appendChild(click);
                div.appendChild(button);
                
                
                
                button.onclick = function(){
                    
                    // Enable fält
                    
                    fornamnInput.removeAttribute("disabled");
                    surnameInput.removeAttribute("disabled");
                    zipCodeInput.removeAttribute("disabled");
                    emailInput.removeAttribute("disabled");
                    button.removeAttribute("disabled");
                };
                
                var buttonTwo = document.createElement("button");
                var clickTwo = document.createTextNode("Avbryt");
                buttonTwo.setAttribute("id", "knappen");
                buttonTwo.appendChild(clickTwo);
                div.appendChild(buttonTwo);
                
                buttonTwo.onclick = function(){
                    
                    // Enable fält
                    
                    fornamnInput.removeAttribute("disabled");
                    surnameInput.removeAttribute("disabled");
                    zipCodeInput.removeAttribute("disabled");
                    emailInput.removeAttribute("disabled");
                    button.removeAttribute("disabled");
                    
                    form.removeChild(div);
                };
                
            }
            
            
        };
    },
};
window.onload = Validation.init;