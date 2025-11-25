import { useState, useEffect } from 'react'
import { FaLinkedin, FaGithub, FaEnvelope, FaPhone, FaBars, FaTimes } from 'react-icons/fa'
import Hero from './components/Hero'
import Education from './components/Education'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Research from './components/Research'
import Projects from './components/Projects'
import Quiz from './components/Quiz'
import RecommendedReads from './components/RecommendedReads'
import CustomCursor from './components/CustomCursor'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Scroll to top on mount/refresh
  useEffect(() => {
    window.scrollTo(0, 0)
    // Disable browser scroll restoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'education', 'skills', 'experience', 'research', 'projects', 'recommended-reads', 'quiz']
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('mousemove', handleMouseMove)
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  const navItems = [
    { id: 'hero', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'research', label: 'Research' },
    { id: 'projects', label: 'Projects' },
    { id: 'recommended-reads', label: 'Reads' },
    { id: 'quiz', label: 'Quiz' }
  ]

  return (
    <div className="min-h-screen bg-dark-bg relative overflow-hidden">
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Animated background gradient */}
      <div 
        className="fixed inset-0 opacity-20 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(56, 189, 248, 0.15) 0%, transparent 50%)`,
          transition: 'background 0.3s ease-out'
        }}
      />

      {/* Floating particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${6 + Math.random() * 4}s`
          }}
        />
      ))}

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-dark-surface/80 backdrop-blur-lg border-b border-gray-800 z-50 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600 glow-text">
              AK
            </div>
            <div className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`relative px-3 py-2 text-sm font-medium transition-all duration-300 ${
                    activeSection === item.id
                      ? 'text-primary-400'
                      : 'text-gray-400 hover:text-primary-400'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-400 to-primary-600 animate-glow" />
                  )}
                </button>
              ))}
            </div>
            <button
              className="md:hidden text-gray-400 hover:text-primary-400 transition"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-dark-surface border-t border-gray-800">
            <div className="px-4 py-2 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left py-2 text-gray-400 hover:text-primary-400 transition"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <div className="pt-16 relative z-10">
        <Hero />
        <Education />
        <Skills />
        <Experience />
        <Research />
        <Projects />
        <RecommendedReads />
        <Quiz />
      </div>

      {/* Footer */}
      <footer className="bg-dark-surface border-t border-gray-800 py-8 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-500">© 2025 Ayushman Khandelwal. All rights reserved.</p>
            </div>
            <div className="flex space-x-6">
              <a
                href="https://www.linkedin.com/in/ayushman-khandelwal-342912213/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary-400 transition transform hover:scale-110 hover:rotate-12"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://github.com/aaeekaayyyyyy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-primary-400 transition transform hover:scale-110 hover:rotate-12"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="mailto:ayushmankhandelwal04@gmail.com"
                className="text-gray-500 hover:text-primary-400 transition transform hover:scale-110 hover:rotate-12"
              >
                <FaEnvelope size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App

