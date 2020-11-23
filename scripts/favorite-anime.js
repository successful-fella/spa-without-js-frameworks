function loadPage() {
	$.get("pages/anime.html", (resp) => {
		$('#app').html(resp)
		setTimeout(function() {
			getAnimeList()
		}, 1000)
	})
}

function getAnimeList() {
	let resp = '["Karakai no Takagi-san", "Kaguya-sama Love is War", "Adachi to Shimamura", "Clannad", "Re:zero", "KonoSuba", "Kanojo mo Kanojo"]'
	let list = ''
	resp = JSON.parse(resp)
	for(let i = 0; i < resp.length; i++) {
		list += `<li>${resp[i]}</li>`
	}
	$('#anime-list').html(list)
}