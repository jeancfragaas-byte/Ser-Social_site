import React from "react";
import { motion } from "motion/react";
import { ArrowRight, BookOpen, Sparkles, CheckCircle2 } from "lucide-react";
import Logo from "./Logo";

interface HeroProps {
  onStartPractice: () => void;
  onExploreServices: () => void;
}

export default function Hero({ onStartPractice, onExploreServices }: HeroProps) {
  return (
    <section id="hero" className="relative min-h-screen pt-32 pb-24 overflow-hidden flex items-center">
      {/* Decorative background grids and blobs */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[50%] h-[50%] rounded-full bg-brand-gold/10 blur-[120px]" />
        <div className="absolute top-[40%] -right-[15%] w-[45%] h-[45%] rounded-full bg-brand-teal/5 blur-[100px]" />
        <div className="absolute -bottom-[10%] left-[20%] w-[40%] h-[40%] rounded-full bg-brand-orange/5 blur-[120px]" />
        
        {/* Fine grid overlay */}
        <div 
          className="absolute inset-0 opacity-[0.03]" 
          style={{ 
            backgroundImage: "radial-gradient(circle, #103338 1px, transparent 1px)", 
            backgroundSize: "24px 24px" 
          }} 
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Left Content */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-teal/10 border border-brand-teal/20 text-brand-teal-light text-xs font-semibold self-center lg:self-start mb-6"
            >
              <Sparkles size={14} className="text-brand-orange animate-pulse" />
              <span>Sua aprovação começa com estratégia.</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-brand-teal-dark leading-[1.1]"
            >
              Preparação inteligente para concursos de{" "}
              <span className="text-brand-orange relative inline-block">
                Serviço Social
                <span className="absolute left-0 bottom-1 w-full h-[6px] bg-brand-gold/30 -z-10 rounded" />
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg sm:text-xl text-brand-teal-light font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed"
            >
              “Estratégia, disciplina e prática para conquistar sua aprovação.”
            </motion.p>

            {/* Bullets */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap justify-center lg:justify-start gap-4 text-sm font-semibold text-brand-teal-dark"
            >
              <div className="flex items-center gap-2 bg-brand-cream-dark/40 px-3 py-1.5 rounded-lg border border-brand-cream-dark/80">
                <CheckCircle2 size={16} className="text-brand-orange shrink-0" />
                <span>Estude com direção.</span>
              </div>
              <div className="flex items-center gap-2 bg-brand-cream-dark/40 px-3 py-1.5 rounded-lg border border-brand-cream-dark/80">
                <CheckCircle2 size={16} className="text-brand-orange shrink-0" />
                <span>Transforme esforço em resultado.</span>
              </div>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <button
                onClick={onStartPractice}
                className="w-full sm:w-auto px-8 py-4 bg-brand-orange text-white hover:bg-brand-orange/95 rounded-2xl text-base font-bold shadow-lg shadow-brand-orange/20 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2.5 cursor-pointer group"
              >
                <BookOpen size={18} />
                Praticar com Simulados
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
              </button>
              
              <button
                onClick={onExploreServices}
                className="w-full sm:w-auto px-8 py-4 bg-white text-brand-teal border-2 border-brand-teal/20 hover:border-brand-teal/50 hover:bg-brand-cream-dark/20 rounded-2xl text-base font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                Conhecer Serviços
              </button>
            </motion.div>
          </div>

          {/* Hero Right Media / Brand Design Component */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="relative w-full max-w-[420px] aspect-square rounded-3xl bg-gradient-to-tr from-brand-teal-dark/5 to-brand-teal/10 border border-brand-teal/10 p-6 flex items-center justify-center shadow-xl shadow-brand-teal-dark/5"
            >
              {/* Outer decorative orbit circles */}
              <div className="absolute inset-4 rounded-full border-2 border-dashed border-brand-teal/20 animate-[spin_60s_linear_infinite]" />
              <div className="absolute inset-12 rounded-full border border-dashed border-brand-orange/20 animate-[spin_40s_linear_infinite_reverse]" />
              
              {/* Spinning Accent Dots */}
              <div className="absolute top-[20%] left-[20%] w-3 h-3 bg-brand-gold rounded-full animate-ping" />
              <div className="absolute bottom-[25%] right-[15%] w-2 h-2 bg-brand-orange rounded-full" />
              
              {/* Hero Centered Logo Frame */}
              <div className="relative z-10 p-10 rounded-full bg-brand-cream/90 border border-brand-cream-dark shadow-xl flex items-center justify-center hover:scale-105 transition-transform duration-300 group">
                <Logo size={180} />
                <div className="absolute -bottom-2 px-4 py-1.5 bg-brand-teal-dark text-brand-cream text-xs font-bold tracking-widest uppercase rounded-lg border border-brand-teal shadow">
                  Aprovação Garantida
                </div>
              </div>

              {/* Float Cards */}
              <div className="absolute -top-4 -right-2 bg-white/90 backdrop-blur border border-brand-cream-dark p-3.5 rounded-2xl shadow-lg flex items-center gap-3 animate-bounce shadow-brand-teal-dark/5">
                <div className="w-9 h-9 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-600">
                  <CheckCircle2 size={18} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-mono tracking-wider text-brand-teal-light">Método</p>
                  <p className="text-xs font-extrabold text-brand-teal-dark">Foco 100% Prático</p>
                </div>
              </div>

              <div className="absolute -bottom-3 -left-4 bg-white/90 backdrop-blur border border-brand-cream-dark p-3.5 rounded-2xl shadow-lg flex items-center gap-3 shadow-brand-teal-dark/5">
                <div className="w-9 h-9 rounded-lg bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                  <Logo size={24} />
                </div>
                <div>
                  <p className="text-[10px] uppercase font-mono tracking-wider text-brand-teal-light">Mentoria</p>
                  <p className="text-xs font-extrabold text-brand-teal-dark">SUAS, LOAS & Ética</p>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
