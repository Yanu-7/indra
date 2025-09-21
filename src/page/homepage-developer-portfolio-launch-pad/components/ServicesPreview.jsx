import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ServicesPreview = () => {
  const services = [
    {
      id: 1,
      title: 'Website Development',
      description: 'Website custom yang responsif dan SEO-friendly dengan teknologi modern',
      icon: 'Globe',
      startingPrice: 'Mulai dari IDR 15.000.000',
      features: ['Responsive Design', 'SEO Optimized', 'Fast Loading', 'Admin Panel'],
      gradient: 'from-accent to-cyan-400',
      popular: false
    },
    {
      id: 2,
      title: 'E-Commerce Solutions',
      description: 'Platform e-commerce lengkap dengan sistem pembayaran dan inventory management',
      icon: 'ShoppingCart',
      startingPrice: 'Mulai dari IDR 25.000.000',
      features: ['Payment Gateway', 'Inventory System', 'Order Management', 'Analytics Dashboard'],
      gradient: 'from-brand-purple to-violet-400',
      popular: true
    },
    {
      id: 3,
      title: 'Web Application',
      description: 'Aplikasi web kompleks dengan fitur advanced dan integrasi sistem',
      icon: 'Code2',
      startingPrice: 'Mulai dari IDR 35.000.000',
      features: ['Custom Features', 'API Integration', 'Database Design', 'Cloud Deployment'],
      gradient: 'from-emerald-400 to-teal-400',
      popular: false
    },
    {
      id: 4,
      title: 'Maintenance & Support',
      description: 'Layanan maintenance berkelanjutan dan technical support 24/7',
      icon: 'Settings',
      startingPrice: 'Mulai dari IDR 2.500.000/bulan',
      features: ['24/7 Monitoring', 'Regular Updates', 'Bug Fixes', 'Performance Optimization'],
      gradient: 'from-orange-400 to-red-400',
      popular: false
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-slate-900/50 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Layanan Digital Solutions
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Paket layanan komprehensif yang dirancang untuk mengakselerasi transformasi digital bisnis Anda
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services?.map((service) => (
            <div
              key={service?.id}
              className={`relative group bg-card/50 backdrop-blur-lg border border-border/50 rounded-2xl p-6 hover:bg-card/70 transition-all duration-300 hover:-translate-y-2 ${
                service?.popular ? 'ring-2 ring-accent/50 shadow-2xl' : ''
              }`}
            >
              {/* Popular Badge */}
              {service?.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-accent to-brand-purple text-white text-xs font-bold px-3 py-1 rounded-full">
                    PALING POPULER
                  </div>
                </div>
              )}

              {/* Service Icon */}
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service?.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <Icon name={service?.icon} size={24} className="text-white" />
              </div>

              {/* Service Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors duration-300">
                  {service?.title}
                </h3>
                
                <p className="text-sm text-text-secondary leading-relaxed">
                  {service?.description}
                </p>

                {/* Features List */}
                <ul className="space-y-2">
                  {service?.features?.map((feature, index) => (
                    <li key={index} className="flex items-center text-xs text-text-secondary">
                      <Icon name="Check" size={14} className="text-success mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Pricing */}
                <div className="pt-4 border-t border-border/30">
                  <div className="text-sm font-bold gradient-text mb-3">
                    {service?.startingPrice}
                  </div>
                  
                  <Button
                    variant="outline"
                    size="sm"
                    fullWidth
                    className="border-accent/30 text-accent hover:bg-accent/10 group-hover:border-accent group-hover:shadow-lg"
                    iconName="ArrowRight"
                    iconPosition="right"
                  >
                    Pelajari Lebih Lanjut
                  </Button>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-brand-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center bg-card/30 backdrop-blur-lg border border-border/50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Butuh Solusi Custom?
          </h3>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            Setiap bisnis memiliki kebutuhan unik. Mari diskusikan bagaimana saya dapat membantu 
            menciptakan solusi digital yang tepat untuk tantangan spesifik Anda.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link to="/services-comprehensive-digital-solutions-hub">
              <Button 
                variant="default"
                size="lg"
                className="gradient-button px-8"
                iconName="Package"
                iconPosition="left"
              >
                Lihat Semua Layanan
              </Button>
            </Link>
            
            <Link to="/contact-multi-channel-communication-hub">
              <Button 
                variant="outline"
                size="lg"
                className="border-accent/30 text-accent hover:bg-accent/10 px-8"
                iconName="MessageCircle"
                iconPosition="left"
              >
                Konsultasi Gratis
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;