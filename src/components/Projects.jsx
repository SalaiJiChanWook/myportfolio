import React from 'react'
import projects from '../data/projects.js'
import ProjectCard from './ProjectCard.jsx'

function Projects(){
  return (
    <section id="projects">
      <h2 className="section-title text-center mb-4">Projects</h2>
      <div className="row g-4 shadow-sm ">
        {projects.map(p => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  )
}

export default Projects