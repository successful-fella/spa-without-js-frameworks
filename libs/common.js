const development = false

const loadHash = (hash) => {
	hash = window.location.hash.replace("#/", "").replace(" ", "")

	// Remove slashes and make them arguments
	const args = hash.split('/')
	hash = args[0]
	args.shift()

	let script_name = "home.js"
	if(hash != '') {
		// Yeah, load that page for hash
		try {
			script_name = routes[hash][0] + ".js"
		} catch(e) {
			if(development) {
				$('#app').html(`<h3>Routes is not created for this URL</h3>`)
				fixURLs()
			} else {
				$('#app').html(`
					<h3>404 Page Not Found</h3>
					<p>The page you were looking for was not found :(</p>
					<a href="#/home">Go to home</a>
				`)
			}
			return
		}
	}

	$.getScript("scripts/"+script_name).done((script) => {
		// Load new page by triggering loadPage function of new script
		if(hash != '') {
			window[routes[hash][1]](...args)
		} else {
			loadHome()
		}
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