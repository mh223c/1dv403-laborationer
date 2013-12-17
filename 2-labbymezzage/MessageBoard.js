"use strict";

var MessageBoard = {

messages: [],

init:function(e){
    alert("Heller");
    
    var mess = new Message("Testmeddelande", new Date());
    alert(mess);
    alert(mess.getText());
    mess.setText("En annan text");
    alert(mess);
    
    }
};

 window.onload = MessageBoard.messages[2].getText();