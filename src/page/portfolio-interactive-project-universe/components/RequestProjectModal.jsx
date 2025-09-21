import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';

const RequestProjectModal = ({ isOpen, onClose, selectedProject }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: selectedProject?.category || '',
    budget: '',
    timeline: '',
    description: '',
    features: selectedProject?.technicalDetails?.features?.slice(0, 3) || [],
    technologies: selectedProject?.technologies?.slice(0, 5) || []
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  React.useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      if (selectedProject) {
        setFormData(prev => ({
          ...prev,
          projectType: selectedProject?.category,
          features: selectedProject?.technicalDetails?.features?.slice(0, 3) || [],
          technologies: selectedProject?.technologies?.slice(0, 5) || []
        }));
      }
    } else {
      document.body.style.overflow = 'unset';
      setIsSubmitted(false);
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, selectedProject]);

  const handleInputChange = (e) => {
    const { name, value } = e?.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Auto close after 3 seconds
    setTimeout(() => {
      onClose();
    }, 3000);
  };

  const budgetRanges = [
    { value: '10-25', label: 'Rp 10 - 25 Juta' },
    { value: '25-50', label: 'Rp 25 - 50 Juta' },
    { value: '50-100', label: 'Rp 50 - 100 Juta' },
    { value: '100+', label: 'Rp 100 Juta+' }
  ];

  const timelineOptions = [
    { value: '1-2', label: '1-2 Bulan' },
    { value: '2-4', label: '2-4 Bulan' },
    { value: '4-6', label: '4-6 Bulan' },
    { value: '6+', label: '6+ Bulan' }
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-background/95 backdrop-blur-lg"
        onClick={onClose}
      />
      {/* Modal Content */}
      <div className="relative w-full max-w-2xl max-h-[90vh] bg-card rounded-2xl border border-border/50 overflow-hidden card-shadow">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border/50">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-accent to-brand-purple rounded-lg flex items-center justify-center">
              <Icon name="MessageCircle" size={24} color="white" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-foreground">Request Proyek Serupa</h2>
              <p className="text-text-secondary">
                {selectedProject ? `Berdasarkan: ${selectedProject?.title}` : 'Konsultasi Proyek Baru'}
              </p>
            </div>
          </div>
          
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-text-secondary hover:text-foreground"
          >
            <Icon name="X" size={20} />
          </Button>
        </div>

        {/* Content */}
        <div className="p-6 max-h-[70vh] overflow-y-auto">
          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Personal Information */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Informasi Kontak</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input
                    label="Nama Lengkap"
                    type="text"
                    name="name"
                    value={formData?.name}
                    onChange={handleInputChange}
                    placeholder="Masukkan nama lengkap"
                    required
                  />
                  <Input
                    label="Email"
                    type="email"
                    name="email"
                    value={formData?.email}
                    onChange={handleInputChange}
                    placeholder="nama@perusahaan.com"
                    required
                  />
                  <Input
                    label="Perusahaan"
                    type="text"
                    name="company"
                    value={formData?.company}
                    onChange={handleInputChange}
                    placeholder="Nama perusahaan"
                  />
                  <Input
                    label="Nomor Telepon"
                    type="tel"
                    name="phone"
                    value={formData?.phone}
                    onChange={handleInputChange}
                    placeholder="+62 812 3456 7890"
                    required
                  />
                </div>
              </div>

              {/* Project Details */}
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-4">Detail Proyek</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Kategori Proyek
                    </label>
                    <select
                      name="projectType"
                      value={formData?.projectType}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      required
                    >
                      <option value="">Pilih kategori</option>
                      <option value="E-commerce">E-commerce</option>
                      <option value="Corporate">Corporate Website</option>
                      <option value="Startup">Startup Platform</option>
                      <option value="Agency">Agency Portfolio</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Estimasi Budget
                    </label>
                    <select
                      name="budget"
                      value={formData?.budget}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                      required
                    >
                      <option value="">Pilih range budget</option>
                      {budgetRanges?.map(range => (
                        <option key={range?.value} value={range?.value}>
                          {range?.label}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Timeline Proyek
                  </label>
                  <select
                    name="timeline"
                    value={formData?.timeline}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent"
                    required
                  >
                    <option value="">Pilih timeline</option>
                    {timelineOptions?.map(option => (
                      <option key={option?.value} value={option?.value}>
                        {option?.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Deskripsi Proyek
                  </label>
                  <textarea
                    name="description"
                    value={formData?.description}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                    placeholder="Jelaskan kebutuhan proyek Anda secara detail..."
                    required
                  />
                </div>
              </div>

              {/* Pre-filled from selected project */}
              {selectedProject && (
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-4">
                    Fitur yang Diinginkan (dari proyek referensi)
                  </h3>
                  <div className="space-y-3">
                    {formData?.features?.map((feature, index) => (
                      <div key={index} className="flex items-center space-x-2">
                        <Icon name="Check" size={16} className="text-success" />
                        <span className="text-text-secondary text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="font-medium text-foreground mb-2">Teknologi Referensi</h4>
                    <div className="flex flex-wrap gap-2">
                      {formData?.technologies?.map((tech, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 bg-brand-purple/20 text-brand-purple text-sm rounded-full border border-brand-purple/30"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {/* Submit Button */}
              <div className="flex justify-end space-x-4 pt-4 border-t border-border/50">
                <Button
                  type="button"
                  variant="outline"
                  onClick={onClose}
                  disabled={isSubmitting}
                >
                  Batal
                </Button>
                <Button
                  type="submit"
                  variant="default"
                  loading={isSubmitting}
                  className="gradient-button"
                >
                  <Icon name="Send" size={16} className="mr-2" />
                  {isSubmitting ? 'Mengirim...' : 'Kirim Request'}
                </Button>
              </div>
            </form>
          ) : (
            // Success State
            (<div className="text-center py-8">
              <div className="w-16 h-16 bg-gradient-to-r from-success to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Check" size={32} color="white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">Request Berhasil Dikirim!</h3>
              <p className="text-text-secondary mb-4">
                Terima kasih atas minat Anda. Tim kami akan menghubungi Anda dalam 1x24 jam untuk diskusi lebih lanjut.
              </p>
              <div className="p-4 bg-success/10 border border-success/20 rounded-lg">
                <p className="text-success text-sm">
                  <Icon name="Mail" size={16} className="inline mr-2" />
                  Email konfirmasi telah dikirim ke {formData?.email}
                </p>
              </div>
            </div>)
          )}
        </div>
      </div>
    </div>
  );
};

export default RequestProjectModal;