export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" data-testid="about-title">About Me</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto" data-testid="about-subtitle">
            Learn more about my journey, passion, and the skills I bring to every project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">My Journey</h3>
              <p className="text-slate-600 mb-6 leading-relaxed" data-testid="text-journey">
                As a Computer Science student, I've discovered my passion lies at the intersection of 
                technology and creativity. My journey began with curiosity about how games are made, 
                which led me to explore both the technical and creative aspects of game development.
              </p>
              
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Content Creation</h3>
              <p className="text-slate-600 mb-6 leading-relaxed" data-testid="text-content-creation">
                Through my "Bang Toon" YouTube channel, I've built a community of over 10,000 subscribers 
                by creating engaging Roblox content. This experience has taught me valuable skills in 
                video production, audience engagement, and digital marketing.
              </p>
              
              <h3 className="text-2xl font-semibold text-slate-900 mb-4">Future Goals</h3>
              <p className="text-slate-600 leading-relaxed" data-testid="text-future-goals">
                I'm committed to continuous learning and growth in both game development and content creation. 
                My goal is to create innovative gaming experiences that bring joy to players worldwide.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="bg-slate-50 p-6 rounded-xl" data-testid="card-quick-facts">
              <h4 className="font-semibold text-slate-900 mb-3">Quick Facts</h4>
              <ul className="space-y-2 text-slate-600">
                <li className="flex items-center">
                  <i className="fas fa-graduation-cap text-primary-600 mr-3"></i>
                  Computer Science Student
                </li>
                <li className="flex items-center">
                  <i className="fas fa-gamepad text-primary-600 mr-3"></i>
                  Game Development Enthusiast
                </li>
                <li className="flex items-center">
                  <i className="fas fa-video text-primary-600 mr-3"></i>
                  Content Creator (10K+ subscribers)
                </li>
                <li className="flex items-center">
                  <i className="fas fa-code text-primary-600 mr-3"></i>
                  Software Development
                </li>
              </ul>
            </div>
            
            <div className="bg-primary-50 p-6 rounded-xl" data-testid="card-interests">
              <h4 className="font-semibold text-slate-900 mb-3">Interests</h4>
              <div className="flex flex-wrap gap-2">
                <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">Game Design</span>
                <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">Video Editing</span>
                <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">Roblox</span>
                <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">YouTube</span>
                <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full text-sm">Programming</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
