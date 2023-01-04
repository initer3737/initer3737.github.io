function urlBase64ToUint8Array(base64String:string) {
    const padding = '='.repeat((4 - base64String.length % 4) % 4);
    const base64 = (base64String + padding)
      .replace(/-/g, '+')
      .replace(/_/g, '/');
   
    const rawData = window.atob(base64);
    const outputArray = new Uint8Array(rawData.length);
   
    for (let i = 0; i < rawData.length; ++i) {
      outputArray[i] = rawData.charCodeAt(i);
    }
    return outputArray;
  }

  const serverKey=()=>{
    const vapidPubKey='BJPtfVsVWCsGDgi6ZymuwyLYpgAA17SYmDqwaZHuTlWSdsINv9SChwwMShv-eiDTagKrO4TC4-5j4aZ76uxsXrc';
        const vapidPrivKey='CNfpty-5TtTFS8cl3u9YbuqGQCNACbng5ZKg8beO4Wk';
        //vapid key generate by https://www.stephane-quantin.com/en/tools/generators/vapid-keys
       return urlBase64ToUint8Array(vapidPubKey);
  }
export default  function ServiceWorker__initialize() {
        

    if('serviceWorker' in navigator)
        {
            window.addEventListener('load',()=>{
                
                const swUrl=`${process.env.PUBLIC_URL}/sw.js`
                navigator.serviceWorker.register(swUrl).then((res)=>{
                    return res.pushManager.getSubscription()
                        .then(subscript=>{
                            return res.pushManager.subscribe({
                                userVisibleOnly:true,
                                applicationServerKey:serverKey()
                            })
                        })
                }).catch((err)=>{
                    console.log('service workernya ngambek nih : ',err);
                })
            })
        }
}