import { useEffect } from 'react'
import HeroSection from './components/HeroSection'
import MarqueeSection from './components/MarqueeSection'
import AboutSection from './components/AboutSection'
import ServicesSection from './components/ServicesSection'
import ProjectsSection from './components/ProjectsSection'
import Footer from './components/Footer'
import CustomCursor from './components/CustomCursor'
import ScrollProgress from './components/ScrollProgress'
import Preloader from './components/Preloader'
import Noise from './components/Noise'

export default function App() {
  useEffect(() => {
    // Hide native cursor on fine pointers
    const style = document.createElement('style')
    style.innerHTML =
      '@media (pointer: fine) { html, body, * { cursor: none !important; } }'
    document.head.appendChild(style)
    return () => {
      document.head.removeChild(style)
    }
  }, [])

  return (
    <>
      <Preloader />
      <ScrollProgress />
      <CustomCursor />
      <Noise />
      <main
        className="relative w-full"
        style={{ background: '#0C0C0C', overflowX: 'clip' }}
      >
        <HeroSection />
        <MarqueeSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <Footer />
      </main>
    </>
  )
}
