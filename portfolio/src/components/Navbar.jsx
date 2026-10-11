import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-bold text-primary" to="/">Developer Salai</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center gap-1">
            <li className="nav-item"><Link className="nav-link" to="/">About & Projects</Link></li>
            {/* သင်ရိုးညွှန်းတမ်း Webpage အသစ်ကို ချိတ်ဆက်ခြင်း */}
            <li className="nav-item">
              <Link className="nav-link fw-semibold text-dark" to="/curriculum">Curriculum / Syllabus</Link>
            </li>
            <li className="nav-item"><a className="nav-link" href="#contact">Contact</a></li>
            <li className="nav-item ms-lg-2">
              <a 
  className="btn btn-outline-primary btn-sm px-3 rounded-pill" 
  href="./SalaiLunLyanPon-Python&IoTDeveloperResume.pdf" 
  target="_blank" 
  rel="noreferrer"
>
  Resume
</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;