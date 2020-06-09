// Service Worker 

var CACHE_NAME = 'waingapu-kawal-corona-site-cache'; // nama cache
var urlsToCache = [ // daftar url (halaman html) yang menandakan file html yang akan di cache otomatis terlebih dahulu
  '/offline.html'
];

// event saat install service worker ke browser
self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});


// Fetch cache yang sudah disimpan didalam web browser
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)  // saat user melakukan request ke halaman website kita
      .then(function(response) {
        // Cache hit - return response
        // halaman website ditemukan di tempat cache
        // user mengambil data halaman website dari data cache bukan dari server website kita
        if (response) {
          return response;
        }

        return fetch(event.request).then(
          function(response) {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        );
      }).catch(function() {
        // Saat user gagal mengakses halaman yang belum di cache, dalam hal ini user akan di redirect ke halaman offline
        // Ideal for: Secondary imagery such as avatars, failed POST requests, "Unavailable while offline" page.

        // If both fail, show a generic fallback:
        return caches.match('/offline.html'); 
        // However, in reality you'd have many different
        // fallbacks, depending on URL & headers.
        // Eg, a fallback silhouette image for avatars.
      })
    );
});

// Aktifkan cache yang sudah didapatkam kedalam website kita.
self.addEventListener('activate', function(event) {

  var cacheWhitelist = CACHE_NAME;

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

