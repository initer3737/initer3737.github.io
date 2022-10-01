import React from "react";
    import {
        Routes as Switch, // similiar to switch
        Route ,
        Navigate,
        BrowserRouter as Router,
        Link
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
        // Link,
        Icon
    } from '../assembleComponent'

   export default function Routes(){
     return (
        <>
            <nav className="d-flex gap-3 px-2">
                {/* <Link to={"/quotes"}>quotes</Link> */}
                <a href="/quotes">kuotes</a>
                <a href="/">back</a>
                        {/* <Link 
                            variant="primary" 
                            name={'home'} 
                            href="/" 
                            isIcon={true} 
                            icon={"house-fill"}    
                            />
                        <Link 
                            variant="primary" 
                            name={'about'} 
                            href="/about" 
                            isIcon={true} 
                            icon={"alexa"}    
                            />
                        <Link 
                            variant="primary" 
                            name={'言葉'} 
                            href="/quotes" 
                            isIcon={true} 
                            icon={"chat-text"}    
                            /> */}
                </nav>
                        <Header/>
                            <Router>
                                <Switch>
                                    <Route path="/" element={<HomePage />} />
                                    <Route path="/about" element={<About />} />
                                    <Route path="/lyrics" element={<LyricSong />} />
                                    <Route path="/quotes" element={<Quotes />} />
                                    <Route path="/pantau/covid" element={<Covid />} />
                                    <Route path="/404" element={<NotFound/>} />
                                    <Route path='*' element={<Navigate replace to='/404'/>} />
                                </Switch>
                            </Router>
                        <Footer/>   
        </>
     )
    }