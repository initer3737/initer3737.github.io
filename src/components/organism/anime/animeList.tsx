import React from 'react'
import { Icon, VideoFromYoutube } from '../../atom'

        type Lycoris={
            name:string,
            pov:string,
            rate:string,
            trailer:string,
            rank:string,
            tampil:boolean
        }

        type Kimetsu={
            name:string,
            pov:string,
            rate:string,
            trailer:string,
            rank:string,
            tampil:boolean
        }

        type Chainsaw={
            name:string,
            pov:string,
            rate:string,
            trailer:string,
            rank:string,
            tampil:boolean
        }

        type Thensura={
            name:string,
            pov:string,
            rate:string,
            trailer:string,
            rank:string,
            tampil:boolean
        }

        type Crow={
            name:string,
            pov:string,
            rate:string,
            trailer:string,
            rank:string,
            msg:string,
            tampil:boolean
        }

        type Crow2={
            name:string,
            pov:string,
            rate:string,
            trailer:string,
            rank:string,
            msg:string,
            tampil:boolean
        }

        type SamuraiX={
            name:string,
            pov:string,
            rate:string,
            trailer:string,
            rank:string,
            msg:string,
            tampil:boolean
        }

        type Ninja={
            name:string,
            pov:string,
            rate:string,
            trailer:string,
            rank:string,
            msg:string,
            tampil:boolean
        }

        type GirlFrontline={
            name:string,
            pov:string,
            rate:string,
            trailer:string,
            rank:string,
            msg:string,
            link:string,
            tampil:boolean
        }

        type kage={
            name:string,
            pov:string,
            rate:string,
            trailer:string,
            rank:string,
            msg:string,
            tampil:boolean
        }
        type Machiavellianism={
            name:string,
            pov:string,
            rate:string,
            trailer:string,
            rank:string,
            msg:string,
            link:string,
            tampil:boolean
        }
        type Blueperiod={
            name:string,
            pov:string,
            rate:string,
            trailer:string,
            rank:string,
            msg:string,
            link:string,
            tampil:boolean
        }
        type TanakaKun={
            name:string,
            pov:string,
            rate:string,
            trailer:string,
            rank:string,
            msg:string,
            link:string,
            tampil:boolean
        }
        type Sakamoto={
            name:string,
            pov:string,
            rate:string,
            trailer:string,
            rank:string,
            msg:string,
            link?:string,
            tampil:boolean
        }

            interface animeType{
                lycoris:Lycoris,
                kimetsu:Kimetsu,
                chainsaw:Chainsaw,
                crow:Crow,
                crow2:Crow2,
                tenshura:Thensura,
                samuraiX:SamuraiX,
                ninja?:Ninja,
                girlFrontline:GirlFrontline,
                kage?:kage,
                machiavellianism?:Machiavellianism,
                blueperiod:Blueperiod,
                tanakaKun:TanakaKun,
                sakamoto:Sakamoto,
            }
                    //legend epic middle mid-medium regular
            const animeLists:animeType={
                lycoris:{
                    name:'lycoris recoil',
                    pov:'sangat bagus dan ending yang sangat mengagetkan',
                    rate:'9.5',
                    trailer:'https://youtube.com/embed/F5DMjhg3A6c',
                    rank:'epic',
                    tampil:true
                },
                kimetsu:{
                    name:'kimetsu no yaiba',
                    pov:'tanjirou yang merupakkan kakak tertua harus menerima kenyataan pahit ,keluarganya dibantai oleh muzan kibutsuji ,yang tersisa hanya adiknya seorang...',
                    rate:'8.5',
                    trailer:'https://youtube.com/embed/a9tq0aS5Zu8',
                    rank:'middle',
                    tampil:true
                },
                chainsaw:{
                    name:'chainsaw man',
                    pov:'penuh konflik berdarah',
                    rate:'7.5',
                    trailer:'https://youtube.com/embed/jk7QSGwupPA',
                    rank:'epic',
                    tampil:true
                },
                crow:{
                    name:'crow zero',
                    pov:'murid pindahan yang ingin meneruskan bisnis ayahnya sebagai bos yakuza, untuk mencapai hal itu ia harus bisa menyatukkan suzuran ,pertama ia harus mengalahkan serizawa yang berada diposisi puncak',
                    rate:'9.4',
                    trailer:'https://youtube.com/embed/mc5X05k21IY',
                    rank:'epic',
                    msg:'nostalgia mimin ketika smp dulu',
                    tampil:true
                },
                crow2:{
                    name:'crow zero2',
                    pov:'pertarungan antar sekolah bergabungnya 2 gang terkuat',
                    rate:'10',
                    trailer:'https://youtube.com/embed/RlYUo0P2g8c',
                    rank:'legend',
                    msg:'kawaishi noboru bebas setelah membunuh bitou makio , lalu ia di incar oleh seluruh siswa housen',
                    tampil:true
                },
                tenshura:{
                    name:'tenshura',
                    pov:'bereinkarnasi malah jadi slime',
                    rate:'7.6',
                    trailer:'https://youtube.com/embed/q2FCfgT-Fm8',
                    rank:'middle',
                    tampil:true
                },
                samuraiX:{
                    name:'samurai x',
                    pov:'pertarungan kenshin himura sang hitokiri battousai',
                    rate:'10',
                    trailer:'https://youtube.com/embed/KlgKIkCZ4nQ',
                    rank:'legend',
                    msg:'di remake menjadi lebih hd dan mengalami peningkatan kualitas dari segi grafis',
                    tampil:true
                },
                ninja:{
                    name:'shinobi no itoki',
                    pov:'seorang penerus kepemimpinan sah yang ke 19 clan iga ,Ittoki Sakuraba harus menanggung beban sebagai ketua klan, meski begitu ia harus menghadapi fakta bahwa tidak semua berjalan sesuai keinginannya , terlebih ia harus berurusan dengan para pengkhianat clan',
                    rate:'5.7',
                    trailer:'https://youtube.com/embed/MareC5TQWZ8',
                    rank:'regular',
                    msg:'untuk mc [main character] tidak op dan terkesan lembek ,yah mungkin agar sesuai dengan ritme kehidupan manusia [from zero to hero]',
                    tampil:false
                },
                sakamoto:{
                    name:'sakamoto desu ga?',
                    pov:'sakamoto yang selalu terpojok selalu saja punya cara untuk membalikkan keadaan',
                    rate:'6.8',
                    trailer:'https://youtube.com/embed/rnCzQbPRLHY',
                    rank:'regular',
                    msg:'langkah yang ia ambil untuk menghadapi para pembuli memang benar benar diluar nalar [beliau ini benar-benar sasuga sekali]',
                    tampil:true
                },
                girlFrontline:{
                    name:'girl frontline',
                    pov:`Pada tahun 2060 akibat dari kecelakaan militer mengakibatkan penyakit berbahaya yang menular, serta karena kecerobohan perang nuklir secara besar-besaran. Sebagian besar permukaan Bumi sudah hancur. Selain itu, negara-negara besar juga mulai hancur karena efek buruk dari perang nuklir tersebut`
                    ,
                    rate:'6.5',
                    trailer:'https://youtube.com/embed/qeBlL3GrAkY',
                    rank:'mid-medium',
                    msg:'cocok jika anda penyuka adrenalin',
                    link:'https://dafunda.com/otaku/informasi-terbaru-anime-girls-frontline/',
                    tampil:true
                },
                kage:{
                    name:'kage no jitsuryokusha ni naritakute',
                    pov:'berpura-pura lemah padahal beliau adalah pemimpin organisasi shadow garden yang over power',
                    rate:'9.6',
                    trailer:'https://youtube.com/embed/jyoWE4cUtkI',
                    rank:'epic',
                    msg:'kalimat ter epic : "I AM ATOMIC" ',
                    tampil:false
                },
                tanakaKun:{
                    name:'tanaka kun itsumo kedaruge [dek tanaka yang selalu lesu]',
                    pov:'menikmati hidup dan selalu mengalir seperti air',
                    rate:'5.6',
                    trailer:'https://youtube.com/embed/MWVEG7kDQfo',
                    rank:'middle',
                    msg:'Tanaka merupakan seorang siswa di salah satu sekolah menengah atas di Jepang. Tanaka adalah cowok pemalas yang suka mendesah, bertopang dagu, punya mata yang seperti orang mengantuk, serta pada dasarnya tidak suka berusaha. Kemudian ada Ohta,',
                    link:'https://id.wikipedia.org/wiki/The_Sluggish_Tanaka',
                    tampil:true
                },
                machiavellianism:{
                    name:'Busou Shoujo Machiavellianism',
                    pov:'bercerita tentang Nomura Fudo [pengguna peluru gaib] yang dikeluarkan dari sekolah lamanya karena ia adalah anak bermasalah lalu ia masuk ke sekolah yang sangat diluar nalar , dimana kebanyakkan adalah wanita ,ditambah lagi dengan sosok wanita misterius yang dijuluki maharani [kirukiru amou] yang membuat anime ini begitu mengesankan,',
                    rate:'7.6',
                    trailer:'https://youtube.com/embed/Ghi2R6-HcMA',
                    rank:'middle',
                    msg:'kesan pertama terhadap anime ini adalah anime ini menyampaikkan sebuah isu yang sangat relate di masa kini dimana para wanita berusaha mendominasi / feminisme yang kelewat batas dan dikemas dalam bentuk komedi yang nyeleneh serta yang unik dari anime ini adalah entah kenapa disaat main character [nomura fudo] bertarung selalu saja ada jurus yang unik yang dikeluarkan oleh lawannya [semacam samurai x]<br> nb : kalau di dunia nyata [dalam konteks orang pintar dan bodoh] orang yang menurut akan dianggap pintar sedang yang melawan sistem dan bertindak sesuai dengan keinginannya disebut sebagai orang bodoh [kamu bisa menonton anime ini di chanel youtube muse indonesia]',
                    link:'https://www.otakotaku.com/anime/view/742/busou-shoujo-machiavellianism',
                    tampil:false
                },
                blueperiod:{
                    name:'blue period',
                    pov:'bercerita tentang pemuda yang memiliki ambisi menjadi pelukis,',
                    rate:'unkown [belum nonton]',
                    trailer:'https://youtube.com/embed/0a-4qVD8okU',
                    rank:'unknow [belum nonton]',
                    msg:'kesan pertama untuk anime ini  Yatora Yaguchi yang memiliki keinginan untuk menggambar dan perjuangan yang ia akan tempuh tidaklah mudah dapatkah ia meraih cita cita yang ia inginkan sebagai pelukis yang mampu menghasilkan karya seni yang indah',
                    link:'https://pedomantangerang.pikiran-rakyat.com/selebritas/pr-072792826/nonton-anime-blue-period-lengkap-dengan-sinopsis-dan-link-streaming',
                    tampil:true
                }
            }
    const AnimeList=()=>{
        /** why make filter mekanisme??, so delete anime that i want not to display to the ui is mendokusai ,so i decide to make fillter mekanisme */
                const animeObjectEntries=Object.entries(animeLists);
            return (
            <ul className='list-group fs-4 text-dark'>
                <li className='list-group-item text-center'>
                    <Icon variant={'primary'} icon={'hearts'} name={''}/>
                    my anime lists [{animeObjectEntries.filter(anime=>anime[1].tampil === true).length}]
                </li> 
                {animeObjectEntries.filter(anime=>anime[1].tampil === true).map((animelist,i)=>(
                   <>
                        <li className='list-group-item border-start-0 border-end-0 border-info border-1' key={animelist[1].name}>
                            <Icon variant={'primary'} icon={'play'} name={''}/>
                            {animelist[1].name}
                        </li> 
                        <li className='list-group-item' key={animelist[1].pov}>
                            <Icon variant={'info'} icon={'list-stars'} name={''}/>
                            {animelist[1].pov}
                        </li> 
                        <li className='list-group-item' key={animelist[1].rate}>
                            <Icon variant={'info'} icon={'stars'} name={''}/>
                             {animelist[1].rate}
                        </li> 
                        <li className='list-group-item' key={animelist[1].rank}>
                            <Icon variant={'info'} icon={'moon-stars-fill'} name={''}/>
                             {animelist[1].rank}
                        </li> 
                        <li className='list-group-item' key={animelist[1].msg}>
                            <Icon variant={`info ${animelist[1].msg??'d-none'}`} icon={'stickies-fill'} name={''}/>
                             {animelist[1].msg ?? undefined}
                        </li> 
                        <li className='list-group-item' key={animelist[1].link}>
                            <Icon variant={`info ${animelist[1].link??'d-none'} h2`} icon={'link'} name={''}/>
                             <a href={animelist[1].link ?? undefined}
                                target='_blank'
                                className={`${animelist[1].link??'d-none'}`}>link referensi</a>
                        </li> 
                        <li className='list-group-item d-flex flex-column mb-4 shadow' key={animelist[1].trailer}>
                            <div className="d-flex gap-2 justify-content-center">
                                <Icon variant={'info'} icon={'film'} name={' '}/>
                                <p className='fs-5'>trailer</p>
                            </div>
                            <div className="d-flex justify-content-center" >
                                <div className="col-md-8 col-12">
                                    <VideoFromYoutube src={animelist[1].trailer}/>
                                </div>
                            </div>
                        </li> 
                   </>
                ))}
            </ul>
  )
}

export default AnimeList