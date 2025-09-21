import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServiceComparison = () => {
  const [activeTab, setActiveTab] = useState('features');

  const services = [
    {
      id: 'basic',
      name: 'Website Bisnis Premium',
      price: { min: 15000000, max: 50000000 },
      popular: false,
      features: {
        design: ['Responsive Design', 'Custom UI/UX', '5 Halaman Utama', 'Logo Integration'],
        development: ['HTML/CSS/JS', 'Contact Form', 'Google Maps', 'Social Media Links'],
        seo: ['Basic SEO Setup', 'Meta Tags', 'Sitemap', 'Google Analytics'],
        support: ['30 Hari Support', 'Email Support', 'Basic Training', 'Documentation']
      }
    },
    {
      id: 'ecommerce',
      name: 'Toko Online Profesional',
      price: { min: 25000000, max: 75000000 },
      popular: true,
      features: {
        design: ['Responsive Design', 'Custom UI/UX', '10+ Halaman', 'Brand Identity'],
        development: ['E-commerce Platform', 'Payment Gateway', 'Inventory System', 'Order Management'],
        seo: ['Advanced SEO', 'Product Schema', 'Performance Optimization', 'Analytics Dashboard'],
        support: ['60 Hari Support', 'Phone & Email', 'Advanced Training', 'Video Tutorials']
      }
    },
    {
      id: 'custom',
      name: 'Aplikasi Web Kustom',
      price: { min: 50000000, max: 200000000 },
      popular: false,
      features: {
        design: ['Custom Design System', 'Advanced UI/UX', 'Unlimited Page', 'Complete Branding'],
        development: ['Custom Development', 'Database Design', 'API Integration', 'Admin Dashboard'],
        seo: ['Enterprise SEO', 'Technical SEO Audit', 'Performance Monitoring', 'Advanced Analytics'],
        support: ['90 Hari Support', '24/7 Support', 'Dedicated Manager', 'Monthly Reviews']
      }
    }
  ];

  const tabs = [
    { id: 'features', name: 'Fitur', icon: 'List' },
    { id: 'timeline', name: 'Timeline', icon: 'Clock' },
    { id: 'support', name: 'Support', icon: 'Headphones' }
  ];

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })?.format(price);
  };

  const getTimelineData = (serviceId) => {
    const timelines = {
      basic: { planning: '2-3 hari', development: '7-10 hari', testing: '2 hari', launch: '1 hari' },
      ecommerce: { planning: '3-5 hari', development: '14-21 hari', testing: '3-4 hari', launch: '1-2 hari' },
      custom: { planning: '5-7 hari', development: '21-45 hari', testing: '5-7 hari', launch: '2-3 hari' }
    };
    return timelines?.[serviceId];
  };

  const getSupportData = (serviceId) => {
    const support = {
      basic: { duration: '30 hari', channels: ['Email'], response: '24 jam', training: '2 jam' },
      ecommerce: { duration: '60 hari', channels: ['Email', 'Phone'], response: '12 jam', training: '4 jam' },
      custom: { duration: '90 hari', channels: ['Email', 'Phone', 'WhatsApp'], response: '6 jam', training: '8 jam' }
    };
    return support?.[serviceId];
  };

  return (
    <div className="bg-card rounded-xl border border-border/50 p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-4">Perbandingan Layanan</h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Pilih paket yang sesuai dengan kebutuhan bisnis Anda. Setiap paket dirancang untuk memberikan nilai maksimal.
        </p>
      </div>
      {/* Tab Navigation */}
      <div className="flex justify-center mb-8">
        <div className="flex bg-muted/30 rounded-lg p-1">
          {tabs?.map((tab) => (
            <button
              key={tab?.id}
              onClick={() => setActiveTab(tab?.id)}
              className={`flex items-center space-x-2 px-4 py-2 rounded-md smooth-transition ${
                activeTab === tab?.id
                  ? 'bg-accent text-white' :'text-text-secondary hover:text-foreground'
              }`}
            >
              <Icon name={tab?.icon} size={16} />
              <span className="text-sm font-medium">{tab?.name}</span>
            </button>
          ))}
        </div>
      </div>
      {/* Comparison Table */}
      <div className="overflow-x-auto">
        <div className="min-w-full">
          {/* Header */}
          <div className="grid grid-cols-4 gap-4 mb-6">
            <div></div>
            {services?.map((service) => (
              <div key={service?.id} className="text-center">
                <div className={`relative bg-muted/30 rounded-lg p-6 border ${
                  service?.popular ? 'border-accent/50 glow-effect' : 'border-border/30'
                }`}>
                  {service?.popular && (
                    <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      <div className="bg-gradient-to-r from-accent to-brand-purple px-3 py-1 rounded-full text-xs font-semibold text-white">
                        Terpopuler
                      </div>
                    </div>
                  )}
                  <h3 className="text-lg font-bold text-foreground mb-2">{service?.name}</h3>
                  <div className="text-center">
                    <div className="text-sm text-text-secondary mb-1">Mulai dari</div>
                    <div className="text-xl font-bold gradient-text">
                      {formatPrice(service?.price?.min)}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Content based on active tab */}
          {activeTab === 'features' && (
            <div className="space-y-6">
              {Object.entries(services?.[0]?.features)?.map(([category, _]) => (
                <div key={category}>
                  <h4 className="text-sm font-semibold text-foreground mb-3 capitalize">
                    {category === 'design' ? 'Design & UI/UX' : 
                     category === 'development' ? 'Development' :
                     category === 'seo' ? 'SEO & Analytics' : 'Support'}
                  </h4>
                  <div className="grid grid-cols-4 gap-4">
                    <div className="font-medium text-text-secondary text-sm">Fitur</div>
                    {services?.map((service) => (
                      <div key={service?.id} className="space-y-2">
                        {service?.features?.[category]?.map((feature, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <Icon name="Check" size={14} className="text-success" />
                            <span className="text-xs text-text-secondary">{feature}</span>
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'timeline' && (
            <div className="space-y-4">
              {['planning', 'development', 'testing', 'launch']?.map((phase) => (
                <div key={phase} className="grid grid-cols-4 gap-4 items-center py-3 border-b border-border/20">
                  <div className="font-medium text-text-secondary capitalize">
                    {phase === 'planning' ? 'Perencanaan' :
                     phase === 'development' ? 'Development' :
                     phase === 'testing' ? 'Testing' : 'Launch'}
                  </div>
                  {services?.map((service) => {
                    const timeline = getTimelineData(service?.id);
                    return (
                      <div key={service?.id} className="text-center">
                        <span className="text-sm font-medium text-foreground">
                          {timeline?.[phase]}
                        </span>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          )}

          {activeTab === 'support' && (
            <div className="space-y-4">
              {['duration', 'channels', 'response', 'training']?.map((aspect) => (
                <div key={aspect} className="grid grid-cols-4 gap-4 items-center py-3 border-b border-border/20">
                  <div className="font-medium text-text-secondary">
                    {aspect === 'duration' ? 'Durasi Support' :
                     aspect === 'channels' ? 'Channel Support' :
                     aspect === 'response' ? 'Response Time' : 'Training'}
                  </div>
                  {services?.map((service) => {
                    const support = getSupportData(service?.id);
                    return (
                      <div key={service?.id} className="text-center">
                        {aspect === 'channels' ? (
                          <div className="space-y-1">
                            {support?.[aspect]?.map((channel, idx) => (
                              <div key={idx} className="text-xs text-foreground bg-muted/30 rounded px-2 py-1">
                                {channel}
                              </div>
                            ))}
                          </div>
                        ) : (
                          <span className="text-sm font-medium text-foreground">
                            {support?.[aspect]}
                          </span>
                        )}
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          )}

          {/* CTA Row */}
          <div className="grid grid-cols-4 gap-4 mt-8">
            <div></div>
            {services?.map((service) => (
              <div key={service?.id} className="text-center">
                <Button 
                  variant={service?.popular ? "default" : "outline"}
                  fullWidth
                  className={service?.popular ? "gradient-button" : "border-accent/30 text-accent"}
                >
                  Pilih Paket
                </Button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceComparison;