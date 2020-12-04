// Cache variable to be created in browser
const CACHE = "spa-without-rav-cache";

// Offline page if user offline and no cache
const offlineFallbackPage = "offline.html";

const cacheFirstPages = [];

// Install stage sets up the offline page in the cache and opens a new cache
self.addEventListener("install", function (event) {
	// console.log("Install Event processing");

	event.waitUntil(
		caches.open(CACHE).then(function (cache) {
			// console.log("Cached offline page during install");
			return cache.add(offlineFallbackPage);
		})
	);
});

// If any fetch fails, it will look for the request in the cache and serve it from there first
self.addEventListener("fetch", function (event) {
	if (event.request.method !== "GET") return;

	var current = event.request.url.split('/').pop()

	if(cacheFirstPages.includes(current)) {

		event.respondWith(
			caches.open(CACHE).then(function (cache) {
				return cache.match(event.request).then(function (matching) {
					return matching || fetch(event.request).then((response) => {
						event.waitUntil(updateCache(event.request, response.clone()));
						return response;
					});
				});
			})
		);
	} else {
		event.respondWith(
			fetch(event.request)
				.then(function (response) {
					event.waitUntil(updateCache(event.request, response.clone()));
					return response;
				})
				.catch(function (error) {
					return fromCache(event.request);
				})
		);
	}

});

function fromCache(request) {
	// Check to see if you have it in the cache
	// Return response
	// If not in the cache, then return the offline page
	return caches.open(CACHE).then(function (cache) {
		return cache.match(request).then(function (matching) {
			if (!matching || matching.status === 404) {
				// The following validates that the request was for a navigation to a new document
				if (request.destination !== "document" || request.mode !== "navigate") {
					return Promise.reject("no-match");
				}

				return cache.match(offlineFallbackPage);
			}

			return matching;
		});
	});
}

function updateCache(request, response) {
	return caches.open(CACHE).then(function (cache) {
		return cache.put(request, response);
	});
}

self.addEventListener('push', event => {
   if(self.Notification.permission != 'granted' ) {
	   return;
   }
	
	if (event.data) {
		noti = event.data
	    const title = "SPA Notification";
	    var return_data = JSON.parse(event.data.text());
	    var options = {
	        body: return_data.msg,
	        vibrate: [100, 50, 100],
	        data: {
	        	url: return_data.url
	        }
	    }
		event.waitUntil(self.registration.showNotification(title, options));
	}
});

self.addEventListener('notificationclick', function(e) {
    var notification = e.notification;
    clients.openWindow(notification.data.url);
    notification.close();
});