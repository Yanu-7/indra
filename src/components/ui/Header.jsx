import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Icon from '../AppIcon';
import Button from './Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

const navigationItems = [
   { name: 'Home', path: '/', icon: 'Home' },
  { name: 'About', path: '/about', icon: 'User' },
   { name: 'Portfolio', path: '/portfolio', icon: 'Briefcase' },
   { name: 'Services', path: '/services', icon: 'Settings' },
   { name: 'Contact', path: '/contact', icon: 'Mail' }
];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActivePath = (path) => {
    return location?.pathname === path;
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-lg border-b border-border/50 shadow-lg' 
          : 'bg-transparent'
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-16 px-6 lg:px-8">
          {/* Logo */}
         <Link 
  to="/" 
  className="flex items-center space-x-3 group"
  onClick={closeMenu}
          >
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-br from-accent to-brand-purple rounded-lg flex items-center justify-center group-hover:scale-110 smooth-transition">
                <Icon name="Code2" size={20} color="white" strokeWidth={2.5} />
              </div>
              <div className="absolute inset-0 bg-gradient-to-br from-accent to-brand-purple rounded-lg opacity-0 group-hover:opacity-20 blur-xl smooth-transition"></div>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold gradient-text">Indra saebudi</h1>
              <p className="text-xs text-text-secondary -mt-1">Developer Web</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <Link
                key={item?.path}
                to={item?.path}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg smooth-transition group ${
                  isActivePath(item?.path)
                    ? 'bg-accent/10 text-accent border border-accent/20' :'text-foreground hover:bg-muted hover:text-accent'
                }`}
              >
                <Icon 
                  name={item?.icon} 
                  size={16} 
                  className={`${
                    isActivePath(item?.path) 
                      ? 'text-accent' :'text-text-secondary group-hover:text-accent'
                  } smooth-transition`}
                />
                <span className="font-medium text-sm">{item?.name}</span>
              </Link>
            ))}
          </nav>

          {/* CTA Button - Desktop */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button 
              variant="outline" 
              size="sm"
              className="border-accent/30 text-accent hover:bg-accent/10"
            >
              <Icon name="Calendar" size={16} className="mr-2" />
              Konsultasi Gratis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 rounded-lg hover:bg-muted smooth-transition"
            aria-label="Toggle menu"
          >
            <Icon 
              name={isMenuOpen ? "X" : "Menu"} 
              size={24} 
              className="text-foreground"
            />
          </button>
        </div>

        {/* Mobile Navigation */}
        <div 
          className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen 
              ? 'max-h-96 opacity-100' :'max-h-0 opacity-0'
          }`}
        >
          <div className="bg-card/95 backdrop-blur-lg border-t border-border/50 px-6 py-4">
            <nav className="space-y-2">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.path}
                  to={item?.path}
                  onClick={closeMenu}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg smooth-transition ${
                    isActivePath(item?.path)
                      ? 'bg-accent/10 text-accent border border-accent/20' :'text-foreground hover:bg-muted hover:text-accent'
                  }`}
                >
                  <Icon 
                    name={item?.icon} 
                    size={18} 
                    className={`${
                      isActivePath(item?.path) 
                        ? 'text-accent' :'text-text-secondary'
                    }`}
                  />
                  <span className="font-medium">{item?.name}</span>
                </Link>
              ))}
            </nav>
            
            {/* Mobile CTA */}
            <div className="mt-4 pt-4 border-t border-border/30">
              <Button 
                variant="default" 
                fullWidth
                className="gradient-button"
              >
                <Icon name="Calendar" size={16} className="mr-2" />
                Konsultasi Gratis
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;