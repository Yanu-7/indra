import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const PhilosophyShowcase = () => {
  const [activePhilosophy, setActivePhilosophy] = useState(0);

  const philosophies = [
    {
      title: "Kode sebagai Seni",
      subtitle: "Code as Art",
      icon: "Palette",
      gradient: "from-pink-500 to-rose-400",
      description: `Setiap baris kode yang saya tulis adalah ekspresi kreativitas. Seperti seorang seniman yang memilih warna dan bentuk, saya memilih struktur data dan algoritma yang tidak hanya efisien, tetapi juga elegan dan mudah dipahami.`,
      principles: [
        "Clean Code Architecture",
        "Readable & Maintainable",
        "Performance Optimization",
        "Scalable Design Patterns"
      ],
      quote: "Kode yang baik adalah kode yang bercerita tentang solusi, bukan masalah.",
      example: `// Contoh: Clean Function Design
const transformUserData = (rawUser) => ({
  id: rawUser.id,
  name: rawUser.full_name,
  email: rawUser.email_address,
  isActive: rawUser.status === 'active',
  joinedAt: new Date(rawUser.created_at)
});`
    },
    {
      title: "Website sebagai Pengalaman",
      subtitle: "Website as Experience",
      icon: "Globe",
      gradient: "from-blue-500 to-cyan-400",
      description: `Website bukan hanya kumpulan halaman, tetapi perjalanan digital yang membawa pengguna dari keingintahuan hingga kepuasan. Setiap interaksi dirancang untuk menciptakan momen yang memorable dan meaningful.`,
      principles: [
        "User-Centered Design",
        "Intuitive Navigation",
        "Emotional Connection",
        "Accessibility First"
      ],
      quote: "Pengalaman yang baik dimulai dari pemahaman mendalam tentang kebutuhan pengguna.",
      example: `// Contoh: User Experience Hook
const useUserExperience = () => {
  const [loading, setLoading] = useState(false);
  const [feedback, setFeedback] = useState('');
  
  const handleAction = async (action) => {
    setLoading(true);
    try {
      await action();
      setFeedback('Berhasil! Terima kasih.');
    } catch (error) {
      setFeedback('Oops! Mari coba lagi.');
    } finally {
      setLoading(false);
    }
  };
  
  return { loading, feedback, handleAction };
};`
    },
    {
      title: "Teknologi sebagai Solusi Bisnis",
      subtitle: "Technology as Business Solution",
      icon: "TrendingUp",
      gradient: "from-green-500 to-emerald-400",
      description: `Teknologi adalah alat untuk memecahkan masalah bisnis nyata. Setiap fitur yang dikembangkan harus memiliki dampak terukur terhadap pertumbuhan bisnis, efisiensi operasional, atau kepuasan pelanggan.`,
      principles: [
        "Business Impact Focus",
        "ROI-Driven Development",
        "Scalable Solutions",
        "Data-Driven Decisions"
      ],
      quote: "Teknologi terbaik adalah yang tidak terlihat oleh pengguna, tetapi dirasakan manfaatnya.",
      example: `// Contoh: Business Logic Implementation
const calculateBusinessImpact = (metrics) => {
  const conversionRate = metrics.conversions / metrics.visitors;
  const revenueGrowth = (metrics.currentRevenue - metrics.previousRevenue) / metrics.previousRevenue;
  
  return {
    conversionImprovement: conversionRate * 100,
    revenueGrowthPercentage: revenueGrowth * 100,
    recommendation: revenueGrowth > 0.1 ? 'Scale up' : 'Optimize'
  };
};`
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/5 via-transparent to-brand-purple/5"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl"></div>
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Philosophy</span> Showcase
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Tiga pilar fundamental yang membentuk pendekatan saya dalam setiap proyek development
          </p>
        </motion.div>

        {/* Philosophy Navigation */}
        <div className="flex flex-col lg:flex-row justify-center mb-12 space-y-4 lg:space-y-0 lg:space-x-8">
          {philosophies?.map((philosophy, index) => (
            <motion.button
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              onClick={() => setActivePhilosophy(index)}
              className={`flex items-center space-x-4 px-6 py-4 rounded-xl transition-all duration-300 ${
                activePhilosophy === index
                  ? 'bg-gradient-to-r from-accent/20 to-brand-purple/20 border-2 border-accent/30 shadow-lg'
                  : 'bg-card/50 border border-border/50 hover:border-accent/30 hover:bg-card/80'
              }`}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${philosophy?.gradient} flex items-center justify-center`}>
                <Icon name={philosophy?.icon} size={24} color="white" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold text-foreground">{philosophy?.title}</h3>
                <p className="text-sm text-text-secondary">{philosophy?.subtitle}</p>
              </div>
            </motion.button>
          ))}
        </div>

        {/* Active Philosophy Content */}
        <motion.div
          key={activePhilosophy}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden shadow-2xl"
        >
          {/* Header */}
          <div className={`bg-gradient-to-r ${philosophies?.[activePhilosophy]?.gradient} p-8 text-white`}>
            <div className="flex items-center space-x-6">
              <div className="w-20 h-20 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                <Icon name={philosophies?.[activePhilosophy]?.icon} size={32} color="white" />
              </div>
              <div>
                <h3 className="text-3xl font-bold mb-2">{philosophies?.[activePhilosophy]?.title}</h3>
                <p className="text-xl opacity-90">{philosophies?.[activePhilosophy]?.subtitle}</p>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="p-8">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Description & Quote */}
              <div className="space-y-6">
                <p className="text-lg text-text-secondary leading-relaxed">
                  {philosophies?.[activePhilosophy]?.description}
                </p>

                {/* Quote */}
                <div className="bg-gradient-to-r from-accent/10 to-brand-purple/10 rounded-xl p-6 border border-accent/20">
                  <Icon name="Quote" size={24} className="text-accent mb-4" />
                  <blockquote className="text-lg font-medium text-foreground italic">
                    "{philosophies?.[activePhilosophy]?.quote}"
                  </blockquote>
                </div>

                {/* Principles */}
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-4">Prinsip Utama:</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {philosophies?.[activePhilosophy]?.principles?.map((principle, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg border border-border/30"
                      >
                        <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${philosophies?.[activePhilosophy]?.gradient}`}></div>
                        <span className="text-sm font-medium text-foreground">{principle}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Code Example */}
              <div className="space-y-6">
                <div>
                  <h4 className="text-xl font-semibold text-foreground mb-4">Implementasi Praktis:</h4>
                  <div className="bg-background rounded-xl border border-border/50 overflow-hidden">
                    {/* Code Header */}
                    <div className="flex items-center justify-between px-4 py-3 bg-muted/30 border-b border-border/30">
                      <div className="flex items-center space-x-2">
                        <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                        <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      </div>
                      <span className="text-sm text-text-secondary font-mono">example.js</span>
                    </div>
                    
                    {/* Code Content */}
                    <div className="p-4">
                      <pre className="text-sm text-accent font-mono leading-relaxed overflow-x-auto">
                        <code>{philosophies?.[activePhilosophy]?.example}</code>
                      </pre>
                    </div>
                  </div>
                </div>

                {/* Impact Metrics */}
                <div className="bg-gradient-to-br from-muted/30 to-card/30 rounded-xl p-6 border border-border/30">
                  <h4 className="text-lg font-semibold text-foreground mb-4">Dampak Implementasi:</h4>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-text-secondary">Code Quality Score</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 h-2 bg-background rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '95%' }}
                            transition={{ duration: 1, delay: 0.5 }}
                            className={`h-full bg-gradient-to-r ${philosophies?.[activePhilosophy]?.gradient}`}
                          ></motion.div>
                        </div>
                        <span className="text-foreground font-semibold">95%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-text-secondary">User Satisfaction</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 h-2 bg-background rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '92%' }}
                            transition={{ duration: 1, delay: 0.7 }}
                            className={`h-full bg-gradient-to-r ${philosophies?.[activePhilosophy]?.gradient}`}
                          ></motion.div>
                        </div>
                        <span className="text-foreground font-semibold">92%</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-text-secondary">Business Impact</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-20 h-2 bg-background rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: '88%' }}
                            transition={{ duration: 1, delay: 0.9 }}
                            className={`h-full bg-gradient-to-r ${philosophies?.[activePhilosophy]?.gradient}`}
                          ></motion.div>
                        </div>
                        <span className="text-foreground font-semibold">88%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Philosophy Integration */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-accent/10 to-brand-purple/10 rounded-2xl p-8 border border-accent/20">
            <Icon name="Zap" size={48} className="text-accent mx-auto mb-4" />
            <h3 className="text-2xl font-bold gradient-text mb-4">Integrasi Holistik</h3>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Ketiga filosofi ini tidak berdiri sendiri, tetapi saling terintegrasi dalam setiap aspek development. 
              Hasilnya adalah solusi digital yang tidak hanya berfungsi dengan baik, tetapi juga memberikan 
              dampak bisnis yang signifikan dan pengalaman pengguna yang luar biasa.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PhilosophyShowcase;