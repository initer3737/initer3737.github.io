
export default  function ServiceWorker__initialize() {
    if('serviceWorker' in navigator)
   {
        const swUrl=`${process.env.PUBLIC_URL}/sw.js`
        navigator.serviceWorker.register(swUrl).then((res)=>{
            console.warn(`res is ${res}`)
        })
   }
}