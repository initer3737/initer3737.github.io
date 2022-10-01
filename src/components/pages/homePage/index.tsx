import React from 'react'
import Video from '../../../imgs/Earth - 4788.mp4'
import Clock from '../../../utils/clock'
export default function HomePage()
 {
  return (
     <>
      <div className="container bg-light shadow rounded  d-flex flex-column gap-4 justify-content-center align-content-center align-items-center p-2">
          <div className="row d-flex align-content-center align-items-center">
              <div className="col-12">
                <div className="bg-4 text-capitalize d-flex justify-content-start"><i className="bi bi-clock-fill color-1"></i>
                  <div id="fulldate" className="h4 text-light p-2 fs-3"><Clock /></div>
                </div>
              </div>

              <div className="col-10 col-md-5 col-lg-4">
                <div className="card shadow m-2 p-1 position-relative">
                  <video src={`${Video}`} loop muted autoPlay className="w-100 rounded-pill py-5 px-2"></video>
                  <div className="filter2"></div>
                </div>
              </div>
              {/* G:\programming\tools\laragon\www\portofolio2\src\imgs
              G:\programming\tools\laragon\www\portofolio2\src\components\pages\homePage\index.tsx */}
              <div className="col-10 col-md-9 col-lg-8">
                <h5 className="text-capitalize"><i className="bi bi-medium"></i> social media.</h5>
                <div className="d-flex flex-row align-content-center align-items-center gap-3">
                  <div className="d-flex flex-column fs-4">
                      <a href="https://www.instagram.com/yotsusan_machi/" target="_blank" className="text-capitalize"><i className="bi bi-instagram"></i> instagram</a>
                      <a href="https://github.com/initer3737" target="_blank" className="text-capitalize"><i className="bi bi-github"></i> github</a>
                  </div>
                  <div className=""><a href="#" className="btn btn-outline-primary rounded-pill px-5 py-2"><i className="bi bi-controller"></i> Game</a></div>
              </div>
              </div>

          </div>
      </div>
      {/* <!-- https://www.fiverr.com/share/lYqN8j --> */}
      <div className="container bg-light shadow mt-5 d-flex flex-column gap-1 justify-content-center align-content-center align-items-center p-2">
          <h5><i className="bi bi-briefcase-fill"></i> framework.</h5>
              <h3> <i className='bi bi-ubuntu text-danger'></i> laravel</h3>
              <h3><i className="bi bi-bootstrap text-primary"></i> bootstrap 5</h3>
          </div>
    {/* </div> */}

      <div className="container bg-light shadow mt-5 d-flex flex-column  justify-content-center align-content-center align-items-center p-2">
          <h5><i className="bi bi-code-slash"></i> language.</h5>
              <h3><i className="bi bi-filetype-php php"></i> php</h3>
              <h3><i className="bi bi-filetype-js text-warning"></i> javascript</h3>
              <h3><i className="bi bi-filetype-sql mysql"></i> mysql</h3>
              <h3><i className="bi bi-filetype-html html"></i> html 5</h3>
              <h3><i className="bi bi-filetype-css css"></i> css</h3>
          </div>

      <div className="container bg-light shadow mt-5 d-flex flex-column gap-1 justify-content-center align-content-center align-items-center p-2">
        <h5><i className="bi bi-info-circle"></i> information.</h5>
        <div className="fs-4 d-flex gap-3 flex-wrap justify-content-evenly">
        <a href="https://initer3737.github.io/course/html/pages/course.html" target="_blank"><i className="bi bi-globe"></i> website</a>
          <a href="https://www.youtube.com/channel/UClsfa0LkA3_YMsFjW1M__sw" target="_blank"><i className="bi bi-youtube"></i> youtube</a>
        </div>
      </div>
     </>
  )
}
