import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

const ProjectCard = ({ project }) => {
  return (
    <div className="group bg-[#111] rounded-2xl overflow-hidden border border-gray-800 hover:border-[#22c55e]/50 transition-all">
      <div className="h-48 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-[#22c55e] text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map(t => (
            <span key={t} className="text-[10px] uppercase tracking-widest bg-gray-900 px-2 py-1 rounded border border-gray-700 text-gray-300">
              {t}
            </span>
          ))}
        </div>
        <div className="flex space-x-4">
          <a href={project.link} className="text-gray-400 hover:text-white transition-colors">
            <Github size={20} />
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <ExternalLink size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;