// File Utama JS

// Mendaftarkan service worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('./sw.js').then(function(registration) {
      // Registration was successful
      // Berhasil mendaftarkan Service worker di halaman situs
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      // Gagal mendaftarkan Service worker di halaman situs
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}