import React from 'react'

const ProjectNavigator = ({ projects, activeProjectId, setActiveProjectId }) => {
  return (
    <div className="flex items-center gap-6 mb-8 border-b border-white/[0.06] pb-4">
      {projects.map((project) => {
        const isActive = activeProjectId === project.id
        return (
          <button
            key={project.id}
            onClick={() => setActiveProjectId(project.id)}
            className={`group relative flex items-center gap-3 transition-colors duration-300 ${
              isActive ? 'text-white' : 'text-white/40 hover:text-white/80'
            }`}
          >
            <span className={`text-[10px] font-bold tracking-widest ${isActive ? project.theme.accentText : ''}`}>
              {project.number}
            </span>
            <span className="text-xs tracking-[0.15em] uppercase font-semibold">
              {project.title}
            </span>
            {isActive && (
              <span 
                className={`absolute -bottom-[17px] left-0 w-full h-[1px] ${project.theme.accentBg}`} 
              />
            )}
          </button>
        )
      })}
    </div>
  )
}

export default ProjectNavigator
