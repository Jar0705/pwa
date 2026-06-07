const CACHE_NAME = 'kasir-pro-v9-login-bg';
const ASSETS_TO_CACHE = [
    '/',
    '/index.html',
    '/style.css',
    '/script.js',
    '/manifest.json',
    '/favicon-192.png',
    '/favicon-512.png',
    '/assets/image/caffe_latte.jpg',
    '/assets/image/americano.jpg',
    '/assets/image/caramel_macchiato.jpg',
    '/assets/image/espresso.jpg',
    '/assets/image/mocha_frappuccino.jpg',
    '/assets/image/vanilla_latte.jpg',
    '/assets/image/signature_chocolate.jpg',
    '/assets/image/lemon_tea.jpg',
    '/assets/image/butter_croissant.jpg',
    '/assets/image/beef_sausage.jpg',
    '/assets/image/cheesecake.jpg',
    '/assets/image/tuna_puff.jpg',
    '/assets/image/tumbler.jpg',
    '/assets/image/coffee_beans.jpg',
    '/assets/image/matcha.jpg',
    '/assets/image/earl_grey.jpg',
    '/assets/image/croissant.jpg',
    '/assets/image/login_bg.png',
    '/assets/image/Starbucks.jpeg',
    'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap',
    'https://cdn.jsdelivr.net/npm/chart.js'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => cache.addAll(ASSETS_TO_CACHE))
        .then(() => self.skipWaiting())
    );
});

self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        return caches.delete(cacheName);
                    }
                })
            );
        }).then(() => self.clients.claim())
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
        .then(cachedResponse => {
            const fetchPromise = fetch(event.request).then(networkResponse => {
                caches.open(CACHE_NAME).then(cache => {
                    if (event.request.method === 'GET' && !event.request.url.startsWith('chrome-extension')) {
                        cache.put(event.request, networkResponse.clone());
                    }
                });
                return networkResponse;
            }).catch(() => {
                // Return cached version if network fails
            });
            
            return cachedResponse || fetchPromise;
        })
    );
});
