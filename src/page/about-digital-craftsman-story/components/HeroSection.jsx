import React from 'react';
import { motion } from 'framer-motion';
import Image from '../../../components/AppImage';
import Icon from '../../../components/AppIcon';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-background via-primary to-card overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-accent/5 to-brand-purple/5 rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            {/* Left Side - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="flex items-center space-x-3"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-accent to-brand-purple rounded-lg flex items-center justify-center">
                    <Icon name="User" size={24} color="white" />
                  </div>
                  <span className="text-accent font-semibold text-lg">Tentang Saya</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-4xl lg:text-6xl font-bold leading-tight"
                >
                  <span className="gradient-text">Digital Craftsman</span>
                  <br />
                  <span className="text-foreground">Philosophy</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                  className="text-xl text-text-secondary leading-relaxed max-w-lg"
                >
                  Dari penggemar kode menjadi mitra transformasi bisnis. Setiap baris kode yang saya tulis adalah langkah menuju pengalaman digital yang luar biasa.
                </motion.p>
              </div>

              {/* Stats */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="grid grid-cols-3 gap-6"
              >
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">5+</div>
                  <div className="text-sm text-text-secondary">Tahun Pengalaman</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">100+</div>
                  <div className="text-sm text-text-secondary">Proyek Selesai</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold gradient-text">50+</div>
                  <div className="text-sm text-text-secondary">Klien Puas</div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <button className="px-8 py-4 bg-gradient-to-r from-accent to-brand-purple text-white font-semibold rounded-lg hover:shadow-lg hover:-translate-y-0.5 smooth-transition">
                  <Icon name="Download" size={20} className="inline mr-2" />
                  Download CV
                </button>
                <button className="px-8 py-4 border border-accent/30 text-accent hover:bg-accent/10 font-semibold rounded-lg smooth-transition">
                  <Icon name="Calendar" size={20} className="inline mr-2" />
                  Jadwalkan Konsultasi
                </button>
              </motion.div>
            </motion.div>

            {/* Right Side - Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <div className="relative">
                {/* Glowing Background */}
                <div className="absolute inset-0 bg-gradient-to-r from-accent/20 to-brand-purple/20 rounded-2xl blur-2xl transform rotate-6"></div>
                
                {/* Main Image Container */}
                <div className="relative bg-gradient-to-br from-card to-muted rounded-2xl p-8 border border-border/50 backdrop-blur-sm">
                  <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-accent/10 to-brand-purple/10">
                    <Image
                       src="https://i.imgur.com/T2NWyKD.jpg"
                      alt="Developer Portrait"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  {/* Floating Elements */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-accent to-brand-purple rounded-full flex items-center justify-center shadow-lg">
                    <Icon name="Code2" size={24} color="white" />
                  </div>
                  
                  <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-card border border-border/50 rounded-full flex items-center justify-center shadow-lg">
                    <Icon name="Zap" size={28} className="text-accent" />
                  </div>
                </div>

                {/* Floating Code Snippet */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2, duration: 0.6 }}
                  className="absolute -top-8 -left-8 bg-card/90 backdrop-blur-sm border border-border/50 rounded-lg p-4 shadow-xl"
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  <code className="text-sm text-accent font-mono">
                    const passion = "code";<br />
                    const mission = "transform";<br />
                    const result = "success";
                  </code>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm text-text-secondary">Scroll untuk melihat lebih</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-accent/50 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-accent rounded-full mt-2"
            ></motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;