import React from 'react'
import Logo from '../../../imgs/banner-909710_1920.jpg'
import Logo2 from '../../../imgs/giphy.gif'
import Logo3 from '../../../imgs/gears-1311171_1920.jpg'
import Logo4 from '../../../imgs/giphy (1).gif'
import Logo5 from '../../../imgs/book-158812.png'
import { Icon, Img } from '../../assembleComponent'

export default function About() {
    return (
        <div className='row'>
          <div className="col-12">
            <div className="col-12 mt-5 m-auto bg-4 text-light px-2 py-4">
              <div className="text-center fw-bolder">
                <h5>
                  <Icon variant={'white'} icon={'info-circle-fill'} name={' '}/>
                      about
                </h5>
              </div>
              <div className="text-start fs-5 px-5 col-12 col-md-6 m-auto">
                hello you can find me on instagram and also you can see my github
                repository
              </div>
            </div>
            <Img
              src={Logo}
              className="img-fluid w-100 mt-3 shadow"
              alt="" srcset={''} width={''} height={''} attr={[]}        
              />
          </div>
          <div className="col-12 mt-5 m-auto bg-4 text-light px-2 py-4">
            <div className="text-center ">
              <h5>
              <Icon variant={'white'} icon={'info-circle-fill'} name={' '}/>
                what will i do?
              </h5>
            </div>
            <div className="text-start fs-5 px-5 col-12 col-md-6 m-auto">
              i will improve my skill in order to make a better website.
            </div>
          </div>
          <div className="col-6 mt-5 m-auto">
            <div className="d-flex flex-row flex-wrap">
              <h3 className="color-4">
                <Icon variant={' '} icon={'dash-circle-fill'} name={' '}/>
                   INTERNAL SERVER ERROR!
              </h3>
              <Img 
                src={Logo2} 
                className="img-fluid w-100 shadow" 
                alt="" srcset={''} width={''} height={''} attr={[]} 
                />
            </div>
          </div>
          <div className="col-12 mt-5 m-auto bg-4 text-light px-2 py-4">
            <div className="text-center ">
              <h5>
              <Icon variant={'white'} icon={'info-circle-fill'} name={' '}/>
               what i wish?
              </h5>
            </div>
            <div className="text-start fs-5 px-5 col-12 col-md-6 m-auto">
              i wish in the future i can make my own website, android app, web
              server that can serve a website, i want to learn hydroponic to make my
              little garden and many more.
            </div>
          </div>
          <div className="col-12 mt-4">
            <Img
              src={Logo3}
              className="img-fluid w-100 shadow"
              alt="" srcset={''} width={''} height={''} attr={[]}        />
          </div>
          <div className="col-12 mt-5 m-auto bg-4 text-light px-2 py-4">
            <div className="text-center ">
              <h5>
              <Icon variant={'white'} icon={'info-circle-fill'} name={' '}/>
               when?
              </h5>
            </div>
            <div className="text-start fs-5 px-5 col-12 col-md-6 m-auto">
              i start learning development in 2021 , first i learning how to build
              android app in kotlin and then i realise that my pc is not good at
              android development so i jump into web development, i learn alot of
              programing language such as html css javascript php and etc (until now
              still learning how to make good website).
            </div>
          </div>
          <div className="col-6 mt-5 m-auto">
            <div className="d-flex flex-row flex-wrap">
              <h3 className="color-4">
                <Icon variant={' '} icon={'send-fill'} name={' '}/>
                 sending files!
              </h3>
              <Img src={Logo4} className="img-fluid w-100" alt="" srcset={''} width={''} height={''} attr={[]} />
            </div>
          </div>
          <div className="col-12 mt-5 m-auto bg-4 text-light mb-3 px-2 py-4">
            <div className="text-center ">
              <h5>
              <Icon variant={'white'} icon={'info-circle-fill'} name={' '}/>
               why?
              </h5>
            </div>
            <div className="text-start fs-5 px-5 col-12 col-md-6  m-auto">
              learning development software , like android ,website is fun sometime
              hard , sometime easy and of course learning how to code it mean that
              you can make your own product.
            </div>
          </div>
          <div className="col-12 bg-2 d-flex align-items-center align-content-center">
            <Img
              src={Logo5}
              className="shadow img-fluid col-12"
              alt="" srcset={''} width={''} height={''} attr={[]}        
              />
          </div>
          <div className="col-12 mt-5 m-auto bg-4 text-light mb-3 px-2 py-4">
            <div className="text-center ">
              <h5>
              <Icon variant={'white'} icon={'info-circle-fill'} name={' '}/>
               problem
              </h5>
            </div>
            <div className="text-start fs-5 px-5 col-12 col-md-6  m-auto">
              when i was on my first internship i have been choose back end dev 
              and it was my biggest mistake that i choose, 
              so when i choose and start learning front end dev everything become 
              easy  
            </div>
          </div>
        </div>
      );
}
