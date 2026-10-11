import React from 'react'
import MyProfile from '../assets/Myprofile.jpg';

function Hero() {
  return (
    <section
      id="hero"
      className="d-flex flex-column flex-md-row align-items-center justify-content-center text-center text-md-start py-5"
    >
      <div className="col-12 col-md-6 mb-4 mb-md-0">
        <h1 className="fw-bold">Hi, I’m Salai👋</h1>
        <p className="lead">
          I'm a backend developer with 4 years of experience in Python.
            I have experience with automation programs, computer vision models and Raspberry Pi (IoT and local server) projects.
        </p>
        <a href="#projects" className="btn btn-primary me-2">See projects</a>
        <a href="#contact" className="btn btn-outline-secondary">Contact me</a>
      </div>
      <div className="col-12 col-md-6 text-center">
        <img
                    alt="profile"
                    src={MyProfile} 
                    className="img-fluid rounded shadow"
                    style={{ maxWidth: 320 }}
                  />
      </div>
    </section>
  )
}

export default Hero
