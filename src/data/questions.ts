import { QuizQuestion } from "../types";

export const mockQuestions: QuizQuestion[] = [
  {
    id: 1,
    subject: "LOAS (Lei Orgânica da Assistência Social)",
    statement: "O Benefício de Prestação Continuada (BPC), previsto na LOAS (Lei nº 8.742/1993), consiste em:",
    options: [
      "Um auxílio-natalidade temporário pago às famílias em situação de extrema vulnerabilidade com gestantes ativos.",
      "A garantia de um salário-mínimo mensal à pessoa com deficiência e ao idoso com 65 anos ou mais que comprovem não possuir meios de prover a própria manutenção.",
      "Um benefício previdenciário vitalício que exige carência prévia de contribuições ao INSS de pelo menos 12 meses.",
      "A transferência de renda condicionada à frequência escolar de dependentes, integrada ao programa Bolsa Família."
    ],
    correctIndex: 1,
    explanation: "Correto! O BPC é um benefício da Assistência Social (não-contributivo) que garante 1 salário-mínimo mensal para idosos acima de 65 anos ou pessoas com deficiência que não tenham condições de se sustentar ou de serem sustentados por suas famílias."
  },
  {
    id: 2,
    subject: "SUAS (Sistema Único de Assistência Social)",
    statement: "Em conformidade com a organização de serviços do SUAS, a atenção voltada a famílias e indivíduos em situação de vulnerabilidade social decorrente da pobreza, privação ou fragilização de vínculos afetivos, sem perda de autonomia, constitui atribuição da:",
    options: [
      "Proteção Social Especial de Média Complexidade, executada no CREAS.",
      "Vigilância Socioassistencial Centralizada, executada na Secretaria de Estado.",
      "Proteção Social Básica, operacionalizada prioritariamente no CRAS (Centro de Referência de Assistência Social).",
      "Proteção Social Especial de Alta Complexidade, executada em abrigos institucionais."
    ],
    correctIndex: 2,
    explanation: "Excelente! A Proteção Social Básica visa prevenir situações de risco e fortalecer vínculos familiares/comunitários, sendo ofertada no CRAS. Já o CREAS cuida da Proteção Especial quando já houver violação de direitos configurada."
  },
  {
    id: 3,
    subject: "Ética Profissional (Código de 1993)",
    statement: "Dentre os princípios fundamentais do Código de Ética do Assistente Social de 1993, destaca-se:",
    options: [
      "A submissão das escolhas éticas individuais às diretrizes burocráticas institucionais contratantes.",
      "O reconhecimento do sigilo profissional como uma preferência flexível de acordo com a conveniência do empregador.",
      "A defesa intransigente dos direitos humanos e recusa do arbítrio e do autoritarismo.",
      "A centralidade da dimensão religiosa sobre a intervenção profissional do Assistente Social."
    ],
    correctIndex: 3,
    explanation: "Isso mesmo! O Código de 1993 é pautado pelo projeto ético-político profissional anticapitalista e emancipatório, defendendo intransigentemente os direitos humanos, a liberdade e a democracia, recusando o arbítrio institucional ou autoritário."
  },
  {
    id: 4,
    subject: "Políticas Públicas & Seguridade Social",
    statement: "De acordo com a Constituição Federal de 1988, a Seguridade Social compõe o orçamento e as diretrizes de três áreas integradas:",
    options: [
      "Educação, Saúde e Saneamento Básico.",
      "Saúde, Previdência Social e Assistência Social.",
      "Trabalho, Previdência Social e Habitação Popular.",
      "Assistência Social, Segurança Pública e Defesa Civil."
    ],
    correctIndex: 1,
    explanation: "Corretíssimo! A famosa 'tríade da Seguridade Social' no Art. 194 da CF/88 é constituída pela Saúde (Universal), Previdência Social (Contributiva) e Assistência Social (Não-contributiva)."
  },
  {
    id: 5,
    subject: "Educação Especial e Inclusão",
    statement: "O atendimento educacional especializado (AEE) na perspectiva da educação inclusiva tem como principal finalidade:",
    options: [
      "Substituir a escolarização comum de alunos com deficiência em salas regulares, agrupando-os em escolas especiais isoladas.",
      "Oferecer reforço escolar de disciplinas comuns em horários coincidentes com as aulas do ensino regular.",
      "Prover recursos de acessibilidade e estratégias pedagógicas que eliminem barreiras para a plena participação e aprendizagem no ensino regular.",
      "Avaliar se os estudantes especiais reúnem as condições técnicas mínimas exigidas para ingressar no convívio social local."
    ],
    correctIndex: 2,
    explanation: "Exatamente! O AEE tem função complementar ou suplementar ao ensino regular (atendido no contraturno) para eliminar barreiras físicas, comunicacionais e pedagógicas, fomentando a autonomia de alunos especiais."
  }
];
