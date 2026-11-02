const CACHE_NAME = 'vedant-portfolio-v12';
const CORE_ASSETS = [
  './',
  './index.html',
  './style.css',
  './dist/script.js',
  './assets/js/qrcode.js',
  './assets/images/og-image.png',
  './assets/images/profile-photo-card.jpg',
  './assets/images/java007-channel-avatar.jpg',
  './assets/images/goat-esports-logo.svg',
  './assets/video/intro-clip-poster.jpg',
  './assets/icons/favicon.svg',
  './assets/icons/favicon.png',
  './assets/icons/favicon-32.png',
  './assets/icons/app-icon-192.png',
  './assets/icons/app-icon-512.png',
  './manifest.json',
  './assets/resume/Vedant-Shukla-Resume.pdf'
];

self.addEventListener('install', event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    await cache.addAll(CORE_ASSETS);
    await self.skipWaiting();
  })());
});

self.addEventListener('activate', event => {
  event.waitUntil((async () => {
    const cacheNames = await caches.keys();
    await Promise.all(cacheNames
      .filter(name => name.startsWith('vedant-portfolio-') && name !== CACHE_NAME)
      .map(name => caches.delete(name)));
    await self.clients.claim();
  })());
});

self.addEventListener('fetch', event => {
  const request = event.request;
  const requestUrl = new URL(request.url);
  if (requestUrl.origin !== self.location.origin
    || requestUrl.pathname === '/assets/video/intro-clip.mp4') return;

  event.respondWith((async () => {
    const cacheRequest = request.method === 'HEAD'
      ? new Request(request.url, { method: 'GET' })
      : request;
    const cachedResponse = await caches.match(cacheRequest, { ignoreSearch: true });
    if (cachedResponse) {
      return request.method === 'HEAD'
        ? new Response(null, {
          status: cachedResponse.status,
          statusText: cachedResponse.statusText,
          headers: cachedResponse.headers
        })
        : cachedResponse;
    }

    try {
      const response = await fetch(request);
      if (request.method === 'GET' && response.ok) {
        const cache = await caches.open(CACHE_NAME);
        await cache.put(request, response.clone());
      }
      return response;
    } catch (error) {
      if (request.mode === 'navigate') {
        const offlinePage = await caches.match('./index.html');
        if (offlinePage) return offlinePage;
      }
      throw error;
    }
  })());
});
