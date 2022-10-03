import React from 'react'
import './nav.css'
import { useLocation } from 'react-router-dom';
import {Link} from '../../atom'
export default function Nav() {
    const location=useLocation();
        const {pathname}=location;
        const splitLokasi=pathname.split('/');
  return (
    <nav className="d-flex gap-3 px-2 py-4 flex-wrap bg-4 " id='nav'>
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
                    variant={`${splitLokasi[1]==='lyrics'?'light':'info'}`} 
                    name={'songs'} 
                    href="/lyrics" 
                    isIcon={true} 
                    icon={"file-music-fill"}    
                    /> 
                {/* <Link 
                    target={''}
                    variant={`${splitLokasi[1]==='pantau-covid'?'light':'info'}`} 
                    name={'data covid'} 
                    href="/pantau-covid" 
                    isIcon={true} 
                    icon={"virus"}    
                    />  */}
                </nav>
  )
}
