import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, ArrowUpRight, Award, FileText, UserCheck, MessageCircle, X } from "lucide-react";

export default function Services() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  const services = [
    {
      id: 1,
      name: "Mentoria Individual",
      badge: "Acompanhamento Vip",
      shortDesc: "Organize sua rotina, controle suas metas e prepare-se emocionalmente de forma focada.",
      icon: <UserCheck className="text-white" size={24} />,
      iconTheme: "bg-brand-teal",
      bullets: [
        "Organização personalizada de estudos conforme sua disponibilidade real",
        "Cronograma estratégico passo a passo de disciplinas",
        "Técnicas profissionais para resolução ágil de questões",
        "Análise contínua de desempenho e pontos fracos",
        "Preparação e controle emocional focado no dia da prova"
      ],
      whatsappMsg: "Olá! Gostaria de entender como funciona a Mentoria Individual do Ser Social para Concursos."
    }
  ];

  const getWhatsAppLink = (message: string) => {
    return `https://wa.me/5533984295746?text=${encodeURIComponent(message)}`;
  };

  return (
    <section id="services" className="py-24 bg-white relative scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <p className="text-xs font-extrabold tracking-widest uppercase text-brand-orange">
            SERVIÇO DISPONÍVEL
          </p>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-brand-teal-dark">
            Mentoria de Alto Rendimento com Acompanhamento Próximo
          </h2>
          <p className="mt-4 text-base text-brand-teal-light font-medium">
            Seja você estudante, recém-formado ou profissional experiente, fornecemos a estrutura de estudos indispensável para pavimentar seu caminho rumo à nomeação com foco 100% individual.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 max-w-2xl mx-auto">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="bg-brand-cream/40 border border-brand-cream-dark/60 rounded-3xl p-8 sm:p-12 hover:bg-white hover:shadow-xl hover:shadow-brand-teal-dark/5 hover:-translate-y-1 duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Header Icon + Badge */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-xl ${service.iconTheme} flex items-center justify-center shadow-md`}>
                    {service.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider bg-brand-cream-dark px-3 py-1 rounded-full text-brand-teal">
                    {service.badge}
                  </span>
                </div>

                {/* Name */}
                <h3 className="font-display text-3xl font-extrabold text-brand-teal-dark group-hover:text-brand-orange transition-colors">
                  {service.name}
                </h3>
                
                {/* Short Desc */}
                <p className="mt-4 text-base text-brand-teal-light leading-relaxed font-semibold">
                  {service.shortDesc}
                </p>

                {/* Bullets Preview */}
                <div className="mt-8 space-y-4">
                  {service.bullets.map((bullet, bIdx) => (
                    <div key={bIdx} className="flex gap-3 items-start">
                      <div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="text-emerald-700" size={14} />
                      </div>
                      <span className="text-sm text-brand-teal-light font-medium leading-normal">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions Footer */}
              <div className="mt-10 pt-8 border-t border-brand-cream-dark/45 flex flex-col sm:flex-row gap-4">
                <a
                  href={getWhatsAppLink(service.whatsappMsg)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-4 bg-brand-teal hover:bg-brand-teal-light text-white rounded-xl text-center text-sm font-bold shadow-md shadow-brand-teal/10 hover:shadow-lg transition-all flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <MessageCircle size={16} />
                  Saber Preço & Começar Mentoria
                  <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Service Details */}
        <AnimatePresence>
          {selectedService !== null && (
            <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4">
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedService(null)}
                className="fixed inset-0 bg-brand-charcoal/40 backdrop-blur-sm"
              />

              {/* Modal Box */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                className="relative bg-white border border-brand-cream-dark/90 rounded-3xl max-w-2xl w-full p-8 shadow-2xl z-20 overflow-hidden"
              >
                {/* Sparkle background patterns */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-brand-orange/5 rounded-full blur-2xl pointer-events-none" />
                
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 p-2 hover:bg-brand-cream rounded-full transition-colors"
                  aria-label="Minimizar detalhes"
                >
                  <X size={18} className="text-brand-teal" />
                </button>

                {/* Hero Inside Modal */}
                <span className="text-[10px] font-bold uppercase tracking-wider bg-brand-cream-dark text-brand-teal px-3 py-1 rounded-full">
                  {services[selectedService].badge}
                </span>

                <h3 className="font-display text-3xl font-extrabold text-brand-teal-dark mt-3">
                  {services[selectedService].name}
                </h3>
                
                <p className="mt-3 text-sm text-brand-teal-light leading-relaxed font-semibold">
                  {services[selectedService].shortDesc}
                </p>

                <div className="my-6 border-t border-brand-cream-dark/60 h-0" />

                {/* Full Bullets Content */}
                <h4 className="font-display text-sm font-extrabold text-brand-teal-dark uppercase tracking-wider mb-4">
                  O que está incluso e o que você vai aprender:
                </h4>

                <div className="space-y-3">
                  {services[selectedService].bullets.map((bullet, idx) => (
                    <div key={idx} className="flex gap-3 items-start">
                      <div className="w-5.5 h-5.5 rounded-full bg-emerald-100 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="text-emerald-700" size={13} />
                      </div>
                      <span className="text-sm text-brand-teal-light font-medium leading-relaxed">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <a
                    href={getWhatsAppLink(services[selectedService].whatsappMsg)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-4 bg-brand-orange hover:bg-brand-orange/90 text-white rounded-2xl text-center text-sm font-bold shadow-lg shadow-brand-orange/20 transition-all flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <MessageCircle size={16} />
                    Contratar via WhatsApp
                    <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="py-4 px-6 bg-slate-100 hover:bg-slate-200 text-brand-teal rounded-2xl text-sm font-bold transition-all"
                  >
                    Voltar ao Site
                  </button>
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
