import React from 'react'
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { experiences } from '../constants'
import { SectionWrapper } from '../hoc'
import { textVariant } from '../utils/motion'

const ExperienceCard = ({ experience, index }) => {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`relative flex justify-between items-center w-full mb-12 sm:mb-20 ${
        isLeft ? 'md:flex-row-reverse' : 'md:flex-row'
      } flex-col max-md:items-start`}
    >
      {/* Spacer for desktop layout */}
      <div className='hidden md:block w-[45%]' />
      
      {/* Center Icon */}
      <div className='absolute left-8 md:left-1/2 transform -translate-x-1/2 flex justify-center items-center w-12 h-12 sm:w-14 sm:h-14 rounded-full border-4 border-[#050816] bg-[#1d1836] z-10 shadow-[0_0_15px_rgba(145,94,255,0.3)]' style={{ background: experience.iconBg }}>
        <img 
          src={experience.icon} 
          alt={experience.company_name} 
          className='w-[60%] h-[60%] object-contain'
        />
      </div>

      {/* Content Card */}
      <div className={`w-full md:w-[45%] pl-24 pr-4 md:px-0 flex flex-col`}>
        <div className='bg-[#1d1836] p-6 sm:p-8 rounded-2xl border border-white/5 w-full shadow-2xl relative overflow-hidden group hover:border-white/10 transition-colors duration-500 text-left'>
          {/* Subtle glow effect */}
          <div className='absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent pointer-events-none' />
          
          {/* Desktop Arrow - pointing to the center line */}
          <div className={`hidden md:block absolute top-7 w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent ${isLeft ? 'right-[-14px] border-l-[14px] border-l-[#1d1836]' : 'left-[-14px] border-r-[14px] border-r-[#1d1836]'}`} />
          
          <div className={`flex flex-col relative z-10`}>
            <p className='text-[#aaa6c3] text-[14px] font-semibold tracking-wider mb-2'>{experience.date}</p>
            <h3 className='text-white text-[22px] sm:text-[24px] font-bold leading-tight'>{experience.title}</h3>
            <p className='text-secondary text-[16px] font-medium mt-1'>{experience.company_name}</p>
          </div>

          <ul className='mt-6 list-none space-y-3 relative z-10'>
            {experience.points.map((point, i) => (
              <li key={`experience-point-${i}`} className={`text-white-100 text-[13px] sm:text-[14px] leading-relaxed flex gap-3 flex-row`}>
                <span className='text-[#915eff] mt-1.5 text-[10px]'>✦</span>
                <span className={`flex-1 text-left`}>{point}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  )
}

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      </motion.div>

      <div className='mt-20 flex flex-col relative w-full'>
        {/* The Vertical Line */}
        <div className='absolute left-8 md:left-1/2 transform -translate-x-1/2 h-full w-[2px] sm:w-[4px] bg-gradient-to-b from-[#915eff] via-[#915eff]/20 to-transparent rounded-full' />
        
        <div className='pt-10'>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} index={index} />
          ))}
        </div>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, "work")