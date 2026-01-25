import { projectsData } from "../data/projects";

const Projects = () => {
  return (
    <section className="bg-[#0a0a0a] px-12 py-24 min-h-screen">
      <h2 className="text-white text-4xl font-bold mb-16">
        Selected <span className="text-[#22c55e]">Projects</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        {projectsData.map((project) => (
          <div
            key={project.id}
            className="bg-[#111111] border border-gray-800 rounded-3xl overflow-hidden hover:border-[#22c55e]/50 transition-all"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-60 object-cover"
            />

            <div className="p-8">
              <h3 className="text-white text-2xl font-bold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 mb-6">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-3 mb-6">
                {project.tech.map((tech, index) => (
                  <span
                    key={index}
                    className="text-sm text-[#22c55e] border border-[#22c55e]/40 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="inline-block text-[#22c55e] font-semibold hover:underline"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
