function loadPage() {
	$.get("pages/about.html", (resp) => {
		$('#app').html(resp)
	})
}