import React from 'react'
import { Icon, VideoFromYoutube } from '../../atom'

        type Lycoris={
            name:string,
            pov:string,
            rate:string,
            trailer:string,
        }

        type Kimetsu={
            name:string,
            pov:string,
            rate:string,
            trailer:string
        }

        type Chainsaw={
            name:string,
            pov:string,
            rate:string,
            trailer:string
        }

            interface animeType{
                lycoris:Lycoris,
                kimetsu:Kimetsu,
                chainsaw:Chainsaw
            }

            const animeLists:animeType={
                lycoris:{
                    name:'lycoris recoil',
                    pov:'sangat bagus dan ending yang sangat mengagetkan',
                    rate:'9.5',
                    trailer:'https://youtube.com/embed/F5DMjhg3A6c'
                },
                kimetsu:{
                    name:'kimetsu no yaiba',
                    pov:'cerita agak sedikit berat',
                    rate:'8.5',
                    trailer:'https://youtube.com/embed/a9tq0aS5Zu8'
                },
                chainsaw:{
                    name:'chainsaw man',
                    pov:'penuh konflik berdarah',
                    rate:'7.5',
                    trailer:'https://youtube.com/embed/jk7QSGwupPA'
                }
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
                        <li className='list-group-item border border-bottom-0 border-info' key={i}>
                            <Icon variant={'primary'} icon={'play'} name={''}/>
                            {animelist[1].name}
                        </li> 
                        <li className='list-group-item'>
                            <Icon variant={'primary'} icon={'justify'} name={''}/>
                            {animelist[1].pov}
                        </li> 
                        <li className='list-group-item'>
                            <Icon variant={'info'} icon={'stars'} name={''}/>
                             {animelist[1].rate}
                        </li> 
                        <li className='list-group-item d-flex flex-column'>
                            <div className="d-flex gap-2 justify-content-center">
                            <Icon variant={'info'} icon={'film'} name={' '}/>
                                <p className='fs-5'>trailer</p>
                            </div>
                               <div className="d-flex justify-content-center">
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