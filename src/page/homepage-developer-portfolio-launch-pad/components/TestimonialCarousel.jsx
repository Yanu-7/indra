import React, { useState, useEffect } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'Budi Santoso',
      position: 'CEO',
      company: 'TechStart Indonesia',
      companyLogo: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop&crop=center',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      content: `Website e-commerce yang dibangun benar-benar mengubah bisnis kami. Dalam 3 bulan pertama, penjualan online meningkat 250% dan customer engagement naik drastis. Tim development sangat profesional dan responsif terhadap setiap feedback.`,
      rating: 5,
      projectType: 'E-Commerce Platform',
      results: {
        metric: 'Peningkatan Penjualan',
        value: '250%',
        period: '3 bulan'
      }
    },
    {
      id: 2,
      name: 'Sari Dewi',
      position: 'Marketing Director',
      company: 'Digital Solutions Co',
      companyLogo: 'https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=100&h=100&fit=crop&crop=center',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      content: `Aplikasi web yang dikembangkan tidak hanya memenuhi semua requirement kami, tetapi juga memberikan user experience yang luar biasa. Load time yang cepat dan interface yang intuitif membuat produktivitas tim meningkat signifikan.`,
      rating: 5,
      projectType: 'Web Application',
      results: {
        metric: 'Peningkatan Produktivitas',
        value: '180%',
        period: '2 bulan'
      }
    },
    {
      id: 3,
      name: 'Ahmad Rahman',
      position: 'Founder',
      company: 'StartupHub Jakarta',
      companyLogo: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=100&h=100&fit=crop&crop=center',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      content: `Sebagai startup, kami butuh website yang bisa scale dengan cepat. Solusi yang diberikan tidak hanya memenuhi kebutuhan saat ini, tetapi juga future-proof. Support dan maintenance yang diberikan juga sangat memuaskan.`,
      rating: 5,
      projectType: 'Startup Website',
      results: {
        metric: 'User Acquisition',
        value: '400%',
        period: '6 bulan'
      }
    },
    {
      id: 4,
      name: 'Lisa Permata',
      position: 'Operations Manager',
      company: 'RetailMax Indonesia',
      companyLogo: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=100&h=100&fit=crop&crop=center',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      content: `Sistem inventory management yang dibangun benar-benar mengoptimalkan operasional kami. Real-time tracking dan automated reporting menghemat waktu tim hingga 70%. ROI yang didapat jauh melebihi ekspektasi.`,
      rating: 5,
      projectType: 'Inventory System',
      results: {
        metric: 'Efisiensi Operasional',
        value: '70%',
        period: '1 bulan'
      }
    }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials?.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials?.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const nextSlide = () => {
    setCurrentIndex(currentIndex === testimonials?.length - 1 ? 0 : currentIndex + 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevSlide = () => {
    setCurrentIndex(currentIndex === 0 ? testimonials?.length - 1 : currentIndex - 1);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentTestimonial = testimonials?.[currentIndex];

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-slate-900/30 to-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Cerita Sukses Klien
          </h2>
          <p className="text-lg text-text-secondary max-w-2xl mx-auto">
            Testimoni nyata dari klien yang telah merasakan transformasi digital bersama kami
          </p>
        </div>

        <div className="relative">
          {/* Main Testimonial Card */}
          <div className="bg-card/50 backdrop-blur-lg border border-border/50 rounded-3xl p-8 md:p-12 mb-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* Client Info */}
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start space-x-4 mb-6">
                  <Image
                    src={currentTestimonial?.avatar}
                    alt={currentTestimonial?.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-accent/30"
                  />
                  <Image
                    src={currentTestimonial?.companyLogo}
                    alt={currentTestimonial?.company}
                    className="w-12 h-12 rounded-lg object-cover"
                  />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-1">
                  {currentTestimonial?.name}
                </h3>
                <p className="text-text-secondary mb-2">
                  {currentTestimonial?.position}
                </p>
                <p className="text-accent font-semibold mb-4">
                  {currentTestimonial?.company}
                </p>

                {/* Rating */}
                <div className="flex justify-center lg:justify-start space-x-1 mb-4">
                  {[...Array(currentTestimonial?.rating)]?.map((_, i) => (
                    <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Project Type */}
                <div className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                  {currentTestimonial?.projectType}
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="lg:col-span-2">
                <div className="relative">
                  <Icon name="Quote" size={40} className="text-accent/20 absolute -top-4 -left-4" />
                  <blockquote className="text-lg md:text-xl text-foreground leading-relaxed italic pl-8">
                    "{currentTestimonial?.content}"
                  </blockquote>
                </div>

                {/* Results Metrics */}
                <div className="mt-8 bg-muted/30 rounded-2xl p-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold gradient-text mb-2">
                      {currentTestimonial?.results?.value}
                    </div>
                    <div className="text-sm text-text-secondary mb-1">
                      {currentTestimonial?.results?.metric}
                    </div>
                    <div className="text-xs text-text-secondary">
                      dalam {currentTestimonial?.results?.period}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between">
            {/* Previous Button */}
            <button
              onClick={prevSlide}
              className="w-12 h-12 rounded-full bg-card/50 backdrop-blur-lg border border-border/50 flex items-center justify-center hover:bg-card/70 transition-all duration-300 hover:scale-110"
            >
              <Icon name="ChevronLeft" size={20} className="text-foreground" />
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials?.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-accent scale-125' :'bg-muted hover:bg-accent/50'
                  }`}
                />
              ))}
            </div>

            {/* Next Button */}
            <button
              onClick={nextSlide}
              className="w-12 h-12 rounded-full bg-card/50 backdrop-blur-lg border border-border/50 flex items-center justify-center hover:bg-card/70 transition-all duration-300 hover:scale-110"
            >
              <Icon name="ChevronRight" size={20} className="text-foreground" />
            </button>
          </div>

          {/* Auto-play Indicator */}
          <div className="mt-6 text-center">
            <div className="inline-flex items-center space-x-2 text-xs text-text-secondary">
              <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-success animate-pulse' : 'bg-muted'}`}></div>
              <span>{isAutoPlaying ? 'Auto-playing' : 'Paused'}</span>
            </div>
          </div>
        </div>

        {/* Client Logos */}
        <div className="mt-16 text-center">
          <p className="text-sm text-text-secondary mb-8">Dipercaya oleh perusahaan terkemuka</p>
          <div className="flex flex-wrap items-center justify-center space-x-8 opacity-50">
            {testimonials?.map((testimonial) => (
              <Image
                key={testimonial?.id}
                src={testimonial?.companyLogo}
                alt={testimonial?.company}
                className="w-16 h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;