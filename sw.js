const C='duelo-v3';
/* ficheiros com o código no nome (db-xxxx.js, app-xxxx.js) nunca mudam: vêm logo do telemóvel.
   a página em si: tenta a rede, mas se demorar mais de 3 s abre a versão guardada (e atualiza por trás) */
const HASHED=/-[0-9a-f]{10}\.js$/;
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==C).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
function prune(html){const keep=new Set([...html.matchAll(/src="([^"]+-[0-9a-f]{10}\.js)"/g)].map(m=>new URL(m[1],self.registration.scope).href));
  if(!keep.size)return;caches.open(C).then(c=>c.keys().then(ks=>ks.forEach(k=>{if(HASHED.test(k.url)&&!keep.has(k.url))c.delete(k)})))}
self.addEventListener('fetch',e=>{const r=e.request,u=new URL(r.url);if(r.method!=='GET'||u.origin!==location.origin)return;
  if(HASHED.test(u.pathname)){e.respondWith(caches.match(r).then(h=>h||fetch(r).then(res=>{if(res.ok){const c=res.clone();caches.open(C).then(x=>x.put(r,c))}return res})));return}
  const net=fetch(r,{cache:'no-cache'}).then(res=>{if(res.ok){const c=res.clone();caches.open(C).then(x=>x.put(r,c));
    if(r.mode==='navigate'||u.pathname.endsWith('/')||u.pathname.endsWith('.html'))res.clone().text().then(prune).catch(()=>{})}return res});
  e.respondWith(caches.match(r).then(h=>{if(!h)return net;
    return Promise.race([net.catch(()=>h),new Promise(ok=>setTimeout(()=>ok(h),3000))])}));
  e.waitUntil(net.catch(()=>{}));
});
