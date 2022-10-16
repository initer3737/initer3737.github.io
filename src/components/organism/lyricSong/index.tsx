import React from 'react'
import { Icon, Img, LinkToPage, Modal, VideoFromYoutube } from '../../assembleComponent';
import Logo1 from '../../../imgs/night-1851685_960_720.png'
import Logo2 from '../../../imgs/the-background-292720.png'
import Logo3 from '../../../imgs/wave-305226.png'
import Logo4 from '../../../imgs/watercolor-4116932.png'
import Logo5 from '../../../imgs/landscape-1844226.svg'
import useSong from './text/song';
export default function LyricSong() {
  return (
    <div className='row'>
        <div className="bg-4 text-center text-light p-3">
          <h5 className='fs-5'><Icon variant={' '} icon={'file-music-fill'} name={' '}/> songs</h5>
        </div>

        <div className="col-12 mt-5 m-auto bg-4 text-light mb-3 px-2 py-4">
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

    <div className="col-12 mt-5 m-auto bg-4 text-light mb-3 px-2 py-4">
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

       <div className="col-12 bg-1 d-flex align-items-center align-content-center">
        <Img
          src={Logo1}
          className="shadow img-fluid col-12"
          alt="" srcset={''} width={''} height={''} attr={[]}       
           />
      </div>
    <div className="col-12 mt-5 m-auto bg-4 text-light mb-3 px-2 py-4">
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

    <div className="col-12 mt-5 m-auto bg-4 text-light mb-3 px-2 py-4">
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

      <div className="col-12 bg-1 d-flex align-items-center align-content-center">
        <Img
          src={Logo3}
          className="shadow img-fluid col-12"
          alt="" srcset={''} width={''} height={''} attr={[]}        
          />
      </div>
      <div className="col-12 mt-5 m-auto bg-4 text-light mb-3 px-2 py-4">
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
     
      <div className="col-12 mt-5 m-auto bg-4 text-light mb-3 px-2 py-4">
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
              <a role={'button'} data-bs-toggle={'modal'} data-bs-target={'#yoru'} className='btn btn-danger'>
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
              lagu ini terinspirasi dari novel Thanatos no Yuuwaku
            </p>
            <p>
              Novel "The Temptation of Thanatos" yang diposting di situs menulis online ramai menjadi bahan perbincangan. Penulis aslinya adalah "Maya Hoshino". Belum jelas profil detail dari penulis ini, tetapi ada spekulasi bahwa tampaknya dia adalah seorang mahasiswa yang masih aktif. Seperti yang dikatakan penulis itu sendiri, "Saya suka orang yang sedikit kejam",  tulisan singkat "The Temptation of Thanatos" ini adalah cerita yang kelam. The Temptation of Thanatos, atau dalam bahasa Jepang 
            </p>
            <p>
            berjudul asli Tanatosu No Yuuwaku (タナトスの誘惑) adalah cerita yang ditulis dengan tema "Aku dan kamu yang frustasi di malam musim panas". Sebenarnya cerita seperti apa yang bisa diceritakan dari tema ini?
              Meski merupakan kata yang jarang didengar, "Thanatos" adalah kata yang memiliki arti terkait dengan "kematian". Dalam mitologi Yunani, istilah "malaikat maut" digunakan oleh psikiater Freud, dalam menyebut "godaan untuk mengakhiri hidup". Dengan kata lain, apakah judul "The Temptation of Thanatos" berarti "undangan untuk mengakhiri hidup"? Seperti yang bisa kamu bayangkan dari judul ini, The Temptation of Thanatos mungkin adalah cerita tentang orang yang ingin mengakhiri hidupnya sendiri.
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
              <div className='text-center h5 d-flex flex-column gap-1 py-2'>
                <Icon variant={'info'} icon={'exclamation-triangle-fill'} name={' disclaimer'}/>
                <p className='h6'>
                  lagu ini berisi tentang kontent 18+ yang tak layak didengar oleh anak-anak
                  jauhkan dari telinga anak-anak!
                </p>
              </div>
            <div className='d-flex flex-column gap-2'>
                <p>
                  jika ada perasaan keinginan untuk bunuh diri klik link di bawah
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
      <div className="col-12 bg-1 d-flex align-items-center align-content-center">
        <Img
          src={Logo2}
          className="shadow img-fluid col-12"
          alt="" srcset={''} width={''} height={''} attr={[]}        
          />
      </div>

      <div className="col-12 mt-5 m-auto bg-4 text-light mb-3 px-2 py-4">
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

    <div className="col-12 mt-5 m-auto bg-4 text-light mb-3 px-2 py-4">
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

       <div className="col-12 bg-1 d-flex align-items-center align-content-center">
        <Img
          src={Logo5}
          className="shadow img-fluid col-12"
          alt="" srcset={''} width={''} height={''} attr={[]}       
           />
      </div>

    <div className="col-12 mt-5 m-auto bg-4 text-light mb-3 px-2 py-4">
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

    <div className="col-12 mt-5 m-auto bg-4 text-light mb-3 px-2 py-4">
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

    <div className="col-12 bg-1 d-flex align-items-center align-content-center">
        <Img
          src={Logo4}
          className="shadow img-fluid col-12"
          alt="" srcset={''} width={''} height={''} attr={[]}       
           />
      </div>

      <div className="col-12 mt-5 m-auto bg-4 text-light mb-3 px-2 py-4">
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

    <div className="col-12 mt-5 m-auto bg-4 text-light mb-3 px-2 py-4">
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

    </div>
  );
}
