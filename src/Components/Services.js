import{React,useState} from 'react'

const Services = () => {

    const[service,setservice] = useState([
        {title: 'arch', background:"img/service-1.jpg" ,image:"img/icons/icon-1.png", body:'We Focused On Modern Architecture And Interior Design ',button:'read more',id:'1'},
        {title: '3D animation', background:"img/service-2.jpg",image:"img/icons/icon-2.png" , body:'3D animation Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet. ',button:'read more',id:'2'},
        {title: 'House Planning',background:"img/service-3.jpg" , image:"img/icons/icon-3.png", body:'House planning Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet. ',button:'read more',id:'3'},
        {title: 'Interior Design',background:"img/service-4.jpg",image:"img/icons/icon-4.png", body:'Interior Design Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet. ',button:'read more',id:'4'},
        {title: 'Construction',background:"img/service-5.jpg" , image:"img/icons/icon-5.png" , body:'Construction Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet. ',button:'read more',id:'5'},
        {title: 'Design Planning',background:"img/service-6.jpg" ,image:"img/icons/icon-6.png", body:'Design planning Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet. ',button:'read more',id:'6'}
    ]);
  
    return (
    <>
        <section>
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth: "600px;"}}>
                        <h4 class="section-title d-flex justify-content-center align-items-center">
                            <span></span>
                            Our Services
                            <span></span>
                        </h4>
                        <h1 class="display-5 mb-4">We Focused On Modern Architecture And Interior Design</h1>
                    </div>
                    <div class="row g-4">
                            {service.map((service) =>(
                                <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                            <div class="service-item d-flex position-relative text-center h-100" key={service.id}>
                                            <img class="bg-img" src={service.background} alt=""/>
                                            <div class="service-text p-5">
                                                <img class="mb-4" src={service.image} alt="Icon"/>
                                                <h3 class="mb-3">{service.title}</h3>
                                                <p class="mb-4">{service.body}</p>
                                                <a class="btn" href=""><i class="fa fa-plus text-primary me-3"></i>{service.button}</a>
                                            </div>
                                        </div>
                                </div>
                                 ))}
                        {/* <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                            <div class="service-item d-flex position-relative text-center h-100">
                                <img class="bg-img" src="img/service-2.jpg" alt=""/>
                                <div class="service-text p-5">
                                    <img class="mb-4" src="img/icons/icon-6.png" alt="Icon"/>
                                    <h3 class="mb-3">3D Animation</h3>
                                    <p class="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                    <a class="btn" href=""><i class="fa fa-plus text-primary me-3"></i>Read More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="service-item d-flex position-relative text-center h-100">
                                <img class="bg-img" src="img/service-4.jpg" alt=""/>
                                <div class="service-text p-5">
                                    <img class="mb-4" src="img/icons/icon-8.png" alt="Icon"/>
                                    <h3 class="mb-3">Interior Design</h3>
                                    <p class="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                    <a class="btn" href=""><i class="fa fa-plus text-primary me-3"></i>Read More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 ms-auto wow fadeInUp" data-wow-delay="0.3s">
                            <div class="service-item d-flex position-relative text-center h-100">
                                <img class="bg-img" src="img/service-5.jpg" alt=""/>
                                <div class="service-text p-5">
                                    <img class="mb-4" src="img/icons/icon-9.png" alt="Icon"/>
                                    <h3 class="mb-3">Renovation</h3>
                                    <p class="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                    <a class="btn" href=""><i class="fa fa-plus text-primary me-3"></i>Read More</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4 col-md-6 me-auto wow fadeInUp" data-wow-delay="0.5s">
                            <div class="service-item d-flex position-relative text-center h-100">
                                <img class="bg-img" src="img/service-6.jpg" alt=""/>
                                <div class="service-text p-5">
                                    <img class="mb-4" src="img/icons/icon-10.png" alt="Icon"/>
                                    <h3 class="mb-3">Construction</h3>
                                    <p class="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                    <a class="btn" href=""><i class="fa fa-plus text-primary me-3"></i>Read More</a>
                                </div>
                            </div>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
           
    </>
  )
}

export default Services