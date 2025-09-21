import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import Icon from '../../components/AppIcon';
import ContactForm from './components/ContactForm';
import AvailabilityStatus from './components/AvailabilityStatus';
import ContactChannels from './components/ContactChannels';
import LocationInfo from './components/LocationInfo';
import ProjectWizard from './components/ProjectWizard';

const ContactMultiChannelCommunicationHub = () => {
  const [activeTab, setActiveTab] = useState('form');
  const [currentLanguage, setCurrentLanguage] = useState('id');

  useEffect(() => {
    // Check for saved language preference
    const savedLanguage = localStorage.getItem('language') || 'id';
    setCurrentLanguage(savedLanguage);
  }, []);

  const tabs = [
    {
      id: 'form',
      name: 'Formulir Kontak',
      icon: 'FileText',
      description: 'Kirim pesan detail tentang proyek Anda'
    },
    {
      id: 'wizard',
      name: 'Project Wizard',
      icon: 'Calculator',
      description: 'Dapatkan estimasi harga otomatis'
    },
    {
      id: 'channels',
      name: 'Saluran Komunikasi',
      icon: 'MessageSquare',
      description: 'Pilih cara komunikasi yang nyaman'
    },
    {
      id: 'location',
      name: 'Lokasi & Meeting',
      icon: 'MapPin',
      description: 'Jadwalkan meeting atau video call'
    }
  ];

  const quickStats = [
    {
      icon: 'Clock',
      value: '2-4 Jam',
      label: 'Waktu Respons',
      color: 'text-accent'
    },
    {
      icon: 'Users',
      value: '150+',
      label: 'Klien Puas',
      color: 'text-success'
    },
    {
      icon: 'Star',
      value: '4.9/5',
      label: 'Rating Klien',
      color: 'text-warning'
    },
    {
      icon: 'CheckCircle',
      value: '98%',
      label: 'Project Success',
      color: 'text-brand-purple'
    }
  ];

  const emergencyContact = {
    title: 'Proyek Urgent?',
    description: 'Untuk kebutuhan mendesak dengan deadline ketat',
    phone: '+62 85786476296',
    whatsapp: 'https://wa.me/6285786476296?text=URGENT:%20Saya%20butuh%20bantuan%20segera',
    features: [
      'Respons dalam 1-2 jam',
      'Prioritas tertinggi',
      'Timeline dipercepat',
      'Dedicated support'
    ]
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'form':
        return <ContactForm />;
      case 'wizard':
        return <ProjectWizard />;
      case 'channels':
        return <ContactChannels />;
      case 'location':
        return <LocationInfo />;
      default:
        return <ContactForm />;
    }
  };

  return (
    <>
      <Helmet>
        <title>Hubungi Kami - Indra Saebudi | Konsultasi Gratis Web Development</title>
        <meta name="description" content="Hubungi Indra Saebudi untuk konsultasi gratis web development. Multiple channel komunikasi, respons cepat 2-4 jam, dan meeting di Jakarta tersedia." />
        <meta name="keywords" content="kontak web developer, konsultasi website, web development Jakarta, quote website, meeting developer" />
        <meta property="og:title" content="Hubungi Kami - Indra Saebudi" />
        <meta property="og:description" content="Konsultasi gratis web development dengan respons cepat dan multiple channel komunikasi" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/contact-multi-channel-communication-hub" />
      </Helmet>
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Icon name="MessageCircle" size={16} />
                <span>Multi-Channel Communication Hub</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Mari Wujudkan{' '}
                <span className="gradient-text">Proyek Impian</span>{' '}
                Anda
              </h1>
              
              <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
                Hubungi saya melalui berbagai saluran komunikasi yang tersedia. 
                Konsultasi gratis, respons cepat, dan solusi yang tepat untuk kebutuhan digital Anda.
              </p>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {quickStats?.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className={`w-12 h-12 ${stat?.color === 'text-accent' ? 'bg-accent/20' : 
                      stat?.color === 'text-success' ? 'bg-success/20' :
                      stat?.color === 'text-warning' ? 'bg-warning/20' : 'bg-brand-purple/20'
                    } rounded-lg flex items-center justify-center mx-auto mb-3`}>
                      <Icon name={stat?.icon} size={24} className={stat?.color} />
                    </div>
                    <p className={`text-2xl font-bold ${stat?.color} mb-1`}>{stat?.value}</p>
                    <p className="text-sm text-text-secondary">{stat?.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="pb-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 space-y-6">
                  {/* Availability Status */}
                  <AvailabilityStatus />

                  {/* Emergency Contact */}
                  <div className="bg-gradient-to-br from-destructive/10 to-warning/10 border border-destructive/20 rounded-2xl p-6">
                    <div className="flex items-start space-x-3 mb-4">
                      <div className="w-10 h-10 bg-destructive/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Icon name="Zap" size={20} className="text-destructive" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground mb-1">{emergencyContact?.title}</h4>
                        <p className="text-sm text-foreground/80">{emergencyContact?.description}</p>
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      {emergencyContact?.features?.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Icon name="Check" size={14} className="text-success" />
                          <span className="text-xs text-foreground/80">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <a
                      href={emergencyContact?.whatsapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-destructive hover:bg-destructive/90 text-white font-semibold py-3 px-4 rounded-lg text-center smooth-transition"
                    >
                      <Icon name="Phone" size={16} className="mr-2 inline" />
                      Hubungi Sekarang
                    </a>
                  </div>
                </div>
              </div>

              {/* Main Content */}
              <div className="lg:col-span-3">
                {/* Tab Navigation */}
                <div className="bg-card rounded-2xl p-2 border border-border/50 mb-8">
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                    {tabs?.map((tab) => (
                      <button
                        key={tab?.id}
                        onClick={() => setActiveTab(tab?.id)}
                        className={`p-4 rounded-xl text-left smooth-transition ${
                          activeTab === tab?.id
                            ? 'bg-accent text-white' :'text-foreground hover:bg-muted'
                        }`}
                      >
                        <div className="flex items-center space-x-3 mb-2">
                          <Icon 
                            name={tab?.icon} 
                            size={20} 
                            className={activeTab === tab?.id ? 'text-white' : 'text-accent'} 
                          />
                          <span className="font-medium text-sm">{tab?.name}</span>
                        </div>
                        <p className={`text-xs ${
                          activeTab === tab?.id ? 'text-white/80' : 'text-text-secondary'
                        }`}>
                          {tab?.description}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tab Content */}
                <div className="min-h-[600px]">
                  {renderTabContent()}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-6 lg:px-8 bg-muted/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Pertanyaan yang Sering Diajukan
              </h2>
              <p className="text-text-secondary">
                Jawaban untuk pertanyaan umum seputar layanan dan proses kerja
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  question: 'Berapa lama waktu respons?',
                  answer: 'Saya merespons dalam 2-4 jam pada jam kerja (Senin-Jumat 09:00-18:00 WIB). Untuk proyek urgent, tersedia layanan express dengan respons 1-2 jam.'
                },
                {
                  question: 'Apakah konsultasi gratis?',
                  answer: 'Ya, konsultasi awal sepenuhnya gratis. Anda bisa diskusi kebutuhan, mendapat saran teknis, dan estimasi harga tanpa biaya apapun.'
                },
                {
                  question: 'Bagaimana sistem pembayaran?',
                  answer: 'Pembayaran dilakukan bertahap: 50% di awal, 30% saat development, 20% saat selesai. Tersedia transfer bank, e-wallet, dan payment gateway.'
                },
                {
                  question: 'Apakah ada garansi?',
                  answer: 'Ya, semua proyek mendapat garansi 3 bulan untuk bug fixing dan 1 tahun untuk maintenance ringan. Support teknis tersedia selamanya.'
                },
                {
                  question: 'Bisakah meeting di luar Jakarta?',
                  answer: 'Untuk area Jabodetabek bisa meeting langsung dengan biaya transport. Untuk kota lain, tersedia video conference dengan kualitas HD.'
                },
                {
                  question: 'Bagaimana jika tidak puas?',
                  answer: 'Kami berkomitmen pada kepuasan klien. Jika tidak sesuai ekspektasi, akan ada revisi unlimited hingga Anda puas atau money back guarantee.'
                }
              ]?.map((faq, index) => (
                <div key={index} className="bg-card rounded-xl p-6 border border-border/50">
                  <h4 className="font-semibold text-foreground mb-3">{faq?.question}</h4>
                  <p className="text-sm text-text-secondary leading-relaxed">{faq?.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-accent/10 to-brand-purple/10 border border-accent/20 rounded-2xl p-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Siap Memulai Proyek Anda?
              </h2>
              <p className="text-text-secondary mb-8 max-w-2xl mx-auto">
                Jangan tunda lagi! Hubungi saya sekarang untuk konsultasi gratis dan mulai wujudkan 
                website impian Anda. Respons cepat dan solusi terpercaya menanti Anda.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://wa.me/6285786476296?text=Halo,%20saya%20ingin%20konsultasi%20gratis%20untuk%20proyek%20website"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-accent to-brand-purple text-white font-semibold rounded-lg hover:scale-105 smooth-transition"
                >
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Konsultasi Gratis Sekarang
                </a>
                <button
                  onClick={() => setActiveTab('wizard')}
                  className="inline-flex items-center justify-center px-8 py-4 border border-accent text-accent font-semibold rounded-lg hover:bg-accent/10 smooth-transition"
                >
                  <Icon name="Calculator" size={20} className="mr-2" />
                  Hitung Estimasi Harga
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-card border-t border-border/50 py-8 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex items-center space-x-3 mb-4 md:mb-0">
                <div className="w-8 h-8 bg-gradient-to-br from-accent to-brand-purple rounded-lg flex items-center justify-center">
                  <Icon name="Code2" size={16} color="white" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">Indra Saebudi</h3>
                  <p className="text-xs text-text-secondary">Developer Web</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-2 text-sm text-text-secondary">
                  <Icon name="Clock" size={14} />
                  <span>Respons 2-4 Jam</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-text-secondary">
                  <Icon name="MapPin" size={14} />
                  <span>Jakarta, Indonesia</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-text-secondary">
                  <Icon name="Shield" size={14} />
                  <span>Garansi 3 Bulan</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-border/30 text-center">
              <p className="text-sm text-text-secondary">
                © {new Date()?.getFullYear()} Indra Saebudi. Semua hak dilindungi. 
                Dibuat dengan ❤️ untuk transformasi digital Indonesia.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ContactMultiChannelCommunicationHub;