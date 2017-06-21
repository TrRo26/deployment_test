
function addImage() {
	$('#yep').on('click', function() {
		var here = $("<img src='manGlitter.jpg'>")
		$('.hook').append(here)
	})
}

$(function() {
	addImage()
})