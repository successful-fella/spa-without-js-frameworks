function loadPage() {
	$.get("pages/anime.html", (resp) => {
		$('#app').html(resp)
	})
}