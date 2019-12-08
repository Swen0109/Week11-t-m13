var desleutel=false;
function starthetspel(){
document.getElementById('title').innerText="De brief";
document.body.style.backgroundSize="cover";
document.body.style.backgroundImage="url(afbeeldingen/vakantiehuis2.jpg)";
document.getElementById('description').innerText="Welkom. Druk op Start om het spel te beginnen of op Informatie voor uitleg over het spel.";
document.getElementById('button1').innerText="start"
document.getElementById('button2').innerText="informatie"
document.getElementById('button2').onclick=beginmethetspel;
document.getElementById('inventoryItem').style.display="none";
return(desleutel);
}
function beginmethetspel(){
	document.getElementById("button2").style.display = "none";
	document.getElementById('button1').innerText="terug";
	document.getElementById('button1').onclick= refresh;
	document.getElementById('description').innerText="Je gaat dalijk een advandture game spelen, het doel is de game te overleven en er met de prijs van door te gaan. Je komt onderweg verschillende obstakels tegen die je te slim af moet zijn om door te kunnen. Tijdens het spel heb je ook de mogelijkheid het spel te stoppen als je wilt. Tijdens het spel kan je verschillende voorwerpen tegen komen, zorg dat je deze meeneemd deze kunnen later nog van pas komen. Ik wens u veel plezier met het spelen van mijn spel. Succes!";
	document.getElementById('inventoryItem').style.display="none";
	return(desleutel);
}
	document.getElementById('button1').onclick=start;

function start(){
	document.getElementById('button2').innerText="nee";
	document.getElementById('button1').innerText="ja";
	document.getElementById('description').innerText="Je bent op vakantie in Spanje. Je hebt een huis gehuurd waar je in verblijft. Het huis is een villa met alles er op en er aan. Op een vrijdagavond krijg je een vreemde brief door de brievenbus waar op staat dat er een prijs verborgen ligt op een strand redelijk dicht bij het huis. Je leest de brief door en het lijkt je leuk om te doen. Ben je bereid dit avontuur aan te gaan?";
	document.getElementById('button1').onclick=begin;
	document.getElementById('button2').onclick=gestopt;
	document.getElementById('inventoryItem').style.display="none";
	return(desleutel);
}

function begin(){
	document.getElementById('button2').innerText="Auto";
	document.getElementById('button1').innerText="Metro";
	document.getElementById('description').innerText="Je besluit dus om te gaan. De locatie is niet aan te lopen dus je moet beslissen. Er zijn twee mogelijkheden om bij de locatie te komen. Met de gehuurde auto of met de metro. Wat kies je? Ga je met de metro of met de auto?"
	document.getElementById('button2').onclick=auto;
	document.getElementById('button1').onclick=metro;	
	document.getElementById('inventoryItem').style.display="none";
	return(desleutel);
}

function auto(){
	document.getElementById('button2').innerText="Verder";
	document.getElementById('description').innerText="Je gaat er met de auto naar toe. Het is ondertussen 22.00 en je komt aan om 23.30. Het is ondetussen al donker en je komt aan op de locatie. De locatie komt uit op een strand. "
	document.body.style.backgroundImage="url(afbeeldingen/huurauto.jpg)";
	document.getElementById('button2').onclick=door;
	document.getElementById('button1').style.display="none";
	document.getElementById('inventoryItem').style.display="none";
	return(desleutel);
}
function metro(){
	document.getElementById('button2').style.margin="0px 0px 100px -70px";
	document.getElementById('button2').innerText="Verder";
	document.getElementById('description').innerText="Je gaat er met de metro naar toe. Het is ondertussen 22.00 en je komt aan om 23.30. Je loopt naar de locatie. De locatie komt uit op het strand. Het is al donker geworden.";
	document.body.style.backgroundImage="url(afbeeldingen/metro.jpg)";
	document.getElementById('button2').onclick=door;
	document.getElementById('button1').style.display="none";
	document.getElementById('inventoryItem').style.display="none";
	return(desleutel);
}

function door(){
	document.getElementById('button2').style.margin="0px 0px 100px 0px";
	document.getElementById('button2').innerText="De grot in";
	document.getElementById('button1').innerText="Verder lopen";
	document.getElementById('button1').style.display="inline";
	document.body.style.backgroundImage="url(afbeeldingen/strand.jpg)";
	document.getElementById('description').innerText="Je bent aangekomen op het strand. Je ziet niks opvallends behalve een lichtje in de verte. Je loopt er heen. Na een tijdje kom je aan bij het licht. Er is een grote ingang dat lijdt naar een grot. Ga je er in of ga je verder zoeken?";
	document.getElementById('button2').onclick=grot;
	document.getElementById('button1').onclick=verderlopen;
	return(desleutel);
}

function verderlopen(){
	document.body.style.backgroundImage="url(afbeeldingen/strand2.jpg)";
	document.getElementById('description').innerText="Je besluit verder te zoeken. Na een tijdje zoeken heb je nog niks gevonden. Je komt aan bij een bos. Je kan kiezen ga je terug naar de grot of ga je het bos in?";
	document.getElementById('button1').innerText="Terug";	
	document.getElementById('button2').innerText="Het bos in";
	document.getElementById('button1').onclick=grot;
	document.getElementById('button2').onclick=hetbos;	
	return(desleutel);
}

function hetbos(){
	document.body.style.backgroundImage="url(afbeeldingen/bos.jpg)";
	document.getElementById('description').innerText="Na een tijdje lopen neem je even pauze. Je pakt je drinkfles en je voelt opeens een pijnlijk gevoel in je nek. Je bent gebeten door een giftige slang. Je hebt een uur om tegengif te krijgen anders ga je dood. Wat doe je? Opgeven of naar het dorp bij het strand.";
	document.getElementById('button1').innerText="Opgeven";
	document.getElementById('button2').innerText="Naar het dorp";
	document.getElementById('button1').onclick=gestopt2;
	document.getElementById('button2').onclick=dorp;
}

function dorp(){
	document.body.style.backgroundImage="url(afbeeldingen/dorp.jpg)";
	document.getElementById('description').innerText="Je bent aangekomen bij het dorp. Wat doe je? Ga je naar een restaurant of naar huizen?";
	document.getElementById('button1').innerText="Restaurant";
	document.getElementById('button2').innerText="Huizen";
	document.getElementById('button1').onclick=gestopt2;
	document.getElementById('button2').onclick=gered;
}

function gered(){
	document.body.style.backgroundImage="url(afbeeldingen/dorp.jpg)";
	document.getElementById('description').innerText="Je bent bij een huis aangekomen, er word open gedaan door een mevrouw die dokter is. Ze heeft het tegengif en geeft het je. Je bent gered. Wat wil je doen? Alsnog naar de grot gaan of stoppen met het spel?";
	document.getElementById('button1').innerText="Naar de grot";
	document.getElementById('button2').innerText="Opgeven";
	document.getElementById('button1').onclick=grot;
	document.getElementById('button2').onclick=gestopt;
}

function gestopt2(){
	document.getElementById('description').innerText="Je kwam bij het restaurant aan maar ze hadden geen tegengif. Je bent te laat voor het innemen van het tegengif je bent gestorven.";
	document.getElementById('button1').style.display="none";
	document.getElementById('button2').innerText="Restart";
	document.getElementById('button2').onclick=refresh;
	document.body.style.backgroundImage="url(afbeeldingen/Game-Over.jpg)";
	return(desleutel);
}

function grot(){
	document.getElementById('description').innerText="Je gaat de grot in. De grot is erg donker. Zoek iets waarmee je de grot kan verlichten.De grot loopt verder naar beneden, het word steeds kouder in de grot. Op gegeven moment kom je bij een grote kamer waar je naar binnen kan. Je kan kiezen of je gaat de kamer in of je gaat terug naar het huis.";
	document.body.style.backgroundImage="url(afbeeldingen/Grot.png";
	var zaklamp=document.createElement("img");
	zaklamp.src= "afbeeldingen/zaklamp.png";
	zaklamp.id = "zaklamp";
	zaklamp.onclick=grot2;
	document.body.appendChild(zaklamp);
	document.getElementById('button1').style.display="none";
	document.getElementById('button2').style.display="none";
	return(desleutel);
}

function grot2(){
	document.body.style.backgroundImage="url(afbeeldingen/Grot3.png)";
	document.getElementById('zaklamp').style.display="none";
	document.getElementById('button1').style.display="inline";
	document.getElementById('button2').style.display="inline";
	document.getElementById('button1').innerText="De kamer in.";
	document.getElementById('button2').innerText="Opgeven.";
	document.getElementById('button2').onclick=gestopt;
	document.getElementById('button1').onclick=indegrot;
	return(desleutel);
}

function indegrot(){
	document.body.style.backgroundImage="url(afbeeldingen/escape.jpg)";
	document.getElementById('description').innerText="Je gaat de kamer in en de deur slaat achter je dicht. Je zit vast in de kamer. Er komt een scherm naar beneden met een timer er op. Je hebt 1 uur om uit de kamer te komen. Je besluit zo snel mogelijk aanwijzingen te zoeken. Om de volgende kamer te openen moet je een code oplossen. In de kamer liggen verschillende letters verstopt vind ze binnen de tijd en je bent bevrijd. Als je alle letters hebt, klik dan op het woord en je krijgt de sleutel naar buiten.";
	var k=document.createElement("img");
	k.src= "afbeeldingen/k.jpg";
	k.id = "k";
	k.onclick=woord
	document.body.appendChild(k);
	var e=document.createElement("img");
	e.src= "afbeeldingen/e.jpg";
	e.id = "e";
	e.onclick=woord2
	document.body.appendChild(e);
	var y=document.createElement("img");
	y.src= "afbeeldingen/y.jpg";
	y.id = "y";
	y.onclick=woord3
	document.body.appendChild(y);
	var lingo=document.createElement("img");
	lingo.src= "afbeeldingen/lingo.jpg";
	lingo.id = "key";
	document.body.appendChild(lingo);
	document.getElementById('button1').style.display="none";
	document.getElementById('button2').style.display="none";
	lingo.onclick=sleutel;
	return(desleutel);
}

function woord(){
	document.getElementById('k').style.margin="500px 0px 0px 290px";
	return(desleutel);
}

function woord2(){
	document.getElementById('e').style.margin="165px 0px 0px -445px";
	return(desleutel);
}

function woord3(){
	document.getElementById('y').style.margin="20px 0px 0px -720px";
	return(desleutel);
}

function sleutel(){
	var sleutel=document.createElement("img");
	sleutel.src= "afbeeldingen/sleutel.png";
	sleutel.id = "sleutel";
	document.body.appendChild(sleutel);
	document.getElementById('sleutel').onclick=uitdekamer;
	return(desleutel);
}

function uitdekamer(){
	document.body.style.backgroundImage="url(afbeeldingen/Uitdegrot.jpg";
	document.getElementById('sleutel').style.display="none";
	document.getElementById('key').style.display="none";
	document.getElementById('k').style.display="none";
	document.getElementById('e').style.display="none";
	document.getElementById('y').style.display="none";
	document.getElementById('description').innerText="Je bent de grot uit. Er ligt een briefje ergens in de uitgang van de grot. Vind deze en je kan door met het spel.";
	var notitie=document.createElement("img");
	notitie.src= "afbeeldingen/notitie.png";
	notitie.id = "notitie";
	document.body.appendChild(notitie);
	document.getElementById('notitie').onclick=strand;
	return(desleutel);
}

function strand(){
	document.body.style.backgroundImage="url(afbeeldingen/strand3.jpg";
	document.getElementById('notitie').style.display="none";
	document.getElementById('description').innerText="Je hebt de notitie. Het is ondertussen weer dag geworden en je en je hebt de volgende locatie. Je zoekt op waar de locatie is en het ligt in het bos recht voor je.";
	document.getElementById('button1').style.display="inline";
	document.getElementById('button2').style.display="inline";
	document.getElementById('button1').innerText="Het bos in";
	document.getElementById('button2').innerText="Opgeven";
	document.getElementById('button2').onclick=gestopt;
	document.getElementById('button1').onclick=bos;
	return(desleutel);
}

function bos(){
	document.body.style.backgroundImage="url(afbeeldingen/bos.jpg)";
	document.getElementById('description').innerText="Je bent in het bos aangekomen en je loopt naar de locatie. Na een tijdje lopen kom je op de locatie aan. Je ziet een oud bruin huis.";
	document.getElementById('button1').style.display="inline";
	document.getElementById('button1').innerText="verder";
	document.getElementById('button1').onclick=naarhethuis;
	document.getElementById('button2').style.display="none";
	var sleutelBedel1=document.createElement("img");
	sleutelBedel1.src= "afbeeldingen/Sleutel-bedel.png";
	sleutelBedel1.id = "sleutelBedel";
	document.body.appendChild(sleutelBedel1);
	document.getElementById('sleutelBedel').onclick=verdwijn;
	return(desleutel);
}


function verdwijn(){
	document.getElementById('sleutelBedel').style.display='none';
	desleutel=true;
}
function naarhethuis(){
	document.getElementById('sleutelBedel').style.display="none";
	document.body.style.backgroundImage="url(afbeeldingen/huis.jpg)";
	document.getElementById('description').innerText="Je gaat er naar binnen.";
	document.getElementById('button1').onclick=inhethuis;
	return(desleutel);
}

function inhethuis(){
	document.body.style.backgroundImage="url(afbeeldingen/hut.jpg)";
	document.getElementById('description').innerText="Je bent binnen en je ziet een schat voor je staan. Deze schat is te openen met een eerdere gevonden sleutel. Open de schat en je wint het spel.";
	var schatkist=document.createElement("img");
	schatkist.src= "afbeeldingen/schatkist.png";
	schatkist.id = "kist";
	schatkist.onclick=sleutelofniet;
	document.body.appendChild(schatkist);
	
}
function sleutelofniet(){
	if(desleutel==true){
		document.getElementById('kist').onclick=einde;
	}
	else{
		document.getElementById('kist').onclick=mislukt;
	}
}
function nietopenen(){
	document.getElementById('sleutelBedel').style.display="none";
}

function mislukt(){
	document.getElementById('description').innerText="Je hebt het spel niet gehaald, omdat je de sleutel van de kist niet hebt gevonden. Probeer het opnieuw!";
	document.getElementById('button1').style.display="inline";
	document.getElementById('button1').innerText="Restart";
	document.getElementById('button1').onclick=refresh;
	document.body.style.backgroundImage="url(afbeeldingen/Game-Over.jpg)";
	document.getElementById('kist').style.display="none";
	document.getElementById('sleutelBedel').style.display="none";
	return(desleutel);
}


function einde(){
	document.getElementById('description').innerText="Gefeliciteerd! Je hebt het spel uitgespeeld."
	document.getElementById('kist').style.display="none";
	var schatkist=document.createElement("img");
	schatkist.src= "afbeeldingen/openschatkist.png";
	schatkist.id = "openkist";
	document.body.appendChild(schatkist);
	document.getElementById('button1').innerText="terug";
	document.getElementById('button1').onclick=refresh;
	return(desleutel);
}


function gestopt(){
	document.getElementById('button2').style.margin="0px 0px 200px -75px";
	document.getElementById('description').innerText="Je bent gestopt met het spel.";
	document.getElementById('button1').style.display="none";
	document.getElementById('button2').innerText="Restart";
	document.getElementById('button2').onclick=refresh;
	document.body.style.backgroundImage="url(afbeeldingen/Game-Over.jpg)";
	return(desleutel);
}


function refresh(){
	location = location;
	return(desleutel);
}


starthetspel()