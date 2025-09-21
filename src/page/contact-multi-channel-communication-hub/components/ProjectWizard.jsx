import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const ProjectWizard = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [wizardData, setWizardData] = useState({
    projectType: '',
    businessType: '',
    features: [],
    budget: '',
    timeline: '',
    hasContent: '',
    hasDesign: '',
    priority: '',
    additionalInfo: ''
  });
  const [estimatedCost, setEstimatedCost] = useState(null);
  const [isGenerating, setIsGenerating] = useState(false);

  const totalSteps = 6;

  const projectTypes = [
    {
      id: 'landing-page',
      name: 'Landing Page',
      description: 'Halaman tunggal untuk promosi produk/layanan',
      basePrice: 5000000,
      icon: 'FileText'
    },
    {
      id: 'company-profile',
      name: 'Company Profile',
      description: 'Website profil perusahaan dengan beberapa halaman',
      basePrice: 15000000,
      icon: 'Building'
    },
    {
      id: 'ecommerce',
      name: 'Toko Online',
      description: 'Website e-commerce dengan sistem pembayaran',
      basePrice: 30000000,
      icon: 'ShoppingCart'
    },
    {
      id: 'web-app',
      name: 'Aplikasi Web',
      description: 'Aplikasi web custom dengan fitur kompleks',
      basePrice: 50000000,
      icon: 'Monitor'
    }
  ];

  const businessTypes = [
    { id: 'startup', name: 'Startup', multiplier: 1.2 },
    { id: 'umkm', name: 'UMKM', multiplier: 0.8 },
    { id: 'corporate', name: 'Corporate', multiplier: 1.5 },
    { id: 'personal', name: 'Personal/Portfolio', multiplier: 0.6 },
    { id: 'ngo', name: 'NGO/Yayasan', multiplier: 0.7 }
  ];

  const featureOptions = [
    { id: 'cms', name: 'Content Management System', price: 5000000 },
    { id: 'seo', name: 'SEO Optimization', price: 3000000 },
    { id: 'analytics', name: 'Google Analytics Setup', price: 1000000 },
    { id: 'social-media', name: 'Social Media Integration', price: 2000000 },
    { id: 'multilingual', name: 'Multi-language Support', price: 8000000 },
    { id: 'payment', name: 'Payment Gateway', price: 10000000 },
    { id: 'booking', name: 'Booking System', price: 12000000 },
    { id: 'chat', name: 'Live Chat', price: 4000000 }
  ];

  const budgetRanges = [
    { id: '5-15', name: 'Rp 5-15 Juta', min: 5000000, max: 15000000 },
    { id: '15-30', name: 'Rp 15-30 Juta', min: 15000000, max: 30000000 },
    { id: '30-50', name: 'Rp 30-50 Juta', min: 30000000, max: 50000000 },
    { id: '50-100', name: 'Rp 50-100 Juta', min: 50000000, max: 100000000 },
    { id: '100+', name: 'Di atas Rp 100 Juta', min: 100000000, max: 200000000 }
  ];

  const timelineOptions = [
    { id: '1-2-weeks', name: '1-2 Minggu (Express)', multiplier: 1.5 },
    { id: '3-4-weeks', name: '3-4 Minggu', multiplier: 1.2 },
    { id: '1-2-months', name: '1-2 Bulan', multiplier: 1.0 },
    { id: '3-6-months', name: '3-6 Bulan', multiplier: 0.9 },
    { id: 'flexible', name: 'Fleksibel', multiplier: 0.8 }
  ];

  const handleInputChange = (field, value) => {
    setWizardData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleFeatureToggle = (featureId) => {
    setWizardData(prev => ({
      ...prev,
      features: prev?.features?.includes(featureId)
        ? prev?.features?.filter(id => id !== featureId)
        : [...prev?.features, featureId]
    }));
  };

  const calculateEstimate = () => {
    setIsGenerating(true);
    
    setTimeout(() => {
      const projectType = projectTypes?.find(p => p?.id === wizardData?.projectType);
      const businessType = businessTypes?.find(b => b?.id === wizardData?.businessType);
      const timeline = timelineOptions?.find(t => t?.id === wizardData?.timeline);
      
      let basePrice = projectType?.basePrice || 0;
      let featuresPrice = wizardData?.features?.reduce((total, featureId) => {
        const feature = featureOptions?.find(f => f?.id === featureId);
        return total + (feature?.price || 0);
      }, 0);

      let totalPrice = basePrice + featuresPrice;
      
      // Apply business type multiplier
      if (businessType) {
        totalPrice *= businessType?.multiplier;
      }
      
      // Apply timeline multiplier
      if (timeline) {
        totalPrice *= timeline?.multiplier;
      }

      // Apply discounts for existing content/design
      if (wizardData?.hasContent === 'yes') {
        totalPrice *= 0.9; // 10% discount
      }
      if (wizardData?.hasDesign === 'yes') {
        totalPrice *= 0.85; // 15% discount
      }

      setEstimatedCost({
        basePrice,
        featuresPrice,
        totalPrice: Math.round(totalPrice),
        breakdown: {
          projectType: projectType?.name,
          businessType: businessType?.name,
          features: wizardData?.features?.map(id => featureOptions?.find(f => f?.id === id)?.name),
          timeline: timeline?.name,
          hasContent: wizardData?.hasContent === 'yes',
          hasDesign: wizardData?.hasDesign === 'yes'
        }
      });
      
      setIsGenerating(false);
      setCurrentStep(totalSteps + 1); // Go to results
    }, 2000);
  };

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      calculateEstimate();
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const resetWizard = () => {
    setCurrentStep(1);
    setWizardData({
      projectType: '',
      businessType: '',
      features: [],
      budget: '',
      timeline: '',
      hasContent: '',
      hasDesign: '',
      priority: '',
      additionalInfo: ''
    });
    setEstimatedCost(null);
  };

  const sendQuote = () => {
    const message = `Halo! Saya sudah menggunakan Project Wizard dan mendapat estimasi untuk proyek ${estimatedCost?.breakdown?.projectType} sebesar Rp ${estimatedCost?.totalPrice?.toLocaleString('id-ID')}. Bisakah kita diskusikan lebih detail?`;
    window.open(`https://wa.me/6285786476296?text=${encodeURIComponent(message)}`, '_blank');
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0
    })?.format(amount);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Jenis Proyek</h4>
            <p className="text-text-secondary mb-6">Pilih jenis website yang Anda butuhkan</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {projectTypes?.map((type) => (
                <div
                  key={type?.id}
                  onClick={() => handleInputChange('projectType', type?.id)}
                  className={`p-4 rounded-lg border cursor-pointer smooth-transition ${
                    wizardData?.projectType === type?.id
                      ? 'border-accent bg-accent/10' :'border-border hover:border-accent/50'
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                      wizardData?.projectType === type?.id ? 'bg-accent/20' : 'bg-muted'
                    }`}>
                      <Icon 
                        name={type?.icon} 
                        size={20} 
                        className={wizardData?.projectType === type?.id ? 'text-accent' : 'text-text-secondary'} 
                      />
                    </div>
                    <div className="flex-1">
                      <h5 className="font-medium text-foreground mb-1">{type?.name}</h5>
                      <p className="text-sm text-text-secondary mb-2">{type?.description}</p>
                      <p className="text-sm font-medium text-accent">
                        Mulai dari {formatCurrency(type?.basePrice)}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 2:
        return (
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Jenis Bisnis</h4>
            <p className="text-text-secondary mb-6">Kategori bisnis Anda untuk penyesuaian harga</p>
            <div className="space-y-3">
              {businessTypes?.map((business) => (
                <div
                  key={business?.id}
                  onClick={() => handleInputChange('businessType', business?.id)}
                  className={`p-4 rounded-lg border cursor-pointer smooth-transition flex items-center justify-between ${
                    wizardData?.businessType === business?.id
                      ? 'border-accent bg-accent/10' :'border-border hover:border-accent/50'
                  }`}
                >
                  <span className="font-medium text-foreground">{business?.name}</span>
                  <div className="flex items-center space-x-2">
                    {business?.multiplier < 1 && (
                      <span className="text-xs bg-success/20 text-success px-2 py-1 rounded">
                        Diskon {Math.round((1 - business?.multiplier) * 100)}%
                      </span>
                    )}
                    {business?.multiplier > 1 && (
                      <span className="text-xs bg-warning/20 text-warning px-2 py-1 rounded">
                        +{Math.round((business?.multiplier - 1) * 100)}%
                      </span>
                    )}
                    <Icon 
                      name={wizardData?.businessType === business?.id ? 'CheckCircle' : 'Circle'} 
                      size={20} 
                      className={wizardData?.businessType === business?.id ? 'text-accent' : 'text-text-secondary'} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Fitur Tambahan</h4>
            <p className="text-text-secondary mb-6">Pilih fitur yang Anda butuhkan (opsional)</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {featureOptions?.map((feature) => (
                <div
                  key={feature?.id}
                  onClick={() => handleFeatureToggle(feature?.id)}
                  className={`p-4 rounded-lg border cursor-pointer smooth-transition ${
                    wizardData?.features?.includes(feature?.id)
                      ? 'border-accent bg-accent/10' :'border-border hover:border-accent/50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h5 className="font-medium text-foreground mb-1">{feature?.name}</h5>
                      <p className="text-sm text-accent">{formatCurrency(feature?.price)}</p>
                    </div>
                    <Icon 
                      name={wizardData?.features?.includes(feature?.id) ? 'CheckSquare' : 'Square'} 
                      size={20} 
                      className={wizardData?.features?.includes(feature?.id) ? 'text-accent' : 'text-text-secondary'} 
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Budget & Timeline</h4>
            <p className="text-text-secondary mb-6">Tentukan budget dan waktu penyelesaian</p>
            <div className="space-y-6">
              <div>
                <h5 className="font-medium text-foreground mb-3">Range Budget</h5>
                <div className="space-y-2">
                  {budgetRanges?.map((budget) => (
                    <div
                      key={budget?.id}
                      onClick={() => handleInputChange('budget', budget?.id)}
                      className={`p-3 rounded-lg border cursor-pointer smooth-transition flex items-center justify-between ${
                        wizardData?.budget === budget?.id
                          ? 'border-accent bg-accent/10' :'border-border hover:border-accent/50'
                      }`}
                    >
                      <span className="text-foreground">{budget?.name}</span>
                      <Icon 
                        name={wizardData?.budget === budget?.id ? 'CheckCircle' : 'Circle'} 
                        size={18} 
                        className={wizardData?.budget === budget?.id ? 'text-accent' : 'text-text-secondary'} 
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h5 className="font-medium text-foreground mb-3">Timeline Proyek</h5>
                <div className="space-y-2">
                  {timelineOptions?.map((timeline) => (
                    <div
                      key={timeline?.id}
                      onClick={() => handleInputChange('timeline', timeline?.id)}
                      className={`p-3 rounded-lg border cursor-pointer smooth-transition flex items-center justify-between ${
                        wizardData?.timeline === timeline?.id
                          ? 'border-accent bg-accent/10' :'border-border hover:border-accent/50'
                      }`}
                    >
                      <div>
                        <span className="text-foreground">{timeline?.name}</span>
                        {timeline?.multiplier !== 1.0 && (
                          <span className={`ml-2 text-xs px-2 py-1 rounded ${
                            timeline?.multiplier > 1 
                              ? 'bg-warning/20 text-warning' :'bg-success/20 text-success'
                          }`}>
                            {timeline?.multiplier > 1 ? '+' : ''}{Math.round((timeline?.multiplier - 1) * 100)}%
                          </span>
                        )}
                      </div>
                      <Icon 
                        name={wizardData?.timeline === timeline?.id ? 'CheckCircle' : 'Circle'} 
                        size={18} 
                        className={wizardData?.timeline === timeline?.id ? 'text-accent' : 'text-text-secondary'} 
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 5:
        return (
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Aset yang Tersedia</h4>
            <p className="text-text-secondary mb-6">Apakah Anda sudah memiliki konten dan desain?</p>
            <div className="space-y-6">
              <div>
                <h5 className="font-medium text-foreground mb-3">Konten (Teks, Gambar, Video)</h5>
                <div className="grid grid-cols-2 gap-3">
                  <div
                    onClick={() => handleInputChange('hasContent', 'yes')}
                    className={`p-4 rounded-lg border cursor-pointer smooth-transition text-center ${
                      wizardData?.hasContent === 'yes' ?'border-success bg-success/10' :'border-border hover:border-success/50'
                    }`}
                  >
                    <Icon 
                      name="Check" 
                      size={24} 
                      className={`mx-auto mb-2 ${wizardData?.hasContent === 'yes' ? 'text-success' : 'text-text-secondary'}`} 
                    />
                    <p className="font-medium text-foreground">Sudah Ada</p>
                    <p className="text-xs text-success mt-1">Diskon 10%</p>
                  </div>
                  <div
                    onClick={() => handleInputChange('hasContent', 'no')}
                    className={`p-4 rounded-lg border cursor-pointer smooth-transition text-center ${
                      wizardData?.hasContent === 'no' ?'border-accent bg-accent/10' :'border-border hover:border-accent/50'
                    }`}
                  >
                    <Icon 
                      name="X" 
                      size={24} 
                      className={`mx-auto mb-2 ${wizardData?.hasContent === 'no' ? 'text-accent' : 'text-text-secondary'}`} 
                    />
                    <p className="font-medium text-foreground">Belum Ada</p>
                    <p className="text-xs text-text-secondary mt-1">Kami buatkan</p>
                  </div>
                </div>
              </div>

              <div>
                <h5 className="font-medium text-foreground mb-3">Desain/Mockup</h5>
                <div className="grid grid-cols-2 gap-3">
                  <div
                    onClick={() => handleInputChange('hasDesign', 'yes')}
                    className={`p-4 rounded-lg border cursor-pointer smooth-transition text-center ${
                      wizardData?.hasDesign === 'yes' ?'border-success bg-success/10' :'border-border hover:border-success/50'
                    }`}
                  >
                    <Icon 
                      name="Check" 
                      size={24} 
                      className={`mx-auto mb-2 ${wizardData?.hasDesign === 'yes' ? 'text-success' : 'text-text-secondary'}`} 
                    />
                    <p className="font-medium text-foreground">Sudah Ada</p>
                    <p className="text-xs text-success mt-1">Diskon 15%</p>
                  </div>
                  <div
                    onClick={() => handleInputChange('hasDesign', 'no')}
                    className={`p-4 rounded-lg border cursor-pointer smooth-transition text-center ${
                      wizardData?.hasDesign === 'no' ?'border-accent bg-accent/10' :'border-border hover:border-accent/50'
                    }`}
                  >
                    <Icon 
                      name="X" 
                      size={24} 
                      className={`mx-auto mb-2 ${wizardData?.hasDesign === 'no' ? 'text-accent' : 'text-text-secondary'}`} 
                    />
                    <p className="font-medium text-foreground">Belum Ada</p>
                    <p className="text-xs text-text-secondary mt-1">Kami desainkan</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div>
            <h4 className="text-lg font-semibold text-foreground mb-4">Informasi Tambahan</h4>
            <p className="text-text-secondary mb-6">Ceritakan lebih detail tentang proyek Anda</p>
            <div className="space-y-6">
              <div>
                <h5 className="font-medium text-foreground mb-3">Prioritas Utama</h5>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {['Kecepatan', 'Desain', 'Fungsionalitas']?.map((priority) => (
                    <div
                      key={priority}
                      onClick={() => handleInputChange('priority', priority)}
                      className={`p-3 rounded-lg border cursor-pointer smooth-transition text-center ${
                        wizardData?.priority === priority
                          ? 'border-accent bg-accent/10' :'border-border hover:border-accent/50'
                      }`}
                    >
                      <span className="font-medium text-foreground">{priority}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h5 className="font-medium text-foreground mb-3">Deskripsi Tambahan</h5>
                <textarea
                  rows={4}
                  placeholder="Ceritakan tentang visi, target audience, referensi website, atau kebutuhan khusus lainnya..."
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                  value={wizardData?.additionalInfo}
                  onChange={(e) => handleInputChange('additionalInfo', e?.target?.value)}
                />
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  if (isGenerating) {
    return (
      <div className="bg-card rounded-2xl p-8 border border-border/50 text-center">
        <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4 animate-pulse">
          <Icon name="Calculator" size={32} className="text-accent" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">Menghitung Estimasi...</h3>
        <p className="text-text-secondary mb-6">
          Sedang menganalisis kebutuhan proyek Anda
        </p>
        <div className="w-full bg-muted rounded-full h-2">
          <div className="bg-gradient-to-r from-accent to-brand-purple h-2 rounded-full animate-pulse" style={{width: '70%'}}></div>
        </div>
      </div>
    );
  }

  if (estimatedCost) {
    return (
      <div className="bg-card rounded-2xl p-8 border border-border/50">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Icon name="CheckCircle" size={32} className="text-success" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-2">Estimasi Proyek Anda</h3>
          <p className="text-text-secondary">
            Berdasarkan informasi yang Anda berikan
          </p>
        </div>
        <div className="bg-gradient-to-r from-accent/10 to-brand-purple/10 rounded-xl p-6 mb-6">
          <div className="text-center">
            <p className="text-sm text-text-secondary mb-2">Total Estimasi</p>
            <p className="text-3xl font-bold gradient-text">
              {formatCurrency(estimatedCost?.totalPrice)}
            </p>
            <p className="text-xs text-text-secondary mt-2">
              *Harga dapat berubah setelah konsultasi detail
            </p>
          </div>
        </div>
        <div className="space-y-4 mb-6">
          <div className="flex justify-between items-center py-2 border-b border-border/30">
            <span className="text-text-secondary">Jenis Proyek:</span>
            <span className="font-medium text-foreground">{estimatedCost?.breakdown?.projectType}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-border/30">
            <span className="text-text-secondary">Kategori Bisnis:</span>
            <span className="font-medium text-foreground">{estimatedCost?.breakdown?.businessType}</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-border/30">
            <span className="text-text-secondary">Timeline:</span>
            <span className="font-medium text-foreground">{estimatedCost?.breakdown?.timeline}</span>
          </div>
          {estimatedCost?.breakdown?.features?.length > 0 && (
            <div className="py-2 border-b border-border/30">
              <span className="text-text-secondary">Fitur Tambahan:</span>
              <div className="mt-1">
                {estimatedCost?.breakdown?.features?.map((feature, index) => (
                  <span key={index} className="inline-block bg-accent/10 text-accent text-xs px-2 py-1 rounded mr-2 mb-1">
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          )}
          {(estimatedCost?.breakdown?.hasContent || estimatedCost?.breakdown?.hasDesign) && (
            <div className="py-2">
              <span className="text-text-secondary">Diskon Applied:</span>
              <div className="mt-1">
                {estimatedCost?.breakdown?.hasContent && (
                  <span className="inline-block bg-success/10 text-success text-xs px-2 py-1 rounded mr-2">
                    Konten Ready -10%
                  </span>
                )}
                {estimatedCost?.breakdown?.hasDesign && (
                  <span className="inline-block bg-success/10 text-success text-xs px-2 py-1 rounded mr-2">
                    Desain Ready -15%
                  </span>
                )}
              </div>
            </div>
          )}
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="default"
            fullWidth
            onClick={sendQuote}
            className="gradient-button"
          >
            <Icon name="MessageCircle" size={16} className="mr-2" />
            Diskusi via WhatsApp
          </Button>
          <Button
            variant="outline"
            onClick={resetWizard}
            className="border-text-secondary/30 text-text-secondary hover:bg-muted"
          >
            <Icon name="RotateCcw" size={16} className="mr-2" />
            Hitung Ulang
          </Button>
        </div>
        <div className="mt-6 pt-6 border-t border-border/30 text-center">
          <p className="text-xs text-text-secondary">
            Estimasi ini bersifat indikatif. Harga final akan ditentukan setelah konsultasi detail dan analisis kebutuhan yang lebih mendalam.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-2xl p-8 border border-border/50">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-2xl font-bold text-foreground">Project Wizard</h3>
          <span className="text-sm text-text-secondary">
            {currentStep}/{totalSteps}
          </span>
        </div>
        
        {/* Progress Bar */}
        <div className="w-full bg-muted rounded-full h-2 mb-4">
          <div 
            className="bg-gradient-to-r from-accent to-brand-purple h-2 rounded-full smooth-transition"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          ></div>
        </div>
        
        <p className="text-text-secondary">
          Jawab beberapa pertanyaan untuk mendapat estimasi harga yang akurat
        </p>
      </div>
      {renderStep()}
      <div className="flex justify-between mt-8">
        <Button
          variant="outline"
          onClick={prevStep}
          disabled={currentStep === 1}
          className="border-text-secondary/30 text-text-secondary hover:bg-muted disabled:opacity-50"
        >
          <Icon name="ChevronLeft" size={16} className="mr-2" />
          Sebelumnya
        </Button>
        
        <Button
          variant="default"
          onClick={nextStep}
          disabled={
            (currentStep === 1 && !wizardData?.projectType) ||
            (currentStep === 2 && !wizardData?.businessType) ||
            (currentStep === 4 && (!wizardData?.budget || !wizardData?.timeline)) ||
            (currentStep === 5 && (!wizardData?.hasContent || !wizardData?.hasDesign))
          }
          className="gradient-button"
        >
          {currentStep === totalSteps ? (
            <>
              <Icon name="Calculator" size={16} className="mr-2" />
              Hitung Estimasi
            </>
          ) : (
            <>
              Selanjutnya
              <Icon name="ChevronRight" size={16} className="ml-2" />
            </>
          )}
        </Button>
      </div>
    </div>
  );
};

export default ProjectWizard;