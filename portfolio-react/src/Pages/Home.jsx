import { Code2, Server, Paintbrush } from "lucide-react";
import eu03 from "../assets/eu03.png";
import React, { useEffect } from "react";

// Skills (mesma estrutura)
const skills = [
  {
    icon: <Code2 size={48} className="text-[#22c55e]" />,
    title: "Desenvolvimento Frontend",
    description: "Construção de interfaces modernas usando JavaScript, React, HTML5, CSS3, JavaScript, Tailwind",
  },
  {
    icon: <Server size={48} className="text-[#22c55e]" />,
    title: "Desenvolvimento Backend",
    description: "Desenvolvimento de Servidores e APIs com JavaScript (Node.js), Express e integração com banco de dados",
  },
  {
    icon: <Paintbrush size={48} className="text-[#22c55e]" />,
    title: "Banco de dados/ Deploy",
    description: "Gerenciamento de Dados com PostgreSQL, e deploy de aplicações em GitHub Pages",
  },
];

const SkillCard = ({ icon, title, description }) => (
  <div className="bg-[#111] p-6 xl:p-10 rounded-[2rem] border border-gray-800 hover:border-[#22c55e]/50 transition-all group">
    <div className="mb-6 transform transition-transform group-hover:scale-110">
      {icon}
    </div>
    <h3 className="text-xl xl:text-2xl font-bold mb-4">{title}</h3>
    <p className="text-gray-400 leading-relaxed text-sm xl:text-base">{description}</p>
  </div>
);

const Home = () => {
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 50);
      }
    }
  }, []);

  return (
    <div className="bg-[#0a0a0a] text-white font-inter overflow-x-hidden">
      {/* SEÇÃO HERO RESPONSIVA E FLUIDA */}
      <section
        id="home"
        className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-14 xl:px-24 pt-32 pb-20 min-h-screen lg:min-h-[85vh] scroll-mt-24 max-w-[1600px] mx-auto"
      >
        {/* TEXTO HERO - Ajusta o tamanho da fonte em 4 níveis */}
        <div className="max-w-4xl relative z-10 text-center lg:text-left order-2 lg:order-1 transition-all duration-500">
          <h1
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-tight mb-6 
                       bg-[linear-gradient(75deg,#22c55e_35%,#ffffff_80%)] 
                       bg-clip-text text-transparent"
          >
            Desenvolvedor <br className="hidden lg:block" /> Full-Stack
          </h1>
          
          <div className="space-y-4 max-w-2xl mx-auto lg:mx-0">
            <p className="text-gray-300 text-lg xl:text-xl transition-all">
              Criando aplicações web modernas que unem criatividade, desempenho e tecnologia de ponta.
            </p>
            <p className="text-gray-300 text-base xl:text-lg">
              Estudando desenvolvimento full-stack há 2 anos com foco em
              <strong className="text-white ml-1">
                React, Node.js e PostgreSQL
              </strong>.
            </p>
          </div>

          <button className="mt-10 bg-[#16a34a] hover:bg-[#22c55e] text-white px-8 xl:px-10 py-3 xl:py-4 rounded-lg font-bold transition-all shadow-lg hover:scale-105 w-full sm:w-auto">
            Vamos Conectar
          </button>
        </div>

        {/* IMAGEM + ARCO - Diminui gradualmente conforme a tela encolhe */}
        <div className="relative mb-12 lg:mb-0 animate-float order-1 lg:order-2 flex justify-center transition-all duration-500">
          <div
            className="w-64 h-64 
                       sm:w-80 sm:h-80 
                       lg:w-[400px] lg:h-[400px] 
                       xl:w-[500px] xl:h-[500px] 
                       2xl:w-[600px] 2xl:h-[600px] 
                       rounded-full border-2 border-[#22c55e] p-2 
                       shadow-[0_-80px_60px_rgba(34,197,94,0.15)] 
                       bg-transparent overflow-hidden transition-all duration-500"
          >
            <img
              src={eu03}
              alt="Carlos Otacilio"
              loading="lazy"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </section>

      {/* SEÇÃO DE HABILIDADES - Grid adaptativo */}
      <section id="skills" className="px-6 md:px-12 xl:px-24 py-20 border-t border-gray-900">
        <h2 className="text-white text-2xl xl:text-3xl font-bold mb-12 text-center lg:text-left">
          Competências Técnicas
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xl:gap-10 max-w-[1400px] mx-auto">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
