import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../components/ui/Header';
import HeroSection from './components/HeroSection';
import JourneyTimeline from './components/JourneyTimeline';
import SkillsConstellation from './components/SkillsConstellation';
import PhilosophyShowcase from './components/PhilosophyShowcase';
import SocialProofSection from './components/SocialProofSection';
import MissionStatement from './components/MissionStatement';

const AboutDigitalCraftsmanStory = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>About - Digital Craftsman Story | Indra Saebudi</title>
        <meta 
          name="description" 
          content="Perjalanan dari penggemar kode menjadi mitra transformasi digital. Pelajari filosofi Digital Craftsman, skills constellation, dan komitmen untuk membantu bisnis Indonesia berkembang melalui solusi teknologi inovatif." 
        />
        <meta name="keywords" content="digital craftsman, developer story, web development indonesia, react developer, full stack developer, teknologi bisnis" />
        <meta property="og:title" content="About - Digital Craftsman Story | Indra Saebudi" />
        <meta property="og:description" content="Perjalanan dari penggemar kode menjadi mitra transformasi digital untuk bisnis Indonesia" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/about-digital-craftsman-story" />
      </Helmet>

      <div className="min-h-screen bg-background text-foreground">
        <Header />
        
        {/* Hero Section */}
        <HeroSection />
        
        {/* Journey Timeline */}
        <JourneyTimeline />
        
        {/* Skills Constellation */}
        <SkillsConstellation />
        
        {/* Philosophy Showcase */}
        <PhilosophyShowcase />
        
        {/* Social Proof Section */}
        <SocialProofSection />
        
        {/* Mission Statement */}
        <MissionStatement />
      </div>
    </>
  );
};

export default AboutDigitalCraftsmanStory;