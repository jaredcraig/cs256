$(document).ready(function() {
	$('.button').mouseenter(function() {
		$(this).css('box-shadow','5px 5px 0px #aaa');
	});
	$('.button').mouseleave(function() {
		$(this).css('box-shadow','5px 5px 3px #bbb');
	});
	$('.button').mousedown(function(){
		$(this).css({
			'box-shadow': 'none',
			'left': '+=3px',
			'top': '+=3px'
		});
	});
	$('.button').mouseup(function(){
		$(this).css({
			'box-shadow': '5px 5px 0px #bbb',
			'left': '-=3px',
			'top': '-=3px'
		});
	});
	$('#red').click(function() {
		$('#text').css({
			'color': 'red',
			'font-family': 'Times New Roman'
		});
	});
	$('#green').click(function() {
		$('#text').css({
			'color': 'green',
		});
	});
	$('#blue').click(function() {
		$('#text').css({
			'color': 'blue',
			'font-family': 'Arial'
		});
	});
	$('#black').click(function() {
		$('#text').css({
			'color': 'black',
		});
		$('#text').html('Hello there');
	});

});
