import {useState,useEffect} from 'react'

    let date=new Date();
    const Waktu={
        hari:date.getDay(),
        tanggal:date.getDate(),
        bulan:date.getMonth(),
        tahun:date.getFullYear(),
    }
    const validWaktu={
        hari:['minggu','senin','selasa','rabu','kamis',"jum'at",'sabtu'],
        bulan:[
            'januari','februari','maret','april','mei','juni',
            'juli','agustus','september','oktober','november','desember'
        ],
    }
    const tanggal=()=>{
        const {tahun,bulan,hari,tanggal}=Waktu;
        const fulldate=`${validWaktu.hari[hari]} ${validateTime(tanggal)} ${validWaktu.bulan[bulan]} ${tahun}`;
        return fulldate;
    };
    const validateTime=(T:number)=>T<10?`0${T}`:T;
export default function Clock() {
    let time=date.toLocaleTimeString();
    const [clock,setClock]=useState(time);
            const updateClock=()=>{
                let time=new Date().toLocaleTimeString();
                setClock(time)
            };
            useEffect(()=>{setInterval(()=>updateClock(),1000)},[])
  return (
    <>{`${clock} ${tanggal()}`}</>
  )
}
