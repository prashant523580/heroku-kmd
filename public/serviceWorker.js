// let offlineVersion = 1;
// let cache_name = "offline"
// const ofline_url = "/";


// self.addEventListener("install", (event) =>{
// 	event.waitUntil(
// 		(async () => {
// 			const cache = await caches.open(cache_name);
// 			await cache.add(new Request(ofline_url), {cache: "reload"});
// 		})()
// 		);
// 	self.skipWaiting();
// })

// self.addEventListener("active", (event) => {
// 	(async () => {
// 		if("navigationPreload" in self.registration){
// 			await self.registration.navigationPreload.enable();
// 		}
// 	})()
// 	self.clients.claim();
// });
// self.addEventListener("fetch", (event) => {
//   console.log('[Service Worker] Fetch', event.request.url);
// 	if(event.request.mode === "navigate"){
// 		event.responseWith(
// 			(async () => {
// 				try{
// 					const preloadResponse = await event.preloadResponse;
// 					if(preloadResponse){
// 						return preloadResponse;
// 					}
// 					const networkResponse = await fetch(event.request);
// 					return networkResponse;

// 				}catch(err){
// 					console.log(err);
// 					const caches = await caches.open(cache_name);
// 					const cacheResponse = await cache.match(offline_url);
// 					return cacheResponse;
// 				}
// 			})()
// 			)
// 	}
// });

// const CACHE_NAME = 'cache-version-0.01';
// // const OFFLINE_URL = ['offline.html',"index.hbs","404_page.hbs","about.hbs","content.hbs","/css/*.css"];
// const OFFLINE_URL =[
// "/",
// 'offline.html',
// "index.hbs",
// "404_page.hbs",
// "about.hbs",
// "content.hbs",
// "404page.css",
// "anim.css",
// "style.css"];
// self.addEventListener('install', function(event) {
//   console.log('[ServiceWorker] Install');
  
//   event.waitUntil((async () => {
//     const cache = await caches.open(CACHE_NAME);
//     // Setting {cache: 'reload'} in the new request will ensure that the response
//     // isn't fulfilled from the HTTP cache; i.e., it will be from the network.
//     await cache.add(new Request(OFFLINE_URL, {cache: 'reload'}));
//   })());
  
//   self.skipWaiting();
// });

// self.addEventListener('activate', (event) => {
//   console.log('[ServiceWorker] Activate');
//   event.waitUntil((async () => {
//     // Enable navigation preload if it's supported.
//     // See https://developers.google.com/web/updates/2017/02/navigation-preload
//     if ('navigationPreload' in self.registration) {
//       await self.registration.navigationPreload.enable();
//     }
//   })());

//   // Tell the active service worker to take control of the page immediately.
//   self.clients.claim();
// });

// self.addEventListener('fetch', function(event) {
//   // console.log('[Service Worker] Fetch', event.request.url);
//   if (event.request.mode === 'navigate') {
//     event.respondWith((async () => {
//       try {
//         const preloadResponse = await event.preloadResponse;
//         if (preloadResponse) {
//           return preloadResponse;
//         }

//         const networkResponse = await fetch(event.request);
//         return networkResponse;
//       } catch (error) {
//         console.log('[Service Worker] Fetch failed; returning offline page instead.', error);

//         const cache = await caches.open(CACHE_NAME);
//         const cachedResponse = await cache.match(OFFLINE_URL);
//         return cachedResponse;
//       }
//     })());
//   }
// });

const CACHE_NAME = 'cache-version-0.01';
const OFFLINE_URL = [
"/",
'offline.html',
"index.hbs",
"404_page.hbs",
"about.hbs",
"content.hbs",
"404page.css",
"anim.css",
"style.css"];

//install 

self.addEventListener("install", (e)=> {
  e.waitUntil(
      caches.open(CACHE_NAME)
      .then((cache) => {
        console.log("adding cached files.....",cache)
        return cache.addAll(OFFLINE_URL);
      })
    )
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
      caches.match(e.request)
      .then(() =>{
        return fetch(e.request)
        .catch(() => caches.match('offline.html'));
      })
    )
})

self.addEventListener("active", (e) => {
  let cacheLists = [];

  cacheLists.push(OFFLINE_URL);
  e.waitUntil(
      caches.keys()
      .then((cacheNames) => Promise.all(
          cacheNames.map((cache) => {
            if(!cacheLists.includes(cache)){
              return caches.delete(cache);
            }
          })
      ))
    )
})