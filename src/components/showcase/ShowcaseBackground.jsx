import React from 'react'
import { motion as Motion, AnimatePresence } from 'framer-motion'

const ShowcaseBackground = ({ theme }) => {
  return (
    <div className="absolute inset-0 z-[-20] overflow-hidden">
      <AnimatePresence mode="wait">
        <Motion.div
          key={`bg-${theme.ambientStyle}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {/* Base ambient style class */}
          <div className={`absolute inset-0 ${theme.ambientStyle}`} />
          
          {/* Radial gradient background */}
          <div 
            className="absolute inset-0"
            style={{
              background: `radial-gradient(ellipse at left, ${theme.bgGlow} 0%, transparent 60%)`
            }}
          />

          {/* If radar theme, add a subtle scanline overlay */}
          {theme.ambientStyle === 'radar-stage-ambient' && (
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
              style={{
                backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
                backgroundSize: '100% 4px, 3px 100%'
              }}
            />
          )}
        </Motion.div>
      </AnimatePresence>
    </div>
  )
}

export default ShowcaseBackground
