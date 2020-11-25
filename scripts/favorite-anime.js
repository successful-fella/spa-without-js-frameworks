function loadPage(num) {
	$.get("pages/anime.html", (resp) => {
		$('#app').html(resp)
		setTimeout(function() {
			getAnimeList(num)
		}, 1000)
	})
}

function getAnimeList(num) {
	if(num < 0 || num > 7 || num == undefined) {
		let num = prompt("How many should be fetched? (1-7)")
		if(!num) {
			window.history.back()
			return
		}
		window.location.href = "/#/favorite-anime/"+num
		return
	}
	let resp = '["Karakai no Takagi-san", "Kaguya-sama Love is War", "Adachi to Shimamura", "Clannad", "Re:zero", "KonoSuba", "Kanojo mo Kanojo"]'
	let list = ''
	resp = JSON.parse(resp)
	for(let i = 0; i < num; i++) {
		list += `<li>${resp[i]}</li>`
	}
	$('#anime-list').html(list)
}