import React from 'react'

function ProjectCard({project}){
  return (
    <div className="col-md-4">
      <article className="card h-100">
        <img src={project.image} className="card-img-top" alt={project.title} />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title">{project.title}</h5>
          <p className="card-text text-muted" style={{flex: 1}}>{project.description}</p>
          <div className="mt-3 d-flex justify-content-between align-items-center">
            <small className="text-muted">{project.tech.join(' • ')}</small>
            <a href={project.link} className="btn btn-sm btn-outline-primary" target="_blank" rel="noreferrer">View</a>
          </div>
        </div>
      </article>
    </div>
  )
}

export default ProjectCard
