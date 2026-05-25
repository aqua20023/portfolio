import React, { useState } from 'react'
import { motion as Motion } from 'framer-motion'

const staggerPanel = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
}

const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
}

const FeatureCards = ({ features, theme }) => {
  const [activeCardIndex, setActiveCardIndex] = useState(0)

  return (
    <Motion.div 
      variants={staggerPanel}
      initial="hidden"
      animate="show"
      className='grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6'
    >
      {features.map((feature, idx) => {
        const Icon = feature.icon
        const isActive = idx === activeCardIndex

        return (
          <Motion.div
            variants={cardVariant}
            key={feature.title}
            onClick={() => setActiveCardIndex(idx)}
            className={`group rounded-xl border p-4 sm:p-5 transition-all duration-300 cursor-pointer flex flex-col gap-3 ${
              isActive
                ? `${theme.accentBorder}/60 ${theme.accentBg}/[0.06] shadow-[0_4px_24px_rgba(0,0,0,0.12)]` // Using a generic black shadow or theme shadow
                : 'border-white/10 bg-[#0a0b10] hover:border-white/20 hover:bg-[#0d0e14]'
            }`}
            style={{
              boxShadow: isActive ? `0 4px 24px ${theme.primaryGlow}20` : 'none'
            }}
          >
            <div className='flex items-center gap-3'>
              <span className={`grid h-8 w-8 shrink-0 place-items-center rounded-lg border transition-all duration-300 ${
                isActive
                  ? `${theme.accentBorder}/40 ${theme.accentBg}/20 ${theme.accentText}`
                  : `border-white/10 bg-white/5 ${theme.accentText} group-hover:text-white`
              }`}>
                <Icon className='text-[15px]' />
              </span>
              <h3 className={`text-[13px] font-bold tracking-wide transition-all ${
                isActive ? 'text-white' : 'text-white/90 group-hover:text-white'
              }`}>
                {feature.title}
              </h3>
            </div>
            <p className='text-[11px] sm:text-xs leading-relaxed text-[#7a7b82]'>
              {feature.text}
            </p>
          </Motion.div>
        )
      })}
    </Motion.div>
  )
}

export default FeatureCards
