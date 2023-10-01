import mysql_audio from '../../../sound/programming_tips/mysql.mp3'
import php1_audio from '../../../sound/programming_tips/php1.mp3'
import php2_audio from '../../../sound/programming_tips/php2.mp3'
import laravel_audio from '../../../sound/programming_tips/laravel.mp3'
import api_audio from '../../../sound/programming_tips/api.mp3'
import golang_audio from '../../../sound/programming_tips/golang.mp3'
import typescript_audio from '../../../sound/programming_tips/typescript.mp3'
 //====================================      
       type TTips=[
            {
                titleTips:string,
                bodyTips:string,
                special:{
                    audio:string,
                    duration:number
                }
            },
            {
                titleTips:string,
                bodyTips:string,
                special:{
                    audio:string,
                    duration:number
                }
            },
            {
                titleTips:string,
                bodyTips:string,
                special:{
                    audio:string,
                    duration:number
                }
            },
            {
                titleTips:string,
                bodyTips:string,
                special:{
                    audio:string,
                    duration:number
                }
            },
            {
                titleTips:string,
                bodyTips:string,
                special:{
                    audio:string,
                    duration:number
                }
            },
            {
                titleTips:string,
                bodyTips:string,
                special:{
                    audio:string,
                    duration:number
                }
            },
            {
                titleTips:string,
                bodyTips:string,
                special:{
                    audio:string,
                    duration:number
                }
            },
        ]
        interface ITips{
            content:TTips
        }

const tips:ITips={
    content:[
        {
            titleTips:'mysql',
            bodyTips:'unsigned adalah atribut mysql yang mana ia tidak akan sudi menerima type data number / negative value',
            special:{
                audio:mysql_audio,
                duration:6
            }
        },
        {
            titleTips:'php',
            bodyTips:'sebuah bahasa pemrograman yang berjalan disisi server dan merupakkan cikal bakal dari lahirnya beberapa framework {laravel,code igniter}',
            special:{
                audio:php1_audio,
                duration:10
            }
        },
        {
            titleTips:'laravel',
            bodyTips:'merah layaknya mawar yang diberikan untuk gadis pujaan hati',
            special:{
                audio:laravel_audio,
                duration:5
            }
        },
        {
            titleTips:'golang',
            bodyTips:'mirip seperti typescript namun lebih powerfull sebab aplikasi yang didevelop ,menggunakkan golang akan sangat clean sebab golang akan memprotes sebuah variable yang tidak digunakkan {rekomendasi framework : fiber}',
            special:{
                audio:golang_audio,
                duration:18
            }
        },
        {
            titleTips:'api',
            bodyTips:'disaat anda ingin membuat aplikasi multiplatform sangat direkomendasikan menggunakkan api {distributed} sebagai backendnya daripada menggunakkan monolithic',
            special:{
                audio:api_audio,
                duration:14
            }
        },
        {
            titleTips:'typescript',
            bodyTips:'sebuah bahasa pemrograman yang sangat ramah kepada developer pemula ;adventages : 25% memproduksi bug ,75% efisiensi , 100% static type',
            special:{
                audio:typescript_audio,
                duration:14
            }
        },
        {
            titleTips:'php',
            bodyTips:'bahasa yang berorientasi kepada oop ; beredar kabar bahwa php versi terbaru sudah bisa menggunakkan teknik static type',
            special:{
                audio:php2_audio,
                duration:6
            }
        },
    ]
}

const SingleTips=()=>{
//    return tips.content[Math.random()*tips.content.length-1]
//    return tips.content[Math.ceil(Math.random()*tips.content.length-1)]
   return tips.content[new Date().getDay()]
}
export default SingleTips