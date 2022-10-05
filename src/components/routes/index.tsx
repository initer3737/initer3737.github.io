import React from "react";
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
        LyricSong,
        Quotes
    } from '../pages'
    import {
        Header,
        Footer,
        Nav
    } from '../assembleComponent'

   export default function Routes(){
     return (
        <div className="d-flex flex-column justify-space-between h-100">
            <>
                <Nav/>
                <Header/>
            </>
               <>
                    <Switch>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/lyrics" element={<LyricSong />} />
                        <Route path="/quotes" element={<Quotes />} />
                        <Route path="/Anime" element={<Anime />} />
                        <Route path="/404" element={<NotFound/>} />
                        <Route path='*' element={<Navigate replace to='/404'/>} />
                    </Switch>
               </>
            <>
                <Footer/>
            </>   
        </div>
     )
    }