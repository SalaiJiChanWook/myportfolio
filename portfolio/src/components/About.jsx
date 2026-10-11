import React from 'react';

function About() {
  return (
    <section id="about" className="py-5 bg-white">
      <div className="container">
        <h2 className="section-title fw-bold mb-4">About Me</h2>
        <div className="row align-items-center g-4">
          <div className="col-md-7">
            <p className="text-secondary lead fs-6">
              I am a backend & systems developer focused on building scalable Python services, Linux infrastructure, and humanitarian offline solutions. I specialize in designing automation workflows, Telegram bots, and edge IoT devices using Raspberry Pi and ESP32 microcontrollers.
            </p>
            <ul className="list-unstyled d-flex flex-column gap-2 text-secondary mt-3">
              <li><strong>Core Stack:</strong> Python, Linux (Debian/Ubuntu/Kali/CentOS), SQL, Bash, C/C++</li>
              <li><strong>Hardware & IoT:</strong> Raspberry Pi (4/5), ESP32, ESP32-CAM, Sensor Integration</li>
              <li><strong>Cloud & DevOps:</strong> AWS (EC2, S3, ALB), Terraform, Docker, UFW, Git CI/CD</li>
              <li><strong>Focus Areas:</strong> Backend REST APIs, Humanitarian Offline LMS (Moodle), System Automation</li>
              <li><strong>Available For:</strong> Remote Backend Roles, Freelance Projects & Technical Instruction</li>
            </ul>
          </div>
          <div className="col-md-5">
            <div className="card border-0 shadow-sm rounded-4 p-3 bg-light">
              <div className="card-body">
                <h5 className="card-title fw-bold text-dark mb-3">Direct Contact</h5>
                <p className="card-text text-muted mb-2">
                  <strong>Email:</strong> <a href="mailto:salailunlyanpao@gmail.com" className="text-decoration-none">salailunlyanpao@gmail.com</a>
                </p>
                <p className="card-text text-muted mb-2">
                  <strong>Telegram:</strong> <a href="https://t.me/UchiaSalai" target="_blank" rel="noreferrer" className="text-decoration-none">@UchiaSalai</a>
                </p>
                <p className="card-text text-muted mb-0">
                  <strong>GitHub:</strong> <a href="https://github.com/SalaiJiChanWook" target="_blank" rel="noreferrer" className="text-decoration-none">SalaiJiChanWook</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;