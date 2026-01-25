import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const NAVBAR_HEIGHT = 80;

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  const scrollToSection = (id) => {
    setIsOpen(false);
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
    } else {
      const element = document.getElementById(id);
      if (element) {
        const y =
          element.getBoundingClientRect().top +
          window.pageYOffset -
          NAVBAR_HEIGHT;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  const goToPage = (path) => {
    setIsOpen(false);
    navigate(path);
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  // Estilo dos itens mobile com padding e fundo sutil
  const mobileLinkStyle =
    "list-none text-base cursor-pointer text-white/90 hover:text-white hover:bg-white/10 px-[20px] py-[5px] rounded-lg transition-all duration-300 w-full text-center";

  return (
    <>
      <nav className="bg-[#0a0a0a]/90 backdrop-blur-md sticky top-0 z-[100] w-full border-b border-gray-900">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-5 px-6 md:px-12">
          <div
            className="text-2xl md:text-3xl font-bold text-[#22c55e] cursor-pointer z-[1001]"
            onClick={() => scrollToSection("home")}
          >
            DevCarlos
          </div>

          <div className="md:hidden z-[1001]">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 outline-none"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          <ul className="hidden md:flex space-x-8 items-center text-white font-medium">
            <li
              className="text-white/70 hover:text-white pb-2 border-b-2 border-transparent hover:border-[#22c55e] transition-all cursor-pointer"
              onClick={() => scrollToSection("home")}
            >
              Início
            </li>
            <li
              className="text-white/70 hover:text-white pb-2 border-b-2 border-transparent hover:border-[#22c55e] transition-all cursor-pointer"
              onClick={() => scrollToSection("skills")}
            >
              Competências
            </li>
            <li
              className="text-white/70 hover:text-white pb-2 border-b-2 border-transparent hover:border-[#22c55e] transition-all cursor-pointer"
              onClick={() => goToPage("/projetos")}
            >
              Projetos
            </li>
            <li
              className="text-white/70 hover:text-white pb-2 border-b-2 border-transparent hover:border-[#22c55e] transition-all cursor-pointer"
              onClick={() => goToPage("/sobre")}
            >
              Sobre
            </li>
            <li
              className="text-white/70 hover:text-white pb-2 border-b-2 border-transparent hover:border-[#22c55e] transition-all cursor-pointer"
              onClick={() => goToPage("/contato")}
            >
              Contato
            </li>
          </ul>
        </div>
      </nav>

      {/* MENU MOBILE SIDEBAR CURTO, FLUTUANTE E VERDE */}
      <div
        className={`fixed top-24 right-4 w-56 transition-all duration-500 md:hidden z-[1000] ${
          isOpen
            ? "opacity-100 visible translate-y-0"
            : "opacity-0 invisible -translate-y-4"
        }`}
      >
        {/* Card com borda verde brilhante e fundo escuro */}
        <div className="flex flex-col items-center bg-[#0a0a0a]/95 backdrop-blur-lg border border-[#22c55e]/30 rounded-2xl p-5 shadow-[0_0_20px_rgba(34,197,94,0.2)]">
          <ul className="flex flex-col items-center space-y-3 w-full">
            {/* Estilizei os links com um toque verde no hover e no ponto lateral */}
            <li className="list-none w-full">
              <button
                onClick={() => scrollToSection("home")}
                className="w-full text-sm font-medium text-white hover:text-[#22c55e] hover:bg-[#22c55e]/10 py-2 rounded-lg transition-all"
              >
                Início
              </button>
            </li>
            <li className="list-none w-full">
              <button
                onClick={() => scrollToSection("skills")}
                className="w-full text-sm font-medium text-white hover:text-[#22c55e] hover:bg-[#22c55e]/10 py-2 rounded-lg transition-all"
              >
                Competências
              </button>
            </li>
            <li className="list-none w-full">
              <button
                onClick={() => goToPage("/projetos")}
                className="w-full text-sm font-medium text-white hover:text-[#22c55e] hover:bg-[#22c55e]/10 py-2 rounded-lg transition-all"
              >
                Projetos
              </button>
            </li>
            <li className="list-none w-full">
              <button
                onClick={() => goToPage("/sobre")}
                className="w-full text-sm font-medium text-white hover:text-[#22c55e] hover:bg-[#22c55e]/10 py-2 rounded-lg transition-all"
              >
                Sobre
              </button>
            </li>
            <li className="list-none w-full">
              <button
                onClick={() => goToPage("/contato")}
                className="w-full text-sm font-medium text-white hover:text-[#22c55e] hover:bg-[#22c55e]/10 py-2 rounded-lg transition-all"
              >
                Contato
              </button>
            </li>
          </ul>

          {/* Divisor Verde Sutil */}
          <div className="w-12 h-[2px] bg-[#22c55e]/40 my-4 rounded-full" />

          <p className="text-[8px] text-[#22c55e] uppercase tracking-[0.2em] font-bold">
            DevCarlos
          </p>
        </div>
      </div>

      {/* Overlay para fechar ao clicar fora */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-transparent z-[999] md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;
