const CACHE_NAME = 'kasir-pwa-v2';
const urlsToCache = [
    '/',
    '/index.html',
    '/manifest.json'
];

// INSTALL → simpan cache
self.addEventListener('install', e => {
    e.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

// FETCH → offline fallback
self.addEventListener('fetch', e => {
    e.respondWith(
        fetch(e.request)
            .then(res => {
                // simpan cache baru
                const clone = res.clone();
                caches.open(CACHE_NAME).then(cache => cache.put(e.request, clone));
                return res;
            })
            .catch(() => caches.match(e.request)) // kalau offline
    );
});
