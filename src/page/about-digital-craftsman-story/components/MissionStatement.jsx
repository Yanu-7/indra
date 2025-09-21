import React from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';
import Button from '../../../components/ui/Button';

const MissionStatement = () => {
  const values = [
    {
      icon: 'Target',
      title: 'Excellence',
      description: 'Berkomitmen untuk memberikan kualitas terbaik dalam setiap baris kode dan setiap interaksi dengan klien.',
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: 'Users',
      title: 'Collaboration',
      description: 'Membangun partnership jangka panjang dengan klien melalui komunikasi yang transparan dan kolaboratif.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: 'Zap',
      title: 'Innovation',
      description: 'Selalu mengeksplorasi teknologi terbaru untuk memberikan solusi yang cutting-edge dan future-proof.',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: 'Heart',
      title: 'Impact',
      description: 'Fokus pada dampak nyata yang dapat dirasakan oleh bisnis klien dan end-users mereka.',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: 'BookOpen',
      title: 'Learning',
      description: 'Continuous learning dan knowledge sharing untuk tetap relevan di industri yang terus berkembang.',
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: 'Shield',
      title: 'Integrity',
      description: 'Menjaga kepercayaan klien dengan transparansi, kejujuran, dan komitmen terhadap deadline.',
      color: 'from-indigo-500 to-blue-600'
    }
  ];

  const commitments = [
    {
      title: 'Untuk Bisnis Indonesia',
      description: 'Membantu UKM dan startup Indonesia berkembang melalui transformasi digital yang terjangkau dan efektif.',
      icon: 'Flag',
      stats: '50+ bisnis lokal telah bertransformasi'
    },
    {
      title: 'Untuk Komunitas Developer',
      description: 'Berbagi pengetahuan dan pengalaman melalui mentoring, artikel, dan open source contributions.',
      icon: 'Code',
      stats: '100+ developer telah terbantu'
    },
    {
      title: 'Untuk Inovasi Teknologi',
      description: 'Terus mengeksplorasi dan mengadopsi teknologi terbaru untuk memberikan solusi yang terdepan.',
      icon: 'Rocket',
      stats: '15+ teknologi baru dikuasai setiap tahun'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-accent/5 via-transparent to-brand-purple/5"></div>
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl"></div>
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
            <span className="gradient-text">Mission</span> & Values
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Komitmen dan nilai-nilai yang memandu setiap keputusan dan tindakan dalam perjalanan 
            membangun solusi digital yang bermakna
          </p>
        </motion.div>

        {/* Mission Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="bg-gradient-to-r from-accent/10 to-brand-purple/10 rounded-3xl p-8 lg:p-12 border border-accent/20 text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-accent to-brand-purple rounded-full flex items-center justify-center mx-auto mb-8">
              <Icon name="Compass" size={40} color="white" />
            </div>
            <h3 className="text-3xl lg:text-4xl font-bold gradient-text mb-6">Mission Statement</h3>
            <p className="text-xl lg:text-2xl text-foreground leading-relaxed max-w-4xl mx-auto mb-8">
              "Memberdayakan bisnis Indonesia melalui solusi digital yang inovatif, scalable, dan user-centric. 
              Mengubah setiap tantangan teknologi menjadi peluang pertumbuhan yang berkelanjutan."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="default" 
                className="gradient-button px-8 py-4"
                iconName="ArrowRight"
                iconPosition="right"
              >
                Mulai Proyek Bersama
              </Button>
              <Button 
                variant="outline" 
                className="border-accent/30 text-accent hover:bg-accent/10 px-8 py-4"
                iconName="Calendar"
                iconPosition="left"
              >
                Konsultasi Gratis
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Core Values */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="gradient-text">Core Values</span>
            </h3>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Nilai-nilai fundamental yang menjadi fondasi dalam setiap aspek pekerjaan dan interaksi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values?.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:border-accent/30 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full">
                  <div className={`w-16 h-16 bg-gradient-to-r ${value?.color} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon name={value?.icon} size={28} color="white" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-4">{value?.title}</h4>
                  <p className="text-text-secondary leading-relaxed">{value?.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Commitments */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              <span className="gradient-text">Komitmen</span> Jangka Panjang
            </h3>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Dedikasi berkelanjutan untuk memberikan dampak positif bagi ekosistem teknologi Indonesia
            </p>
          </div>

          <div className="space-y-8">
            {commitments?.map((commitment, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="lg:w-1/2">
                  <div className="bg-card/80 backdrop-blur-sm border border-border/50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center space-x-4 mb-6">
                      <div className="w-14 h-14 bg-gradient-to-r from-accent to-brand-purple rounded-xl flex items-center justify-center">
                        <Icon name={commitment?.icon} size={24} color="white" />
                      </div>
                      <h4 className="text-2xl font-bold text-foreground">{commitment?.title}</h4>
                    </div>
                    <p className="text-text-secondary text-lg leading-relaxed mb-6">
                      {commitment?.description}
                    </p>
                    <div className="flex items-center space-x-2 text-accent font-semibold">
                      <Icon name="TrendingUp" size={20} />
                      <span>{commitment?.stats}</span>
                    </div>
                  </div>
                </div>
                <div className="lg:w-1/2">
                  <div className="relative">
                    <div className="w-full h-64 bg-gradient-to-br from-muted/30 to-card/30 rounded-2xl border border-border/30 flex items-center justify-center">
                      <div className="text-center">
                        <Icon name={commitment?.icon} size={80} className="text-accent/30 mx-auto mb-4" />
                        <p className="text-text-secondary">Visual representation</p>
                      </div>
                    </div>
                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-accent to-brand-purple rounded-full opacity-60"></div>
                    <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-brand-purple to-accent rounded-full opacity-40"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-card/80 to-muted/80 backdrop-blur-sm border border-border/50 rounded-3xl p-8 lg:p-12">
            <Icon name="Handshake" size={64} className="text-accent mx-auto mb-6" />
            <h3 className="text-3xl lg:text-4xl font-bold gradient-text mb-6">
              Mari Berkolaborasi
            </h3>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
              Jika Anda mencari partner teknologi yang tidak hanya memahami code, tetapi juga memahami bisnis, 
              mari kita diskusikan bagaimana saya dapat membantu mewujudkan visi digital Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="default" 
                className="gradient-button px-8 py-4 text-lg"
                iconName="MessageCircle"
                iconPosition="left"
              >
                Mulai Diskusi
              </Button>
              <Button 
                variant="outline" 
                className="border-accent/30 text-accent hover:bg-accent/10 px-8 py-4 text-lg"
                iconName="Download"
                iconPosition="left"
              >
                Download Portfolio
              </Button>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-text-secondary">
              <div className="flex items-center space-x-2">
                <Icon name="Clock" size={16} />
                <span>Response dalam 24 jam</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Shield" size={16} />
                <span>Konsultasi gratis</span>
              </div>
              <div className="flex items-center space-x-2">
                <Icon name="Award" size={16} />
                <span>Garansi kepuasan</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionStatement;