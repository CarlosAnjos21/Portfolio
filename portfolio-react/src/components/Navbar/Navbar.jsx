import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Importando ícones para o menu mobile

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Estado para abrir/fechar menu mobile
  const navigate = useNavigate();
  const location = useLocation();
  const NAVBAR_HEIGHT = 80;

  const scrollToSection = (id) => {
    setIsOpen(false); // Fecha o menu ao clicar
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

  const goToPage = (path) => {
    setIsOpen(false); // Fecha o menu ao clicar
    navigate(path);
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  const linkStyle =
    "text-white/70 hover:text-white pb-2 border-b-2 border-transparent hover:border-[#22c55e] transition-all duration-300 cursor-pointer text-lg md:text-base";

  return (
    <nav className="bg-[#0a0a0a]/90 backdrop-blur-md sticky top-0 z-[100] w-full border-b border-gray-900">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-5 px-6 md:px-12">
        
        {/* Logo */}
        <div
          className="text-2xl md:text-3xl font-bold text-[#22c55e] tracking-tight hover:scale-105 transition-transform cursor-pointer"
          onClick={() => scrollToSection("home")}
        >
          DevCarlos
        </div>

        {/* Botão Menu Hambúrguer (Apenas Mobile) */}
        <div className="md:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-white focus:outline-none"
          >
            {isOpen ? <X size={30} /> : <Menu size={30} />}
          </button>
        </div>

        {/* Links Desktop */}
        <ul className="hidden md:flex space-x-8 lg:space-x-10 items-center text-white font-medium">
          <li className={linkStyle} onClick={() => scrollToSection("home")}>Início</li>
          <li className={linkStyle} onClick={() => scrollToSection("skills")}>Competências</li>
          <li className={linkStyle} onClick={() => goToPage("/projetos")}>Projetos</li>
          <li className={linkStyle} onClick={() => goToPage("/sobre")}>Sobre</li>
          <li className={linkStyle} onClick={() => goToPage("/contato")}>Contato</li>
        </ul>
      </div>

      {/* Menu Mobile (Overlay) */}
      <div className={`
        fixed inset-0 bg-[#0a0a0a] z-40 transform transition-transform duration-300 ease-in-out md:hidden
        ${isOpen ? "translate-x-0" : "translate-x-full"}
      `}>
        <div className="flex flex-col items-center justify-center h-full space-y-8 text-white font-semibold">
          <li className="list-none text-2xl" onClick={() => scrollToSection("home")}>Início</li>
          <li className="list-none text-2xl" onClick={() => scrollToSection("skills")}>Competências</li>
          <li className="list-none text-2xl" onClick={() => goToPage("/projetos")}>Projetos</li>
          <li className="list-none text-2xl" onClick={() => goToPage("/sobre")}>Sobre</li>
          <li className="list-none text-2xl" onClick={() => goToPage("/contato")}>Contato</li>
          
          {/* Botão de Fechar adicional ou apenas clique fora */}
          <button 
            onClick={() => setIsOpen(false)}
            className="mt-10 bg-[#22c55e] px-8 py-3 rounded-full text-black font-bold"
          >
            Fechar
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

