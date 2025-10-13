import React from 'react'

function About(){
  return (
    <section id="about">
      <h2 className="section-title">About</h2>
      <div className="row align-items-center">
        <div className="col-md-6">
          <p>I’m a software developer who intested in new technologies like AI(Machine learning and deep learning ), Cybersecurity, Python Programming and writing maintainable code. I like to create automation programs, small management software which help for Education and train some computer vision models in private.</p>
          <ul>
            <li>Experience: Python, C, C++, C#,.net framework, Embedded Linux, React, JavaScript (ES6+), Docker, Kubernetes,Teaching adult-learners</li>
            <li>Focus: Python, Raspberry Pi,Offensive Security,React Native(Current)</li>
            <li>Open to: Freelance and full-time roles</li>
          </ul>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Contact</h5>
              <p className="card-text text-muted">Email: <a href="mailto:you@example.com">programmer.salai@gamil.com</a></p>
              <p className="card-text text-muted">Location: Yangon, Myanmar</p>
              <p className="card-text text-muted">Telegram: https://t.me/UchiaSalai</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About