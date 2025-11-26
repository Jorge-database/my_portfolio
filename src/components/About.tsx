export function About() {

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/5 to-transparent"></div>
      </div>
      <div className="absolute top-0 left-0 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute top-0 right-0 w-72 h-72 bg-violet-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-2000"></div>

      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 shadow-lg border border-white/20">
            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-gray-300 uppercase tracking-wider">ABOUT ME</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent block">
              Developer
            </span>
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-blue-400 bg-clip-text text-transparent block">
              Back-End
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Combining{' '}
            <span className="font-semibold text-indigo-400 whitespace-nowrap">
              6 years of experience
            </span>{' '}
            robust backend systems that are secure.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Profile Card */}
          <div className="relative group">
            <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-violet-500 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <div className="relative bg-gray-800/90 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center gap-6 mb-8">
                <div className="relative">
                  <div className="w-28 h-28 rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 p-1">
                    <div className="w-full h-full rounded-full bg-[url('https://media.licdn.com/dms/image/v2/D4D03AQH8H8RNEGocpg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1726151882711?e=1761782400&v=beta&t=LfG2J8lXslINxbInMCk-mBp9kJvhsOAunfhdrscIw0c')] bg-cover bg-center"></div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 flex h-8 w-8">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex h-8 w-8 rounded-full bg-green-500 border-3 border-white shadow-lg items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </span>
                  </div>
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white break-words">
                    <span className="block sm:inline">Jorge Barney</span>
                  </h3>
                  <p className="text-indigo-400 font-semibold text-lg">Backend Developer</p>
                  <p className="text-gray-400 flex items-center gap-2 flex-wrap">
                    <span className="w-2 h-2 bg-indigo-400 rounded-full flex-shrink-0"></span>
                    <span className="whitespace-nowrap">Chandler, AZ</span>
                  </p>
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-3 bg-gradient-to-r from-indigo-500/20 to-violet-500/20 border border-indigo-400/30 rounded-lg hover:bg-gradient-to-r hover:from-indigo-500/30 hover:to-violet-500/30 transition-all duration-300">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">N</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-300">Phone Number</p>
                    <a href="https://api.whatsapp.com/send?phone=12398490415" target="_blank" className="text-green-400 hover:text-green-300 transition-colors">
                      +1 (239) 849 0415
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-3 bg-gradient-to-r from-violet-500/20 to-blue-500/20 border border-violet-400/30 rounded-lg hover:bg-gradient-to-r hover:from-violet-500/30 hover:to-blue-500/30 transition-all duration-300">
                  <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">@</span>
                  </div>
                  <div>
                    <p className="font-medium text-gray-300">Email</p>
                    <a href="mailto:jbchime2025@gmail.com" className="text-indigo-400 hover:text-indigo-300 transition-colors break-all">
                      jbchime2025@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Professional Story */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                Jorge Barney
              </h3>
              <div className="space-y-4 text-lg leading-relaxed">
                <p className="text-gray-300">
                  <span className="font-semibold text-indigo-400 whitespace-nowrap">
                    Backend Developer
                  </span>{' '}
                  in Python, Django, FastAPI, with a degree in Computer Science from Arizona State University (2020).
                </p>
                <p className="text-gray-300">
                  My unique trajectory combines{' '}
                  <span className="inline-block px-2 py-1 bg-gradient-to-r from-indigo-500/20 to-violet-500/20 border border-indigo-400/30 rounded-md font-bold text-indigo-300 whitespace-nowrap">
                    5 years of experience
                  </span>{' '}
                  In analysis and processes in the financial area with solid original projects since September 2020.
                </p>
                <p className="text-gray-300">
                  Focused on{' '}
                  <span className="font-semibold text-violet-400 whitespace-nowrap">
                    microservices architectures
                  </span>,{' '}
                  asynchronous messaging, and containerization, applying analytical insights to create scalable and efficient solutions.
                </p>
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative bg-gray-800/90 backdrop-blur-sm border border-gray-700/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-3xl font-bold text-indigo-400 mb-2">5+</div>
                  <div className="font-semibold text-gray-300">Years</div>
                  <div className="text-sm text-gray-400">Analytical Experience</div>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-violet-500 to-indigo-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative bg-gray-800/90 backdrop-blur-sm border border-gray-700/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-3xl font-bold text-violet-400 mb-2">10+</div>
                  <div className="font-semibold text-gray-300">Projects</div>
                  <div className="text-sm text-gray-400">Complete Authorial Works</div>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative bg-gray-800/90 backdrop-blur-sm border border-gray-700/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-3xl font-bold text-blue-400 mb-2">2020</div>
                  <div className="font-semibold text-gray-300">Training</div>
                  <div className="text-sm text-gray-400">Computer Science</div>
                </div>
              </div>

              <div className="group relative">
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-violet-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative bg-gray-800/90 backdrop-blur-sm border border-gray-700/50 p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <div className="text-3xl font-bold text-indigo-400 mb-2">90%</div>
                  <div className="font-semibold text-gray-300">Node.js & Python</div>
                  <div className="text-sm text-gray-400">Proficiency Level</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
