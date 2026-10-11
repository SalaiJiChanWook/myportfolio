import React from 'react';
import { Link } from 'react-router-dom';
import MyProfile from '../../assets/Myprofile.jpg';

function Hero() {
  return (
    <section id="hero" className="py-5 bg-light border-bottom">
      <div className="container d-flex flex-column flex-md-row align-items-center justify-content-between py-4">
        <div className="col-12 col-md-7 mb-4 mb-md-0 text-center text-md-start">
          <span className="badge bg-primary-subtle text-primary border border-primary-subtle rounded-pill px-3 py-1 mb-3">
            Python Backend & IoT Systems Developer
          </span>
          <h1 className="fw-bold display-5 text-dark">Hi, I’m Salai 👋</h1>
          <p className="lead text-secondary my-3" style={{ maxWidth: '580px' }}>
            Building production-ready Python services, automated workflows, Linux server infrastructure, and offline educational deployments with Raspberry Pi and ESP32.
          </p>
          <div className="d-flex flex-wrap gap-2 justify-content-center justify-content-md-start mt-4">
            <a href="#projects" className="btn btn-primary px-4 py-2 rounded-pill shadow-sm">View Projects</a>
            <Link to="/curriculum" className="btn btn-outline-dark px-4 py-2 rounded-pill">Teaching Syllabus</Link>
            <a href="#contact" className="btn btn-light border px-4 py-2 rounded-pill">Contact Me</a>
          </div>
        </div>
        <div className="col-12 col-md-5 text-center">
          <img
            alt="Salai Profile"
            src={MyProfile}
            className="img-fluid rounded-4 shadow"
            style={{ maxWidth: 280, objectFit: 'cover' }}
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;