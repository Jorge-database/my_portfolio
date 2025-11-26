import { useState, useEffect } from 'react';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Monitora o scroll da página
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Função para rolar para o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <>
      {/* Botão Voltar ao Topo */}
      <button
        onClick={scrollToTop}
        className={`
          fixed bottom-8 right-8 z-50 w-12 h-12 
          bg-gradient-to-br from-indigo-600 to-violet-600 
          hover:brightness-110 
          rounded-full shadow-lg hover:shadow-xl 
          transition-all duration-300 transform 
          ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}
          hover:scale-110 focus:outline-none focus:ring-4 focus:ring-indigo-500/30
          group
        `}
        aria-label="Voltar ao topo"
        style={{
          transitionDelay: isVisible ? '0ms' : '150ms'
        }}
      >
        {/* Ícone de seta para cima */}
        <svg
          className="w-6 h-6 text-white mx-auto transform group-hover:-translate-y-0.5 transition-transform duration-200"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M5 15l7-7 7 7" />
        </svg>
        
        {/* Efeito de brilho no hover */}
        <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </button>
    </>
  );
}