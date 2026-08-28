import { AnimatePresence, motion } from "framer-motion";
import { HelpCircle, Plus } from "lucide-react";
import { useState } from "react";
import { CONTACT } from "./cn";

type Category =
  | "Estadia & check-in"
  | "Pets"
  | "Estrutura"
  | "Reservas & pagamentos"
  | "Localização & arredores";

type QA = { q: string; a: string; category: Category };

const CATEGORY_ORDER: Category[] = [
  "Estadia & check-in",
  "Pets",
  "Estrutura",
  "Reservas & pagamentos",
  "Localização & arredores",
];

const FAQS: QA[] = [
  {
    q: "Onde a Pousada Portal do Cacau está localizada?",
    a: "Estamos localizados no Sertão do Camburi, em São Sebastião (SP), em meio à Mata Atlântica e a poucos minutos da Praia de Camburi.",
    category: "Localização & arredores",
  },
  {
    q: "Qual a distância até a Praia de Camburi?",
    a: "Estamos a aproximadamente 1.500 metros da praia, cerca de 3 a 5 minutos de carro.",
    category: "Localização & arredores",
  },
  {
    q: "A pousada é realmente pet friendly?",
    a: "Sim! Aqui os pets são hóspedes especiais e são muito bem-vindos. Temos estrutura 100% dedicada a eles — piscina, café da manhã, espaço de festa e cãocierge.",
    category: "Pets",
  },
  {
    q: "Existe limite de porte para os pets?",
    a: "Recebemos pets de pequeno, médio e grande porte, desde que sejam sociáveis com outros pets e humanos. Consulte nossa equipe para conhecer as condições.",
    category: "Pets",
  },
  {
    q: "Posso deixar meu pet sozinho no quarto?",
    a: "Para o conforto e segurança de todos, recomendamos que o pet não permaneça sozinho na acomodação por longos períodos. Ele deve estar habituado a isso para não sofrer estresse e não incomodar os demais hóspedes.",
    category: "Pets",
  },
  {
    q: "Há cobrança para hospedagem do pet?",
    a: "Sim. Cobramos uma taxa diária no valor de R$ 120,00 por pet. Consulte nossa equipe para informar condições especiais.",
    category: "Pets",
  },
  {
    q: "Os pets podem circular pela pousada?",
    a: "Sim, desde que estejam acompanhados pelos tutores e seguindo as regras de convivência. O pet pode ficar solto pela pousada, pela segurança dele mesmo, já que estamos em uma área de mata.",
    category: "Pets",
  },
  {
    q: "Vocês oferecem estrutura para os pets?",
    a: "Sim! Possuímos piscina exclusiva de 10m para pets, café da manhã com biscoitinhos e muffins naturais, espaço de banho SPAPET com soprador profissional, Bosque Play Pet e muito mais.",
    category: "Pets",
  },
  {
    q: "Recebem machos não castrados?",
    a: "Não recebemos machos não castrados. A falta de castração pode levar a um aumento da agressividade, especialmente em relação a outros machos.",
    category: "Pets",
  },
  {
    q: "Qual o horário de check-in?",
    a: "A partir das 14h. A recepção funciona 24 horas, então você pode chegar a qualquer hora.",
    category: "Estadia & check-in",
  },
  {
    q: "Qual o horário de check-out?",
    a: "Até às 12h.",
    category: "Estadia & check-in",
  },
  {
    q: "É possível fazer early check-in ou late check-out?",
    a: "Quando houver disponibilidade, sim. Consulte a recepção.",
    category: "Estadia & check-in",
  },
  {
    q: "O café da manhã está incluso?",
    a: "Sim! Nossa diária inclui um delicioso café da manhã, com waffles, panquecas, bolos com farinhas funcionais, frios, tapiocas e geleias caseiras. Atendemos intolerantes a lactose, glúten, vegetarianos e veganos.",
    category: "Estadia & check-in",
  },
  {
    q: "Qual o horário do café da manhã?",
    a: "Das 8h às 10h.",
    category: "Estadia & check-in",
  },
  {
    q: "A pousada possui piscina?",
    a: "Sim, possuímos piscina semiolímpica para humanos e uma piscina exclusiva de 10m para pets.",
    category: "Estrutura",
  },
  {
    q: "Os pets podem entrar na piscina?",
    a: "Sim! Temos uma piscina exclusiva de 10 metros de livre acesso para os pets se refrescarem e brincarem.",
    category: "Pets",
  },
  {
    q: "A pousada possui estacionamento?",
    a: "Sim, oferecemos estacionamento para os hóspedes.",
    category: "Estrutura",
  },
  {
    q: "O café da manhã para os pets está incluso na diária?",
    a: "Sim, ele é um hóspede e preparamos tudo para o conforto deles — biscoitinhos e muffins de abóbora 100% naturais.",
    category: "Pets",
  },
  {
    q: "O estacionamento é gratuito?",
    a: "Sim.",
    category: "Estrutura",
  },
  {
    q: "Os quartos possuem ar-condicionado?",
    a: "Sim, todas as acomodações possuem ar-condicionado.",
    category: "Estrutura",
  },
  {
    q: "Há Wi-Fi?",
    a: "Sim, gratuito em toda a pousada — áreas comuns e acomodações.",
    category: "Estrutura",
  },
  {
    q: "Vocês recebem crianças?",
    a: "Sim! Somos uma pousada para toda a família.",
    category: "Estadia & check-in",
  },
  {
    q: "Qual a melhor época para visitar Camburi?",
    a: "Camburi é um destino agradável durante todo o ano, com atrativos diferentes em cada estação.",
    category: "Localização & arredores",
  },
  {
    q: "Há restaurantes próximos?",
    a: "Sim, a região conta com excelentes restaurantes, bares e cafeterias.",
    category: "Localização & arredores",
  },
  {
    q: "A praia é longe?",
    a: "Não. Estamos a 1.500 metros das praias de Camburi e Camburizinho — acesso rápido e fácil.",
    category: "Localização & arredores",
  },
  {
    q: "Há cachoeiras próximas?",
    a: "Sim, existem belas cachoeiras na região, incluindo a Cachoeira do Sertão do Camburi, com trilha de nível fácil.",
    category: "Localização & arredores",
  },
  {
    q: "Vocês indicam passeios?",
    a: "Sim! Temos parceria com a Eco Experience, com guias biólogos capacitados, para trilhas, mergulho, passeios de barco e rapel.",
    category: "Localização & arredores",
  },
  {
    q: "Posso fazer churrasco?",
    a: "Os bangalôs possuem varanda ampla com churrasqueira individual. Consulte a disponibilidade e as regras da pousada.",
    category: "Estadia & check-in",
  },
  {
    q: "É permitido fumar?",
    a: "Não é permitido fumar dentro das acomodações.",
    category: "Estadia & check-in",
  },
  {
    q: "Como faço minha reserva?",
    a: "Pelo WhatsApp, telefone, ou diretamente pelo nosso sistema de reservas online no topo desta página.",
    category: "Reservas & pagamentos",
  },
  {
    q: "Quais formas de pagamento são aceitas?",
    a: "Aceitamos Pix, cartões e outras formas de pagamento. Consulte a recepção.",
    category: "Reservas & pagamentos",
  },
  {
    q: "Posso cancelar minha reserva?",
    a: "Sim, conforme a política de cancelamento vigente no momento da reserva.",
    category: "Reservas & pagamentos",
  },
  {
    q: "A pousada organiza eventos?",
    a: "Sim! Recebemos eventos corporativos, casamentos, aniversários e retiros. Temos espaço de 400m² coberto e sala fechada de 49m².",
    category: "Estrutura",
  },
  {
    q: "Vocês recebem grupos?",
    a: "Sim, mediante reserva antecipada. Nossas instalações podem acomodar confortavelmente até 50 pessoas.",
    category: "Estrutura",
  },
  {
    q: "A pousada é indicada para casais?",
    a: "Sim, para casais, famílias, grupos de amigos e viajantes com pets.",
    category: "Estrutura",
  },
  {
    q: "A pousada fica em meio à natureza?",
    a: "Sim! Estamos cercados pela Mata Atlântica, com uma nascente de água limpa passando pela propriedade, proporcionando tranquilidade e contato com a natureza.",
    category: "Estrutura",
  },
  {
    q: "O que torna a Portal do Cacau especial?",
    a: "Nosso maior diferencial é proporcionar uma experiência acolhedora para pessoas e seus pets, unindo conforto, natureza, hospitalidade e muito carinho em cada hospedagem.",
    category: "Estrutura",
  },
];

function Item({
  item,
  isOpen,
  onToggle,
}: {
  item: QA;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div
      className={`overflow-hidden rounded-[var(--radius-card)] border bg-[#fbf6ea] transition-colors duration-300 ${
        isOpen
          ? "border-[#e07a3c]/40 shadow-(--shadow-subtle)"
          : "border-[#d9cfb8]"
      }`}
    >
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-7"
      >
        <span
          className="font-display text-[1.05rem] text-[#14271f] sm:text-[1.2rem]"
          style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
        >
          {item.q}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.3 }}
          className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${
            isOpen ? "bg-[#e07a3c] text-white" : "bg-[#1f3a2e] text-[#e8b547]"
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
    </div>
  );
}

export default function FAQ({ categorized = false }: { categorized?: boolean } = {}) {
  const [open, setOpen] = useState<number | null>(0);
  // Flat index across all FAQs (stable ordering) so the accordion state works
  // in both flat and categorized modes.
  const flatIndex = (catIdx: number, itemIdx: number) => {
    let n = 0;
    for (let c = 0; c < CATEGORY_ORDER.length; c++) {
      const items = FAQS.filter((f) => f.category === CATEGORY_ORDER[c]);
      if (c === catIdx) return n + itemIdx;
      n += items.length;
    }
    return n;
  };

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

        {categorized ? (
          <div className="flex flex-col gap-12 sm:gap-14">
            {CATEGORY_ORDER.map((cat, ci) => {
              const items = FAQS.filter((f) => f.category === cat);
              if (items.length === 0) return null;
              return (
                <div key={cat}>
                  <div className="mb-5 flex items-center gap-4">
                    <span className="eyebrow text-[#2c6e7f]">{cat}</span>
                    <span className="h-px flex-1 bg-[#d9cfb8]" />
                    <span className="text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-[#8a7c63]">
                      {items.length} {items.length === 1 ? "pergunta" : "perguntas"}
                    </span>
                  </div>
                  <div className="flex flex-col gap-3">
                    {items.map((item, ii) => {
                      const idx = flatIndex(ci, ii);
                      return (
                        <motion.div
                          key={item.q}
                          initial={{ opacity: 0, y: 16 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true, margin: "-6% 0px" }}
                          transition={{ duration: 0.5, delay: (ii % 4) * 0.06 }}
                        >
                          <Item
                            item={item}
                            isOpen={open === idx}
                            onToggle={() => setOpen(open === idx ? null : idx)}
                          />
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {FAQS.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-6% 0px" }}
                transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              >
                <Item
                  item={item}
                  isOpen={open === i}
                  onToggle={() => setOpen(open === i ? null : i)}
                />
              </motion.div>
            ))}
          </div>
        )}

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
              href={`${import.meta.env.BASE_URL}/faq`}
              data-cursor="cta"
              className="font-semibold text-[#9c4d1c] underline-offset-4 transition-colors hover:text-[#8b4419] hover:underline"
            >
              Veja todas as perguntas
            </a>{" "}
            ou{" "}
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="cta"
              className="font-semibold text-[#9c4d1c] underline-offset-4 transition-colors hover:text-[#8b4419] hover:underline"
            >
              fale com a gente pelo WhatsApp
            </a>
            .
          </p>
        </motion.div>
      </div>
    </section>
  );
}
