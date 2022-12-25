import React from 'react'
import { Icon, VideoFromYoutube } from '../../atom'

        type Lycoris={
            name:string,
            pov:string,
            rate:string,
            trailer:string,
            rank:string
        }

        type Kimetsu={
            name:string,
            pov:string,
            rate:string,
            trailer:string,
            rank:string
        }

        type Chainsaw={
            name:string,
            pov:string,
            rate:string,
            trailer:string,
            rank:string
        }

        type Thensura={
            name:string,
            pov:string,
            rate:string,
            trailer:string,
            rank:string
        }

        type Crow={
            name:string,
            pov:string,
            rate:string,
            trailer:string,
            rank:string,
            msg:string
        }

        type Crow2={
            name:string,
            pov:string,
            rate:string,
            trailer:string,
            rank:string,
            msg:string
        }

        type SamuraiX={
            name:string,
            pov:string,
            rate:string,
            trailer:string,
            rank:string,
            msg:string
        }

        type Ninja={
            name:string,
            pov:string,
            rate:string,
            trailer:string,
            rank:string,
            msg:string
        }

        type GirlFrontline={
            name:string,
            pov:string,
            rate:string,
            trailer:string,
            rank:string,
            msg:string,
            link:string
        }

        type kage={
            name:string,
            pov:string,
            rate:string,
            trailer:string,
            rank:string,
            msg:string
        }

            interface animeType{
                lycoris:Lycoris,
                kimetsu:Kimetsu,
                chainsaw:Chainsaw,
                crow:Crow,
                crow2:Crow2,
                tenshura:Thensura,
                samuraiX:SamuraiX,
                ninja:Ninja,
                girlFrontline:GirlFrontline,
                kage:kage
            }
                    //legend epic middle mid-medium regular
            const animeLists:animeType={
                lycoris:{
                    name:'lycoris recoil',
                    pov:'sangat bagus dan ending yang sangat mengagetkan',
                    rate:'9.5',
                    trailer:'https://youtube.com/embed/F5DMjhg3A6c',
                    rank:'epic'
                },
                kimetsu:{
                    name:'kimetsu no yaiba',
                    pov:'tanjirou yang merupakkan kakak tertua harus menerima kenyataan pahit ,keluarganya dibantai oleh muzan kibutsuji ,yang tersisa hanya adiknya seorang...',
                    rate:'8.5',
                    trailer:'https://youtube.com/embed/a9tq0aS5Zu8',
                    rank:'middle'
                },
                chainsaw:{
                    name:'chainsaw man',
                    pov:'penuh konflik berdarah',
                    rate:'7.5',
                    trailer:'https://youtube.com/embed/jk7QSGwupPA',
                    rank:'epic'
                },
                crow:{
                    name:'crow zero',
                    pov:'murid pindahan yang ingin meneruskan bisnis ayahnya sebagai bos yakuza, untuk mencapai hal itu ia harus bisa menyatukkan suzuran ,pertama ia harus mengalahkan serizawa yang berada diposisi puncak',
                    rate:'9.4',
                    trailer:'https://youtu.be/H_xFbST-ysE',
                    rank:'epic',
                    msg:'nostalgia mimin ketika smp dulu'
                },
                crow2:{
                    name:'crow zero2',
                    pov:'pertarungan antar sekolah bergabungnya 2 gang terkuat',
                    rate:'10',
                    trailer:'https://youtube.com/embed/RlYUo0P2g8c',
                    rank:'legend',
                    msg:'kawaishi noboru bebas setelah membunuh bitou makio , lalu ia di incar oleh seluruh siswa housen'
                },
                tenshura:{
                    name:'tenshura',
                    pov:'bereinkarnasi malah jadi slime',
                    rate:'7.6',
                    trailer:'https://youtube.com/embed/q2FCfgT-Fm8',
                    rank:'middle'
                },
                samuraiX:{
                    name:'samurai x',
                    pov:'pertarungan kenshin himura sang hitokiri battousai',
                    rate:'10',
                    trailer:'https://youtube.com/embed/KlgKIkCZ4nQ',
                    rank:'legend',
                    msg:'di remake menjadi lebih hd dan mengalami peningkatan kualitas dari segi grafis'
                },
                ninja:{
                    name:'shinobi no itoki',
                    pov:'seorang penerus kepemimpinan sah yang ke 19 clan iga ,Ittoki Sakuraba harus menanggung beban sebagai ketua klan, meski begitu ia harus menghadapi fakta bahwa tidak semua berjalan sesuai keinginannya , terlebih ia harus berurusan dengan para pengkhianat clan',
                    rate:'5.7',
                    trailer:'https://youtube.com/embed/MareC5TQWZ8',
                    rank:'regular',
                    msg:'untuk mc [main character] tidak op dan terkesan lembek ,yah mungkin agar sesuai dengan ritme kehidupan manusia [from zero to hero]'
                },
                girlFrontline:{
                    name:'girl frontline',
                    pov:`Pada tahun 2060 akibat dari kecelakaan militer mengakibatkan penyakit berbahaya yang menular, serta karena kecerobohan perang nuklir secara besar-besaran. Sebagian besar permukaan Bumi sudah hancur. Selain itu, negara-negara besar juga mulai hancur karena efek buruk dari perang nuklir tersebut`
                    ,
                    rate:'6.5',
                    trailer:'https://youtube.com/embed/qeBlL3GrAkY',
                    rank:'mid-medium',
                    msg:'cocok jika anda penyuka adrenalin',
                    link:'https://dafunda.com/otaku/informasi-terbaru-anime-girls-frontline/'
                },
                kage:{
                    name:'kage no jitsuryokusha ni naritakute',
                    pov:'berpura-pura lemah padahal beliau adalah pemimpin organisasi shadow garden yang over power',
                    rate:'9.6',
                    trailer:'https://youtube.com/embed/jyoWE4cUtkI',
                    rank:'epic',
                    msg:'kalimat ter epic : "I AM ATOMIC" '
                },
            }

    const AnimeList=()=>{
            return (
            <ul className='list-group fs-4 text-dark'>
                <li className='list-group-item text-center'>
                    <Icon variant={'primary'} icon={'hearts'} name={''}/>
                    my anime lists
                </li> 
                {Object.entries(animeLists).map((animelist,i)=>(
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
                             <a href={animelist[1].link ?? undefined} className={`${animelist[1].link??'d-none'}`}>link referensi</a>
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