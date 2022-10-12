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
import { Button, Icon, Img, Modal } from "../../assembleComponent";
import { useThemes } from "../../services";

export default function Game() {
  let [status, setStatus] = useState("");
  let [score, setScore] = useState(0);
  let [color, setColor] = useState("");
  let [point, setPoint] = useState(localStorage);
  let [ammo, setAmmo] = useState(30);
  let [isFire, setIsFire] = useState(false);
  //utils
  const Theme = () => useThemes();
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
  return (
    <div className="d-flex flex-column-reverse flex-sm-row justify-content-between ">
      <div className="">
        <div className="container gap-3 d-flex flex-column ">
          <div className="bg-4 color-1 text-center mt-2">
            <h3>counter strike!</h3>
          </div>
          <div className="d-flex flex-column-reverse  flex-sm-row align-items-center">
            <h5 className={`mx-5 fs-5 alert alert-success`}>
              <Icon variant={"warning"} icon={"star-fill"} name={" "} />
              HightScore:{`${Point ?? "0"}`}
            </h5>
            <h5 className={`mx-5 fs-5`}>
              <Button
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
            <div className={`bg-4 text-center text-white p-2 rounded shadow d-none d-sm-${ammo<=0?'block':'none'}`}>
              <h3>
                <Icon variant={"info"} icon={"exclamation-triangle"} name={" magazine is empty!"}/>
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
                      const reloadAmmo=srcAudio(ammo==30?'':reloadSound2)
                        reloadAmmo.play()
                      // document.addEventListener('ended',document.getElementById(srcAudio(reloadSound2).play)
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
                  <Img
                    src={isFire && ammo > 0 ? Ak12fire : Ak12}
                    alt={"ak-12"}
                    srcset={""}
                    className={"img-fluid"}
                    width={""}
                    height={""}
                    attr={[]}
                  />
                  <p>ak-12</p>
                </div>
              </div>
            </div>
            <Button
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
              <Icon variant={"danger"} icon={"fire"} name={""} />
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
     
      {/* button triger modal end */}
    {/* modal */}
    
    {/* modal end */}
    </div>
  );
}
