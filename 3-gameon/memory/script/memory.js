"use strict";
var Memory = {
    
    random: [],
    picArray: [],
    
    rows: 4,
    cols: 4,
    
    lastGuess: -1,
    numberOfGuesses: 0,
    
    correctFlip: 0,
    
    init:function(){
    
    var i;
    
    var newRandom = new RandomGenerator.getPictureArray(Memory.rows, Memory.cols);
    Memory.random.push(newRandom);
    
    for(i = 0; i < newRandom.length; i++){
                var picture = "../pics/"+newRandom[i]+".png";
                Memory.picArray.push(picture);
            }
    
    console.log(Memory.random[0]);
    
    Memory.table(Memory.rows, Memory.cols);
    
    },
    
    table:function(rows, cols){
        var tablee = document.createElement("table");
        var counter = 0;
        
        for(var i = 0; i < rows; i++){
            var row = document.createElement("tr");
            
            for(var j = 0; j < cols; j++){
                
                row.appendChild(Memory.onclick(counter));
                counter ++;
            }
            
            tablee.appendChild(row);
            
        }
        var div = document.getElementById("diven");
        div.appendChild(tablee);
        
    },
    
    onclick:function(counter){
        
            var col = document.createElement("td");
            var pic = document.createElement("img");
            pic.setAttribute("src", "../pics/0.png");
            pic.setAttribute("id", counter);
                    
            var a = document.createElement("a");
            a.setAttribute("href", "#");
            a.appendChild(pic);
            col.appendChild(a);
            
           
            
            a.onclick = function(){
                if(pic.getAttribute("src") == "../pics/0.png"){
                pic.setAttribute("src", Memory.picArray[counter]);
                Memory.alike(counter);
            }
            
            
        };
        
         return col;
    },
    
    alike:function(index){
        if(Memory.lastGuess >= 0 && Memory.lastGuess != index){
            
            var victory = Memory.rows * Memory.cols / 2;
            if(Memory.picArray[Memory.lastGuess] != Memory.picArray[index]){
                Memory.flip(index, Memory.lastGuess);
                
            }
            
            if(Memory.picArray[Memory.lastGuess] == Memory.picArray[index]){
                Memory.correctFlip += 1;
                console.log("ajdhsglkjsad" + Memory.correctFlip);
                
            }
            
            Memory.lastGuess = -1;
            Memory.numberOfGuesses += 1;

        }
        
        else{
            Memory.lastGuess = index;
        }
        
    },
    
    flip:function(picOne, picTwo){
        setTimeout(function() {
            document.getElementById(picOne).setAttribute("src", "../pics/0.png");
            document.getElementById(picTwo).setAttribute("src", "../pics/0.png");
        }, 500);
    }

};
window.onload = Memory.init;