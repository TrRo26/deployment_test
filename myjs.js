
function addImage() {
	$('#yep').on('click', function() {
		var here = $("<img src='manGlitter.jpg'>")
		$('.hook').append(here)
		$('.hook').append("How does Deployment work???????????")
	})
}

$(function() {
	addImage()
})