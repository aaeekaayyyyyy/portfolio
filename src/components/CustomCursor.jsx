import { useEffect, useState, useRef } from 'react'

export default function CustomCursor() {
  const cursorRef = useRef(null)
  const trailContainerRef = useRef(null)
  const [isDesktop, setIsDesktop] = useState(false)
  const trailPoints = useRef([])
  const lastUpdateTime = useRef(0)
  const animationFrameId = useRef(null)

  useEffect(() => {
    // Only show custom cursor on desktop (non-touch devices)
    const checkIsDesktop = () => {
      setIsDesktop(window.matchMedia('(pointer: fine)').matches && !window.matchMedia('(hover: none)').matches)
    }
    
    checkIsDesktop()
    window.addEventListener('resize', checkIsDesktop)

    if (!isDesktop) return

    const updateCursor = (x, y) => {
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${x}px, ${y}px) translate(-50%, -50%)`
      }
    }

    let targetPos = { x: 0, y: 0 }

    const handleMouseMove = (e) => {
      const now = performance.now()
      targetPos = { x: e.clientX, y: e.clientY, time: now }
      
      // Update cursor immediately for responsiveness
      updateCursor(targetPos.x, targetPos.y)
      
      // Add trail point
      if (now - lastUpdateTime.current > 10) { // ~100fps for trail
        trailPoints.current.push({ ...targetPos })
        // Keep only last 15 points for performance
        if (trailPoints.current.length > 15) {
          trailPoints.current.shift()
        }
        lastUpdateTime.current = now
      }
    }

    const animate = () => {
      const now = performance.now()
      const maxAge = 150 // Trail lasts 150ms
      
      // Remove old trail points
      trailPoints.current = trailPoints.current.filter(point => now - point.time < maxAge)
      
      // Update trail rendering - batch DOM updates
      if (trailContainerRef.current && trailPoints.current.length > 0) {
        const container = trailContainerRef.current
        
        // Use DocumentFragment for better performance
        const fragment = document.createDocumentFragment()
        
        trailPoints.current.forEach((point) => {
          const age = now - point.time
          const progress = age / maxAge
          const reverseProgress = 1 - progress
          
          // Prominent trail
          const opacity = Math.max(0, reverseProgress * 0.85)
          const size = 5 + reverseProgress * 5
          const blur = 0.5 + progress * 2.5
          
          const trailElement = document.createElement('div')
          trailElement.style.position = 'fixed'
          trailElement.style.pointerEvents = 'none'
          trailElement.style.zIndex = '9997'
          trailElement.style.left = `${point.x}px`
          trailElement.style.top = `${point.y}px`
          trailElement.style.transform = 'translate(-50%, -50%)'
          trailElement.style.opacity = opacity
          trailElement.style.willChange = 'opacity'
          
          const innerElement = document.createElement('div')
          innerElement.style.width = `${size}px`
          innerElement.style.height = `${size}px`
          innerElement.style.borderRadius = '50%'
          innerElement.style.backgroundColor = 'rgb(56, 189, 248)'
          innerElement.style.filter = `blur(${blur}px)`
          innerElement.style.boxShadow = `0 0 ${10 + progress * 6}px rgba(56, 189, 248, ${opacity * 0.9}), 0 0 ${18 + progress * 12}px rgba(56, 189, 248, ${opacity * 0.5})`
          
          trailElement.appendChild(innerElement)
          fragment.appendChild(trailElement)
        })
        
        // Replace all at once for better performance
        container.innerHTML = ''
        container.appendChild(fragment)
      }
      
      animationFrameId.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    animate()

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('resize', checkIsDesktop)
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [isDesktop])

  // Don't render on touch devices
  if (!isDesktop) return null

  return (
    <>
      {/* Trail container - rendered via DOM manipulation for performance */}
      <div ref={trailContainerRef} className="fixed pointer-events-none inset-0 z-[9997]" />
      
      {/* Main cursor dot with glow - no rings to reduce lag */}
      <div
        ref={cursorRef}
        className="fixed pointer-events-none z-[9999]"
        style={{
          transform: 'translate(-50%, -50%)',
          willChange: 'transform',
          left: 0,
          top: 0
        }}
      >
        <div className="relative">
          <div className="w-3 h-3 rounded-full bg-primary-400 shadow-lg shadow-primary-400/90" />
          <div className="absolute inset-0 w-3 h-3 rounded-full bg-primary-400/50 blur-sm" />
        </div>
      </div>
    </>
  )
}

