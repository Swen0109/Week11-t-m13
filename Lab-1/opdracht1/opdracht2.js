var hoeveelnamen = prompt("Hoeveel namen wilt u in de array stoppen? (Minimaal 3)")
if(hoeveelnamen >=3){
	var welkenamen=prompt("Welke namen wilt u toevoegen?")
	document.write(welkenamen)
}


else if(hoeveelnamen <3){
	alert("U moet minimaal 3 namen invullen")
}
