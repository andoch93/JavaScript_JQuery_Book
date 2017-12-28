//creating the array
var colors = ['black', 'white', 'custom'];

//update 3rd item in array
colors[2] = 'blue';

//get the element with an ID of colors
var el = document.getElementById('colors');

//replace with the 3rd item in the array
el.textContent = colors[2];