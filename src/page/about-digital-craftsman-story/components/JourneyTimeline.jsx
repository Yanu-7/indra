import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '../../../components/AppIcon';

const JourneyTimeline = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const timelineData = [
    {
      year: "2025",
      title: "Awal Perjalanan",
      subtitle: "Siswa Teknik Otomotif",
      description: `Memulai perjalanan coding dengan HTML, CSS, dan JavaScript dasar. Terpesona dengan kemampuan mengubah ide menjadi realitas digital melalui kode.`,
      icon: "GraduationCap",
      technologies: ["HTML", "CSS", "JavaScript"],
      achievement: "Website pertama untuk tugas kuliah"
    },
    {
      year: "2026",
      title: "Eksplorasi Framework",
      subtitle: "Freelancer Pemula",
      description: `Mempelajari React dan Node.js. Mengambil proyek freelance pertama untuk toko online lokal. Memahami pentingnya user experience dalam development.`,
      icon: "Code",
      technologies: ["React", "Node.js", "MongoDB"],
      achievement: "5 proyek freelance berhasil diselesaikan"
    },
    {
      year: "2027",
      title: "Spesialisasi Frontend",
      subtitle: "Junior Developer",
      description: `Bergabung dengan startup teknologi sebagai frontend developer. Fokus pada React ecosystem dan modern development practices. Belajar tentang scalable architecture.`,
      icon: "Laptop",
      technologies: ["React", "TypeScript", "Tailwind CSS"],
      achievement: "Kontribusi pada aplikasi dengan 10K+ users"
    },
    {
      year: "2028",
      title: "Full-Stack Mastery",
      subtitle: "Senior Developer",
      description: `Mengembangkan keahlian full-stack dengan Next.js dan backend technologies. Memimpin tim kecil dalam pengembangan aplikasi enterprise.`,
      icon: "Layers",
      technologies: ["Next.js", "PostgreSQL", "AWS"],
      achievement: "Lead developer untuk 3 proyek besar"
    },
    {
      year: "2029",
      title: "Business Partnership",
      subtitle: "Technical Consultant",
      description: `Memulai konsultasi teknologi untuk UKM dan startup. Fokus pada transformasi digital dan solusi bisnis yang scalable dan cost-effective.`,
      icon: "Briefcase",
      technologies: ["Consulting", "Architecture", "Strategy"],
      achievement: "Membantu 20+ bisnis dalam transformasi digital"
    },
    {
      year: "2030",
      title: "Digital Craftsman",
      subtitle: "Independent Developer & Consultant",
      description: `Meluncurkan brand 'Digital Craftsman' dengan filosofi mengubah kode menjadi seni dan website menjadi pengalaman bisnis yang transformatif.`,
      icon: "Crown",
      technologies: ["Innovation", "Leadership", "Mentoring"],
      achievement: "Portfolio 50+ proyek sukses"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-primary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="gradient-text">Perjalanan</span> Transformasi
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Dari mahasiswa yang penasaran hingga menjadi mitra transformasi digital untuk bisnis Indonesia
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent via-brand-purple to-accent transform lg:-translate-x-1/2"></div>

          {/* Timeline Items */}
          <div className="space-y-12">
            {timelineData?.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                onMouseEnter={() => setActiveIndex(index)}
              >
                {/* Timeline Node */}
                <div className="absolute left-8 lg:left-1/2 transform lg:-translate-x-1/2 -translate-y-1/2 top-1/2">
                  <div className={`w-16 h-16 rounded-full border-4 flex items-center justify-center transition-all duration-300 ${
                    activeIndex === index 
                      ? 'bg-gradient-to-r from-accent to-brand-purple border-accent shadow-lg scale-110' 
                      : 'bg-card border-border hover:border-accent'
                  }`}>
                    <Icon 
                      name={item?.icon} 
                      size={24} 
                      className={activeIndex === index ? 'text-white' : 'text-accent'} 
                    />
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ml-24 lg:ml-0 ${
                  index % 2 === 0 ? 'lg:mr-auto lg:pr-16' : 'lg:ml-auto lg:pl-16'
                }`}>
                  <div className={`bg-card/80 backdrop-blur-sm border border-border/50 rounded-xl p-6 hover:shadow-xl transition-all duration-300 ${
                    activeIndex === index ? 'shadow-xl border-accent/30' : ''
                  }`}>
                    {/* Year Badge */}
                    <div className="inline-flex items-center px-3 py-1 bg-gradient-to-r from-accent/20 to-brand-purple/20 text-accent rounded-full text-sm font-semibold mb-4">
                      {item?.year}
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-2xl font-bold text-foreground mb-2">{item?.title}</h3>
                    <h4 className="text-lg text-accent font-semibold mb-4">{item?.subtitle}</h4>

                    {/* Description */}
                    <p className="text-text-secondary mb-6 leading-relaxed">{item?.description}</p>

                    {/* Technologies */}
                    <div className="mb-4">
                      <h5 className="text-sm font-semibold text-foreground mb-2">Teknologi Utama:</h5>
                      <div className="flex flex-wrap gap-2">
                        {item?.technologies?.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-3 py-1 bg-muted text-text-secondary text-sm rounded-full border border-border/50"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievement */}
                    <div className="flex items-center space-x-2 text-sm">
                      <Icon name="Trophy" size={16} className="text-accent" />
                      <span className="text-accent font-medium">{item?.achievement}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Current Status */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-accent/10 to-brand-purple/10 rounded-2xl p-8 border border-accent/20">
            <Icon name="Zap" size={48} className="text-accent mx-auto mb-4" />
            <h3 className="text-2xl font-bold gradient-text mb-4">Saat Ini</h3>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              Terus berinovasi dan membantu bisnis Indonesia berkembang melalui solusi digital yang powerful, 
              scalable, dan user-friendly. Setiap proyek adalah kesempatan untuk menciptakan impact yang meaningful.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JourneyTimeline;