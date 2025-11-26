import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiOutlineEnvelope } from "react-icons/hi2";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Jorge-database",
      icon: <FaGithub className="h-5 w-5" />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/jorge-barney-1b4783398/",
      icon: <FaLinkedin className="h-5 w-5" />,
    },
    {
      name: "WhatsApp",
      url: "https://wa.me/12398490415",
      icon: <FaWhatsapp className="h-5 w-5" />,
    },
    {
      name: "Email",
      url: "mailto:jbchime2025@gmail.com",
      icon: <HiOutlineEnvelope className="h-5 w-5" />,
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-gray-900 to-slate-900 border-t border-gray-800/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-indigo-500/5 to-transparent"></div>
      </div>
      <div className="absolute top-0 left-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto max-w-6xl px-6 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold mb-2">
              <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
                Jorge Barney
              </span>
              <span className="text-white"> Povoa</span>
            </h3>
            <p className="text-gray-400 text-lg mb-4">
              Desenvolvedor Back-End Python | Microservices & REST APIs
            </p>
            <div className="flex flex-wrap gap-2">
              {['Python', 'Django', 'FastAPI', 'Docker', 'PostgreSQL'].map((tech) => (
                <span 
                  key={tech}
                  className="px-3 py-1 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-xs text-gray-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center md:justify-end">
            <div className="flex space-x-4">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full flex items-center justify-center text-gray-400 hover:text-white hover:bg-gradient-to-r hover:from-indigo-500 hover:to-violet-500 hover:border-transparent transition-all duration-300 transform hover:scale-110"
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800/50 text-center">
          <p className="text-gray-400 text-sm mb-2">
            © {currentYear} Jorge Barney Povoa. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs flex flex-wrap items-center justify-center gap-1">
            <span>Developed with</span>
            <span className="text-indigo-400 font-semibold whitespace-nowrap">React</span>,
            <span className="text-blue-400 font-semibold whitespace-nowrap">TypeScript</span>
            <span>and</span>
            <span className="text-violet-400 font-semibold whitespace-nowrap">TailwindCSS</span>
          </p>
          <p className="text-gray-500 text-xs text-center mt-2">
            <span className="text-green-400 font-semibold">
              available for Back-end Python opportunities
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}