import React from "react";
import { motion } from "motion/react";
import { Quote, Star, Trophy } from "lucide-react";

export default function Testimonials() {
  const reviews = [
    {
      id: 1,
      quote: "Depois da mentoria consegui organizar meus estudos e fui aprovada em primeiro lugar no concurso municipal.",
      author: "Juliana Ferreira",
      role: "Aprovada Assistente Social Municipal",
      initials: "JF"
    },
    {
      id: 2,
      quote: "Os simulados ajudaram muito na interpretação das questões complexas das bancas. O método de eliminação é fantástico.",
      author: "Renata Souza",
      role: "Estudante e Concurseira de Elite",
      initials: "RS"
    },
    {
      id: 3,
      quote: "Conteúdo direto ao ponto e extremamente atualizado. Sem enrolação teórica, focado 100% no que as bancas cobram.",
      author: "Felipe Martins",
      role: "Especialista em Seguridade Social",
      initials: "FM"
    }
  ];

  return (
    <section id="testimonials" className="py-24 bg-white relative scroll-mt-10 overflow-hidden">
      {/* Visual background badges */}
      <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-brand-orange/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-extrabold tracking-widest uppercase text-brand-orange">
            RESULTADOS REAIS
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-brand-teal-dark">
            Quem estudou com estratégia, aprovou!
          </h2>
          <p className="mt-4 text-sm sm:text-base text-brand-teal-light font-medium">
            Confira o depoimento de alunos e profissionais que confiaram no método e conquistaram suas colocações.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((item) => (
            <div
              key={item.id}
              className="bg-brand-cream/30 border border-brand-cream-dark/60 rounded-3xl p-8 hover:-translate-y-1.5 duration-300 relative flex flex-col justify-between hover:shadow-xl hover:shadow-brand-teal-dark/5"
            >
              {/* Quotation icon background ornament */}
              <div className="absolute top-6 right-8 text-brand-orange/15">
                <Quote size={50} style={{ transform: "rotate(180deg)" }} />
              </div>

              <div>
                {/* Visual Stars */}
                <div className="flex gap-1.5 text-brand-gold mb-6">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} size={15} fill="currentColor" />
                  ))}
                </div>

                <p className="text-sm text-brand-teal-dark/95 leading-relaxed font-semibold italic relative z-1 p-0.5">
                  “{item.quote}”
                </p>
              </div>

              {/* Author Footer Profile */}
              <div className="mt-8 pt-6 border-t border-brand-cream-dark/50 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-brand-teal/10 border border-brand-teal/20 flex items-center justify-center text-brand-teal text-xs font-bold tracking-wider shrink-0 shadow-sm">
                  {item.initials}
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-brand-teal-dark">
                    {item.author}
                  </h4>
                  <div className="flex items-center gap-1 mt-0.5 text-[10px] font-bold text-brand-orange uppercase tracking-wide">
                    <Trophy size={11} className="shrink-0" />
                    <span>{item.role}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner stats */}
        <div className="mt-16 bg-brand-teal rounded-3xl border border-brand-teal-light p-8 md:p-12 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h3 className="font-display text-2xl md:text-3xl font-extrabold text-white">
              Sua história pode ser a próxima aqui listada.
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-brand-cream/90 leading-relaxed font-medium">
              A mentoria profissional não apenas poupa horas de erros repetidos, mas te ensina o método exato de interpretação que te coloca à frente de 95% dos inscritos.
            </p>
          </div>
          <a
            href="https://wa.me/5533984295746?text=Olá! Estava navegando no site do Ser Social para Concursos e decidi que quero começar a me preparar de forma estratégica hoje!"
            target="_blank"
            rel="noreferrer"
            className="w-full md:w-auto px-8 py-4 bg-brand-gold hover:bg-brand-gold/90 text-brand-teal-dark font-extrabold text-sm sm:text-base rounded-2xl shadow-lg transition-all text-center shrink-0 cursor-pointer"
          >
            Começar Minha Preparação Hoje
          </a>
        </div>

      </div>
    </section>
  );
}
