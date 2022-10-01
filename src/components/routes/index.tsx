import React from "react";
    import {
        Routes as Switch, // similiar to switch
        Route ,
        Navigate,
        useLocation
        } from 'react-router-dom'
    import {
        NotFound,
        HomePage,
        Covid,
        About,
        LyricSong,
        Quotes
    } from '../pages'
    import {
        Header,
        Footer,
        Link as Links
    } from '../assembleComponent'

   export default function Routes(){
        const location=useLocation();
        const {pathname}=location;
        const splitLokasi=pathname.split('/');
     return (
        <>
            <nav className="d-flex gap-3 px-2 py-4 flex-wrap bg-4 ">
                <Links 
                    variant={`${splitLokasi[1]===''?'light':'info'}`}
                    name={'home'} 
                    href="/" 
                    isIcon={true} 
                    icon={"house-fill"}    
                    />
                <Links 
                    variant={`${splitLokasi[1]==='about'?'light':'info'}`} 
                    name={'about'} 
                    href="/about" 
                    isIcon={true} 
                    icon={"alexa"}    
                    />
                <Links 
                    variant={`${splitLokasi[1]==='quotes'?'light':'info'}`} 
                    name={'言葉'} 
                    href="/quotes" 
                    isIcon={true} 
                    icon={"chat-text"}    
                    />
                </nav>
                        <Header/>
                                <Switch>
                                    <Route path="/" element={<HomePage />} />
                                    <Route path="/about" element={<About />} />
                                    <Route path="/lyrics" element={<LyricSong />} />
                                    <Route path="/quotes" element={<Quotes />} />
                                    <Route path="/pantau/covid" element={<Covid />} />
                                    <Route path="/404" element={<NotFound/>} />
                                    <Route path='*' element={<Navigate replace to='/404'/>} />
                                </Switch>
                        <Footer/>   
        </>
     )
    }