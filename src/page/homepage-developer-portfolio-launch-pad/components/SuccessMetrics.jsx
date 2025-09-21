import React, { useState, useEffect, useRef } from 'react';
import Icon from '../../../components/AppIcon';

const SuccessMetrics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState({
    projects: 0,
    satisfaction: 0,
    roi: 0,
    clients: 0
  });
  
  const sectionRef = useRef(null);

  const metrics = [
    {
      id: 'projects',
      label: 'Proyek Diselesaikan',
      value: 50,
      suffix: '+',
      icon: 'CheckCircle',
      color: 'text-success',
      description: 'Website dan aplikasi yang telah berhasil diluncurkan'
    },
    {
      id: 'satisfaction',
      label: 'Tingkat Kepuasan',
      value: 98,
      suffix: '%',
      icon: 'Heart',
      color: 'text-red-400',
      description: 'Klien yang puas dengan hasil kerja dan layanan'
    },
    {
      id: 'roi',
      label: 'Rata-rata ROI',
      value: 300,
      suffix: '%',
      icon: 'TrendingUp',
      color: 'text-accent',
      description: 'Peningkatan revenue klien setelah implementasi'
    },
    {
      id: 'clients',
      label: 'Klien Aktif',
      value: 25,
      suffix: '+',
      icon: 'Users',
      color: 'text-brand-purple',
      description: 'Bisnis yang terus mempercayai layanan maintenance'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef?.current) {
      observer?.observe(sectionRef?.current);
    }

    return () => observer?.disconnect();
  }, [isVisible]);

  const animateCounters = () => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      
      setAnimatedValues({
        projects: Math.floor(metrics?.[0]?.value * progress),
        satisfaction: Math.floor(metrics?.[1]?.value * progress),
        roi: Math.floor(metrics?.[2]?.value * progress),
        clients: Math.floor(metrics?.[3]?.value * progress)
      });

      if (currentStep >= steps) {
        clearInterval(timer);
        setAnimatedValues({
          projects: metrics?.[0]?.value,
          satisfaction: metrics?.[1]?.value,
          roi: metrics?.[2]?.value,
          clients: metrics?.[3]?.value
        });
      }
    }, stepDuration);
  };

  return (
    <section ref={sectionRef} className="py-20 px-6 bg-gradient-to-b from-background to-slate-900/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Hasil yang Terukur
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Angka-angka yang membuktikan komitmen saya dalam menghasilkan solusi digital yang berdampak nyata
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics?.map((metric, index) => (
            <div
              key={metric?.id}
              className={`text-center group transition-all duration-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Metric Card */}
              <div className="bg-card/50 backdrop-blur-lg border border-border/50 rounded-2xl p-8 hover:bg-card/70 hover:-translate-y-2 transition-all duration-300 group">
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-6 rounded-xl bg-gradient-to-br from-accent/20 to-brand-purple/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon 
                    name={metric?.icon} 
                    size={28} 
                    className={`${metric?.color} group-hover:scale-110 transition-transform duration-300`} 
                  />
                </div>

                {/* Value */}
                <div className="mb-4">
                  <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">
                    {animatedValues?.[metric?.id]}{metric?.suffix}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-accent transition-colors duration-300">
                    {metric?.label}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-sm text-text-secondary leading-relaxed">
                  {metric?.description}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/5 to-brand-purple/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Stats */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-accent mb-2">100%</div>
            <div className="text-sm text-text-secondary">On-Time Delivery</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-brand-purple mb-2">24/7</div>
            <div className="text-sm text-text-secondary">Technical Support</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-success mb-2">5★</div>
            <div className="text-sm text-text-secondary">Average Rating</div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-8 bg-card/30 backdrop-blur-lg border border-border/50 rounded-full px-8 py-4">
            <div className="flex items-center space-x-2">
              <Icon name="Shield" size={20} className="text-success" />
              <span className="text-sm text-text-secondary">SSL Secured</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Clock" size={20} className="text-accent" />
              <span className="text-sm text-text-secondary">Fast Delivery</span>
            </div>
            <div className="flex items-center space-x-2">
              <Icon name="Award" size={20} className="text-brand-purple" />
              <span className="text-sm text-text-secondary">Quality Assured</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessMetrics;