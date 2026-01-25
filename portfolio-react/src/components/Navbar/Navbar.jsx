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
        const y = element.getBoundingClientRect().top + window.pageYOffset - NAVBAR_HEIGHT;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  const goToPage = (path) => {
    setIsOpen(false);
    navigate(path);
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  const linkStyle = "text-white/70 hover:text-white pb-2 border-b-2 border-transparent hover:border-[#22c55e] transition-all cursor-pointer";

  return (
    <>
      <nav className="bg-[#0a0a0a]/95 backdrop-blur-lg sticky top-0 z-[100] w-full border-b border-gray-900">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-5 px-6 md:px-12">
          <div
            className="text-2xl md:text-3xl font-bold text-[#22c55e] cursor-pointer z-[1001] tracking-tighter"
            onClick={() => scrollToSection("home")}
          >
            DevCarlos
          </div>

          <div className="md:hidden z-[1001]">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white p-2 outline-none active:scale-90 transition-transform"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          <ul className="hidden md:flex space-x-8 items-center text-white font-medium">
            <li className={linkStyle} onClick={() => scrollToSection("home")}>Início</li>
            <li className={linkStyle} onClick={() => scrollToSection("skills")}>Competências</li>
            <li className={linkStyle} onClick={() => goToPage("/projetos")}>Projetos</li>
            <li className={linkStyle} onClick={() => goToPage("/sobre")}>Sobre</li>
            <li className={linkStyle} onClick={() => goToPage("/contato")}>Contato</li>
          </ul>
        </div>
      </nav>

      {/* MENU MOBILE (SIDEBAR CURTA E FLUTUANTE) */}
      <div
        className={`fixed top-24 right-4 w-60 transition-all duration-500 md:hidden z-[9999] ${
          isOpen ? "opacity-100 visible translate-y-0" : "opacity-0 invisible -translate-y-4"
        }`}
      >
        <div className="flex flex-col items-center bg-[#0a0a0a] border border-[#22c55e]/50 rounded-2xl p-5 shadow-[0_0_30px_rgba(34,197,94,0.25)]">
          <ul className="flex flex-col items-center space-y-3 w-full">
            {[
              { label: "Início", action: () => scrollToSection("home") },
              { label: "Competências", action: () => scrollToSection("skills") },
              { label: "Projetos", action: () => goToPage("/projetos") },
              { label: "Sobre", action: () => goToPage("/sobre") },
              { label: "Contato", action: () => goToPage("/contato") }
            ].map((item) => (
              <li key={item.label} className="list-none w-full">
                <button
                  onClick={item.action}
                  className="w-full text-sm font-semibold text-white hover:text-[#22c55e] bg-gray-900/40 py-3 rounded-xl transition-all active:bg-[#22c55e]/10"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="w-10 h-[2px] bg-[#22c55e]/30 my-4 rounded-full" />
          <p className="text-[9px] text-[#22c55e] uppercase tracking-[0.3em] font-bold">
            DevCarlos
          </p>
        </div>
      </div>

      {/* Overlay para fechar ao clicar fora */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-[2px] z-[9998] md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
    </>
  );
};

export default Navbar;