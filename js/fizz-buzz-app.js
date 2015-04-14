$(document).ready(function() {
	numberPrompt();
	reloadFizzBuzz();
});

function numberPrompt() {
	swal({
	   title: "Number Input",
	   text: "Enter a number for use in the Fizz Buzz App:",
	   type: "input",
	   showCancelButton: true,
	   closeOnConfirm: false,
	   animation: true,
	   confirmButtonColor: "#FF9100"
	},
	function(inputTxt) {
		inputValue = +document.querySelector('input').value;
		if (isNaN(inputTxt) == true) {
			swal.showInputError("You need to enter a number not a string!");
		}
		else if (inputTxt % 1 != 0) {
			swal.showInputError("You need to enter a whole number not a decimal!");
		}
		else {
		   	if (inputTxt === false) return false;

		    if (inputTxt === "") {
		    	document.getElementById("results").innerHTML = " ";
		    	swal.showInputError("You need to write something in the input field!");
		    	return false;
		    }
		    startFizzBuzz();
		}
	});
}
	
function startFizzBuzz() {
			for (var i = 0; i <= inputValue; i++) {
				if (i % 3 == 0 && i % 5 == 0) {
					x = "Fizz Buzz";
				}
				else if (i % 3 == 0) {
					x = "Fizz";
				}
				else if (i % 5 == 0) {
					x = "Buzz";
				}
				else {
					x = i;
				}

				if (i == inputValue) {
					document.getElementById("results").innerHTML = document.getElementById("results").innerHTML + x + ".";
				}
				else {
					document.getElementById("results").innerHTML = document.getElementById("results").innerHTML + x + ", ";
				}
				swal.close();
			}
}

function reloadFizzBuzz() {
	$('.reloadButton').click(function() {
    	document.getElementById("results").innerHTML = "";
    	window.location.reload();
	});
}