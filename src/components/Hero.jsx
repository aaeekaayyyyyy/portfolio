import { useState, useEffect } from 'react'
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone } from 'react-icons/fa'

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e) => {
      const hero = document.getElementById('hero')
      if (hero) {
        const rect = hero.getBoundingClientRect()
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        })
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-dark-surface to-dark-bg" />
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(56, 189, 248, 0.3) 0%, transparent 50%)`,
          transition: 'background 0.1s ease-out'
        }}
      />

      {/* 3D floating elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center">
          <div className="mb-6 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold mb-4 glow-text">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 via-primary-300 to-primary-500">
                Ayushman
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-primary-400 to-primary-300">
                Khandelwal
              </span>
            </h1>
          </div>
          
          <div className="mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <h2 className="text-3xl md:text-4xl text-primary-400 mb-4 font-semibold glow-text">
              Machine Learning Engineer & Aspiring Researcher
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-transparent via-primary-500 to-transparent mx-auto" />
          </div>

          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            Passionate about <span className="text-primary-400 font-semibold">machine learning research</span> and advancing the frontiers of AI. 
            My primary interest lies in <span className="text-primary-400 font-semibold">Natural Language Processing and Reinforcement Learning research,</span>, 
            <span className="text-primary-400 font-semibold"> developing novel algorithms</span>, and 
            <span className="text-primary-400 font-semibold"> contributing to the scientific community</span>. 
            Aspiring to become a researcher who bridges the gap between theoretical understanding and practical applications in AI.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up" style={{ animationDelay: '0.6s' }}>
            <a
              href="https://www.linkedin.com/in/ayushman-khandelwal-342912213/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary-600 to-primary-500 text-white rounded-xl hover:from-primary-500 hover:to-primary-400 transition-all duration-300 shadow-lg hover:shadow-2xl transform hover:scale-105 hover:-translate-y-1 card-3d"
            >
              <FaLinkedin className="group-hover:rotate-12 transition-transform" /> 
              <span className="font-semibold">LinkedIn</span>
            </a>
            <a
              href="https://github.com/aaeekaayyyyyy"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-8 py-4 bg-dark-card text-gray-200 rounded-xl hover:bg-dark-accent transition-all duration-300 shadow-lg hover:shadow-2xl border border-gray-700 hover:border-primary-500 transform hover:scale-105 hover:-translate-y-1 card-3d"
            >
              <FaGithub className="group-hover:rotate-12 transition-transform" /> 
              <span className="font-semibold">GitHub</span>
            </a>
            <a
              href="mailto:ayushmankhandelwal04@gmail.com"
              className="group flex items-center gap-2 px-8 py-4 bg-dark-card text-gray-200 rounded-xl hover:bg-dark-accent transition-all duration-300 shadow-lg hover:shadow-2xl border border-gray-700 hover:border-primary-500 transform hover:scale-105 hover:-translate-y-1 card-3d"
            >
              <FaEnvelope className="group-hover:rotate-12 transition-transform" /> 
              <span className="font-semibold">Email</span>
            </a>
            <a
              href="tel:9294057701"
              className="group flex items-center gap-2 px-8 py-4 bg-dark-card text-gray-200 rounded-xl hover:bg-dark-accent transition-all duration-300 shadow-lg hover:shadow-2xl border border-gray-700 hover:border-primary-500 transform hover:scale-105 hover:-translate-y-1 card-3d"
            >
              <FaPhone className="group-hover:rotate-12 transition-transform" /> 
              <span className="font-semibold">Call</span>
            </a>
          </div>

          <div className="flex justify-center animate-slide-up" style={{ animationDelay: '0.8s' }}>
            <a
              href="#experience"
              className="group text-primary-400 hover:text-primary-300 font-semibold text-lg flex flex-col items-center transition-all duration-300"
            >
              <span className="mb-2 group-hover:translate-y-2 transition-transform">View My Work</span>
              <span className="text-2xl animate-bounce group-hover:animate-none">↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

