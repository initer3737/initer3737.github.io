import React from 'react'
import { Icon, Img, LinkToPage, Modal, VideoFromYoutube } from '../../assembleComponent';
import Logo1 from '../../../imgs/night-1851685_960_720.png'
import Logo2 from '../../../imgs/the-background-292720.png'
import Logo3 from '../../../imgs/wave-305226.png'
import Logo4 from '../../../imgs/watercolor-4116932.png'
import Logo5 from '../../../imgs/landscape-1844226.svg'
import Rumah from '../../../imgs/rumah.jpg'
import Kupu from '../../../imgs/butterfly.png'
import forest from '../../../imgs/forest.jpg'
import bandung from '../../../imgs/bandung.jpg'
import indonesiaFlag from '../../../imgs/indonesia-flag.png'
import {useSong} from './text/song';
import './lyricsong.css'
export default function LyricSong() {
  return (
    <div className='row exposure__container'>
      <span id="exposure__effect"></span>
        <div className="bg-4 text-center text-light p-3">
          <h5 className='fs-5'><Icon variant={' '} icon={'file-music-fill'} name={' '}/> songs [{Object.entries(useSong().translate).length}]</h5>
        </div>

        <div className="mt-5 m-auto bg-4 text-light mb-3 px-2 py-4">
          <div className="text-center ">
            <h5>
              <Icon variant={''} icon={'pencil-square'} name={' '}/> 
              {useSong().original.comet.title}
            </h5>
          </div>
          <div className="text-start fs-5 px-5 col-12 col-md-6  m-auto">
            {useSong().original.comet.lirik}
          </div>
        </div>

    <div className="mt-5 m-auto bg-4 text-light mb-3 px-2 py-4">
      <div className="text-center ">
        <h5>
        <Icon variant={''} icon={'pencil-square'} name={' '}/>
        {useSong().translate.comet.title}
        </h5>
      </div>
      <div className="text-start fs-5 px-5 col-12 col-md-6  m-auto">
          {useSong().translate.comet.lirik}
            <VideoFromYoutube src={useSong().video.comet} />
      </div>
    </div>

       <div className="mt-5 bg-firefork w-100">
        <Img
          src={Logo1}
          className="shadow w-100"
          alt="" srcset={''} width={''} height={''} attr={[]}       
           />
      </div>
    <div className="mt-5 m-auto bg-4 text-light mb-3 px-2 py-4">
          <div className="text-center ">
            <h5>
              <Icon variant={''} icon={'pencil-square'} name={' '}/> 
              {useSong().original.korobushka.title}
            </h5>
          </div>
          <div className="text-start fs-5 px-5 col-12 col-md-6  m-auto">
            {useSong().original.korobushka.lirik}
          </div>
        </div>

    <div className="mt-5 m-auto bg-4 text-light mb-3 px-2 py-4">
      <div className="text-center ">
        <h5>
        <Icon variant={''} icon={'pencil-square'} name={' '}/>  
          {useSong().translate.korobushka.title}
        </h5>
      </div>
      <div className="text-start fs-5 px-5 col-12 col-md-6  m-auto">
      {useSong().translate.korobushka.lirik}
          <VideoFromYoutube src={useSong().video.khorobuska} />
      </div>
    </div>

      <div className="mt-5 bg-firefork w-100">
        <Img
          src={Logo3}
          className="shadow w-100"
          alt="" srcset={''} width={''} height={''} attr={[]}        
          />
      </div>
      <div className="mt-5 m-auto bg-4 text-light mb-3 px-2 py-4">
        <div className="text-center ">
          <h5>
            <Icon variant={''} icon={'pencil-square'} name={' '}/> 
              {useSong().original.yorunikakeru.title}
          </h5>
        </div>
        <div className="text-start fs-5 px-5 col-12 col-md-6  m-auto">
          {useSong().original.yorunikakeru.lirik}
        </div>
      </div>
     
      <div className="mt-5 m-auto bg-4 text-light mb-3 px-2 py-4">
        <div className="text-center ">
          <h5>
          <Icon variant={''} icon={'pencil-square'} name={' '}/> 
            {useSong().translate.yorunikakeru.title}
          </h5>
        </div>
        <div className="text-start fs-5 px-5 col-12 col-md-6  m-auto">
          {useSong().translate.yorunikakeru.lirik}
          <div className="mt-3">
            <div className="text-center py-2">
              <a role={'button'} data-bs-toggle={'modal'} data-bs-target={'#yoru'} className='btn btn-danger btn-effect'
              >
                <Icon variant={''} icon={'exclamation-octagon-fill'} name={' '}/>
                warning!
              </a>
            </div>
            <VideoFromYoutube src={useSong().video.yorunikakeru} />
          </div>
        </div>
      </div>
        {/* modal */}
          <Modal modalTitle={' informasi'} modalId={'yoru'} modalTitleIcon={'exclamation-circle'}>
              <p className='text-center h5'>
                <Icon variant={'light'} icon={'file-music-fill'} name={' yoru ni kakeru'}/>
              </p>
            <p>
                {useSong().text.yorunikakeru_text.text1}
            </p>
            <p>
              {useSong().text.yorunikakeru_text.text2}
            </p>
            <p>
              {useSong().text.yorunikakeru_text.text3}
            </p>
              <div className="d-flex gap-2 flex-column">
                <div className="d-inline">
                <LinkToPage 
                  href={'https://zonabanten.pikiran-rakyat.com/entertainment/pr-232624772/makna-kelam-di-balik-lagu-yoru-ni-kakeru-yoasobi-yang-viral-di-tiktok-ternyata-tak-seasyik-iramanya'}
                  variant={'info'}
                  name={' link referensi'}
                  icon={'info-circle'}
                  target={'_blank'} 
                  className={''}                  
                  />
                </div>
                <div className="d-inline">
                <LinkToPage 
                  href={'https://we-xpats.com/id/guide/as/jp/detail/3153/'} 
                  variant={'info'} 
                  name={' link referensi'} 
                  icon={'info-circle'} 
                  className={''}
                  target={'_blank'}
                  />
                </div>
              </div>
              <div className='text-center h5 d-flex flex-column gap-3 py-2'>
                <Icon variant={'info'} icon={'exclamation-triangle-fill'} name={' disclaimer'}/>
                <p className='h6'>
                    {useSong().text.yorunikakeru_text.text4}
                </p>
              </div>
            <div className='d-flex flex-column gap-2'>
                <p>
                  {useSong().text.yorunikakeru_text.text5}
                </p>
              <div className="d-inline text-center">
                <LinkToPage 
                    href={'https://www.intothelightid.org/tentang-bunuh-diri/hotline-bunuh-diri-di-indonesia/'} 
                    variant={'info'} 
                    name={' call-hotline'} 
                    icon={'telephone-inbound'}
                    className={'text-center'}
                    target={'_blank'}
                  />
              </div>
              </div>
          </Modal>
        {/* end of modal */}
      <div className="mt-5 bg-firefork w-100">
        <Img
          src={Logo2}
          className="shadow w-100"
          alt="" srcset={''} width={''} height={''} attr={[]}        
          />
      </div>

      <div className="mt-5 m-auto bg-4 text-light mb-3 px-2 py-4">
          <div className="text-center ">
            <h5>
              <Icon variant={''} icon={'pencil-square'} name={' '}/> 
              {useSong().original.literature.title}
            </h5>
          </div>
          <div className="text-start fs-5 px-5 col-12 col-md-6  m-auto">
            {useSong().original.literature.lirik}
          </div>
        </div>

    <div className="mt-5 m-auto bg-4 text-light mb-3 px-2 py-4">
      <div className="text-center ">
        <h5>
        <Icon variant={''} icon={'pencil-square'} name={' '}/>
          {useSong().translate.literature.title}
        </h5>
      </div>
      <div className="text-start fs-5 px-5 col-12 col-md-6  m-auto">
        {useSong().translate.literature.lirik}
            <VideoFromYoutube src={useSong().video.literature} />
      </div>
    </div>
    
      <div className="mt-5 bg-firefork w-100">
        <Img
          src={Logo5}
          className="shadow w-100"
          alt="" srcset={''} width={''} height={''} attr={[]}       
           />
      </div>

    <div className="mt-5 m-auto bg-4 text-light mb-3 px-2 py-4">
          <div className="text-center ">
            <h5>
              <Icon variant={''} icon={'pencil-square'} name={' '}/> 
                  {useSong().original.toServeRusia.title}
            </h5>
          </div>
          <div className="text-start fs-5 px-5 col-12 col-md-6  m-auto">
            {useSong().original.toServeRusia.lirik}
          </div>
        </div>

    <div className="mt-5 m-auto bg-4 text-light mb-3 px-2 py-4">
      <div className="text-center ">
        <h5>
        <Icon variant={''} icon={'pencil-square'} name={' '}/> 
          {useSong().translate.toServeRusia.title}
        </h5>
      </div>
      <div className="text-start fs-5 px-5 col-12 col-md-6  m-auto">
          {useSong().translate.toServeRusia.lirik}
          <VideoFromYoutube src={useSong().video.toserverusia} />
      </div>
    </div>

    <div className="mt-5 bg-firefork w-100">
        <Img
          src={Logo4}
          className="shadow w-100"
          alt="" srcset={''} width={''} height={''} attr={[]}       
           />
      </div>

      <div className="mt-5 m-auto bg-4 text-light mb-3 px-2 py-4">
          <div className="text-center ">
            <h5>
              <Icon variant={''} icon={'pencil-square'} name={' '}/> 
              {useSong().original.chernoglaza.title}
            </h5>
          </div>
          <div className="text-start fs-5 px-5 col-12 col-md-6  m-auto">
            {useSong().original.chernoglaza.lirik}
          </div>
        </div>

    <div className="mt-5 m-auto bg-4 text-light mb-3 px-2 py-4">
      <div className="text-center ">
        <h5>
        <Icon variant={''} icon={'pencil-square'} name={' '}/> 
          {useSong().translate.chernoglaza.title}
        </h5>
      </div>
      <div className="text-start fs-5 px-5 col-12 col-md-6  m-auto">
        {useSong().translate.chernoglaza.lirik}
          <VideoFromYoutube src={useSong().video.chernoglaza} />
      </div>
    </div>

    <div className="mt-5 bg-firefork w-100">
        <Img
          src={Rumah}
          className="shadow w-100"
          alt="" srcset={''} width={''} height={''} attr={[]}       
           />
      </div>

      <div className="mt-5 m-auto bg-4 text-light mb-3 px-2 py-4">
          <div className="text-center ">
            <h5>
              <Icon variant={''} icon={'pencil-square'} name={' '}/> 
              {useSong().original.chinderela.title}
            </h5>
          </div>
          <div className="text-start fs-5 px-5 col-12 col-md-6  m-auto">
            {useSong().original.chinderela.lirik}
          </div>
        </div>

    <div className="mt-5 m-auto bg-4 text-light mb-3 px-2 py-4">
      <div className="text-center ">
        <h5>
        <Icon variant={''} icon={'pencil-square'} name={' '}/> 
          {useSong().translate.chinderela.title}
        </h5>
      </div>
      <div className="text-start fs-5 px-5 col-12 col-md-6  m-auto">
        {useSong().translate.chinderela.lirik}
          <VideoFromYoutube src={useSong().video.chinderela} />
      </div>
    </div>

    <div className="mt-5 bg-firefork w-100">
        <Img
          src={Kupu}
          className="shadow w-100"
          alt="" srcset={''} width={''} height={''} attr={[]}       
           />
      </div>

      <div className="mt-5 m-auto bg-4 text-light mb-3 px-2 py-4">
          <div className="text-center ">
            <h5>
              <Icon variant={''} icon={'pencil-square'} name={' '}/> 
              {useSong().original.tanjirou.title}
            </h5>
          </div>
          <div className="text-start fs-5 px-5 col-12 col-md-6  m-auto">
            {useSong().original.tanjirou.lirik}
          </div>
        </div>

    <div className="mt-5 m-auto bg-4 text-light mb-3 px-2 py-4">
      <div className="text-center ">
        <h5>
        <Icon variant={''} icon={'pencil-square'} name={' '}/> 
          {useSong().translate.tanjirou.title}
        </h5>
      </div>
      <div className="text-start fs-5 px-5 col-12 col-md-6  m-auto">
        {useSong().translate.tanjirou.lirik}
          <VideoFromYoutube src={useSong().video.tanjirou} />
      </div>
    </div>

    <div className="mt-5 bg-firefork w-100">
        <Img
          src={forest}
          className="shadow w-100"
          alt="" srcset={''} width={''} height={''} attr={[]}       
           />
      </div>

      <div className="mt-5 m-auto bg-4 text-light mb-3 px-2 py-4">
          <div className="text-center ">
            <h5>
              <Icon variant={''} icon={'pencil-square'} name={' '}/> 
              {useSong().original.temnaya.title}
            </h5>
          </div>
          <div className="text-start fs-5 px-5 col-12 col-md-6  m-auto">
            {useSong().original.temnaya.lirik}
          </div>
        </div>

    <div className="mt-5 m-auto bg-4 text-light mb-3 px-2 py-4">
      <div className="text-center ">
        <h5>
        <Icon variant={''} icon={'pencil-square'} name={' '}/> 
          {useSong().translate.temnaya.title}
        </h5>
      </div>
      <div className="text-start fs-5 px-5 col-12 col-md-6  m-auto">
        {useSong().translate.temnaya.lirik}
          <VideoFromYoutube src={useSong().video.temnaya} />
      </div>
    </div>

    <div className="mt-5 bg-firefork w-100 wasureji__container">
        <div className="shadow   songWasurejiBG blending__mode__blue "></div>
      </div>

      <div className="mt-5 m-auto bg-4 text-light mb-3 px-2 py-4">
          <div className="text-center ">
            <h5>
              <Icon variant={''} icon={'pencil-square'} name={' '}/> 
              {useSong().original.wasureji.title}
            </h5>
          </div>
          <div className="text-start mx-auto fs-5 px-5 col-12 col-md-6">
            {useSong().original.wasureji.lirik}
          </div>
        </div>

    <div className="mt-5 m-auto bg-4 text-light mb-3 px-2 py-4">
      <div className="text-center ">
        <h5>
        <Icon variant={''} icon={'pencil-square'} name={' '}/> 
          {useSong().translate.wasureji.title}
        </h5>
      </div>
      <div className="text-start fs-5 px-5 col-12 col-md-6  m-auto">
        {useSong().translate.wasureji.lirik}
          <div className="mb-3">
            <LinkToPage href={'https://shiguremachi.tumblr.com/post/173025520892/forgotten-words-english-lyrics'} icon={'link'} target={'_blank'} variant={'info'} name={' link referensi'} className={'d-inline'}/>
          </div>
          <VideoFromYoutube src={useSong().video.wasureji} />
      </div>
    </div>

    <div className="mt-5 bg-firefork">
        <div className="shadow songFairyTaleBG blending__mode__blue"/>
      </div>

      <div className="mt-5 m-auto bg-4 text-light mb-3 px-2 py-4">
          <div className="text-center ">
            <h5>
              <Icon variant={''} icon={'pencil-square'} name={' '}/> 
              {useSong().original.fairyTale.title}
            </h5>
          </div>
          <div className="text-start mx-auto fs-5 px-5 col-12 col-md-6">
            {useSong().original.fairyTale.lirik}
          </div>
        </div>

    <div className="mt-5 m-auto bg-4 text-light mb-3 px-2 py-4">
      <div className="text-center ">
        <h5>
        <Icon variant={''} icon={'pencil-square'} name={' '}/> 
          {useSong().translate.fairyTale.title}
        </h5>
      </div>
      <div className="text-start fs-5 px-5 col-12 col-md-6  m-auto">
        {useSong().translate.fairyTale.lirik}
          <div className="mb-3">
            <LinkToPage href={'https://youtu.be/m8TfY3xfYR0?list=PLBX8-8t4YfAbDLPPlW9VyRsdD_45q4PsT'} icon={'link'} target={'_blank'} variant={'info'} name={' link referensi'} className={'d-inline'}/>
          </div>
          <VideoFromYoutube src={useSong().video.fairyTale} />
      </div>
    </div>

    <div className="mt-5 bg-firefork">
        <Img
          src={bandung}
          className="shadow w-100"
          alt="" srcset={''} width={''} height={''} attr={[]}       
           />
      </div>

    <div className="mt-5 m-auto bg-4 text-light mb-3 px-2 py-4">
      <div className="text-center ">
        <Img
          src={indonesiaFlag}
          className="shadow img-fluid w-25 px-3 mb-3"
          alt="" srcset={''} width={''} height={''} attr={[]}       
           />
        <h5>
        <Icon variant={''} icon={'pencil-square'} name={' '}/> 
          {useSong().original.bandung.title}
          <Icon variant={'info'} icon={'hearts'} name={' '}/> 
        </h5>
      </div>
      <div className="text-start fs-5 px-5 col-12 col-md-6  m-auto">
        {useSong().original.bandung.lirik}
      </div>
    </div>

    <div className="mt-5 m-auto bg-4 text-light mb-3 px-2 py-4">
      <div className="text-center ">
        <Img
          src={indonesiaFlag}
          className="shadow img-fluid w-25 px-3 mb-3"
          alt="" srcset={''} width={''} height={''} attr={[]}       
           />
        <h5>
        <Icon variant={''} icon={'pencil-square'} name={' '}/> 
          {useSong().translate.bandung.title}
          <Icon variant={'info'} icon={'hearts'} name={' '}/> 
        </h5>
      </div>
      <div className="text-start fs-5 px-5 col-12 col-md-6  m-auto">
        {useSong().translate.bandung.lirik}
          <div className="mb-3">
          <LinkToPage href={'https://www.mamalisa.com/?t=es&p=2786'} icon={'link'} target={'_blank'} variant={'info'} name={' link referensi'} className={'d-inline'}/>
          </div>
          <VideoFromYoutube src={useSong().video.bandung} />
      </div>
    </div>

    </div>
  );
}
