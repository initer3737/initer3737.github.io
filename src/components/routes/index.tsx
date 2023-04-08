import React, { useEffect } from "react";
import {useLocation} from 'react-router-dom'
import favicon from '../../imgs/kitten-7157608.png';
    import {
        Routes as Switch, // similiar to switch
        Route ,
        Navigate
        } from 'react-router-dom'
    import {
        NotFound,
        HomePage,
        Anime,
        About,
        Quotes,
        Game,
        CrystalHarvester,
        CrystalHarvesterLogin,
        CrystalHarvesterReset,
        CrystalHarvesterRegister,
    } from '../pages'
    import {
        Header,
        Footer,
        Nav,
        ScrollToTop,
        LoadingAnimatsi,
        LoadingAnimatsiCounterStrike,
    } from '../assembleComponent'
import {
     Login ,
     ProtectedRoutes,
     ProtectedRoutesAuth,
} from "../services";


export default function Routes(){
    const location=useLocation();
        const {pathname}=location;
        const path=pathname.split('/')[1];   
  useEffect(() => {
        const changeFavicon=(src:string)=>{
           let favicon=document.getElementById('favicon')?.getAttribute('href')
           return favicon=src;
        }
        changeFavicon(favicon)
    }, []);

     return (
        <div className="d-flex flex-column h-100 w-100 overflow-x-hidden">
            <div className={`w-100 ${path === 'game'?'d-none':'d-block'}`}>
                <ScrollToTop/>
                <Nav/>
                <Header/>
            </div>
               <>
                    <Switch>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/quotes" element={<Quotes />} />
                        <Route path="/animes" element={<Anime />} />
                        <Route  element={<ProtectedRoutes navigate='/loadingCounterStrike/login'/>}>
                            <Route path="/game" element={<Game/>} />
                        </Route>
                        <Route  element={<ProtectedRoutes navigate='/loading/crystal&login'/>}>
                            <Route path="/crystal" element={<CrystalHarvester/>} />
                        </Route>
                                {/* crystal harvester start */}
                        <Route  element={<ProtectedRoutes navigate='/loading/crystal&login'/>}>
                            <Route path="/crystal" element={<CrystalHarvester/>} />
                        </Route>
                        <Route  element={<ProtectedRoutesAuth navigate='/loading/crystal'/>}>
                            <Route path="/crystal/login" element={<CrystalHarvesterLogin/>} />
                            <Route path="/crystal/register" element={<CrystalHarvesterRegister/>} />
                            <Route path="/crystal/reset" element={<CrystalHarvesterReset/>} />
                        </Route>
                                 {/* crystal harvester end */}
                        <Route path="/loading/:url" element={<LoadingAnimatsi/>} />
                        <Route path="/loadingCounterStrike/:url" element={<LoadingAnimatsiCounterStrike/>} />
                        <Route path="/login" element={<Login/>} />
                        <Route path="/404" element={<NotFound/>} />
                        <Route path='*' element={<Navigate replace to='/404'/>} />
                    </Switch>
               </>
            <div className={`${path === 'crystal' || path === 'login' || path === 'loadingCounterStrike' || path === 'game' || path === 'loading'?'d-none':'d-block'}`}>
                <Footer/>
            </div>   
        </div>
     )
}