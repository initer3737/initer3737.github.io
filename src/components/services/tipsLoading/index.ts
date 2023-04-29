
        type TTips=[
            {
                titleTips:string,
                bodyTips:string,
            },
            {
                titleTips:string,
                bodyTips:string,
            },
            {
                titleTips:string,
                bodyTips:string,
            },
            {
                titleTips:string,
                bodyTips:string,
            },
            {
                titleTips:string,
                bodyTips:string,
            },
            {
                titleTips:string,
                bodyTips:string,
            },
            {
                titleTips:string,
                bodyTips:string,
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
        },
        {
            titleTips:'php',
            bodyTips:'sebuah bahasa pemrograman yang berjalan disisi server dan merupakkan cikal bakal dari lahirnya beberapa framework {laravel,code igniter}',
        },
        {
            titleTips:'laravel',
            bodyTips:'merah layaknya mawar yang diberikan untuk gadis pujaan hati',
        },
        {
            titleTips:'golang',
            bodyTips:'mirip seperti typescript namun lebih powerfull sebab aplikasi yang didevelop ,menggunakkan golang akan sangat clean sebab golang akan memprotes sebuah variable yang tidak digunakkan {rekomendasi framework : fiber}',
        },
        {
            titleTips:'api',
            bodyTips:'disaat anda ingin membuat aplikasi multiplatform sangat direkomendasikan menggunakkan api {distributed} sebagai backendnya daripada menggunakkan monolithic',
        },
        {
            titleTips:'typescript',
            bodyTips:'sebuah bahasa pemrograman yang sangat ramah kepada developer pemula ;adventages : 25% memproduksi bug ,75% efisiensi , 100% static type',
        },
        {
            titleTips:'php',
            bodyTips:'bahasa yang berorientasi kepada oop ; beredar kabar bahwa php versi terbaru sudah bisa menggunakkan teknik static type',
        },
    ]
}

const SingleTips=()=>{
//    return tips.content[Math.random()*tips.content.length-1]
//    return tips.content[Math.ceil(Math.random()*tips.content.length-1)]
   return tips.content[new Date().getDay()]
}
export default SingleTips