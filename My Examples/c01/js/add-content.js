var today = new Date();
var hourNow = today.getHours();
var greeting;
var headerPrompt = "Niggas";

var elHeader = document.getElementById('title');
elHeader.textContent = headerPrompt;

if(hourNow > 18){
	greeting = 'Good evening!';
} else if (hourNow > 12){
	greeting = 'Good afternoon!';
} else if (hourNow > 0){
	greeting = 'Good Morning!';
} else{
	greeting = 'Welcome!';
}

document.write('<h3>' + greeting + '</h3>');

$(h3).click(function(){
	alert("You just clicked an h3 tag!");
});