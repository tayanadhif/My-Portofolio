import bangToonImage from "@assets/Bang Toon New_1755824795027.jpg";

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" data-testid="projects-title">Featured Projects</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto" data-testid="projects-subtitle">
            A showcase of my best work in content creation and development projects.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Main Project: Bang Toon YouTube Channel */}
          <div className="lg:col-span-2" data-testid="card-main-project">
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative">
                  <img 
                    src={bangToonImage} 
                    alt="Bang Toon YouTube Channel - Roblox Gaming Content" 
                    className="w-full h-full object-cover"
                    data-testid="img-project-main"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      <i className="fab fa-youtube mr-1"></i>
                      Featured Project
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-3" data-testid="title-main-project">"Bang Toon" YouTube Channel</h3>
                  <p className="text-slate-600 mb-4" data-testid="text-main-project-description">
                    A successful YouTube channel focused on Roblox gameplay and educational content, 
                    featuring original videos with professional production quality.
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-slate-600">
                      <i className="fas fa-users text-primary-600 mr-3"></i>
                      <span>10,000+ Subscribers</span>
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <i className="fas fa-video text-primary-600 mr-3"></i>
                      <span>100+ Original Videos</span>
                    </div>
                    <div className="flex items-center text-sm text-slate-600">
                      <i className="fas fa-calendar text-primary-600 mr-3"></i>
                      <span>2022 - Present</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs">Video Production</span>
                    <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs">CapCut</span>
                    <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs">Adobe Premiere Pro</span>
                    <span className="bg-slate-100 text-slate-700 px-3 py-1 rounded-full text-xs">SEO Optimization</span>
                  </div>
                  
                  <a 
                    href="https://www.youtube.com/@tayanadhif" 
                    target="_blank" 
                    rel="noopener" 
                    className="inline-flex items-center px-6 py-3 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 transition-colors duration-200"
                    data-testid="link-visit-channel"
                  >
                    <i className="fab fa-youtube mr-2"></i>
                    Visit Channel
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          {/* Additional Project Placeholders */}
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300" data-testid="card-future-project">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-slate-900">Game Development Project</h3>
              <span className="bg-primary-100 text-primary-800 px-2 py-1 rounded text-xs">Coming Soon</span>
            </div>
            <p className="text-slate-600 mb-4">
              An exciting game development project currently in planning phase. 
              Stay tuned for updates!
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs">Unity</span>
              <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs">C#</span>
              <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs">Game Design</span>
            </div>
            <button 
              className="text-primary-600 font-medium hover:text-primary-700 transition-colors duration-200" 
              disabled
              data-testid="button-in-development"
            >
              <i className="fas fa-clock mr-1"></i>
              In Development
            </button>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300" data-testid="card-portfolio-project">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-semibold text-slate-900">Web Development Portfolio</h3>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">Active</span>
            </div>
            <p className="text-slate-600 mb-4">
              This very portfolio website showcasing modern web development skills 
              and responsive design principles.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs">HTML/CSS</span>
              <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs">JavaScript</span>
              <span className="bg-slate-100 text-slate-700 px-2 py-1 rounded text-xs">Responsive Design</span>
            </div>
            <a 
              href="https://github.com/tayanadhif" 
              target="_blank" 
              rel="noopener" 
              className="text-primary-600 font-medium hover:text-primary-700 transition-colors duration-200"
              data-testid="link-github-portfolio"
            >
              <i className="fab fa-github mr-1"></i>
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
