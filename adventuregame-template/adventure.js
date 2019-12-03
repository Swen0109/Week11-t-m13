function schuinepoep(){
document.getElementById('title').innerText="De brief";
document.body.style.backgroundSize="cover";
document.body.style.backgroundImage="url(afbeeldingen/vakantiehuis2.jpg)";
document.getElementById('description').innerText="Welkom. Druk op Start om het spel te beginnen of op Informatie voor uitleg over het spel.";
document.getElementById('button1').innerText="start"
document.getElementById('button2').innerText="informatie"
document.getElementById('button2').onclick=pijmelsaus;
}
function pijmelsaus(){
	document.getElementById("button2").style.display = "none";
	document.getElementById('button1').innerText="terug";
	document.getElementById('button1').style.margin="300px 0px 0px 720px";
	document.getElementById('button1').onclick= refresh;
	document.getElementById('description').innerText="Je gaat dalijk een advandture game spelen, het doel is de game te overleven en er met de prijs van door te gaan. Je komt onderweg verschillende obstakels tegen die je te slim af moet zijn om door te kunnen. Tijdens het spel heb je ook de mogelijkheid het spel te stoppen als je wilt. Tijdens het spel kan je verschillende voorwerpen tegen komen, zorg dat je deze meeneemd deze kunnen later nog van pas komen. Ik wens u veel plezier met het spelen van mijn spel. Succes!";
	document.getElementById('description').style.margin="100px 0px 0px 520"
}
	document.getElementById('button1').onclick=start;

function start(){
	document.getElementById('button2').innerText="nee";
	document.getElementById('button2').style.margin="0px 0px 0px 20px";
	document.getElementById('button1').innerText="ja";
	document.getElementById('description').innerText="Je bent met je vriendengroep op vakantie in Spanje. Je hebt een huis gehuurd waar je met zijn alle in zit. Het huis is een villa met alles er op en er aan. Op een vrijdagavond krijg je een vreemde brief door de brievenbus waar op staat dat er een prijs verborgen ligt op een strand redelijk dicht bij het huis. Je leest dit voor aan je vrienden en ze zijn allemaal enthousiast om dit te doen. Ben je bereid dit avontuur aan te gaan?"
	document.getElementById('description').style.margin="0px 0px 0px -20px";
	document.getElementById('button1').onclick=begin;
	document.getElementById('button2').onclick=gestopt;

}
function begin(){
	document.getElementById('button2').innerText="Auto";
	document.getElementById('button1').innerText="Metro";
	document.getElementById('description').innerText="Jullie besluiten dus om te gaan. De locatie is niet aan te lopen dus je moet beslissen. Er zijn twee mogelijkheden om bij de locatie te komen. Met de gehuurde auto of met de metro. Wat kies je? Ga je met de metro of met de auto?"
	document.getElementById('button2').onclick=auto;
	document.getElementById('button1').onclick=metro;	
}

function auto(){
	document.getElementById('button2').innerText="Verder";
	document.getElementById('description').innerText="Je gaat er met de auto naar toe. Het is ondertussen 22.00 en je komt aan om 23.30."
	document.body.style.backgroundImage="url(afbeeldingen/huurauto.jpg)";
	document.getElementById('button2').onclick=door;
	document.getElementById('button1').style.display="none";
	document.getElementById('button2').style.margin="300px 0px 0px 715px";
}
function metro(){
	document.getElementById('button2').innerText="Verder";
	document.getElementById('description').innerText="Je gaat er met de metro naar toe. Het is ondertussen 22.00 en je komt aan om 23.30."
	document.body.style.backgroundImage="url(afbeeldingen/metro.jpg)";
	document.getElementById('button1').onclick=door;
	document.getElementById('button1').style.display="none";
	document.getElementById('button2').style.margin="300px 0px 0px 715px";
}

function door(){
	document.getElementById('button1').innerText="Verder";
	document.getElementById('button2').onclick=verder;
	document.getElementById('button1').onclick=verder;
	document.getElementById('button1').style.display="inline";
}

function verder(){
	document.getElementById('description').innerText="Je komt aan op de plek en je ziet niks wat lijkt op een schat. Na een tijdje zoeken komen jullie een grote grot tegen. Je kan kiezen of je gaat de grot in of je gaat verder zoeken. "
	document.getElementById('button1').innerText="De grot in";
	document.getElementById('button2').innerText="Doorgaan";
}

function gestopt(){
	document.getElementById('description').innerText="Je bent gestopt met het spel.";
	document.getElementById('description').style.margin="0px 0px 0px 180px";
	document.getElementById('button1').style.display="none";
	document.getElementById('button2').innerText="Restart";
	document.getElementById('button2').style.margin="300px 0px 400px 720px";
	document.getElementById('button2').onclick=refresh;
}


function refresh(){
	location = location;
}
schuinepoep();