import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-white border-top py-4 mt-auto">
      <div className="container d-flex flex-column flex-sm-row justify-content-between align-items-center gap-2">
        <small className="text-muted">© {new Date().getFullYear()} Salai. All rights reserved.</small>
        <div className="d-flex gap-3">
          <Link to="/" className="text-decoration-none text-muted small">Portfolio</Link>
          <Link to="/curriculum" className="text-decoration-none text-muted small">Curriculum</Link>
          <a href="https://github.com/SalaiJiChanWook" target="_blank" rel="noreferrer" className="text-decoration-none text-muted small">GitHub</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;