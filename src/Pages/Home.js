import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Contact from '../Components/Contact'
import PageHero from '../Components/PageHero'
import AboutUs from '../Components/AboutUs'
import Services from '../Components/Services'
import Project from '../Components/Project'
import Team from '../Components/Team'

const Home = () => {
  return (
    <>
        <Navbar/>
        <PageHero/>
        <AboutUs/>
        <Services/>
        <Project/>

          <Team/>
            <Contact/>

            <Footer/>
    </>
  )
}

export default Home