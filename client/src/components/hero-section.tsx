import profileImage from "@assets/jaket kuning lagi_1755824670406.jpg";

export default function HeroSection() {
  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-slate-50 to-primary-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-slide-up">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-6">
              <i className="fas fa-gamepad mr-2"></i>
              Computer Science Student
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight" data-testid="hero-title">
              Hi, I'm <span className="gradient-text">Nadhif</span>
            </h1>
            
            <p className="text-xl text-slate-600 mb-8 max-w-2xl leading-relaxed" data-testid="hero-description">
              A passionate Computer Science college student specializing in <strong>game development</strong> and <strong>content creation</strong>. I bring creativity and technical expertise to every project.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={scrollToProjects}
                className="inline-flex items-center justify-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-all duration-200 transform hover:scale-105"
                data-testid="button-view-work"
              >
                <i className="fas fa-eye mr-2"></i>
                View My Work
              </button>
              <button 
                onClick={scrollToContact}
                className="inline-flex items-center justify-center px-6 py-3 border-2 border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-600 hover:text-white transition-all duration-200"
                data-testid="button-get-in-touch"
              >
                <i className="fas fa-envelope mr-2"></i>
                Get In Touch
              </button>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center space-x-6 mt-8" data-testid="social-links">
              <a 
                href="https://www.youtube.com/@tayanadhif" 
                target="_blank" 
                rel="noopener" 
                className="text-slate-600 hover:text-red-600 transition-colors duration-200"
                data-testid="link-youtube"
              >
                <i className="fab fa-youtube text-2xl"></i>
              </a>
              <a 
                href="https://www.instagram.com/the_spectacular_nadhif_17/" 
                target="_blank" 
                rel="noopener" 
                className="text-slate-600 hover:text-pink-600 transition-colors duration-200"
                data-testid="link-instagram"
              >
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a 
                href="https://www.tiktok.com/@the_spectacular_nadhif" 
                target="_blank" 
                rel="noopener" 
                className="text-slate-600 hover:text-slate-900 transition-colors duration-200"
                data-testid="link-tiktok"
              >
                <i className="fab fa-tiktok text-2xl"></i>
              </a>
              <a 
                href="https://github.com/tayanadhif" 
                target="_blank" 
                rel="noopener" 
                className="text-slate-600 hover:text-slate-900 transition-colors duration-200"
                data-testid="link-github"
              >
                <i className="fab fa-github text-2xl"></i>
              </a>
              <a 
                href="https://www.linkedin.com/in/nadhif-aydin-adinandra-2202a137b/" 
                target="_blank" 
                rel="noopener" 
                className="text-slate-600 hover:text-blue-600 transition-colors duration-200"
                data-testid="link-linkedin"
              >
                <i className="fab fa-linkedin text-2xl"></i>
              </a>
            </div>
          </div>
          
          <div className="animate-fade-in">
            <div className="relative">
              <img 
                src={profileImage} 
                alt="Nadhif Aydin Adinandra - Professional Portrait" 
                className="rounded-2xl shadow-2xl w-full max-w-md mx-auto transform hover:scale-105 transition-transform duration-300"
                data-testid="img-hero-portrait"
              />
              <div className="absolute -bottom-4 -right-4 bg-primary-600 text-white p-4 rounded-xl shadow-lg animate-bounce-subtle">
                <i className="fas fa-code text-2xl"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
