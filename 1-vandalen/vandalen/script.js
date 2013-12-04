"use strict";

var makePerson = function(persArr) {
   
   
   
   var names = [];
   var ages = [];
   var ageSum = 0;
   
   // For-loop som loopar igenom objekten i arrayen som innehåller namn och ålder.
   
   for(var i = 0; i < persArr.length; i += 1){
       
    names.push(persArr[i].name);
    ages.push(persArr[i].age);
    ageSum += ages[i];
    
   }
   
   // Sorterar Å, Ä, Ö
   
   names.sort(function(a,b){
       return a.localeCompare(b);
   });
   ages.sort();
   
    // Deklarerar variabler för min/max/average age och beräknar respektive ålder. 
   
    var minAge = Math.min.apply(Math, ages); 
    var maxAge = Math.max.apply(Math, ages);
    var averageAge = Math.round(ageSum / persArr.length);

    // Deklarerar variabeln som används för utskrivning. 

    var result = {
        names:  names.join(", "),
        minAge:   minAge,
        maxAge:   maxAge,
        averageAge: averageAge
    };
    
    
    
    return result;
   
};
