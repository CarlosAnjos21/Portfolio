import React from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollTo = (id) => {
    if (location.pathname !== "/") {
      // se não estiver na Home, primeiro navega
      navigate(`/#${id}`);
    } else {
      // se já estiver na Home, apenas rola
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const linkStyle =
    "text-white/70 hover:text-white pb-2 border-b-2 border-transparent hover:border-[#22c55e] transition-all duration-300";

  return (
    <nav className="bg-[#0a0a0a] sticky top-0 z-50 w-full">
      <div className="flex justify-between items-center py-6 px-[50px]">
        {/* Logo */}
        <div
          className="text-3xl font-bold text-[#22c55e] tracking-tight cursor-pointer hover:scale-105 transition-transform"
          onClick={() => scrollTo("home")}
        >
          DevCarlos
        </div>

        {/* Links */}
        <ul className="flex space-x-8 md:space-x-10 items-center text-white font-medium">
          <li className={linkStyle} onClick={() => scrollTo("home")}>
            Início
          </li>
          <li className={linkStyle} onClick={() => scrollTo("skills")}>
            Competências
          </li>
          <li className={linkStyle} onClick={() => navigate("/projetos")}>
            Projetos
          </li>
          <li className={linkStyle} onClick={() => navigate("/contato")}>
            Contato
          </li>
          <li className={linkStyle} onClick={() => navigate("/sobre")}>
            Sobre
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
