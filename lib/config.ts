/**
 * Configurações do projeto.
 *
 * A data-alvo vem de NEXT_PUBLIC_TARGET_DATE (opcional).
 * Sem a variável, usa a formatura: 18/12/2026.
 * Sem fuso no texto ISO, a data é interpretada no horário local de quem abre a página.
 */
export const TARGET_DATE_ISO =
  process.env.NEXT_PUBLIC_TARGET_DATE ?? "2026-12-18T00:00:00";

export const TARGET_DATE = new Date(TARGET_DATE_ISO);

export const TITLE = "Contagem Regressiva para a Formatura";
export const FOOTER_MESSAGE =
  "Cada segundo te deixa mais perto da sua conquista! 💖";
export const FINISH_MESSAGE = "🎓 Parabéns! O semestre chegou ao fim!";
