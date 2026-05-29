import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { mockQuestions } from "../data/questions";
import { BookOpen, BookCheck, ClipboardList, CheckCircle, ArrowRight, RotateCcw, HelpCircle, GraduationCap, ChevronRight, Play, Calendar, Clock, Smile } from "lucide-react";

export default function StudyToolkit() {
  const [activeTab, setActiveTab] = useState<"quiz" | "planner">("quiz");

  // Quiz State
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [hasAnswered, setHasAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);

  // Study Planner State
  const [studyHours, setStudyHours] = useState(2);
  const [focusTopic, setFocusTopic] = useState("LOAS");
  const [generatedPlan, setGeneratedPlan] = useState<any[] | null>(null);
  const [checkedTasks, setCheckedTasks] = useState<Record<string, boolean>>({});

  const currentQuestion = mockQuestions[currentQuestionIdx];

  // Action: Handle Quiz Answer
  const handleAnswerSubmit = (optionIdx: number) => {
    if (hasAnswered) return;
    setSelectedOption(optionIdx);
    setHasAnswered(true);
    
    const isCorrect = optionIdx === currentQuestion.correctIndex;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
    setUserAnswers((prev) => [...prev, optionIdx]);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIdx < mockQuestions.length - 1) {
      setCurrentQuestionIdx((prev) => prev + 1);
      setSelectedOption(null);
      setHasAnswered(false);
    } else {
      setQuizFinished(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIdx(0);
    setSelectedOption(null);
    setHasAnswered(false);
    setScore(0);
    setQuizFinished(false);
    setUserAnswers([]);
  };

  // Action: Generate Study Plan
  const handleGeneratePlan = () => {
    // Generate simple customized weekly syllabus
    const topicsMap: Record<string, string[]> = {
      LOAS: [
        "LOAS: Origem, Financiamento e Coordenação",
        "LOAS: BPC (Benefício de Prestação Continuada) e Requisitos",
        "LOAS: Serviços de Proteção e Assistência",
        "LOAS: Organização e Financiamento do Sistema",
        "LOAS: Simulados e Revisão de Artigos Chave"
      ],
      SUAS: [
        "SUAS: Proteção Social Básica (CRAS, PAIF)",
        "SUAS: Proteção Social Especial de Média Complexidade (CREAS)",
        "SUAS: Proteção Social Especial de Alta Complexidade (Acolhimento)",
        "SUAS: Financiamento e Cofinanciamento Público",
        "SUAS: Tipificação Nacional de Serviços Socioassistenciais"
      ],
      "Ética Profissional": [
        "Ética: Projeto Ético-Político Profissional",
        "Ética: Código de Ética de 1993 - Princípios Fundamentais",
        "Ética: Deveres e Direitos do Assistente Social",
        "Ética: Relações com Instituições e Outras Categorias",
        "Ética: Prerrogativas e Sigilo Profissional"
      ],
      "Políticas Públicas": [
        "Políticas Públicas: Seguridade Social na CF/88 (Saúde, Previdência, Assistência)",
        "Políticas Públicas: Gênese das políticas sociais no Brasil",
        "Políticas Públicas: Planejamento, Formulação e Gestão",
        "Políticas Públicas: Controle Social e Conselhos de Direito",
        "Políticas Públicas: Avaliação de Políticas e Orçamento Público"
      ]
    };

    const coreTopics = topicsMap[focusTopic] || topicsMap["LOAS"];
    const planDays = [
      {
        day: "Segunda-feira",
        theme: coreTopics[0],
        tasks: [
          `Leitura e grifo direcionado da teoria comentada (${Math.round(studyHours * 40)} min)`,
          `Extrair 3 palavras-chave e fazer 1 mapa mental rápido`,
          `Fazer 5 questões da banca FCC ou FGV para testar fixação`
        ],
        tip: "Foque nos artigos iniciais e conceitos de diretrizes básicas."
      },
      {
        day: "Terça-feira",
        theme: coreTopics[1],
        tasks: [
          `Vídeo-aula ou leitura de resumos esquematizados (${Math.round(studyHours * 30)} min)`,
          `Revisar caderno de erros e pegadinhas de provas antigas`,
          `Resolução de 10 questões rápidas focadas no tema`
        ],
        tip: "Cuidado com os prazos de recursos ou limites financeiros da lei."
      },
      {
        day: "Quarta-feira",
        theme: coreTopics[2],
        tasks: [
          `Leitura direcionada da Lei Seca literal (${Math.round(studyHours * 30)} min)`,
          `Escrever autoexplicação de 3 minutos em áudio para fixar`,
          `Fazer 8 questões inéditas Ser Social`
        ],
        tip: "Grave áudios para si explicando as competências de cada ente federativo."
      },
      {
        day: "Quinta-feira",
        theme: coreTopics[3],
        tasks: [
          `Estudar exceções constitucionais e jurisprudência (${Math.round(studyHours * 45)} min)`,
          `Elaborar cartões de memória (Flashcards) de prazos`,
          `Resolver 12 questões mistas`
        ],
        tip: "Anotar e circular os termos 'sempre', 'pode' e 'deve' que as bancas costumam trocar."
      },
      {
        day: "Sexta-feira",
        theme: coreTopics[4],
        tasks: [
          `Grande Revisão Geral dos Mapas Mentais da semana (${Math.round(studyHours * 50)} min)`,
          `Minissimulado cronometrado de 15 questões (resolução de provas passadas)`,
          `Ajustar notas no caderno de resumos estratégicos`
        ],
        tip: "Tire a sexta para fechar as lacunas que errou nos simulados semanais."
      }
    ];

    setGeneratedPlan(planDays);
    setCheckedTasks({});
  };

  const toggleTask = (dayIdx: number, taskIdx: number) => {
    const key = `${dayIdx}-${taskIdx}`;
    setCheckedTasks((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <section id="toolkit" className="py-24 bg-brand-teal-dark text-white relative scroll-mt-10 overflow-hidden">
      
      {/* Background blobs for premium app feel */}
      <div className="absolute inset-0 pointer-events-none opacity-30 z-0">
        <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] bg-brand-orange/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-brand-gold/15 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-extrabold tracking-widest uppercase text-brand-gold">
            FERRAMENTAS DE PRÁTICA GRÁTIS
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-display font-extrabold tracking-tight text-white">
            Espaço de Estudos do Concurseiro
          </h2>
          <p className="mt-3 text-sm sm:text-base text-brand-cream-dark/80 max-w-2xl mx-auto">
            Experimente gratuitamente nossos simulados de legislação social e crie uma planilha estrategicamente ajustada às suas horas diárias.
          </p>

          {/* Tab buttons */}
          <div className="inline-flex p-1.5 bg-brand-teal/40 border border-brand-teal rounded-2xl mt-8">
            <button
              onClick={() => setActiveTab("quiz")}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === "quiz"
                  ? "bg-brand-orange text-white shadow-md shadow-brand-orange/20"
                  : "text-brand-cream-dark hover:text-white"
              }`}
            >
              <BookCheck size={16} />
              Simulador de Questões
            </button>
            <button
              onClick={() => setActiveTab("planner")}
              className={`px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm transition-all flex items-center gap-2 cursor-pointer ${
                activeTab === "planner"
                  ? "bg-brand-orange text-white shadow-md shadow-brand-orange/20"
                  : "text-brand-cream-dark hover:text-white"
              }`}
            >
              <ClipboardList size={16} />
              Gerador de Cronogramas
            </button>
          </div>
        </div>

        {/* Tab content rendering */}
        <div className="bg-brand-teal/20 border border-brand-teal/40 rounded-3xl p-6 sm:p-10 shadow-2xl">
          <AnimatePresence mode="wait">
            
            {/* Tab 1: Quiz Sim */}
            {activeTab === "quiz" && (
              <motion.div
                key="quiz"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                {!quizFinished ? (
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    
                    {/* Left Column: Progress & Question Column */}
                    <div className="lg:col-span-8">
                      {/* Subject Badge */}
                      <div className="flex items-center justify-between">
                        <span className="px-3 py-1 bg-brand-teal-light rounded-full text-xs font-bold font-mono tracking-wide text-brand-cream border border-brand-teal/65">
                          {currentQuestion.subject}
                        </span>
                        <span className="text-xs font-semibold text-brand-cream-dark/70">
                          Questão {currentQuestionIdx + 1} de {mockQuestions.length}
                        </span>
                      </div>

                      {/* Question Text */}
                      <h3 className="mt-5 text-lg sm:text-xl font-display font-extrabold leading-relaxed text-white">
                        {currentQuestion.statement}
                      </h3>

                      {/* Options List */}
                      <div className="mt-8 space-y-3">
                        {currentQuestion.options.map((option, idx) => {
                          // Background design logic depending on checked/correct states
                          let optBg = "bg-brand-teal/30 hover:bg-brand-teal/50 border-brand-teal/50";
                          let textStyle = "text-brand-cream";
                          let optNumBg = "bg-brand-teal/50 text-brand-gold";

                          if (hasAnswered) {
                            if (idx === currentQuestion.correctIndex) {
                              optBg = "bg-emerald-950/60 border-emerald-500/80 text-emerald-200";
                              optNumBg = "bg-emerald-500 text-white";
                            } else if (idx === selectedOption) {
                              optBg = "bg-rose-950/60 border-rose-500/80 text-rose-200";
                              optNumBg = "bg-rose-500 text-white";
                            } else {
                              optBg = "bg-brand-teal/10 border-brand-teal/20 opacity-60";
                              textStyle = "text-brand-cream/50";
                            }
                          }

                          return (
                            <button
                              key={idx}
                              onClick={() => handleAnswerSubmit(idx)}
                              disabled={hasAnswered}
                              className={`w-full p-4 rounded-xl border text-left text-xs sm:text-sm font-semibold transition-all duration-200 flex gap-4 items-start ${optBg} ${textStyle}`}
                            >
                              <div className={`w-6 h-6 rounded-lg ${optNumBg} flex items-center justify-center shrink-0 text-xs font-bold`}>
                                {String.fromCharCode(65 + idx)}
                              </div>
                              <span className="leading-snug">{option}</span>
                            </button>
                          );
                        })}
                      </div>

                      {/* Submit / Next Button */}
                      {hasAnswered && (
                        <div className="mt-8 flex justify-end">
                          <button
                            onClick={handleNextQuestion}
                            className="px-6 py-3 bg-brand-orange hover:bg-brand-orange/90 text-white rounded-xl font-bold text-sm shadow flex items-center gap-2 cursor-pointer transition-all"
                          >
                            {currentQuestionIdx < mockQuestions.length - 1 ? (
                              <>
                                Próxima Questão
                                <ArrowRight size={16} />
                              </>
                            ) : (
                              "Finalizar Simulado"
                            )}
                          </button>
                        </div>
                      )}
                    </div>

                    {/* Right Column: Custom Explain Box */}
                    <div className="lg:col-span-4 border-t lg:border-t-0 lg:border-l border-brand-teal/40 pt-8 lg:pt-0 lg:pl-8 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center gap-2 text-brand-gold font-bold text-sm mb-4">
                          <HelpCircle size={18} />
                          <span>Dica & Prática</span>
                        </div>
                        <p className="text-xs text-brand-cream-dark/95 leading-relaxed font-semibold">
                          As bancas de concursos sociais como FCC, Vunesp e FGV costumam confundir termos técnicos do SUAS/LOAS. Praticar com questões comentadas é a chave para o sucesso absoluto.
                        </p>
                      </div>

                      {/* Explanation Details */}
                      <div className="mt-6 bg-brand-teal-light/20 border border-brand-teal/50 rounded-2xl p-5">
                        {hasAnswered ? (
                          <div>
                            <p className="text-xs font-bold uppercase tracking-widest text-brand-gold mb-2">
                              Explicação Pedagógica:
                            </p>
                            <p className="text-xs text-brand-cream/90 leading-relaxed font-medium">
                              {currentQuestion.explanation}
                            </p>
                          </div>
                        ) : (
                          <div className="text-center py-6">
                            <span className="text-4xl">💭</span>
                            <p className="text-xs text-brand-cream-dark/80 mt-3 font-semibold">
                              Escolha uma das alternativas para visualizar os comentários estratégicos.
                            </p>
                          </div>
                        )}
                      </div>
                    </div>

                  </div>
                ) : (
                  // Quiz Finish View
                  <div className="text-center max-w-xl mx-auto py-8">
                    <div className="w-20 h-20 bg-brand-gold/10 rounded-full flex items-center justify-center text-brand-gold mx-auto mb-6">
                      <GraduationCap size={44} />
                    </div>

                    <h3 className="font-display text-4xl font-extrabold text-white">
                      {score === mockQuestions.length
                        ? "Parabéns! Desempenho excelente!"
                        : score >= 3
                        ? "Bom resultado! Continue Praticando!"
                        : "Precisamos focar nos estudos!"}
                    </h3>

                    <p className="mt-4 text-base text-brand-cream-dark/90 font-medium">
                      Você acertou <strong className="text-brand-gold text-lg">{score}</strong> de <strong className="text-white text-lg">{mockQuestions.length}</strong> questões.
                    </p>

                    {/* Simple performance breakdown */}
                    <div className="mt-6 p-4 rounded-xl bg-brand-teal/30 border border-brand-teal/50 text-xs sm:text-sm text-brand-cream/90 font-semibold space-y-1">
                      <p>LOAS: {userAnswers[0] === mockQuestions[0].correctIndex ? "✅ Correto" : "❌ Incorreto"}</p>
                      <p>SUAS: {userAnswers[1] === mockQuestions[1].correctIndex ? "✅ Correto" : "❌ Incorreto"}</p>
                      <p>Ética Profissional: {userAnswers[2] === mockQuestions[2].correctIndex ? "✅ Correto" : "❌ Incorreto"}</p>
                      <p>Políticas Públicas: {userAnswers[3] === mockQuestions[3].correctIndex ? "✅ Correto" : "❌ Incorreto"}</p>
                      <p>Educação Inclusiva: {userAnswers[4] === mockQuestions[4].correctIndex ? "✅ Correto" : "❌ Incorreto"}</p>
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                      <button
                        onClick={resetQuiz}
                        className="py-3 px-6 bg-brand-orange hover:bg-brand-orange/90 text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2 cursor-pointer transition-all"
                      >
                        <RotateCcw size={16} />
                        Reiniciar Questões
                      </button>
                      <a
                        href="https://wa.me/5533984295746?text=Olá! Completei o simulado gratuito do Ser Social e gostaria de saber as datas das próximas mentorias individuais."
                        target="_blank"
                        rel="noreferrer"
                        className="py-3 px-6 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl text-sm flex items-center justify-center gap-2 cursor-pointer transition-all"
                      >
                        Matricula e Mentoria Customizada
                      </a>
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {/* Tab 2: Cronograma Plan */}
            {activeTab === "planner" && (
              <motion.div
                key="planner"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.3 }}
              >
                {!generatedPlan ? (
                  // Initial Config Selector View
                  <div className="max-w-xl mx-auto py-6">
                    <h3 className="font-display text-2xl font-extrabold text-white text-center">
                      Crie seu cronograma personalizado de 5 dias
                    </h3>
                    <p className="mt-2 text-xs text-brand-cream-dark/80 text-center leading-relaxed">
                      Defina suas variáveis abaixo e nossa fórmula estratégica estruturará metas concisas divididas para o seu nível de tempo.
                    </p>

                    <div className="mt-8 space-y-6">
                      {/* Topic selection */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-brand-gold mb-3">
                          Foco Temático Principal:
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                          {["LOAS", "SUAS", "Ética Profissional", "Políticas Públicas"].map((topic) => (
                            <button
                              key={topic}
                              onClick={() => setFocusTopic(topic)}
                              className={`p-3.5 rounded-xl border text-xs font-bold text-center transition-all ${
                                focusTopic === topic
                                  ? "bg-brand-orange border-brand-orange text-white shadow-md shadow-brand-orange/20"
                                  : "bg-brand-teal/20 border-brand-teal/50 hover:bg-brand-teal/40"
                              }`}
                            >
                              {topic}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Hours slider / toggles */}
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-brand-gold mb-3 flex justify-between">
                          <span>Disponibilidade Diária de Estudo:</span>
                          <span className="text-white text-sm font-extrabold">{studyHours} {studyHours === 1 ? "Hora" : "Horas"}</span>
                        </label>
                        <div className="flex gap-4">
                          {[1, 2, 3, 4].map((hours) => (
                            <button
                              key={hours}
                              onClick={() => setStudyHours(hours)}
                              className={`flex-1 py-3.5 rounded-xl border text-xs font-bold text-center transition-all ${
                                studyHours === hours
                                  ? "bg-brand-teal border-white text-white shadow"
                                  : "bg-brand-teal/20 border-brand-teal/50 hover:bg-brand-teal/40"
                              }`}
                            >
                              {hours} {hours === 1 ? "Hora" : "Horas"}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Generate Action Button */}
                      <button
                        onClick={handleGeneratePlan}
                        className="w-full mt-8 py-4 bg-brand-orange hover:bg-brand-orange/90 text-white rounded-2xl font-bold text-sm shadow-lg shadow-brand-orange/20 transition-all flex items-center justify-center gap-2 cursor-pointer hover:scale-[1.01]"
                      >
                        <Play size={16} />
                        Gerar Meu Cronograma Estratégico
                      </button>
                    </div>
                  </div>
                ) : (
                  // Plan Output and Interactive checkboxes
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-brand-teal/40 pb-5 mb-8">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-widest text-brand-gold">
                          Cronograma Semanal Gerado
                        </span>
                        <h3 className="font-display text-2xl font-extrabold text-white mt-1">
                          Plano Estratégico: {focusTopic} — {studyHours}h/dia
                        </h3>
                      </div>
                      <button
                        onClick={() => setGeneratedPlan(null)}
                        className="text-xs font-bold hover:text-brand-gold transition-colors flex items-center gap-1.5 text-brand-cream-dark/80 mt-3 sm:mt-0 cursor-pointer"
                      >
                        <RotateCcw size={14} />
                        Configurar Novamente
                      </button>
                    </div>

                    {/* Timeline format */}
                    <div className="space-y-6">
                      {generatedPlan.map((dayPlan, dayIdx) => (
                        <div
                          key={dayIdx}
                          className="bg-brand-teal/30 border border-brand-teal/50 rounded-2xl p-5 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start"
                        >
                          {/* Day Column */}
                          <div className="lg:col-span-3 flex flex-col">
                            <span className="text-xs font-bold uppercase tracking-wider text-brand-gold flex items-center gap-1.5">
                              <Calendar size={14} />
                              {dayPlan.day}
                            </span>
                            <span className="text-sm font-extrabold text-white leading-tight mt-1">
                              {dayPlan.theme}
                            </span>
                          </div>

                          {/* Tasks Checklist */}
                          <div className="lg:col-span-5 space-y-2.5">
                            <span className="text-[10px] font-bold uppercase tracking-wider text-brand-cream-dark/70">
                              Metas e Tarefas Práticas:
                            </span>
                            {dayPlan.tasks.map((task: string, taskIdx: number) => {
                              const uniqueKey = `${dayIdx}-${taskIdx}`;
                              const isChecked = !!checkedTasks[uniqueKey];

                              return (
                                <div
                                  key={taskIdx}
                                  onClick={() => toggleTask(dayIdx, taskIdx)}
                                  className={`flex items-start gap-3 p-2.5 rounded-xl border transition-all cursor-pointer ${
                                    isChecked
                                      ? "bg-emerald-950/30 border-emerald-500/50 text-emerald-300"
                                      : "bg-brand-teal/10 border-brand-teal/30 hover:bg-brand-teal/20 text-brand-cream-dark"
                                  }`}
                                >
                                  <div className="mt-0.5 shrink-0">
                                    <div className={`w-4 h-4 rounded border flex items-center justify-center transition-all ${
                                      isChecked ? "bg-emerald-500 border-emerald-500" : "border-brand-cream-dark/50"
                                    }`}>
                                      {isChecked && <CheckCircle size={12} className="text-white" />}
                                    </div>
                                  </div>
                                  <span className={`text-xs ${isChecked ? "line-through opacity-60" : ""}`}>
                                    {task}
                                  </span>
                                </div>
                              );
                            })}
                          </div>

                          {/* Tips Box */}
                          <div className="lg:col-span-4 bg-brand-teal-light/25 border border-brand-teal/40 rounded-xl p-4 flex gap-3 items-start">
                            <Smile size={18} className="text-brand-orange shrink-0 mt-0.5" />
                            <div>
                              <p className="text-[10px] font-bold uppercase tracking-wider text-brand-orange">Dica do Mentor:</p>
                              <p className="text-xs text-brand-cream-dark/95 leading-normal font-semibold mt-1">
                                {dayPlan.tip}
                              </p>
                            </div>
                          </div>

                        </div>
                      ))}
                    </div>

                    {/* Bottom CTA block */}
                    <div className="mt-10 p-6 bg-brand-orange/15 rounded-2xl border border-brand-orange/40 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                      <div>
                        <h4 className="font-display font-extrabold text-base text-white">
                          Gostou da organização do cronograma?
                        </h4>
                        <p className="text-xs text-brand-cream-dark mt-1 leading-normal">
                          Isso é apenas 5% da experiência de Mentoria Individual estratégica. Agende uma chamada para criarmos seu mapa de estudos anual até a aprovação.
                        </p>
                      </div>
                      <a
                        href={`https://wa.me/5533984295746?text=Olá! Gere meu cronograma de ${focusTopic} de ${studyHours}h no site do Ser Social. Gostaria de agendar umaMentoria de estudos personalizada.`}
                        target="_blank"
                        rel="noreferrer"
                        className="py-3 px-6 bg-brand-orange hover:bg-brand-orange/95 text-white font-bold rounded-xl text-xs sm:text-sm text-center shadow-md shadow-brand-orange/10 shrink-0 cursor-pointer"
                      >
                        Agendar Chamada Grátis
                      </a>
                    </div>
                  </div>
                )}
              </motion.div>
            )}

          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
