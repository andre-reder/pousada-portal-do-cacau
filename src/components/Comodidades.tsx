import { motion } from "framer-motion";
import {
    Bath,
    Coffee,
    Dumbbell,
    Flame,
    ParkingCircle,
    PawPrint,
    Sparkles,
    Sun,
    TreePalm,
    Utensils,
    Waves,
    Wifi,
    Wine,
} from "lucide-react";

type Category =
  | "Gastronomia"
  | "Lazer & bem-estar"
  | "Pet"
  | "Natureza"
  | "Conveniência";

type Amenity = {
  icon: typeof Coffee;
  title: string;
  text: string;
  span?: boolean;
  category: Category;
};

const CATEGORY_ORDER: Category[] = [
  "Gastronomia",
  "Lazer & bem-estar",
  "Pet",
  "Natureza",
  "Conveniência",
];

const CATEGORY_HINT: Record<Category, string> = {
  Gastronomia: "Da manhã ao entardecer, sabores que ficam na memória.",
  "Lazer & bem-estar": "Relaxar, suar, refrescar — no seu ritmo.",
  Pet: "Estrutura 100% dedicada aos hóspedes de quatro patas.",
  Natureza: "A Mata Atlântica é o nosso quintal.",
  Conveniência: "O essencial para você só se preocupar em descansar.",
};

const AMENITIES: Amenity[] = [
  {
    icon: Coffee,
    title: "Café da manhã",
    text: "Nosso carro-chefe: waffles, panquecas, bolos com farinhas funcionais, frios, tapiocas e geleias caseiras feitas pela equipe. Atendemos intolerantes a lactose, glúten, vegetarianos e veganos — com ingredientes escolhidos a dedo para começar o dia com o pé direito.",
    span: true,
    category: "Gastronomia",
  },
  {
    icon: Wine,
    title: "Espaço Lounge & Bar",
    text: "Um barzinho com cara de praia dentro da pousada — drinques, petiscos e música ao vivo em noites selecionadas.",
    category: "Gastronomia",
  },
  {
    icon: Waves,
    title: "Piscina semiolímpica",
    text: "Piscina para humanos se refrescarem e relaxarem após as trilhas e o mar.",
    category: "Lazer & bem-estar",
  },
  {
    icon: Dumbbell,
    title: "Arena Beach Tennis",
    text: "Quadra de beach tennis 20×11m com iluminação noturna. Hóspedes utilizam sem custo; raquetes e bolinhas fornecidas.",
    category: "Lazer & bem-estar",
  },
  {
    icon: Flame,
    title: "Sauna Seca",
    text: "Sauna para relaxar depois das trilhas e do mar, com ares de retiro na mata.",
    category: "Lazer & bem-estar",
  },
  {
    icon: Bath,
    title: "Hidromassagem aquecida",
    text: "Hidromassagem com água aquecida para relaxar em qualquer estação.",
    category: "Lazer & bem-estar",
  },
  {
    icon: PawPrint,
    title: "Piscina de 10m para Pets",
    text: "Uma piscina exclusiva de 10m para pets se refrescarem e brincarem à vontade — eles mergulham como parte da família.",
    category: "Pet",
  },
  {
    icon: Utensils,
    title: "Café da manhã para pets",
    text: "Biscoitinhos e muffins de abóbora 100% naturais — que tanto humanos quanto pets podem comer juntos.",
    category: "Pet",
  },
  {
    icon: TreePalm,
    title: "Bosque Play Pet",
    text: "Área verde cercada para os pets brincarem livremente, com sombra das árvores nativas da Mata Atlântica.",
    category: "Pet",
  },
  {
    icon: Bath,
    title: "Espaço de banho SPAPET",
    text: "Banheira, torneira com água aquecida, mesa, secador e soprador profissional. Parceria com Splash Dog para banho com profissional (serviço à parte).",
    category: "Pet",
  },
  {
    icon: PawPrint,
    title: "Sopradores para pets",
    text: "Sopradores profissionais disponíveis para secagem — agendar na recepção.",
    category: "Pet",
  },
  {
    icon: TreePalm,
    title: "Trekking até o rio das pedras",
    text: "Trilha partindo da pousada até o rio das pedras, no Camburi — contato direto com a natureza preservada.",
    category: "Natureza",
  },
  {
    icon: Sun,
    title: "Natureza preservada",
    text: "Sertão do Camburi é um paraíso ecológico — trilhas, cachoeiras e o mar a 1.500m, tudo a pé. Uma nascente de água limpa passa pela propriedade.",
    span: true,
    category: "Natureza",
  },
  {
    icon: Wifi,
    title: "Wi-Fi (áreas comuns e acomodações)",
    text: "Internet gratuita em toda a estrutura da pousada — áreas comuns e apartamentos.",
    category: "Conveniência",
  },
  {
    icon: ParkingCircle,
    title: "Estacionamento",
    text: "Estacionamento gratuito para os hóspedes.",
    category: "Conveniência",
  },
];

function AmenityCard({ a, i }: { a: Amenity; i: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
      whileHover={{ y: -5 }}
      className={`group flex flex-col rounded-[var(--radius-card)] border border-[#d9cfb8] bg-white/70 p-6 shadow-(--shadow-subtle) transition-shadow duration-300 hover:shadow-(--shadow-elevated) sm:p-7 ${
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
  );
}

export default function Comodidades({ categorized = false }: { categorized?: boolean } = {}) {
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

        {categorized ? (
          <div className="flex flex-col gap-14 sm:gap-20">
            {CATEGORY_ORDER.map((cat) => {
              const items = AMENITIES.filter((a) => a.category === cat);
              if (items.length === 0) return null;
              return (
                <div key={cat}>
                  <motion.div
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-10% 0px" }}
                    transition={{ duration: 0.6 }}
                    className="mb-7 flex flex-col gap-2 sm:mb-9 sm:flex-row sm:items-end sm:justify-between"
                  >
                    <div>
                      <span className="eyebrow text-[#2c6e7f]">{cat}</span>
                      <h3
                        className="mt-2 font-display text-[1.6rem] leading-tight text-[#14271f] sm:text-[2rem]"
                        style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                      >
                        {CATEGORY_HINT[cat]}
                      </h3>
                    </div>
                    <span className="hidden h-px flex-1 bg-[#d9cfb8] sm:mx-8 sm:block" />
                    <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#8a7c63]">
                      {items.length} {items.length === 1 ? "item" : "itens"}
                    </span>
                  </motion.div>
                  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
                    {items.map((a, i) => (
                      <AmenityCard key={a.title} a={a} i={i} />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {AMENITIES.map((a, i) => (
              <AmenityCard key={a.title} a={a} i={i} />
            ))}
          </div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 rounded-2xl border border-[#e8b547]/40 bg-[#e8b547]/10 px-6 py-5 text-center sm:flex-row"
        >
          <Sparkles size={20} className="shrink-0 text-[#9c4d1c]" />
          <p className="text-sm leading-relaxed text-[#4a4030]">
            <span className="font-semibold text-[#14271f]">
              Recepção 24 horas.
            </span>{" "}
            Chegue quando puder — estamos sempre prontos para receber você e seu
            pet, a qualquer hora do dia ou da noite.
          </p>
          <a
            href={`${import.meta.env.BASE_URL}/comodidades`}
            data-cursor="cta"
            className="shrink-0 rounded-full bg-[#1f3a2e] px-5 py-2.5 text-[0.8rem] font-semibold text-[#f3ecdb] transition-colors hover:bg-[#e07a3c] hover:text-white"
          >
            Ver detalhes da estrutura
          </a>
        </motion.div>
      </div>
    </section>
  );
}
