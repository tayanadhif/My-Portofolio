import { useEffect, useState } from 'react';

export default function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-white border-t border-slate-200 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-slate-600" data-testid="copyright">
              © <span data-testid="current-year">{currentYear}</span> Nadhif Aydin Adinandra. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-6" data-testid="footer-navigation">
            <button 
              onClick={() => scrollToSection('home')} 
              className="text-slate-600 hover:text-primary-600 transition-colors duration-200"
              data-testid="footer-nav-home"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('about')} 
              className="text-slate-600 hover:text-primary-600 transition-colors duration-200"
              data-testid="footer-nav-about"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="text-slate-600 hover:text-primary-600 transition-colors duration-200"
              data-testid="footer-nav-projects"
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="text-slate-600 hover:text-primary-600 transition-colors duration-200"
              data-testid="footer-nav-contact"
            >
              Contact
            </button>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-slate-200 text-center">
          <p className="text-sm text-slate-500" data-testid="footer-tagline">
            Built with passion for creativity and technology. 
            <i className="fas fa-heart text-red-500 mx-1"></i>
            Designed for modern web experiences.
          </p>
        </div>
      </div>
    </footer>
  );
}
