import React from 'react'
import Services from '../Components/Services'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Service = () => {
  return (
   <>
         <Navbar/>
   
             <div class="container-fluid page-header d-flex align-items-center py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
                <div class="container d-flex flex-column justify-content-center align-items-center py-5">
                    <h1 class="display-1 text-white animated slideInDown">Services</h1>
                    <nav aria-label="breadcrumb animated slideInDown">
                        <ol class="breadcrumb text-uppercase mb-0">
                            <li class="breadcrumb-item"><a class="text-white" href="#">Home</a></li>
                            <li class="breadcrumb-item"><a class="text-white" href="#">Pages</a></li>
                            <li class="breadcrumb-item text-brown" aria-current="page">Services</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <Services/>
        <Footer/>
   </>
  )
}

export default Service