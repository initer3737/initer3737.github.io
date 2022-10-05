import React from 'react'
import {Img} from '../../atom'
import Banner from '../../../imgs/banner-982162_1920.jpg'
export default function Header() {
  return (
    <header className=" bg-4 text-light mb-3">
         <Img src={`${Banner}`} alt="" className="col-12 shadow" srcset={''} width={''} height={''} attr={[]}/> 
    </header> 
  )
}
