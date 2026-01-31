import { projectsData } from "../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-[#0a0a0a] px-6 md:px-12 py-16 md:py-24 min-h-screen"
    >
      {/* Título responsivo: centralizado no mobile, esquerda no desktop */}
      <h2 className="text-white text-3xl md:text-4xl font-bold mb-10 md:mb-16 text-center md:text-left">
        Selected <span className="text-[#22c55e]">Projects</span>
      </h2>

      {/* Grid: 1 coluna (celular), 2 colunas (tablet/desktop) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="bg-[#111111] border border-gray-800 rounded-3xl overflow-hidden hover:border-[#22c55e]/50 transition-all flex flex-col"
          >
            {/* Imagem com altura fixa menor no mobile */}
            <div className="relative h-48 sm:h-60 overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>

            <div className="p-6 md:p-8 flex flex-col flex-grow">
              <h3 className="text-white text-xl md:text-2xl font-bold mb-3 md:mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm md:text-base mb-6 flex-grow">
                {project.description}
              </p>

              {/* Badges de tecnologias com wrap para não quebrar o layout */}
              <div className="flex flex-wrap gap-2 md:gap-3 mb-6">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="inline-block transition-transform duration-300 hover:scale-105 cursor-default text-xs md:text-sm text-[#22c55e] border border-[#22c55e]/40 px-3 py-1 rounded-full bg-[#22c55e]/5"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center text-[#22c55e] font-semibold hover:gap-2 transition-all group"
              >
                View Project
                <span className="ml-1 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
