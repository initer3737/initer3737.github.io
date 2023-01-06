import React, { useEffect, useState } from "react";
import "./style.css";
import magSlide from "../../../sound/mag-slide.mp3";
import PuingSound from "../../../sound/puing.mp3";
import ak12Sound from "../../../sound/ak12-Sound.mp3";
import spr2Kal127MMSound from "../../../sound/SPR_2_1.mp3";
import reloadSound from "../../../sound/reload.mp3";
import reloadSound2 from "../../../sound/reload2.mp3";
import emptygunSound from "../../../sound/empty-gun.mp3";
import Elina from "../../../imgs/Elina.gif";
import Vika from "../../../imgs/Vika.gif";
import Army from "../../../imgs/army.gif";
import spr2Kal127MM from "../../../imgs/SPR_2_1.png";
import spr2Kal127MMFire from "../../../imgs/SPR_2_1_fire.png";
import spr2Kal127MMInfo from "../../../imgs/SPR_2_1-info.png";
import Ak12 from "../../../imgs/ak12.png";
import Ak12fire from "../../../imgs/ak12-fire.png";
import Ak12info from "../../../imgs/AK-12-info.png";
import soldatIcon from "../../../imgs/soldat.png";
import spesialForce from "../../../imgs/spesial-force.jpg";
import indoFlag from "../../../imgs/indonesia-flag.png";
import rusiaFlag from "../../../imgs/rusia-flag.png";
// import spesialForce from "../../../imgs/login-page.jpg";
import { Button, Icon, Img, LinkToPage, Modal,Input } from "../../assembleComponent";
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
  let point =localStorage.getItem("scorePlayer");
  let [color, setColor] = useState("");
  let [changeWeapon, setChangeWeapon] = useState(true);
  let [ammo, setAmmo] = useState(changeWeapon?30:5);
  let [isFire, setIsFire] = useState(false);
  let [reloadAction, setReloadAction] = useState(false);
  const username=localStorage.getItem('username');
  const password=localStorage.getItem('password');
  const token=localStorage.getItem('token');
  //utils
  let navigate=useNavigate(); 
  const srcAudio = (src: string) => new Audio(src);
  const keyPress=(key:string,id:string,keyup:boolean=true)=>{
    if(keyup === false)document.getElementById(id)?.click();
      document.addEventListener('keyup',(e)=>{
        return e.key === key?document.getElementById(id)?.click():''
    })
  }
const ModalClose=(id:string)=>document.getElementById(id)?.click();
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
const year=new Date().getFullYear();
let audio=new Audio(themes[day===6?0:day+1])
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
   const useFireImg=()=>{
      if(changeWeapon){
        //ak 12
        return isFire && ammo > 0 ? Ak12fire : Ak12
      }else{
        //spr 2 pindad
        return isFire && ammo > 0 ? spr2Kal127MMFire : spr2Kal127MM
      }
      
   }
   const animationReloadWeapon=()=>{
      //jika senjatanya adalah pindad spr 2 dan ketika ammo kosong
          //jika fire di triger maka animasi tidak ditampilkan
      if(changeWeapon === false && ammo<=0)return "d-none";
    return reloadAction?'':"d-none"
   }   
const warTime=(dayWar:number)=>day === dayWar;
const AmmoWeapon=changeWeapon?30:5;
  useEffect(() => {
    //this is to recieve theme music on every render 
    //mounting || this keypress method pass in the use effect just to detect user keyboard event 
      keyPress('r','reload')
      keyPress('f','fire')
      keyPress('h','info')
      keyPress('g','resetScoreInfoTriger')
      keyPress('q','gantisenjata')
          //war start only 3 day 
     if( warTime(1) || warTime(2) || warTime(3) ){
       setWarmode(true)
       ServeMotherland(true);
     } else{
      setWarmode(false)
      ServeMotherland(false);
     }
        //main sound aka theme music
      audio.loop=true;
      audio.volume=0.2
      audio.play()
      changeWeapon?setAmmo(30):setAmmo(5)
  }, []);
  useEffect(()=>{
    //when route change it trigger callback to pause audio || a.k.a component will unmount || unmounting lifecycle
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
      score > JSON.parse(point!!) &&
      ammo >= 0
    ) {
      localStorage.setItem("scorePlayer", JSON.stringify(score));
    }
        //check data to localstorage
        if(token !== 'true'){
            navigate('/login')
          }
          // changeWeapon?setAmmo(30):setAmmo(5)
  }, [score,ammo,changeWeapon,username,password,token,point]); //when score change it become realtime

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
  const killCount=Math.ceil(Number(point) / 10);
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
              HightScore:{`${point}`}
            </h5>
            <h5 className={`mx-5 fs-5`}>
              <button 
                data-bs-Target='#resetScoreInfo'
                data-bs-toggle='modal'
                className="bg-4 rounded-pill d-inline d-lg-none"
              >
                <Icon
                  variant={"light rounded-pill px-2"}
                  icon={"chevron-bar-contract"}
                  name={""}
                />
              </button>
            </h5>
          </div>
          <div className="d-flex flex-column gap-3">
            <h5 className={`mx-5 fs-5 alert alert-${color} text-${color}`}>
              score:{`${score} ${status} `}  
              <Input variant={""} statusState={changeWeapon} onClick={()=>{ 
                  srcAudio(magSlide).play();
                  setAmmo(0); //to handle bug in change weapon event
                  setIsFire(false);//to handle bug in change weapon event
                  setChangeWeapon((prevState)=>!prevState);
              }} allAttr={{id:"gantisenjata",type:"checkbox",role:"switch"}}/>
            </h5>
            <div className="text-start px-5 d-flex flex-row justify-content-between align-items-center">
                    <p><img src={soldatIcon} alt="soldier" className="soldat" loading="lazy" /> kill count : {killCount}</p>
                    <iframe src="https://giphy.com/embed/TaYmMYLtP0RvpDzgn4" width="60vw"style={{borderRadius:"0"}} className={`reload__effect giphy-embed ${animationReloadWeapon()}`}/>
            </div>
            <div className="alert alert-success shadow rounded-md">
            <div className={`bg-4 text-center text-white p-2 rounded shadow`}
            >
              <div className="d-flex flex-column-reverse">
                <h3>
                  <Icon 
                    variant={"info"} 
                    icon={"exclamation-triangle"} 
                    name={`
                    ${ammo===AmmoWeapon?'magazine is fully loaded!':'magazine '} 
                    ${ammo>=AmmoWeapon && ammo>1?'':''} 
                    ${ammo===0?'is empty':''}
                    ${ammo<AmmoWeapon?ammo===0?'':ammo+' bullet':''}
                    `}/>
                  </h3>
                  {/* <iframe src="https://giphy.com/embed/TaYmMYLtP0RvpDzgn4" width="50vw"style={{borderRadius:"0"}} className="giphy-embed d-inline"/> */}
              </div>
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
                        if(ammo >= AmmoWeapon){
                          reloadAmmo.volume=0.0
                          reloadAmmoFull.play()
                          return null;
                        }
                        if(ammo < AmmoWeapon){
                          reloadAmmoFull.volume=0.0
                          reloadAmmo.play()
                        }
                          setReloadAction(true)
                          setIsFire(false);
                        setTimeout(()=>{
                          setAmmo(AmmoWeapon)
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
                <div className={`w-25 ${changeWeapon?"pt-1":""}`}>
                  <a role="button" data-bs-toggle="modal" data-bs-target="#infoweapon">
                    <Img
                      src={useFireImg()}
                      alt={changeWeapon?"ak-12":"SPR-2 pindad"}
                      srcset={""}
                      className={"img-fluid"}
                      width={""}
                      height={""}
                      attr={undefined}                  
                      />
                    </a>
                  <p>{changeWeapon?"ak-12":"SPR-2"}</p>
                </div>
              </div>
                <a 
                  role={'button'}
                  data-bs-target="#infoHotkeys"
                  data-bs-toggle='modal'
                >
                    <div className="border-start border-info px-2 d-none d-lg-inline">
                      <Icon 
                        variant={""} 
                        icon={"info-circle"} 
                        name={" info hotkeys "}
                        /> 
                      <Icon 
                        variant={"primary"} 
                        icon={"chevron-double-left"} 
                        name={""}
                        /> 
                      <Icon 
                        variant={"primary"} 
                        icon={"chevron-double-left"} 
                        name={""}
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
                  if(changeWeapon){
                    //must be pindad ak 12 rifle
                    setIsFire(!isFire);
                    setTimeout(()=>{
                      setIsFire((isFire)=>!isFire);
                    },1000)
                  }else{
                    //must be pindad sniper rifle
                    setIsFire(!isFire);
                      setTimeout(()=>{
                        setIsFire((isFire)=>!isFire);
                      },1000)
                  }

                    setAmmo((ammo) => (ammo <= 0 ? ammo : ammo - 1));
                    if (score > JSON.parse(point ?? "0") && ammo > 0)
                      srcAudio(PuingSound).play();
                    if (score > 0 && ammo > 0) srcAudio(changeWeapon? ak12Sound:spr2Kal127MMSound).play();
                        if(changeWeapon === false){
                            setReloadAction(true)
                            setTimeout(()=>{
                              setReloadAction(false)
                            },5000)
                        }
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

      <div className="d-none d-lg-block">
        <Img
          src={warmode?Vika:Elina}
          alt={`comrade ${warmode?'Vika':'Elina'}`}
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
          <h5 className="border-start border-3 border-info px-2">name : {warmode?'Vika':'Elina'}</h5>
          <h5 className="border-end border-3 border-info px-2">status : {warmode?'leading military operations':'leading military training'}</h5>
         </div>
          <hr />
         <div className="d-flex justify-content-around py-2">
          <h5 className="border-start border-3 border-info px-2">rank : {warmode?'SVR agent':'leutnant'}</h5>
          <h5 className="border-end border-3 border-info px-2">position : {warmode?'infantry':'TOS-A1 operator'}</h5>
         </div>
        </div>
      </div>
      {/* button triger event */}
          <Button
                allAttr={{
                  id:'resetGame'
                }}
                variant={" bg-danger rounded-pill  d-none"}
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
      {/* button triger event */}
      {/* button triger modal */}
        <a role="button" data-bs-target={'#charInfo'} data-bs-toggle='modal' id="info" className="d-none"></a>
        <button data-bs-target={'#logoutInfo'} data-bs-toggle='modal' id="logoutInfoTriger" className="d-none"></button>
        <button data-bs-target={'#resetScoreInfo'} data-bs-toggle='modal' id="resetScoreInfoTriger" className="d-none"></button>
      {/* button triger modal end */}
    {/* modal */}
    <Modal modalTitle={" weapon | firearm"} modalId={"infoweapon"} modalTitleIcon={"info-circle"}>
    <Img src={changeWeapon?rusiaFlag:indoFlag} alt={"indonesia flag"} srcset={""} className={"w-25 align-self-center mb-3"} width={""} height={""} attr={undefined} />
        <Img
          src={changeWeapon?Ak12info:spr2Kal127MMInfo}
          alt={changeWeapon?"ak 12":"SPR-2 pindad"}
          srcset={""}
          className={"w-100"}
          width={""}
          height={""}
          attr={[]}
        />
       <div className="d-flex justify-content-between px-3 pt-3">
        <div className="d-flex flex-column">
          <div className="d-flex flex-row gap-1">
            <Icon variant={"info"} icon={"info-circle"} name={" "}/>
            {" weapon info"}
            <h5 className="text-center">{usegame().title}</h5>
          </div>
          <hr />
              <p className="text-start">
              {changeWeapon?usegame().description:usegame().descriptionSpr}
              </p>
              <hr />
              <div className="d-flex flex-column gap-3">
                <div className="d-inline">
                <LinkToPage 
                  href={changeWeapon?usegame().linkAk1:usegame().linkSpr1} 
                  icon={"info-circle"} 
                  target={"_blank"} 
                  variant={"info"} 
                  name={" link referensi"} className={""}
                  />
                </div>
                <div className="d-inline">
                <LinkToPage 
                  href={changeWeapon?usegame().linkAk2:usegame().linkSpr2} 
                  icon={"info-circle"} 
                  target={"_blank"} 
                  variant={"info"} 
                  name={" link referensi"} className={""}
                  />
                </div>
                <div className="d-inline">
                  <LinkToPage 
                    href={changeWeapon?usegame().linkAk3:usegame().linkSpr3} 
                    icon={"info-circle"} 
                    target={"_blank"} 
                    variant={"info"} 
                    name={` source untuk suara ${changeWeapon?"ak-12":"SPR-2"}`} className={""}
                    />
                </div>
                <div className="d-inline">
                  <LinkToPage 
                    href={usegame().reloadAnimation} 
                    icon={"info-circle"} 
                    target={"_blank"} 
                    variant={"info"} 
                    name={`source reload animasi`} className={""}
                    />
                </div>
              </div>
        </div>
        </div>       
    </Modal>
      {/*char info  */}
      <Modal 
        modalTitle={" informasi akun"} 
        modalId={"charInfo"} 
        modalTitleIcon={"info-circle"} >
       <div className="d-flex justify-content-center gap-2">
        <Icon variant={"info text-center"} icon={"info-circle"} name={" "}/>
        {" informasi"}
       </div>
        <hr />
        <div className="d-flex justify-content-between px-3 flex-row py-2 px-3">
          <p>
            <Icon variant={"info"} icon={"person-circle"} name={` `}/>
            {` kombatan : ${username??'player'}`}
          </p>
          <p>
            <Icon variant={"info"} icon={"stars"} name={` `}/>
              {` score : ${point??'0'}`}
          </p>
        </div>
       <div className="d-flex flex-column align-items-end">
       <div className="d-flex flex-column align-items-center gap-3">

        <div className="text-center border-start border-info px-2">
          <div className="d-flex gap2">
            <Icon variant={"info"} icon={"fire"} name={` `}/>
              {`weapon used : ${changeWeapon?"ak-12":"SPR-2 pindad"}`}
          </div>
        </div>

          <Img
              src={changeWeapon?Ak12:spr2Kal127MM}
              alt={changeWeapon?"ak12":"SPR-2 pindad"}
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
                  type : {changeWeapon?"assault rifle":"sniper rifle"}  
                </p> 
              </div>
            <div className="border-start px-3 border-info">
                <p>
                  cartridge : {changeWeapon?"5.45×39mm":"12.7 x 99 mm"}
                </p> 
              </div>
          </div>

          <div className="">
              <div className="border-start px-3 border-info">
                <p>
                  rate of fire : {changeWeapon?"700 rounds / min":"n/a"}  
                </p> 
              </div>
              <div className="border-start px-3 border-info">
                <p>
                  state of origin : {changeWeapon?"rusia":"indonesia"}  
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
        <div className="d-flex gap-2 justify-content-center">
          <Icon variant={"info text-center"} icon={"info-circle"} name={" "}/>
          {" informasi"}
        </div>
        <hr />
        
       <div className="d-flex flex-column align-items-start">
       <div className="pb-3 my-2 mx-auto">
        <div className="border-start border-info px-2">
          <div className="d-flex gap-2 flex-row">
            <Icon variant={"info"} icon={"fire"} name={" "}/>
            {" hotkeys : info"}
          </div>
        </div>
       </div>
       
         <div className="d-flex flex-column">
          <div className="">
            <div className="border-start px-3 border-info">
                <p className="d-flex flex-row gap-2">
                  h :  
                  <Icon variant={"info"} icon={"bar-chart-line-fill"} name={" "}/> 
                  {" show player status"}
                </p> 
              </div>
            <div className="border-start px-3 border-info">
                <p className="d-flex flex-row gap-2">
                  r : 
                  <Icon variant={"info"} icon={"arrow-clockwise"} name={" "}/>
                  {" reload firearm"}
                </p> 
              </div>
          </div>

          <div className="">
              <div className="border-start px-3 border-info">
                <p  className="d-flex flex-row gap-2">
                  f : 
                  <Icon variant={"info"} icon={"fire"} name={" "}/>
                  {" fire the weapon"}
                </p> 
              </div>
              <div className="border-start px-3 border-info">
                <p  className="d-flex flex-row gap-2">
                  q : 
                  <Icon variant={"info"} icon={"fire"} name={" "}/>
                  {" change the weapon"}
                </p> 
              </div>
              <div className="border-start px-3 border-info">
                <p className="d-flex flex-row gap-2">
                  g : 
                  <Icon variant={"info"} icon={"controller"} name={" "}/> 
                  {" restart the game"}
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
        <div className="d-flex justify-content-center gap-1">
          <Icon variant={"info text-center"} icon={"info-circle"} name={" "}/>
          <p className="text-light d-inline">informasi</p>
        </div>
       <div className="d-flex flex-column align-items-start">
       <hr />
       <div className="d-flex flex-column">
            <div className="d-flex flex-column pb-3">
              <hr />
              <div className=" mx-auto">
                <div className="text-center border-start border-info px-2">
                  <Icon variant={"info"} icon={"arrow-bar-right"} name={" "}/>
                  <p className="text-light d-inline">yakin mau logout??</p>
                </div>
              </div>
                <hr />
              <div className="">
                <div className="d-flex justify-content-center">
                  <div className="text-center border-start border-info px-2 gap-1">
                    <Icon variant={"info"} icon={"lightning"} name={" "}/>
                    <p className="d-inline text-light">counter strike</p>
                  </div>
                </div>
                   <hr />
              </div>
           <Img 
              src={spesialForce} 
              alt={"spesial force"} 
              srcset={""} 
              className={"w-100 border"} width={""} height={""} attr={undefined}/>
           </div>
           <hr />
          <div className="d-flex justify-content-between px-3 py-2">
              <div className="border-start px-3 border-info">
                <p  className="d-flex flex-row gap-2">
                  <Icon variant={"info"} icon={"person-circle"} name={` `}/>
                  {` kombatan : ${username}`}
                </p> 
              </div>
              <div className="border-end px-3 border-info">
                <p className="d-flex flex-row gap-2">
                  <Icon variant={"info"} icon={"stars"} name={` `}/> 
                  {` score : ${point}`}
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
      {/*reset warning info  */}
      <Modal 
        modalTitle={" informasi"} 
        modalId={"resetScoreInfo"} 
        modalTitleIcon={"info-circle"} >
        <div className="d-flex gap-2 justify-content-center">
          <Icon variant={"info text-center"} icon={"info-circle"} name={" "}/>
          {" informasi"}
        </div>
        <hr />
        
       <div className="d-flex flex-column align-items-start">
       <div className="d-flex flex-column">
          <div className="my-2 mx-auto">
              <div className="text-center border-start border-info px-2">
                <Icon variant={"info"} icon={"bricks"} name={" "}/>
                <p className="text-light d-inline">yakin mau reset game??</p>
              </div> 
            </div>
            <hr />
           <div className="py-2 d-flex flex-column pb-3">
              <div className="pb-2 mx-auto">
                  <div className="text-center border-start border-info px-2">
                    <Icon variant={"info"} icon={"lightning"} name={" "}/>
                    <p className="text-light d-inline">counter strike</p>
                  </div>
              </div>
              <hr />
           <Img 
              src={Vika} 
              alt={"comrade vika"} 
              srcset={""} 
              className={"w-100 border"} width={""} height={""} attr={undefined}/>
           </div>
           <hr />
           <h5 className="text-center fs-4">
            <Icon 
              variant={"primary"} 
              icon={"chevron-double-left"} 
              name={""}
              /> 
            <Icon 
              variant={"info"} 
              icon={"exclamation-triangle"} 
              name={" "}
              /> 
               agent information!!
              <Icon 
              variant={"primary"} 
              icon={"chevron-double-right"} 
              name={""}
              />
          </h5> <hr />
                <h5 className="fs4 text-center">
                  <Icon 
                    variant={"primary"} 
                    icon={"chevron-double-left"} 
                    name={""}
                    />
                    <Icon variant={"info"} icon={"person-circle"} name={` `}/>
                      Vika
                    <Icon 
                    variant={"primary"} 
                    icon={"chevron-double-right"} 
                    name={""}
                    />
                </h5> <hr />
                <h5 className="fs4 text-center">
                  <Icon 
                    variant={"primary"} 
                    icon={"chevron-double-left"} 
                    name={""}
                    />
                    {/* <Icon variant={"info"} icon={"hearts"} name={` `}/> */}
                      <Img src={rusiaFlag} alt={"rusia flag"} srcset={""} className={""} width={"15%"} height={""} attr={undefined}/>
                    <Icon 
                    variant={"primary"} 
                    icon={"chevron-double-right"} 
                    name={""}
                    />
                </h5> <hr />
          <div className="d-flex justify-content-evently px-3 py-2">
              <div className="">
                <ul>
                  <li>in service : SVR RF</li>
                  <li>age : {year - 2002} years old</li>
                  <li>language : </li>
                  <li className="pl-3">
                    <Icon variant={"info"} icon={"chevron-double-right"} name={""}/> 
                      russian
                  </li>
                  <li className="pl-3">
                    <Icon variant={"info"} icon={"chevron-double-right"} name={""}/> 
                      english
                  </li>
                  <li className="pl-3">
                    <Icon variant={"info"} icon={"chevron-double-right"} name={""}/> 
                      korea
                  </li>
                  <li className="pl-3">
                    <Icon variant={"info"} icon={"chevron-double-right"} name={""}/> 
                      turkiye
                  </li>
                  <li className="pl-3">
                    <Icon variant={"info"} icon={"chevron-double-right"} name={""}/> 
                      indonesian
                  </li>
                </ul>
              </div>
              <div className="">
                <ul>
                  <li>
                    <Icon variant={"info"} icon={"suit-diamond-fill"} name={" "}/>
                    mission
                  </li>
                  <li className="pl-3">
                    <Icon variant={"info"} icon={"chevron-double-right"} name={""}/> 
                      lead operation military 
                  </li>
                  <li className="pl-3">
                    <Icon variant={"info"} icon={"chevron-double-right"} name={""}/> 
                      reconnaissance mision
                  </li>
                  <li className="pl-3">
                    <Icon variant={"info"} icon={"chevron-double-right"} name={""}/> 
                      drone operator
                  </li>
                  <li className="pl-3">
                    <Icon variant={"info"} icon={"chevron-double-right"} name={""}/> 
                      manipulate information
                  </li>
                  <li className="pl-3">
                    <Icon variant={"info"} icon={"chevron-double-right"} name={""}/> 
                      eliminate traitor 
                  </li>
                  <li className="pl-3">
                    <Icon variant={"info"} icon={"chevron-double-right"} name={""}/> 
                    planning a war strategy
                  </li>
                  <li className="pl-3">
                    <Icon variant={"info"} icon={"chevron-double-right"} name={""}/> 
                      serve to the motherland
                  </li>
                </ul>
              </div>
          </div> 
          <hr />
          <h5 className="text-center fs-4">
            <Icon 
              variant={"primary"} 
              icon={"chevron-double-left"} 
              name={""}
              /> 
            <Icon 
              variant={"info"} 
              icon={"exclamation-triangle"} 
              name={" "}
              /> 
               player information!!
              <Icon 
              variant={"primary"} 
              icon={"chevron-double-right"} 
              name={""}
              />
          </h5>
          <hr />
          <div className="d-flex justify-content-between px-3 py-2">
              <div className="border-start px-3 border-info">
                <p  className="d-flex flex-row gap-2">
                  <Icon variant={"info"} icon={"person-circle"} name={` `}/>
                  {` kombatan : ${username}`}
                </p> 
              </div>
              <div className="border-end px-3 border-info">
                <p className="d-flex flex-row gap-2">
                  <Icon variant={"info"} icon={"stars"} name={` `}/> 
                  {` score : ${point}`}
                </p> 
              </div>
          </div> 
          <hr />
                <Button 
                  variant={""} 
                  name={""} onClick={()=>{
                     document.getElementById('resetGame')?.click()
                  }} disableOnClick={false}allAttr={{}}>
                    <Icon variant={"danger"} icon={"x-diamond-fill"} name={" "}/>
                    <p className="d-inline text-light">reset game </p>
                    <Icon 
                      variant={"danger"} 
                      icon={"chevron-double-left"} 
                      name={""}
                      /> 
                    <Icon 
                      variant={"danger"} 
                      icon={"chevron-double-left"} 
                      name={""}
                      /> 
                </Button>
                <hr />
                <h5 className="text-center fs-4">
                      <Icon 
                        variant={"primary"} 
                        icon={"chevron-double-left"} 
                        name={""}
                        /> 
                      <Icon 
                        variant={"info"} 
                        icon={"exclamation-triangle"} 
                        name={" "}
                        /> 
                        peringatan!!
                        <Icon 
                        variant={"primary"} 
                        icon={"chevron-double-right"} 
                        name={""}
                        />
                </h5>
                <hr />
                <p className="text-light fs-4">
                    reset score akan membuatmu kehilangan 
                    semua point yang telah kamu kumpulkan!!!
                </p>
       </div>

       </div>
        <hr />
      </Modal>
    </div>
  );
}
