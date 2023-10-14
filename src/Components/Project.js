import {React,useState} from 'react'

const Project = () => {
    const[project,setproject] = useState ([
        {
            id :'1',
            title : '25 years of Experience In Architecture Industry',
            caption: 'Design Approach lorem ipsum Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos.',

        },
      ])
    

  return (
    <>
    <section>
                <div class="container-xxl project py-5">
                    <div class="container">
                        <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth:"600px"}}>
                            <h4 class="section-title d-flex justify-content-center align-items-center">
                                <span></span>
                                Our Projects
                                <span></span>
                                </h4>
                            <h1 class="display-5 mb-4">Visit Our Latest Projects And Our Innovative Works</h1>
                        </div>
                        <div class="row g-4 wow fadeInUp" data-wow-delay="0.3s">
                            <div class="col-lg-4">
                                <div class="nav nav-pills d-flex justify-content-between gap-2 align-items-stretch  h-100 w-100 me-4">
                                    <button class="nav-link w-100 d-flex align-items-center gap-3 text-start p-3 mb-4 active" data-bs-toggle="pill" data-bs-target="#tab-pane-1" type="button">
                                        <i className="fa fa-home"></i>
                                        <h5 class="m-0">Modern Complex </h5>
                                    </button>
                                    <button class="nav-link w-100 d-flex align-items-center gap-3 text-start p-3 mb-4" data-bs-toggle="pill" data-bs-target="#tab-pane-2" type="button">
                                        <i className="fa fa-hotel"></i>
                                        <h5 class="m-0">Royal Hotel</h5>
                                    </button>
                                    <button class="nav-link w-100 d-flex align-items-center gap-3 text-start p-3 mb-4" data-bs-toggle="pill" data-bs-target="#tab-pane-3" type="button">
                                        <i className="fa fa-building "></i>
                                        <h5 class="m-0">Mexwel Buiding </h5>
                                    </button>
                                    <button class="nav-link w-100 d-flex align-items-center gap-3 text-start p-3 mb-0" data-bs-toggle="pill" data-bs-target="#tab-pane-4" type="button">
                                        <i className="fa fa-store"></i>
                                        <h5 class="m-0">Shopping Complex</h5>
                                    </button>
                                </div>
                            </div>
                            <div class="col-lg-8">
                                <div class="tab-content w-100">
                                    <div class="tab-pane fade show active" id="tab-pane-1">
                                        <div class="row g-4">
                                            <div class="col-md-6" style={{minHeight:"350px"}}>
                                                <div class="position-relative h-100">
                                                    <img class="position-absolute img-fluid w-100 h-100" src="img/project-1.jpg"
                                                        style={{objectFit:"cover"}} alt=""/>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <h1 class="mb-3">25 Years Of Experience In Architecture Industry</h1>
                                                <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                                <p><i class="fa fa-check text-primary me-3"></i>Design Approach</p>
                                                <p><i class="fa fa-check text-primary me-3"></i>Innovative Solutions</p>
                                                <p><i class="fa fa-check text-primary me-3"></i>Project Management</p>
                                                <a href="" class="btn btn-primary py-3 px-5 mt-3">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="tab-pane-2">
                                        <div class="row g-4">
                                            <div class="col-md-6" style={{minHeight:"350px"}}>
                                                <div class="position-relative h-100">
                                                    <img class="position-absolute img-fluid w-100 h-100" src="img/project-2.jpg"
                                                        style={{objectFit:"cover"}} alt=""/>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <h1 class="mb-3">25 Years Of Experience In Architecture Industry</h1>
                                                <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                                <p><i class="fa fa-check text-primary me-3"></i>Design Approach</p>
                                                <p><i class="fa fa-check text-primary me-3"></i>Innovative Solutions</p>
                                                <p><i class="fa fa-check text-primary me-3"></i>Project Management</p>
                                                <a href="" class="btn btn-primary py-3 px-5 mt-3">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="tab-pane-3">
                                        <div class="row g-4">
                                            <div class="col-md-6"  style={{minHeight:"350px"}}>
                                                <div class="position-relative h-100">
                                                    <img class="position-absolute img-fluid w-100 h-100" src="img/project-3.jpg"
                                                        style={{objectFit:"cover"}} alt=""/>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <h1 class="mb-3">25 Years Of Experience In Architecture Industry</h1>
                                                <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                                <p><i class="fa fa-check text-primary me-3"></i>Design Approach</p>
                                                <p><i class="fa fa-check text-primary me-3"></i>Innovative Solutions</p>
                                                <p><i class="fa fa-check text-primary me-3"></i>Project Management</p>
                                                <a href="" class="btn btn-primary py-3 px-5 mt-3">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="tab-pane fade" id="tab-pane-4">
                                        <div class="row g-4">
                                            <div class="col-md-6"  style={{minHeight:"350px"}}>
                                                <div class="position-relative h-100">
                                                    <img class="position-absolute img-fluid w-100 h-100" src="img/project-4.jpg"
                                                        style={{objectFit:"cover"}} alt=""/>
                                                </div>
                                            </div>
                                            <div class="col-md-6">
                                                <h1 class="mb-3">25 Years Of Experience In Architecture Industry</h1>
                                                <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                                <p><i class="fa fa-check text-primary me-3"></i>Design Approach</p>
                                                <p><i class="fa fa-check text-primary me-3"></i>Innovative Solutions</p>
                                                <p><i class="fa fa-check text-primary me-3"></i>Project Management</p>
                                                <a href="" class="btn btn-primary py-3 px-5 mt-3">Read More</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </>
  )
}

export default Project