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

export const aboutText = {
  title: "Mais do que um ginásio",
  paragraphs: [
    "O Go to Gym é um ginásio independente no coração de Portela, Penafiel. Aqui não és só mais um número: conhecemos-te pelo nome, acompanhamos o teu progresso e ajustamos o treino aos teus objetivos.",
    "Com uma classificação de 4,8★ dada pela nossa comunidade, o nosso compromisso é simples — um espaço limpo, seguro e bem equipado, com uma equipa que te puxa para cima em cada treino.",
  ],
};
