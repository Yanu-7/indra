import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';
import Button from '../../../components/ui/Button';

const ProjectCard = ({ project, onViewDetails, onRequestSimilar }) => {
  const [isHovered, setIsHovered] = useState(false);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    })?.format(amount);
  };

  return (
    <div 
      className="group relative bg-card rounded-xl overflow-hidden border border-border/50 hover:border-accent/30 smooth-transition hover-lift card-shadow"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <Image 
          src={project?.image} 
          alt={project?.title}
          className="w-full h-full object-cover group-hover:scale-110 smooth-transition"
        />
        
        {/* Overlay on Hover */}
        <div className={`absolute inset-0 bg-gradient-to-t from-background/90 via-background/50 to-transparent transition-opacity duration-300 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex flex-wrap gap-2 mb-3">
              {project?.technologies?.slice(0, 4)?.map((tech, index) => (
                <span 
                  key={index}
                  className="px-2 py-1 bg-accent/20 text-accent text-xs rounded-full border border-accent/30"
                >
                  {tech}
                </span>
              ))}
              {project?.technologies?.length > 4 && (
                <span className="px-2 py-1 bg-muted text-text-secondary text-xs rounded-full">
                  +{project?.technologies?.length - 4}
                </span>
              )}
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm text-text-secondary">
                <div className="flex items-center space-x-1">
                  <Icon name="Clock" size={14} />
                  <span>{project?.duration}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Icon name="TrendingUp" size={14} />
                  <span>{project?.metrics?.conversion}%</span>
                </div>
              </div>
              
              <div className="flex space-x-2">
                {project?.liveUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={(e) => {
                      e?.stopPropagation();
                      window.open(project?.liveUrl, '_blank');
                    }}
                    className="border-accent/30 text-accent hover:bg-accent/10"
                  >
                    <Icon name="ExternalLink" size={14} />
                  </Button>
                )}
                {project?.githubUrl && (
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={(e) => {
                      e?.stopPropagation();
                      window.open(project?.githubUrl, '_blank');
                    }}
                    className="border-accent/30 text-accent hover:bg-accent/10"
                  >
                    <Icon name="Github" size={14} />
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 bg-brand-purple/20 text-brand-purple text-xs font-medium rounded-full border border-brand-purple/30">
            {project?.category}
          </span>
        </div>

        {/* Featured Badge */}
        {project?.featured && (
          <div className="absolute top-4 right-4">
            <div className="w-8 h-8 bg-gradient-to-r from-accent to-brand-purple rounded-full flex items-center justify-center">
              <Icon name="Star" size={16} color="white" />
            </div>
          </div>
        )}
      </div>
      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-bold text-foreground group-hover:text-accent smooth-transition">
            {project?.title}
          </h3>
          <div className="flex items-center space-x-1 text-sm text-text-secondary">
            <Icon name="Calendar" size={14} />
            <span>{project?.year}</span>
          </div>
        </div>

        <p className="text-text-secondary text-sm mb-4 line-clamp-2">
          {project?.description}
        </p>

        {/* Metrics */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="text-center p-3 bg-muted/50 rounded-lg">
            <div className="text-lg font-bold text-success">
              {formatCurrency(project?.metrics?.revenue)}
            </div>
            <div className="text-xs text-text-secondary">Peningkatan Revenue</div>
          </div>
          <div className="text-center p-3 bg-muted/50 rounded-lg">
            <div className="text-lg font-bold text-accent">
              {project?.metrics?.performance}
            </div>
            <div className="text-xs text-text-secondary">Lighthouse Score</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => onViewDetails(project)}
            className="flex-1 border-accent/30 text-accent hover:bg-accent/10"
          >
            <Icon name="Eye" size={16} className="mr-2" />
            Lihat Detail
          </Button>
          <Button
            variant="default"
            size="sm"
            onClick={() => onRequestSimilar(project)}
            className="flex-1 gradient-button"
          >
            <Icon name="MessageCircle" size={16} className="mr-2" />
            Request Serupa
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;