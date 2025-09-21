import React from 'react';
import { Link } from 'react-router-dom';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const CallToAction = () => {
  const benefits = [
    {
      icon: 'Zap',
      title: 'Konsultasi Gratis',
      description: 'Diskusi mendalam tentang kebutuhan digital Anda tanpa biaya'
    },
    {
      icon: 'Shield',
      title: 'Garansi Kualitas',
      description: 'Jaminan revisi hingga Anda 100% puas dengan hasilnya'
    },
    {
      icon: 'Clock',
      title: 'Delivery Tepat Waktu',
      description: 'Komitmen menyelesaikan proyek sesuai timeline yang disepakati'
    },
    {
      icon: 'HeadphonesIcon',
      title: 'Support 24/7',
      description: 'Dukungan teknis berkelanjutan setelah website diluncurkan'
    }
  ];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-background to-slate-900">
      <div className="max-w-6xl mx-auto">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <div className="relative">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-brand-purple/20 blur-3xl rounded-full"></div>
            
            <div className="relative bg-card/50 backdrop-blur-lg border border-border/50 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl md:text-5xl font-bold gradient-text mb-6">
                Siap Mengubah Bisnis Anda?
              </h2>
              
              <p className="text-lg md:text-xl text-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed">
                Jangan biarkan kompetitor Anda unggul dalam dunia digital. Mulai transformasi bisnis Anda hari ini 
                dengan solusi web yang terbukti meningkatkan revenue dan customer engagement.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
                <Link to="/contact-multi-channel-communication-hub">
                  <Button 
                    variant="default" 
                    size="lg"
                    className="gradient-button px-10 py-4 text-lg font-semibold shadow-2xl hover:shadow-accent/25"
                    iconName="Rocket"
                    iconPosition="left"
                  >
                    Mulai Proyek Sekarang
                  </Button>
                </Link>
                
                <Link to="/portfolio-interactive-project-universe">
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="border-accent/30 text-accent hover:bg-accent/10 px-10 py-4 text-lg font-semibold"
                    iconName="Eye"
                    iconPosition="left"
                  >
                    Lihat Portfolio
                  </Button>
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-sm text-text-secondary">
                <div className="flex items-center space-x-2">
                  <Icon name="CheckCircle" size={16} className="text-success" />
                  <span>Konsultasi 100% Gratis</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Shield" size={16} className="text-accent" />
                  <span>Garansi Kepuasan</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Icon name="Clock" size={16} className="text-brand-purple" />
                  <span>Response &lt; 24 Jam</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {benefits?.map((benefit, index) => (
            <div
              key={index}
              className="text-center group hover:-translate-y-2 transition-all duration-300"
            >
              <div className="bg-card/30 backdrop-blur-lg border border-border/50 rounded-2xl p-6 hover:bg-card/50 transition-all duration-300">
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br from-accent/20 to-brand-purple/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <Icon name={benefit?.icon} size={24} className="text-accent" />
                </div>
                
                <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                  {benefit?.title}
                </h3>
                
                <p className="text-sm text-text-secondary leading-relaxed">
                  {benefit?.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Urgency Section */}
        <div className="bg-gradient-to-r from-accent/10 to-brand-purple/10 border border-accent/20 rounded-2xl p-8 text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Icon name="Clock" size={20} className="text-warning animate-pulse" />
            <span className="text-warning font-semibold">Penawaran Terbatas</span>
          </div>
          
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Dapatkan Konsultasi Gratis + Audit Website
          </h3>
          
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            Untuk 10 klien pertama bulan ini, dapatkan bonus audit website senilai IDR 2.500.000 
            dan strategi digital marketing yang disesuaikan dengan bisnis Anda.
          </p>

          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">10</div>
              <div className="text-xs text-text-secondary">Slot Tersisa</div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">IDR 2.5M</div>
              <div className="text-xs text-text-secondary">Nilai Bonus</div>
            </div>
            <div className="w-px h-8 bg-border"></div>
            <div className="text-center">
              <div className="text-2xl font-bold gradient-text">100%</div>
              <div className="text-xs text-text-secondary">Gratis</div>
            </div>
          </div>

          <Link to="/contact-multi-channel-communication-hub">
            <Button 
              variant="default"
              size="lg"
              className="gradient-button px-8 py-3 font-semibold animate-pulse"
              iconName="Gift"
              iconPosition="left"
            >
              Klaim Bonus Sekarang
            </Button>
          </Link>
        </div>

        {/* Contact Info */}
        <div className="mt-16 text-center">
          <p className="text-text-secondary mb-4">
            Punya pertanyaan? Hubungi saya langsung
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-6">
            <a 
              href="mailto:Indrasaebudi@gmail.com" 
              className="flex items-center space-x-2 text-accent hover:text-accent/80 transition-colors duration-300"
            >
              <Icon name="Mail" size={16} />
              <span>Indrasaebudi@gmail.com</span>
            </a>
            
            <a 
              href="https://wa.me/6285786476296" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-success hover:text-success/80 transition-colors duration-300"
            >
              <Icon name="MessageCircle" size={16} />
              <span>+62 85786476296</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;