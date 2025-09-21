import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectModal = ({ project, isOpen, onClose, onRequestSimilar }) => {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setActiveTab('overview');
      setCurrentImageIndex(0);
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !project) return null;

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })?.format(amount);
  };

  const tabs = [
    { id: 'overview', label: 'Ringkasan', icon: 'Eye' },
    { id: 'process', label: 'Proses Development', icon: 'GitBranch' },
    { id: 'results', label: 'Hasil & Dampak', icon: 'TrendingUp' },
    { id: 'technical', label: 'Detail Teknis', icon: 'Code2' }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === project?.gallery?.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? project?.gallery?.length - 1 : prev - 1
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/95 backdrop-blur-lg"
        onClick={onClose}
      />
      {/* Modal Content */}
      <div className="relative w-full max-w-6xl max-h-[90vh] bg-card rounded-2xl border border-border/50 overflow-hidden card-shadow">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border/50">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-accent to-brand-purple rounded-lg flex items-center justify-center">
              <Icon name="Briefcase" size={24} color="white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">{project?.title}</h2>
              <p className="text-text-secondary">{project?.category} • {project?.year}</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-2">
            {project?.liveUrl && (
              <Button
                variant="outline"
                size="sm"
                onClick={() => window.open(project?.liveUrl, '_blank')}
                className="border-accent/30 text-accent hover:bg-accent/10"
              >
                <Icon name="ExternalLink" size={16} className="mr-2" />
                Live Demo
              </Button>
            )}
            <Button
              variant="ghost"
              size="sm"
              onClick={onClose}
              className="text-text-secondary hover:text-foreground"
            >
              <Icon name="X" size={20} />
            </Button>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-border/50 px-6">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex items-center space-x-2 px-4 py-3 border-b-2 smooth-transition ${
                activeTab === tab?.id
                  ? 'border-accent text-accent' :'border-transparent text-text-secondary hover:text-foreground'
              }`}
            >
              <Icon name={tab?.icon} size={16} />
              <span className="font-medium">{tab?.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-6 max-h-[60vh] overflow-y-auto">
          {activeTab === 'overview' && (
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Image Gallery */}
              <div className="space-y-4">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image 
                    src={project?.gallery?.[currentImageIndex]} 
                    alt={`${project?.title} screenshot ${currentImageIndex + 1}`}
                    className="w-full h-full object-cover"
                  />
                  
                  {project?.gallery?.length > 1 && (
                    <>
                      <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-background/80 rounded-full flex items-center justify-center hover:bg-background smooth-transition"
                      >
                        <Icon name="ChevronLeft" size={16} />
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 w-8 h-8 bg-background/80 rounded-full flex items-center justify-center hover:bg-background smooth-transition"
                      >
                        <Icon name="ChevronRight" size={16} />
                      </button>
                    </>
                  )}
                </div>
                
                {project?.gallery?.length > 1 && (
                  <div className="flex space-x-2 overflow-x-auto">
                    {project?.gallery?.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 smooth-transition ${
                          index === currentImageIndex 
                            ? 'border-accent' :'border-border/50 hover:border-accent/50'
                        }`}
                      >
                        <Image 
                          src={image} 
                          alt={`Thumbnail ${index + 1}`}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Project Info */}
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">Deskripsi Proyek</h3>
                  <p className="text-text-secondary leading-relaxed">{project?.fullDescription}</p>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-3">Teknologi yang Digunakan</h3>
                  <div className="flex flex-wrap gap-2">
                    {project?.technologies?.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-brand-purple/20 text-brand-purple text-sm rounded-full border border-brand-purple/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-success mb-1">
                      {formatCurrency(project?.metrics?.revenue)}
                    </div>
                    <div className="text-sm text-text-secondary">Peningkatan Revenue</div>
                  </div>
                  <div className="p-4 bg-muted/50 rounded-lg">
                    <div className="text-2xl font-bold text-accent mb-1">
                      {project?.metrics?.conversion}%
                    </div>
                    <div className="text-sm text-text-secondary">Peningkatan Konversi</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'process' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground">Proses Development</h3>
              <div className="space-y-4">
                {project?.developmentProcess?.map((phase, index) => (
                  <div key={index} className="flex space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-gradient-to-r from-accent to-brand-purple rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">{phase?.title}</h4>
                      <p className="text-text-secondary text-sm mb-2">{phase?.description}</p>
                      <div className="text-xs text-text-secondary">
                        Durasi: {phase?.duration}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'results' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground">Hasil & Dampak Bisnis</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="p-6 bg-success/10 border border-success/20 rounded-lg">
                  <div className="text-3xl font-bold text-success mb-2">
                    {formatCurrency(project?.metrics?.revenue)}
                  </div>
                  <div className="text-sm text-success/80">Peningkatan Revenue Tahunan</div>
                </div>
                <div className="p-6 bg-accent/10 border border-accent/20 rounded-lg">
                  <div className="text-3xl font-bold text-accent mb-2">
                    {project?.metrics?.conversion}%
                  </div>
                  <div className="text-sm text-accent/80">Peningkatan Konversi</div>
                </div>
                <div className="p-6 bg-brand-purple/10 border border-brand-purple/20 rounded-lg">
                  <div className="text-3xl font-bold text-brand-purple mb-2">
                    {project?.metrics?.performance}
                  </div>
                  <div className="text-sm text-brand-purple/80">Lighthouse Score</div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-3">Testimoni Klien</h4>
                <div className="p-4 bg-muted/50 rounded-lg border-l-4 border-accent">
                  <p className="text-text-secondary italic mb-2">"{project?.testimonial?.content}"</p>
                  <div className="text-sm text-foreground font-medium">
                    — {project?.testimonial?.author}, {project?.testimonial?.position}
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'technical' && (
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-foreground">Detail Teknis</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Performa Website</h4>
                  <div className="space-y-3">
                    {project?.technicalDetails?.performance?.map((metric, index) => (
                      <div key={index} className="flex justify-between items-center">
                        <span className="text-text-secondary">{metric?.name}</span>
                        <span className="font-semibold text-foreground">{metric?.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-foreground mb-3">Fitur Utama</h4>
                  <ul className="space-y-2">
                    {project?.technicalDetails?.features?.map((feature, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <Icon name="Check" size={16} className="text-success mt-0.5 flex-shrink-0" />
                        <span className="text-text-secondary text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-3">Tantangan & Solusi</h4>
                <div className="space-y-4">
                  {project?.technicalDetails?.challenges?.map((challenge, index) => (
                    <div key={index} className="p-4 bg-muted/50 rounded-lg">
                      <h5 className="font-medium text-foreground mb-2">{challenge?.problem}</h5>
                      <p className="text-text-secondary text-sm">{challenge?.solution}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between p-6 border-t border-border/50">
          <div className="flex items-center space-x-4 text-sm text-text-secondary">
            <div className="flex items-center space-x-1">
              <Icon name="Clock" size={14} />
              <span>Durasi: {project?.duration}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Icon name="Calendar" size={14} />
              <span>Selesai: {project?.completionDate}</span>
            </div>
          </div>
          
          <Button
            variant="default"
            onClick={() => onRequestSimilar(project)}
            className="gradient-button"
          >
            <Icon name="MessageCircle" size={16} className="mr-2" />
            Request Proyek Serupa
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;