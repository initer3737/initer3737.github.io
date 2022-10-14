import React, { useEffect, useState, useRef, useMemo,useContext } from "react";
import "./style.css";
import PuingSound from "../../../sound/puing.mp3";
import ak47calmSound from "../../../sound/ak47calm.mp3";
import reloadSound from "../../../sound/reload.mp3";
import reloadSound2 from "../../../sound/reload2.mp3";
import emptygunSound from "../../../sound/empty-gun.mp3";
import Logo from "../../../imgs/semangat_yuks.gif";
import Ak12 from "../../../imgs/ak12.png";
import Ak12fire from "../../../imgs/ak12-fire.png";
import Ak12info from "../../../imgs/AK-12-info.png";
import spesialForce from "../../../imgs/spesial-force.jpg";
import { Button, Icon, Img, LinkToPage, Modal } from "../../assembleComponent";
import { useThemes } from "../../services";
import { useNavigate } from "react-router-dom";

export default function Game() {
  let [status, setStatus] = useState("");
  let [score, setScore] = useState(0);
  let [color, setColor] = useState("");
  let [theme, setTheme] = useState(true);
  let [login, setLogin] = useState(true);
  // let [point, setPoint] = useState(localStorage);
  let [ammo, setAmmo] = useState(30);
  let [isFire, setIsFire] = useState(false);
  const username=localStorage.getItem('username');
  const password=localStorage.getItem('password');
  const token=localStorage.getItem('token');
  //utils
  //  useThemes().play();
  let navigate=useNavigate(); 
  const srcAudio = (src: string) => new Audio(src);
  const keyPress=(key:string,id:string,keyup:boolean=true)=>{
    if(!keyup)document.getElementById(id)?.click();
      document.addEventListener('keyup',(e)=>{
        return e.key === key?document.getElementById(id)?.click():''
    })
  }
//useThemes().play()
  useEffect(() => {
    //this is to recieve theme music on every render because
    //useTheme is call from the routes
      keyPress('r','reload')
      keyPress('f','fire')
      keyPress('h','info')
      keyPress('g','resetGame')
  //pop up ,modal if condition
  //     setInterval(()=>{
        
  }, []);
  useEffect(() => {
    //store to local storage
    if (
      score > JSON.parse(localStorage.getItem("scorePlayer")!!) &&
      ammo >= 0
    ) {
      localStorage.setItem("scorePlayer", JSON.stringify(score));
    }
        //check data to localstorage
        if(token !== 'true'){
            navigate('/login')
          //   window.addEventListener('storage',()=>{
          //     return window.location.reload()
          //   })
          }
      // setInterval(()=>{
      //   window.addEventListener('storage',()=>{
      //      if(token ===null)window.location.reload()
      //   })
      // },6000)
  }, [score,ammo,username,password,token,localStorage]); //wwhen score change it become realtime

  useEffect(() => {
    if (score <= 200) {
      setStatus("yowai mono!");
      setColor("danger");
    }
    if (score >= 300) {
      setStatus("not bad noobs!");
      setColor("primary");
    }
    if (score >= 500) {
      setStatus("not yet mature!");
      setColor("info");
    }
    if (score >= 1000) {
      setStatus("you are sambal!");
      setColor("success");
    }
    if (score >= 5000) {
      setStatus("bruh stop! your waifu waiting at home!!");
      setColor("danger");
    }
  }, [score]); //only run when status is change [dependencies]
  let Point = localStorage.getItem("scorePlayer");
  const spesialForceStyle={
      width:'12vw'
  }
  return (
    <div className="d-flex flex-column-reverse flex-sm-row justify-content-between ">
      <div className="">
        <div className="container gap-3 d-flex flex-column ">
          <div className="bg-4 color-1 mt-2 justify-content-evently align-items-center d-flex gap-3">
              <img src={spesialForce} className="shadow" alt="spesial force" style={spesialForceStyle}/>
            <div className="mx-auto text-center">
              <div className="d-flex justify-content-between gap-5">
              <h3>
                <Icon variant={"info"} icon={"lightning"} name={""}/>
                counter strike!
              </h3>
              <Button 
                variant={" rounded-pill text-light"} 
                name={""} onClick={()=>{
                  keyPress('','logoutInfoTriger',false)
                }} disableOnClick={false} allAttr={{}}>
                <Icon variant={"info"} icon={"arrow-bar-right"} name={" "}/>
                    <p className="d-none d-md-inline">logout</p>
              </Button>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column-reverse  flex-sm-row align-items-center">
            <h5 className={`mx-5 fs-5 alert alert-success`}>
              <Icon variant={"warning"} icon={"star-fill"} name={" "} />
              HightScore:{`${Point ?? "0"}`}
            </h5>
            <h5 className={`mx-5 fs-5`}>
              <Button
                allAttr={{
                  id:'resetGame'
                }}
                variant={" bg-danger rounded-pill  d-lg-none"}
                name={``}
                onClick={() => {
                  window.location.reload();
                  return localStorage.setItem("scorePlayer", "0");
                }}
                disableOnClick={false}
              >
                <Icon
                  variant={"light rounded-pill px-2"}
                  icon={"arrow-clockwise"}
                  name={""}
                />
              </Button>
            </h5>
          </div>
          <div className="d-flex flex-column gap-3">
            <h5 className={`mx-5 fs-5 alert alert-${color} text-${color}`}>
              score:{`${score} ${status}`}
            </h5>
            <div className="alert alert-success shadow rounded-md">
            <div className={`bg-4 text-center text-white p-2 rounded shadow `}
            >
              <h3>
                <Icon 
                  variant={"info"} 
                  icon={"exclamation-triangle"} 
                  name={`
                   ${ammo==30?'magazine is fully loaded!':'magazine '} 
                   ${ammo>=30 && ammo>1?'':''} 
                  ${ammo==0?'is empty':''}
                  ${ammo<30?ammo===0?'':ammo+' bullet':''}
                   `}/>
                </h3>
            </div>
              <div className="d-flex flex-row justify-content-between align-items-center">
                <div className="d-flex flex-row justify-content-between gap-2">
                  <p>
                    {`${ammo} |  `} /90{" "}
                    <Icon
                      variant={"warning"}
                      icon={"distribute-horizontal"}
                      name={" "}
                    />
                  </p>

                  <button id="reload"//triger reload when player press r
                    onClick={() => {
                      const reloadAmmo=srcAudio(ammo==30?reloadSound:reloadSound2)
                        reloadAmmo.play()
                      setAmmo(30)
                      setIsFire(false);
                    }}
                    className={"w-25 h-25 rounded-pill d-lg-none"}
                  >
                    <Icon
                      variant={"danger w-100"}
                      icon={"arrow-clockwise"}
                      name={""}
                    />
                  </button>
                </div>
                <div className="w-25">
                  <a role="button" data-bs-toggle="modal" data-bs-target="#infoweapon">
                    <Img
                      src={isFire && ammo > 0 ? Ak12fire : Ak12}
                      alt={"ak-12"}
                      srcset={""}
                      className={"img-fluid"}
                      width={""}
                      height={""}
                      attr={undefined}                  
                      />
                    </a>
                  <p>ak-12</p>
                </div>
              </div>
               <a 
                role={'button'}
                data-bs-target="#infoHotkeys"
                data-bs-toggle='modal'
               >
                   <div className="border-start border-info px-2 d-none d-lg-block">
                    <Icon 
                      variant={""} 
                      icon={"info-circle"} 
                      name={" info hotkeys"}
                      /> 
                   </div>
               </a>
            </div>
            <Button
              allAttr={{
                id:'fire'
              }}
              variant={
                "outline-info py-3 px-5 rounded-pill text-primary d-lg-none clear-focus"
              }
              name={"Fire!"}
              onClick={() => {
                //sound setting
                   setIsFire((isFire)=>!isFire);
                    setAmmo((ammo) => (ammo <= 0 ? ammo : ammo - 1));
                    if (score > JSON.parse(Point ?? "0") && ammo > 0)
                      srcAudio(PuingSound).play();
                    if (score > 0 && ammo > 0) srcAudio(ak47calmSound).play();
                    if (ammo <= 0) srcAudio(emptygunSound).play();
                    setScore((score) => (ammo <= 0 ? score : score + 1));
              }}
              disableOnClick={false}
            >
              <Icon variant={"danger"} icon={"fire"} name={""}/>
            </Button>
          </div>              

        </div>
      </div>

      <div className="">
        <Img
          src={Logo}
          alt=""
          srcset={""}
          className={"w-100"}
          width={""}
          height={""}
          attr={[]}
        />
      </div>
      {/* button triger modal */}
        <a role="button" data-bs-target={'#charInfo'} data-bs-toggle='modal' id="info" className="d-none"></a>
        <a role="button" data-bs-target={'#logoutInfo'} data-bs-toggle='modal' id="logoutInfoTriger" className="d-none"></a>
      {/* button triger modal end */}
    {/* modal */}
    <Modal modalTitle={" weapon | firearm"} modalId={"infoweapon"} modalTitleIcon={"info-circle"}>
        <Img
          src={Ak12info}
          alt=""
          srcset={""}
          className={"w-100 bg-1"}
          width={""}
          height={""}
          attr={[]}
        />
       <div className="d-flex justify-content-between px-3 pt-3">
        <div className="d-flex flex-column">
          <div className="d-flex flelx-row gap-5">
          <Icon variant={"info"} icon={"info-circle"} name={" weapon info"}/>
          <h5 className="text-center">ak-12</h5>
          </div>
          <hr />
              <p className="text-start">
              AK-12 adalah pengembangan lebih lanjut platform AK-47. Senapan tersebut masih dibuat berdasarkan prinsip kesederhanaan dan keandalan.
              “Senjata ini dirancang untuk berfungsi dalam kondisi iklim paling keras, dari badai pasir di Gurun Sahara pada suhu 40 derajat Celsius hingga badai salju di Kutub Utara pada suhu -40 derajat Celsius. Performanya stabil dan dapat terus menembak, bahkan ketika pesaing-pesaing asingnya telah menyerah. Anda dapat menyeberangi rawa tanpa khawatir senjata itu sewaktu-waktu macet. AK-12 betul-betul tangguh dan dapat diandalkan dalam kondisi terberat sekali pun,” kata Yuri Sinichkin, mantan penembak jitu dan kepala insinyur di Lobaev Arms, kepada RT Tiongkok.
              AK-12 mewarisi keandalan versi sebelumnya dan mendapatkan sejumlah fitur baru yang dibutuhkan senapan serbu abad ke-21.
              Pertama, popor teleskopik yang baru memungkinkan penembak menyesuaikan senjata agar sesuai dengan fitur antropometriknya, serta peralatan dan zona tempur tempat ia beroperasi.
              Kedua, AK-12 dilengkapi rel Picatinny sehingga penembak dapat memasang alat bidik apa pun pada senjata itu (collimator, berbagai alat optik, penunjuk laser, dan lain-lain). Selain itu, penembak kini dapat menjalankan misinya dan melihat target di depannya dengan jernih seperti pada senjata dalam permainan Call of Duty dan Apex Legends.
              Ketiga, AK-12 mendapatkan pegangan baru yang mengikuti kontur tangan manusia dan membuatnya lebih nyaman digenggam. Pihak pengembang juga menambahkan “jendela” di sisi magazen sehingga si pengguna dapat melihat jumlah peluru yang tersisa.
              Keempat, Kalashnikov memasang rem laras (muzzle brake) baru pada AK-12 yang dapat menyembunyikan si penembak ketika beroperasi pada malam hari (AK versi sebelumnya memancarkan kilatan api saat ditembakkan pada malam hari sehingga mengungkap posisi si prajurit) .
              Semua fitur ini, ditambah keandalan senjata yang tak tak diragukan lagi, membuat AK-12 menjadi salah satu senapan terbaik di dunia untuk tentara reguler, bukan unit pasukan khusus.
              </p>
              <hr />
              <div className="d-flex flex-column gap-3">
                <LinkToPage 
                  href={"https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiXs7Tkq9r6AhWYSGwGHRTpCJIQFnoECEQQAQ&url=https%3A%2F%2Fid.rbth.com%2Ftechnology%2F84956-kalashnikov-vs-senapan-nato-wyx&usg=AOvVaw0xcnoATmHTufDVQE35cK4_"} 
                  icon={"info-circle"} 
                  target={"_blank"} 
                  variant={"info"} 
                  name={" link referensi"} className={""}
                  />
                <LinkToPage 
                  href={"https://en.kalashnikovgroup.ru/catalog/boevoe-strelkovoe-oruzhie/avtomaty/avtomat-kalashnikova-ak-12"} 
                  icon={"info-circle"} 
                  target={"_blank"} 
                  variant={"info"} 
                  name={" link referensi"} className={""}
                  />
              </div>
        </div>
        <div className="d-none">
          <Icon variant={"info"} icon={"infinity"} name={" ak-12"}/>
        </div>
        </div>       
    </Modal>
      {/*char info  */}
      <Modal 
        modalTitle={" informasi akun"} 
        modalId={"charInfo"} 
        modalTitleIcon={"info-circle"} >
        <Icon variant={"info text-center"} icon={"info-circle"} name={" informasi"}/>
        <hr />
        <div className="d-flex justify-content-between px-3 flex-row py-2 px-3">
          <p><Icon variant={""} icon={"person-circle"} name={` kombatan : ${username??'player'}`}/></p>
          <p><Icon variant={""} icon={"stars"} name={` score : ${Point??'0'}`}/></p>
        </div>
       <div className="d-flex flex-column align-items-end">
       <div className="d-flex flex-column align-items-center gap-3">
        <div className="text-center border-start border-info px-2">
          <Icon variant={"info"} icon={"fire"} name={" weapon used : ak-12"}/>
        </div>
          <Img
              src={Ak12}
              alt=""
              srcset={""}
              className={"w-100"}
              width={""}
              height={""}
              attr={[]}
            />
       </div>
         <div className="d-flex justify-content-between flex-row">
          <div className="">
            <div className="border-start px-3 border-info">
                <p>
                  type : assault rifle  
                </p> 
              </div>
            <div className="border-start px-3 border-info">
                <p>
                  cartridge : 5.45×39mm  
                </p> 
              </div>
          </div>

          <div className="">
              <div className="border-start px-3 border-info">
                <p>
                  rate of fire : 700 rounds / min  
                </p> 
              </div>
              <div className="border-start px-3 border-info">
                <p>
                  state of origin : rusia  
                </p> 
              </div>
          </div>

         </div>
       </div>
        <hr />
      </Modal>
      {/*hotkeys info  */}
      <Modal 
        modalTitle={" informasi"} 
        modalId={"infoHotkeys"} 
        modalTitleIcon={"info-circle"} >
        <Icon variant={"info text-center"} icon={"info-circle"} name={" informasi"}/>
        <hr />
        
       <div className="d-flex flex-column align-items-start">
       <div className="p-3 my-2 mx-auto">
        <div className="text-center border-start border-info px-2">
          <Icon variant={"info"} icon={"fire"} name={" hotkeys : info"}/>
        </div>
       </div>
       
         <div className="d-flex flex-column">
          <div className="">
            <div className="border-start px-3 border-info">
                <p className="d-flex flex-row gap-2">
                  h :  
                  <Icon variant={""} icon={"bar-chart-line-fill"} name={" show player status"}/> 
                </p> 
              </div>
            <div className="border-start px-3 border-info">
                <p className="d-flex flex-row gap-2">
                  r : 
                  <Icon variant={""} icon={"arrow-clockwise"} name={" reload firearm"}/>
                </p> 
              </div>
          </div>

          <div className="">
              <div className="border-start px-3 border-info">
                <p  className="d-flex flex-row gap-2">
                  f : 
                  <Icon variant={""} icon={"fire"} name={" fire the weapon"}/>
                </p> 
              </div>
              <div className="border-start px-3 border-info">
                <p className="d-flex flex-row gap-2">
                  g : 
                  <Icon variant={""} icon={"controller"} name={" restart the game"}/> 
                </p> 
              </div>
          </div>

         </div>
       </div>
        <hr />
      </Modal>
    {/* modal end */}
      {/*logout info  */}
      <Modal 
        modalTitle={" informasi"} 
        modalId={"logoutInfo"} 
        modalTitleIcon={"info-circle"} >
        <Icon variant={"info text-center"} icon={"info-circle"} name={" informasi"}/>
        <hr />
        
       <div className="d-flex flex-column align-items-start">
       <div className="p-3 my-2 mx-auto">
        <div className="text-center border-start border-info px-2">
          <Icon variant={"light"} icon={"arrow-bar-right"} name={" "}/>
          <p className="text-info d-inline">yakin mau logout??</p>
        </div>
       </div>
       
       <div className="d-flex flex-column">
           <div className="py-2 d-flex flex-column pb-3">
              <div className="pb-2 mx-auto">
                  <div className="text-center border-start border-info px-2">
                    <Icon variant={"light"} icon={"fire"} name={" counter strike"}/>
                  </div>
              </div>
           <Img 
              src={spesialForce} 
              alt={""} 
              srcset={""} 
              className={"w-100 border"} width={""} height={""} attr={undefined}/>
           </div>
           
          <div className="d-flex justify-content-between px-3 py-2">
              <div className="border-start px-3 border-info">
                <p  className="d-flex flex-row gap-2">
                  <Icon variant={""} icon={"person-circle"} name={` kombatan : ${username}`}/>
                </p> 
              </div>
              <div className="border-start px-3 border-info">
                <p className="d-flex flex-row gap-2">
                  <Icon variant={""} icon={"stars"} name={` score : ${Point}`}/> 
                </p> 
              </div>
          </div> <hr />
                <Button 
                  variant={""} 
                  name={""} onClick={()=>{
                    window.location.reload()
                    localStorage.setItem('token','false')
                  }} disableOnClick={false}allAttr={{}}>
                    <Icon variant={"info"} icon={"caret-right"} name={" "}/>
                    <p className="d-inline text-light">logout</p>
                </Button>
       </div>

       </div>
        <hr />
      </Modal>
    {/* modal end */}
    {/* audio hidden for theme */}
              {/* <audio onPl></audio> */}
    {/* audio hidden for theme */}
    </div>
  );
}
