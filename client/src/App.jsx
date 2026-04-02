import { useState, useEffect, useRef } from 'react'
import Silk from './components/Silk'
import MagicBento from './components/MagicBento'
import UIUXInline from './pages/UIUX'
import TechStack from './pages/TechStack'
import NebulaBackground from './components/NebulaBackground.jsx'
import NeuralCircuit from './components/NeuralCircuit'
import './App.css'
import logo from './assets/logo.png'
import hoverImg from './assets/hover.jpg'
import AboutMe from './pages/AboutMe'

function App() {
  const [moreOpen, setMoreOpen] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const dropdownRef = useRef(null)
  const hamburgerRef = useRef(null)

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setMoreOpen(false)
      }
      if (hamburgerRef.current && !hamburgerRef.current.contains(e.target)) {
        setMenuOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    document.addEventListener('touchstart', handler)
    return () => {
      document.removeEventListener('mousedown', handler)
      document.removeEventListener('touchstart', handler)
    }
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMoreOpen(false)
    setMenuOpen(false)
  }

  return (
    <div className="app">

      <section className="hero-container">
        <div className="background">
          <Silk color="#102A5E" />
        </div>

        <section className="hero-section">
          <div className="topbar">

            {/* Desktop navbar */}
            <div className="navbar">
              <button className="nav-btn">Home</button>
              <button className="nav-btn" onClick={() => scrollTo('projects-section')}>
                Projects
              </button>
              <div className="nav-more-wrapper" ref={dropdownRef}>
                <button
                  className={`nav-btn${moreOpen ? ' nav-btn--active' : ''}`}
                  onClick={() => setMoreOpen(p => !p)}
                >
                  More ▾
                </button>
                {moreOpen && (
                  <div className="nav-dropdown">
                    <button className="nav-drop-item" onClick={() => scrollTo('uiux-section')}>UI/UX</button>
                    <button className="nav-drop-item" onClick={() => scrollTo('techstack-section')}>Tech Stack</button>
                    <button className="nav-drop-item" onClick={() => scrollTo('aboutme-section')}>About Me</button>
                  </div>
                )}
              </div>
            </div>

            {/* Mobile hamburger */}
            <div className="hamburger-wrapper" ref={hamburgerRef}>
              <button
                className={`hamburger${menuOpen ? ' open' : ''}`}
                onClick={() => setMenuOpen(p => !p)}
                aria-label="Open menu"
              >
                <span />
                <span />
                <span />
              </button>
              {menuOpen && (
                <div className="mobile-menu">
                  <button className="mobile-menu-item" onClick={() => scrollTo('projects-section')}>Projects</button>
                  <button className="mobile-menu-item" onClick={() => scrollTo('uiux-section')}>UI / UX</button>
                  <button className="mobile-menu-item" onClick={() => scrollTo('techstack-section')}>Tech Stack</button>
                  <button className="mobile-menu-item" onClick={() => scrollTo('aboutme-section')}>About Me</button>
                </div>
              )}
            </div>

            {/* Logo */}
            <div className="branding">
              <div className="brand-text">
                <p>Defined by blue design aesthetics</p>
                <p>Creative</p>
                <p>Unique</p>
              </div>
              <img src={logo} alt="logo" />
            </div>
          </div>

          <div className="hero">
            <h1>A PORTFOLIO BUILT AROUND FLOW, SUBTLE MOTION, AND PURPOSEFUL DESIGN.</h1>
            <h2 className="typewriter">
              <span className="typing-text">everything here is intentional</span>
              <span className="cursor">|</span>
            </h2>
            <div className="explore-wrapper">
              <button
                className="explore-btn"
                style={{ '--hover-image': `url(${hoverImg})` }}
                onClick={() => scrollTo('projects-section')}
              >
                Explore More
              </button>
            </div>
            <div className="arrow" onClick={() => scrollTo('projects-section')}>↓</div>
          </div>
        </section>
      </section>

      <section id="projects-section" className="projects-wrapper">
        <NebulaBackground />
        <h1 style={{
          fontFamily: '"Times New Roman", serif',
          fontSize: 'clamp(3rem, 6vw, 5rem)',
          fontWeight: 300,
          textTransform: 'uppercase',
          letterSpacing: '-0.02em',
          margin: '0 0 0 5%',
          paddingTop: '2px',
          position: 'relative',
          zIndex: 10,
          display: 'inline-block',
          background: 'linear-gradient(90deg, #ffffff 0%, #a8c0ff 35%, #3b6cff 65%, #0033cc 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}>PROJECTS</h1>
        <MagicBento
          textAutoHide enableStars enableSpotlight enableBorderGlow
          enableTilt={false} enableMagnetism={false} clickEffect
          spotlightRadius={400} particleCount={12} glowColor="20, 76, 196"
        />
      </section>

      <section id="uiux-section">
        <UIUXInline />
      </section>

      <section id="techstack-section" style={{ position: 'relative' }}>
        <NeuralCircuit />
        <TechStack />
      </section>

      <section id="aboutme-section">
        <AboutMe />
      </section>

    </div>
  )
}

export default App