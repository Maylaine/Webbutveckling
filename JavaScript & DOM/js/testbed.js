//JavaScript
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