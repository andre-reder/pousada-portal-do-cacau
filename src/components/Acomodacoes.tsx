import { motion } from "framer-motion";
import {
    ArrowRight,
    BedDouble,
    DoorOpen,
    Maximize,
    Snowflake,
    Tv,
    Users,
    UtensilsCrossed,
    Wifi,
    Wind,
} from "lucide-react";
import { CONTACT } from "./cn";

type Stay = {
  no: string;
  name: string;
  type: "Suíte" | "Bangalô";
  tagline: string;
  description: string;
  amenities: { icon: typeof Wind; label: string }[];
  accommodates: string;
  size: string;
  beds: string;
  highlight?: boolean;
};

const STAYS: Stay[] = [
  {
    no: "i",
    name: "Suíte Original",
    type: "Suíte",
    tagline: "Aconchego essencial",
    description:
      "A suíte que started it all — pensada para casais ou pequenas famílias que querem descansar com conforto sem abrir mão do contato com a natureza. Disponível em piso térreo ou superior, com varanda voltada para a mata.",
    amenities: [
      { icon: Snowflake, label: "Ar-condicionado" },
      { icon: Wind, label: "Ventilador de teto" },
      { icon: Tv, label: 'TV 32" LCD' },
      { icon: Wifi, label: "Wi-Fi" },
      { icon: DoorOpen, label: "Frigobar" },
    ],
    accommodates: "3 hóspedes",
    size: "26 m²",
    beds: "1 casal King + 1 extra",
  },
  {
    no: "ii",
    name: "Suíte Plus",
    type: "Suíte",
    tagline: "Conforto elevado",
    description:
      'Suíte superior com ar-condicionado split, TV 42" e cama King Size para quem busca um retreat mais reservado. Ideal para casais em lua de mel ou escapadas a dois, com vista das copas das árvores.',
    amenities: [
      { icon: Snowflake, label: "Ar split" },
      { icon: Wind, label: "Ventilador de teto" },
      { icon: Tv, label: 'TV 42" LCD' },
      { icon: Wifi, label: "Wi-Fi" },
      { icon: DoorOpen, label: "Frigobar" },
    ],
    accommodates: "2 hóspedes",
    size: "26 m²",
    beds: "1 casal King Size",
    highlight: true,
  },
  {
    no: "iii",
    name: "Bangalô Original",
    type: "Bangalô",
    tagline: "Sua casa na mata",
    description:
      "Bangalô com varanda de entrada, sala com sofá bi-cama e cozinha equipada — perfeito para estadias mais longas, famílias com pets ou aluguel mensal. A varanda ampla convida para o café da manhã ao som dos pássaros.",
    amenities: [
      { icon: Snowflake, label: "Ar-condicionado" },
      { icon: Tv, label: 'TV 32"' },
      { icon: Wifi, label: "Wi-Fi" },
      { icon: UtensilsCrossed, label: "Cozinha equipada" },
      { icon: DoorOpen, label: "Varanda ampla" },
    ],
    accommodates: "até 4 hóspedes",
    size: "Bangalô",
    beds: "Casal + sofá bi-cama",
  },
  {
    no: "iv",
    name: "Bangalô Plus",
    type: "Bangalô",
    tagline: "Espaço e independência",
    description:
      "O bangalô mais completo: ar-condicionado no quarto do casal, TV com sinal SKY na sala, cozinha equipada com geladeira e varanda com cadeiras de balanço. A escolha ideal para quem quer estadias longas com toda autonomia.",
    amenities: [
      { icon: Snowflake, label: "Ar no quarto" },
      { icon: Tv, label: "TV SKY" },
      { icon: Wifi, label: "Wi-Fi" },
      { icon: UtensilsCrossed, label: "Cozinha equipada" },
      { icon: DoorOpen, label: "Varanda com balanço" },
    ],
    accommodates: "até 4 hóspedes",
    size: "Bangalô",
    beds: "Casal + sofá bi-cama",
  },
];

export default function Acomodacoes() {
  return (
    <section
      id="acomodacoes"
      className="relative bg-[#f3ecdb] py-24 sm:py-32 lg:py-36"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-14 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12% 0px" }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center gap-4"
          >
            <span className="field-no text-2xl">02</span>
            <span className="eyebrow">Acomodações · Onde repousar</span>
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
              Quatro maneiras de
              <span className="block italic text-[#9c4d1c]">
                pertencer a este lugar.
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[0.95rem] leading-relaxed text-[#6b5d45] lg:pb-3"
            >
              Das suítes compactas aos bangalôs com cozinha, todas as
              acomodações são amplas, arejadas e preparadas para receber você e
              seu pet — com produtos específicos para minimizar alergias.
            </motion.p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:gap-8">
          {STAYS.map((stay, i) => (
            <motion.article
              key={stay.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.7, delay: (i % 2) * 0.12 }}
              whileHover={{ y: -6 }}
              className={`group relative flex flex-col overflow-hidden rounded-[var(--radius-card)] border bg-[#fbf6ea] p-7 shadow-[var(--shadow-subtle)] transition-shadow duration-300 hover:shadow-[var(--shadow-elevated)] sm:p-8 ${
                stay.highlight
                  ? "border-[#e07a3c]/40 ring-1 ring-[#e07a3c]/15"
                  : "border-[#d9cfb8]"
              }`}
            >
              {stay.highlight && (
                <span className="absolute right-5 top-5 rounded-full bg-[#e07a3c] px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-white">
                  Preferida dos casais
                </span>
              )}

              <div className="flex items-baseline gap-3">
                <span className="field-no text-xl">{stay.no}</span>
                <span className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[#3d5d49]">
                  {stay.type}
                </span>
              </div>

              <h3
                className="mt-3 font-display text-[1.7rem] text-[#14271f] sm:text-[2rem]"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                {stay.name}
              </h3>
              <p className="mt-1 text-sm italic text-[#9c4d1c]">
                {stay.tagline}
              </p>

              <p className="mt-4 flex-1 text-[0.92rem] leading-relaxed text-[#4a4030]">
                {stay.description}
              </p>

              {/* Amenities */}
              <ul className="mt-6 flex flex-wrap gap-2">
                {stay.amenities.map((a) => (
                  <li
                    key={a.label}
                    className="inline-flex items-center gap-1.5 rounded-full border border-[#d9cfb8] bg-white/60 px-3 py-1.5 text-[0.72rem] font-medium text-[#3d5d49]"
                  >
                    <a.icon size={13} strokeWidth={1.8} />
                    {a.label}
                  </li>
                ))}
              </ul>

              {/* Footer specs */}
              <div className="mt-6 grid grid-cols-3 gap-2 border-t border-[#e6dec9] pt-5">
                <Spec icon={Users} label="Acomoda" value={stay.accommodates} />
                <Spec icon={Maximize} label="Tamanho" value={stay.size} />
                <Spec icon={BedDouble} label="Camas" value={stay.beds} />
              </div>

              <a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="cta"
                className="mt-6 inline-flex items-center gap-2 self-start rounded-full bg-[#1f3a2e] px-5 py-2.5 text-[0.8rem] font-semibold text-[#f3ecdb] transition-all duration-300 group-hover:bg-[#e07a3c] group-hover:text-white"
              >
                Consultar disponibilidade
                <ArrowRight
                  size={15}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>
            </motion.article>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 max-w-2xl px-4 text-center text-sm leading-relaxed text-[#6b5d45] relative z-10 mx-auto"
        >
          Os bangalôs estão disponíveis também para{" "}
          <span className="font-semibold text-[#9c4d1c]">
            aluguel mensal
          </span>{" "}
          — ideal para quem quer viver o Sertão do Camburi por temporadas
          mais longas, com a estrutura completa da pousada à disposição.
        </motion.p>
      </div>
    </section>
  );
}

function Spec({
  icon: Icon,
  label,
  value,
}: {
  icon: typeof Users;
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-col">
      <span className="flex items-center gap-1 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#6b5d45]">
        <Icon size={12} strokeWidth={1.8} />
        {label}
      </span>
      <span className="mt-1 text-[0.78rem] font-medium text-[#2a2418]">
        {value}
      </span>
    </div>
  );
}
