function loadPage() {
	$.get("pages/home.html", (resp) => {
		$('#app').html(resp)
	})
}