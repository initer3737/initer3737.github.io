import React from 'react'
import './nav.css'
import { useLocation } from 'react-router-dom';
import {Link} from '../../atom'
export default function Nav() {
    const location=useLocation();
        const {pathname}=location;
        const splitLokasi=pathname.split('/');
  return (
    <nav className="bg-4" id='nav'>
       <div className="mx-4 d-flex gap-3 px-2 py-4 flex-wrap">
            <Link 
                target={""}
                variant={`${splitLokasi[1]===''?'light':'info'}`}
                name={'home'} 
                href="/" 
                isIcon={true} 
                icon={"house-fill"}    
                />
            <Link
                target={''} 
                variant={`${splitLokasi[1]==='about'?'light':'info'}`} 
                name={'about'} 
                href="/about" 
                isIcon={true} 
                icon={"alexa"}    
                />
            <Link 
                target={''}
                variant={`${splitLokasi[1]==='quotes'?'light':'info'}`} 
                name={'言葉'} 
                href="/quotes" 
                isIcon={true} 
                icon={"chat-text"}    
                /> 
            <Link 
                target={''}
                variant={`${splitLokasi[1]==='animes'?'light':'info'}`} 
                name={'animes'} 
                href="/animes" 
                isIcon={true} 
                icon={"film"}    
                /> 
        </div>         
    </nav>
  )
}
