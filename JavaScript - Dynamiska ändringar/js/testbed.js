//JavaScript
//Egen metod för bakgrundfärgsändringen,från förra uppgiften, kvar då jag tyckte den var bra
function draw() {
	if (document.body.style.backgroundColor=="green") 
	{
		document.body.style.backgroundColor = "white"
		var knapp = document.getElementById('färgknapp');
		knapp.innerHTML='Ändra till Grön bakgrund';
	}
	else
	{
		document.body.style.backgroundColor = "green"	
		var knapp = document.getElementById('färgknapp');
		knapp.innerHTML='Ändra till Vit bakgrund';
	}
}

var flagga=0;
function changeHeading(){
	var rubrik = document.getElementById('rubrik');
	if (flagga==0) {
		rubrik.innerHTML='Du klickade';
		flagga=1;
	}
	else{
		rubrik.innerHTML='JavaScript';
		flagga=0;

	}



}