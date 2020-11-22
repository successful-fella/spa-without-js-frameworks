const development = false

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
	}).fail((what) => {
		// Need better handler
		if(development) {
			$('#app').html(what.responseText)
			fixURLs()
		} else {
			$('#app').html(`
				<h3>404 Page Not Found</h3>
				<p>The page you are looking for was not found :(</p>
				<a href="#/home">Go to home</a>
			`)
		}
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

	$(document).ajaxStart(() => Pace.restart());
})()