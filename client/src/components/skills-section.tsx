export default function SkillsSection() {
  const skillCategories = [
    {
      icon: "fas fa-gamepad",
      title: "Game Development",
      skills: [
        "Game Design Principles",
        "Unity Engine", 
        "Roblox Studio",
        "C# Programming"
      ]
    },
    {
      icon: "fas fa-video",
      title: "Content Creation",
      skills: [
        "Video Production",
        "Adobe Premiere Pro",
        "CapCut Editing",
        "SEO Optimization"
      ]
    },
    {
      icon: "fas fa-code",
      title: "Programming",
      skills: [
        "Computer Science Fundamentals",
        "Web Development",
        "Software Engineering",
        "Problem Solving"
      ]
    },
    {
      icon: "fas fa-palette",
      title: "Design & Creativity",
      skills: [
        "Thumbnail Design",
        "Visual Storytelling",
        "UI/UX Principles",
        "Creative Problem Solving"
      ]
    },
    {
      icon: "fas fa-chart-line",
      title: "Digital Marketing",
      skills: [
        "YouTube Analytics",
        "Community Building",
        "Content Strategy",
        "Social Media Management"
      ]
    },
    {
      icon: "fas fa-users",
      title: "Soft Skills",
      skills: [
        "Communication",
        "Project Management",
        "Team Collaboration",
        "Continuous Learning"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4" data-testid="skills-title">Skills & Expertise</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto" data-testid="skills-subtitle">
            A comprehensive overview of my technical skills and creative abilities.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
              data-testid={`skill-card-${index}`}
            >
              <div className="text-primary-600 text-3xl mb-4">
                <i className={category.icon}></i>
              </div>
              <h3 className="text-xl font-semibold text-slate-900 mb-3" data-testid={`skill-title-${index}`}>
                {category.title}
              </h3>
              <ul className="space-y-2 text-slate-600">
                {category.skills.map((skill, skillIndex) => (
                  <li key={skillIndex} className="flex items-center" data-testid={`skill-item-${index}-${skillIndex}`}>
                    <i className="fas fa-check text-green-500 mr-2 text-sm"></i>
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
