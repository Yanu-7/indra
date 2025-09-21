import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const TestimonialSection = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Budi Santoso",
      position: "CEO",
      company: "PT Maju Bersama",
      service: "Website Bisnis Premium",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content: `Website yang dibuat sangat profesional dan sesuai dengan kebutuhan bisnis kami. Tim sangat responsif dan memberikan solusi terbaik. ROI kami meningkat 150% dalam 6 bulan pertama setelah website launch.`,
      results: {
        roi: "150%",
        traffic: "300%",
        conversion: "85%"
      },
      projectValue: "IDR 35,000,000"
    },
    {
      id: 2,
      name: "Sari Dewi",
      position: "Founder",
      company: "Batik Nusantara",
      service: "Toko Online Profesional",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content: `Toko online kami sekarang jauh lebih modern dan mudah digunakan. Penjualan online meningkat drastis dan customer feedback sangat positif. Sistem inventory dan payment gateway bekerja dengan sempurna.`,
      results: {
        sales: "400%",
        orders: "250%",
        retention: "70%"
      },
      projectValue: "IDR 65,000,000"
    },
    {
      id: 3,
      name: "Ahmad Rahman",
      position: "Director",
      company: "Tech Solutions Indonesia",
      service: "Aplikasi Web Kustom",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      rating: 5,
      content: `Aplikasi web custom yang dibuat sangat sesuai dengan workflow bisnis kami. Fitur-fitur yang dikembangkan membantu mengotomatisasi proses bisnis dan meningkatkan efisiensi tim secara signifikan.`,
      results: {
        efficiency: "200%",
        cost_saving: "60%",
        productivity: "180%"
      },
      projectValue: "IDR 125,000,000"
    }
  ];

  const formatPrice = (price) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    })?.format(parseInt(price?.replace(/[^\d]/g, '')));
  };

  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials?.length);
  };

  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials?.length) % testimonials?.length);
  };

  const currentTestimonial = testimonials?.[activeTestimonial];

  return (
    <div className="bg-card rounded-xl border border-border/50 p-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-foreground mb-4">Cerita Sukses Klien</h2>
        <p className="text-text-secondary max-w-2xl mx-auto">
          Dengarkan langsung dari klien kami tentang bagaimana solusi digital yang kami berikan mengubah bisnis mereka.
        </p>
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="relative">
          {/* Main Testimonial */}
          <div className="bg-muted/30 rounded-xl p-8 border border-border/30">
            <div className="flex flex-col lg:flex-row items-start space-y-6 lg:space-y-0 lg:space-x-8">
              {/* Client Info */}
              <div className="flex-shrink-0 text-center lg:text-left">
                <div className="relative inline-block">
                  <Image
                    src={currentTestimonial?.avatar}
                    alt={currentTestimonial?.name}
                    className="w-20 h-20 rounded-full object-cover border-4 border-accent/20"
                  />
                  <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-accent to-brand-purple rounded-full p-2">
                    <Icon name="Quote" size={16} className="text-white" />
                  </div>
                </div>
                
                <div className="mt-4">
                  <h3 className="text-lg font-bold text-foreground">{currentTestimonial?.name}</h3>
                  <p className="text-sm text-text-secondary">{currentTestimonial?.position}</p>
                  <p className="text-sm font-medium text-accent">{currentTestimonial?.company}</p>
                  
                  {/* Rating */}
                  <div className="flex justify-center lg:justify-start space-x-1 mt-2">
                    {[...Array(currentTestimonial?.rating)]?.map((_, i) => (
                      <Icon key={i} name="Star" size={16} className="text-warning fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="flex-1">
                <div className="mb-4">
                  <span className="inline-block bg-accent/10 text-accent px-3 py-1 rounded-full text-xs font-medium">
                    {currentTestimonial?.service}
                  </span>
                </div>
                
                <blockquote className="text-foreground leading-relaxed mb-6">
                  "{currentTestimonial?.content}"
                </blockquote>

                {/* Results */}
                <div className="grid grid-cols-3 gap-4 mb-4">
                  {Object.entries(currentTestimonial?.results)?.map(([key, value]) => (
                    <div key={key} className="text-center p-3 bg-background/50 rounded-lg border border-border/30">
                      <div className="text-xl font-bold gradient-text">+{value}</div>
                      <div className="text-xs text-text-secondary capitalize">
                        {key?.replace('_', ' ')}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm text-text-secondary">
                  <span>Project Value: <span className="font-semibold text-accent">{formatPrice(currentTestimonial?.projectValue)}</span></span>
                  <span>Verified Client ✓</span>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-card border border-border/50 rounded-full flex items-center justify-center hover:bg-accent hover:text-white smooth-transition"
          >
            <Icon name="ChevronLeft" size={20} />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-card border border-border/50 rounded-full flex items-center justify-center hover:bg-accent hover:text-white smooth-transition"
          >
            <Icon name="ChevronRight" size={20} />
          </button>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials?.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`w-3 h-3 rounded-full smooth-transition ${
                activeTestimonial === index
                  ? 'bg-gradient-to-r from-accent to-brand-purple' :'bg-border hover:bg-surface'
              }`}
            />
          ))}
        </div>

        {/* All Testimonials Preview */}
        <div className="grid md:grid-cols-3 gap-4 mt-12">
          {testimonials?.map((testimonial, index) => (
            <div
              key={testimonial?.id}
              onClick={() => setActiveTestimonial(index)}
              className={`cursor-pointer p-4 rounded-lg border smooth-transition ${
                activeTestimonial === index
                  ? 'border-accent/50 bg-accent/5' :'border-border/30 hover:border-border/50'
              }`}
            >
              <div className="flex items-center space-x-3 mb-3">
                <Image
                  src={testimonial?.avatar}
                  alt={testimonial?.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h4 className="text-sm font-medium text-foreground">{testimonial?.name}</h4>
                  <p className="text-xs text-text-secondary">{testimonial?.company}</p>
                </div>
              </div>
              <p className="text-xs text-text-secondary line-clamp-3">
                {testimonial?.content}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialSection;