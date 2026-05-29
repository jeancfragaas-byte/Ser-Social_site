import React from "react";
import { motion } from "motion/react";
import { GraduationCap, Award, Calendar, CheckSquare, Target, HeartHandshake } from "lucide-react";

export default function About() {
  const pillars = [
    {
      icon: <GraduationCap className="text-brand-teal" size={24} />,
      title: "Legislação Social",
      desc: "Domínio profundo das principais legislações cobradas em provas, traduzidas com clareza."
    },
    {
      icon: <Target className="text-brand-orange" size={24} />,
      title: "Estratégia de Estudos",
      desc: "Rotinas personalizadas e cronogramas eficientes para otimizar o seu tempo precioso."
    },
    {
      icon: <CheckSquare className="text-brand-gold" size={24} />,
      title: "Interpretação de Editais",
      desc: "Mapeamento minucioso dos pontos que mais caem para focar no que realmente importa."
    }
  ];

  return (
    <section id="about" className="py-24 bg-brand-cream-dark/30 border-y border-brand-cream-dark/60 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          
          {/* About Image/Illustration Overlay */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative">
              {/* Outer decorative blob style */}
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-brand-gold/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-brand-teal/10 rounded-full blur-2xl" />
              
              {/* Main Profile Graphic Board */}
              <div className="relative bg-white border border-brand-cream-dark rounded-3xl p-8 shadow-xl">
                <div className="flex flex-col items-center text-center">
                  {/* Decorative Profile Circular Avatar Icon frame */}
                  <div className="w-24 h-24 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal text-4xl font-extrabold border-2 border-brand-teal/20 shadow">
                    SS
                  </div>
                  <h3 className="mt-4 font-display text-xl font-bold text-brand-teal-dark">Ser Social</h3>
                  <p className="text-xs text-brand-orange font-semibold tracking-wider uppercase mt-1">Especialista & Mentor</p>
                  
                  <div className="w-full h-[1px] bg-brand-cream-dark/80 my-5" />
                  
                  <p className="text-sm text-brand-teal-light italic leading-relaxed font-medium">
                    "Transformando conteúdos complexos em métodos práticos e acessíveis para mudar de vida através do serviço público."
                  </p>
                  
                  {/* Experience tags info list */}
                  <div className="w-full mt-6 grid grid-cols-2 gap-3 text-left">
                    <div className="p-3 bg-brand-cream rounded-xl border border-brand-cream-dark/50">
                      <p className="text-lg font-extrabold text-brand-teal">100%</p>
                      <p className="text-[10px] font-bold text-brand-teal-light uppercase font-mono tracking-wider">Foco Social</p>
                    </div>
                    <div className="p-3 bg-brand-cream rounded-xl border border-brand-cream-dark/50">
                      <p className="text-lg font-extrabold text-brand-teal">Práxis</p>
                      <p className="text-[10px] font-bold text-brand-teal-light uppercase font-mono tracking-wider">Atendimento</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Float Experience Badge */}
              <div className="absolute top-1/2 -right-6 transform -translate-y-1/2 bg-brand-teal-dark border border-brand-teal text-white py-3.5 px-5 rounded-2xl shadow-xl hidden sm:flex items-center gap-3">
                <Award size={24} className="text-brand-gold" />
                <div>
                  <p className="text-[9px] uppercase font-mono tracking-widest text-brand-gold font-bold">Experiência</p>
                  <p className="text-xs font-semibold">Setor Público e Social</p>
                </div>
              </div>
            </div>
          </div>

          {/* About Text Content */}
          <div className="lg:col-span-7 order-1 lg:order-2">
            <p className="text-xs font-extrabold tracking-widest uppercase text-brand-orange">
              SOBRE O MENTOR
            </p>
            <h2 className="mt-3 text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-brand-teal-dark">
              Direcionamento profissional para quem busca estabilidade pública
            </h2>
            
            <p className="mt-6 text-base text-brand-teal-light font-medium leading-relaxed">
              Como assistente social, mentor educacional e especialista em preparação para concursos na área de <strong>Serviço Social</strong>, meu propósito é simplificar a sua caminhada rumo ao cargo público. Auxilio estudantes e profissionais na construção de estratégias eficientes de estudo, interpretação de editais, organização de rotina e domínio das principais legislações cobradas em concursos.
            </p>
            
            <p className="mt-4 text-base text-brand-teal-light font-medium leading-relaxed">
              Com sólida experiência em políticas públicas, assistência social e educação, meu foco está em transformar conteúdos que costumam parecer complexos em métodos práticos, altamente acessíveis e voltados essencialmente à sua aprovação.
            </p>

            {/* Three Pillar Cards */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="flex flex-col gap-3 p-4 rounded-xl bg-white/60 border border-brand-cream-dark/80 hover:shadow-md transition-shadow">
                  <div className="w-10 h-10 rounded-lg bg-brand-cream flex items-center justify-center shadow-sm">
                    {pillar.icon}
                  </div>
                  <h4 className="font-display font-bold text-sm text-brand-teal-dark">{pillar.title}</h4>
                  <p className="text-xs text-brand-teal-light leading-relaxed">{pillar.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
