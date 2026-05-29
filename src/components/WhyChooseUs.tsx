import React from "react";
import { motion } from "motion/react";
import { Users2, ShieldCheck, Zap, Laptop, Flame, BookOpenCheck, Bookmark, Compass } from "lucide-react";

export default function WhyChooseUs() {
  const targetAudience = [
    {
      role: "Estudantes de Serviço Social",
      desc: "Comece a trilhar sua carreira pública antes mesmo de colar grau, pegando as bases e atalhos certos de provas.",
      accent: "border-l-4 border-brand-teal"
    },
    {
      role: "Recém-Formados",
      desc: "Inicie no mercado de trabalho com o pé direito direto na estabilidade profissional, sem passar pela instabilidade da CLT.",
      accent: "border-l-4 border-brand-orange"
    },
    {
      role: "Concurseiros Experientes",
      desc: "Identifique gargalos de rendimento e preencha lacunas em legislações sociais para decolar sua pontuação média.",
      accent: "border-l-4 border-brand-gold"
    },
    {
      role: "Profissionais de Serviço Social",
      desc: "Conquiste estabilidade financeira, planos de carreira municipais/estaduais e ótimas condições de trabalho.",
      accent: "border-l-4 border-brand-teal-dark"
    }
  ];

  const differentials = [
    {
      icon: <Users2 className="text-brand-orange" size={22} />,
      title: "Atendimento voltado para sua realidade",
      desc: "Métodos que se adequam à sua rotina real, seja trabalhando, cuidando da família ou estagiando."
    },
    {
      icon: <Zap className="text-brand-gold" size={22} />,
      title: "Linguagem simples e objetiva",
      desc: "Tradução livre da burocracia das leis em esquemas e resumos rápidos e fáceis de assimilar."
    },
    {
      icon: <ShieldCheck className="text-brand-teal" size={22} />,
      title: "Experiência na área pública",
      desc: "Instrução vinda de quem atua no Serviço Social público e entende o dia a dia e as bancas examinadoras."
    },
    {
      icon: <BookOpenCheck className="text-brand-teal-dark" size={22} />,
      title: "Método focado em aprovação",
      desc: "Sem enrolação com teorias infinitas que não constam em provas. Aqui estudamos o edital inteligente."
    }
  ];

  return (
    <section id="differentials" className="py-24 bg-brand-cream/50 relative scroll-mt-10 border-top border-brand-cream-dark/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* Target Audience (Público-Alvo) */}
          <div className="lg:col-span-6">
            <span className="text-xs font-extrabold tracking-widest uppercase text-brand-orange">
              PARA QUEM É?
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-brand-teal-dark">
              Público-Alvo da Preparação
            </h2>
            <p className="mt-4 text-base text-brand-teal-light font-medium max-w-xl">
              Nossa abordagem pedagógica foi desenhada metodologicamente para atender a diferentes momentos e perfis:
            </p>

            <div className="mt-8 space-y-4">
              {targetAudience.map((audience, index) => (
                <div
                  key={index}
                  className={`bg-white p-5 rounded-2xl border border-brand-cream-dark/80 shadow-sm hover:shadow-md transition-shadow ${audience.accent}`}
                >
                  <h4 className="font-display font-bold text-base text-brand-teal-dark">
                    {audience.role}
                  </h4>
                  <p className="mt-1.5 text-xs text-brand-teal-light leading-relaxed font-semibold">
                    {audience.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Differentials (Diferenciais) */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <span className="text-xs font-extrabold tracking-widest uppercase text-brand-orange">
              POR QUE O SER SOCIAL?
            </span>
            <h2 className="mt-3 text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-brand-teal-dark">
              Nossos Diferenciais Estruturais
            </h2>
            <p className="mt-4 text-base text-brand-teal-light font-medium max-w-xl">
              Não somos apenas mais um curso preparatório comum. Construímos um suporte próximo, realista e focado na prática de questões.
            </p>

            {/* Differentials Grid */}
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {differentials.map((item, index) => (
                <div
                  key={index}
                  className="bg-brand-cream-dark/20 border border-brand-cream-dark/50 p-5 rounded-2xl flex flex-col gap-3 group hover:border-brand-teal/20 hover:bg-white hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-white border border-brand-cream-dark flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-sm">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-display font-bold text-sm text-brand-teal-dark leading-snug">
                      {item.title}
                    </h4>
                    <p className="mt-1.5 text-xs text-brand-teal-light leading-relaxed font-semibold">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom visual quote strip */}
            <div className="mt-10 p-5 bg-gradient-to-r from-brand-teal-dark to-brand-teal rounded-2xl border border-brand-teal text-white shadow-lg shadow-brand-teal-dark/10 flex items-center gap-4">
              <div className="p-3 bg-white/10 rounded-xl shrink-0">
                <Compass className="text-brand-gold animate-spin" style={{ animationDuration: "12s" }} size={24} />
              </div>
              <p className="text-xs sm:text-sm font-semibold leading-relaxed">
                “A sua preparação inteligente necessita de um mentor focado e de uma estratégia sólida de memorização.”
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
