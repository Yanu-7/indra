import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const SkillsConstellation = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  const skills = [
    {
      id: 1,
      name: 'React.js',
      icon: 'Code2',
      proficiency: 95,
      projects: 35,
      description: 'Framework utama untuk membangun UI yang interaktif dan responsif',
      position: { top: '20%', left: '15%' }
    },
    {
      id: 2,
      name: 'Node.js',
      icon: 'Server',
      proficiency: 90,
      projects: 28,
      description: 'Backend development dengan performa tinggi dan skalabilitas',
      position: { top: '15%', left: '45%' }
    },
    {
      id: 3,
      name: 'TypeScript',
      icon: 'FileCode',
      proficiency: 88,
      projects: 25,
      description: 'Type-safe JavaScript untuk aplikasi enterprise yang robust',
      position: { top: '25%', left: '75%' }
    },
    {
      id: 4,
      name: 'Next.js',
      icon: 'Zap',
      proficiency: 92,
      projects: 22,
      description: 'Full-stack React framework untuk aplikasi production-ready',
      position: { top: '45%', left: '20%' }
    },
    {
      id: 5,
      name: 'Tailwind CSS',
      icon: 'Palette',
      proficiency: 94,
      projects: 40,
      description: 'Utility-first CSS framework untuk desain yang konsisten',
      position: { top: '50%', left: '50%' }
    },
    {
      id: 6,
      name: 'MongoDB',
      icon: 'Database',
      proficiency: 85,
      projects: 20,
      description: 'NoSQL database untuk aplikasi modern dan skalabel',
      position: { top: '40%', left: '80%' }
    },
    {
      id: 7,
      name: 'AWS',
      icon: 'Cloud',
      proficiency: 82,
      projects: 18,
      description: 'Cloud infrastructure dan deployment yang reliable',
      position: { top: '70%', left: '25%' }
    },
    {
      id: 8,
      name: 'GraphQL',
      icon: 'GitBranch',
      proficiency: 87,
      projects: 15,
      description: 'API query language untuk data fetching yang efisien',
      position: { top: '75%', left: '60%' }
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-slate-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Konstelasi Keahlian
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Teknologi modern yang saya kuasai untuk membangun solusi digital yang powerful dan scalable
          </p>
        </div>

        <div className="relative h-96 md:h-[500px] bg-card/30 backdrop-blur-lg rounded-2xl border border-border/50 overflow-hidden">
          {/* Constellation Background */}
          <div className="absolute inset-0">
            {/* Connection Lines */}
            <svg className="absolute inset-0 w-full h-full opacity-20">
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="var(--color-accent)" />
                  <stop offset="100%" stopColor="var(--color-brand-purple)" />
                </linearGradient>
              </defs>
              {skills?.map((skill, index) => {
                const nextSkill = skills?.[(index + 1) % skills?.length];
                return (
                  <line
                    key={`line-${skill?.id}`}
                    x1={skill?.position?.left}
                    y1={skill?.position?.top}
                    x2={nextSkill?.position?.left}
                    y2={nextSkill?.position?.top}
                    stroke="url(#lineGradient)"
                    strokeWidth="1"
                    className="animate-pulse"
                  />
                );
              })}
            </svg>
          </div>

          {/* Skill Nodes */}
          {skills?.map((skill) => (
            <div
              key={skill?.id}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              style={{ top: skill?.position?.top, left: skill?.position?.left }}
              onMouseEnter={() => setHoveredSkill(skill)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              {/* Skill Node */}
              <div className={`relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br from-accent to-brand-purple flex items-center justify-center transition-all duration-300 ${
                hoveredSkill?.id === skill?.id ? 'scale-125 shadow-2xl' : 'hover:scale-110'
              }`}>
                <Icon 
                  name={skill?.icon} 
                  size={24} 
                  className="text-white" 
                />
                
                {/* Pulse Ring */}
                <div className="absolute inset-0 rounded-full border-2 border-accent/50 animate-ping"></div>
              </div>

              {/* Skill Label */}
              <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 text-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="bg-card/90 backdrop-blur-lg border border-border/50 rounded-lg px-3 py-1 whitespace-nowrap">
                  <div className="text-sm font-semibold text-foreground">{skill?.name}</div>
                </div>
              </div>
            </div>
          ))}

          {/* Skill Detail Panel */}
          {hoveredSkill && (
            <div className="absolute bottom-6 left-6 right-6 bg-card/95 backdrop-blur-lg border border-border/50 rounded-xl p-6 transition-all duration-300">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-accent to-brand-purple flex items-center justify-center flex-shrink-0">
                  <Icon name={hoveredSkill?.icon} size={20} className="text-white" />
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-bold text-foreground">{hoveredSkill?.name}</h3>
                    <div className="text-sm text-text-secondary">
                      {hoveredSkill?.projects} proyek
                    </div>
                  </div>
                  
                  <p className="text-sm text-text-secondary mb-3">
                    {hoveredSkill?.description}
                  </p>
                  
                  {/* Proficiency Bar */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-xs">
                      <span className="text-text-secondary">Tingkat Keahlian</span>
                      <span className="text-accent font-semibold">{hoveredSkill?.proficiency}%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="h-2 bg-gradient-to-r from-accent to-brand-purple rounded-full transition-all duration-500"
                        style={{ width: `${hoveredSkill?.proficiency}%` }}
                      ></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Mobile Skills Grid */}
        <div className="md:hidden mt-12 grid grid-cols-2 gap-4">
          {skills?.map((skill) => (
            <div key={skill?.id} className="bg-card/50 backdrop-blur-lg border border-border/50 rounded-xl p-4 text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br from-accent to-brand-purple flex items-center justify-center">
                <Icon name={skill?.icon} size={20} className="text-white" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">{skill?.name}</h3>
              <div className="text-xs text-text-secondary">{skill?.proficiency}% • {skill?.projects} proyek</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsConstellation;