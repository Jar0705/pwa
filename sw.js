const CACHE = 'kasir-v1';
self.addEventListener('install', e=>{
    e.waitUntil(
        caches.open(CACHE).then(c=>c.addAll([
            '/',
            '/index.html',
            '/manifest.json'
        ]))
    );
});

self.addEventListener('fetch', e=>{
    e.respondWith(
        fetch(e.request)
        .then(res=>{
            let clone = res.clone();
            caches.open(CACHE).then(c=>c.put(e.request, clone));
            return res;
        })
        .catch(()=>caches.match(e.request))
    );
});
