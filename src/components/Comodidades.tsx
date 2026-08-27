import { motion } from "framer-motion";
import {
    Coffee,
    Dumbbell,
    Flame,
    Sparkles,
    Sun,
    TreePalm,
    Utensils,
    Waves,
    Wine,
} from "lucide-react";

type Amenity = {
  icon: typeof Coffee;
  title: string;
  text: string;
  span?: boolean;
};

const AMENITIES: Amenity[] = [
  {
    icon: Coffee,
    title: "Café da manhã",
    text: "Nosso carro-chefe: waffles, panquecas, bolos com farinhas funcionais, frios, tapiocas e geleias caseiras feitas pela equipe. Atendemos intolerantes a lactose, glúten, vegetarianos e veganos — com ingredientes escolhidos a dedo para começar o dia com o pé direito.",
    span: true,
  },
  {
    icon: Wine,
    title: "Lounge bar",
    text: "Um barzinho com cara de praia dentro da pousada — drinques, petiscos e música ao vivo em noites selecionadas.",
  },
  {
    icon: Waves,
    title: "Piscinas",
    text: "Piscinas para humanos e uma piscina exclusiva de 10m para pets se refrescarem e brincarem à vontade.",
  },
  {
    icon: Dumbbell,
    title: "Quadra de beach tennis",
    text: "Espaço pensado para lazer, saúde e bem-estar — perfeito para curtir em família e melhorar a forma física e mental.",
  },
  {
    icon: Flame,
    title: "Sauna",
    text: "Sauna para relaxar depois das trilhas e do mar, com ares de retiro na mata.",
  },
  {
    icon: Utensils,
    title: "Café da manhã para pets",
    text: "Biscoitinhos e muffins de abóbora 100% naturais — que tanto humanos quanto pets podem comer juntos.",
  },
  {
    icon: Sun,
    title: "Espaço ao ar livre",
    text: "Área total enorme com espreguiçadeiras, sombra das árvores e cantinhos acolhedores para ler, conversar ou apenas escutar a mata.",
  },
  {
    icon: TreePalm,
    title: "Natureza preservada",
    text: "Sertão do Camburi é um paraíso ecológico — trilhas, cachoeiras e o mar a 1.500m, tudo a pé.",
    span: true,
  },
];

export default function Comodidades() {
  return (
    <section
      id="comodidades"
      className="relative bg-[#fbf6ea] py-24 sm:py-32 lg:py-36"
    >
      {/* Top hairline transition */}
      <div className="hairline mx-auto max-w-7xl" />

      <div className="mx-auto mt-20 max-w-7xl px-5 sm:mt-28 sm:px-8 lg:px-12">
        <div className="mb-14 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12% 0px" }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center gap-4"
          >
            <span className="field-no text-2xl">03</span>
            <span className="eyebrow">Estrutura & Comodidades</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12% 0px" }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl font-display text-[2.2rem] leading-[1.05] text-[#14271f] sm:text-[3rem] lg:text-[3.4rem]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Tudo pensado para você
            <span className="italic text-[#2c6e7f]"> não querer sair.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {AMENITIES.map((a, i) => (
            <motion.div
              key={a.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -5 }}
              className={`group flex flex-col rounded-[var(--radius-card)] border border-[#d9cfb8] bg-white/70 p-6 shadow-[var(--shadow-subtle)] transition-shadow duration-300 hover:shadow-[var(--shadow-elevated)] sm:p-7 ${
                a.span ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#1f3a2e] text-[#e8b547] transition-colors duration-300 group-hover:bg-[#e07a3c] group-hover:text-white">
                <a.icon size={20} strokeWidth={1.7} />
              </div>
              <h3
                className="mt-5 font-display text-xl text-[#14271f] sm:text-[1.35rem]"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                {a.title}
              </h3>
              <p className="mt-2.5 text-[0.88rem] leading-relaxed text-[#4a4030]">
                {a.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6 }}
          className="mt-14 flex items-center justify-center gap-3 rounded-2xl border border-[#e8b547]/40 bg-[#e8b547]/10 px-6 py-5 text-center"
        >
          <Sparkles size={20} className="shrink-0 text-[#9c4d1c]" />
          <p className="text-sm leading-relaxed text-[#4a4030]">
            <span className="font-semibold text-[#14271f]">
              Recepção 24 horas.
            </span>{" "}
            Chegue quando puder — estamos sempre prontos para receber você e seu
            pet, a qualquer hora do dia ou da noite.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
