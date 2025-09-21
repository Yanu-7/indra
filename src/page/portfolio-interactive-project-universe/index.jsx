import React, { useState, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import Icon from '../../components/AppIcon';
import Button from '../../components/ui/Button';
import Header from '../../components/ui/Header';
import ProjectCard from './components/ProjectCard';
import ProjectFilter from './components/ProjectFilter';
import ProjectModal from './components/ProjectModal';
import RequestProjectModal from './components/RequestProjectModal';
import StatsSection from './components/StatsSection';

const PortfolioInteractiveProjectUniverse = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isProjectModalOpen, setIsProjectModalOpen] = useState(false);
  const [isRequestModalOpen, setIsRequestModalOpen] = useState(false);
  const [requestProject, setRequestProject] = useState(null);
  
  // Filter states
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeTechnology, setActiveTechnology] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock project data
  const projects = [
    {
      id: 1,
      title: "TokoBaju Premium E-commerce",
      category: "E-commerce",
      year: "2024",
      duration: "3 bulan",
      completionDate: "Maret 2024",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
      description: "Platform e-commerce modern untuk fashion premium dengan fitur AR try-on dan personalisasi AI.",
      fullDescription: `Platform e-commerce komprehensif yang dirancang khusus untuk brand fashion premium. Dilengkapi dengan teknologi AR untuk virtual try-on, sistem rekomendasi berbasis AI, dan integrasi payment gateway lokal dan internasional. Website ini berhasil meningkatkan konversi penjualan hingga 340% dalam 6 bulan pertama operasional.

Fitur unggulan meliputi katalog produk interaktif, sistem review dan rating, program loyalty customer, dan dashboard analytics real-time untuk monitoring performa bisnis. Desain responsive yang optimal di semua device dengan loading speed di bawah 2 detik.`,
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "AWS", "Redis", "WebRTC"],
      featured: true,
      liveUrl: "https://tokobaju-premium.com",
      githubUrl: "https://github.com/devportfolio/tokobaju-premium",
      gallery: [
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=800&h=600&fit=crop"
      ],
      metrics: {
        revenue: 2500000000,
        conversion: 340,
        performance: 98
      },
      testimonial: {
        content: "Website yang luar biasa! Penjualan kami meningkat drastis setelah launching. Tim sangat profesional dan responsif.",
        author: "Sarah Wijaya",
        position: "CEO TokoBaju Premium"
      },
      developmentProcess: [
        {
          title: "Research & Planning",
          description: "Analisis kompetitor, user research, dan perencanaan arsitektur sistem",
          duration: "2 minggu"
        },
        {
          title: "UI/UX Design",
          description: "Pembuatan wireframe, prototype, dan design system yang konsisten",
          duration: "3 minggu"
        },
        {
          title: "Frontend Development",
          description: "Implementasi React components, responsive design, dan optimasi performa",
          duration: "4 minggu"
        },
        {
          title: "Backend Development",
          description: "API development, database design, dan integrasi payment gateway",
          duration: "3 minggu"
        },
        {
          title: "Testing & Deployment",
          description: "Quality assurance, performance testing, dan deployment ke production",
          duration: "2 minggu"
        }
      ],
      technicalDetails: {
        performance: [
          { name: "Page Load Speed", value: "1.8s" },
          { name: "Lighthouse Score", value: "98/100" },
          { name: "Mobile Optimization", value: "100%" },
          { name: "SEO Score", value: "95/100" }
        ],
        features: [
          "AR Virtual Try-On Technology",
          "AI-Powered Product Recommendations",
          "Multi-Currency Payment Gateway",
          "Real-time Inventory Management",
          "Advanced Search & Filtering",
          "Customer Loyalty Program",
          "Multi-language Support",
          "Social Media Integration"
        ],
        challenges: [
          {
            problem: "Integrasi AR technology dengan performa website",
            solution: "Implementasi lazy loading dan WebGL optimization untuk menjaga performa tetap optimal"
          },
          {
            problem: "Skalabilitas sistem untuk traffic tinggi",
            solution: "Arsitektur microservices dengan load balancing dan caching strategy"
          }
        ]
      }
    },
    {
      id: 2,
      title: "InnovateCorp Company Profile",
      category: "Corporate",
      year: "2024",
      duration: "2 bulan",
      completionDate: "Februari 2024",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
      description: "Website corporate modern dengan animasi interaktif dan sistem manajemen konten yang powerful.",
      fullDescription: `Website corporate yang menggabungkan desain modern dengan fungsionalitas tinggi. Dilengkapi dengan CMS custom untuk memudahkan update konten, sistem blog terintegrasi, dan portfolio showcase yang interaktif. Website ini berhasil meningkatkan lead generation perusahaan hingga 280%.

Fitur unggulan meliputi animasi scroll yang smooth, video background yang optimal, form kontak multi-step, dan integrasi dengan CRM system. Desain yang mencerminkan profesionalitas perusahaan dengan user experience yang engaging.`,
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Vercel", "Framer Motion"],
      featured: false,
      liveUrl: "https://innovatecorp.co.id",
      githubUrl: "https://github.com/devportfolio/innovatecorp",
      gallery: [
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop"
      ],
      metrics: {
        revenue: 1800000000,
        conversion: 280,
        performance: 96
      },
      testimonial: {
        content: "Website baru kami sangat membantu dalam meningkatkan kredibilitas perusahaan. Lead yang masuk meningkat signifikan.",
        author: "Budi Santoso",
        position: "Marketing Director InnovateCorp"
      },
      developmentProcess: [
        {
          title: "Brand Analysis",
          description: "Memahami brand identity dan target audience perusahaan",
          duration: "1 minggu"
        },
        {
          title: "Content Strategy",
          description: "Perencanaan struktur konten dan SEO strategy",
          duration: "1 minggu"
        },
        {
          title: "Design & Development",
          description: "Implementasi design system dan development website",
          duration: "5 minggu"
        },
        {
          title: "CMS Integration",
          description: "Setup content management system dan training client",
          duration: "1 minggu"
        }
      ],
      technicalDetails: {
        performance: [
          { name: "Page Load Speed", value: "2.1s" },
          { name: "Lighthouse Score", value: "96/100" },
          { name: "Mobile Optimization", value: "98%" },
          { name: "SEO Score", value: "92/100" }
        ],
        features: [
          "Custom Content Management System",
          "Interactive Portfolio Showcase",
          "Multi-step Contact Forms",
          "Blog Management System",
          "Team Member Profiles",
          "Service Catalog",
          "Client Testimonials",
          "Newsletter Integration"
        ],
        challenges: [
          {
            problem: "Animasi kompleks yang tidak mengganggu performa",
            solution: "Optimasi dengan Framer Motion dan lazy loading untuk animasi"
          },
          {
            problem: "CMS yang user-friendly untuk non-technical user",
            solution: "Custom dashboard dengan drag-and-drop interface"
          }
        ]
      }
    },
    {
      id: 3,
      title: "StartupHub MVP Platform",
      category: "Startup",
      year: "2023",
      duration: "4 bulan",
      completionDate: "Desember 2023",
      image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop",
      description: "Platform MVP untuk startup dengan fitur user management, analytics dashboard, dan payment integration.",
      fullDescription: `Platform MVP yang dirancang untuk membantu startup meluncurkan produk mereka dengan cepat. Dilengkapi dengan user authentication system, analytics dashboard real-time, payment processing, dan notification system. Platform ini telah membantu 50+ startup meluncurkan produk mereka.

Fitur unggulan meliputi multi-tenant architecture, customizable dashboard, API management, dan integration dengan berbagai third-party services. Sistem yang scalable dan dapat disesuaikan dengan kebutuhan berbagai jenis startup.`,
      technologies: ["Vue.js", "Laravel", "MySQL", "Docker", "AWS", "Stripe", "Socket.io"],
      featured: true,
      liveUrl: "https://startuphub.id",
      githubUrl: "https://github.com/devportfolio/startuphub",
      gallery: [
        "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1551836022-deb4988cc6c0?w=800&h=600&fit=crop"
      ],
      metrics: {
        revenue: 3200000000,
        conversion: 420,
        performance: 94
      },
      testimonial: {
        content: "Platform ini sangat membantu kami dalam meluncurkan startup. Fitur-fiturnya lengkap dan mudah digunakan.",
        author: "Andi Pratama",
        position: "Founder TechStart"
      },
      developmentProcess: [
        {
          title: "Market Research",
          description: "Analisis kebutuhan startup dan kompetitor di pasar",
          duration: "2 minggu"
        },
        {
          title: "MVP Planning",
          description: "Perencanaan fitur minimum viable product",
          duration: "1 minggu"
        },
        {
          title: "Architecture Design",
          description: "Desain sistem yang scalable dan modular",
          duration: "2 minggu"
        },
        {
          title: "Development Phase 1",
          description: "Core features development dan user management",
          duration: "6 minggu"
        },
        {
          title: "Development Phase 2",
          description: "Advanced features dan third-party integrations",
          duration: "5 minggu"
        }
      ],
      technicalDetails: {
        performance: [
          { name: "Page Load Speed", value: "2.3s" },
          { name: "Lighthouse Score", value: "94/100" },
          { name: "Mobile Optimization", value: "96%" },
          { name: "SEO Score", value: "88/100" }
        ],
        features: [
          "Multi-tenant Architecture",
          "Real-time Analytics Dashboard",
          "User Role Management",
          "Payment Processing System",
          "API Management Console",
          "Notification System",
          "File Upload & Management",
          "Third-party Integrations"
        ],
        challenges: [
          {
            problem: "Multi-tenant data isolation dan security",
            solution: "Implementasi row-level security dan encrypted data storage"
          },
          {
            problem: "Real-time updates untuk multiple users",
            solution: "WebSocket implementation dengan Redis untuk scalability"
          }
        ]
      }
    },
    {
      id: 4,
      title: "CreativeAgency Portfolio",
      category: "Agency",
      year: "2023",
      duration: "2.5 bulan",
      completionDate: "November 2023",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
      description: "Portfolio website untuk creative agency dengan showcase interaktif dan animasi yang memukau.",
      fullDescription: `Portfolio website yang menampilkan karya-karya creative agency dengan cara yang interaktif dan engaging. Dilengkapi dengan gallery showcase yang immersive, case study detail, dan contact system yang terintegrasi. Website ini berhasil meningkatkan inquiries client hingga 250%.

Fitur unggulan meliputi interactive portfolio grid, video showcase, team profiles dengan hover effects, dan blog system untuk sharing insights. Desain yang bold dan creative sesuai dengan brand identity agency.`,
      technologies: ["React", "Gatsby", "GraphQL", "Contentful", "Netlify", "GSAP"],
      featured: false,
      liveUrl: "https://creativeagency.studio",
      githubUrl: "https://github.com/devportfolio/creative-agency",
      gallery: [
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=600&fit=crop"
      ],
      metrics: {
        revenue: 1500000000,
        conversion: 250,
        performance: 92
      },
      testimonial: {
        content: "Website portfolio kami sekarang benar-benar mencerminkan kualitas kerja tim. Client langsung terkesan!",
        author: "Maya Sari",
        position: "Creative Director"
      },
      developmentProcess: [
        {
          title: "Creative Brief",
          description: "Understanding agency\'s creative vision dan brand personality",
          duration: "1 minggu"
        },
        {
          title: "Visual Concept",
          description: "Pembuatan konsep visual dan interactive elements",
          duration: "2 minggu"
        },
        {
          title: "Development",
          description: "Implementation dengan focus pada animations dan interactions",
          duration: "6 minggu"
        },
        {
          title: "Content Integration",
          description: "Setup CMS dan migration konten existing",
          duration: "1.5 minggu"
        }
      ],
      technicalDetails: {
        performance: [
          { name: "Page Load Speed", value: "2.5s" },
          { name: "Lighthouse Score", value: "92/100" },
          { name: "Mobile Optimization", value: "94%" },
          { name: "SEO Score", value: "90/100" }
        ],
        features: [
          "Interactive Portfolio Grid",
          "Video Showcase Gallery",
          "Case Study Templates",
          "Team Member Profiles",
          "Client Testimonials Slider",
          "Blog & Insights Section",
          "Contact Form with File Upload",
          "Social Media Integration"
        ],
        challenges: [
          {
            problem: "Heavy animations yang tidak mengganggu performa",
            solution: "GSAP optimization dan progressive loading untuk animations"
          },
          {
            problem: "Portfolio showcase yang engaging tapi fast loading",
            solution: "Image optimization dan lazy loading dengan smooth transitions"
          }
        ]
      }
    },
    {
      id: 5,
      title: "FinanceApp Mobile-First Platform",
      category: "Startup",
      year: "2024",
      duration: "5 bulan",
      completionDate: "Januari 2024",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      description: "Aplikasi finansial mobile-first dengan fitur budgeting, investment tracking, dan financial planning.",
      fullDescription: `Platform finansial yang dirancang mobile-first untuk membantu users mengelola keuangan personal mereka. Dilengkapi dengan fitur budgeting otomatis, investment portfolio tracking, financial goal setting, dan AI-powered financial advice. Aplikasi ini telah membantu 10,000+ users meningkatkan literasi finansial mereka.

Fitur unggulan meliputi expense categorization otomatis, investment performance analytics, bill reminder system, dan financial health score. Keamanan tingkat bank dengan enkripsi end-to-end dan two-factor authentication.`,
      technologies: ["React Native", "Node.js", "PostgreSQL", "Redis", "AWS", "Plaid API", "Chart.js"],
      featured: true,
      liveUrl: "https://financeapp.id",
      githubUrl: "https://github.com/devportfolio/finance-app",
      gallery: [
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop"
      ],
      metrics: {
        revenue: 4500000000,
        conversion: 380,
        performance: 96
      },
      testimonial: {
        content: "Aplikasi ini benar-benar mengubah cara saya mengelola keuangan. Interface-nya intuitif dan fiturnya sangat membantu.",
        author: "Rini Kusuma",
        position: "Financial Planner"
      },
      developmentProcess: [
        {
          title: "User Research",
          description: "Survey dan interview dengan target users untuk memahami pain points",
          duration: "3 minggu"
        },
        {
          title: "Financial Analysis",
          description: "Analisis kebutuhan fitur finansial dan compliance requirements",
          duration: "2 minggu"
        },
        {
          title: "Security Planning",
          description: "Perencanaan security architecture dan compliance standards",
          duration: "2 minggu"
        },
        {
          title: "MVP Development",
          description: "Development core features dengan focus pada security",
          duration: "8 minggu"
        },
        {
          title: "Advanced Features",
          description: "Implementation AI features dan advanced analytics",
          duration: "5 minggu"
        }
      ],
      technicalDetails: {
        performance: [
          { name: "App Load Speed", value: "1.5s" },
          { name: "Performance Score", value: "96/100" },
          { name: "Security Rating", value: "A+" },
          { name: "User Satisfaction", value: "4.8/5" }
        ],
        features: [
          "Automatic Expense Categorization",
          "Investment Portfolio Tracking",
          "Financial Goal Setting",
          "AI-Powered Financial Advice",
          "Bill Reminder System",
          "Financial Health Score",
          "Bank-level Security",
          "Multi-currency Support"
        ],
        challenges: [
          {
            problem: "Bank-level security dengan user experience yang smooth",
            solution: "Biometric authentication dan seamless security checks"
          },
          {
            problem: "Real-time financial data synchronization",
            solution: "Optimized API calls dan smart caching strategy"
          }
        ]
      }
    },
    {
      id: 6,
      title: "EduTech Learning Management System",
      category: "Corporate",
      year: "2023",
      duration: "6 bulan",
      completionDate: "Oktober 2023",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
      description: "Platform pembelajaran online dengan fitur video streaming, quiz interaktif, dan progress tracking.",
      fullDescription: `Learning Management System komprehensif untuk institusi pendidikan dan corporate training. Dilengkapi dengan video streaming berkualitas tinggi, quiz dan assessment tools, progress tracking, dan certificate generation. Platform ini telah melayani 25,000+ students dan 500+ instructors.

Fitur unggulan meliputi adaptive learning paths, real-time collaboration tools, mobile learning support, dan advanced analytics untuk tracking learning outcomes. Sistem yang scalable dan dapat disesuaikan dengan berbagai kebutuhan institusi.`,
      technologies: ["Angular", "Spring Boot", "MySQL", "AWS S3", "WebRTC", "Docker", "Kubernetes"],
      featured: false,
      liveUrl: "https://edutech-lms.com",
      githubUrl: "https://github.com/devportfolio/edutech-lms",
      gallery: [
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&h=600&fit=crop"
      ],
      metrics: {
        revenue: 2800000000,
        conversion: 320,
        performance: 94
      },
      testimonial: {
        content: "Platform LMS ini sangat membantu dalam digitalisasi pembelajaran di institusi kami. Fiturnya lengkap dan mudah digunakan.",
        author: "Dr. Siti Nurhaliza",
        position: "Academic Director"
      },
      developmentProcess: [
        {
          title: "Educational Analysis",
          description: "Analisis kebutuhan pembelajaran dan pedagogi digital",
          duration: "3 minggu"
        },
        {
          title: "System Architecture",
          description: "Desain arsitektur sistem yang scalable untuk ribuan users",
          duration: "2 minggu"
        },
        {
          title: "Core Development",
          description: "Development fitur utama LMS dan user management",
          duration: "10 minggu"
        },
        {
          title: "Video & Assessment",
          description: "Implementation video streaming dan assessment tools",
          duration: "6 minggu"
        },
        {
          title: "Testing & Deployment",
          description: "Load testing dan deployment dengan high availability",
          duration: "3 minggu"
        }
      ],
      technicalDetails: {
        performance: [
          { name: "Video Load Speed", value: "2.8s" },
          { name: "System Performance", value: "94/100" },
          { name: "Concurrent Users", value: "5000+" },
          { name: "Uptime", value: "99.9%" }
        ],
        features: [
          "HD Video Streaming",
          "Interactive Quiz & Assessments",
          "Progress Tracking & Analytics",
          "Certificate Generation",
          "Discussion Forums",
          "Mobile Learning App",
          "Adaptive Learning Paths",
          "Real-time Collaboration"
        ],
        challenges: [
          {
            problem: "Video streaming untuk ribuan concurrent users",
            solution: "CDN implementation dan adaptive bitrate streaming"
          },
          {
            problem: "Real-time collaboration dan communication",
            solution: "WebRTC implementation dengan fallback options"
          }
        ]
      }
    }
  ];

  // Filter and sort logic
  const filteredAndSortedProjects = useMemo(() => {
    let filtered = projects;

    // Apply search filter
    if (searchQuery) {
      filtered = filtered?.filter(project =>
        project?.title?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        project?.description?.toLowerCase()?.includes(searchQuery?.toLowerCase()) ||
        project?.technologies?.some(tech => 
          tech?.toLowerCase()?.includes(searchQuery?.toLowerCase())
        )
      );
    }

    // Apply category filter
    if (activeCategory !== 'all') {
      filtered = filtered?.filter(project => project?.category === activeCategory);
    }

    // Apply technology filter
    if (activeTechnology !== 'all') {
      filtered = filtered?.filter(project =>
        project?.technologies?.includes(activeTechnology)
      );
    }

    // Apply sorting
    filtered?.sort((a, b) => {
      switch (sortBy) {
        case 'newest':
          return new Date(b.completionDate) - new Date(a.completionDate);
        case 'featured':
          return b?.featured - a?.featured;
        case 'revenue':
          return b?.metrics?.revenue - a?.metrics?.revenue;
        case 'performance':
          return b?.metrics?.performance - a?.metrics?.performance;
        default:
          return 0;
      }
    });

    return filtered;
  }, [projects, searchQuery, activeCategory, activeTechnology, sortBy]);

  // Generate filter options
  const categories = useMemo(() => {
    const categoryCount = projects?.reduce((acc, project) => {
      acc[project.category] = (acc?.[project?.category] || 0) + 1;
      return acc;
    }, {});

    return [
      { value: 'all', label: 'Semua Kategori', icon: 'Grid3X3', count: projects?.length },
      { value: 'E-commerce', label: 'E-commerce', icon: 'ShoppingCart', count: categoryCount?.['E-commerce'] || 0 },
      { value: 'Corporate', label: 'Corporate', icon: 'Building2', count: categoryCount?.['Corporate'] || 0 },
      { value: 'Startup', label: 'Startup', icon: 'Rocket', count: categoryCount?.['Startup'] || 0 },
      { value: 'Agency', label: 'Agency', icon: 'Palette', count: categoryCount?.['Agency'] || 0 }
    ];
  }, [projects]);

  const technologies = useMemo(() => {
    const techCount = projects?.reduce((acc, project) => {
      project?.technologies?.forEach(tech => {
        acc[tech] = (acc?.[tech] || 0) + 1;
      });
      return acc;
    }, {});

    const topTechs = Object.entries(techCount)?.sort(([,a], [,b]) => b - a)?.slice(0, 10)?.map(([tech, count]) => ({ value: tech, label: tech, count }));

    return [
      { value: 'all', label: 'Semua Teknologi', count: projects?.length },
      ...topTechs
    ];
  }, [projects]);

  const handleViewDetails = (project) => {
    setSelectedProject(project);
    setIsProjectModalOpen(true);
  };

  const handleRequestSimilar = (project) => {
    setRequestProject(project);
    setIsRequestModalOpen(true);
  };

  const handleCloseProjectModal = () => {
    setIsProjectModalOpen(false);
    setSelectedProject(null);
  };

  const handleCloseRequestModal = () => {
    setIsRequestModalOpen(false);
    setRequestProject(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Portfolio - Interactive Project Universe | Developer Web</title>
        <meta name="description" content="Jelajahi galeri proyek interaktif dengan live preview, case study detail, dan dampak bisnis nyata. Dari e-commerce hingga startup platform." />
        <meta name="keywords" content="portfolio, web development, react, e-commerce, startup, corporate website, indonesia" />
      </Helmet>
      <Header />
      <main className="pt-16">
        {/* Hero Section */}
        <section className="relative py-20 px-6 lg:px-8 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-brand-purple/5"></div>
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-brand-purple/10 rounded-full blur-3xl animate-pulse animation-delay-400"></div>
          </div>

          <div className="relative max-w-7xl mx-auto text-center">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full text-accent text-sm font-medium mb-6">
              <Icon name="Sparkles" size={16} />
              <span>Interactive Project Universe</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
              Portfolio yang <span className="gradient-text">Hidup</span>
              <br />
              dengan Dampak <span className="gradient-text">Nyata</span>
            </h1>

            <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8 leading-relaxed">
              Jelajahi galeri proyek interaktif dengan live preview, case study mendalam, 
              dan bukti dampak bisnis nyata dalam bentuk peningkatan revenue dan konversi.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                variant="default"
                size="lg"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="gradient-button"
              >
                <Icon name="Eye" size={20} className="mr-2" />
                Lihat Semua Proyek
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => setIsRequestModalOpen(true)}
                className="border-accent/30 text-accent hover:bg-accent/10"
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Konsultasi Proyek
              </Button>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <StatsSection projects={projects} />
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Filter Section */}
            <ProjectFilter
              categories={categories}
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              technologies={technologies}
              activeTechnology={activeTechnology}
              onTechnologyChange={setActiveTechnology}
              sortBy={sortBy}
              onSortChange={setSortBy}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />

            {/* Results Info */}
            <div className="flex items-center justify-between mb-8">
              <div className="text-text-secondary">
                Menampilkan <span className="text-foreground font-semibold">{filteredAndSortedProjects?.length}</span> dari <span className="text-foreground font-semibold">{projects?.length}</span> proyek
              </div>
              
              {filteredAndSortedProjects?.length === 0 && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setActiveCategory('all');
                    setActiveTechnology('all');
                    setSearchQuery('');
                  }}
                  className="text-accent hover:text-accent/80"
                >
                  <Icon name="RotateCcw" size={16} className="mr-2" />
                  Reset Filter
                </Button>
              )}
            </div>

            {/* Projects Grid */}
            {filteredAndSortedProjects?.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredAndSortedProjects?.map((project) => (
                  <ProjectCard
                    key={project?.id}
                    project={project}
                    onViewDetails={handleViewDetails}
                    onRequestSimilar={handleRequestSimilar}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-24 h-24 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Search" size={32} className="text-text-secondary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Tidak Ada Proyek Ditemukan</h3>
                <p className="text-text-secondary mb-6">
                  Coba ubah filter atau kata kunci pencarian Anda
                </p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setActiveCategory('all');
                    setActiveTechnology('all');
                    setSearchQuery('');
                  }}
                  className="border-accent/30 text-accent hover:bg-accent/10"
                >
                  <Icon name="RotateCcw" size={16} className="mr-2" />
                  Reset Semua Filter
                </Button>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 lg:px-8 bg-gradient-to-r from-accent/5 to-brand-purple/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Siap Memulai Proyek <span className="gradient-text">Impian Anda?</span>
            </h2>
            <p className="text-xl text-text-secondary mb-8">
              Mari diskusikan bagaimana kami dapat membantu mewujudkan visi digital Anda 
              dengan solusi yang tepat dan hasil yang terukur.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4">
              <Button
                variant="default"
                size="lg"
                onClick={() => setIsRequestModalOpen(true)}
                className="gradient-button"
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Mulai Konsultasi Gratis
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => window.open('https://wa.me/62885786476296', '_blank')}
                className="border-success/30 text-success hover:bg-success/10"
              >
                <Icon name="MessageCircle" size={20} className="mr-2" />
                WhatsApp Langsung
              </Button>
            </div>
          </div>
        </section>
      </main>
      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        isOpen={isProjectModalOpen}
        onClose={handleCloseProjectModal}
        onRequestSimilar={handleRequestSimilar}
      />
      <RequestProjectModal
        isOpen={isRequestModalOpen}
        onClose={handleCloseRequestModal}
        selectedProject={requestProject}
      />
    </div>
  );
};

export default PortfolioInteractiveProjectUniverse;