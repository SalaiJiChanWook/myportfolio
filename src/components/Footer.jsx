import React from 'react'

function Footer(){
  return (
    <footer className="bg-white mt-5 py-4">
      <div className="container d-flex justify-content-between align-items-center">
        <small className="text-muted">© {new Date().getFullYear()} Salai. All rights reserved.</small>
        <div>
          <a className="me-3 text-muted" href="#">Privacy</a>
          <a className="text-muted" href="#">Terms</a>
        </div>
      </div>
    </footer>
  )
}

export default Footer