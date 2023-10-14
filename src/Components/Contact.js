import React from 'react'

const Contact = () => {
  return (
    <div>
          <section>
                <div class="container-xxl py-3">
                    <div class="container">
                        <div class="row g-5">
                            <h1 class="section-title d-flex justify-content-center align-items-center">
                                <span></span>
                                Contact
                                <span></span>
                            </h1>
                            <div class="col-lg-6 order-2 wow fadeInUp" data-wow-delay="0.1s">
                                <h4 class="section-title">Appointment</h4>
                                <h1 class="display-5 mb-4">Make An Appointment To Start Your Dream Project</h1>
                                <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                                <div class="row g-4">
                                    <div class="col-12">
                                        <div class="d-flex">
                                            <div class="d-flex flex-shrink-0 align-items-center justify-content-center border-icon">
                                                <i class="fa fa-2x fa-phone-alt text-primary"></i>
                                            </div>
                                            <div class="ms-4">
                                                <p class="mb-2">Call Us Now</p>
                                                <h3 class="mb-0">+012 345 6789</h3>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <div class="d-flex">
                                            <div class="d-flex flex-shrink-0 align-items-center justify-content-center border-icon">
                                                <i class="fa fa-2x fa-envelope-open text-primary"></i>
                                            </div>
                                            <div class="ms-4">
                                                <p class="mb-2">Mail Us Now</p>
                                                <h3 class="mb-0">info@example.com</h3>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 order-1 wow fadeInUp" data-wow-delay="0.5s">
                                <div class="row g-3">
                                    <div class="col-12 col-sm-6">
                                        <input type="text" class="form-control p-3" placeholder="Your Name" />
                                    </div>
                                    <div class="col-12 col-sm-6">
                                        <input type="email" class="form-control p-3" placeholder="Your Email" />
                                    </div>
                                    <div class="col-12 col-sm-6">
                                        <input type="text" class="form-control p-3" placeholder="Your Mobile" />
                                    </div>
                                    <div class="col-12 col-sm-6">
                                        <select class="form-select p-3" >
                                            <option selected>Choose Service</option>
                                            <option value="1">Service 1</option>
                                            <option value="2">Service 2</option>
                                            <option value="3">Service 3</option>
                                        </select>
                                    </div>
                                    <div class="col-12 col-sm-6">
                                        <div class="date" id="date" data-target-input="nearest">
                                            <input type="date"
                                                class="form-control p-3 datetimepicker-input"
                                                placeholder="Choose Date" data-target="#date" data-toggle="datetimepicker" />
                                        </div>
                                    </div>
                                    <div class="col-12 col-sm-6">
                                        <div class="time" id="time" data-target-input="nearest">
                                            <input type="date"
                                                class="form-control p-3 datetimepicker-input"
                                                placeholder="Choose Date" data-target="#time" data-toggle="datetimepicker" />
                                        </div>
                                    </div>
                                    <div class="col-12">
                                        <textarea class="form-control p-3" rows="5" placeholder="Message"></textarea>
                                    </div>
                                    <div class="col-12">
                                        <button class="btn btn-primary w-100 py-3" type="submit">Book Appointment</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
    </div>
  )
}

export default Contact