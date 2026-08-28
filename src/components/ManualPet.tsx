import { AnimatePresence, motion } from "framer-motion";
import { BookOpen, ChevronLeft, ChevronRight, Download, X } from "lucide-react";
import { useEffect, useState } from "react";

/* ------------------------------------------------------------------ */
/* Manual Elanco — "Farejando por Aí"                                  */
/* Cartilha de viagem para tutores (11 páginas, A5).                   */
/* ------------------------------------------------------------------ */
const MANUAL_BASE =
  "https://i0.wp.com/portaldocacau.com.br/wp-content/uploads/2026/05/ELANCO-FAREJANDO-POR-AI-CARTILHA-DE-VIAGEM-PARA-TUTOR_A5_final";
const MANUAL_SUFFIXES = ["", "-3", "-4", "-5", "-6", "-7", "-8", "-9", "-10", "-11", "-12"];

type ManualPage = { full: string; thumb: string };

const PAGES: ManualPage[] = MANUAL_SUFFIXES.map((s) => ({
  full: `${MANUAL_BASE}${s}.jpg?w=1327&ssl=1`,
  thumb: `${MANUAL_BASE}${s}.jpg?resize=600,833&ssl=1`,
}));

export default function ManualPet() {
  const [index, setIndex] = useState<number | null>(null);

  const close = () => setIndex(null);
  const prev = () =>
    setIndex((i) => (i === null ? i : (i - 1 + PAGES.length) % PAGES.length));
  const next = () =>
    setIndex((i) => (i === null ? i : (i + 1) % PAGES.length));

  useEffect(() => {
    if (index === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      else if (e.key === "ArrowLeft") prev();
      else if (e.key === "ArrowRight") next();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [index]);

  return (
    <section id="manual" className="relative bg-[#fbf6ea] py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-10 sm:mb-14">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12% 0px" }}
            transition={{ duration: 0.6 }}
            className="mb-5 flex items-center gap-4"
          >
            <span className="field-no text-2xl" style={{ color: "#e8b547" }}>
              i
            </span>
            <span className="eyebrow text-[#9c4d1c]">
              Leitura recomendada · Manual do tutor
            </span>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_1fr] lg:items-end">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{ duration: 0.7 }}
              className="font-display text-[2rem] leading-[1.05] text-[#14271f] sm:text-[2.6rem] lg:text-[3.2rem]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              Manual de Boas Práticas em
              <span className="block italic text-[#9c4d1c]">
                viagens com seu pet.
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[0.92rem] leading-relaxed text-[#6b5d45] lg:pb-3"
            >
              A cartilha{" "}
              <span className="font-semibold text-[#14271f]">
                Elanco — Farejando por Aí
              </span>{" "}
              reúne tudo o que um tutor precisa saber antes de viajar com seu
              companheiro: preparação, transporte, saúde, documentação e
              convivência no destino. Toque em qualquer página para ler em tela
              cheia.
            </motion.p>
          </div>
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
          {PAGES.map((p, i) => (
            <motion.button
              key={p.full}
              type="button"
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-6% 0px" }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
              onClick={() => setIndex(i)}
              aria-label={`Abrir página ${i + 1} do manual`}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-[#d9cfb8] bg-[#f3ecdb] shadow-(--shadow-subtle) transition-all duration-300 hover:-translate-y-1 hover:shadow-(--shadow-elevated)"
            >
              <div className="relative aspect-[3/4.17] w-full overflow-hidden bg-[#e6dec9]">
                <img
                  src={p.thumb}
                  alt={`Manual Farejando por Aí — página ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-[#14271f]/0 transition-colors duration-300 group-hover:bg-[#14271f]/15" />
                <span className="absolute left-2 top-2 rounded-md bg-[#14271f]/80 px-2 py-0.5 text-[0.62rem] font-semibold tracking-wide text-[#f3ecdb] backdrop-blur-sm">
                  {i + 1}
                </span>
              </div>
              <span className="flex items-center justify-center gap-1.5 border-t border-[#e6dec9] py-2 text-[0.66rem] font-semibold uppercase tracking-[0.14em] text-[#9c4d1c] transition-colors group-hover:text-[#e07a3c]">
                <BookOpen size={11} strokeWidth={1.9} />
                Ler página
              </span>
            </motion.button>
          ))}
        </div>

        {/* Download / source note */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6 }}
          className="mt-8 flex flex-col items-center gap-3 rounded-2xl border border-[#d9cfb8] bg-[#f3ecdb] px-6 py-5 text-center sm:flex-row sm:justify-center sm:gap-4"
        >
          <Download size={18} className="shrink-0 text-[#9c4d1c]" />
          <p className="text-[0.85rem] leading-relaxed text-[#4a4030]">
            Conteúdo cedido pela{" "}
            <span className="font-semibold text-[#14271f]">Elanco</span> —
            cartilha “Farejando por Aí”. Para a melhor experiência, leia em tela
            cheia ou no seu navegador.
          </p>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {index !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#14271f]/95 backdrop-blur-sm"
            onClick={close}
          >
            <button
              type="button"
              aria-label="Fechar manual"
              onClick={(e) => {
                e.stopPropagation();
                close();
              }}
              className="absolute right-4 top-4 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
            >
              <X size={22} strokeWidth={1.8} />
            </button>

            <div className="absolute left-1/2 top-5 z-10 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-[0.78rem] font-medium tracking-wide text-white">
              {index + 1} / {PAGES.length}
              <span className="ml-2 text-white/60">· Farejando por Aí</span>
            </div>

            <button
              type="button"
              aria-label="Página anterior"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:left-6"
            >
              <ChevronLeft size={26} strokeWidth={1.8} />
            </button>

            <button
              type="button"
              aria-label="Próxima página"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-3 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20 sm:right-6"
            >
              <ChevronRight size={26} strokeWidth={1.8} />
            </button>

            <motion.img
              key={index}
              src={PAGES[index].full}
              alt={`Manual Farejando por Aí — página ${index + 1}`}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="max-h-[86vh] max-w-[92vw] rounded-lg object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
