const loadHash = (hash) => {
	hash = window.location.hash.replace("#/", "").replace(" ", "")

	let script_name = "home.js"
	if(hash != '') {
		// Yeah, load that page for hash
		script_name = hash + ".js"
	}

	$.getScript("scripts/"+script_name).done((script) => {
		// Load new page by triggering loadPage function of new script
		loadPage()
	}).fail(() => {
		// Need better handler
		alert("There was problem from our end, please try again")
	})
}


// Function to prepend #/ to anchor tags
const fixURLs = () => {
	for(let i = 0; i < $('a').length; i++) {
		$('a').eq(i).attr('href', '#/' + $('a').eq(i).attr('href'))
	}
}

(function() {
	loadHash(window.location.hash)

	$('.tooltipped').tooltip()

	$(window).on('hashchange', () => {
		loadHash(window.location.hash)
	})

	fixURLs()
})()