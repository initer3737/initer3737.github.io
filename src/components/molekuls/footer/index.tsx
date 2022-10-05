import React from 'react'
import { Icon } from '../../atom'
import Button from '../../atom/button'
export default function Footer() {
  return (
    <footer className="mb-auto text-light row bg-4 p-2">
      <div className="container text-center">
        <div className="col-3 col-md-6 col-12">
         
        </div>
        <div className="col-3 col-md-6 col-12"></div>
        <div className="col-3 col-md-6 col-12"></div>
        <div className="col-3 col-md-6 col-12"></div>
      </div>
        <div className="col-12 text-center">
          <h3 className='fw-bold'>
            <Icon variant={'light'} icon={'arrow-repeat'} name={'いってらっしゃい!!'}
            />
            </h3>
        </div>
    </footer>
  )
}
