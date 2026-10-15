const CACHE='gamos-ala-ellinika-pwa-v32';
const ASSETS=['./','./index.html','./styles.css?v=20261026','./app.js?v=20261032','./icon.svg','./manifest.webmanifest?v=20261013pwa'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k.startsWith('gamos-ala-ellinika-pwa-')&&k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{
 if(e.request.method!=='GET')return;
 const url=new URL(e.request.url);
 const isAppFile=url.pathname.endsWith('/index.html')||url.pathname.endsWith('/app.js')||url.pathname.endsWith('/sw.js')||e.request.mode==='navigate';
 if(isAppFile){
   e.respondWith(fetch(e.request,{cache:'no-store'}).then(r=>{
     if(r&&r.ok){const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));}
     return r;
   }).catch(()=>caches.match(e.request).then(c=>c||caches.match('./index.html'))));
   return;
 }
 e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request).then(r=>{
   if(r&&r.ok){const copy=r.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));}
   return r;
 }).catch(()=>caches.match('./index.html'))));
});