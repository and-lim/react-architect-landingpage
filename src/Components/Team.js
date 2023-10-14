import {React, useState} from 'react'

const Team = () => {
    const[team,setteam] = useState ([
        {
            id :'1',
            name : 'Maria Martha',
            role: 'Interior Designer',
            image :'img/team-1.jpg'
        },
        {
            id :'2',
            name : 'John Doe',
            role: 'Architect',
            image :'img/team-2.jpg'
        },
        {
            id :'3',
            name : 'John Doe',
            role: 'Interior Designer',
            image :'img/team-3.jpg'
        },
        {
            id :'3',
            name : 'Martha Maria',
            role: 'Designer',
            image :'img/team-4.jpg'
        },
      ])
  return (
    <section className='team'>
        <div class="container-xxl py-5">
            <div class="container">
                <div class="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{maxWidth:"600px;"}}>
                    <h4 class="section-title d-flex align-items-center justify-content-center">
                        <span></span>
                        Team Members
                        <span></span>
                    </h4>
                    <h1 class="display-5 mb-4">We Are Creative Architecture Team For Your Dream Home</h1>
                </div>
                <div class="row g-0 team-items">
                {team.map((team) =>(
                    <div class="col-lg-3 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                        <div class="team-item position-relative">
                            <div class="position-relative">
                                <img class="img-fluid" src={team.image} alt=""/>
                                <div class="team-social text-center">
                                    <a class="btn btn-square" href=""><i class="fab fa-facebook-f"></i></a>
                                    <a class="btn btn-square" href=""><i class="fab fa-twitter"></i></a>
                                    <a class="btn btn-square" href=""><i class="fab fa-instagram"></i></a>
                                </div>
                            </div>
                            <div class="bg-light text-center p-4">
                                <h3 class="mt-2">{team.name}</h3>
                                <span class="text-primary">{team.role}</span>
                            </div>
                        </div>
                    </div>
                     ))}
                </div>
            </div>
        </div>
    </section>

  )
}

export default Team