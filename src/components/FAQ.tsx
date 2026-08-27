import { AnimatePresence, motion } from "framer-motion";
import { HelpCircle, Plus } from "lucide-react";
import { useState } from "react";
import { CONTACT } from "./cn";

type QA = { q: string; a: string };

const FAQS: QA[] = [
  {
    q: "Como faço para reservar?",
    a: "A reserva pode ser feita diretamente pelo nosso WhatsApp ou pelo telefone da pousada. A equipe confirma a disponibilidade, envia as opções de acomodação e orienta sobre os próximos passos — de forma rápida e pessoal.",
  },
  {
    q: "Posso levar meu pet?",
    a: "Sim — somos uma pousada pet-friendly de coração. Os pets são bem-vindos em todas as acomodações, têm uma piscina exclusiva de 10m, café da manhã com biscoitinhos e muffins naturais, e tratamos os quartos com produtos específicos para minimizar alergias.",
  },
  {
    q: "Qual o horário de check-in e check-out?",
    a: "A recepção funciona 24 horas, então você pode chegar a qualquer hora do dia ou da noite. Os horários padrão de check-in e check-out são combinados no momento da reserva para garantir que tudo esteja pronto para a sua estadia.",
  },
  {
    q: "O café da manhã está incluso?",
    a: "Sim. O café da manhã é um dos nossos carros-chefe — com waffles, panquecas, bolos com farinhas funcionais, frios, tapiocas e geleias caseiras. Atendemos intolerantes a lactose, glúten, vegetarianos e veganos.",
  },
  {
    q: "Como funciona o aluguel mensal dos bangalôs?",
    a: "Os bangalôs Original e Plus estão disponíveis para aluguel mensal, com cozinha equipada e toda a estrutura da pousada à disposição. Ideal para quem quer viver o Sertão do Camburi por temporadas mais longas. Consulte condições pelo WhatsApp.",
  },
  {
    q: "Quais formas de pagamento são aceitas?",
    a: "As formas de pagamento são combinadas no ato da reserva. Entre em contato pelo WhatsApp para receber as condições atualizadas e garantir sua estadia.",
  },
  {
    q: "As aventuras de ecoturismo estão inclusas na diária?",
    a: "As trilhas, mergulhos, passeios de barco e rapel são atividades opcionais que podem ser reservadas junto com a sua estadia. Cada aventura tem duração, nível de dificuldade e equipamentos próprios — confira a seção de Ecoturismo e combine com a recepção.",
  },
  {
    q: "Vocês recebem eventos e casamentos?",
    a: "Sim. Temos um espaço de 400m² coberto com toldos e piso de areia, além de uma sala fechada de 49m² para reuniões. Recebemos eventos corporativos, casamentos, aniversários e retiros — com condições especiais para padrinhos e decoração de lua de mel.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative bg-[#f3ecdb] py-24 sm:py-32 lg:py-36">
      <div className="mx-auto max-w-4xl px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-12 sm:mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12% 0px" }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center justify-center gap-4"
          >
            <span className="field-no text-2xl">08</span>
            <span className="eyebrow">Perguntas frequentes</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12% 0px" }}
            transition={{ duration: 0.7 }}
            className="font-display text-[2.2rem] leading-[1.05] text-[#14271f] sm:text-[3rem]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Tudo o que você precisa
            <span className="block italic text-[#9c4d1c]">saber antes de vir.</span>
          </motion.h2>
        </div>

        {/* Accordion */}
        <div className="flex flex-col gap-3">
          {FAQS.map((item, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-6% 0px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
                className={`overflow-hidden rounded-[var(--radius-card)] border bg-[#fbf6ea] transition-colors duration-300 ${
                  isOpen
                    ? "border-[#e07a3c]/40 shadow-[var(--shadow-subtle)]"
                    : "border-[#d9cfb8]"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-7"
                >
                  <span className="font-display text-[1.05rem] text-[#14271f] sm:text-[1.2rem]" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>
                    {item.q}
                  </span>
                  <motion.span
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
                      isOpen
                        ? "bg-[#e07a3c] text-white"
                        : "bg-[#1f3a2e] text-[#e8b547]"
                    }`}
                  >
                    <Plus size={16} />
                  </motion.span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p className="px-6 pb-6 text-[0.9rem] leading-relaxed text-[#4a4030] sm:px-7">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex flex-col items-center gap-3 rounded-2xl border border-[#d9cfb8] bg-[#fbf6ea] px-6 py-6 text-center sm:flex-row sm:justify-center sm:gap-4"
        >
          <HelpCircle size={20} className="shrink-0 text-[#9c4d1c]" />
          <p className="text-sm text-[#4a4030]">
            Ficou com outra dúvida?{" "}
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="cta"
              className="font-semibold text-[#9c4d1c] underline-offset-4 transition-colors hover:text-[#8b4419] hover:underline"
            >
              Fale com a gente pelo WhatsApp
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}
