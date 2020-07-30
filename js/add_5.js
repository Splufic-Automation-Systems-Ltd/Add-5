


/*

1. get the value of the value_display id element
2. add the value by 5
3. change the inner html to reflect the change

*/

// create a vairable value_display to hold id element
let display_element;

// create a vairable add_5_button to hold id element
let add_5_button_element;

// create a vairable to hold the current value
let value;

window.onload = () => {
	// get the value_display id element
	display_element = document.getElementById('value_display');

	// get the add_5_button id element
	add_5_button_element = document.getElementById('add_5_button');

	// add a click event to the add_5_button element
	add_5_button.addEventListener('dblclick', add_5);

	value = 0;

	console.log(value);

	// the current value will be zero at initial stage
	display_element.innerHTML = value;
	
}



function add_5(){
	//  1. get the value of the value_display id element
	let value = display_element.innerHTML;

	// convert the string to integer
	value = parseInt(value);

	// 2. add the value by 5
	// // add 5 to the previous value
	value = value + 5;

	// 3. change the inner html to reflect the change
	display_element.innerHTML = value;
	console.log(value);
}