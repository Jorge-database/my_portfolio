import { HiDownload, HiArrowRight, HiSparkles } from "react-icons/hi";
import { HiCodeBracket, HiCpuChip } from "react-icons/hi2";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/5 to-transparent animate-pulse"></div>
      </div>
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-indigo-500/8 rounded-full blur-xl animate-pulse"></div>
      <div className="absolute top-40 right-20 w-32 h-32 bg-violet-500/8 rounded-full blur-2xl animate-pulse delay-1000"></div>
      <div className="absolute bottom-20 left-1/4 w-16 h-16 bg-blue-500/8 rounded-full blur-lg animate-pulse delay-2000"></div>
      
      <div className="container mx-auto max-w-7xl px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            {/* Greeting */}
            <div className="relative flex items-center gap-4 animate-slide-right">
              <div className="flex items-center gap-3 bg-gradient-to-r from-indigo-500/20 to-violet-500/20 backdrop-blur-sm border border-indigo-400/30 px-4 py-2 rounded-full hover-glow">
                <HiSparkles className="h-5 w-5 text-indigo-400 animate-bounce-in stagger-1 animate-glow-pulse" />
                <span className="bg-gradient-to-r from-indigo-300 via-violet-300 to-blue-300 bg-clip-text text-transparent font-semibold tracking-wider uppercase text-sm animate-fade-in stagger-2 animate-gradient-shift">
                  Hello, my name is
                </span>
              </div>
              <div className="w-12 h-0.5 bg-gradient-to-r from-indigo-400 to-transparent animate-slide-right delay-300"></div>
            </div>
            
            {/* Name */}
            <h1 className="space-y-2">
              <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight animate-slide-up stagger-3">
                <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent animate-gradient-shift block">
                  Jorge Barney
                </span>
              </div>
            </h1>
            
            {/* Role */}
            <div className="flex items-center gap-4 animate-scale-in stagger-6">
              <div className="flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-violet-600 px-4 py-2 rounded-full hover-glow animate-glow-pulse">
                <HiCodeBracket className="h-4 w-4 text-white animate-bounce-in stagger-7" />
                <span className="text-white text-xs sm:text-sm font-medium whitespace-nowrap">Back-End Developer</span>
              </div>
              <div className="hidden md:flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-full hover-scale">
                <HiCpuChip className="h-4 w-4 text-indigo-400 animate-bounce-in stagger-8" />
                <span className="text-indigo-400 text-sm">Senior/high-level</span>
              </div>
            </div>
            
            {/* Description */}
            <p className="text-lg sm:text-xl text-gray-300 leading-relaxed max-w-2xl animate-slide-up delay-700">
              <span className="text-indigo-400 font-semibold animate-glow-pulse whitespace-nowrap">
                Node.js, Python and FastAPI
              </span>,{' '}
              Developer{' '}
              focused on microservices architectures and Node Express.{' '}
              <span className="text-violet-400 font-semibold animate-glow-pulse whitespace-nowrap">
                6 years of experience
              </span>{' '}
              robust backend systems that are secure. 
            </p>
            
            {/* Tech Stack Preview */}
            <div className="flex flex-wrap gap-3 animate-slide-up delay-1000">
              {['Node.js', 'Express', 'FastAPI', 'Python', 'PostreSQL', 'Docker','Redis'].map((tech, index) => (
                <span 
                  key={tech}
                  className={`px-3 py-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-xs text-gray-300 hover:bg-white/10 hover-scale hover-glow transition-all duration-300 animate-bounce-in stagger-${index + 1}`}
                  style={{ animationDelay: `${1200 + index * 100}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>
            
            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 animate-scale-in delay-1200">
              <a 
                href="#contact" 
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-indigo-500/25 transform hover:-translate-y-2 hover-glow animate-glow-pulse"
              >
                <span>Let's talk</span>
                <HiArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-transform duration-300" />
              </a>
              <a
                href="https://drive.google.com/file/d/1UD2o5fZkF9Xzvlzt4HIrxnlS06K1VUEH/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 hover-scale hover-glow"
              >
                <HiDownload className="h-4 w-4 group-hover:scale-125 group-hover:rotate-12 transition-transform duration-300" />
                <span>Download CV</span>
              </a>
            </div>
          </div>
          
          {/* Visual Element */}
          <div className="relative lg:flex hidden items-center justify-center animate-scale-in delay-1000">
            <div className="relative">
              {/* Main Circle */}
              <div className="w-96 h-96 rounded-full bg-gradient-to-br from-indigo-500/20 via-violet-500/20 to-blue-500/20 backdrop-blur-sm border border-white/10 animate-spin-slow hover-glow"></div>
              
              {/* Inner Circles */}
              <div className="absolute inset-8 rounded-full bg-gradient-to-br from-violet-500/30 to-indigo-500/30 backdrop-blur-sm animate-pulse hover-scale"></div>
              <div className="absolute inset-16 rounded-full bg-gradient-to-br from-blue-500/40 to-violet-500/40 backdrop-blur-sm animate-glow-pulse"></div>
              
              {/* Center Content */}
              <div className="absolute inset-0 flex items-center justify-center animate-bounce-in delay-1200">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-br from-indigo-600 to-violet-600 flex items-center justify-center shadow-2xl animate-glow-pulse hover-scale">
                    <HiCodeBracket className="h-12 w-12 text-white animate-bounce-in delay-1400" />
                  </div>
                  <div className="space-y-1 animate-slide-up delay-1600">
                    <p className="text-white font-semibold">Back-End</p>
                    <p className="text-indigo-400 text-sm">Development</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Tech Icons */}
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center animate-float hover-scale hover-glow">
                <span className="text-white font-bold text-sm">Py</span>
              </div>
              <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center animate-float delay-1000 hover-scale hover-glow">
                <span className="text-white font-bold text-sm">API</span>
              </div>
              <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center animate-float delay-2000 hover-scale hover-glow">
                <span className="text-white font-bold text-sm">DB</span>
              </div>
              <div className="absolute top-1/2 -left-4 transform -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center animate-float delay-3000 hover-scale hover-glow">
                <HiCpuChip className="h-6 w-6 text-white animate-bounce-in delay-1800" />
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator - Mouse com efeito cascata */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex flex-col justify-start items-center pt-2 space-y-1">
            <div className="w-1.5 h-1.5 bg-white/70 rounded-full animate-cascade-1"></div>
            <div className="w-1.5 h-1.5 bg-white/70 rounded-full animate-cascade-2"></div>
            <div className="w-1.5 h-1.5 bg-white/70 rounded-full animate-cascade-3"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
