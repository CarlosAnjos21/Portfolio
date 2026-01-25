import { Github, Instagram, MessageCircle, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] py-12 md:py-16 border-t border-gray-900 flex flex-col items-center px-6">
      {/* Texto de Copyright: Ajustado para centralizar e não quebrar bruscamente */}
      <p className="text-gray-500 mb-8 font-light italic text-sm md:text-base text-center max-w-md leading-relaxed">
        © 2026 Carlos Otacílio — <span className="text-gray-400">Full-Stack Developer</span>. <br className="md:hidden" />
        Built with React & Tailwind CSS.
      </p>

      {/* Container de Ícones: Aumentei o espaçamento no mobile para facilitar o clique */}
      <div className="flex space-x-6 md:space-x-10 text-gray-400">
        <a
          href="https://github.com/CarlosAnjos21"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="group"
        >
          <Github
            className="group-hover:text-[#22c55e] cursor-pointer transition-all group-hover:scale-125"
            size={28} // Aumentei um pouco para facilitar o toque no mobile
          />
        </a>

        <a
          href="https://www.instagram.com/carlos_anjos_22/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="group"
        >
          <Instagram
            className="group-hover:text-[#22c55e] cursor-pointer transition-all group-hover:scale-125"
            size={28}
          />
        </a>

        <a
          href="https://www.linkedin.com/in/carlos-otac%C3%ADlio-rodrigues-dos-anjos-789318331"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="group"
        >
          <Linkedin
            className="group-hover:text-[#22c55e] cursor-pointer transition-all group-hover:scale-125"
            size={28}
          />
        </a>

        <a
          href="https://wa.me/5585985100882"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          className="group"
        >
          <MessageCircle
            className="group-hover:text-[#22c55e] cursor-pointer transition-all group-hover:scale-125"
            size={28}
          />
        </a>
      </div>

      {/* Linha decorativa sutil apenas para finalização */}
      <div className="mt-10 w-12 h-1 bg-gradient-to-r from-transparent via-[#22c55e]/20 to-transparent rounded-full"></div>
    </footer>
  );
};

export default Footer;