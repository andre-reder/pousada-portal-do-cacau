import { AnimatePresence, motion } from "framer-motion";
import {
    Anchor,
    ArrowRight,
    Clock,
    ExternalLink,
    Fish,
    Gauge,
    MapPin,
    Mountain,
    Ship,
} from "lucide-react";
import { useState } from "react";
import { CONTACT } from "./cn";

import alcatrazesImg from "../../assets/alcatrazes/image.png";
import barcoImg from "../../assets/barco/image.png";
import canoaHavaianaImg from "../../assets/canoa-havaiana/image.png";
import discoveryDiveImg from "../../assets/discovery-dive/image.png";
import praiaBravaImg from "../../assets/praia-brava/image.png";
import rapelMiranteImg from "../../assets/rapel-mirante/image.png";
import ribeiraoItuImg from "../../assets/ribeirao-de-itu/image.png";
import rioUnaImg from "../../assets/rio-una/image.png";
import sertaoCamburiImg from "../../assets/sertao-camburi/image.png";

type Category = "trilhas" | "mergulho" | "barco" | "rapel";

type Adventure = {
  name: string;
  category: Category;
  duration: string;
  level: "Fácil" | "Médio" | "Difícil" | "Iniciantes";
  destination: string;
  image: ImageMetadata;
  text: string;
};

const ADVENTURES: Adventure[] = [
  {
    name: "Cachoeira do Sertão do Camburi",
    category: "trilhas",
    duration: "3 a 4h",
    level: "Fácil",
    destination: "Sertão do Camburi",
    image: sertaoCamburiImg,
    text: "A trilha mais acessível, ideal para famílias e para quem quer um primeiro contato com as cachoeiras da região. Saída às 10h, volta às 17h, com tempo para banho e contemplação. Nível de dificuldade: Fácil. Duração: 3 a 4 horas de percurso total.",
  },
  {
    name: "Trekking Cachoeiras do Rio Una",
    category: "trilhas",
    duration: "3 a 4h",
    level: "Médio",
    destination: "Rio Una",
    image: rioUnaImg,
    text: "Percurso pelo rio Una com várias quedas d'água para banho. Nível médio, adequado para quem tem um pouco de fôlego — a recompensa são poços naturais cercados pela mata. Saída às 10h, volta às 17h. Duração: 3 a 4 horas.",
  },
  {
    name: "Trekking Cachoeiras do Ribeirão de Itu",
    category: "trilhas",
    duration: "3 a 4h",
    level: "Médio",
    destination: "Ribeirão de Itu",
    image: ribeiraoItuImg,
    text: "Outra rota de nível médio pelas cachoeiras do ribeirão de Itu, com paisagens preservadas e paradas para mergulho nas águas cristalinas. Saída às 10h, volta às 17h. Duração: 3 a 4 horas.",
  },
  {
    name: "Trekking Trilha da Praia Brava",
    category: "trilhas",
    duration: "2 a 4h",
    level: "Difícil",
    destination: "Praia Brava",
    image: praiaBravaImg,
    text: "A trilha mais desafiadora — para aventureiros que querem chegar a uma praia praticamente deserta. Nível difícil, saída às 10h e volta às 17h, com trechos de subida e mata fechada. Duração: 2 a 4 horas de percurso total.",
  },
  {
    name: "Discovery Dive — Mergulho de cilindro",
    category: "mergulho",
    duration: "~3h",
    level: "Iniciantes",
    destination: "Ilha dos Gatos, As Ilhas ou Ilha das Couves",
    image: discoveryDiveImg,
    text: "Aproximadamente 3 horas com 2 mergulhos de 20 minutos cada. Equipamentos inclusos. Destinos entre Ilha dos Gatos, As Ilhas e Ilha das Couves, com vida marinha abundante.",
  },
  {
    name: "Canoa Havaiana",
    category: "mergulho",
    duration: "~2h",
    level: "Fácil",
    destination: "As Ilhas (mín. 3 pessoas)",
    image: canoaHavaianaImg,
    text: "Passeio de canoa havaiana até As Ilhas (mínimo de 3 pessoas), com aproximadamente 2 horas de duração. Inclui água, frutas e máscara de mergulho para snorkel no percurso.",
  },
  {
    name: "Passeios de barco",
    category: "barco",
    duration: "~3h",
    level: "Fácil",
    destination: "Ilha dos Gatos, As Ilhas e Ilha das Couves",
    image: barcoImg,
    text: "Passeio de barco pelas ilhas da região — Ilha dos Gatos, As Ilhas e Ilha das Couves. Aproximadamente 3 horas de duração. Aluguel de máscara de mergulho e snorkel disponível para explorar a vida marinha.",
  },
  {
    name: "Ilha dos Alcatrazes",
    category: "barco",
    duration: "Passeio",
    level: "Fácil",
    destination: "Arquipélago dos Alcatrazes",
    image: alcatrazesImg,
    text: "O arquipélago dos Alcatrazes impressiona pela beleza e abriga expressiva biodiversidade marinha e insular. Atualmente é protegido por duas unidades de conservação marinhas de proteção integral: a Estação Ecológica de Tupinambás (1987) e o Refúgio de Vida Silvestre do Arquipélago de Alcatrazes (2016), a maior unidade de conservação marinha de proteção.",
  },
  {
    name: "Rapel do Mirante — Praia de Paúba",
    category: "rapel",
    duration: "2 descidas",
    level: "Iniciantes",
    destination: "Costeira Paúba / Maresias",
    image: rapelMiranteImg,
    text: "Rapel de 10m indicado para aventureiros de primeira viagem que nunca fizeram rapel. Fica localizado na costeira entre as praias de Paúba e Maresias. A trilha até o ponto do Rapel possui 2km e é conhecida como Trilha dos Mirantes, por passar por mirantes incríveis. Você pode fazer até duas descidas.",
  },
];

const TABS: { id: Category; label: string; icon: typeof Mountain }[] = [
  { id: "trilhas", label: "Trilhas & cachoeiras", icon: Mountain },
  { id: "mergulho", label: "Mergulho", icon: Fish },
  { id: "barco", label: "Passeios de barco", icon: Ship },
  { id: "rapel", label: "Rapel", icon: Anchor },
];

const levelColor: Record<Adventure["level"], string> = {
  Fácil: "text-[#3d5d49] bg-[#3d5d49]/10 border-[#3d5d49]/30",
  Médio: "text-[#9c4d1c] bg-[#9c4d1c]/10 border-[#9c4d1c]/30",
  Difícil: "text-[#8b4419] bg-[#8b4419]/10 border-[#8b4419]/30",
  Iniciantes: "text-[#2c6e7f] bg-[#2c6e7f]/10 border-[#2c6e7f]/30",
};

export default function Ecoturismo() {
  const [active, setActive] = useState<Category>("trilhas");
  const filtered = ADVENTURES.filter((a) => a.category === active);

  return (
    <section
      id="ecoturismo"
      className="relative bg-[#f3ecdb] py-24 sm:py-32 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12% 0px" }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center gap-4"
          >
            <span className="field-no text-2xl">05</span>
            <span className="eyebrow">Ecoturismo · Aventuras na mata e no mar</span>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{ duration: 0.7 }}
              className="font-display text-[2.2rem] leading-[1.05] text-[#14271f] sm:text-[3rem] lg:text-[3.6rem]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              Da cachoeira ao
              <span className="block italic text-[#2c6e7f]">fundo do mar.</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:pb-3"
            >
              <p className="text-[0.95rem] leading-relaxed text-[#6b5d45]">
                Trilhas pela Mata Atlântica, mergulho em ilhas protegidas,
                passeios de barco e rapel para iniciantes. As aventuras podem ser
                reservadas junto com a sua estadia — escolha o seu ritmo.
              </p>
              <a
                href="https://maresiastur.com.br/"
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="cta"
                className="mt-4 inline-flex items-center gap-2 rounded-full border-2 border-[#2c6e7f] bg-[#2c6e7f]/5 px-4 py-2 text-[0.78rem] font-semibold text-[#2c6e7f] transition-all duration-300 hover:bg-[#2c6e7f] hover:text-[#f3ecdb]"
              >
                Cardápio MaresiasTur
                <ExternalLink size={14} strokeWidth={1.9} />
              </a>
            </motion.div>
          </div>
        </div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-wrap gap-2.5 sm:gap-3"
          role="tablist"
          aria-label="Categorias de ecoturismo"
        >
          {TABS.map((t) => {
            const isActive = active === t.id;
            return (
              <button
                key={t.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActive(t.id)}
                className={`group inline-flex items-center gap-2 rounded-full border-2 px-4 py-2.5 text-[0.8rem] font-semibold transition-all duration-300 sm:px-5 ${
                  isActive
                    ? "border-[#1f3a2e] bg-[#1f3a2e] text-[#f3ecdb]"
                    : "border-[#d9cfb8] bg-transparent text-[#3d5d49] hover:border-[#3d5d49]/60 hover:bg-white/60"
                }`}
              >
                <t.icon size={16} strokeWidth={1.9} />
                {t.label}
              </button>
            );
          })}
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
          <AnimatePresence mode="wait">
            {filtered.map((a, i) => (
              <motion.article
                key={a.name}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                whileHover={{ y: -5 }}
                className="group flex flex-col overflow-hidden rounded-[var(--radius-card)] border border-[#d9cfb8] bg-[#fbf6ea] shadow-(--shadow-subtle) transition-shadow duration-300 hover:shadow-(--shadow-elevated)"
              >
                {/* Photo */}
                <div className="relative h-48 w-full overflow-hidden">
                  <img
                    src={a.image.src}
                    alt={a.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  />
                  <span
                    className={`absolute right-3 top-3 rounded-full border px-3 py-1 text-[0.65rem] font-bold uppercase tracking-[0.12em] backdrop-blur-sm ${levelColor[a.level]}`}
                  >
                    {a.level}
                  </span>
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6 sm:p-7">
                  <h3
                    className="font-display text-[1.4rem] leading-tight text-[#14271f] sm:text-[1.6rem]"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                  >
                    {a.name}
                  </h3>

                  <p className="mt-3 flex-1 text-[0.88rem] leading-relaxed text-[#4a4030]">
                    {a.text}
                  </p>

                  <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-[#e6dec9] pt-4 text-[0.78rem] text-[#6b5d45]">
                    <span className="inline-flex items-center gap-1.5">
                      <Clock size={13} strokeWidth={1.8} />
                      {a.duration}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin size={13} strokeWidth={1.8} />
                      {a.destination}
                    </span>
                  </div>

                  <a
                    href={CONTACT.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="cta"
                    className="mt-5 inline-flex items-center gap-2 self-start text-[0.8rem] font-semibold text-[#9c4d1c] transition-colors hover:text-[#8b4419]"
                  >
                    Reservar esta aventura
                    <ArrowRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex items-center justify-center gap-2 text-center text-sm text-[#6b5d45] relative z-10"
        >
          <Gauge size={15} className="text-[#9c4d1c]" />
          Saídas às 10h, retorno às 17h nas trilhas · equipamentos inclusos no
          mergulho
        </motion.p>

        {/* Ver detalhes */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-8 flex justify-center"
        >
          <a
            href={`${import.meta.env.BASE_URL}/ecoturismo`}
            data-cursor="cta"
            className="group inline-flex items-center gap-2 rounded-full border-2 border-[#1f3a2e] bg-transparent px-6 py-3 text-[0.85rem] font-semibold text-[#1f3a2e] transition-all duration-300 hover:bg-[#1f3a2e] hover:text-[#f3ecdb]"
          >
            Ver detalhes
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
