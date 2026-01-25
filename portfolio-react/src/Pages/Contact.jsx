const Contact = () => (
  <section className="px-12 py-24 bg-[#0a0a0a]">
    <form className="max-w-xl mx-auto bg-[#111] p-8 rounded-3xl border border-gray-800">
      <input 
        type="text" 
        className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl px-4 py-3 mb-4 focus:outline-none focus:ring-1 focus:ring-[#22c55e] text-white" 
        placeholder="Nome" 
      />
      <textarea 
        className="w-full bg-[#0a0a0a] border border-gray-800 rounded-xl px-4 py-3 mb-6 focus:outline-none focus:ring-1 focus:ring-[#22c55e] text-white h-32" 
        placeholder="Mensagem"
      ></textarea>
      <button className="w-full bg-[#16a34a] py-4 rounded-xl font-bold text-white shadow-[0_5px_15px_rgba(22,163,74,0.3)]">
        Enviar
      </button>
    </form>
  </section>
);

export default Contact;