import React from 'react'
import { motion as Motion } from 'framer-motion'

const MissionContext = ({ context, theme }) => {
  return (
    <div className='w-full border border-white/10 rounded-2xl bg-white/[0.02] p-8 lg:p-10 flex flex-col gap-6 relative overflow-hidden'>
      {/* Background glow for context */}
      <div 
        className='absolute top-0 left-0 w-full h-1 opacity-40' 
        style={{ backgroundColor: theme.primaryGlow }} 
      />
      <div 
        className='absolute -top-24 -left-24 w-64 h-64 blur-[80px] opacity-10 rounded-full' 
        style={{ backgroundColor: theme.primaryGlow }} 
      />

      <div className='relative z-10 flex items-center gap-3 mb-2'>
        <span className={`w-2 h-2 rounded-full ${theme.accentBg} animate-pulse`} />
        <h4 className='text-xs font-bold tracking-[0.2em] text-white uppercase'>Mission Context</h4>
      </div>

      <div className='relative z-10 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 lg:gap-16'>
        <div className='space-y-6'>
          <div>
            <p className='text-[10px] font-bold tracking-widest text-white/50 uppercase mb-2'>Event</p>
            <p className={`text-sm font-semibold ${theme.accentText}`}>{context.event}</p>
          </div>
          <div>
            <p className='text-[10px] font-bold tracking-widest text-white/50 uppercase mb-2'>Organization</p>
            <p className='text-sm text-white/90 leading-relaxed whitespace-pre-line'>{context.organization}</p>
          </div>
        </div>
        <div>
          <p className='text-[10px] font-bold tracking-widest text-white/50 uppercase mb-3'>Problem Statement</p>
          <p className='text-lg md:text-xl font-serif leading-relaxed text-white/90'>
            "{context.statement}"
          </p>
        </div>
      </div>
    </div>
  )
}

export default MissionContext
