import {React, useState } from 'react'

const AboutUs = () => {
  
  const[fact,setfact] = useState ([
    {
        id :'1',
        title : 'Design Approach',
        caption: 'Design Approach lorem ipsum Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.',
        image : "img/icons/icon-2.png"
    },
    {
        id :"2",
        title : "Innovative Solutions",
        caption: "Innovative Solutions lorem ipsum Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.",
        image : "img/icons/icon-3.png"
    },
    {
        id :"3",
        title : "Project Managment",
        caption: "Project Management lorem ipsum Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.",
        image : "img/icons/icon-5.png"
    }
  ])

  const caption = {
     paragraph : 'Lorem Ipsum Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. '
  }

  const[about,setabout] = useState([
  {
    id :'1',
    title :'A Creative Architecture Agency For Your Dream Home',
    caption :'Stet no et lorem dolor et diam, amet duo ut dolore vero eos. No stet est diam rebum amet diam ipsum. Clita clita labore, dolor duo nonumy clita sit at, sed sit sanctus dolor eos.'
  },
  ])
  
    return (
    <>
      <section>
            <div className="container-xxl py-5">
                <div className="container pt-5">
                    <div className="row g-4">
                    {fact.map((fact) =>(
                        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div className="fact-item shadow text-center bg-light h-100 p-5 pt-0">
                                <div className="fact-icon">
                                    <img src={fact.image} alt="Icon"/>
                                </div>
                                <h3 className="mb-3">{fact.title}</h3>
                                <p className="mb-0">{fact.caption}.</p>
                            </div>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
            </section>

            <section>
            <div className="container-xxl py-5">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                            <div className="about-img">
                                <img className="img-fluid" src="img/about-1.jpg" alt=""/>
                                <img className="img-fluid" src="img/about-2.jpg" alt=""/>
                            </div>
                        </div>
                    {about.map((about) =>(
                        <div className="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                            <h4 className="section-title">About Us</h4>
                            <h1 className="display-5 mb-4">{about.title}</h1>
                            <p>{about.caption}</p>
                            <p className="mb-4">{about.caption}</p>
                            <div className="d-flex align-items-center mb-5">
                                <div className="d-flex flex-shrink-0 align-items-center justify-content-center border border-5 border-primary" style={{width: "120px;" , height: "120px"}}>
                                    <h1 className="display-1 mb-n2" data-toggle="counter-up">25</h1>
                                </div>
                                <div className="ps-4">
                                    <h3>Years</h3>
                                    <h3>Working</h3>
                                    <h3 className="mb-0">Experience</h3>
                                </div>
                            </div>
                            <a className="btn btn-primary py-3 px-5" href="">Read More</a>
                        </div>
                    ))}
                    </div>
                </div>
            </div>
            </section>

            <section>
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="row g-5">
                        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                            <h4 class="section-title d-flex align-items-center">
                                <span></span>
                                Why Choose Us
                                <span></span>
                                </h4>
                            <h1 class="display-5 mb-4">Why You Should Trust Us? Learn More About Us!</h1>
                            <p class="mb-4">{caption.paragraph}</p>
                            <div class="row g-4">
                            {fact.map((fact) =>(
                                <div class="col-12">
                                    <div class="d-flex align-items-start">
                                        <img class="flex-shrink-0" src={fact.image} alt="Icon"/>
                                        <div class="ms-4">
                                            <h3>{fact.title}</h3>
                                            <p class="mb-0">{fact.caption}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            </div>
                        </div>
                        <div class="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                            <div class="feature-img">
                                <img class="img-fluid" src="img/about-2.jpg" alt=""/>
                                <img class="img-fluid" src="img/about-1.jpg" alt=""/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </section>
    </>
  )
}

export default AboutUs