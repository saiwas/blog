const staticAsscess = [
  '../css/main.css',
  '../fonts/fa-brands-400.woff2',
  '../fonts/fa-solid-900.woff2',
  '../js/application.js'
];

self.addEventListener('install', async e => {
  console.info("Install");
  const cache = await caches.open('saiwas-blog');
  cache.addAll(staticAsscess);
});

self.addEventListener('fetch', e => {
  console.info('fetch');
});

self.addEventListener('activate', () => {
  self.clients.claim();
  console.info('activate');
});
