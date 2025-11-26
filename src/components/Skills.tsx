import { HiAcademicCap, HiServer, HiCircleStack, HiCog } from "react-icons/hi2";

export function Skills() {
  const educations = [
    {
      name: "Arizona State University",
      institution: "Bachelor of Computer Science",
      status: "Completed",
      startDate: "2016",
      endDate: "2020",
    },
    {
      name: "Chandler Gilbert Community College",
      institution: "Associate of Science",
      status: "Completed",
      startDate: "2014",
      endDate: "2016",
    },
  ];

  const skillCategories = [
    {
      title: "Back-End Core",
      icon: <HiServer className="h-6 w-6" />,
      color: "blue",
      skills: [
        { name: "Python", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg", level: 90 },
        { name: "Django", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg", level: 85 },
        { name: "FastAPI", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg", level: 80 },
        { name: "REST APIs", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg", level: 85 },
      ]
    },
    {
      title: "Courier & ETL",
      icon: <HiCog className="h-6 w-6" />,
      color: "green",
      skills: [
        { name: "RabbitMQ", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rabbitmq/rabbitmq-original.svg", level: 75 },
        { name: "Celery", icon: "https://docs.celeryq.dev/en/stable/_static/celery_512.png", level: 80 },
        { name: "Pandas", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg", level: 85 },
      ]
    },
    {
      title: "Database",
      icon: <HiCircleStack className="h-6 w-6" />,
      color: "purple",
      skills: [
        { name: "PostgreSQL", icon: "https://www.postgresql.org/media/img/about/press/elephant.png", level: 80 },
        { name: "SQLite", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg", level: 70 },
      ]
    },
    {
      title: "DevOps & Tools",
      icon: <HiCog className="h-6 w-6" />,
      color: "orange",
      skills: [
        { name: "Docker", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg", level: 80 },
        { name: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg", level: 85 },
        { name: "Linux", icon: "https://upload.wikimedia.org/wikipedia/commons/3/35/Tux.svg", level: 75 },
        { name: "Pytest", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytest/pytest-original.svg", level: 75 },
      ]
    },
  ];
  const getGradientClasses = (color: string) => {
    const gradients = {
      blue: "from-indigo-500 to-blue-500 text-white",
      green: "from-emerald-500 to-green-600 text-white", 
      purple: "from-violet-500 to-indigo-500 text-white",
      orange: "from-blue-500 to-violet-500 text-white"
    };
    return gradients[color as keyof typeof gradients] || "from-gray-500 to-gray-600 text-white";
  };

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/5 to-transparent"></div>
      </div>
      <div className="absolute top-20 right-10 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto max-w-7xl px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-lg border border-white/20">
            <HiAcademicCap className="h-4 w-4 text-indigo-400" />
            <span className="text-sm font-medium text-gray-300 uppercase tracking-wider">Training and Skills</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent block">
              Expertise
            </span>
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-blue-400 bg-clip-text text-transparent block">
              Technique
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Combining{' '}
            <span className="font-semibold text-indigo-400 whitespace-nowrap">
              solid academic training
            </span>{' '}
            with practical experience in{' '}
            <span className="inline-block px-2 py-1 bg-gradient-to-r from-indigo-500/20 to-violet-500/20 border border-indigo-400/30 rounded-md font-bold text-indigo-300 whitespace-nowrap">
              modern technologies
            </span>{' '}
            Back - end development. Specializing in{' '}
            <span className="font-semibold text-violet-400 whitespace-nowrap">
              scalable architectures and robust APIs
            </span>.
          </p>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {/* Education Card */}
          <div className="xl:col-span-1">
            <div className="group relative h-full">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-violet-500 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative bg-gray-800/90 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 shadow-xl h-full">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-xl flex items-center justify-center">
                    <HiAcademicCap className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Training
                  </h3>
                </div>
                {educations.map((education) => (
                  <div key={education.name} className="relative">
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-indigo-500 to-violet-600 rounded-full"></div>
                    <div className="pl-6 pb-6">
                      <div className="absolute left-0 top-2 w-3 h-3 bg-white border-2 border-indigo-500 rounded-full transform -translate-x-1"></div>
                      <h4 className="font-bold text-white text-lg leading-tight mb-2">{education.name}</h4>
                      <p className="text-indigo-400 font-semibold mb-1">{education.institution}</p>
                      <p className="text-gray-400 text-sm">
                        {education.startDate} - {education.endDate}
                      </p>
                      <div className={`inline-flex items-center gap-1 mt-2 px-2 py-1 rounded-full text-xs font-medium ${
                        education.status === 'Cursando' 
                          ? 'bg-indigo-500/20 border border-indigo-400/30 text-indigo-300' 
                          : 'bg-green-500/20 border border-green-400/30 text-green-300'
                      }`}>
                        <div className={`w-2 h-2 rounded-full ${
                          education.status === 'Cursando' 
                            ? 'bg-indigo-400' 
                            : 'bg-green-400'
                        }`}></div>
                        {education.status}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Categories */}
          <div className="xl:col-span-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skillCategories.map((category, index) => (
                <div 
                  key={category.title}
                  className={`group relative animate-on-scroll animate-scale-in stagger-${index + 1}`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-violet-500 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-500 animate-glow-pulse"></div>
                  <div className="relative bg-gray-800/90 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover-glow hover-scale">
                    <div className="flex items-center gap-4 mb-6">
                      <div className="relative">
                        <div className={`w-14 h-14 bg-gradient-to-br ${getGradientClasses(category.color)} rounded-xl flex items-center justify-center shadow-lg`}>
                          {category.icon}
                        </div>
                        <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-gray-800"></div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white">{category.title}</h4>
                        <p className="text-sm text-gray-400">{category.skills.length} technologies</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div 
                          key={skill.name} 
                          className="group/skill relative"
                          style={{ animationDelay: `${(index * 200) + (skillIndex * 100)}ms` }}
                        >
                          <div className="flex items-center justify-between mb-2">
                            <div className="flex items-center gap-3">
                              <div className="w-8 h-8 bg-gray-700 rounded-lg flex items-center justify-center group-hover/skill:bg-gray-600 transition-colors">
                                <img
                                  src={skill.icon}
                                  alt={skill.name}
                                  className="h-5 w-5 flex-shrink-0"
                                  onError={(e) => {
                                    const target = e.target as HTMLImageElement;
                                    target.style.display = 'none';
                                    const parent = target.parentElement;
                                    if (parent && !parent.querySelector('.fallback-icon')) {
                                      const fallback = document.createElement('div');
                                      fallback.className = 'fallback-icon w-5 h-5 bg-gradient-to-br from-indigo-500 to-violet-500 rounded flex items-center justify-center text-white text-xs font-bold';
                                      fallback.textContent = skill.name.substring(0, 2).toUpperCase();
                                      parent.appendChild(fallback);
                                    }
                                  }}
                                />
                              </div>
                              <span className="font-medium text-gray-300 group-hover/skill:text-white transition-colors whitespace-nowrap">{skill.name}</span>
                            </div>
                            <div className="flex items-center gap-3">
                              <div className="w-20 h-2 bg-gray-700 rounded-full overflow-hidden">
                                <div
                                  className={`h-full bg-gradient-to-r ${getGradientClasses(category.color)} rounded-full transition-all duration-1000 ease-out`}
                                  style={{ 
                                    width: `${skill.level}%`,
                                    animationDelay: `${(index * 200) + (skillIndex * 100) + 500}ms`
                                  }}
                                ></div>
                              </div>
                              <span className="text-sm font-semibold text-gray-400 w-10">{skill.level}%</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
