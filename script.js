const myColors = ["#0a75ad", "#81d8d0", "#f5f5dc", "#000080", "#101010", "#f5f5f5", "#6897bb", "#8b0000", "#808080", "#daa520", "#afeeee", "#660066", "#2846fa", "#AAF264", "#AFCC37", "#ddd637"]; //tablica z kolorami

function colorChange() {
	let randomNumber = Math.floor(Math.random() * myColors.length); //randomowa liczba od 0 do konca tablicy
	let colorName = document.querySelector(".color");
	colorName.textContent = myColors[randomNumber]; //zmieniam span na nazwe koloru
	
	let container = document.getElementById("container");
	container.style.backgroundColor = myColors[randomNumber]; //zmieniam kolor tla
}
