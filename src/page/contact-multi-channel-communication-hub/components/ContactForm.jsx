import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const { register, handleSubmit, formState: { errors }, reset, watch } = useForm();

  const projectTypes = [
    { value: 'website-bisnis', label: 'Website Bisnis' },
    { value: 'toko-online', label: 'Toko Online / E-commerce' },
    { value: 'aplikasi-web', label: 'Aplikasi Web Custom' },
    { value: 'landing-page', label: 'Landing Page' },
    { value: 'redesign', label: 'Redesign Website' },
    { value: 'maintenance', label: 'Maintenance & Support' },
    { value: 'konsultasi', label: 'Konsultasi Digital' },
    { value: 'lainnya', label: 'Lainnya' }
  ];

  const budgetRanges = [
    { value: '5-15', label: 'Rp 5.000.000 - Rp 15.000.000' },
    { value: '15-30', label: 'Rp 15.000.000 - Rp 30.000.000' },
    { value: '30-50', label: 'Rp 30.000.000 - Rp 50.000.000' },
    { value: '50-100', label: 'Rp 50.000.000 - Rp 100.000.000' },
    { value: '100+', label: 'Di atas Rp 100.000.000' },
    { value: 'diskusi', label: 'Mari kita diskusikan' }
  ];

  const timelineOptions = [
    { value: '1-2-minggu', label: '1-2 Minggu (Express)' },
    { value: '3-4-minggu', label: '3-4 Minggu' },
    { value: '1-2-bulan', label: '1-2 Bulan' },
    { value: '3-6-bulan', label: '3-6 Bulan' },
    { value: 'fleksibel', label: 'Fleksibel' }
  ];

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log('Form Data:', data);
    setSubmitSuccess(true);
    reset();
    
    setTimeout(() => {
      setSubmitSuccess(false);
      setIsSubmitting(false);
    }, 3000);
  };

  if (submitSuccess) {
    return (
      <div className="bg-card rounded-2xl p-8 border border-border/50 text-center">
        <div className="w-16 h-16 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <Icon name="CheckCircle" size={32} className="text-success" />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-2">Pesan Terkirim!</h3>
        <p className="text-text-secondary mb-4">
          Terima kasih atas minat Anda. Saya akan merespons dalam 2-4 jam kerja.
        </p>
        <div className="flex items-center justify-center space-x-2 text-sm text-text-secondary">
          <Icon name="Clock" size={16} />
          <span>Estimasi respons: 2-4 jam</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-card rounded-2xl p-8 border border-border/50">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-foreground mb-2">Mulai Proyek Anda</h3>
        <p className="text-text-secondary">
          Ceritakan tentang proyek impian Anda. Saya akan membantu mewujudkannya.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Nama Lengkap"
            type="text"
            placeholder="Masukkan nama lengkap Anda"
            required
            error={errors?.fullName?.message}
            {...register('fullName', { 
              required: 'Nama lengkap wajib diisi',
              minLength: { value: 2, message: 'Nama minimal 2 karakter' }
            })}
          />

          <Input
            label="Email"
            type="email"
            placeholder="nama@perusahaan.com"
            required
            error={errors?.email?.message}
            {...register('email', { 
              required: 'Email wajib diisi',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Format email tidak valid'
              }
            })}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Nomor WhatsApp"
            type="tel"
            placeholder="+62 85786476296"
            required
            error={errors?.whatsapp?.message}
            {...register('whatsapp', { 
              required: 'Nomor WhatsApp wajib diisi',
              pattern: {
                value: /^(\+62|62|0)[0-9]{9,13}$/,
                message: 'Format nomor WhatsApp tidak valid'
              }
            })}
          />

          <Input
            label="Nama Perusahaan"
            type="text"
            placeholder="PT. Nama Perusahaan"
            error={errors?.company?.message}
            {...register('company')}
          />
        </div>

        <Select
          label="Jenis Proyek"
          placeholder="Pilih jenis proyek yang Anda butuhkan"
          options={projectTypes}
          required
          error={errors?.projectType?.message}
          {...register('projectType', { required: 'Jenis proyek wajib dipilih' })}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Select
            label="Estimasi Budget"
            placeholder="Pilih range budget"
            options={budgetRanges}
            required
            error={errors?.budget?.message}
            {...register('budget', { required: 'Budget wajib dipilih' })}
          />

          <Select
            label="Timeline Proyek"
            placeholder="Kapan proyek harus selesai?"
            options={timelineOptions}
            required
            error={errors?.timeline?.message}
            {...register('timeline', { required: 'Timeline wajib dipilih' })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-foreground mb-2">
            Deskripsi Proyek <span className="text-destructive">*</span>
          </label>
          <textarea
            rows={5}
            placeholder="Ceritakan detail proyek Anda, fitur yang diinginkan, referensi website, target audience, dll."
            className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent resize-none"
            {...register('description', { 
              required: 'Deskripsi proyek wajib diisi',
              minLength: { value: 50, message: 'Deskripsi minimal 50 karakter' }
            })}
          />
          {errors?.description && (
            <p className="mt-1 text-sm text-destructive">{errors?.description?.message}</p>
          )}
        </div>

        <div className="flex items-start space-x-3">
          <input
            type="checkbox"
            id="agreement"
            className="mt-1 w-4 h-4 text-accent bg-input border-border rounded focus:ring-accent focus:ring-2"
            {...register('agreement', { required: 'Anda harus menyetujui syarat dan ketentuan' })}
          />
          <div className="flex-1">
            <label htmlFor="agreement" className="text-sm text-foreground cursor-pointer">
              Saya setuju dengan{' '}
              <span className="text-accent hover:underline">syarat dan ketentuan</span>{' '}
              serta{' '}
              <span className="text-accent hover:underline">kebijakan privasi</span>
            </label>
            {errors?.agreement && (
              <p className="mt-1 text-sm text-destructive">{errors?.agreement?.message}</p>
            )}
          </div>
        </div>

        <Button
          type="submit"
          variant="default"
          size="lg"
          fullWidth
          loading={isSubmitting}
          className="gradient-button"
        >
          <Icon name="Send" size={20} className="mr-2" />
          {isSubmitting ? 'Mengirim Pesan...' : 'Kirim Pesan'}
        </Button>
      </form>
      <div className="mt-6 pt-6 border-t border-border/30">
        <div className="flex items-center justify-center space-x-4 text-sm text-text-secondary">
          <div className="flex items-center space-x-2">
            <Icon name="Shield" size={16} />
            <span>Data Aman</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="Clock" size={16} />
            <span>Respons 2-4 Jam</span>
          </div>
          <div className="flex items-center space-x-2">
            <Icon name="CheckCircle" size={16} />
            <span>Konsultasi Gratis</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;