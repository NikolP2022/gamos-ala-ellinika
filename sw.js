const CACHE='gamos-ala-ellinika-pwa-v6';
const ASSETS=[
 './','./index.html','./styles.css?v=20260921-2',
 './app.js?v=202610012005',
 './icons/icon-192.png','./icons/icon-512.png',
 './manifest.webmanifest?v=20261001'
];
self.addEventListener('install',e=>e.waitUntil(
 caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())
));
self.addEventListener('activate',e=>e.waitUntil(
 caches.keys().then(keys=>Promise.all(
  keys.filter(k=>k.startsWith('gamos-ala-ellinika-pwa-')&&k!==CACHE).map(k=>caches.delete(k))
 )).then(()=>self.clients.claim())
));
self.addEventListener('fetch',e=>{
 if(e.request.method!=='GET')return;
 e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request).then(r=>{
  const copy=r.clone();
  caches.open(CACHE).then(x=>x.put(e.request,copy));
  return r;
 }).catch(()=>caches.match('./index.html'))))
});