import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceCard = ({ service, onSelectService }) => {
  const [isHovered, setIsHovered] = useState(false);

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })?.format(price);
  };

  return (
    <div 
      className={`relative bg-card rounded-xl border border-border/50 p-6 smooth-transition hover-lift ${
        isHovered ? 'border-accent/50 glow-effect' : ''
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Popular Badge */}
      {service?.isPopular && (
        <div className="absolute -top-3 left-6">
          <div className="bg-gradient-to-r from-accent to-brand-purple px-4 py-1 rounded-full text-xs font-semibold text-white">
            Paling Populer
          </div>
        </div>
      )}
      {/* Service Icon */}
      <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-accent/20 to-brand-purple/20 rounded-lg mb-6">
        <Icon name={service?.icon} size={32} className="text-accent" />
      </div>
      {/* Service Info */}
      <div className="mb-6">
        <h3 className="text-xl font-bold text-foreground mb-2">{service?.title}</h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-4">{service?.description}</p>
        
        {/* Price Range */}
        <div className="flex items-baseline space-x-2 mb-4">
          <span className="text-2xl font-bold gradient-text">
            {formatPrice(service?.priceRange?.min)}
          </span>
          <span className="text-text-secondary">-</span>
          <span className="text-xl font-semibold text-foreground">
            {formatPrice(service?.priceRange?.max)}
          </span>
        </div>

        {/* Timeline */}
        <div className="flex items-center space-x-2 text-sm text-text-secondary mb-6">
          <Icon name="Clock" size={16} />
          <span>{service?.timeline}</span>
        </div>
      </div>
      {/* Features Preview */}
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-foreground mb-3">Fitur Utama:</h4>
        <ul className="space-y-2">
          {service?.features?.slice(0, 4)?.map((feature, index) => (
            <li key={index} className="flex items-center space-x-2 text-sm text-text-secondary">
              <Icon name="Check" size={14} className="text-success flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
          {service?.features?.length > 4 && (
            <li className="text-xs text-accent font-medium">
              +{service?.features?.length - 4} fitur lainnya
            </li>
          )}
        </ul>
      </div>
      {/* CTA Button */}
      <Button 
        variant="outline" 
        fullWidth
        className="border-accent/30 text-accent hover:bg-accent/10"
        onClick={() => onSelectService(service)}
      >
        <Icon name="Calculator" size={16} className="mr-2" />
        Hitung Estimasi
      </Button>
      {/* Hover Effect Overlay */}
      <div className={`absolute inset-0 bg-gradient-to-br from-accent/5 to-brand-purple/5 rounded-xl pointer-events-none smooth-transition ${
        isHovered ? 'opacity-100' : 'opacity-0'
      }`} />
    </div>
  );
};

export default ServiceCard;