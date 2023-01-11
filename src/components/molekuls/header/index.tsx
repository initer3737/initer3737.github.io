import React from 'react'
import Cookie from 'js-cookie'
import {Img} from '../../atom'
import './header.css'
import Banner from '../../../imgs/banner-982162_1920.jpg'
export default function Header() {
  return (
    <header className="bg-4 text-light mb-3">
         <Img src={`${Banner}`} alt="" className="shadow header__image" srcset={''} width={''} height={''} attr={[]}/> 
    </header> 
  )
}
