/// <reference types="vite/client" />
import { AnimatePresence, motion } from "framer-motion";
import {
    ArrowRight,
    BedDouble,
    ChevronLeft,
    ChevronRight,
    DoorOpen,
    Maximize,
    Snowflake,
    Tv,
    Users,
    UtensilsCrossed,
    Wifi,
    Wind,
    X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { CONTACT } from "./cn";

/* ------------------------------------------------------------------ */
/* Photo galleries — loaded eagerly via Vite's import.meta.glob.       */
/* Paths are relative to this component file (src/components/).        */
/* Astro 7's asset pipeline returns ImageMetadata ({src,width,...}),   */
/* not a plain URL string — so we extract .src in toGallery.           */
/* ------------------------------------------------------------------ */
const suitePlusGlob = import.meta.glob<ImageMetadata>(
    "../../assets/suite-plus/*.png",
    { eager: true, import: "default" },
);
const suiteOriginalGlob = import.meta.glob<ImageMetadata>(
    "../../assets/suite-original/*.png",
    { eager: true, import: "default" },
);
const bangaloOriginalGlob = import.meta.glob<ImageMetadata>(
    "../../assets/bangalo-original/*.png",
    { eager: true, import: "default" },
);
const bangaloPlusGlob = import.meta.glob<ImageMetadata>(
    "../../assets/bangalo-plus/*.png",
    { eager: true, import: "default" },
);

/** Natural sort so "image copy 2" comes before "image copy 10". */
function toGallery(glob: Record<string, ImageMetadata>): string[] {
    return Object.entries(glob)
        .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
        .map(([, img]) => img.src);
}

const suitePlusGallery = toGallery(suitePlusGlob);
const suiteOriginalGallery = toGallery(suiteOriginalGlob);
const bangaloOriginalGallery = toGallery(bangaloOriginalGlob);
const bangaloPlusGallery = toGallery(bangaloPlusGlob);

/* ------------------------------------------------------------------ */
/* Data                                                                */
/* ------------------------------------------------------------------ */
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
  gallery: string[];
};

const STAYS: Stay[] = [
  {
    no: "i",
    name: "Suíte Original",
    type: "Suíte",
    tagline: "Aconchego essencial",
    description:
      'Ar condicionado, ventilador de teto, TV 32" LCD, Wi-Fi em toda a estrutura e apartamentos, chuveiro com aquecimento central a gás, frigobar, piso térreo e superior. Acomoda: 3. Tamanho: 26m². Camas: 1 cama de casal King Size, 1 cama de solteiro.',
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
    gallery: suiteOriginalGallery,
  },
  {
    no: "ii",
    name: "Suíte Plus",
    type: "Suíte",
    tagline: "Conforto elevado",
    description:
      'Ar condicionado split, ventilador de teto, TV 42" LCD, Wi-Fi em toda a estrutura e apartamentos, chuveiro com aquecimento central a gás, frigobar, piso superior. Acomoda: 2. Tamanho: 26m². Cama: 1 cama de casal King Size.',
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
    gallery: suitePlusGallery,
  },
  {
    no: "iii",
    name: "Bangalô Original",
    type: "Bangalô",
    tagline: "Sua casa na mata",
    description:
      "Ar-condicionado, varanda à entrada com duas cadeiras de balanço, sala com 1 sofá bi-cama, TV 32 polegadas, Wi-Fi, ventiladores de teto, cozinha equipada com geladeira de uma porta e utensílios básicos, varanda ampla com churrasqueira individual, mesa e cadeiras, dormitório de casal com uma cama, varanda com rede. Acomoda: até 4. Tamanho: 72m² - Duplex. Camas: 1 sofá bi-cama, 1 cama de casal.",
    amenities: [
      { icon: Snowflake, label: "Ar-condicionado" },
      { icon: Tv, label: 'TV 32"' },
      { icon: Wifi, label: "Wi-Fi" },
      { icon: UtensilsCrossed, label: "Cozinha equipada" },
      { icon: DoorOpen, label: "Varanda ampla" },
    ],
    accommodates: "até 4 hóspedes",
    size: "72 m² · Duplex",
    beds: "Casal + sofá bi-cama",
    gallery: bangaloOriginalGallery,
  },
  {
    no: "iv",
    name: "Bangalô Plus",
    type: "Bangalô",
    tagline: "Espaço e independência",
    description:
      "Ar-condicionado, varanda à entrada com duas cadeiras de balanço, sala com 1 sofá bi-cama, TV com sinal SKY, Wi-Fi, ventiladores de teto, ar condicionado no quarto do casal, cozinha equipada com geladeira de uma porta e utensílios básicos, varanda ampla com churrasqueira individual, mesa e cadeiras, dormitório de casal com uma cama de casal, varanda com rede. Acomoda: até 4. Tamanho: 72m² - Duplex. Camas: 1 sofá bi-cama, 1 cama de casal.",
    amenities: [
      { icon: Snowflake, label: "Ar no quarto" },
      { icon: Tv, label: "TV SKY" },
      { icon: Wifi, label: "Wi-Fi" },
      { icon: UtensilsCrossed, label: "Cozinha equipada" },
      { icon: DoorOpen, label: "Varanda com balanço" },
    ],
    accommodates: "até 4 hóspedes",
    size: "72 m² · Duplex",
    beds: "Casal + sofá bi-cama",
    gallery: bangaloPlusGallery,
  },
];

/* ------------------------------------------------------------------ */
/* Lightbox                                                            */
/* ------------------------------------------------------------------ */
type LightboxState = {
  gallery: string[];
  name: string;
  index: number;
} | null;

function Lightbox({
  state,
  onClose,
  onPrev,
  onNext,
}: {
  state: LightboxState;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  useEffect(() => {
    if (!state) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      else if (e.key === "ArrowLeft") onPrev();
      else if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [state, onClose, onPrev, onNext]);

  return (
    <AnimatePresence>
      {state && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#14271f]/95 backdrop-blur-sm"
          onClick={onClose}
        >
          {/* Close */}
          <button
            type="button"
            aria-label="Fechar galeria"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
          >
            <X size={22} strokeWidth={1.8} />
          </button>

          {/* Counter */}
          <div className="absolute left-1/2 top-5 z-10 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-[0.78rem] font-medium tracking-wide text-white">
            {state.index + 1} / {state.gallery.length}
            <span className="ml-2 text-white/60">· {state.name}</span>
          </div>

          {/* Prev */}
          {state.gallery.length > 1 && (
            <button
              type="button"
              aria-label="Foto anterior"
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
            >
              <ChevronLeft size={26} strokeWidth={1.8} />
            </button>
          )}

          {/* Next */}
          {state.gallery.length > 1 && (
            <button
              type="button"
              aria-label="Próxima foto"
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
            >
              <ChevronRight size={26} strokeWidth={1.8} />
            </button>
          )}

          {/* Image */}
          <motion.img
            key={state.index}
            src={state.gallery[state.index]}
            alt={`${state.name} — foto ${state.index + 1}`}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.25 }}
            className="max-h-[82vh] max-w-[90vw] rounded-lg object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ------------------------------------------------------------------ */
/* Section                                                             */
/* ------------------------------------------------------------------ */
export default function Acomodacoes() {
  const [lightbox, setLightbox] = useState<LightboxState>(null);

  const openLightbox = (stay: Stay, index = 0) => {
    setLightbox({ gallery: stay.gallery, name: stay.name, index });
  };
  const closeLightbox = () => setLightbox(null);
  const prevPhoto = () =>
    setLightbox((s) =>
      s
        ? { ...s, index: (s.index - 1 + s.gallery.length) % s.gallery.length }
        : s,
    );
  const nextPhoto = () =>
    setLightbox((s) =>
      s ? { ...s, index: (s.index + 1) % s.gallery.length } : s,
    );

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
          {STAYS.map((stay, i) => {
            const thumbs = stay.gallery.slice(0, 4);
            return (
              <motion.article
                key={stay.name}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10% 0px" }}
                transition={{ duration: 0.7, delay: (i % 2) * 0.12 }}
                whileHover={{ y: -6 }}
                className={`group relative flex flex-col overflow-hidden rounded-[var(--radius-card)] border bg-[#fbf6ea] p-7 shadow-(--shadow-subtle) transition-shadow duration-300 hover:shadow-(--shadow-elevated) sm:p-8 ${
                  stay.highlight
                    ? "border-[#e07a3c]/40 ring-1 ring-[#e07a3c]/15"
                    : "border-[#d9cfb8]"
                }`}
              >
                {stay.highlight && (
                  <span className="absolute right-5 top-5 z-10 rounded-full bg-[#e07a3c] px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.16em] text-white">
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

                {/* Thumbnail strip */}
                {thumbs.length > 0 && (
                  <div className="mt-4 grid grid-cols-4 gap-2">
                    {thumbs.map((src, ti) => (
                      <button
                        key={src}
                        type="button"
                        onClick={() => openLightbox(stay, ti)}
                        className="group/thumb relative aspect-square overflow-hidden rounded-md border border-[#d9cfb8] bg-[#e6dec9]"
                        aria-label={`Ver foto ${ti + 1} de ${stay.name}`}
                      >
                        <img
                          src={src}
                          alt={`${stay.name} — foto ${ti + 1}`}
                          loading="lazy"
                          className="h-full w-full object-cover transition-transform duration-300 group-hover/thumb:scale-105"
                        />
                        <span className="absolute inset-0 bg-[#14271f]/0 transition-colors duration-300 group-hover/thumb:bg-[#14271f]/10" />
                      </button>
                    ))}
                  </div>
                )}

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

                {/* Actions */}
                <div className="mt-6 flex flex-wrap items-center gap-3">
                  {stay.gallery.length > 0 && (
                    <button
                      type="button"
                      onClick={() => openLightbox(stay, 0)}
                      className="inline-flex items-center gap-2 rounded-full border border-[#3d5d49]/30 bg-transparent px-4 py-2.5 text-[0.8rem] font-semibold text-[#3d5d49] transition-colors duration-300 hover:border-[#3d5d49] hover:bg-[#3d5d49] hover:text-[#f3ecdb]"
                    >
                      Ver fotos
                      <span className="text-[0.7rem] text-[#3d5d49]/60">
                        ({stay.gallery.length})
                      </span>
                    </button>
                  )}

                  <a
                    href={CONTACT.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor="cta"
                    className="inline-flex items-center gap-2 rounded-full bg-[#1f3a2e] px-5 py-2.5 text-[0.8rem] font-semibold text-[#f3ecdb] transition-all duration-300 group-hover:bg-[#e07a3c] group-hover:text-white"
                  >
                    Consultar disponibilidade
                    <ArrowRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </a>
                </div>
              </motion.article>
            );
          })}
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

        {/* Ver todas — página dedicada com comparativo */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6 }}
          className="mt-10 flex justify-center"
        >
          <a
            href={`${import.meta.env.BASE_URL}/acomodacoes`}
            data-cursor="cta"
            className="group inline-flex items-center gap-2 rounded-full border-2 border-[#1f3a2e] bg-transparent px-6 py-3 text-[0.85rem] font-semibold text-[#1f3a2e] transition-all duration-300 hover:bg-[#1f3a2e] hover:text-[#f3ecdb]"
          >
            Ver todas as acomodações e comparar
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>

      <Lightbox
        state={lightbox}
        onClose={closeLightbox}
        onPrev={prevPhoto}
        onNext={nextPhoto}
      />
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Spec                                                                */
/* ------------------------------------------------------------------ */
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
