(function($){
$(document).ready(function() {

var i;
var text;
var lineBreak = " ";

$('input').focus();

$("#dialog").dialog({ autoOpen: false, modal: true });

$('input').keypress(function(e){
	var valNum = $(this).val();
	if(e.which === 13){
		if (valNum > 1000) {
			console.log('test');
			$('#dialog').dialog('open');
			// alert(valNum + ' is too big.  You might crash your browser!');
		} else {
			$('p').html($(this).children());
			fizzBuzz($(this).val());
		}	
		e.preventDefault();
		$(this).focus().val('');
	}
});

var fizzBuzz = function(theNum) {
	for (i = 1; i <= theNum; i++) {
		if (i % 15 === 0 ) {
			text = "FizzBuzz";
		} else if  (i % 3 === 0) {
			text = "Fizz";
		} else if (i % 5 === 0) {
			text = "Buzz";
		} else {
			text = i;
		}
		text = text + lineBreak;
		$('.result').append(text);
	}
};

//end jQuery 
});

})(jQuery);

