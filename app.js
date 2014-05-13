(function($){
$(document).ready(function() {

var i;
var text;
var lineBreak = "<br/>";

var fizzBuzz = function() {
	for (i = 1; i <= 100; i++) {
		if (i % 15 === 0 ) {
			text = "FizzBuzz";
		} else if  (i % 3 === 0) {
			text = "Fizz";
		} else if (i % 5 === 0) {
			text = "Buzz";
		} else {
			text = i;
		}
		text = text + lineBreak
		// $('.result').append().html( text + "<br/>");
		$('.result').append(text);
	}
};

$('a').click(function() {
	fizzBuzz();
});

//end jQuery 
});

})(jQuery);

