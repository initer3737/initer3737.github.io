import {useState,useEffect} from 'react'
            //time initialize
    let date=new Date();
    //utils function
    const validateTime=(T:number)=>T<10?`0${T}`:T;
    const Waktu={
        hari:date.getDay(),
        tanggal:date.getDate(),
        bulan:date.getMonth(),
        tahun:date.getFullYear(),
        validWaktu:{
            hari:['minggu','senin','selasa','rabu','kamis',"jum'at",'sabtu'],
            bulan:[
                'januari','februari','maret','april','mei','juni',
                'juli','agustus','september','oktober','november','desember'
            ],
        }     
    } 
        //return date
    const tanggal=()=>{
        const {tahun,bulan,hari,tanggal,validWaktu}=Waktu;
        const fulldate=`${validWaktu.hari[hari]} ${tanggal} ${validWaktu.bulan[bulan]} ${tahun}`;
        return fulldate;
    };    
        //function component [main function]
export default function Clock() {
    let times=new Date().toLocaleTimeString()
    //states
    let [time,setTime]=useState(times)   
    //functions to update the clock
    const updateClock=()=>{
         const times=new Date().toLocaleTimeString();
        return setTime(times);
    };
        
            useEffect(()=>{setInterval(()=>updateClock(),1000)},[])
  return (
    <>{`${time}  ${tanggal()}`}</>
  )
}
