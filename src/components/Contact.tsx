import { FormEvent, useRef, useState } from "react";
import { FaLinkedin, FaSpinner, FaWhatsapp, FaGithub } from "react-icons/fa";
import { HiCheckCircle, HiOutlineEnvelope } from "react-icons/hi2";
import emailjs from "@emailjs/browser";

export function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);
  const [sucess, setSucess] = useState(false);
  const [error, setError] = useState(false);

  const sendEmail = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!form.current) return;
    setLoading(true);

    emailjs
      .sendForm("service_svs9x67", "template_ouythxv", form.current, {
        publicKey: "t01-1TgYrhYfEmVQz",
      })
      .then(
        () => {
          setSucess(true);
          setLoading(false);
        },
        (error) => {
          setError(true);
          setLoading(false);
          console.error(error);
        }
      );
  };
  const contacts = [
    {
      name: "WhatsApp",
      description: "+1 (239) 849 0415",
      link: "https://wa.me/5521990825235?text=Olá,%20gostaria%20de%20conversar%20com%20você.",
      icon: <FaWhatsapp className="h-10 w-10" />,
    },
    {
      name: "E-mail",
      description: "jbchime2025@gmail.com",
      link: "mailto:jbchime2025@gmail.com?subject=Contato%20via%20portfólio&body=Olá%20Thiago,%20gostaria%20de%20conversar%20sobre%20oportunidades.",
      icon: <HiOutlineEnvelope className="h-10 w-10" />,
    },
    {
      name: "LinkedIn",
      description: "https://www.linkedin.com/in/jorge-barney-1b4783398/",
      link: "https://www.linkedin.com/in/jorge-barney-1b4783398/",
      icon: <FaLinkedin className="h-10 w-10" />,
    },
    {
      name: "GitHub",
      description: "https://github.com/Jorge-database",
      link: "https://github.com/Jorge-database",
      icon: <FaGithub className="h-10 w-10" />,
    },
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-800 relative overflow-hidden">
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
            <span className="text-sm font-medium text-gray-300 uppercase tracking-wider">Contact Me</span>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent block">
              Speak
            </span>
            <span className="bg-gradient-to-r from-indigo-400 via-violet-400 to-blue-400 bg-clip-text text-transparent block">
              With me
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Interested in discussing{' '}
            <span className="font-semibold text-indigo-400">
              Back - end development opportunities
            </span>{' '}
            or innovative projects? Contact us through the channels below. Let's go!{' '}
            <span className="inline-block px-2 py-1 bg-gradient-to-r from-indigo-500/20 to-violet-500/20 border border-indigo-400/30 rounded-md font-bold text-indigo-300 whitespace-nowrap">
              build scalable solutions
            </span>{' '}
            together!
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-violet-500 to-blue-500 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-500"></div>
              <div className="relative bg-gray-800/90 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 shadow-xl">
                <form ref={form} onSubmit={sendEmail} className="space-y-6">
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Message:
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full rounded-lg bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 p-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                      placeholder="Conte-me sobre seu projeto ou oportunidade..."
                      required
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Your name:
                      </label>
                      <input
                        id="fullName"
                        name="fullName"
                        type="text"
                        className="w-full rounded-lg bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 p-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                        placeholder="Michael harris"
                        required
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Your email:
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        className="w-full rounded-lg bg-gray-700/50 border border-gray-600 text-white placeholder-gray-400 p-4 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-300"
                        placeholder="michaelharris@email.com"
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="inline-flex items-center gap-3 bg-gradient-to-r from-indigo-600 to-violet-600 hover:from-indigo-500 hover:to-violet-500 px-8 py-4 rounded-full text-white font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-indigo-500/25 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={loading}
                    >
                      {loading && <FaSpinner className="h-4 w-4 animate-spin" />}
                      {sucess && <HiCheckCircle className="h-4 w-4" />}
                      <span>Send Message</span>
                    </button>
                    {error && (
                      <p className="mt-4 text-red-400 text-sm">
                        Erro ao enviar mensagem, tente novamente more tarde.
                      </p>
                    )}
                    {sucess && (
                      <p className="mt-4 text-green-400 text-sm">
                        Mensagem enviada com sucesso! Retornarei em breve.
                      </p>
                    )}
                  </div>
                </form>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 space-y-6">
            {contacts.map((contact, index) => (
              <div
                key={contact.name}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 via-violet-500 to-blue-500 rounded-xl blur opacity-20 group-hover:opacity-40 transition duration-300"></div>
                <div className="relative bg-gray-800/90 backdrop-blur-sm border border-gray-700/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                  <a
                    href={contact.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 text-white hover:text-indigo-400 transition-colors"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-violet-600 rounded-full flex items-center justify-center flex-shrink-0">
                      {contact.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">{contact.name}</h4>
                      <p className="text-sm text-gray-400 break-all">
                        {contact.description}
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
