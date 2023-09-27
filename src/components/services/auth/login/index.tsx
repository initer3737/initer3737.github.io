import React, {FormEvent, useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom';
import './style.css'
import {
  Button,
  Icon,
  Modal
}from '../../../assembleComponent'
import prajurit from '../../../../weejio/soldier_war.mp4'
/*themes*/
// import themeSound1 from '../../../../sound/teme-gaming-1.mp3'
// import themeSound2 from '../../../../sound/teme-gaming-2.mp3'
// import themeSound3 from '../../../../sound/teme-gaming-3.mp3'
// import themeSound4 from '../../../../sound/teme-gaming-4.mp3'
// import themeSound5 from '../../../../sound/teme-gaming-5.mp3'
// import themeSound6 from '../../../../sound/teme-gaming-6.mp3'
// import themeSound7 from '../../../../sound/teme-gaming-7.mp3'
import { Kuki__initialize } from '../..';
/*end of themes*/
export default function Login() {
  const [formvalueUser,setformvalueUser]=useState('')
  const [formvaluePass,setformvaluePass]=useState('')
  const [formResetvalueUser,setformResetvalueUser]=useState('')
  const [formResetvaluePass,setformResetvaluePass]=useState('')
  const [loginMsg,setLoginMsg]=useState('')
  const getUser=localStorage.getItem('username')
  const getPass=localStorage.getItem('password')
  const getScore=localStorage.getItem('scorePlayer')
  const getToken=localStorage.getItem('token')
const isLogin=getUser!=='' && getPass !=='';
if(getUser === null){
  localStorage.setItem('username','');
}
if(getPass === null){
  localStorage.setItem('password','');
}
if(getToken === null){
  localStorage.setItem('token','false');
}
if(getScore === null){
  localStorage.setItem('scorePlayer','0');
}

const changeValue=(e:FormEvent<HTMLInputElement> | any,isUser:boolean)=>{
      let condition;
    if(isUser){
      return  condition=setformvalueUser(e.target.value);
    }
    return  condition=setformvaluePass(e.target.value);
}

const DBChange=(key:string,value:string)=>{
 return localStorage.setItem(key,value)
}
const DBCheck=(username:string,password:string)=>{
     return getUser === username && getPass === password?true:false;
}
const navigate=useNavigate();
  useEffect(()=>{
    document.title='initer3737 | game'
          //login sucess
      if(getToken !== 'false'){
        navigate('/loadingCounterStrike/game')
        // initialize the cookie
        Kuki__initialize()
      }
  },[getPass,getUser,getToken])
  // audio themes
//   const themes=[
//     themeSound1,
//     themeSound2,
//     themeSound3,
//     themeSound4,
//     themeSound5,
//     themeSound6,
//     themeSound7,
// ];
const song=new Date().getDay();
  // let audio=new Audio(themes[song]);
  useEffect(() => {
      // audio.loop=true
      // audio.play();
  }, []);
  useEffect(()=>{ //to stop audio when route is change || unmounting
    // return ()=>audio.pause();
  },[])
  // audio themes
  return (
    <>
        <video src={prajurit} className="moonlight-weejio-begeh" loop muted autoPlay></video>
      <form action="" className=''>
        <div className="form-login">
          <div className="d-flex justify-content-center align-items-center position-absolute style-form">
            <div className="d-flex flex-column px-3 py-4 gap-1">
              <p className="color-1 h5 text-center">
                <Icon variant={"info"} icon={"lightning"} name={" "} />
                counter strike
              </p>
              <p className="text-light">
                  <Icon
                      variant={`${
                        isLogin ===true?
                          getUser === formvalueUser 
                                &&
                          getPass === formvaluePass? "info" : "danger"
                                  :
                            formvalueUser.length >5
                                   &&
                            formvaluePass.length >5? "info" : "danger"
                      }`}
                      icon={"check-circle"}
                      name={" "}
                    />
                {isLogin?'login':'register'} status : 
                              {
                                isLogin
                                  ?  
                          formvalueUser === getUser && 
                          formvaluePass === getPass?'login success':'login fail!'
                                :
                          formvaluePass.length>5 && formvalueUser.length>5?'register success':'registerfail'
                              }
              </p>
              <p className="text-white d-none d-lg-block">
                  <Icon
                      variant={`${
                            isLogin?
                        getUser === formvalueUser? "info" : "danger"
                                  :
                        formvalueUser.length>5? "info" : "danger"
                      }`}
                      icon={"check-circle"}
                      name={" "}
                      />
                user : {formvalueUser}
              </p>
              <p className="text-white d-none d-lg-block">
                  <Icon
                      variant={`${
                          isLogin?
                        getPass === formvaluePass? "info" : "danger"
                                  :
                        formvaluePass.length>5? "info" : "danger"
                      }`}
                      icon={"check-circle"}
                      name={" "}
                      />
                      password : {formvaluePass}
              </p>
              <p className="color-1 h5 text-center">
                <Icon
                  variant={"info"}
                  icon={`${isLogin ? "box-arrow-in-right" : "pencil-square"}`}
                  name={" "}
                />
                {isLogin ? "Login" : "register"}
              </p>
              <div className="d-flex flex-column gap-2">
                <label htmlFor="user" className='text-white fs-5 '>username</label>
                <input
                  autoFocus
                  type="text"
                  onChange={(e) => changeValue(e, true)}
                  placeholder="username"
                  required
                  id="user"
                  value={formvalueUser}
                  minLength={5}
                  autoComplete={"off"}
                />
                <label htmlFor="pass" className='text-white fs-5 '>password</label>
                <input
                  type="password"
                  onChange={(e) => changeValue(e, false)}
                  placeholder="password"
                  required
                  id="pass"
                  value={formvaluePass}
                  minLength={5}
                />
                <Button
                  variant={"outline-info rounded-pill"}
                  name={""}
                  onClick={() => {
                    const username = formvalueUser;
                    const password = formvaluePass;
                    if (isLogin) {
                      //login function
                      if (!DBCheck(username, password)) {
                        setLoginMsg("login fail");
                        DBChange("token", "false");
                        //clear value input
                        setformvalueUser("");
                        setformvaluePass("");
                        return;
                      }

                      setLoginMsg("login nice 69");
                      DBChange("token", "true");
                      //clear value input
                      setformvalueUser("");
                      setformvaluePass("");
                    }
                    if (!isLogin) {
                      if(username.length > 5 && password.length > 5)
                      {
                        //register function
                        DBChange("username", username);
                        DBChange("password", password);
                        //clear value input
                        setformvalueUser("");
                        setformvaluePass("");
                      }
                    }
                  }}
                  disableOnClick={false}
                  allAttr={{}}
                >
                  <Icon
                    variant={"light"}
                    icon={`${isLogin ? "box-arrow-in-right" : "pencil-square"}`}
                    name={` ${isLogin ? "Login" : "register"}`}
                  />
                </Button>
                <a
                  role="button"
                  data-bs-toggle="modal"
                  data-bs-target="#resetInfo"
                  className={`btn btn-outline-info px-3 py-2 rounded-pill ${getPass && getToken && getUser?'d-block':'d-none'}`}
                >
                  <Icon
                    variant={"light"}
                    icon={"card-text"}
                    name={" forgot password"}
                  />
                </a>
                <div className="d-inline">
                  <h3 className='fs-5 link-harvester' onClick={()=>navigate('/loadingCounterStrike/home')}>
                    homepage
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </form>

      {/*char info  */}
      <Modal
        modalTitle={" forgot password"}
        modalId={"resetInfo"}
        modalTitleIcon={"info-circle"}
      >
        <div className="text-center">
          <Icon variant={"info text-center"} icon={"info-circle"} name={" "} />
          <p className="d-inline">informasi</p>
        </div>
        <hr />
        <div className="d-flex justify-content-center px-3 flex-row py-2 px-3">
            <p className="border-start border-info px-2">
              <Icon variant={"info"} icon={"person-circle"} name={` `} />
              reset akun!
            </p>
        </div>
        <div className="d-flex flex-column p-2 mx-auto align-items-center justify-content-center">
          <div className="d-flex flex-column align-items-center gap-3"></div>
          <div className="d-flex justify-content-between align-items-center gap-3 flex-row">
            <div className="">
              <div className="border-start px-3 border-info my-3">
                <input
                  type="text"
                  placeholder="username"
                  onChange={() => setformResetvalueUser(getUser!!)}
                  value={formResetvalueUser}
                  // disabled
                />
              </div>
              <div className="border-start px-3 border-info my-3">
                <input 
                  type="password" placeholder="password"
                  onChange={(e) => setformResetvaluePass(e.target.value)}
                  value={formResetvaluePass}
                />
              </div>
            </div>

            <div className="d-flex flex-column justify-content-center align-items-center gap-2 pt-3">
              <div className="">
                <div className="border-start px-3 border-info">
                  {/* <p>status: {getUser}</p> */}
                  <p>
                    username :{" "}
                    <Icon
                      variant={`${
                        getUser === formResetvalueUser ? "info" : "danger"
                      }`}
                      icon={"check-circle"}
                      name={""}
                    />
                  </p>
                </div>
              </div>
              <div className="">
                <div className="border-start px-3 border-info">
                  <p>
                    password :
                    <Icon
                      variant={`${
                        formResetvaluePass.length >=5 ? "info" : "danger"
                      }`}
                      icon={"check-circle"}
                      name={""}
                    />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <p className="text-center d-inline">
          <Icon variant={"info"} icon={"exclamation-triangle"} name={" "} />
          confirmation!
        </p>
        <div className="d-flex flex-column px-3 py-2">
          <p>
            <Icon variant={"info"} icon={"pencil-square"} name={" "} />
            username : {getUser??''}
          </p>
          <p>
            <Icon variant={"info"} icon={"pencil-square"} name={" "} />
            password : {formResetvaluePass??''}
          </p>
        </div>
        <hr />
        <Button
          variant={""}
          name={""}
          onClick={() => {

            if(formResetvaluePass.length > 5 && formResetvalueUser === getUser){
              DBChange('password',formResetvaluePass);
              setformResetvalueUser('')
              setformResetvaluePass('')
              document.getElementById('modalClose')?.click();
            }
          }}
          disableOnClick={false}
          allAttr={{}}
        >
          <Icon variant={"info"} icon={"chevron-bar-expand"} name={" "} />
          <p className="d-inline text-light">reset</p>
          <Icon variant={"info"} icon={"chevron-double-left"} name={" "} />
          <Icon variant={"info"} icon={"chevron-double-left"} name={" "} />
        </Button>
        <hr />
      </Modal>
    </>
  );//cek pass dan username
}


