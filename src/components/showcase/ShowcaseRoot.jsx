import React, { useState, Suspense } from 'react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import { staggerContainer } from '../../utils/motion'
import { projects } from './data/projects'
import ProjectNavigator from './ProjectNavigator'
import ShowcaseBackground from './ShowcaseBackground'
import FeatureCards from './FeatureCards'
import TechDetails from './TechDetails'
import MissionContext from './MissionContext'

// Lazy load the specific project phone components to keep bundle size small
const WardrobePhoneApp = React.lazy(() => import('./projects/wardrobe/WardrobePhoneApp'))
const RadarPhoneApp = React.lazy(() => import('./projects/radar/RadarPhoneApp'))

const ShowcaseRoot = () => {
  const [activeProjectId, setActiveProjectId] = useState(projects[0].id)
  
  const activeProject = projects.find(p => p.id === activeProjectId) || projects[0]

  const renderPhoneComponent = () => {
    switch (activeProject.id) {
      case 'wardrobeIQ':
        return <WardrobePhoneApp />
      case 'rfRadar':
        return <RadarPhoneApp />
      default:
        return null
    }
  }

  return (
    <div className={`w-full flex flex-col py-24 relative overflow-hidden z-0 mt-20 transition-colors duration-1000 ${activeProject.theme.bgDark}`}>
      <span className='hash-span' id='projects'>
        &nbsp;
      </span>
      <ShowcaseBackground theme={activeProject.theme} />

      {/* Main Fullscreen Grid */}
      <div className='relative z-10 w-full max-w-[1600px] mx-auto grid grid-cols-1 items-center gap-16 lg:gap-12 px-6 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] xl:px-16'>
        
        {/* Left Side: Phone */}
        <Motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className='flex w-full justify-center lg:justify-end lg:pr-12 xl:pr-16'
        >
          <div className='relative w-full flex justify-center lg:justify-end'>
            {/* Phone Glow */}
            <AnimatePresence mode="wait">
              <Motion.div
                key={`glow-${activeProject.id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: activeProject.theme.glowOpacity }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[750px] blur-[120px] rounded-full pointer-events-none'
                style={{ backgroundColor: activeProject.theme.primaryGlow }}
              />
            </AnimatePresence>
            
            <div className='scale-100 lg:scale-110 origin-center lg:origin-right w-full flex justify-center lg:justify-end'>
              <Suspense fallback={<div className="w-full max-w-[310px] aspect-[9/19.5] rounded-[40px] border border-white/10 animate-pulse bg-white/5 mx-auto lg:ml-auto lg:mr-0" />}>
                {renderPhoneComponent()}
              </Suspense>
            </div>
          </div>
        </Motion.div>

        {/* Right Side: Content */}
        <div className='w-full flex items-center min-h-[700px]'>
          <div className='w-full flex flex-col justify-center space-y-8 pl-0 lg:pl-6 xl:pl-10'>
            
            <ProjectNavigator 
              projects={projects} 
              activeProjectId={activeProjectId} 
              setActiveProjectId={setActiveProjectId} 
            />

            <AnimatePresence mode="wait">
              <Motion.div
                key={`content-${activeProject.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className='flex items-center gap-2 mb-2'>
                  <span className={`text-[10px] sm:text-xs transition-colors duration-500 ${activeProject.theme.accentText}`}>✦</span>
                  <p className='text-[10px] font-bold tracking-[0.24em] text-white uppercase'>
                    Flagship Product Showcase
                  </p>
                </div>
                <h2 className='text-4xl sm:text-5xl lg:text-6xl xl:text-[68px] font-black text-white tracking-tight mt-2 font-serif leading-[1.05]'>
                  {activeProject.title}
                </h2>
                <p className={`text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase mt-4 mb-4 transition-colors duration-500 ${activeProject.theme.accentText}`}>
                  {activeProject.subtitle}
                </p>
                <p className='text-sm sm:text-[15px] leading-relaxed text-[#8a8b92] mt-2 max-w-2xl min-h-[60px]'>
                  {activeProject.description}
                </p>

                <FeatureCards features={activeProject.features} theme={activeProject.theme} />
              </Motion.div>
            </AnimatePresence>

          </div>
        </div>
      </div>

      <AnimatePresence mode="wait">
        <Motion.div
          key={`footer-${activeProject.id}`}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className='relative z-10 w-full max-w-[1600px] mx-auto mt-20 px-6 sm:px-10 xl:px-16 flex flex-col gap-12'
        >
          {activeProject.missionContext && (
            <MissionContext context={activeProject.missionContext} theme={activeProject.theme} />
          )}
          
          <TechDetails 
            techStack={activeProject.techStack} 
            architecture={activeProject.architecture} 
            innovations={activeProject.innovations} 
            theme={activeProject.theme} 
          />
        </Motion.div>
      </AnimatePresence>

    </div>
  )
}

export default ShowcaseRoot
