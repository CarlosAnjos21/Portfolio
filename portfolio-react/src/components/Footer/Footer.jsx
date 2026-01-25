import { Github, Instagram, MessageCircle, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] py-16 border-t border-gray-900 flex flex-col items-center">
      <p className="text-gray-500 mb-8 font-light italic">
        © 2026 Carlos Otacílio — Full-Stack Developer. Built with React &
        Tailwind CSS.
      </p>

      <div className="flex space-x-8 text-gray-400">
        <a
          href="https://github.com/CarlosAnjos21"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <Github
            className="hover:text-[#22c55e] cursor-pointer transition-all hover:scale-110"
            size={24}
          />
        </a>

        <a
          href="https://www.instagram.com/carlos_anjos_22/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <Instagram
            className="hover:text-[#22c55e] cursor-pointer transition-all hover:scale-110"
            size={24}
          />
        </a>

        <a
          href="https://www.linkedin.com/in/carlos-otac%C3%ADlio-rodrigues-dos-anjos-789318331"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <Linkedin
            className="hover:text-[#22c55e] cursor-pointer transition-all hover:scale-110"
            size={24}
          />
        </a>

        <a
          href="https://wa.me/5585985100882"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
        >
          <MessageCircle
            className="hover:text-[#22c55e] cursor-pointer transition-all hover:scale-110"
            size={24}
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
