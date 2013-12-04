"use strict";

window.onload = function(){

	// I denna funktion ska du skriva koden för att hantera "spelet"
	var convertString = function(str){
		// Plats för förändring.	
		
		// En tom sträng vi returnerar den konverterade strängen till.
		var letterString = "";
		
		// Räknar igenom strängen bokstav för bokstav.
		
		for(var i = 0; i < str.length; i += 1){
		var upperCaseLetter = str.charAt(i);
		var lowerCaseLetter = str.charAt(i);
		
		// Kollar om bokstaven är stor eller liten. 
		
		upperCaseLetter = upperCaseLetter == str.charAt(i).toUpperCase();
		lowerCaseLetter = lowerCaseLetter == str.charAt(i).toLowerCase();
		
		// Kollar om bokstaven är ett a || A och byter ut de med #.
		
		if(str.charAt(i) === "a" || str.charAt(i) === "A"){
		    letterString += "#";
		}
		
		else
		{
		    // Om det är en stor bokstav görs den om till en liten.
		    
		if(upperCaseLetter == true){
		    letterString += str.charAt(i).toLowerCase();
		}
		
		// Om det är en liten bokstav görs den om till en stor.
		
		if(lowerCaseLetter == true){
		    letterString += str.charAt(i).toUpperCase();
		}
		
	    }
	        
		}
		
		// Vid fel, kasta ett undantag med ett meddelande till användaren. 
	
        if (!isNaN(str * 1)){
            return["FEL! Måste mata in bokstäver."];
        }
		
		// Returnera den konverterade strängen.
		
		return letterString;
		
		
        





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
			var answer = convertString(input.value) // Läser in texten från textrutan och skickar till funktionen "convertString"
			p.innerHTML = answer;		// Skriver ut texten från arrayen som skapats i funktionen.	
		} catch (error){
			p.classList.add( "error"); // Växla CSS-klass, IE10+
			p.innerHTML = error.message;
		}
	
	});



};