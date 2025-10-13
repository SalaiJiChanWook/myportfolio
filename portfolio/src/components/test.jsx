import React from 'react'

function Projects() {
  const projectList = [
    { title: 'Portfolio Website', desc: 'My personal website built with React.', img: '/portfolio.jpg' },
    { title: 'Todo App', desc: 'A clean and fast task manager.', img: '/todo.jpg' },
    { title: 'Weather App', desc: 'Shows real-time weather using an API.', img: '/weather.jpg' },
  ]

  return (
    <section id="projects" className="container my-5">
      <h2 className="text-center mb-4">Projects</h2>
      <div className="row g-4">
        {projectList.map((p, i) => (
          <div key={i} className="col-12 col-sm-6 col-lg-4">
            <div className="card h-100 shadow-sm border-0">
              <img src={p.img} className="card-img-top" alt={p.title} />
              <div className="card-body">
                <h5 className="card-title">{p.title}</h5>
                <p className="card-text">{p.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Projects
