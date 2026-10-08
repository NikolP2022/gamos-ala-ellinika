const CACHE='gamos-ala-ellinika-pwa-v10';
const BASE='./';
const ASSETS=[
 './',
 './index.html',
 './styles.css?v=20261008',
 './app.js?v=20261008',
 './icons/icon-192.png',
 './icons/icon-512.png',
 './manifest.webmanifest'
];
self.addEventListener('install',event=>{
 event.waitUntil(
  caches.open(CACHE)
   .then(cache=>cache.addAll(ASSETS))
   .then(()=>self.skipWaiting())
 );
});
self.addEventListener('activate',event=>{
 event.waitUntil(
  caches.keys().then(keys=>Promise.all(
   keys.filter(k=>k.startsWith('gamos-ala-ellinika-pwa-')&&k!==CACHE).map(k=>caches.delete(k))
  )).then(()=>self.clients.claim())
 );
});
self.addEventListener('fetch',event=>{
 if(event.request.method!=='GET')return;
 event.respondWith(
  caches.match(event.request).then(cached=>{
   if(cached)return cached;
   return fetch(event.request).then(response=>{
    if(response&&response.ok){
     const copy=response.clone();
     caches.open(CACHE).then(cache=>cache.put(event.request,copy));
    }
    return response;
   }).catch(()=>caches.match('./index.html'));
  })
 );
});
