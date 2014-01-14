"use strict";
var Validation = {
    
    init:function(){
    var button = document.querySelector("#singlebutton"); 
    button.setAttribute("type", "submit");
    }
    
};
window.onload = Validation.init;