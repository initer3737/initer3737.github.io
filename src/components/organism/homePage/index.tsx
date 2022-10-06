import React from 'react'
import Video from '../../../imgs/Earth - 4788.mp4'
import {Clock} from '../../../utils'
import { LinkToPage,Icon,Button} from '../../atom'
export default function HomePage()
 {
  return (
     <>
      <div className="container bg-light shadow rounded  d-flex flex-column gap-4 justify-content-center align-content-center align-items-center p-2">
          <div className="row d-flex align-content-center align-items-center">
              <div className="col-12">
                <div className="bg-4 text-capitalize d-flex justify-content-start">
                  <Icon variant={'white'} icon={'clock-fill color-1'} name={''}/>
                  <div id="fulldate" className="h4 text-light p-2 fs-5"><Clock /></div>
                </div>
              </div>

              <div className="col-10 col-md-5 col-lg-4">
                <div className="card shadow m-2 p-1 position-relative">
                  <video src={`${Video}`} loop muted autoPlay className="w-100 rounded-pill py-5 px-2"></video>
                  <div className="filter2"></div>
                </div>
              </div>

              <div className="col-10 col-md-9 col-lg-8">
                <h5 className="text-capitalize">
                  <Icon variant={'dark'} icon={'medium'} name={''}/> social media.
                </h5>
                <div className="d-flex flex-row align-content-center align-items-center gap-3">
                  <div className="d-flex flex-column fs-4">
                      <LinkToPage 
                        href={"https://www.instagram.com/yotsusan_machi/"}
                        target="_blank"
                        variant={'primary'}
                        name={'instagram'}
                        icon={'instagram'}                        
                      />
                      <LinkToPage 
                        href={"https://github.com/initer3737"}
                        target="_blank"
                        variant={'primary'}
                        name={'github'}
                        icon={'github'}                        
                      />
                  </div>
                  <div className="">
                        <Button 
                          href={'#/game'}
                          variant={'outline-primary rounded-pill px-5 py-2'}
                          name={'Game'} 
                          onClick={''}  
                          disableOnClick={true} 
                          disableHref={false}                       
                          />
                    </div>
              </div>
              </div>

          </div>
      </div>
      {/* <!-- https://www.fiverr.com/share/lYqN8j --> */}
      <div className="container bg-light shadow mt-5 d-flex flex-column gap-1 justify-content-center align-content-center align-items-center p-2">
          <h5><Icon variant={'dark'} icon={'briefcase-fill'} name={''}
          /> framework.</h5>
            <h3><Icon variant={'danger'} icon={'ubuntu'} name={''}/> laravel</h3>
              <h3><Icon variant={'primary'} icon={'bootstrap'} name={''}/> bootstrap 5</h3>
          </div>
    {/* </div> */}

      <div className="container bg-light shadow mt-5 d-flex flex-column  justify-content-center align-content-center align-items-center p-2">
          <h5><Icon variant={'dark'} icon={'code-slash'} name={''}/> language.</h5>
              <h3><Icon variant={' php'} icon={'filetype-php'} name={''}/> php</h3>
              <h3><Icon variant={'warning'} icon={'filetype-js'} name={''}/> javascript</h3>
              <h3><Icon variant={' mysql'} icon={'filetype-sql'} name={''}/> mysql</h3>
              <h3><Icon variant={' html'} icon={'filetype-html'} name={''}/> html 5</h3>
              <h3><Icon variant={' css'} icon={'filetype-css'} name={''}/> css</h3>
          </div>

      <div className="container bg-light shadow mt-5 d-flex flex-column gap-1 justify-content-center align-content-center align-items-center p-2">
        <h5><Icon variant={'primary'} icon={'info-circle'} name={''}/> information.</h5>
        <div className="fs-4 d-flex flex-column flex-sm-row gap-3">
          <>
            <LinkToPage 
              href={"https://initer3737.github.io/course/html/pages/course.html"}
              target="_blank"
              variant={'primary'}
              name={'website'}
              icon={'globe'}                        
            />
          </>
          <>
            <LinkToPage 
              href={"https://initer3737.github.io/tongkronganku/pages/umkms/epri-cilok/toko.html"}
              target="_blank"
              variant={'primary'}
              name={'bussines'}
              icon={'shop-window'}                        
            />
          </>
          <>
            <LinkToPage 
              href={"https://www.youtube.com/channel/UClsfa0LkA3_YMsFjW1M__sw"}
              target="_blank"
              variant={'primary'}
              name={'youtube'}
              icon={'youtube'}                        
            />
          </>
        </div>
      </div>
     </>
  )
}

