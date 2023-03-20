import React from 'react'
import Video from '../../../imgs/Earth - 4788.mp4'
import LDV from '../../../imgs/LDV.jpg'
import ODV from '../../../imgs/ODV.jpg'
import LRV from '../../../imgs/LRV.png'
import TSV from '../../../imgs/TSV.png'
import TSR from '../../../imgs/TSR.png'
import './home.css'
import {Clock} from '../../../utils'
import { LinkToPage,Icon, Img} from '../../atom'
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
                  <div className="border-atas-kanan">
                    <Icon variant={' hiasan-utama'} icon={'suit-diamond-fill'} name={''}/> 
                  </div>
                  <div className="border-atas-kiri">
                    <Icon variant={' hiasan-utama'} icon={'suit-diamond-fill'} name={''}/> 
                  </div>
                  <div className="border-bawah-kanan">
                    <Icon variant={' hiasan-utama'} icon={'suit-diamond-fill'} name={''}/> 
                  </div>
                  <div className="border-bawah-kiri">
                    <Icon variant={' hiasan-utama'} icon={'suit-diamond-fill'} name={''}/> 
                  </div>
                  <video src={`${Video}`} loop muted autoPlay className="w-100 rounded-pill py-5 px-2"></video>
                  <div className="filter2"></div>
                </div>
              </div>

              <div className="col-10 col-md-9 col-lg-8">
                <h5 className="text-capitalize">
                  <Icon variant={'dark'} icon={'medium'} name={''}/> social media.
                  <Icon variant={' hiasan-utama'} icon={'suit-diamond-fill'} name={''}/> 
                </h5>
                <div className="d-flex flex-row align-content-center align-items-center gap-3 flex-wrap">
                  <div className="d-flex flex-column fs-4">
                      <LinkToPage 
                        href={"https://www.instagram.com/yotsusan_machi/"}
                        target="_blank"
                        variant={'primary'}
                        name={'instagram'}
                        icon={'instagram'} className={''}                      />
                      <LinkToPage 
                        href={"https://github.com/initer3737"}
                        target="_blank"
                        variant={'primary'}
                        name={'github'}
                        icon={'github'} className={''}                      />
                  </div>
                  <div className="">
                        <LinkToPage 
                            href={'#/game'}
                            variant={'outline-primary'}
                            name={' Game'} 
                            icon={'controller'} 
                            target={''} 
                            className={'btn btn-outline-info py-3 px-5 rounded-pill shadow'}                          
                            />
                    </div>
              </div>
              </div>

          </div>
      </div>
      <div className="overflow-hidden position-relative container bg-light shadow mt-5 d-flex flex-column gap-1 justify-content-center align-content-center align-items-center p-2 banners-hoverable-effect">
          <h5><Icon variant={'dark'} icon={'briefcase-fill'} name={''}
          /> framework.
          <Icon variant={' hiasan-utama'} icon={'suit-diamond-fill'} name={''}/>  
          </h5>
            <h3><Icon variant={'danger'} icon={'ubuntu'} name={''}/> laravel</h3>
              <h3><Icon variant={'primary'} icon={'bootstrap'} name={''}/> bootstrap 5</h3>
          <div className="d-flex justify-content-between w-100">
            <Icon variant={''} icon={'suit-diamond-fill hiasan'} name={''}/> 
            <Icon variant={''} icon={'suit-diamond-fill hiasan'} name={''}/> 
            <Icon variant={''} icon={'suit-diamond-fill hiasan'} name={''}/> 
          </div>
              <div className="border-atas-kiri">
                <div className="border"></div>
              </div>
              <div className="border-atas-kanan">
                <div className="border"></div>
              </div>
          </div>

      <div className="container bg-light shadow mt-5 d-flex flex-column  justify-content-center align-content-center align-items-center p-2 ">
          <h5>
              <Icon variant={'dark'} icon={'code-slash'} name={''}/> language.
              <Icon variant={' hiasan-utama'} icon={'suit-diamond-fill'} name={''}/> 
          </h5>
              <h3><Icon variant={' php'} icon={'filetype-php'} name={''}/> php</h3>
              <h3><Icon variant={'warning'} icon={'filetype-js'} name={''}/> javascript</h3>
              <h3><Icon variant={' mysql'} icon={'filetype-sql'} name={''}/> mysql</h3>
              <h3><Icon variant={' html'} icon={'filetype-html'} name={''}/> html 5</h3>
              <h3><Icon variant={' css'} icon={'filetype-css'} name={''}/> css</h3>
          </div>
                  {/* banners */}
      <div className="position-relative overflow-hidden container bg-light shadow mt-5 d-flex flex-column gap-1 justify-content-center align-content-center align-items-center p-2 banners-hoverable-effect">
        <h5>
          <Icon variant={'primary'} icon={'info-circle'} name={''}/> banners
          <Icon variant={' hiasan-utama'} icon={'suit-diamond-fill'} name={''}/> 
        </h5>
        <div className="fs-4 d-flex flex-column flex-sm-row gap-3">
          <div className='d-flex flex-column justify-content-center align-items-center position-relative'>
            <Img src={TSR} alt={'tsr'} srcset={''} className={'banner-icon'} width={''} height={''} attr={undefined}/>
                TSR
            <div className="hoverable-effect">
                <h5>typescript react</h5>
            </div>
          </div>
          <div className='d-flex flex-column justify-content-center align-items-center position-relative'>
                <Img src={TSV} alt={'tsv'} srcset={''} className={'banner-icon'} width={''} height={''} attr={undefined}/>
                TSV
            <div className="hoverable-effect">
                <h5>typescript vue</h5>
            </div>
          </div>
          <div className='d-flex flex-column justify-content-center align-items-center position-relative'>
                <Img src={LRV} alt={'lrv'} srcset={''} className={'banner-icon'} width={''} height={''} attr={undefined}/>
               LRV
            <div className="hoverable-effect">
                <h5>php laravel</h5>
            </div>
          </div>
          <div className='d-flex flex-column justify-content-center align-items-center'>
              <div className="position-relative">
                <Img src={LDV} alt={'ldv'} srcset={''} className={'banner-icon'} width={''} height={''} attr={undefined}/>
                  <div className="mata-container">
                    <Icon variant={' php'} icon={'circle-fill mata'} name={''}/>
                    <Icon variant={' php'} icon={'circle-fill mata'} name={''}/>
                  </div>
              </div>
               LDV
          </div>
          <div className='d-flex flex-column justify-content-center align-items-center'>
              <div className="position-relative">
                <Img src={ODV} alt={'ldv'} srcset={''} className={'banner-icon'} width={''} height={''} attr={undefined}/>
                  <div className="mata-container">
                    <Icon variant={' mysql'} icon={'circle-fill mata'} name={''}/>
                    <Icon variant={' mysql'} icon={'circle-fill mata'} name={''}/>
                  </div>
              </div>
               ODV
          </div>
          <div className="banners-border-kiri-atas">
            <div className="banners-border"></div>
          </div>
        </div>
      </div>

      <div className="position-relative overflow-hidden container bg-light shadow mt-5 d-flex flex-column gap-1 justify-content-center align-content-center align-items-center p-2 ">
        <h5>
          <Icon variant={'primary'} icon={'info-circle'} name={''}/> information
          <Icon variant={' hiasan-utama'} icon={'suit-diamond-fill'} name={''}/> 
        </h5>
        <div className="fs-4 d-flex flex-column flex-sm-row gap-3">
          <>
            <LinkToPage 
              href={"https://course-4dr4n0zwn-initer3737.vercel.app/"}
              target="_blank"
              variant={'primary'}
              name={'blog'}
              icon={'file-richtext-fill'} className={''}            />
          </>
          <>
            <LinkToPage 
              href={"https://language-rho.vercel.app/"}
              target="_blank"
              variant={'primary'}
              name={'blog2'}
              icon={'file-richtext-fill'} className={''}            />
          </>
          <>
            <LinkToPage 
              href={"https://initer3737.github.io/tongkronganku/"}
              target="_blank"
              variant={'primary'}
              name={'bussines'}
              icon={'shop-window'} className={''}            />
          </>
          <>
            <LinkToPage 
              href={"https://initer3737.github.io/galeri"}
              target="_blank"
              variant={'primary'}
              name={'galeri'}
              icon={'shop'} className={''}            />
          </>
          <>
            <LinkToPage 
              href={"https://www.youtube.com/channel/UClsfa0LkA3_YMsFjW1M__sw"}
              target="_blank"
              variant={'primary'}
              name={'youtube'}
              icon={'youtube'} className={''}            />
          </>
        </div>
        <div className="banners-border-kanan-bawah">
            <div className="banners-border"></div>
        </div>
        <div className="bintang-container d-flex justify-content-between w-75">
          <div className="d-flex">
            <Icon variant={'primary'} icon={'moon-stars-fill'} name={''}/>
            <Icon variant={'primary'} icon={'moon-stars-fill'} name={''}/>
          </div>
          <div className="d-flex">
            <Icon variant={' primary'} icon={'star-fill'} name={''}/>
            <Icon variant={' primary'} icon={'star-fill'} name={''}/>
            <Icon variant={' primary'} icon={'star-fill'} name={''}/>
          </div>
          <div className="d-flex">
            <Icon variant={'primary'} icon={'moon-stars-fill'} name={''}/>
            <Icon variant={'primary'} icon={'moon-stars-fill'} name={''}/>
          </div>
        </div>

      </div>
      <div className="position-relative overflow-hidden container bg-light shadow mt-5 d-flex flex-column gap-1 justify-content-center align-content-center align-items-center p-2">
        <h5>
          <Icon variant={'primary'} icon={'info-circle'} name={''}/> spesial thanks to.
          <Icon variant={' hiasan-utama'} icon={'suit-diamond-fill'} name={''}/> 
        </h5>
        <div className="fs-4 d-flex flex-column flex-sm-row gap-3 flex-wrap">
          <>
            <LinkToPage 
              href={"https://pixabay.com/"}
              target="_blank"
              variant={'primary'}
              name={' pixabay'}
              icon={'stars'} className={''}            />
          </>
          <>
            <LinkToPage 
              href={"https://colorhunt.co/"}
              target="_blank"
              variant={'primary'}
              name={' colorhunt'}
              icon={'stars'} className={''}            />
          </>
          <>
            <LinkToPage 
              href={"https://icons.getbootstrap.com/"}
              target="_blank"
              variant={'primary'}
              name={' bootstrap icon'}
              icon={'stars'} className={''}            />
          </>
          <>
            <LinkToPage 
              href={"https://www.cursors-4u.com/cursor/2009/04/28/free-2.html"}
              target="_blank"
              variant={'primary'}
              name={' cursors4u'}
              icon={'stars'} className={''}            />
          </>
          <>
            <LinkToPage 
              href={"https://lyricstranslate.com"}
              target="_blank"
              variant={'primary'}
              name={' lyricstranslate.com'}
              icon={'stars'} className={''}            />
          </>
          <>
            <LinkToPage 
              href={"https://iconscout.com/"}
              target="_blank"
              variant={'primary'}
              name={' iconscout.com'}
              icon={'stars'} className={''}            />
          </>
        </div>
            <div className="banners-border-kiri-atas">
              <div className="banners-border"></div>
            </div>
          <div className="berlian-container d-flex justify-content-between w-100">
            <Icon variant={'primary'} icon={'gem berlian berlian-double-kanan'} name={''}/>
            <Icon variant={'primary'} icon={'gem single-gem'} name={''}/>
            <Icon variant={'primary'} icon={'gem berlian berlian-double-kiri'} name={''}/>
          </div>
      </div>
     </>
  )
}

