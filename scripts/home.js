// This is a required function
function loadHome() {
	$.get("pages/home.html", (resp) => {
		$('#app').html(resp)
	})
}

function loadHome2(num) {
	$.get("pages/home2.html", (resp) => {
		$('#app').html(resp)
	})
}