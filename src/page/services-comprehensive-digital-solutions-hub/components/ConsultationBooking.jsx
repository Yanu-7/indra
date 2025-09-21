import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ConsultationBooking = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    budget: '',
    message: ''
  });
  const [currentStep, setCurrentStep] = useState(1);

  // Generate available dates (next 14 days, excluding weekends)
  const getAvailableDates = () => {
    const dates = [];
    const today = new Date();
    let currentDate = new Date(today);
    currentDate?.setDate(currentDate?.getDate() + 1); // Start from tomorrow

    while (dates?.length < 10) {
      const dayOfWeek = currentDate?.getDay();
      if (dayOfWeek !== 0 && dayOfWeek !== 6) { // Exclude Sunday (0) and Saturday (6)
        dates?.push({
          value: currentDate?.toISOString()?.split('T')?.[0],
          label: currentDate?.toLocaleDateString('id-ID', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
          })
        });
      }
      currentDate?.setDate(currentDate?.getDate() + 1);
    }
    return dates;
  };

  const availableTimes = [
    { value: '09:00', label: '09:00 WIB' },
    { value: '10:00', label: '10:00 WIB' },
    { value: '11:00', label: '11:00 WIB' },
    { value: '13:00', label: '13:00 WIB' },
    { value: '14:00', label: '14:00 WIB' },
    { value: '15:00', label: '15:00 WIB' },
    { value: '16:00', label: '16:00 WIB' }
  ];

  const serviceOptions = [
    { value: 'website-bisnis', label: 'Website Bisnis Premium' },
    { value: 'toko-online', label: 'Toko Online Profesional' },
    { value: 'aplikasi-web', label: 'Aplikasi Web Kustom' },
    { value: 'konsultasi-umum', label: 'Konsultasi Umum' }
  ];

  const budgetOptions = [
    { value: '10-25', label: 'IDR 10 - 25 Juta' },
    { value: '25-50', label: 'IDR 25 - 50 Juta' },
    { value: '50-100', label: 'IDR 50 - 100 Juta' },
    { value: '100+', label: 'IDR 100 Juta+' },
    { value: 'belum-tahu', label: 'Belum Tahu / Diskusi' }
  ];

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = (e) => {
    e?.preventDefault();
    // Here you would typically send the data to your backend
    console.log('Booking submitted:', {
      ...formData,
      date: selectedDate,
      time: selectedTime
    });
    alert('Konsultasi berhasil dijadwalkan! Kami akan mengirim konfirmasi via email.');
  };

  const nextStep = () => {
    if (currentStep < 3) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
  };

  return (
    <div className="bg-card rounded-xl border border-border/50 p-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-4">Jadwalkan Konsultasi Gratis</h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Diskusikan kebutuhan project Anda dengan expert kami. Konsultasi 100% gratis tanpa komitmen.
        </p>
      </div>
      {/* Progress Indicator */}
      <div className="flex justify-center mb-8">
        <div className="flex items-center space-x-4">
          {[1, 2, 3]?.map((step) => (
            <div key={step} className="flex items-center">
              <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold smooth-transition ${
                currentStep >= step
                  ? 'bg-gradient-to-r from-accent to-brand-purple text-white' :'bg-muted text-text-secondary'
              }`}>
                {step}
              </div>
              {step < 3 && (
                <div className={`w-12 h-0.5 mx-2 smooth-transition ${
                  currentStep > step ? 'bg-gradient-to-r from-accent to-brand-purple' : 'bg-border'
                }`} />
              )}
            </div>
          ))}
        </div>
      </div>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        {/* Step 1: Personal Information */}
        {currentStep === 1 && (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">Informasi Kontak</h3>
              <p className="text-text-secondary text-sm">Berikan informasi kontak Anda</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Input
                label="Nama Lengkap"
                type="text"
                placeholder="Masukkan nama lengkap"
                value={formData?.name}
                onChange={(e) => handleInputChange('name', e?.target?.value)}
                required
              />
              <Input
                label="Email"
                type="email"
                placeholder="nama@email.com"
                value={formData?.email}
                onChange={(e) => handleInputChange('email', e?.target?.value)}
                required
              />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Input
                label="Nomor WhatsApp"
                type="tel"
                placeholder="08123456789"
                value={formData?.phone}
                onChange={(e) => handleInputChange('phone', e?.target?.value)}
                required
              />
              <Input
                label="Nama Perusahaan"
                type="text"
                placeholder="PT. Nama Perusahaan"
                value={formData?.company}
                onChange={(e) => handleInputChange('company', e?.target?.value)}
              />
            </div>

            <div className="flex justify-end">
              <Button type="button" onClick={nextStep} className="gradient-button">
                Lanjutkan
                <Icon name="ArrowRight" size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 2: Project Information */}
        {currentStep === 2 && (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">Informasi Project</h3>
              <p className="text-text-secondary text-sm">Ceritakan tentang project yang Anda inginkan</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Select
                label="Jenis Layanan"
                placeholder="Pilih jenis layanan"
                options={serviceOptions}
                value={formData?.service}
                onChange={setFormData?.service}
                required
              />
              <Select
                label="Budget Estimasi"
                placeholder="Pilih range budget"
                options={budgetOptions}
                value={formData?.budget}
                onChange={setFormData?.budget}
                required
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Deskripsi Project
              </label>
              <textarea
                className="w-full px-3 py-2 bg-input border border-border rounded-lg text-foreground placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
                rows={4}
                placeholder="Ceritakan detail project Anda, fitur yang diinginkan, target audience, dll..."
                value={formData?.message}
                onChange={(e) => handleInputChange('message', e?.target?.value)}
              />
            </div>

            <div className="flex justify-between">
              <Button type="button" variant="outline" onClick={prevStep}>
                <Icon name="ArrowLeft" size={16} className="mr-2" />
                Kembali
              </Button>
              <Button type="button" onClick={nextStep} className="gradient-button">
                Lanjutkan
                <Icon name="ArrowRight" size={16} className="ml-2" />
              </Button>
            </div>
          </div>
        )}

        {/* Step 3: Schedule Selection */}
        {currentStep === 3 && (
          <div className="space-y-6">
            <div className="text-center mb-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">Pilih Jadwal</h3>
              <p className="text-text-secondary text-sm">Pilih tanggal dan waktu yang sesuai untuk konsultasi</p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <Select
                label="Tanggal Konsultasi"
                placeholder="Pilih tanggal"
                options={getAvailableDates()}
                value={selectedDate}
                onChange={setSelectedDate}
                required
              />
              <Select
                label="Waktu Konsultasi"
                placeholder="Pilih waktu"
                options={availableTimes}
                value={selectedTime}
                onChange={setSelectedTime}
                required
              />
            </div>

            {/* Consultation Info */}
            <div className="bg-accent/10 rounded-lg p-4 border border-accent/20">
              <div className="flex items-start space-x-3">
                <Icon name="Info" size={16} className="text-accent mt-0.5" />
                <div>
                  <h4 className="text-sm font-semibold text-accent mb-1">Informasi Konsultasi:</h4>
                  <ul className="text-xs text-text-secondary space-y-1">
                    <li>• Durasi: 60 menit via Google Meet</li>
                    <li>• Gratis tanpa komitmen</li>
                    <li>• Link meeting akan dikirim via email</li>
                    <li>• Bisa reschedule 24 jam sebelumnya</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="flex justify-between">
              <Button type="button" variant="outline" onClick={prevStep}>
                <Icon name="ArrowLeft" size={16} className="mr-2" />
                Kembali
              </Button>
              <Button type="submit" className="gradient-button">
                <Icon name="Calendar" size={16} className="mr-2" />
                Jadwalkan Konsultasi
              </Button>
            </div>
          </div>
        )}
      </form>
      {/* Quick Contact Options */}
      <div className="mt-12 pt-8 border-t border-border/30">
        <div className="text-center mb-6">
          <h3 className="text-lg font-semibold text-foreground mb-2">Atau Hubungi Langsung</h3>
          <p className="text-text-secondary text-sm">Untuk pertanyaan cepat atau konsultasi urgent</p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <Button variant="outline" className="border-accent/30 text-accent hover:bg-accent/10">
            <Icon name="MessageCircle" size={16} className="mr-2" />
            WhatsApp
          </Button>
          <Button variant="outline" className="border-accent/30 text-accent hover:bg-accent/10">
            <Icon name="Phone" size={16} className="mr-2" />
            Telepon
          </Button>
          <Button variant="outline" className="border-accent/30 text-accent hover:bg-accent/10">
            <Icon name="Mail" size={16} className="mr-2" />
            Email
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ConsultationBooking;