import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import { Checkbox } from '../../../components/ui/Checkbox';

const PricingCalculator = ({ service, onClose }) => {
  const [selectedFeatures, setSelectedFeatures] = useState([]);
  const [totalPrice, setTotalPrice] = useState(service?.priceRange?.min);

  const additionalFeatures = [
    { id: 'seo', name: 'SEO Optimization Premium', price: 5000000, description: 'Optimasi SEO lengkap untuk ranking Google' },
    { id: 'analytics', name: 'Analytics & Tracking', price: 2500000, description: 'Google Analytics dan Facebook Pixel setup' },
    { id: 'security', name: 'Security Enhancement', price: 3500000, description: 'SSL, firewall, dan backup otomatis' },
    { id: 'maintenance', name: 'Maintenance 6 Bulan', price: 7500000, description: 'Update dan maintenance selama 6 bulan' },
    { id: 'training', name: 'Training & Documentation', price: 4000000, description: 'Pelatihan penggunaan dan dokumentasi lengkap' },
    { id: 'mobile-app', name: 'Mobile App Companion', price: 25000000, description: 'Aplikasi mobile untuk iOS dan Android' }
  ];

  useEffect(() => {
    const additionalCost = selectedFeatures?.reduce((sum, featureId) => {
      const feature = additionalFeatures?.find(f => f?.id === featureId);
      return sum + (feature ? feature?.price : 0);
    }, 0);
    setTotalPrice(service?.priceRange?.min + additionalCost);
  }, [selectedFeatures, service?.priceRange?.min]);

  const handleFeatureToggle = (featureId) => {
    setSelectedFeatures(prev => 
      prev?.includes(featureId) 
        ? prev?.filter(id => id !== featureId)
        : [...prev, featureId]
    );
  };

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })?.format(price);
  };

  return (
    <div className="fixed inset-0 bg-background/80 backdrop-blur-lg flex items-center justify-center z-50 p-4">
      <div className="bg-card rounded-xl border border-border/50 w-full max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border/30">
          <div>
            <h2 className="text-2xl font-bold text-foreground">{service?.title}</h2>
            <p className="text-text-secondary mt-1">Kalkulator Estimasi Harga</p>
          </div>
          <Button variant="ghost" size="icon" onClick={onClose}>
            <Icon name="X" size={20} />
          </Button>
        </div>

        <div className="p-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Column - Features */}
            <div>
              <h3 className="text-lg font-semibold text-foreground mb-4">Fitur Dasar Termasuk:</h3>
              <div className="space-y-3 mb-8">
                {service?.features?.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <Icon name="Check" size={16} className="text-success" />
                    <span className="text-sm text-text-secondary">{feature}</span>
                  </div>
                ))}
              </div>

              <h3 className="text-lg font-semibold text-foreground mb-4">Fitur Tambahan:</h3>
              <div className="space-y-4">
                {additionalFeatures?.map((feature) => (
                  <div key={feature?.id} className="border border-border/30 rounded-lg p-4">
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        checked={selectedFeatures?.includes(feature?.id)}
                        onChange={() => handleFeatureToggle(feature?.id)}
                        className="mt-1"
                      />
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-medium text-foreground">{feature?.name}</h4>
                          <span className="text-sm font-semibold text-accent">
                            {formatPrice(feature?.price)}
                          </span>
                        </div>
                        <p className="text-xs text-text-secondary">{feature?.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Summary */}
            <div>
              <div className="sticky top-6">
                <div className="bg-muted/30 rounded-lg p-6 border border-border/30">
                  <h3 className="text-lg font-semibold text-foreground mb-4">Ringkasan Estimasi</h3>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-text-secondary">Paket Dasar:</span>
                      <span className="font-medium text-foreground">
                        {formatPrice(service?.priceRange?.min)}
                      </span>
                    </div>
                    
                    {selectedFeatures?.map(featureId => {
                      const feature = additionalFeatures?.find(f => f?.id === featureId);
                      return feature ? (
                        <div key={featureId} className="flex justify-between items-center">
                          <span className="text-text-secondary text-sm">{feature?.name}:</span>
                          <span className="font-medium text-foreground">
                            {formatPrice(feature?.price)}
                          </span>
                        </div>
                      ) : null;
                    })}
                    
                    <div className="border-t border-border/30 pt-3">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-semibold text-foreground">Total Estimasi:</span>
                        <span className="text-2xl font-bold gradient-text">
                          {formatPrice(totalPrice)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Button variant="default" fullWidth className="gradient-button">
                      <Icon name="MessageCircle" size={16} className="mr-2" />
                      Konsultasi Gratis
                    </Button>
                    <Button variant="outline" fullWidth className="border-accent/30 text-accent">
                      <Icon name="Download" size={16} className="mr-2" />
                      Download Proposal
                    </Button>
                  </div>

                  <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
                    <div className="flex items-start space-x-3">
                      <Icon name="Info" size={16} className="text-accent mt-0.5" />
                      <div>
                        <p className="text-xs text-accent font-medium mb-1">Catatan Penting:</p>
                        <p className="text-xs text-text-secondary">
                          Harga ini adalah estimasi awal. Harga final akan ditentukan setelah konsultasi dan analisis kebutuhan detail.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingCalculator;