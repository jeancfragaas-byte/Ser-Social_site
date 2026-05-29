import React, { useState } from "react";
import { Instagram, Youtube, Mail, Phone, MapPin, Send, MessageSquare } from "lucide-react";
import Logo from "./Logo";

export default function ContactFooter() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    subject: "Mentoria Individual",
    notes: ""
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;

    // Build the preset WhatsApp message text matching the form
    const message = `Olá! Meu nome é ${formData.name}. Tenho interesse no serviço: ${formData.subject}.\nTelefone de contato: ${formData.phone}.\nObservação: ${formData.notes || "Nenhuma."}\n\nVim através do site oficial do Ser Social!`;
    const whatsappLink = `https://wa.me/5533984295746?text=${encodeURIComponent(message)}`;
    
    // Open in new tab
    window.open(whatsappLink, "_blank");
    setSubmitted(true);
    setFormData({ name: "", phone: "", subject: "Mentoria Individual", notes: "" });
  };

  return (
    <footer id="contact" className="bg-brand-cream-dark/40 pt-20 border-t border-brand-cream-dark/80 relative overflow-hidden">
      
      {/* Decorative Grid overlays */}
      <div className="absolute inset-0 pointer-events-none opacity-5 z-0">
        <div className="absolute top-0 right-0 w-80 h-80 bg-brand-teal rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Contact info + Lead Form Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 pb-16 border-b border-brand-cream-dark/60">
          
          {/* Left Block: Contact Details */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <Logo size={48} showText={true} />
              
              <h3 className="mt-8 font-display text-2xl font-extrabold text-brand-teal-dark">
                Vamos construir sua vaga juntos?
              </h3>
              
              <p className="mt-4 text-sm sm:text-base text-brand-teal-light font-medium leading-relaxed">
                Tem dúvidas sobre com qual edital começar ou qual modalidade se adequa melhor à sua rotina? Entre em contato agora e tire suas dúvidas de graça.
              </p>

              {/* Direct lists */}
              <div className="mt-8 space-y-4 text-xs sm:text-sm font-semibold text-brand-teal-dark">
                
                {/* Whatsapp */}
                <a
                  href="https://wa.me/5533984295746"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-3 bg-white rounded-xl border border-brand-cream-dark hover:border-brand-teal hover:shadow-sm duration-200 group"
                  id="contact-whatsapp"
                >
                  <div className="w-10 h-10 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-600 group-hover:scale-105 duration-200 shrink-0">
                    <Phone size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-mono tracking-wider text-brand-teal-light font-bold">WhatsApp</p>
                    <p className="font-extrabold text-brand-teal-dark font-sans">(33) 98429-5746</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:sersocial.estuda@gmail.com"
                  className="flex items-center gap-3 p-3 bg-white rounded-xl border border-brand-cream-dark hover:border-brand-teal hover:shadow-sm duration-200 group"
                  id="contact-email"
                >
                  <div className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:scale-105 duration-200 shrink-0">
                    <Mail size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-mono tracking-wider text-brand-teal-light font-bold">E-mail Oficial</p>
                    <p className="font-extrabold text-brand-teal-dark font-mono">sersocial.estuda@gmail.com</p>
                  </div>
                </a>

                {/* Address representation */}
                <div className="flex items-center gap-3 p-3 bg-white/40 rounded-xl border border-brand-cream-dark/60 shrink-0">
                  <div className="w-10 h-10 rounded-lg bg-brand-teal/10 flex items-center justify-center text-brand-teal shrink-0">
                    <MapPin size={18} />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase font-mono tracking-wider text-brand-teal-light font-bold">Atendimento Online</p>
                    <p className="font-extrabold text-brand-teal-dark font-sans">Todo o Brasil (Digital Escopo)</p>
                  </div>
                </div>

              </div>
            </div>

            {/* Social channels bottom list */}
            <div className="mt-8 pt-8 border-t border-brand-cream-dark/60">
              <p className="text-[10px] font-mono uppercase tracking-widest text-brand-teal-light font-extrabold mb-3">
                Siga nas Redes Sociais:
              </p>
              <div className="flex gap-4">
                
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/sersocial_estuda?igsh=MThkaXE2dGFsbDlocw%3D%3D&utm_source=qr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-brand-orange hover:text-white rounded-xl border border-brand-cream-dark text-brand-teal-light text-xs font-bold transition-all shadow-sm"
                  id="instagram-social"
                >
                  <Instagram size={16} />
                  <span>@sersocial_estuda</span>
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com/@paxissocial?si=B5OV_JBerponUFmz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 bg-white hover:bg-red-600 hover:text-white rounded-xl border border-brand-cream-dark text-brand-teal-light text-xs font-bold transition-all shadow-sm"
                  id="youtube-social"
                >
                  <Youtube size={16} />
                  <span>Práxis Social</span>
                </a>

              </div>
            </div>
          </div>

          {/* Right Block: Lead captures */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-brand-cream-dark p-8 sm:p-10 rounded-3xl shadow-xl relative">
              <h3 className="font-display text-2xl font-extrabold text-brand-teal-dark leading-tight">
                Garantir Vaga e Agendar Diagnóstico
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-brand-teal-light font-semibold mb-6 leading-relaxed">
                Preencha o formulário rápido para sermos objetivos e iniciarmos o planejamento de estudos com direção.
              </p>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-brand-teal-light font-bold mb-1.5">
                    Seu Nome Completo *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Ex: Maria Alice Silva"
                    className="w-full px-4 py-3 bg-brand-cream border border-brand-cream-dark rounded-xl text-sm font-semibold text-brand-teal-dark placeholder-brand-teal-light/50 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-brand-teal-light font-bold mb-1.5">
                      WhatsApp com DDD *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="Ex: (33) 98429-5746"
                      className="w-full px-4 py-3 bg-brand-cream border border-brand-cream-dark rounded-xl text-sm font-semibold text-brand-teal-dark placeholder-brand-teal-light/50 focus:outline-none focus:border-brand-teal focus:ring-1 focus:ring-brand-teal"
                    />
                  </div>
                  <div>
                    <label className="block text-[10px] font-mono uppercase tracking-wider text-brand-teal-light font-bold mb-1.5">
                      Qual serviço procura?
                    </label>
                    <input
                      type="text"
                      readOnly
                      value="Mentoria Individual"
                      className="w-full px-4 py-3 bg-brand-cream/60 border border-brand-cream-dark rounded-xl text-sm font-semibold text-brand-teal-dark/75 focus:outline-none cursor-not-allowed"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-mono uppercase tracking-wider text-brand-teal-light font-bold mb-1.5">
                    Fale da sua rotina ou cargo pretendido (Opcional)
                  </label>
                  <textarea
                    rows={3}
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    placeholder="Ex: Tenho 2 horas por dia, quero fazer o concurso municipal no final do ano..."
                    className="w-full px-4 py-3 bg-brand-cream border border-brand-cream-dark rounded-xl text-sm font-semibold text-brand-teal-dark placeholder-brand-teal-light/50 focus:outline-none focus:border-brand-teal/50 focus:ring-1 focus:ring-brand-teal"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 bg-brand-orange hover:bg-brand-orange/90 text-white rounded-2xl font-bold text-sm shadow-lg shadow-brand-orange/20 hover:shadow-xl transition-all flex items-center justify-center gap-2 cursor-pointer mt-4"
                >
                  <Send size={15} />
                  Enviar Solicitação via WhatsApp
                </button>

                {submitted && (
                  <p className="text-center text-xs font-bold text-emerald-600 mt-3 animate-pulse">
                    ✨ Redirecionando para seu preenchimento de WhatsApp... Obrigado!
                  </p>
                )}
              </form>
            </div>
          </div>

        </div>

        {/* Corporate Footer copyright block */}
        <div className="py-10 flex flex-col sm:flex-row items-center justify-between gap-6 text-[11px] font-mono text-brand-teal-light">
          <div>
            <p>© {new Date().getFullYear()} Ser Social — Concursos Sociais. Todos os direitos reservados.</p>
            <p className="mt-1 opacity-75">“Estratégia, disciplina e prática para conquistar sua aprovação.”</p>
          </div>
          <div className="flex gap-4">
            <span className="hover:text-brand-orange transition-colors">Termos de Uso</span>
            <span>•</span>
            <span className="hover:text-brand-orange transition-colors">Privacidade</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
