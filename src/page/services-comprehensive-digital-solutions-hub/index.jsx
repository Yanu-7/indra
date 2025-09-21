import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import ServiceCard from './components/ServiceCard';
import PricingCalculator from './components/PricingCalculator';
import ProcessTimeline from './components/ProcessTimeline';
import ServiceComparison from './components/ServiceComparison';
import TestimonialSection from './components/TestimonialSection';
import ConsultationBooking from './components/ConsultationBooking';

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [showCalculator, setShowCalculator] = useState(false);

  const services = [
    {
      id: 'website-bisnis',
      title: 'Website Bisnis Premium',
      description: 'Website profesional untuk membangun kredibilitas dan meningkatkan penjualan bisnis Anda dengan desain modern dan fitur lengkap.',
      icon: 'Globe',
      priceRange: { min: 15000000, max: 50000000 },
      timeline: '10-14 hari kerja',
      isPopular: false,
      features: [
        'Responsive Design (Mobile, Tablet, Desktop)',
        'Custom UI/UX Design',
        '5-10 Halaman Utama',
        'Contact Form & Google Maps Integration',
        'SEO Basic Setup',
        'Google Analytics Integration',
        'Social Media Integration',
        'SSL Certificate',
        '30 Hari Support Gratis',
        'Training Penggunaan CMS'
      ]
    },
    {
      id: 'toko-online',
      title: 'Toko Online Profesional',
      description: 'E-commerce platform lengkap dengan sistem pembayaran, inventory management, dan fitur marketing untuk mengembangkan bisnis online.',
      icon: 'ShoppingCart',
      priceRange: { min: 25000000, max: 75000000 },
      timeline: '14-21 hari kerja',
      isPopular: true,
      features: [
        'E-commerce Platform (WooCommerce/Custom)',
        'Payment Gateway Integration',
        'Inventory Management System',
        'Order Management Dashboard',
        'Customer Account System',
        'Product Catalog & Search',
        'Shopping Cart & Checkout',
        'Email Marketing Integration',
        'SEO E-commerce Optimization',
        '60 Hari Support & Training'
      ]
    },
    {
      id: 'aplikasi-web',
      title: 'Aplikasi Web Kustom',
      description: 'Solusi aplikasi web yang disesuaikan dengan kebutuhan spesifik bisnis Anda, dari sistem manajemen hingga platform digital kompleks.',
      icon: 'Code2',
      priceRange: { min: 50000000, max: 200000000 },
      timeline: '21-45 hari kerja',
      isPopular: false,
      features: [
        'Custom Web Application Development',
        'Database Design & Architecture',
        'User Management System',
        'Admin Dashboard',
        'API Development & Integration',
        'Real-time Features',
        'Advanced Security Implementation',
        'Performance Optimization',
        'Scalable Architecture',
        '90 Hari Support & Maintenance'
      ]
    }
  ];

  const handleSelectService = (service) => {
    setSelectedService(service);
    setShowCalculator(true);
  };

  const closeCalculator = () => {
    setShowCalculator(false);
    setSelectedService(null);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Layanan Digital Solutions - Developer Web</title>
        <meta name="description" content="Solusi digital lengkap untuk bisnis Indonesia. Website bisnis premium, toko online profesional, dan aplikasi web kustom dengan harga transparan." />
        <meta name="keywords" content="jasa website, toko online, aplikasi web, digital solutions, web development Indonesia" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Icon name="Sparkles" size={16} />
                <span>Solusi Digital Terpercaya</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
                Layanan Digital Solutions
                <span className="block gradient-text">untuk Bisnis Indonesia</span>
              </h1>
              
              <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
                Transformasi digital yang mengubah cara bisnis Anda beroperasi. Dari website profesional hingga aplikasi web kompleks, 
                kami memberikan solusi yang tepat dengan harga transparan dan kualitas terjamin.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button size="lg" className="gradient-button">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Konsultasi Gratis
                </Button>
                <Button variant="outline" size="lg" className="border-accent/30 text-accent">
                  <Icon name="Play" size={20} className="mr-2" />
                  Lihat Portfolio
                </Button>
              </div>
            </div>

            {/* Service Cards */}
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {services?.map((service) => (
                <ServiceCard
                  key={service?.id}
                  service={service}
                  onSelectService={handleSelectService}
                />
              ))}
            </div>

            {/* Stats Section */}
            <div className="bg-card rounded-xl border border-border/50 p-8 mb-16">
              <div className="grid md:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold gradient-text mb-2">150+</div>
                  <div className="text-text-secondary">Project Selesai</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text mb-2">98%</div>
                  <div className="text-text-secondary">Kepuasan Klien</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text mb-2">24/7</div>
                  <div className="text-text-secondary">Support Available</div>
                </div>
                <div>
                  <div className="text-3xl font-bold gradient-text mb-2">5+</div>
                  <div className="text-text-secondary">Tahun Pengalaman</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Comparison */}
        <section className="py-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <ServiceComparison />
          </div>
        </section>

        {/* Process Timeline */}
        <section className="py-16 px-6 lg:px-8 bg-muted/20">
          <div className="max-w-7xl mx-auto">
            <ProcessTimeline />
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <TestimonialSection />
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-6 lg:px-8 bg-muted/20">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Mengapa Memilih Kami?</h2>
              <p className="text-text-secondary max-w-2xl mx-auto">
                Kombinasi sempurna antara keahlian teknis, kreativitas design, dan pemahaman mendalam tentang bisnis Indonesia.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: 'Shield',
                  title: 'Kualitas Terjamin',
                  description: 'Setiap project melalui quality assurance ketat dengan testing menyeluruh sebelum launch.'
                },
                {
                  icon: 'Clock',
                  title: 'Tepat Waktu',
                  description: 'Komitmen timeline yang jelas dengan milestone tracking dan update progress real-time.'
                },
                {
                  icon: 'DollarSign',
                  title: 'Harga Transparan',
                  description: 'Tidak ada biaya tersembunyi. Semua cost dijelaskan detail di awal project.'
                },
                {
                  icon: 'Headphones',
                  title: 'Support 24/7',
                  description: 'Tim support yang responsif siap membantu kapan saja Anda membutuhkan.'
                },
                {
                  icon: 'Zap',
                  title: 'Teknologi Terkini',
                  description: 'Menggunakan teknologi dan framework terbaru untuk performa optimal.'
                },
                {
                  icon: 'Users',
                  title: 'Tim Berpengalaman',
                  description: 'Developer senior dengan pengalaman 5+ tahun di berbagai industri.'
                }
              ]?.map((feature, index) => (
                <div key={index} className="bg-card rounded-lg p-6 border border-border/50 hover-lift">
                  <div className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-accent/20 to-brand-purple/20 rounded-lg mb-4">
                    <Icon name={feature?.icon} size={24} className="text-accent" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{feature?.title}</h3>
                  <p className="text-text-secondary text-sm">{feature?.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Consultation Booking */}
        <section className="py-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <ConsultationBooking />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-6 lg:px-8 bg-muted/20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Frequently Asked Questions</h2>
              <p className="text-text-secondary">Jawaban untuk pertanyaan yang sering diajukan klien</p>
            </div>

            <div className="space-y-4">
              {[
                {
                  question: 'Berapa lama waktu pengerjaan website?',
                  answer: 'Waktu pengerjaan bervariasi tergantung kompleksitas: Website bisnis 10-14 hari, Toko online 14-21 hari, Aplikasi web kustom 21-45 hari kerja.'
                },
                {
                  question: 'Apakah ada garansi setelah website selesai?',
                  answer: 'Ya, kami memberikan garansi bug-free selama 30-90 hari tergantung paket. Plus support teknis gratis sesuai durasi yang dipilih.'
                },
                {
                  question: 'Bagaimana sistem pembayaran?',
                  answer: 'Pembayaran dapat dicicil: 50% di awal, 30% saat development, 20% saat selesai. Kami terima transfer bank, e-wallet, dan kartu kredit.'
                },
                {
                  question: 'Apakah website bisa diupdate sendiri?',
                  answer: 'Tentu! Kami menggunakan CMS yang user-friendly dan memberikan training lengkap cara mengelola konten website Anda.'
                },
                {
                  question: 'Bagaimana dengan SEO dan digital marketing?',
                  answer: 'Semua website sudah include SEO basic setup. Untuk digital marketing lanjutan, kami punya layanan terpisah dengan paket khusus.'
                }
              ]?.map((faq, index) => (
                <div key={index} className="bg-card rounded-lg border border-border/50">
                  <details className="group">
                    <summary className="flex items-center justify-between p-6 cursor-pointer">
                      <h3 className="text-lg font-medium text-foreground">{faq?.question}</h3>
                      <Icon name="ChevronDown" size={20} className="text-text-secondary group-open:rotate-180 smooth-transition" />
                    </summary>
                    <div className="px-6 pb-6">
                      <p className="text-text-secondary">{faq?.answer}</p>
                    </div>
                  </details>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-accent/10 to-brand-purple/10 rounded-xl p-8 border border-accent/20">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Siap Transformasi Digital?
              </h2>
              <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
                Jangan biarkan kompetitor unggul lebih dulu. Mulai transformasi digital bisnis Anda hari ini dengan konsultasi gratis bersama expert kami.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
                <Button size="lg" className="gradient-button">
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Mulai Konsultasi Gratis
                </Button>
                <Button variant="outline" size="lg" className="border-accent/30 text-accent">
                  <Icon name="Download" size={20} className="mr-2" />
                  Download Company Profile
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-card border-t border-border/50 py-12 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-accent to-brand-purple rounded-lg flex items-center justify-center">
                    <Icon name="Code2" size={20} color="white" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold gradient-text">Indra Saebudi</h3>
                    <p className="text-xs text-text-secondary"><span>Developer Web</span></p>
                  </div>
                </div>
                <p className="text-text-secondary text-sm mb-4">
                  Transformasi digital yang mengubah cara bisnis beroperasi dengan solusi teknologi terdepan.
                </p>
                <div className="flex space-x-3">
                  {['Github', 'Linkedin', 'Twitter', 'Instagram']?.map((social) => (
                    <a key={social} href="#" className="w-8 h-8 bg-muted rounded-lg flex items-center justify-center hover:bg-accent hover:text-white smooth-transition">
                      <Icon name={social} size={16} />
                    </a>
                  ))}
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-4">Layanan</h4>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li><a href="#" className="hover:text-accent smooth-transition">Website Bisnis</a></li>
                  <li><a href="#" className="hover:text-accent smooth-transition">Toko Online</a></li>
                  <li><a href="#" className="hover:text-accent smooth-transition">Aplikasi Web</a></li>
                  <li><a href="#" className="hover:text-accent smooth-transition">Digital Marketing</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-4">Perusahaan</h4>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li><a href="#" className="hover:text-accent smooth-transition">Tentang Kami</a></li>
                  <li><a href="#" className="hover:text-accent smooth-transition">Portfolio</a></li>
                  <li><a href="#" className="hover:text-accent smooth-transition">Tim</a></li>
                  <li><a href="#" className="hover:text-accent smooth-transition">Karir</a></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-foreground mb-4">Kontak</h4>
                <ul className="space-y-2 text-sm text-text-secondary">
                  <li className="flex items-center space-x-2">
                    <Icon name="Mail" size={14} />
                    <span>hello@devportfolio.pro</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="Phone" size={14} />
                    <span>+62 857-8647-6296</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Icon name="MapPin" size={14} />
                    <span>Jakarta, Indonesia</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row items-center justify-between">
              <p className="text-text-secondary text-sm">
                © {new Date()?.getFullYear()} Indra Saebudi. All rights reserved.
              </p>
              <div className="flex space-x-6 mt-4 md:mt-0">
                <a href="#" className="text-text-secondary hover:text-accent text-sm smooth-transition">Privacy Policy</a>
                <a href="#" className="text-text-secondary hover:text-accent text-sm smooth-transition">Terms of Service</a>
                <a href="#" className="text-text-secondary hover:text-accent text-sm smooth-transition">Cookie Policy</a>
              </div>
            </div>
          </div>
        </footer>

        {/* Pricing Calculator Modal */}
        {showCalculator && selectedService && (
          <PricingCalculator
            service={selectedService}
            onClose={closeCalculator}
          />
        )}
      </div>
    </>
  );
};

export default ServicesPage;