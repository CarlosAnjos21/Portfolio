const Contact = () => (
  <section id="contact" className="px-6 md:px-12 py-16 md:py-24 bg-[#0a0a0a]">
    <div className="max-w-xl mx-auto">
      {/* Título da Seção para contexto visual */}
      <h2 className="text-white text-3xl md:text-4xl font-bold mb-8 text-center">
        Vamos <span className="text-[#22c55e]">Conversar</span>
      </h2>
      
      <form 
        className="bg-[#111] p-6 md:p-10 rounded-[2rem] border border-gray-800 shadow-2xl"
        onSubmit={(e) => e.preventDefault()}
      >
        <div className="space-y-4">
          <div>
            <label className="text-gray-400 text-sm mb-2 block ml-1">Seu Nome</label>
            <input 
              type="text" 
              className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#22c55e]/50 transition-all text-white placeholder:text-gray-600" 
              placeholder="Ex: João Silva" 
            />
          </div>

          <div>
            <label className="text-gray-400 text-sm mb-2 block ml-1">Sua Mensagem</label>
            <textarea 
              className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-[#22c55e]/50 transition-all text-white h-40 resize-none placeholder:text-gray-600" 
              placeholder="Como posso te ajudar?"
            ></textarea>
          </div>

          <button 
            type="submit"
            className="w-full bg-[#16a34a] hover:bg-[#22c55e] py-4 rounded-xl font-bold text-white shadow-[0_5px_15px_rgba(22,163,74,0.3)] transition-all active:scale-[0.98] mt-2"
          >
            Enviar Mensagem
          </button>
        </div>
      </form>
      
      <p className="text-gray-500 text-center mt-8 text-sm">
        Geralmente respondo em menos de 24 horas.
      </p>
    </div>
  </section>
);

export default Contact;