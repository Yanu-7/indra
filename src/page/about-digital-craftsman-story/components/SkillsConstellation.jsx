import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const SkillsConstellation = () => {
  const [activeSkill, setActiveSkill] = useState(null);

  const skillCategories = [
    {
      id: 'frontend',
      title: 'Frontend Development',
      icon: 'Monitor',
      color: 'from-blue-500 to-cyan-400',
      position: { x: 20, y: 20 },
      skills: [
        {
          name: 'React.js',
          level: 95,
          experience: '4+ tahun',
          projects: 45,
          description: 'Library JavaScript untuk membangun user interface yang interaktif dan responsive',
          codeSnippet: `const App = () => {
  return <div>Hello World!</div>;
};`
        },
        {
          name: 'Next.js',
          level: 90,
          experience: '3+ tahun',
          projects: 30,
          description: 'Framework React untuk production dengan SSR, SSG, dan optimasi performa',
          codeSnippet: `export default function Page() {
  return <h1>Next.js App</h1>;
};`
        },
        {
          name: 'TypeScript',
          level: 85,
          experience: '3+ tahun',
          projects: 25,
          description: 'Superset JavaScript dengan static typing untuk kode yang lebih robust',
          codeSnippet: `interface User {
  name: string;
  age: number;
}`
        },
        {
          name: 'Tailwind CSS',
          level: 92,
          experience: '3+ tahun',
          projects: 40,
          description: 'Utility-first CSS framework untuk styling yang efisien dan konsisten',
          codeSnippet: `<div className="bg-blue-500 text-white p-4 rounded-lg">
  Styled with Tailwind
</div>`
        }
      ]
    },
    {
      id: 'backend',
      title: 'Backend Development',
      icon: 'Server',
      color: 'from-green-500 to-emerald-400',
      position: { x: 70, y: 15 },
      skills: [
        {
          name: 'Node.js',
          level: 88,
          experience: '4+ tahun',
          projects: 35,
          description: 'Runtime JavaScript untuk server-side development yang scalable',
          codeSnippet: `const express = require('express');
const app = express();
app.listen(3000);`
        },
        {
          name: 'Express.js',
          level: 90,
          experience: '4+ tahun',
          projects: 32,
          description: 'Web framework untuk Node.js yang minimal dan fleksibel',
          codeSnippet: `app.get('/api/users', (req, res) => {
  res.json({ users: [] });
});`
        },
        {
          name: 'PostgreSQL',
          level: 82,
          experience: '3+ tahun',
          projects: 20,
          description: 'Database relational yang powerful untuk aplikasi enterprise',
          codeSnippet: `SELECT * FROM users 
WHERE created_at > NOW() - INTERVAL '7 days';`
        },
        {
          name: 'MongoDB',
          level: 85,
          experience: '3+ tahun',
          projects: 28,
          description: 'NoSQL database yang fleksibel untuk aplikasi modern',
          codeSnippet: `db.users.find({
  status: "active",
  age: { $gte: 18 }
});`
        }
      ]
    },
    {
      id: 'cloud',
      title: 'Cloud & DevOps',
      icon: 'Cloud',
      color: 'from-purple-500 to-violet-400',
      position: { x: 15, y: 65 },
      skills: [
        {
          name: 'AWS',
          level: 78,
          experience: '2+ tahun',
          projects: 15,
          description: 'Amazon Web Services untuk cloud computing dan deployment',
          codeSnippet: `aws s3 cp ./build s3://my-bucket --recursive`
        },
        {
          name: 'Docker',
          level: 80,
          experience: '2+ tahun',
          projects: 18,
          description: 'Containerization platform untuk deployment yang konsisten',
          codeSnippet: `FROM node:16-alpine
WORKDIR /app
COPY . .
RUN npm install`
        },
        {
          name: 'Vercel',
          level: 92,
          experience: '3+ tahun',
          projects: 35,
          description: 'Platform deployment untuk frontend applications dengan edge functions',
          codeSnippet: `vercel --prod`
        },
        {
          name: 'GitHub Actions',
          level: 75,
          experience: '2+ tahun',
          projects: 12,
          description: 'CI/CD automation untuk testing dan deployment workflows',
          codeSnippet: `name: Deploy
on: [push]
jobs:
  deploy:
    runs-on: ubuntu-latest`
        }
      ]
    },
    {
      id: 'tools',
      title: 'Tools & Workflow',
      icon: 'Wrench',
      color: 'from-orange-500 to-red-400',
      position: { x: 75, y: 70 },
      skills: [
        {
          name: 'Git & GitHub',
          level: 95,
          experience: '5+ tahun',
          projects: 50,
          description: 'Version control system untuk kolaborasi dan manajemen kode',
          codeSnippet: `git add .
git commit -m "feat: add new feature"
git push origin main`
        },
        {
          name: 'VS Code',
          level: 98,
          experience: '5+ tahun',
          projects: 50,
          description: 'Code editor dengan extensions dan customization untuk produktivitas',
          codeSnippet: `// VS Code settings.json
{
  "editor.formatOnSave": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
}`
        },
        {
          name: 'Figma',
          level: 85,
          experience: '3+ tahun',
          projects: 30,
          description: 'Design tool untuk UI/UX design dan prototyping',
          codeSnippet: `// Design tokens from Figma
const colors = {
  primary: '#3B82F6',
  secondary: '#10B981'
};`
        },
        {
          name: 'Postman',
          level: 88,
          experience: '4+ tahun',
          projects: 40,
          description: 'API testing tool untuk development dan debugging',
          codeSnippet: `GET /api/users
Authorization: Bearer {{token}}
Content-Type: application/json`
        }
      ]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-primary to-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-brand-purple/5 rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Skills</span> Constellation
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Eksplorasi interaktif teknologi dan tools yang saya kuasai. Klik setiap kategori untuk melihat detail, 
            code snippets, dan pengalaman praktis.
          </p>
        </motion.div>

        {/* Interactive Constellation */}
        <div className="relative h-[600px] lg:h-[800px] mb-16">
          {/* Constellation Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-card/20 to-muted/20 rounded-3xl border border-border/30 backdrop-blur-sm"></div>

          {/* Skill Categories */}
          {skillCategories?.map((category, index) => (
            <motion.div
              key={category?.id}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="absolute cursor-pointer group"
              style={{
                left: `${category?.position?.x}%`,
                top: `${category?.position?.y}%`,
                transform: 'translate(-50%, -50%)'
              }}
              onClick={() => setActiveSkill(activeSkill === category?.id ? null : category?.id)}
            >
              {/* Category Node */}
              <div className={`w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-gradient-to-r ${category?.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-all duration-300 ${
                activeSkill === category?.id ? 'scale-125 shadow-2xl' : ''
              }`}>
                <Icon name={category?.icon} size={32} color="white" />
              </div>

              {/* Category Label */}
              <div className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                <span className="text-sm font-semibold text-foreground bg-card/80 px-3 py-1 rounded-full border border-border/50 backdrop-blur-sm">
                  {category?.title}
                </span>
              </div>

              {/* Connection Lines */}
              {activeSkill === category?.id && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="absolute inset-0"
                >
                  {/* Animated pulse rings */}
                  <div className="absolute inset-0 rounded-full border-2 border-accent/30 animate-ping"></div>
                  <div className="absolute inset-2 rounded-full border border-brand-purple/30 animate-ping animation-delay-200"></div>
                </motion.div>
              )}
            </motion.div>
          ))}

          {/* Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            <defs>
              <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgb(0, 212, 255)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="rgb(139, 92, 246)" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            {/* Draw connecting lines between categories */}
            <line x1="20%" y1="20%" x2="70%" y2="15%" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5" />
            <line x1="70%" y1="15%" x2="75%" y2="70%" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5" />
            <line x1="75%" y1="70%" x2="15%" y2="65%" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5" />
            <line x1="15%" y1="65%" x2="20%" y2="20%" stroke="url(#lineGradient)" strokeWidth="2" strokeDasharray="5,5" />
          </svg>
        </div>

        {/* Skill Details Panel */}
        {activeSkill && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
            className="bg-card/90 backdrop-blur-sm border border-border/50 rounded-2xl p-8 shadow-2xl"
          >
            {(() => {
              const category = skillCategories?.find(cat => cat?.id === activeSkill);
              return (
                <div>
                  <div className="flex items-center space-x-4 mb-8">
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${category?.color} flex items-center justify-center`}>
                      <Icon name={category?.icon} size={24} color="white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-foreground">{category?.title}</h3>
                      <p className="text-text-secondary">Klik skill untuk melihat detail dan code snippet</p>
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {category?.skills?.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: skillIndex * 0.1 }}
                        className="bg-muted/50 rounded-xl p-6 border border-border/30 hover:border-accent/30 transition-all duration-300 group cursor-pointer"
                      >
                        <div className="flex items-center justify-between mb-4">
                          <h4 className="font-semibold text-foreground">{skill?.name}</h4>
                          <span className="text-sm text-accent font-medium">{skill?.level}%</span>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full bg-background rounded-full h-2 mb-4">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill?.level}%` }}
                            transition={{ duration: 1, delay: skillIndex * 0.1 }}
                            className={`h-2 rounded-full bg-gradient-to-r ${category?.color}`}
                          ></motion.div>
                        </div>

                        <div className="space-y-2 text-sm">
                          <div className="flex justify-between">
                            <span className="text-text-secondary">Pengalaman:</span>
                            <span className="text-foreground font-medium">{skill?.experience}</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-text-secondary">Proyek:</span>
                            <span className="text-foreground font-medium">{skill?.projects}</span>
                          </div>
                        </div>

                        <p className="text-text-secondary text-sm mt-4 leading-relaxed">
                          {skill?.description}
                        </p>

                        {/* Code Snippet Preview */}
                        <div className="mt-4 bg-background rounded-lg p-3 border border-border/50 group-hover:border-accent/30 transition-all duration-300">
                          <code className="text-xs text-accent font-mono leading-relaxed">
                            {skill?.codeSnippet}
                          </code>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              );
            })()}
          </motion.div>
        )}

        {/* Learning Resources */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-accent/10 to-brand-purple/10 rounded-2xl p-8 border border-accent/20">
            <Icon name="BookOpen" size={48} className="text-accent mx-auto mb-4" />
            <h3 className="text-2xl font-bold gradient-text mb-4">Continuous Learning</h3>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto mb-6">
              Teknologi terus berkembang, dan saya berkomitmen untuk terus belajar dan mengikuti tren terbaru 
              dalam dunia development untuk memberikan solusi terbaik.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="px-4 py-2 bg-card text-foreground rounded-full border border-border/50 text-sm">
                📚 Membaca dokumentasi terbaru
              </span>
              <span className="px-4 py-2 bg-card text-foreground rounded-full border border-border/50 text-sm">
                🎯 Mengikuti course online
              </span>
              <span className="px-4 py-2 bg-card text-foreground rounded-full border border-border/50 text-sm">
                🚀 Eksperimen dengan teknologi baru
              </span>
              <span className="px-4 py-2 bg-card text-foreground rounded-full border border-border/50 text-sm">
                👥 Berpartisipasi dalam komunitas developer
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsConstellation;