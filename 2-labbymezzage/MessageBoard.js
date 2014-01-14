"use strict";

var MessageBoard = {

messages: [],

init:function(e){
    var button = document.querySelector("#button");
    button.onclick = MessageBoard.newMessage;
    
    document.getElementById("textruta").onkeypress = function(e){
      if(!e){
         e = window.event;
      }
      
      if(e.keyCode == 13 && !e.shiftKey){
          MessageBoard.newMessage();
          return false;
      }
      
    };
    
},


newMessage:function(){
    var inputText = document.querySelector("#textarea").value;    
    var mess = new Message(inputText, new Date());    
    MessageBoard.messages.push(mess);    
    console.log(mess);
    console.log(MessageBoard.messages[0].getHTMLText());
    MessageBoard.renderMessages();
    },
    
renderMessages: function(){

    document.getElementById("messages").innerHTML = "";
    

    for(var i=0; i < MessageBoard.messages.length; i += 1){
        document.getElementById("counter").innerHTML = "";
        MessageBoard.renderMessage(i);
        
    }
},

renderMessage: function(messageID){
    var counter = 0;
    for(var j = 0; j < MessageBoard.messages.length; j += 1){
        counter += 1;
    }
    
    var counterDiv = document.getElementById("counter");
    var messageDiv = document.getElementById("messages");
    var text = document.createElement("div");
    var imageShow = document.createElement("img");
    var imageDelete = document.createElement("img");
    
    imageShow.setAttribute("src", "Untitled.jpg");
    imageDelete.setAttribute("src", "Ta bort.jpg");
    messageDiv.appendChild(text);
    
    
    var textp = document.createElement("p");
    var textpe = document.createTextNode(MessageBoard.messages[messageID].getTimeText());
    var numberOfMessages = document.createTextNode("Antal meddelanden: "+counter+" ");
    textp.innerHTML = MessageBoard.messages[messageID].getHTMLText();
    
    text.appendChild(textp);
    text.appendChild(textpe);
    text.appendChild(imageShow);
    text.appendChild(imageDelete);
    counterDiv.appendChild(numberOfMessages);
    
    imageShow.onclick = function(){
        alert(MessageBoard.messages[messageID].getDateText());
    };
    
    imageDelete.onclick = function(){
        MessageBoard.removeMessage(messageID);
    };
    
    
    
    
},

removeMessage: function(messageID){
    if(confirm("Är du säker på att du vill ta bort?")){
            MessageBoard.messages.splice(messageID, 1);
            MessageBoard.renderMessages();
        }
}

    

    
};
window.onload = MessageBoard.init;