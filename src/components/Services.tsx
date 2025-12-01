import { HiCommandLine, HiChartBarSquare, HiCodeBracket } from "react-icons/hi2";

export function Services() {
  const experience = [
    {
      title: "Senior Back-End Developer",
      company: "Keap",
      period: "September 2023 - August 2025",
      description:"Leading backend development for Keap's CRM and automation platform.Architected microservice-base system's using Noe.js and PostgreSQL to improve scalability and reliability.Spear headed API performance optimization an data pipeline automation, enhancing system throughput and uptime. Contributed to transitioning legacy systems into a modern, containerized environment with CI/CD integration.",
      icon: <HiCodeBracket className="h-12 w-12" />,
      technologies: ["Python", "Django", "FastAPI", "RabbitMQ", "Celery", "Docker", "PostgreSQL", "TDD", "Microservice"],
    },
    {
      title: "Backend Developer",
      company: "MST Solutions",
      period: "January 2022 - August 2023",
      description:
        "Designed and implemented RESTful and GraphQL APIs for enterprise-level Salesforce integrations. Focused on data modeling, process automation, and secure data synchronization between distributed systems. Collaborated with frontend teams to ensure high-performance backend architecture and maintainable service layers.",
      icon: <HiChartBarSquare className="h-12 w-12" />,
      technologies: ["ERP", "Advanced Excel", "VBA", "Process Management", "Automation", "Reports"],
    },
    {
      title: "Junior Backend Developer",
      company: "Microchip Technology",
      period: "January 2020 - December 2024",
      description:
        "Focused on developing and maintaining backend logic for embedded and IoT-based systems. Worked closely with firmware engineers to optimize data handling, API integration, and real-time communication between microcontrollers and cloud services. Gained a solid understanding of hardware-software interoperability and system-level data efficiency.",
      icon: <HiCommandLine className="h-12 w-12" />,
      technologies: ["Scrum", "Kanban", "TDD", "Pytest", "CI/CD", "Git Flow", "DevOps", "GitHub Actions"],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/5 to-transparent"></div>
      </div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-lg border border-white/20">
            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-300 uppercase tracking-wider">My Journey</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent block">
              Experience
            </span>
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-blue-400 bg-clip-text text-transparent block">
              Profissional
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A unique career path combining{' '}
            <span className="font-semibold text-indigo-400">
              a solid background in Computer Science
            </span>,{' '}
            robust original projects and{' '}
            <span className="inline-block px-2 py-1 bg-gradient-to-r from-indigo-500/20 to-violet-500/20 border border-indigo-400/30 rounded-md font-bold text-indigo-300 whitespace-nowrap">
              5 years of analytical experience
            </span>{' '}
            in the financial sector.
          </p>
        </div>

        <div className="space-y-12">
          {experience.map((exp, index) => (
            <div key={exp.title} className="space-y-8">
              <div className="space-y-6">
                <h3 className="text-3xl font-bold text-white">
                  {exp.title}
                </h3>
                <div className="space-y-4 text-lg leading-relaxed">
                  <p className="text-gray-300 flex flex-wrap items-center gap-2">
                    <span className="font-semibold text-indigo-400">{exp.company}</span>
                    <span className="hidden sm:inline">•</span>
                    <span className="px-2 py-1 bg-gradient-to-r from-indigo-500/20 to-violet-500/20 border border-indigo-400/30 rounded-md font-bold text-indigo-300 whitespace-nowrap">
                      {exp.period}
                    </span>
                  </p>
                  <p className="text-gray-300">
                    {exp.description.split('.').slice(0, 2).join('.')}. 
                    {index === 0 && (
                      <span className="font-semibold text-violet-400"> Modern and scalable architectures</span>
                    )}
                    {index === 1 && (
                      <span className="font-semibold text-violet-400"> Strategic analytical vision</span>
                    )}
                    {index === 2 && (
                      <span className="font-semibold text-violet-400"> Solid foundation in computing</span>
                    )}
                    {exp.description.split('.').slice(2).join('.')}.
                  </p>
                  <div className="flex flex-wrap gap-3 mt-6">
                    {exp.technologies.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-xs text-gray-300 hover:bg-white/10 hover-scale hover-glow transition-all duration-300 animate-bounce-in stagger-${techIndex + 1}`}
                        style={{ animationDelay: `${index * 200 + techIndex * 100}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {index < experience.length - 1 && (
                <div className="w-full h-px bg-gradient-to-r from-transparent via-indigo-400/30 to-transparent"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
