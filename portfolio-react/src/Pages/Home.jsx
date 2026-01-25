import { Code2, Server, Paintbrush } from "lucide-react";
import eu03 from "../assets/eu03.png";
import React, { useEffect } from "react";

// Skills
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
    description:
      "Gerenciamento de Dados com PostgreSQL, e deploy de aplicações em GitHub Pages",
  },
];

const SkillCard = ({ icon, title, description }) => (
  <div className="bg-[#111] p-10 rounded-[2.5rem] border border-gray-800 hover:border-[#22c55e]/50 transition-all group">
    <div className="mb-6 transform transition-transform group-hover:scale-110">
      {icon}
    </div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-gray-400 leading-relaxed">{description}</p>
  </div>
);

const Home = () => {
  // Scroll automático para seção quando a página carrega com hash
  useEffect(() => {
    const hash = window.location.hash.replace("#", ""); // remove o #
    if (hash) {
      const element = document.getElementById(hash);
      if (element) {
        // delay curto para garantir que o layout carregou
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 50);
      }
    }
  }, []);

  return (
    <div className="bg-[#0a0a0a] text-white font-inter">
      {/* SEÇÃO HERO */}
      <section
        id="home"
        className="flex flex-col md:flex-row items-center justify-between px-14 pt-24 pb-20 min-h-[80vh] scroll-mt-24"
      >
        {/* TEXTO HERO */}
        <div className="max-w-4xl -mt-20 relative z-10">
          <h1
            className="text-6xl md:text-8xl font-bold leading-tight mb-6 
                         bg-[linear-gradient(75deg,#22c55e_35%,#ffffff_80%)] 
                         bg-clip-text text-transparent"
          >
            Desenvolvedor <br /> Full-Stack
          </h1>
          <p className="text-gray-300 text-xl mb-2">
            Criando aplicações web modernas que unem criatividade, desempenho e
            tecnologia de ponta.
          </p>
          <p className="text-gray-300 text-xl mb-2">
            Estudando desenvolvimento full-stack há 2 anos, com experiências
            práticas em projetos utilizando tecnologias como{" "}
            <strong>
              JavaScript, React, Tailwind CSS, Node.js, Prisma e PostgreSQL
            </strong>
            . Durante esse período, pude aplicar meus conhecimentos em desafios
            reais, aprimorando minhas habilidades e construindo soluções
            funcionais.
          </p>
          <p className="text-gray-500 text-lg mb-4 italic">
            Sempre disposto a aprender mais, criando interfaces intuitivas e
            aplicações escaláveis, sempre atento a boas práticas e performance.
          </p>
          <p className="text-gray-500 text-lg mb-10 italic">
            Valorizo a colaboração em equipe, a resolução criativa de problemas
            e estou motivado para iniciar minha carreira como desenvolvedor
            full-stack.
          </p>

          <button className="bg-[#16a34a] hover:bg-[#22c55e] text-white px-10 py-3 rounded-lg font-bold transition-all shadow-lg hover:scale-105">
            Vamos Conectar
          </button>
        </div>

        {/* IMAGEM + ARCO FLOUTANTE */}
        <div className="relative mt-12 md:mt-0 animate-float">
          <div
            className="w-96 h-96 md:w-[680px] md:h-[680px] rounded-full border-2 border-[#22c55e] p-2 
                          shadow-[0_-160px_120px_rgba(34,197,94,0.25),0_0_60px_rgba(34,197,94,0.15)] bg-transparent overflow-hidden"
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

      {/* SEÇÃO DE HABILIDADES */}
      <section id="skills" className="px-12 py-24 border-t border-gray-900">
        <h2 className="text-white text-3xl font-bold mb-16">
          Competências Técnicas
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
