import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ProcessTimeline = () => {
  const [activeStep, setActiveStep] = useState(0);

  const processSteps = [
    {
      id: 1,
      title: "Konsultasi & Analisis",
      duration: "1-2 Hari",
      description: "Diskusi mendalam tentang kebutuhan bisnis, target audience, dan tujuan website Anda.",
      deliverables: ["Analisis kebutuhan bisnis", "Riset kompetitor", "Strategi digital", "Timeline project"],
      icon: "MessageSquare"
    },
    {
      id: 2,
      title: "Perencanaan & Desain",
      duration: "3-5 Hari",
      description: "Pembuatan wireframe, mockup, dan prototype interaktif berdasarkan hasil analisis.",
      deliverables: ["Wireframe lengkap", "Mockup design", "Prototype interaktif", "Style guide"],
      icon: "Palette"
    },
    {
      id: 3,
      title: "Development & Coding",
      duration: "7-14 Hari",
      description: "Pengembangan website dengan teknologi terkini, responsive design, dan optimasi performa.",
      deliverables: ["Frontend development", "Backend integration", "Database setup", "API development"],
      icon: "Code2"
    },
    {
      id: 4,
      title: "Testing & Quality Assurance",
      duration: "2-3 Hari",
      description: "Testing menyeluruh untuk memastikan website berfungsi sempurna di semua device dan browser.",
      deliverables: ["Cross-browser testing", "Mobile responsiveness", "Performance testing", "Security audit"],
      icon: "TestTube"
    },
    {
      id: 5,
      title: "Launch & Deployment",
      duration: "1 Hari",
      description: "Deploy website ke server production, setup domain, SSL, dan monitoring tools.",
      deliverables: ["Server deployment", "Domain setup", "SSL certificate", "Analytics setup"],
      icon: "Rocket"
    },
    {
      id: 6,
      title: "Training & Handover",
      duration: "1-2 Hari",
      description: "Pelatihan penggunaan CMS, dokumentasi lengkap, dan support awal setelah launch.",
      deliverables: ["CMS training", "Dokumentasi teknis", "User manual", "Support 30 hari"],
      icon: "GraduationCap"
    }
  ];

  return (
    <div className="bg-card rounded-xl border border-border/50 p-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-4">Proses Development Transparan</h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Setiap tahap development dilakukan dengan transparansi penuh. Anda akan mendapat update progress secara real-time dan terlibat dalam setiap keputusan penting.
        </p>
      </div>
      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-brand-purple hidden lg:block" />

        <div className="space-y-8">
          {processSteps?.map((step, index) => (
            <div 
              key={step?.id}
              className={`relative cursor-pointer smooth-transition ${
                activeStep === index ? 'scale-105' : 'hover:scale-102'
              }`}
              onClick={() => setActiveStep(index)}
            >
              {/* Timeline Dot */}
              <div className="absolute left-6 w-4 h-4 bg-gradient-to-br from-accent to-brand-purple rounded-full border-4 border-background hidden lg:block" />
              
              <div className={`lg:ml-20 bg-muted/30 rounded-lg p-6 border smooth-transition ${
                activeStep === index 
                  ? 'border-accent/50 glow-effect bg-accent/5' :'border-border/30 hover:border-border/50'
              }`}>
                <div className="flex items-start space-x-4">
                  {/* Step Icon */}
                  <div className={`flex items-center justify-center w-12 h-12 rounded-lg smooth-transition ${
                    activeStep === index 
                      ? 'bg-gradient-to-br from-accent to-brand-purple text-white' :'bg-surface text-text-secondary'
                  }`}>
                    <Icon name={step?.icon} size={20} />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-semibold text-foreground">{step?.title}</h3>
                      <div className="flex items-center space-x-2 text-sm text-accent">
                        <Icon name="Clock" size={14} />
                        <span>{step?.duration}</span>
                      </div>
                    </div>
                    
                    <p className="text-text-secondary mb-4">{step?.description}</p>

                    {/* Deliverables */}
                    {activeStep === index && (
                      <div className="mt-4 p-4 bg-background/50 rounded-lg border border-border/30">
                        <h4 className="text-sm font-semibold text-foreground mb-3">Deliverables:</h4>
                        <div className="grid sm:grid-cols-2 gap-2">
                          {step?.deliverables?.map((deliverable, idx) => (
                            <div key={idx} className="flex items-center space-x-2">
                              <Icon name="Check" size={14} className="text-success" />
                              <span className="text-sm text-text-secondary">{deliverable}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Progress Indicator */}
      <div className="mt-8 flex justify-center">
        <div className="flex space-x-2">
          {processSteps?.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveStep(index)}
              className={`w-3 h-3 rounded-full smooth-transition ${
                activeStep === index 
                  ? 'bg-gradient-to-r from-accent to-brand-purple' :'bg-border hover:bg-surface'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProcessTimeline;