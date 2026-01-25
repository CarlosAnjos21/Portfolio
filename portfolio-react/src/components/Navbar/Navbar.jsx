import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const NAVBAR_HEIGHT = 85; // altura fixa da navbar

  // Scroll para seções internas da Home
  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const y = element.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  // Navegar para outra rota e ir para o topo
  const goToPage = (path) => {
    navigate(path);
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  const linkStyle =
    "text-white/70 hover:text-white pb-2 border-b-2 border-transparent hover:border-[#22c55e] transition-all duration-300 cursor-pointer";

  return (
    <nav className="bg-[#0a0a0a] sticky top-0 z-50 w-full">
      <div className="flex justify-between items-center py-6 px-[50px]">
        {/* Logo */}
        <div
          className="text-3xl font-bold text-[#22c55e] tracking-tight hover:scale-105 transition-transform"
          onClick={() => scrollToSection("home")}
        >
          DevCarlos
        </div>

        {/* Links */}
        <ul className="flex space-x-8 md:space-x-10 items-center text-white font-medium">
          <li className={linkStyle} onClick={() => scrollToSection("home")}>Início</li>
          <li className={linkStyle} onClick={() => scrollToSection("skills")}>Competências</li>
          <li className={linkStyle} onClick={() => goToPage("/projetos")}>Projetos</li>
          <li className={linkStyle} onClick={() => goToPage("/contato")}>Contato</li>
          <li className={linkStyle} onClick={() => goToPage("/sobre")}>Sobre</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

