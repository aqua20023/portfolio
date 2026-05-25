import React from 'react'
import { FiCode, FiSmartphone, FiStar } from 'react-icons/fi'

const TechDetails = ({ techStack, architecture, innovations, theme }) => {
  return (
    <>
      {/* Top Row: Tech Stack & Architecture */}
      <div className='grid grid-cols-1 lg:grid-cols-[0.8fr_1.2fr] gap-16 lg:gap-24'>
        
        {/* Tech Stack */}
        <div>
          <div className='flex items-center gap-3 mb-6'>
            <FiCode className={`text-lg ${theme.accentText}`} />
            <h4 className='text-xs font-bold tracking-[0.2em] text-white uppercase'>Tech Stack</h4>
          </div>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-8'>
            {Object.entries(techStack).map(([category, items]) => (
              <div key={category}>
                <h5 className={`text-[10px] font-bold tracking-wider mb-4 uppercase ${theme.accentText}`}>
                  {category}
                </h5>
                <div className='flex flex-wrap gap-2'>
                  {items.map(tech => (
                    <span key={tech} className='text-[11px] font-medium text-white/70 border border-white/10 rounded-full px-3 py-1 bg-white/[0.02]'>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Architecture Flow */}
        <div>
          <div className='flex items-center gap-3 mb-8'>
            <FiSmartphone className={`text-lg ${theme.accentText}`} />
            <h4 className='text-xs font-bold tracking-[0.2em] text-white uppercase'>Architecture Flow</h4>
          </div>
          <div className='relative flex justify-between items-start mt-4'>
            <div className='absolute top-3 left-6 right-6 h-[1px] bg-white/10 -z-10' />
            {architecture.map((step) => (
              <div key={step.id} className='flex flex-col items-center gap-3 text-center w-20 relative group'>
                <span className={`grid place-items-center h-6 w-6 rounded-full border border-white/20 bg-[#05060b] text-[10px] font-bold z-10 transition-colors duration-300 group-hover:${theme.accentBorder} group-hover:${theme.accentText} ${theme.accentText}`}>
                  {step.id}
                </span>
                <span className='text-[10px] font-medium text-white/70 whitespace-pre-line leading-relaxed group-hover:text-white transition-colors duration-300'>
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Row: Key Innovations */}
      <div className='w-full border border-white/10 rounded-2xl bg-white/[0.01] p-6 lg:p-8 flex flex-col xl:flex-row xl:items-center gap-8 xl:gap-12'>
        <div className='flex items-center gap-3 shrink-0'>
          <FiStar className={`text-lg ${theme.accentText}`} />
          <h4 className='text-xs font-bold tracking-[0.2em] text-white uppercase'>Key Innovations</h4>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 xl:gap-8'>
          {innovations.map((innovation, idx) => (
            <p key={idx} className='text-xs text-[#8a8b92] leading-relaxed'>
              <span className={`font-bold mr-2 ${theme.accentText}`}>
                {String(idx + 1).padStart(2, '0')}
              </span>
              {innovation}
            </p>
          ))}
        </div>
      </div>
    </>
  )
}

export default TechDetails
