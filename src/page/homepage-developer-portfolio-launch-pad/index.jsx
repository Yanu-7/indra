import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import SkillsConstellation from './components/SkillsConstellation';
import ServicesPreview from './components/ServicesPreview';
import SuccessMetrics from './components/SuccessMetrics';
import TestimonialCarousel from './components/TestimonialCarousel';
import CallToAction from './components/CallToAction';

const Homepage = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Cleanup
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Indra Saebudi - Digital Craftsman | Website Development Indonesia</title>
        <meta name="description" content="Saya adalah Digital Craftsman yang mengubah visi bisnis Anda menjadi pengalaman digital yang mengkonversi. Spesialis React, Node.js, dan teknologi modern untuk solusi web yang menghasilkan ROI terukur." />
        <meta name="keywords" content="web developer indonesia, react developer, website development, digital solutions, e-commerce development, web application, jakarta developer" />
        <meta property="og:title" content="Indra Saebudi - Digital Craftsman" />
        <meta property="og:description" content="Kode yang Mengkonversi, Website yang Bekerja Keras untuk Bisnis Anda. Konsultasi gratis tersedia." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://indra-saebudi.com" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Indra Saebudi - Digital Craftsman" />
        <meta name="twitter:description" content="Transformasi digital bisnis Anda dengan solusi web modern yang terbukti meningkatkan revenue." />
        <link rel="canonical" href="https://indra-saebudi.com/homepage-developer-portfolio-launch-pad" />
      </Helmet>
      <div className="min-h-screen bg-background text-foreground">
        <Header />
        
        <main>
          {/* Hero Section with Animated Background */}
          <HeroSection />
          
          {/* Interactive Skills Constellation */}
          <SkillsConstellation />
          
          {/* Services Preview with Glowing Cards */}
          <ServicesPreview />
          
          {/* Animated Success Metrics */}
          <SuccessMetrics />
          
          {/* Client Testimonial Carousel */}
          <TestimonialCarousel />
          
          {/* Call to Action Section */}
          <CallToAction />
        </main>

        {/* Footer */}
        <footer className="bg-slate-900 border-t border-border/50 py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              {/* Brand */}
              <div className="md:col-span-2">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-accent to-brand-purple rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-lg">D</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold gradient-text">Indra Saebudi</h3>
                    <p className="text-xs text-text-secondary"><span>Developer Web</span></p>
                  </div>
                </div>
                <p className="text-text-secondary mb-4 max-w-md">
                  Mengubah visi bisnis Anda menjadi pengalaman digital yang mengkonversi. 
                  Spesialis dalam React, Node.js, dan teknologi modern.
                </p>
                <div className="flex space-x-4">
                  <a href="#" className="text-text-secondary hover:text-accent transition-colors duration-300">
                    <span className="sr-only">GitHub</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-text-secondary hover:text-accent transition-colors duration-300">
                    <span className="sr-only">LinkedIn</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </a>
                  <a href="#" className="text-text-secondary hover:text-accent transition-colors duration-300">
                    <span className="sr-only">Twitter</span>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </a>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-foreground font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-sm">
                  <li><a href="/about-digital-craftsman-story" className="text-text-secondary hover:text-accent transition-colors duration-300">About</a></li>
                  <li><a href="/portfolio-interactive-project-universe" className="text-text-secondary hover:text-accent transition-colors duration-300">Portfolio</a></li>
                  <li><a href="/services-comprehensive-digital-solutions-hub" className="text-text-secondary hover:text-accent transition-colors duration-300">Services</a></li>
                  <li><a href="/contact-multi-channel-communication-hub" className="text-text-secondary hover:text-accent transition-colors duration-300">Contact</a></li>
                </ul>
              </div>

              {/* Services */}
              <div>
                <h4 className="text-foreground font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-sm">
                  <li><span className="text-text-secondary">Website Development</span></li>
                  <li><span className="text-text-secondary">E-Commerce Solutions</span></li>
                  <li><span className="text-text-secondary">Web Applications</span></li>
                  <li><span className="text-text-secondary">Maintenance & Support</span></li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-border/30 pt-8 flex flex-col md:flex-row items-center justify-between">
              <p className="text-text-secondary text-sm mb-4 md:mb-0">
                © {new Date()?.getFullYear()} Indra Saebudi. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-text-secondary hover:text-accent transition-colors duration-300">Privacy Policy</a>
                <a href="#" className="text-text-secondary hover:text-accent transition-colors duration-300">Terms of Service</a>
                <a href="#" className="text-text-secondary hover:text-accent transition-colors duration-300">Sitemap</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Homepage;