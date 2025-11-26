import { HiLightBulb, HiClock, HiChartBarSquare, HiPuzzlePiece } from "react-icons/hi2";

export function Testimonials() {
  const softSkills = [
    {
      title: "Problem Solving",
      description: "Analytical skills developed over 13 years solving complex challenges in the financial field and applying that experience to innovative technical solutions.",
      icon: <HiPuzzlePiece className="h-8 w-8 text-indigo-600" />,
    },
    {
      title: "Time Management",
      description: "Experience in managing multiple projects simultaneously, prioritizing critical tasks and meeting strict deadlines, is essential for agile development.",
      icon: <HiClock className="h-8 w-8 text-green-600" />,
    },
    {
      title: "Analytical Thinking",
      description: "Refined skills in data and process analysis, identifying patterns, optimizations, and efficient solutions for complex business problems.",
      icon: <HiChartBarSquare className="h-8 w-8 text-violet-600" />,
    },
    {
      title: "Diagnostic Analysis",
      description: "Proficiency in systematically investigating, diagnosing, and resolving technical problems, applying structured debugging and troubleshooting methodologies.",
      icon: <HiLightBulb className="h-8 w-8 text-orange-600" />,
    },
  ];

  const methodologies = [
    {
      name: "Scrum",
      description: "Experiência em desenvolvimento ágil com sprints, dailies, retrospectivas e planejamento colaborativo.",
      proficiency: 85,
    },
    {
      name: "Kanban",
      description: "Experience in managing multiple projecs simultaneoudly, prioritizin critical taks and meeting stirck deeplines, is essential for agile development.",
      proficiency: 80,
    },
    {
      name: "TDD",
      description: "Test-Driven Development with Pytest, guaranteeing code quality and coverage exceeding 90%.",
      proficiency: 75,
    },
    {
      name: "GitHub Flow",
      description: "Collaborative version control with Git, pull requests, code review, and continuous deployment.",
      proficiency: 85,
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
            <span className="text-sm font-medium text-gray-300 uppercase tracking-wider">
              Behavioral Competencies</span>
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
              Soft Skills &
            </span>
            <br />
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
              Methodologies
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Behavioral skills and technical methodologies that complement my expertise in back-end development.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Soft Skills */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <HiLightBulb className="h-6 w-6 text-indigo-400" />
              Soft Skills
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {softSkills.map((skill, index) => (
                <div
                  key={skill.title}
                  className="group relative"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-violet-500 to-blue-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                  <div className="relative bg-gray-800/90 backdrop-blur-sm border border-gray-700/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                    <div className="flex items-center gap-3 mb-3">
                      {skill.icon}
                      <h4 className="font-semibold text-white">{skill.title}</h4>
                    </div>
                    <p className="text-sm text-gray-300">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Metodologias */}
          <div>
            <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
              <HiChartBarSquare className="h-6 w-6 text-indigo-400" />
              Metodologias Ágeis
            </h3>
            <div className="space-y-4">
              {methodologies.map((methodology, index) => (
                <div
                  key={methodology.name}
                  className="group relative"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-violet-500 to-blue-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                  <div className="relative bg-gray-800/90 backdrop-blur-sm border border-gray-700/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="font-semibold text-white">{methodology.name}</h4>
                      <span className="text-sm text-indigo-400 font-semibold">{methodology.proficiency}%</span>
                    </div>
                    <p className="text-sm text-gray-300 mb-4">{methodology.description}</p>
                    <div className="w-full h-2 bg-gray-700 rounded-lg overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-indigo-500 to-violet-500 rounded-lg transition-all duration-1000"
                        style={{
                          width: `${methodology.proficiency}%`,
                          animationDelay: `${index * 150 + 500}ms`
                        }}
                      ></div>
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
