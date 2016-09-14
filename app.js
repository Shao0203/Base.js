window.onload = function() {
	var base = new Base();
	$().getId('box').css('color', 'red').css('backgroundColor', 'yellow').html('pox 321~');
	$().getTagName('p').css('color', '#a50').html('this is paragraph').click(function() {alert(123)});
}