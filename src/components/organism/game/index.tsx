import React, { useEffect, useState } from "react";
import "./style.css";
import PuingSound from "../../../sound/puing.mp3";
import ak47calmSound from "../../../sound/ak47calm.mp3";
import reloadSound from "../../../sound/reload.mp3";
import reloadSound2 from "../../../sound/reload2.mp3";
import emptygunSound from "../../../sound/empty-gun.mp3";
import Logo from "../../../imgs/semangat_yuks.gif";
import Army from "../../../imgs/army.gif";
import Ak12 from "../../../imgs/ak12.png";
import Ak12fire from "../../../imgs/ak12-fire.png";
import Ak12info from "../../../imgs/AK-12-info.png";
import soldatIcon from "../../../imgs/soldat.png";
import spesialForce from "../../../imgs/spesial-force.jpg";
// import spesialForce from "../../../imgs/login-page.jpg";
import { Button, Icon, Img, LinkToPage, Modal } from "../../assembleComponent";
import { useNavigate } from "react-router-dom";
/*themes*/
import themeSound1 from '../../../sound/teme-gaming-1.mp3'
import themeSound2 from '../../../sound/teme-gaming-2.mp3'
import themeSound3 from '../../../sound/teme-gaming-3.mp3'
import themeSound4 from '../../../sound/teme-gaming-4.mp3'
import themeSound5 from '../../../sound/teme-gaming-5.mp3'
import themeSound6 from '../../../sound/teme-gaming-6.mp3'
import themeSound7 from '../../../sound/teme-gaming-7.mp3'
import battleTheme from '../../../sound/battletheme.mp3'
import artileri from '../../../sound/artileri.mp3'
import alarmmiliter from '../../../sound/alarmmiliter.mp3'
import antithank from '../../../sound/antithank.mp3'
import battleradio from '../../../sound/battleradio.mp3'
/*end of themes*/
/*data string*/
import usegame from "./text/game";
/*data string*/
export default function Game() {
  let [warmode, setWarmode] = useState(false);
  let [status, setStatus] = useState("");
  let [score, setScore] = useState(0);
  let [color, setColor] = useState("");
  let [ammo, setAmmo] = useState(30);
  let [isFire, setIsFire] = useState(false);
  let [reloadAction, setReloadAction] = useState(false);
  const username=localStorage.getItem('username');
  const password=localStorage.getItem('password');
  const token=localStorage.getItem('token');
  //utils
  let navigate=useNavigate(); 
  const srcAudio = (src: string) => new Audio(src);
  const keyPress=(key:string,id:string,keyup:boolean=true)=>{
    if(!keyup)document.getElementById(id)?.click();
      document.addEventListener('keyup',(e)=>{
        return e.key === key?document.getElementById(id)?.click():''
    })
  }

  const themes=[
    themeSound1,
    themeSound2,
    themeSound3,
    themeSound4,
    themeSound5,
    themeSound6,
    themeSound7,
];

const day=new Date().getDay();
let audio=new Audio(themes[day==6?0:day+1])
let BattleTheme=new Audio(battleTheme);
let Artileri=new Audio(artileri);
let Alarmmiliter=new Audio(alarmmiliter);
let Antithank=new Audio(antithank);
let BattleRadio=new Audio(battleradio);
    const ServeMotherland=(isOn:boolean)=>{
          if(isOn === true)
        {
            //alarm militer
          Alarmmiliter.loop=true;
          Alarmmiliter.volume=0.4
          Alarmmiliter.play()
            //anti thank
          Antithank.loop=true;
          Antithank.volume=0.4
          Antithank.play()
            //battle radio
          BattleRadio.loop=true;
          BattleRadio.volume=0.4
          BattleRadio.play()
            //artileri
          Artileri.loop=true;
          Artileri.volume=0.4
          Artileri.play()
            //battle theme
          BattleTheme.loop=true;
          BattleTheme.volume=0.4
          BattleTheme.play()
        }
        else{
          //alarm militer
          Alarmmiliter.pause()
            //anti thank
          Antithank.pause()
            //battle radio
          BattleRadio.pause()
            //artileri
          Artileri.pause()
            //battle theme
          BattleTheme.pause()
        }
    }
   
const warTime=(dayWar:number)=>day === dayWar;

  useEffect(() => {
    //this is to recieve theme music on every render 
      keyPress('r','reload')
      keyPress('f','fire')
      keyPress('h','info')
      keyPress('g','resetGame')

     if( warTime(1) || warTime(2) || warTime(3) ){
       setWarmode(false)
       ServeMotherland(false);
     } else{
      setWarmode(true)
      ServeMotherland(true);
     }
        //main sound aka theme music
      audio.loop=true;
      audio.volume=0.2
      audio.play()
      
  }, []);
  useEffect(()=>{
    //when route change it trigger callback to pause audio
    return ()=>{
      audio.pause()
      BattleTheme.pause()
      Artileri.pause()
      Alarmmiliter.pause()
      Antithank.pause()
      BattleRadio.pause()
    };
  },[])

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
          }
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
  const killCount=Math.ceil(Number(Point) / 10);
  const spesialForceStyle={
      width:'12vw',
  }
  return (
    <div className="d-flex flex-column-reverse flex-sm-row justify-content-between ">
      <div className="">
        <div className="container gap-3 d-flex flex-column ">
          <div className="bg-4 color-1 mt-2 justify-content-evently align-items-center d-flex gap-3">
              <img src={(warmode?Army:spesialForce)} className="shadow" alt="spesial force" style={spesialForceStyle}/>
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
            <div className="text-start px-5">
                    <p><img src={soldatIcon} alt="soldier" className="soldat" loading="lazy" /> kill count : {killCount}</p>
            </div>
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
                <div className="d-flex flex-column justify-content-around gap-2">
                  <div className="d-flex flex-row justify-content-around gap-2">
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
                      const reloadAmmo:HTMLAudioElement=srcAudio(reloadSound2)
                      const reloadAmmoFull:HTMLAudioElement=srcAudio(reloadSound)
                        if(ammo >= 30){
                          reloadAmmo.volume=0.0
                          reloadAmmoFull.play()
                          return null;
                        }
                        if(ammo < 30){
                          reloadAmmoFull.volume=0.0
                          reloadAmmo.play()
                        }
                          setReloadAction(true)
                          setIsFire(false);
                        setTimeout(()=>{
                          setAmmo(30)
                          setReloadAction(false)
                        },3000)
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
              disableOnClick={reloadAction}
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
        <div className="bg-4 rounded text-white py-2 px-3">
          <div className="text-center py-2 d-flex flex-column gap-2">
            <Icon variant={"info"} icon={"fire"} name={" mission"}/>
            <Icon variant={"light"} icon={"info-circle"} name={`${warmode?' eliminate all enemies troops':' in your training range troops! comrade elina will assist you!!'}`}/>
            <hr />
          </div>
         <div className="d-flex justify-content-around">
          <h5 className="border-start border-3 border-info px-2">name : elina</h5>
          <h5 className="border-end border-3 border-info px-2">status : troops</h5>
         </div>
          <hr />
         <div className="d-flex justify-content-around py-2">
          <h5 className="border-start border-3 border-info px-2">rank : comander</h5>
          <h5 className="border-end border-3 border-info px-2">position : bm-13 operator</h5>
         </div>
        </div>
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
          <h5 className="text-center">{usegame().title}</h5>
          </div>
          <hr />
              <p className="text-start">
              {usegame().description}
              </p>
              <hr />
              <div className="d-flex flex-column gap-3">
                <div className="d-inline">
                <LinkToPage 
                  href={"https://www.google.com/url?sa=t&rct=j&q=&esrc=s&source=web&cd=&cad=rja&uact=8&ved=2ahUKEwiXs7Tkq9r6AhWYSGwGHRTpCJIQFnoECEQQAQ&url=https%3A%2F%2Fid.rbth.com%2Ftechnology%2F84956-kalashnikov-vs-senapan-nato-wyx&usg=AOvVaw0xcnoATmHTufDVQE35cK4_"} 
                  icon={"info-circle"} 
                  target={"_blank"} 
                  variant={"info"} 
                  name={" link referensi"} className={""}
                  />
                </div>
                <div className="d-inline">
                <LinkToPage 
                  href={"https://en.kalashnikovgroup.ru/catalog/boevoe-strelkovoe-oruzhie/avtomaty/avtomat-kalashnikova-ak-12"} 
                  icon={"info-circle"} 
                  target={"_blank"} 
                  variant={"info"} 
                  name={" link referensi"} className={""}
                  />
                </div>
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
                    <Icon variant={"light"} icon={"lightning"} name={" counter strike"}/>
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
              <div className="border-end px-3 border-info">
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
    </div>
  );
}
