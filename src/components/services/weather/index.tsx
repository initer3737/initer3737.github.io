import React ,{ChangeEvent, useEffect,useState} from 'react'
import axios from 'axios'
import { Icon ,Modal,Button  } from '../../assembleComponent'

type Tcoord={
    lat:string,
    lon:string
}

type Tmain={
    feels_like:number,
    grnd_level:number,
    humidity:number,
    pressure:number,
    sea_level:number,
    temp:number,
    temp_max:number,
    temp_min:number
}

type Tsys={
    country:string
}

type Twind={
    deg:number
    gust:number
    speed:number
}

type Tweather=[
    {id:number, main:string, description:string, icon:string} 
]

interface Iweather{
    name:string,
    coord:Tcoord,
    main:Tmain,
    sys:Tsys,
    wind:Twind,
    weather:Tweather 
}

export default function Weather() {
    const [ weather, setweather ]=useState<Iweather>()
    const lokasi=localStorage.getItem('lokasi')?.replace(/['"]+/g,'')!!
    const [ input ,setInput ]=useState(lokasi);
        const bulatkan=(angka:number | any)=>Math.ceil(angka);
        const settingLokasi=(settingLokasi:string)=>localStorage.setItem('lokasi',JSON.stringify(settingLokasi));
        const lokasiInput=(event:ChangeEvent<HTMLInputElement>)=>{
            setInput(event.target.value)
        }
    useEffect(()=>{
            settingLokasi('luhansk')
            getWeather();
    },[lokasi])

    const getWeather=async()=>{
       try {
            let url =`https://weather-app-api-initer3737.vercel.app/api/weather?lokasi=${lokasi}`;
            await axios.get(url)
                .then(data=>{
                            //ubah input masukkan ke dalam localstorage
                            console.log(data)
                            settingLokasi(input)
                            setweather({...data.data})
                });

       } catch (error) {
        //    console.log(error);
        //    settingLokasi('bogor')
       }
            
    }

  return (
    <>
            <h5 className="fs-5 text-center pt-3"><Icon variant={'light'} icon={'brightness-high-fill'} name={''}/> weather</h5>
            <h5 className="fs-5 text-center pt-1 d-inline" >
                <Icon variant={'light'} icon={'geo-alt-fill'} name={' ganti lokasi'} onClick={()=>{
                document.getElementById('toggle-info-lokasi')?.click()
            }}/> 
            </h5>
                
                {
                    weather?
                    (
                       <div className="d-flex flex-wrap flex-row justify-content-center align-content-center fs-5 gap-3  mt-5">
                        <div className="d-flex flex-column gap-3 border border-light rounded py-2 px-3">
                            <p>location : { weather?.name}</p>
                            <p>kode negara : {weather?.sys.country} </p>
                            <p>latitude : {weather?.coord.lat}</p>
                            <p>longtitude : {weather?.coord.lon}</p>
                            <p>feels like : {bulatkan(weather?.main.feels_like)} &#x2103;</p>
                            <p>ketinggian tanah : {weather?.main.grnd_level} meter</p>
                        </div>
                        <div className="d-flex flex-column gap-3 border border-light rounded py-2 px-3">
                            <p>kelembapan udara : {weather?.main.humidity} &#x2103;</p>
                            <p>tekanan udara : {weather?.main.pressure} mb / milibar</p>
                            <p>level ketinggian laut : {weather?.main.sea_level} meter</p>
                            <p>temperatur : {bulatkan(weather?.main.temp)} &#x2103;</p>
                            <p>temperatur maksimal : {bulatkan(weather?.main.temp_max)} &#x2103;</p>
                            <p>temperatur minimal : {bulatkan(weather?.main.temp_min)} &#x2103;</p>
                        </div>
                        <div className="d-flex flex-column gap-3 border border-light rounded py-2 px-3">
                            <p>derajat angin : {weather?.wind.deg} &deg;</p>
                            <p>hembusan angin : {weather?.wind.gust}</p>
                            <p>kecepatan angin : {String(weather?.wind.speed)} meter / detik</p>
                            <img src={`http://openweathermap.org/img/w/${weather?.weather[0].icon}.png`} alt='weather icon' className='img-fluid w-25'/>
                            <p>deskripsi cuaca: {weather?.weather[0].description}</p>
                            <p>english : {weather?.weather[0].main}</p>
                        </div>
                       </div>
                    )
                    :
                    (
                        <h5 className='text-light text-center'>data tidak ditemukan coba cari yang lain!!</h5>
                    )
                }
           
            
        <a role="button" data-bs-target={'#info-lokasi'} data-bs-toggle='modal' id="toggle-info-lokasi" className="d-none"></a>
        <Modal modalTitle={'ganti lokasi?'} modalId={'info-lokasi'} modalTitleIcon={'geo-alt-fill'}>
            <div className="d-flex flex-column gap-3">
                <label htmlFor="footer-pindah-lokasi" className='h5 px-2'>pindah lokasi</label>
                <input type="text" id='footer-pindah-lokasi' autoFocus placeholder='pindah lokasi' value={input} onChange={lokasiInput} className='form-control' autoComplete='off'/>
                <Button variant={' btn btn-outline-primary rounded-pill px-3 py-2 shadow-md'} name={''} onClick={()=>{
                    settingLokasi(input)
                    setTimeout(()=>{
                        document.getElementById('close-modal')?.click()
                        window.location.reload()
                    },1000)
                }} disableOnClick={false} allAttr={{id:'changeWeather'}}>
                    <Icon variant={''} icon={'layout-wtf'} name={' konfirmasi'}/>
                </Button>
            </div>
        </Modal>
    </>
  )
}
