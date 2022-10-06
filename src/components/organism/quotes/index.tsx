import React from 'react'
import { Icon } from '../../atom'

export default function Quotes() {
  return (
    <>
    <div className="row">
          <div className="col-12 mt-5 m-auto bg-4 text-light mb-3 px-2 py-4">
            <div className="text-center "><h5>
              <Icon variant={''} icon={'pencil-square'} name={' '}/> ilusi</h5>
            </div>
            <div className="text-start fs-5 px-5 col-12 col-md-6  m-auto">
              mungkin semuanya baik baik saja
              tanpa disadari ternyata semua itu adalah ilusi...
              semuanya terjebak dalam asumsi.
            </div>
          </div>

          <div className="col-12 mt-5 m-auto bg-4 text-light mb-3 px-2 py-4">
            <div className="text-center "><h5>
              <Icon variant={''} icon={'pencil-square'} name={' '}/> gelap</h5>
            </div>
            <div className="text-start fs-5 px-5 col-12 col-md-6  m-auto">
              rasakan gelapnya malam jangan sering-sering merasakan terangnya siang
            </div>
          </div>
      
          <div className="col-12 mt-5 m-auto bg-4 text-light mb-3 px-2 py-4">
            <div className="text-center "><h5>
              <Icon variant={''} icon={'pencil-square'} name={' '}/> biru</h5>
            </div>
            <div className="text-start fs-5 px-5 col-12 col-md-6  m-auto">
              takkan ada duka tanpa adanya kegembiraan
              semuanya merupakan kesatuan.
            </div>
          </div>
        </div>
    </>
  )
}