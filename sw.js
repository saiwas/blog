const staticAsscess = [
  './css/main.css',
  './fonts/fa-brands-400.woff2',
  './fonts/fa-solid-900.woff2',
  './js/application.js',
  'https://avatars2.githubusercontent.com/u/3829027?s=460&v=4'
];

self.addEventListener('install', async e => {
  let cache = await caches.open('saiwas-blog');
  cache.addAll(staticAsscess);
});

self.addEventListener('fetch', async e => {
  let req = e.request;
  let url = new URL(req.url);

  let response = url.origin === location.origin ? cacheFirst(req) : networkFirst(req);
  e.respondWith(response);
});

self.addEventListener('sync', function(event) {
  if (event.tag == 'syncEvent') {
    networkFirst(location.url)
  }
});

async function cacheFirst(request) {
  let cachedResponse = await caches.match(request);
  return cachedResponse || networkFirst(request);
}

async function networkFirst(request) {
  let cache = await caches.open('saiwas-blog');

  try {
    let res = await fetch(request);
    cache.put(request, res.clone());
    return res;
  } catch (error) {
    console.info(error);
    return await cache.match(request);
  }
}
