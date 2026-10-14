/// <reference types="vite/client" />
import { AnimatePresence, motion } from "framer-motion";
import {
  Award,
  ChevronLeft,
  ChevronRight,
  Clock,
  Dumbbell,
  Maximize2,
  Moon,
  Sparkles,
  Sun,
  Users,
  X,
  Zap,
} from "lucide-react";
import { useEffect, useState } from "react";
import { CONTACT } from "./cn";

// Imagens reais da Arena de Beach Tennis
import img3921 from "../../assets/beach-tennis/IMG_3921.JPG";
import img3922 from "../../assets/beach-tennis/IMG_3922.JPG";
import img3923 from "../../assets/beach-tennis/IMG_3923.JPG";
import img3939 from "../../assets/beach-tennis/IMG_3939.JPG";
import img3940 from "../../assets/beach-tennis/IMG_3940.JPG";
import img3941 from "../../assets/beach-tennis/IMG_3941.JPG";
import img3942 from "../../assets/beach-tennis/IMG_3942.JPG";

export interface BeachTennisPhoto {
  id: string;
  image: ImageMetadata;
  title: string;
  subtitle: string;
  tag: string;
  category: "destaque" | "aulas" | "quadra" | "complexo";
  span?: string;
  badgeColor?: string;
}

const PHOTOS: BeachTennisPhoto[] = [
  {
    id: "panoramica-complexo",
    image: img3939,
    title: "Complexo Esportivo & Lazer na Mata",
    subtitle:
      "Vista aérea da arena oficial de beach tennis integrada à piscina semiolímpica, deck e mata atlântica preservada.",
    tag: "Vista Aérea Panorâmica",
    category: "destaque",
    span: "lg:col-span-2 lg:row-span-2",
    badgeColor: "bg-[#e8b547] text-[#14271f]",
  },
  {
    id: "coach-robinho-perfil",
    image: img3942,
    title: "Coach Robinho — Treinador Oficial",
    subtitle:
      "Aulas particulares e em grupo com o experiente Coach Robinho, adaptadas para iniciantes, intermediários e atletas avançados.",
    tag: "Coach Oficial",
    category: "aulas",
    span: "lg:col-span-1 lg:row-span-2",
    badgeColor: "bg-[#e07a3c] text-white",
  },
  {
    id: "aula-hospedes",
    image: img3940,
    title: "Clínicas & Diversão para Hóspedes",
    subtitle:
      "Hóspedes e amigos comemorando o treino na areia com raquetes fornecidas pela pousada.",
    tag: "Aulas & Hóspedes",
    category: "aulas",
    span: "lg:col-span-1 lg:row-span-1",
    badgeColor: "bg-[#3d5d49] text-white",
  },
  {
    id: "partida-andamento",
    image: img3941,
    title: "Partida sob o Sol de Camburi",
    subtitle:
      "Disputa em andamento na arena com rede regulamentar, gramado lateral e refletores de iluminação noturna.",
    tag: "Jogo em Andamento",
    category: "quadra",
    span: "lg:col-span-1 lg:row-span-1",
    badgeColor: "bg-[#2c6e7f] text-white",
  },
  {
    id: "deck-jardim-quadra",
    image: img3923,
    title: "Deck de Convivência & Jardim Tropical",
    subtitle:
      "Integração perfeita entre o deck de madeira com espreguiçadeiras, telhado colonial, jardim tropical e a arena.",
    tag: "Deck & Convivência",
    category: "complexo",
    span: "lg:col-span-1 lg:row-span-1",
    badgeColor: "bg-[#6b4423] text-white",
  },
  {
    id: "marcacões-areia-zenital",
    image: img3921,
    title: "Dimensões Regulamentares 20×11m",
    subtitle:
      "Areia fofa de alta qualidade tratada especialmente para a prática do esporte, com linhas oficiais e área de escape.",
    tag: "Estrutura Oficial",
    category: "quadra",
    span: "lg:col-span-1 lg:row-span-1",
    badgeColor: "bg-[#1f3a2e] text-[#e8b547]",
  },
  {
    id: "treino-coqueiros",
    image: img3922,
    title: "Esporte & Natureza Caiçara",
    subtitle:
      "Jogar beach tennis respirando o ar puro do Sertão do Camburi e a brisa que vem do mar.",
    tag: "Sertão do Camburi",
    category: "complexo",
    span: "lg:col-span-1 lg:row-span-1",
    badgeColor: "bg-[#9c4d1c] text-white",
  },
];

const CATEGORIES = [
  { id: "todas", label: "Todas as fotos" },
  { id: "destaque", label: "Destaque" },
  { id: "aulas", label: "Coach & Aulas" },
  { id: "quadra", label: "A Quadra" },
  { id: "complexo", label: "Estrutura & Lazer" },
] as const;

export default function BeachTennisGallery() {
  const [activeCategory, setActiveCategory] = useState<string>("todas");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredPhotos =
    activeCategory === "todas"
      ? PHOTOS
      : PHOTOS.filter((p) => p.category === activeCategory);

  const currentPhoto =
    lightboxIndex !== null ? PHOTOS[lightboxIndex] : null;

  // Navegação no teclado para o Lightbox
  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightboxIndex(null);
      } else if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % PHOTOS.length : null
        );
      } else if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + PHOTOS.length) % PHOTOS.length : null
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [lightboxIndex]);

  return (
    <section
      id="galeria"
      className="relative scroll-mt-24 bg-[#f3ecdb] py-20 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Cabeçalho Editorial */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end sm:mb-16">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="field-no text-2xl text-[#9c4d1c]">02</span>
              <span className="eyebrow text-[#9c4d1c]">
                Galeria Fotográfica · Registros Reais
              </span>
            </div>
            <h2
              className="max-w-2xl font-display text-[2.2rem] leading-[1.05] text-[#14271f] sm:text-[3rem] lg:text-[3.4rem]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              A energia da arena
              <span className="italic text-[#2c6e7f]"> em cada ângulo.</span>
            </h2>
            <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-[#4a4030]">
              Confira as fotos reais da nossa quadra oficial de beach tennis:
              areia fina de alta qualidade, iluminação noturna, treinos com o
              Coach Robinho e a atmosfera única do Sertão do Camburi.
            </p>
          </div>

          {/* Quick Counter Badge */}
          <div className="flex items-center gap-3 rounded-full border border-[#d9cfb8] bg-[#fbf6ea] px-5 py-2.5 shadow-sm">
            <Sparkles size={16} className="text-[#e07a3c]" />
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#14271f]">
              {PHOTOS.length} fotos oficiais
            </span>
          </div>
        </div>

        {/* Filtros por Categoria */}
        <div className="mb-10 flex flex-wrap gap-2.5 sm:mb-12">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? "bg-[#1f3a2e] text-[#f3ecdb] shadow-md"
                    : "border border-[#d9cfb8] bg-[#fbf6ea] text-[#6b5d45] hover:border-[#1f3a2e]/40 hover:text-[#14271f]"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Bento Grid Fotográfico */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
        >
          {filteredPhotos.map((photo) => {
            const globalIndex = PHOTOS.findIndex((p) => p.id === photo.id);
            return (
              <motion.div
                key={photo.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{ duration: 0.5 }}
                className={`group relative overflow-hidden rounded-[var(--radius-card)] border border-[#d9cfb8] bg-[#14271f] shadow-(--shadow-subtle) transition-all duration-300 hover:shadow-(--shadow-elevated) ${
                  photo.span || ""
                }`}
              >
                {/* Imagem Container */}
                <div
                  className={`relative w-full overflow-hidden ${
                    photo.span?.includes("row-span-2")
                      ? "h-96 sm:h-[480px] lg:h-full min-h-[360px]"
                      : "h-72 sm:h-80"
                  }`}
                >
                  <img
                    src={photo.image.src}
                    alt={photo.title}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Gradient Overlay permanente e reforçado no hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#14271f]/90 via-[#14271f]/20 to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-85" />

                  {/* Tag Pill no topo */}
                  <div className="absolute left-4 top-4 z-10">
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.14em] shadow-sm backdrop-blur-sm ${
                        photo.badgeColor || "bg-[#1f3a2e]/80 text-[#f3ecdb]"
                      }`}
                    >
                      {photo.tag}
                    </span>
                  </div>

                  {/* Botão de Ampliar / Zoom */}
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(globalIndex)}
                    aria-label={`Ampliar foto: ${photo.title}`}
                    className="absolute right-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-[#14271f]/70 text-[#f3ecdb] backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:bg-[#e07a3c] hover:text-white"
                  >
                    <Maximize2 size={15} />
                  </button>

                  {/* Conteúdo na base do card */}
                  <div
                    onClick={() => setLightboxIndex(globalIndex)}
                    className="absolute inset-x-0 bottom-0 z-10 cursor-pointer p-5 sm:p-6"
                  >
                    <h3
                      className="font-display text-lg text-[#f3ecdb] transition-colors group-hover:text-[#e8b547] sm:text-xl"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 400,
                      }}
                    >
                      {photo.title}
                    </h3>
                    <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-[#f3ecdb]/80 sm:text-[0.82rem]">
                      {photo.subtitle}
                    </p>
                    <div className="mt-3 flex items-center gap-1.5 text-xs font-semibold text-[#e8b547] opacity-0 transition-all duration-300 group-hover:opacity-100">
                      <span>Ver foto em tela cheia</span>
                      <ChevronRight size={14} />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* 4 Destaques da Estrutura */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5 sm:mt-20">
          <div className="flex items-start gap-4 rounded-2xl border border-[#d9cfb8] bg-[#fbf6ea] p-5 shadow-sm">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1f3a2e] text-[#e8b547]">
              <Dumbbell size={18} />
            </div>
            <div>
              <h4 className="font-semibold text-[#14271f]">
                Dimensões Oficiais
              </h4>
              <p className="mt-1 text-xs leading-relaxed text-[#6b5d45]">
                20m × 11m com areia tratada própria para beach tennis.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl border border-[#d9cfb8] bg-[#fbf6ea] p-5 shadow-sm">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1f3a2e] text-[#e8b547]">
              <Moon size={18} />
            </div>
            <div>
              <h4 className="font-semibold text-[#14271f]">
                Iluminação Noturna
              </h4>
              <p className="mt-1 text-xs leading-relaxed text-[#6b5d45]">
                Refletores potentes para jogar no frescor da noite.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl border border-[#d9cfb8] bg-[#fbf6ea] p-5 shadow-sm">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1f3a2e] text-[#e8b547]">
              <Zap size={18} />
            </div>
            <div>
              <h4 className="font-semibold text-[#14271f]">
                Grátis para Hóspedes
              </h4>
              <p className="mt-1 text-xs leading-relaxed text-[#6b5d45]">
                Raquetes e bolinhas de cortesia disponíveis na recepção.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 rounded-2xl border border-[#d9cfb8] bg-[#fbf6ea] p-5 shadow-sm">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#1f3a2e] text-[#e8b547]">
              <Award size={18} />
            </div>
            <div>
              <h4 className="font-semibold text-[#14271f]">Coach Robinho</h4>
              <p className="mt-1 text-xs leading-relaxed text-[#6b5d45]">
                Aulas individuais ou em grupo agendadas à parte.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Lightbox Modal em Tela Cheia */}
      <AnimatePresence>
        {lightboxIndex !== null && currentPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-90 flex flex-col justify-between bg-black/92 p-4 backdrop-blur-xl sm:p-6 lg:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={currentPhoto.title}
          >
            {/* Topbar do Lightbox */}
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-widest text-[#e8b547]">
                  {lightboxIndex + 1} de {PHOTOS.length}
                </span>
                <span className="hidden text-sm text-white/70 sm:inline">
                  {currentPhoto.tag}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <a
                  href={CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden rounded-full bg-[#e07a3c] px-4 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#c25f28] sm:inline-flex"
                >
                  Agendar aula no WhatsApp
                </a>
                <button
                  type="button"
                  onClick={() => setLightboxIndex(null)}
                  aria-label="Fechar galeria"
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Imagem Central com Controles Prev/Next */}
            <div className="relative flex flex-1 items-center justify-center py-4">
              {/* Botão Anterior */}
              <button
                type="button"
                onClick={() =>
                  setLightboxIndex(
                    (lightboxIndex - 1 + PHOTOS.length) % PHOTOS.length
                  )
                }
                aria-label="Foto anterior"
                className="absolute left-1 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-all hover:scale-110 hover:bg-[#e07a3c] sm:left-4"
              >
                <ChevronLeft size={24} />
              </button>

              {/* Imagem Ampliada com Transição Suave */}
              <motion.div
                key={currentPhoto.id}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className="flex max-h-[72vh] max-w-5xl items-center justify-center overflow-hidden rounded-2xl"
              >
                <img
                  src={currentPhoto.image.src}
                  alt={currentPhoto.title}
                  className="max-h-[72vh] max-w-full rounded-2xl object-contain shadow-2xl"
                />
              </motion.div>

              {/* Botão Próximo */}
              <button
                type="button"
                onClick={() =>
                  setLightboxIndex((lightboxIndex + 1) % PHOTOS.length)
                }
                aria-label="Próxima foto"
                className="absolute right-1 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-black/60 text-white backdrop-blur-sm transition-all hover:scale-110 hover:bg-[#e07a3c] sm:right-4"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Rodapé com Legenda & Miniaturas */}
            <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-3 text-center">
              <div>
                <h3
                  className="font-display text-lg text-[#f3ecdb] sm:text-xl"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {currentPhoto.title}
                </h3>
                <p className="mt-1 max-w-2xl text-xs text-white/70 sm:text-sm">
                  {currentPhoto.subtitle}
                </p>
              </div>

              {/* Faixa de Miniaturas Navegáveis */}
              <div className="mt-1 flex max-w-full items-center gap-2 overflow-x-auto py-2">
                {PHOTOS.map((p, idx) => (
                  <button
                    key={p.id}
                    type="button"
                    onClick={() => setLightboxIndex(idx)}
                    className={`h-12 w-16 shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                      idx === lightboxIndex
                        ? "border-[#e07a3c] scale-105 shadow-md"
                        : "border-white/20 opacity-50 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={p.image.src}
                      alt={p.title}
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
