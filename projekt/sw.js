var cacheName= 'pcshop';
const staticAssets= [
    './',
    './index.html',
    './src/master.css',
    './src/index.js',
    './manifest.webmanifest',
    'https://api.jsonbin.io/b/6194e9c101558c731cc3e478/7'
]
self.addEventListener("install", async e =>{
    const cache = await caches.open(cacheName);
    await cache.addAll(staticAssets);
    return self.skipWaiting();
});

self.addEventListener('activate', e =>{
    self.clients.claim();
});

self.addEventListener('fetch', async e => {
    const req = e.request;
    const url = new URL(req.url);
    
    if(url.origin == location.origin){
        e.respondWith(cacheFirst(req));
    } else {
        e.respondWith(networkAndCache(req));
    }
});

async function cacheFirst(req){
    const cache = await caches.open(cacheName);
    const cached = await cache.match(req);
    return cached || fetch(req);
}

async function networkAndCache(req){
    const cache = await caches.open(cacheName);
    try {
        const fresh = await fetch(req);
        await cache.put(req,fresh.clone());
        return fresh;
    } catch (e) {
        const cached = await cache.match(req);
        return cached;
    }
}


