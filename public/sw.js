let cacheDataName="initer3737 App cache V1.0.3";
        //xyz major minor patch
const dataChache=[
    // 'https://animechan.vercel.app/api/quotes',
    '/media/wave-305226.99bfceef311ce0d8786d.png',
    '/static/media/the-background-292720.d4ff33cea2ebd8202237.png',
    '/static/media/landscape-1844226.353716af61952fa800d7b9ff7776bd3b.svg',
    '/static/media/watercolor-4116932.6b19c1bf563aa5258ce3.png',
    '/static/media/rumah.b20388449d886f5978c6.jpg',
    '/static/media/butterfly.143700ff89487e937147.png',
    '/static/media/forest.1c0cd2e7801c0c11edd9.jpg',
    '/static/media/banner-909710_1920.07b6b6e52305963a8175.jpg',
    '/static/media/giphy.e18864d01a6e292eb723.gif',
    '/static/media/gears-1311171_1920.c2b6bb58b82d5b774bdd.jpg',
    '/static/media/wasurejiBg.5a3941b90480987746d4.jpg',
    '/static/media/giphy%20(1).a43db8f03471a8fdeee5.gif',
    '/static/media/book-158812.cce0cc7959d103e0bfbb.png',
    '/static/media/Earth%20-%204788.c6043d6c61ec245407f5.mp4',
    '/static/media/kitten-7157608.a7684d8fe997684d8924.png',
    '/static/media/cat-133.ba05b96186701898af88.gif',
    '/static/media/banner-982162_1920.a9354715cc5f66136ae9.jpg',
    '/static/media/spesial-force.2c98a3a2fd214cf5e04a.jpg',
    '/static/media/soldat.9274177d6a0aa01b9e55.png',
    '/static/media/SPR_2_1.71fb250fb6e951ee813c.png',
    '/static/media/SPR_2_1_fire.974ebb3b7941eebd6613.png',
    '/static/media/ak12.539993c456c8d69ae9f5.png',
    '/static/media/ak12-fire.ccb6c04f9e3bcbeaf9e9.png',
    '/static/media/pwa3.35a97d3973d40e9615ce.jpg',
    '/static/media/night-1851685_960_720.5126a8b3b6220deea82f.png',
    '/static/media/pwa3.35a97d3973d40e9615ce.jpg',
    '/static/media/Vika.f704162606f0c53f30d7.gif',
    '/static/media/Elina.16c8f89b18a0865a893c.gif',
    '/static/media/wave-305226.99bfceef311ce0d8786d.png',
    '/static/media/battleradio.39a86427115be96c0a9f.mp3',
    '/static/media/antithank.17f3bf5f928cdaed5f19.mp3',
    '/static/media/artileri.2ee7eb3bd59d75090b8c.mp3',
    '/static/media/battletheme.84389f6310b4b7c98deb.mp3',
    '/static/media/alarmmiliter.a796df1136c79c2b096d.mp3',
    '/static/js/bundle.js',
    '/index.html',
    '/',
    '/manifest.json',
    '/chrome-extension://fmkadmapgofadopljbjfkapdkoienihi/build/installHook.js',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css',
    'https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js',
    'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.9.1/font/bootstrap-icons.css',
    'https://cur.cursors-4u.net/cursors/cur-11/cur1018.png',
]
self.addEventListener("install",(e)=>{
        self.skipWaiting()
    e.waitUntil(
        (async ()=>{
           let cacheOpen=await caches.open(cacheDataName);
             await cacheOpen.addAll(dataChache)
        }
        )()
    )
})

self.addEventListener('activate',(e)=>{
        e.waitUntil(caches.keys().then((cachesName)=>Promise.all(
            cachesName.map((cachename)=>{
                if(cachename !== cacheDataName){
                    return caches.delete(cachename)
                }
            })
            // e.waitUntil(clients.claim());
        )))
})

const warTime=(dayWar)=>new Date().getDay() === dayWar;

// const Vika=require('../src/components/services/pwa/notification/index')
self.addEventListener("fetch",(e)=>{
        // console.warn('warning url : ',e.request.url)
        const title= 'comrade Vika need you!!'
        const body=`serve to the motherland!!! \n call to all kombatans \n war event is on going!!`
        const icon=async()=>await'https://initer3737.github.io/static/media/Vika.f704162606f0c53f30d7.gif'
    if(
        e.request.url === 'https://initer3737.github.io//static/media/banner-982162_1920.a9354715cc5f66136ae9.jpg' 
        ){
            if( warTime(1) || warTime(2) || warTime(3) ){
                e.waitUntil(
                    this.registration.showNotification(title,{
                        body,
                        icon
                    })
                )
            }
    }
    
    e.respondWith(
        (async ()=>{
            const res=await caches.match(e.request);
            if(res)return res

            const getResponseServer=await fetch(e.request);
            const cache=await caches.open(cacheDataName);
            cache.put(e.request,getResponseServer.clone())
            return getResponseServer;
        })()
    )
})


async function detectSWUpdate() {
    const registration = await navigator.serviceWorker.ready;
  
    registration.addEventListener("updatefound", event => {
      const newSW = registration.installing;
      newSW.addEventListener("statechange", event => {
        if (newSW.state == "installed") {
           // New service worker is installed, but waiting activation
            
        }
      });
    })
  }

//   detectSWUpdate();
// addEventListener('fetch', (event) => {
//     // Prevent the default, and handle the request ourselves.
//     event.respondWith((async () => {
//       // Try to get the response from a cache.
//       const cachedResponse = await caches.match(event.request);
//       // Return it if we found one.
//       if (cachedResponse) return cachedResponse;
//       // If we didn't find a match in the cache, use the network.
//       return fetch(event.request);
//     })());
//   });

// workbox.skipWaiting();
// workbox.clientsClaim();

// workbox.routing.registerRoute(
//     new RegExp('https:.*min\.(css|js)'),
//     workbox.strategies.staleWhileRevalidate({
//         cacheName: 'cdn-cache'
//     })
//   )

// workbox.precaching.precacheAndRoute(self.__precacheManifest || [])