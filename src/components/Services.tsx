import { HiCommandLine, HiChartBarSquare, HiCodeBracket } from "react-icons/hi2";

export function Services() {
  const experience = [
    {
      title: "Senior Software Engineer",
      company: "Keap",
      period: "August 2023 - August 2025",
      description:"Owned the transition of core legacy services into a modern event-driven architecture using AWS, significantly improving system decoupling and reliability. Designed and maintained high-traffic REST APIs that powered CRM automation for thousands of small businesses. Optimized complex SQL queries and database schemas to handle rapid data growth while cutting down on latency.",
      icon: <HiCodeBracket className="h-12 w-12" />,
      technologies: ["Python", "Django", "FastAPI", "RabbitMQ", "Celery", "Docker", "PostgreSQL", "TDD", "Microservice"],
    },
    {
      title: "Senior Software Engineer",
      company: "MST Solutions",
      period: "March 2022 - May 2023",
      description:
        "Architected and delivered custom microservices solutions for enterprise clients, focusing on scalability and seamless AWS deployments. Implemented GraphQL layers to unify data from multiple backend sources, making it much easier for front-end teams to consume complex datasets. Led technical discovery sessions with stakeholders to translate business needs into robust technical designs.",
      icon: <HiChartBarSquare className="h-12 w-12" />,
      technologies: ["ERP", "Advanced Excel", "VBA", "Process Management", "Automation", "Reports"],
    },
    {
      title: "Senior Software Engineer",
      company: "Microchip Technology",
      period: "January 2020 - November 2021",
      description:
        "Built out scalable cloud-native services on AWS to support global manufacturing and supply chain operations. Streamlined internal workflows by designing and implementing developer-friendly RESTful services and automated CI/CD pipelines. Managed large-scale NoSQL databases, ensuring high availability and data integrity across distributed systems.",
      icon: <HiCommandLine className="h-12 w-12" />,
      technologies: ["Scrum", "Kanban", "TDD", "Pytest", "CI/CD", "Git Flow", "DevOps", "GitHub Actions"],
    },
    {
      title: "Software Engineer",
      company: "American Express",
      period: "January 2017 - October 2019",
      description:
        "Developed secure, high-performance financial services within a Microservices environment, adhering to strict fintech compliance standards. Migrated mission-critical legacy modules to an Event-Driven model, reducing processing times for real-time transaction data. Collaborated closely with cross-functional teams to integrate complex GraphQL APIs for improved mobile and web experiences.",
      icon: <HiCommandLine className="h-12 w-12" />,
      technologies: [],
    },
    {
      title: "Software Engineer",
      company: "Axon",
      period: "January 2014 - December 2016",
      description:
        "Developed backend systems supporting Axon's public-safety software ecosystem.Designed microservice-based APIs for data processing, media storage, and device integration.Improved backend scalability and reduced service errors through performance tuning.Implemented automated testing pipelines, increasing release stability.",
      icon: <HiCommandLine className="h-12 w-12" />,
      technologies: [],
    },

    {
      title: "Software Engineer",
      company: "Carvana",
      period: "January 2011 - August 2013",
      description:
        "Part of the early engineering team that built out the core e-commerce engine, focusing on scalable REST services for vehicle transactions. Designed relational database schemas from the ground up to support a rapidly expanding inventory and customer base. Helped establish initial engineering best practices and assisted in the early-stage adoption of cloud infrastructure.",
      icon: <HiCommandLine className="h-12 w-12" />,
      technologies: [],
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
