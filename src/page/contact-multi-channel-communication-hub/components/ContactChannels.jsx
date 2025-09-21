import React from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ContactChannels = () => {
  const contactMethods = [
    {
      id: 'whatsapp',
      name: 'WhatsApp',
      icon: 'MessageCircle',
      value: '+62 85786476296',
      description: 'Chat langsung untuk diskusi cepat',
      action: 'Chat Sekarang',
      href: 'https://wa.me/6285786476296?text=Halo,%20saya%20tertarik%20dengan%20layanan%20web%20development%20Anda',
      color: 'text-success',
      bgColor: 'bg-success/10',
      borderColor: 'border-success/20',
      available: true,
      responseTime: '5-15 menit'
    },
    {
      id: 'email',
      name: 'Email',
      icon: 'Mail',
      value: 'Indrasaebudi@gmail.com',
      description: 'Untuk diskusi detail dan proposal',
      action: 'Kirim Email',
      href: 'mailto:Indrasaebudi@gmail.com?subject=Inquiry%20Web%20Development&body=Halo,%0A%0ASaya%20tertarik%20dengan%20layanan%20web%20development%20Anda.%0A%0ATerima%20kasih.',
      color: 'text-accent',
      bgColor: 'bg-accent/10',
      borderColor: 'border-accent/20',
      available: true,
      responseTime: '2-4 jam'
    },
    {
      id: 'linkedin',
      name: 'LinkedIn',
      icon: 'Linkedin',
      value: '/in/devportfoliopro',
      description: 'Networking profesional dan portfolio',
      action: 'Lihat Profil',
      href: 'https://linkedin.com/in/devportfoliopro',
      color: 'text-brand-purple',
      bgColor: 'bg-brand-purple/10',
      borderColor: 'border-brand-purple/20',
      available: true,
      responseTime: '1-2 hari'
    },
    {
      id: 'github',
      name: 'GitHub',
      icon: 'Github',
      value: '/devportfoliopro',
      description: 'Source code dan kontribusi open source',
      action: 'Lihat Kode',
      href: 'https://github.com/devportfoliopro',
      color: 'text-foreground',
      bgColor: 'bg-muted',
      borderColor: 'border-border',
      available: true,
      responseTime: 'Publik'
    }
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      icon: 'Instagram',
      href: 'https://instagram.com/devportfoliopro',
      description: 'Behind the scenes & tips'
    },
    {
      name: 'Twitter',
      icon: 'Twitter',
      href: 'https://twitter.com/devportfoliopro',
      description: 'Tech updates & insights'
    },
    {
      name: 'YouTube',
      icon: 'Youtube',
      href: 'https://youtube.com/@devportfoliopro',
      description: 'Tutorials & case studies'
    },
    {
      name: 'Telegram',
      icon: 'Send',
      href: 'https://t.me/devportfoliopro',
      description: 'Quick updates & announcements'
    }
  ];

  const handleContactClick = (method) => {
    // Track contact method usage
    console.log(`Contact method used: ${method?.name}`);
    window.open(method?.href, '_blank');
  };

  return (
    <div className="space-y-8">
      {/* Primary Contact Methods */}
      <div>
        <h3 className="text-2xl font-bold text-foreground mb-2">Hubungi Saya</h3>
        <p className="text-text-secondary mb-6">
          Pilih cara komunikasi yang paling nyaman untuk Anda
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {contactMethods?.map((method) => (
            <div
              key={method?.id}
              className={`${method?.bgColor} ${method?.borderColor} border rounded-xl p-6 hover:scale-105 smooth-transition cursor-pointer group`}
              onClick={() => handleContactClick(method)}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-12 h-12 ${method?.bgColor} rounded-lg flex items-center justify-center group-hover:scale-110 smooth-transition`}>
                  <Icon name={method?.icon} size={24} className={method?.color} />
                </div>
                {method?.available && (
                  <div className="flex items-center space-x-1">
                    <div className="w-2 h-2 bg-success rounded-full"></div>
                    <span className="text-xs text-success">Online</span>
                  </div>
                )}
              </div>

              <h4 className="font-semibold text-foreground mb-1">{method?.name}</h4>
              <p className="text-sm text-text-secondary mb-2">{method?.description}</p>
              <p className={`text-sm font-medium ${method?.color} mb-3`}>{method?.value}</p>
              
              <div className="flex items-center justify-between">
                <span className="text-xs text-text-secondary">
                  Respons: {method?.responseTime}
                </span>
                <div className="flex items-center space-x-1 text-xs text-text-secondary group-hover:text-foreground smooth-transition">
                  <span>{method?.action}</span>
                  <Icon name="ExternalLink" size={12} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Quick Actions */}
      <div className="bg-card rounded-2xl p-6 border border-border/50">
        <h4 className="font-semibold text-foreground mb-4">Aksi Cepat</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Button
            variant="outline"
            fullWidth
            onClick={() => window.open('https://wa.me/6285786476296?text=Halo,%20saya%20ingin%20konsultasi%20gratis', '_blank')}
            className="border-success/30 text-success hover:bg-success/10"
          >
            <Icon name="MessageCircle" size={16} className="mr-2" />
            Konsultasi Gratis
          </Button>
          <Button
            variant="outline"
            fullWidth
            onClick={() => window.open('https://wa.me/6285786476296?text=Halo,%20saya%20butuh%20quote%20untuk%20proyek%20website', '_blank')}
            className="border-accent/30 text-accent hover:bg-accent/10"
          >
            <Icon name="Calculator" size={16} className="mr-2" />
            Minta Quote
          </Button>
        </div>
      </div>
      {/* Social Media */}
      <div>
        <h4 className="font-semibold text-foreground mb-4">Ikuti Saya</h4>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {socialLinks?.map((social, index) => (
            <a
              key={index}
              href={social?.href}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-muted hover:bg-card border border-border/50 rounded-lg p-4 text-center group smooth-transition hover:scale-105"
            >
              <div className="w-8 h-8 mx-auto mb-2 flex items-center justify-center">
                <Icon 
                  name={social?.icon} 
                  size={20} 
                  className="text-text-secondary group-hover:text-accent smooth-transition" 
                />
              </div>
              <p className="text-sm font-medium text-foreground mb-1">{social?.name}</p>
              <p className="text-xs text-text-secondary">{social?.description}</p>
            </a>
          ))}
        </div>
      </div>
      {/* Emergency Contact */}
      <div className="bg-gradient-to-r from-destructive/10 to-warning/10 border border-destructive/20 rounded-xl p-6">
        <div className="flex items-start space-x-4">
          <div className="w-12 h-12 bg-destructive/20 rounded-lg flex items-center justify-center flex-shrink-0">
            <Icon name="Zap" size={24} className="text-destructive" />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-foreground mb-2">Proyek Urgent & Emergency</h4>
            <p className="text-sm text-foreground/80 mb-4">
              Butuh website dalam waktu singkat? Layanan express tersedia dengan respons prioritas dan timeline dipercepat.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                variant="destructive"
                size="sm"
                onClick={() => window.open('https://wa.me/6285786476296?text=URGENT:%20Saya%20butuh%20website%20dengan%20deadline%20ketat', '_blank')}
              >
                <Icon name="Phone" size={16} className="mr-2" />
                Hubungi Sekarang
              </Button>
              <div className="text-xs text-text-secondary">
                <p>• Respons dalam 1-2 jam</p>
                <p>• Biaya tambahan 25-50%</p>
                <p>• Timeline dipercepat 50%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactChannels;