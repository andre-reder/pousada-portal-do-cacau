/// <reference types="vite/client" />
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import {
  Camera,
  ChevronLeft,
  ChevronRight,
  Clock,
  Film,
  Maximize2,
  MessageCircle,
  Play,
  Sparkles,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { CONTACT } from "./cn";

import buffetImg from "../../assets/breakfest/buffet-mesa-cafe-da-manha.webp";
import cafePetImg from "../../assets/breakfest/cafe-pet-muffins-kisuco-golden.webp";
import mesaCompartilhadaImg from "../../assets/breakfest/mesa-compartilhada-humanos-e-pets.webp";
import petAlegriaImg from "../../assets/breakfest/pet-alegria-cafe-da-manha.webp";
import tapiocaOvosImg from "../../assets/breakfest/tapioca-ovos-mexidos-suco.webp";
import tapiocaRosaImg from "../../assets/breakfest/tapioca-rosa-queijo-dourado.webp";
import tutoraPetImg from "../../assets/breakfest/tutora-pet-compartilhando-cafe.webp";

import videoCafePetPoster from "../../assets/breakfest/video-cafe-pet-poster.webp";
import videoCafePet from "../../assets/breakfest/video-cafe-pet.mp4";
import videoSalaoCafePoster from "../../assets/breakfest/video-salao-cafe-poster.webp";
import videoSalaoCafe from "../../assets/breakfest/video-salao-cafe.mp4";

export interface BreakfastVideo {
  id: string;
  src: string;
  poster: ImageMetadata;
  duration: string;
  tag: string;
  title: string;
  description: string;
}

export interface BreakfastPhoto {
  id: string;
  image: ImageMetadata;
  title: string;
  subtitle: string;
  tag: string;
  category: "sabores" | "pet";
  featured?: boolean;
  objectPosition?: string;
  badgeClass: string;
}

const VIDEOS: BreakfastVideo[] = [
  {
    id: "video-cafe-pet",
    src: videoCafePet,
    poster: videoCafePetPoster,
    duration: "0:18",
    tag: "Café da Manhã Pet",
    title: "Muffins naturais na hora do café",
    description:
      "Kisuco e hóspedes de quatro patas aproveitando os bolinhos e muffins de abóbora preparados na cozinha da pousada.",
  },
  {
    id: "video-salao-cafe",
    src: videoSalaoCafe,
    poster: videoSalaoCafePoster,
    duration: "0:11",
    tag: "Salão Pé na Areia",
    title: "O clima acolhedor das nossas manhãs",
    description:
      "Mesas de madeira sobre a areia, sombra da Mata Atlântica, música suave e tutores tomando café lado a lado com seus pets.",
  },
];

const PHOTOS: BreakfastPhoto[] = [
  {
    id: "buffet-mesa-cafe-da-manha",
    image: buffetImg,
    title: "Mesa Farta no Salão Pé na Areia",
    subtitle:
      "Frutas tropicais, bolos caseiros, pães, granola, frios, geleias artesanais e suco natural servidos em ambiente arejado — com os pets sempre bem-vindos ao lado.",
    tag: "Buffet da Pousada",
    category: "sabores",
    featured: true,
    objectPosition: "object-[center_62%]",
    badgeClass: "bg-[#e8b547] text-[#14271f]",
  },
  {
    id: "cafe-pet-muffins-kisuco-golden",
    image: cafePetImg,
    title: "Café da Manhã Especial para Pets",
    subtitle:
      "Kisuco e hóspede Golden diante do prato de muffins de abóbora e bolinhos 100% naturais preparados pela equipe da pousada.",
    tag: "Café Pet Incluso",
    category: "pet",
    objectPosition: "object-center",
    badgeClass: "bg-[#e07a3c] text-white",
  },
  {
    id: "tapioca-rosa-queijo-dourado",
    image: tapiocaRosaImg,
    title: "Tapioca Artesanal com Crosta Dourada",
    subtitle:
      "Preparada na hora na cozinha da pousada, servida quentinha com queijo dourado, frutas frescas e café coado.",
    tag: "Feito na Hora",
    category: "sabores",
    objectPosition: "object-center",
    badgeClass: "bg-[#3d5d49] text-[#f3ecdb]",
  },
  {
    id: "tapioca-ovos-mexidos-suco",
    image: tapiocaOvosImg,
    title: "Tapioca com Ovos Mexidos & Suco Natural",
    subtitle:
      "Combinação nutritiva para começar o dia em Camburi com energia, sabor caseiro e apresentação caprichada.",
    tag: "Nutritivo & Caprichado",
    category: "sabores",
    objectPosition: "object-center",
    badgeClass: "bg-[#2c6e7f] text-white",
  },
  {
    id: "mesa-compartilhada-humanos-e-pets",
    image: mesaCompartilhadaImg,
    title: "Mesa Compartilhada Entre Tutores e Pets",
    subtitle:
      "Mamão com granola, banana grelhada e café passado para os tutores; bolinhos naturais no prato para os cães que acompanham cada refeição.",
    tag: "Para Todos à Mesa",
    category: "pet",
    objectPosition: "object-center",
    badgeClass: "bg-[#6b4423] text-[#f3ecdb]",
  },
  {
    id: "tutora-pet-compartilhando-cafe",
    image: tutoraPetImg,
    title: "Manhãs Leves Junto de Quem Você Ama",
    subtitle:
      "Aqui o café da manhã é vivido em família, sem pressa e com receitas naturais que humanos e pets podem saborear juntos.",
    tag: "Experiência Pet Friendly",
    category: "pet",
    objectPosition: "object-top",
    badgeClass: "bg-[#1f3a2e] text-[#e8b547]",
  },
  {
    id: "pet-alegria-cafe-da-manha",
    image: petAlegriaImg,
    title: "Alegria Garantida no Salão do Café",
    subtitle:
      "Espaço amplo com piso de areia e sombra natural para os pets circularem com conforto ao lado dos tutores.",
    tag: "Salão Pet Friendly",
    category: "pet",
    objectPosition: "object-center",
    badgeClass: "bg-[#9c4d1c] text-white",
  },
];

const CATEGORIES = [
  { id: "todas", label: `Todas as fotos (${PHOTOS.length})` },
  {
    id: "sabores",
    label: `Mesa & Sabores (${PHOTOS.filter((p) => p.category === "sabores").length})`,
  },
  {
    id: "pet",
    label: `Café da Manhã Pet (${PHOTOS.filter((p) => p.category === "pet").length})`,
  },
] as const;

export default function CafeDaManhaGallery() {
  const reduce = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState<string>("todas");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [startedVideos, setStartedVideos] = useState<Record<string, boolean>>(
    {}
  );
  const videoRefs = useRef<Record<string, HTMLVideoElement | null>>({});
  const videoContainerRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const filteredPhotos =
    activeCategory === "todas"
      ? PHOTOS
      : PHOTOS.filter((p) => p.category === activeCategory);

  const currentPhoto =
    lightboxIndex !== null ? PHOTOS[lightboxIndex] : null;

  // Pausa vídeos que saem da viewport
  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    VIDEOS.forEach((v) => {
      const container = videoContainerRefs.current[v.id];
      if (!container) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.intersectionRatio < 0.2) {
              const videoEl = videoRefs.current[v.id];
              if (videoEl && !videoEl.paused) {
                videoEl.pause();
              }
            }
          });
        },
        { threshold: [0, 0.2, 0.5] }
      );

      observer.observe(container);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, []);

  // Controle de reprodução click-to-play (pausa o outro vídeo ao iniciar um)
  const handlePlayVideo = (id: string) => {
    VIDEOS.forEach((v) => {
      if (v.id !== id) {
        const other = videoRefs.current[v.id];
        if (other && !other.paused) {
          other.pause();
        }
      }
    });

    setStartedVideos((prev) => ({ ...prev, [id]: true }));
    const target = videoRefs.current[id];
    if (target) {
      void target.play().catch(() => {
        // Fallback silencioso caso o navegador bloqueie play programático
      });
    }
  };

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
        {/* Bloco 1 — Vídeos Reais em Movimento */}
        <div className="mb-20 sm:mb-28">
          <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end sm:mb-14">
            <div>
              <div className="mb-4 flex items-center gap-3">
                <span className="field-no text-2xl text-[#9c4d1c]">03</span>
                <span className="eyebrow text-[#9c4d1c]">
                  Em Movimento · Vídeos Reais do Nosso Café
                </span>
              </div>
              <h2
                className="max-w-2xl font-display text-[2.1rem] leading-[1.06] text-[#14271f] sm:text-[2.9rem] lg:text-[3.3rem]"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
              >
                Sinta o clima da manhã
                <span className="italic text-[#9c4d1c]"> antes mesmo de chegar.</span>
              </h2>
              <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-[#4a4030]">
                Registros reais do nosso salão pé na areia e da alegria dos pets
                experimentando os muffins naturais preparados pela nossa equipe.
              </p>
            </div>

            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#d9cfb8] bg-[#fbf6ea] px-5 py-2.5 shadow-sm">
              <Film size={16} className="text-[#9c4d1c]" aria-hidden="true" />
              <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#14271f]">
                {VIDEOS.length} vídeos reais · Clique para assistir
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
            {VIDEOS.map((video) => {
              const isStarted = Boolean(startedVideos[video.id]);
              return (
                <article
                  key={video.id}
                  ref={(el) => {
                    videoContainerRefs.current[video.id] =
                      el as HTMLDivElement | null;
                  }}
                  className="grid grid-cols-1 items-center gap-6 rounded-[var(--radius-stage)] border border-[#d9cfb8] bg-[#fbf6ea] p-5 shadow-(--shadow-subtle) sm:grid-cols-[260px_1fr] sm:p-6"
                >
                  {/* Player Vertical 9:16 com largura controlada */}
                  <div className="relative mx-auto aspect-[9/16] w-full max-w-[300px] overflow-hidden rounded-2xl border border-[#d9cfb8] bg-[#14271f] shadow-lg sm:mx-0">
                    <video
                      ref={(el) => {
                        videoRefs.current[video.id] = el;
                      }}
                      src={video.src}
                      poster={video.poster.src}
                      preload="metadata"
                      playsInline
                      controls={isStarted}
                      onPlay={() => {
                        VIDEOS.forEach((other) => {
                          if (other.id !== video.id) {
                            const el = videoRefs.current[other.id];
                            if (el && !el.paused) el.pause();
                          }
                        });
                        if (!isStarted) {
                          setStartedVideos((prev) => ({
                            ...prev,
                            [video.id]: true,
                          }));
                        }
                      }}
                      className="h-full w-full object-cover"
                    >
                      Seu navegador não suporta reprodução de vídeo.
                    </video>

                    {/* Overlay Click-to-Play (sem autoplay) */}
                    {!isStarted && (
                      <button
                        type="button"
                        onClick={() => handlePlayVideo(video.id)}
                        aria-label={`Reproduzir vídeo: ${video.title}`}
                        className="group absolute inset-0 flex flex-col items-center justify-center bg-[#14271f]/35 transition-colors duration-300 hover:bg-[#14271f]/20"
                      >
                        <span className="flex h-16 w-16 items-center justify-center rounded-full bg-[#e07a3c] text-white shadow-xl transition-transform duration-300 group-hover:scale-110">
                          <Play
                            size={26}
                            className="ml-1 fill-white"
                            aria-hidden="true"
                          />
                        </span>
                        <span className="mt-3 rounded-full bg-[#14271f]/85 px-3.5 py-1 text-xs font-semibold text-[#f3ecdb] backdrop-blur-sm">
                          Assistir ({video.duration})
                        </span>
                      </button>
                    )}
                  </div>

                  {/* Contexto Editorial do Vídeo */}
                  <div className="flex flex-col justify-center">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="rounded-full bg-[#1f3a2e] px-3 py-1 text-xs font-semibold uppercase tracking-[0.14em] text-[#e8b547]">
                        {video.tag}
                      </span>
                      <span className="inline-flex items-center gap-1 text-xs font-medium text-[#6b5d45]">
                        <Clock size={13} aria-hidden="true" />
                        {video.duration}
                      </span>
                    </div>

                    <h3
                      className="mt-4 font-display text-2xl leading-snug text-[#14271f]"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 400,
                      }}
                    >
                      {video.title}
                    </h3>

                    <p className="mt-3 text-[0.92rem] leading-relaxed text-[#4a4030]">
                      {video.description}
                    </p>

                    {!isStarted && (
                      <button
                        type="button"
                        onClick={() => handlePlayVideo(video.id)}
                        className="mt-6 inline-flex min-h-11 w-fit items-center gap-2 rounded-full border border-[#1f3a2e]/25 bg-[#1f3a2e] px-5 py-2.5 text-sm font-semibold text-[#f3ecdb] transition-colors hover:bg-[#e07a3c] hover:border-[#e07a3c] hover:text-white"
                      >
                        <Play size={15} className="fill-current" aria-hidden="true" />
                        Reproduzir vídeo
                      </button>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        </div>

        {/* Bloco 2 — Galeria Fotográfica (7 Fotos Reais) */}
        <div className="hairline mb-16 sm:mb-20" />

        <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end sm:mb-12">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="field-no text-2xl text-[#9c4d1c]">04</span>
              <span className="eyebrow text-[#9c4d1c]">
                Galeria Fotográfica · Registros Reais
              </span>
            </div>
            <h2
              className="max-w-2xl font-display text-[2.1rem] leading-[1.06] text-[#14271f] sm:text-[2.9rem] lg:text-[3.3rem]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              Cada prato pensado com carinho,
              <span className="italic text-[#2c6e7f]"> para tutores e pets.</span>
            </h2>
          </div>

          <div className="inline-flex items-center gap-2.5 rounded-full border border-[#d9cfb8] bg-[#fbf6ea] px-5 py-2.5 shadow-sm">
            <Sparkles size={16} className="text-[#e07a3c]" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-[0.16em] text-[#14271f]">
              {PHOTOS.length} fotos reais
            </span>
          </div>
        </div>

        {/* Filtros por Categoria */}
        <div
          role="group"
          aria-label="Filtrar fotos do café da manhã"
          className="mb-10 flex flex-wrap gap-2.5 sm:mb-12"
        >
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                type="button"
                aria-pressed={isActive}
                onClick={() => setActiveCategory(cat.id)}
                className={`min-h-11 rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                  isActive
                    ? "bg-[#1f3a2e] text-[#f3ecdb] shadow-md"
                    : "border border-[#d9cfb8] bg-[#fbf6ea] text-[#4a4030] hover:border-[#1f3a2e]/50 hover:text-[#14271f]"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Grid Fotográfico Retrato-Friendly */}
        <motion.div
          layout={!reduce}
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6"
        >
          {filteredPhotos.map((photo) => {
            const globalIndex = PHOTOS.findIndex((p) => p.id === photo.id);
            const isWideFeatured =
              Boolean(photo.featured) && activeCategory === "todas";

            return (
              <motion.article
                key={photo.id}
                layout={!reduce}
                initial={reduce ? false : { y: 18 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{ duration: 0.45 }}
                className={`group relative overflow-hidden rounded-[var(--radius-card)] border border-[#d9cfb8] bg-[#14271f] shadow-(--shadow-subtle) transition-all duration-300 hover:shadow-(--shadow-elevated) ${
                  isWideFeatured
                    ? "aspect-[3/4] sm:col-span-2 lg:aspect-[16/11]"
                    : "aspect-[3/4]"
                }`}
              >
                <img
                  src={photo.image.src}
                  alt={photo.title}
                  loading="lazy"
                  decoding="async"
                  className={`h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${
                    photo.objectPosition || "object-center"
                  }`}
                />

                {/* Overlay escuro para contraste >= 4.5:1 */}
                <div
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0c1812]/95 via-[#0c1812]/35 to-transparent"
                  aria-hidden="true"
                />

                {/* Botão único acessível cobrindo o card */}
                <button
                  type="button"
                  onClick={() => setLightboxIndex(globalIndex)}
                  aria-label={`Ampliar foto: ${photo.title}`}
                  className="absolute inset-0 z-10 flex flex-col justify-between p-5 text-left sm:p-6"
                >
                  <div className="flex w-full items-start justify-between gap-3">
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-xs font-bold uppercase tracking-[0.12em] shadow-sm ${photo.badgeClass}`}
                    >
                      {photo.tag}
                    </span>
                    <span
                      aria-hidden="true"
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#14271f]/80 text-[#f3ecdb] backdrop-blur-sm transition-all duration-300 group-hover:scale-105 group-hover:bg-[#e07a3c] group-hover:text-white"
                    >
                      <Maximize2 size={17} />
                    </span>
                  </div>

                  <div>
                    <h3
                      className="font-display text-xl leading-snug text-[#f3ecdb] transition-colors group-hover:text-[#e8b547] sm:text-[1.35rem]"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 400,
                        color: "#f3ecdb",
                      }}
                    >
                      {photo.title}
                    </h3>
                    <p className="mt-1.5 line-clamp-2 text-sm leading-relaxed text-[#f3ecdb]/90">
                      {photo.subtitle}
                    </p>
                    <span className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#e8b547]">
                      <Camera size={13} aria-hidden="true" />
                      Ver foto ampliada
                    </span>
                  </div>
                </button>
              </motion.article>
            );
          })}
        </motion.div>
      </div>

      {/* Lightbox Modal em Tela Cheia */}
      <AnimatePresence>
        {lightboxIndex !== null && currentPhoto && (
          <motion.div
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={reduce ? undefined : { opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="fixed inset-0 z-90 flex flex-col justify-between bg-black/92 p-4 backdrop-blur-xl sm:p-6 lg:p-8"
            role="dialog"
            aria-modal="true"
            aria-label={currentPhoto.title}
          >
            {/* Topbar do Lightbox */}
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <span className="rounded-full bg-white/15 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#e8b547]">
                  {lightboxIndex + 1} de {PHOTOS.length}
                </span>
                <span className="hidden text-sm text-[#f3ecdb]/85 sm:inline">
                  {currentPhoto.tag}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <a
                  href={CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hidden min-h-11 items-center gap-2 rounded-full bg-[#e07a3c] px-5 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#c25f28] sm:inline-flex"
                >
                  <MessageCircle size={15} aria-hidden="true" />
                  Reservar estadia com esse café
                </a>
                <button
                  type="button"
                  onClick={() => setLightboxIndex(null)}
                  aria-label="Fechar galeria"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/25"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Imagem Central com Controles Prev/Next */}
            <div className="relative flex flex-1 items-center justify-center py-4">
              <button
                type="button"
                onClick={() =>
                  setLightboxIndex(
                    (lightboxIndex - 1 + PHOTOS.length) % PHOTOS.length
                  )
                }
                aria-label="Foto anterior"
                className="absolute left-1 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur-sm transition-all hover:scale-110 hover:bg-[#e07a3c] sm:left-4"
              >
                <ChevronLeft size={24} />
              </button>

              <motion.div
                key={currentPhoto.id}
                initial={reduce ? false : { opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={reduce ? undefined : { opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                className="flex max-h-[68vh] max-w-4xl items-center justify-center overflow-hidden rounded-2xl"
              >
                <img
                  src={currentPhoto.image.src}
                  alt={currentPhoto.title}
                  className="max-h-[68vh] max-w-full rounded-2xl object-contain shadow-2xl"
                />
              </motion.div>

              <button
                type="button"
                onClick={() =>
                  setLightboxIndex((lightboxIndex + 1) % PHOTOS.length)
                }
                aria-label="Próxima foto"
                className="absolute right-1 z-20 flex h-12 w-12 items-center justify-center rounded-full bg-black/70 text-white backdrop-blur-sm transition-all hover:scale-110 hover:bg-[#e07a3c] sm:right-4"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Rodapé com Legenda & Miniaturas */}
            <div className="mx-auto flex w-full max-w-4xl flex-col items-center gap-3 text-center">
              <div>
                <h3
                  className="font-display text-lg text-[#f3ecdb] sm:text-xl"
                  style={{ fontFamily: "var(--font-display)", color: "#f3ecdb" }}
                >
                  {currentPhoto.title}
                </h3>
                <p className="mt-1 max-w-2xl text-sm text-[#f3ecdb]/85">
                  {currentPhoto.subtitle}
                </p>
              </div>

              <div className="mt-1 flex max-w-full items-center gap-2 overflow-x-auto py-2">
                {PHOTOS.map((p, idx) => (
                  <button
                    key={p.id}
                    type="button"
                    aria-label={`Ver foto ${idx + 1}: ${p.title}`}
                    onClick={() => setLightboxIndex(idx)}
                    className={`h-12 w-12 shrink-0 overflow-hidden rounded-lg border-2 transition-all ${
                      idx === lightboxIndex
                        ? "scale-105 border-[#e07a3c] shadow-md"
                        : "border-white/25 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={p.image.src}
                      alt=""
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
