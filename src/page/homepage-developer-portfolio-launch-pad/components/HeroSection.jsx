import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const HeroSection = () => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isAvailable, setIsAvailable] = useState(true);

  const texts = [
    'Kode yang Mengkonversi',
    'Website yang Bekerja Keras',
    'Solusi Digital Terdepan',
    'Pengalaman User yang Luar Biasa'
  ];

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = texts?.[currentIndex];
      
      if (!isDeleting) {
        if (currentText?.length < current?.length) {
          setCurrentText(current?.substring(0, currentText?.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText?.length > 0) {
          setCurrentText(current?.substring(0, currentText?.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prevIndex) => (prevIndex + 1) % texts?.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, texts]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-slate-900 to-background">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Code Elements */}
        <div className="absolute top-20 left-10 opacity-20 code-animation">
          <div className="text-accent font-mono text-sm">
            {`const developer = {`}<br/>
            {`  passion: 'unlimited',`}<br/>
            {`  skills: ['React', 'Node.js'],`}<br/>
            {`  impact: 'transformative'`}<br/>
            {`};`}
          </div>
        </div>
        
        <div className="absolute top-40 right-20 opacity-15 code-animation animation-delay-400">
          <div className="text-brand-purple font-mono text-xs">
            {`function buildSuccess() {`}<br/>
            {`  return innovation +`}<br/>
            {`         dedication +`}<br/>
            {`         client_focus;`}<br/>
            {`}`}
          </div>
        </div>

        <div className="absolute bottom-32 left-20 opacity-10 code-animation animation-delay-600">
          <div className="text-accent font-mono text-sm">
            {`<Website>`}<br/>
            {`  <Performance>Optimal</Performance>`}<br/>
            {`  <Design>Modern</Design>`}<br/>
            {`  <Results>Guaranteed</Results>`}<br/>
            {`</Website>`}
          </div>
        </div>

        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-accent/20 to-brand-purple/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-brand-purple/15 to-accent/15 rounded-full blur-3xl animate-pulse animation-delay-400"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto">
        {/* Availability Indicator */}
        <div className="inline-flex items-center space-x-2 bg-card/80 backdrop-blur-lg border border-border/50 rounded-full px-4 py-2 mb-8">
          <div className={`w-2 h-2 rounded-full ${isAvailable ? 'bg-success animate-pulse' : 'bg-warning'}`}></div>
          <span className="text-sm text-text-secondary">
            {isAvailable ? 'Tersedia untuk Proyek Baru' : 'Sedang Penuh - Daftar Antrian'}
          </span>
        </div>

        {/* Main Heading with Typewriter Effect */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="gradient-text">{currentText}</span>
          <span className="animate-pulse text-accent">|</span>
          <br />
          <span className="text-foreground text-3xl md:text-4xl lg:text-5xl">
            untuk Bisnis Anda
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed">
          Saya adalah Digital Craftsman yang mengubah visi bisnis Anda menjadi pengalaman digital yang mengkonversi. 
          Dengan keahlian React dan teknologi modern, saya menciptakan website yang tidak hanya indah, 
          tetapi juga menghasilkan ROI yang terukur.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
          <Link to="/portfolio-interactive-project-universe">
            <Button 
              variant="default" 
              size="lg"
              className="gradient-button px-8 py-4 text-lg font-semibold"
              iconName="Eye"
              iconPosition="left"
            >
              Lihat Portfolio Saya
            </Button>
          </Link>
          
          <Link to="/contact-multi-channel-communication-hub">
            <Button 
              variant="outline" 
              size="lg"
              className="border-accent/30 text-accent hover:bg-accent/10 px-8 py-4 text-lg font-semibold"
              iconName="Calendar"
              iconPosition="left"
            >
              Konsultasi Gratis
            </Button>
          </Link>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">50+</div>
            <div className="text-sm text-text-secondary">Proyek Selesai</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">98%</div>
            <div className="text-sm text-text-secondary">Kepuasan Klien</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">3x</div>
            <div className="text-sm text-text-secondary">Rata-rata ROI</div>
          </div>
          <div className="text-center">
            <div className="text-2xl md:text-3xl font-bold gradient-text mb-1">24/7</div>
            <div className="text-sm text-text-secondary">Support</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDown" size={24} className="text-text-secondary" />
      </div>
    </section>
  );
};

export default HeroSection;