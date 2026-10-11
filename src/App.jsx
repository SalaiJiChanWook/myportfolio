import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    
    <div>
      <Navbar />
      <main className="container-fluid px-3">
        <h1>Hello Every One!</h1>
        <Hero />
        <div className="container">
          <About />
          <Projects />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  )
}



export default App


