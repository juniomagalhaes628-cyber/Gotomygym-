/**
 * Conteúdo editável das secções (aulas, textos).
 * Troca aqui os nomes, descrições e ícones das modalidades.
 */

export type GymClass = {
  name: string;
  description: string;
  /** nome do ícone definido em components/icons.tsx */
  icon: "dumbbell" | "heart" | "bike" | "flame" | "users" | "star";
};

export const gymClasses: GymClass[] = [
  {
    name: "Musculação",
    description:
      "Sala de treino completa com equipamento moderno e apoio técnico no local.",
    icon: "dumbbell",
  },
  {
    name: "Cardio",
    description:
      "Passadeiras, elípticas e bicicletas para melhorar a tua resistência.",
    icon: "heart",
  },
  {
    name: "Cycling",
    description:
      "Aulas de grupo intensas ao ritmo da música. Queima calorias a pedalar.",
    icon: "bike",
  },
  {
    name: "Treino Funcional",
    description:
      "Movimentos completos para força, mobilidade e condição física geral.",
    icon: "flame",
  },
  {
    name: "Aulas de Grupo",
    description:
      "GAP, localizada e muito mais. Motivação em equipa, resultados individuais.",
    icon: "users",
  },
  {
    name: "Personal Training",
    description:
      "Planos personalizados e acompanhamento dedicado para os teus objetivos.",
    icon: "star",
  },
];

/**
 * Avaliações reais do Google (traduzidas quando o original não é português).
 * Acrescenta ou troca aqui — aparecem na secção "Avaliações".
 */
export type Review = {
  name: string;
  text: string;
  meta?: string;
};

export const reviews: Review[] = [
  {
    name: "Paula Rocha",
    text: "Excelente espaço, staff e ambiente. Um ginásio onde nos sentimos bem e queremos definitivamente voltar.",
  },
  {
    name: "Louk den Hartogh",
    text: "Ginásio maravilhoso e acolhedor! Ótimos equipamentos e muitos pesos. Mesmo sem falarmos português, como turistas, fomos muito bem recebidos. Uma ótima experiência de treino durante as nossas férias!",
    meta: "traduzida do holandês",
  },
  {
    name: "Ruben van Veen",
    text: "O melhor ginásio que já frequentei. Equipamentos excelentes e staff super simpático.",
    meta: "traduzida do holandês",
  },
  {
    name: "David Gomes",
    text: "Boas instalações, e sempre prontos para nos ajudar em qualquer questão.",
  },
  {
    name: "Siem Bleker",
    text: "O melhor ginásio da zona, com staff simpático. Ótimo para usar durante as férias ou como ginásio habitual.",
    meta: "traduzida do holandês",
  },
  {
    name: "Stijn De Jong",
    text: "Ótimo ginásio, com muitos equipamentos. E ainda tinha água gelada grátis!",
    meta: "traduzida do holandês",
  },
];

/**
 * Perguntas frequentes — também geram o schema FAQPage para o Google.
 */
export type Faq = {
  question: string;
  answer: string;
};

export const faqs: Faq[] = [
  {
    question: "Como marco uma aula experimental?",
    answer:
      "Envia-nos mensagem pelo WhatsApp (916 337 461), liga-nos ou passa pelo ginásio na Avenida Central de Portela. Combinamos contigo o melhor dia e hora.",
  },
  {
    question: "Preciso de ter experiência para começar?",
    answer:
      "Não. A nossa equipa acompanha-te desde o primeiro treino, explica os equipamentos e ajusta o plano ao teu nível e objetivos.",
  },
  {
    question: "Quais são os horários?",
    answer:
      "Segunda a sexta das 7h às 22h, sábado das 7h às 19h e domingo das 8h às 12h.",
  },
  {
    question: "Como sei os preços e planos?",
    answer:
      "Fala connosco pelo WhatsApp ou visita-nos — explicamos as opções sem compromisso e ajudamos-te a escolher o plano certo para ti.",
  },
  {
    question: "Estou de passagem por Penafiel. Posso treinar?",
    answer:
      "Claro! Recebemos regularmente visitantes e turistas. Contacta-nos ou aparece no ginásio.",
  },
];

export const aboutText = {
  title: "Mais do que um ginásio",
  paragraphs: [
    "O Go to Gym é um ginásio independente no coração de Portela, Penafiel. Aqui não és só mais um número: conhecemos-te pelo nome, acompanhamos o teu progresso e ajustamos o treino aos teus objetivos.",
    "Com uma classificação de 4,8★ dada pela nossa comunidade, o nosso compromisso é simples — um espaço limpo, seguro e bem equipado, com uma equipa que te puxa para cima em cada treino.",
  ],
};
