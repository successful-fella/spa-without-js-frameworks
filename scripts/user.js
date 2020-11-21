function loadPage() {
	$.get("pages/user_profile.html", (resp) => {
		$('#app').html(resp)
	})
}