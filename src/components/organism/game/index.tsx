import React, { useEffect, useState, useRef, useMemo } from "react";
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

export default function Game() {
  let [status, setStatus] = useState("");
  let [score, setScore] = useState(0);
  let [color, setColor] = useState("");
  let [point, setPoint] = useState(localStorage);
  let [ammo, setAmmo] = useState(30);
  let [isFire, setIsFire] = useState(false);
  //utils
  //  useThemes();
  // let onpauseaudio=useRef(); //when change route it will be pause
  const srcAudio = (src: string) => new Audio(src);
  const keyPress=(key:string,id:string)=>{
      document.addEventListener('keyup',(e)=>{
        return e.key === key?document.getElementById(id)?.click():''
    })
  }
  useEffect(() => {
    //this is to recieve theme music on every render because
    //useTheme is call from the routes
      keyPress('r','reload')
      keyPress('f','fire')
      keyPress('h','info')
  //pop up ,modal if condition
  }, []);
  useEffect(() => {
    //store to local storage
    if (
      score > JSON.parse(localStorage.getItem("scorePlayer")!!) &&
      ammo >= 0
    ) {
      point.setItem("scorePlayer", JSON.stringify(score));
    }
  }, [score, point,ammo]); //wwhen score change it become realtime

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
  let Point = point.getItem("scorePlayer");
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
              <h3>
                <Icon variant={"info"} icon={"lightning"} name={""}/>
                counter strike!
              </h3>
            </div>
          </div>
          <div className="d-flex flex-column-reverse  flex-sm-row align-items-center">
            <h5 className={`mx-5 fs-5 alert alert-success`}>
              <Icon variant={"warning"} icon={"star-fill"} name={" "} />
              HightScore:{`${Point ?? "0"}`}
            </h5>
            <h5 className={`mx-5 fs-5`}>
              <Button
                allAttr={{}}
                variant={"outline-danger rounded-pill px-3 py-2"}
                name={`reset game`}
                onClick={() => {
                  window.location.reload();
                  return point.setItem("scorePlayer", "0");
                }}
                disableOnClick={false}
              >
                <Icon
                  variant={"light bg-danger rounded-pill px-2"}
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

                  <button id="reload"
                    onClick={() => {
                      const reloadAmmo=srcAudio(ammo==30?reloadSound:reloadSound2)
                        reloadAmmo.play()
                      // document.addEventListener('ended',document.getElementById(srcAudio(reloadSound2).play)
                      // console.log('reload end?>>'+reloadAmmo.ended);
                      setAmmo(30)
                      setIsFire(false);
                    }}
                    className={"w-25 h-25 rounded-pill"}
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
            </div>
            <Button
              allAttr={{
                id:'fire'
              }}
              variant={
                "outline-info py-3 px-5 rounded-pill text-primary clear-focus"
              }
              name={"Fire!"}
              onClick={() => {
                //sound setting
                  setAmmo((ammo) => (ammo <= 0 ? ammo : ammo - 1));
                  setIsFire((isFire)=>!isFire);
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
      {/* button triger modal end */}
    {/* modal */}
    <Modal modalTitle={" weapons"} modalId={"infoweapon"} modalTitleIcon={"info-circle"}>
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
        <div className="d-flex flex-column py-2 px-3">
          <p>player : player</p>
          <p>score : {Point}</p>
        </div>
        <hr />
      </Modal>
    {/* modal end */}
    </div>
  );
}
