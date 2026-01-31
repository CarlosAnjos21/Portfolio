const About = () => {
  return (
    <section id="about" className="max-w-5xl mx-auto px-6 md:px-12 py-16 md:py-24">
      {/* Título com ajuste de tamanho para mobile */}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 md:mb-10 text-center md:text-left">
        Sobre <span className="text-[#22c55e]">mim</span>
      </h2>

      {/* Grid ou Container de texto com tipografia aprimorada */}
      <div className="space-y-6 md:space-y-8 max-w-4xl">
        <div className="relative border-l-2 border-[#22c55e]/30 pl-6 py-2">
          <p className="text-gray-300 text-base md:text-lg leading-relaxed">
            Estudante de **Análise e Desenvolvimento de Sistemas**, com experiência prática em 
            desenvolvimento web, banco de dados SQL e programação em JavaScript. 
            Busco oportunidade de estágio para aplicar conhecimentos acadêmicos e 
            evoluir profissionalmente na área de desenvolvimento de sistemas.
          </p>
        </div>

        <p className="text-gray-400 text-base md:text-lg leading-relaxed px-1">
          Tenho experiência com consumo de APIs, componentização, versionamento
          com **Git** e criação de layouts que priorizam usabilidade e performance.
        </p>

        <p className="text-gray-400 text-base md:text-lg leading-relaxed px-1">
          Atualmente focado em aprimorar minhas habilidades no ecossistema **Full-Stack**, 
          busco minha primeira oportunidade como estagiário ou desenvolvedor júnior 
          para evoluir tecnicamente e contribuir com projetos reais.
        </p>
      </div>

      {/* Elemento visual opcional: Uma linha decorativa ou badges de educação */}
      <div className="mt-12 flex flex-wrap gap-4 justify-center md:justify-start">
        <div className="bg-[#111] border border-gray-800 px-4 py-2 rounded-lg text-sm text-gray-400">
          📍 Fortaleza, CE
        </div>
        <div className="bg-[#111] border border-gray-800 px-4 py-2 rounded-lg text-sm text-gray-400">
          🎓 Cursando ADS
        </div>
        <div className="bg-[#111] border border-gray-800 px-4 py-2 rounded-lg text-sm text-gray-400">
          🚀 Disponível para Estágio
        </div>
      </div>
    </section>
  );
};

export default About;
