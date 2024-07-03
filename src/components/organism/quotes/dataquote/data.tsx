import { useState } from 'react';
import React from "react";
// https://www.goodreads.com/quotes
import '../style.css'
export default function Dataquote(){
    let [index,setIndex]=useState(0)
    const dataQuotes=[
        {img:'https://images.gr-assets.com/quotes/1511992603p2/8630.jpg',name:'― Marilyn Monroe',quote:"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”"},
        {img:'https://images.gr-assets.com/quotes/1511992603p2/8630.jpg',name:'― Oscar Wilde',quote:"““Be yourself; everyone else is already taken.”"},
        {img:'https://images.gr-assets.com/quotes/1511992603p2/8630.jpg',name:'― Frank Zappa',quote:"““So many books, so little time.”"},
        {img:'https://images.gr-assets.com/quotes/1511992603p2/8630.jpg',name:'― Albert Einstein',quote:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”"},
        {img:'https://images.gr-assets.com/quotes/1511992603p2/8630.jpg',name:'― Marcus Tullius Cicero',quote:"““A room without books is like a body without a soul.””"},
        {img:'https://images.gr-assets.com/quotes/1511992603p2/8630.jpg',name:'― Bernard M. Baruch',quote:"““Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”"},
        {img:'https://images.gr-assets.com/quotes/1511992603p2/8630.jpg',name:'― William W. Purkey',quote:"“You've gotta dance like there's nobody watching,Love like you'll never be hurt,Sing like there's nobody listening, And live like it's heaven on earth.”"},
        {img:'https://images.gr-assets.com/quotes/1511992603p2/8630.jpg',name:'― Dr. Seuss',quote:"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”"},
        {img:'https://images.gr-assets.com/quotes/1511992603p2/8630.jpg',name:'― Mae West',quote:"“You only live once, but if you do it right, once is enough.”"},
    ]
    return(
        <>
            <div className="card-containe445 d-none d-md-block">
                <img src={dataQuotes[index].img} alt="" />
                <hr />
                <h4>{dataQuotes[index].quote}</h4>
                <hr />
                <p>{dataQuotes[index].name}</p>
                <hr />
                <button className="btn-custome btn btn-primary mb-3" onClick={()=>{
                        setIndex(index>=dataQuotes.length-1?0:index+1)
                }}>generate quotes</button>
            </div>
        </>
    )
}