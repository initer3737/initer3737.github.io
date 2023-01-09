import React from 'react'
import { Icon, Img, LinkToPage, Modal, VideoFromYoutube } from '../../assembleComponent';
// import Khorobuska from '../../../imgs/khorobushka.jpg'
// import Literature from '../../../imgs/literature.png'
// import Yorunikakeru from '../../../imgs/yorunikakeru.png'
// import chernoglaza from '../../../imgs/chernoglaza.png'
// import ServeRussia from '../../../imgs/serveRussia.png'
// import Cinderela from '../../../imgs/cinderela.jpg'
// import Kimetsu from '../../../imgs/kimetsu.png'
// import Temnaya from '../../../imgs/temnaya.jpg'
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

        <div className="songYasashiSuiseiBG blending__mode__blue shadow"/>
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

    <div className="songkhorobushkaBG blending__mode__blue shadow"/>
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

      <div className="songYoruBG blending__mode__blue shadow"/>
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
        
      <div className="songLiteratureBG blending__mode__blue shadow"/>
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
    
      <div className="songServeRusiaBG blending__mode__blue shadow"/>
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

      <div className="songChernoglazaBG blending__mode__blue__darken shadow"/>
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

      <div className="songChinderelaBG blending__mode__blue__darken shadow"/>
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

      <div className="songKimetsuBG blending__mode__blue shadow"/>
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
    
      <div className="songTemnayaBG blending__mode__blue shadow"/>
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

        <div className="shadow   songWasurejiBG blending__mode__blue "/>
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

        <div className="shadow songFairyTaleBG blending__mode__blue"/>
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
            <LinkToPage href={'https://youtu.be/ogM3TRhdWUc'} icon={'link'} target={'_blank'} variant={'info'} name={' link referensi'} className={'d-inline'}/>
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
