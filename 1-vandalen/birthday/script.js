"use strict";

window.onload = function(){

	
	var birthday = function(date){  
	    
	    // Skapar ny variabel som delar upp strängen YYYY/DD/MM i olika delar med hjälp av "-"
	    
        var datearray = date.split("-");
        
        // Om det inmatade inte är ett nummer kastas ett undantag och ett felmeddelande visas. 
        
        if(isNaN(datearray[0]) || isNaN(datearray[1]) || isNaN(datearray[2])){
        throw new Error("FEL! Fyll i när du fyller år.");
        }
	    
	    
	    // Skapar en variabel för dagens datum och en variabel för det inmatade datumet. 
	    
	    var birthday = new Date(date+"T23:59:59");
        var todaysDate = new Date();
        
        // Om det inmatade datumet är större än dagens datum kastas ett undantag och ett felmeddelande visas. 
        
        if(birthday.getTime() > todaysDate.getTime()){
           throw new Error("FEL! Du kan ej vara född i framtiden.");
        }
        
        // Sätter så att birthday alltid får det året som är nu
        // eftersom vi vill att det ska stå under 365 dagar kvar
        // till födelsedagen.

        birthday.setFullYear(todaysDate.getFullYear());

        
    
        if(birthday.getTime() < todaysDate.getTime()){
            birthday.setFullYear(todaysDate.getFullYear() + 1);
        }
        
        // Antalet millisekunder på en dag. 
        
        var milliDay = 86400000;
        
        // Uträkning av antalet millisekunder mellan födelsedagen och dagens datum. 
        
        var result = Math.floor((birthday.getTime() - todaysDate.getTime()) / milliDay);
        
        return result;
        
            

	};
	// ------------------------------------------------------------------------------


	// Kod för att hantera utskrift och inmatning. Denna ska du inte behöva förändra
	var p = document.querySelector("#value"); // Referens till DOM-noden med id="#value"
	var input = document.querySelector("#string");
	var submit = document.querySelector("#send");

	// Vi kopplar en eventhanterare till formulärets skickaknapp som kör en anonym funktion.
	submit.addEventListener("click", function(e){
		e.preventDefault(); // Hindra formuläret från att skickas till servern. Vi hanterar allt på klienten.

		p.classList.remove( "error");

		try {
			var answer = birthday(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			var message;
			switch (answer){
				case 0: message = "Grattis på födelsedagen!";
					break;
				case 1: message = "Du fyller år imorgon!";
					break;
				default: message = "Du fyller år om " + answer + " dagar";
					break;
			}

			p.innerHTML = message;
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};