import { useState } from 'react';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-slate-200 z-50 transition-all duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="text-xl font-bold gradient-text" data-testid="brand-logo">Nadhif Aydin Adinandra</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button 
                onClick={() => scrollToSection('home')} 
                className="text-slate-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                data-testid="nav-home"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('about')} 
                className="text-slate-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                data-testid="nav-about"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('projects')} 
                className="text-slate-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                data-testid="nav-projects"
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('skills')} 
                className="text-slate-600 hover:text-primary-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                data-testid="nav-skills"
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="bg-primary-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-700 transition-colors duration-200"
                data-testid="nav-contact"
              >
                Contact
              </button>
            </div>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-slate-600 hover:text-slate-900 focus:outline-none focus:text-slate-900 transition-colors duration-150"
              data-testid="button-mobile-menu"
            >
              <i className="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden bg-white border-t border-slate-200 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
        data-testid="mobile-menu"
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <button 
            onClick={() => scrollToSection('home')} 
            className="text-slate-600 hover:text-primary-600 block px-3 py-2 text-base font-medium transition-colors duration-200"
            data-testid="mobile-nav-home"
          >
            Home
          </button>
          <button 
            onClick={() => scrollToSection('about')} 
            className="text-slate-600 hover:text-primary-600 block px-3 py-2 text-base font-medium transition-colors duration-200"
            data-testid="mobile-nav-about"
          >
            About
          </button>
          <button 
            onClick={() => scrollToSection('projects')} 
            className="text-slate-600 hover:text-primary-600 block px-3 py-2 text-base font-medium transition-colors duration-200"
            data-testid="mobile-nav-projects"
          >
            Projects
          </button>
          <button 
            onClick={() => scrollToSection('skills')} 
            className="text-slate-600 hover:text-primary-600 block px-3 py-2 text-base font-medium transition-colors duration-200"
            data-testid="mobile-nav-skills"
          >
            Skills
          </button>
          <button 
            onClick={() => scrollToSection('contact')} 
            className="text-slate-600 hover:text-primary-600 block px-3 py-2 text-base font-medium transition-colors duration-200"
            data-testid="mobile-nav-contact"
          >
            Contact
          </button>
        </div>
      </div>
    </nav>
  );
}
