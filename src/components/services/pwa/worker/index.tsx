
export default  function ServiceWorker__initialize() {
    if('serviceWorker' in navigator)
        {
            window.addEventListener('load',()=>{
                const swUrl=`${process.env.PUBLIC_URL}/sw.js`
                navigator.serviceWorker.register(swUrl).then((res)=>{
                    console.warn(`service worker has been registered dayo!! is ${res}`)
                }).catch((err)=>{
                    console.log('service workernya ngambek nih : ',err);
                })
            })
        }
}