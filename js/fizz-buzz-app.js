$(document).ready(function() {
	startFizzBuzz();
	resetFizzBuzz();
});

function startFizzBuzz() {
	$('.startButton').click(function() {
		var x = 0;
		for (var i = 0; i <= 100; i++) {
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

			if (i == 100) {
				document.getElementById("results").innerHTML = document.getElementById("results").innerHTML + x + ".";
			}
			else {
				document.getElementById("results").innerHTML = document.getElementById("results").innerHTML + x + ", ";
			}
		}
	});
}

function resetFizzBuzz() {
	$('.resetButton').click(function() {
    	i = 0;
    	x = 0;
    	document.getElementById("results").innerHTML = "";
	});
}