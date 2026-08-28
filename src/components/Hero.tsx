import {
    motion,
    useReducedMotion,
    useScroll,
    useTransform,
} from "framer-motion";
import { ArrowRight, Clock, MapPin, MessageCircle, PawPrint, Star } from "lucide-react";
import { useRef } from "react";
import droneVideo from "../../assets/main-video/drone-tour-hero.mp4";
import dronePoster from "../../assets/main-video/drone-tour-poster.jpg";
import { CONTACT } from "./cn";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Subtle parallax — kept small so CTAs never get clipped.
  const canopyY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -80]);
  const glowY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 60]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : "8%"]);
  const cardY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : "12%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const headlineWords = ["Onde", "a", "mata", "encontra", "o", "mar"];

  return (
    <section
      id="topo"
      ref={ref}
      className="relative flex min-h-[calc(100svh-4.5rem)] items-center overflow-hidden bg-[#14271f] pt-6 pb-10 sm:pt-10 sm:pb-14"
    >
      {/* Drone video background + atmospheric overlays */}
      <div className="pointer-events-none absolute inset-0">
        {/* Video base layer */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={typeof dronePoster === "string" ? dronePoster : (dronePoster as { src: string }).src}
          className="absolute inset-0 h-full w-full object-cover"
          aria-hidden="true"
        >
          <source src={droneVideo} type="video/mp4" />
        </video>

        {/* Dark overlay for legibility — gradient from deep forest at top to lighter at bottom */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(20,39,31,0.82) 0%, rgba(20,39,31,0.55) 45%, rgba(12,24,18,0.75) 100%)",
          }}
        />
        {/* Side vignette to keep left text readable */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(120% 100% at 30% 50%, transparent 0%, rgba(12,24,18,0.5) 100%)",
          }}
        />

        {/* Atmospheric color washes (kept subtle over video) */}
        <motion.div
          style={{ y: canopyY }}
          className="absolute inset-x-0 top-0 h-[55%]"
          aria-hidden="true"
        >
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                "radial-gradient(60% 100% at 80% 0%, rgba(90,125,82,0.35) 0%, transparent 60%)",
            }}
          />
        </motion.div>
        <motion.div
          style={{ y: glowY }}
          className="absolute inset-x-0 bottom-0 h-[45%]"
          aria-hidden="true"
        >
          <div
            className="absolute inset-0 opacity-40"
            style={{
              background:
                "linear-gradient(180deg, transparent 0%, rgba(44,110,127,0.28) 45%, rgba(224,122,60,0.22) 100%)",
            }}
          />
        </motion.div>
        {/* Sun disc */}
        <div
          className="absolute right-[12%] bottom-[18%] h-40 w-40 rounded-full opacity-30 blur-2xl"
          style={{ background: "radial-gradient(circle, #e8b547 0%, transparent 70%)" }}
          aria-hidden="true"
        />
      </div>

      {/* Botanical line decorations */}
      <svg
        className="pointer-events-none absolute left-0 top-1/2 hidden h-105 w-45 -translate-y-1/2 text-[#5a7d52]/25 lg:block"
        viewBox="0 0 180 420"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M90 0 C 60 80, 120 160, 80 240 C 50 300, 110 360, 90 420"
          stroke="currentColor"
          strokeWidth="1"
        />
        {[60, 140, 220, 300, 380].map((y, i) => (
          <path
            key={i}
            d={`M90 ${y} C ${i % 2 ? 40 : 140} ${y - 20}, ${i % 2 ? 30 : 150} ${y + 20}, 90 ${y + 40}`}
            stroke="currentColor"
            strokeWidth="0.8"
          />
        ))}
      </svg>

      <motion.div
        style={{ y: textY, opacity: fade }}
        className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16 lg:px-12"
      >
        {/* Left — headline + CTAs */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-2"
          >
            <span className="eyebrow text-[#e8b547]/90">Sertão do Camburi</span>
            <span className="h-1 w-1 rounded-full bg-[#e8b547]/50" />
            <span className="eyebrow text-[#f3ecdb]/70">São Sebastião · SP</span>
          </motion.div>

          <h1
            className="font-display text-[#f3ecdb]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#f3ecdb" }}
          >
            <span className="block text-[2rem] leading-[1.05] sm:text-[3.4rem] lg:text-[4.6rem]">
              {headlineWords.map((w, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: "0.4em", rotateX: 40 }}
                  animate={{ opacity: 1, y: 0, rotateX: 0 }}
                  transition={{
                    duration: 0.7,
                    delay: 0.15 + i * 0.08,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="mr-[0.28em] inline-block"
                >
                  {w}
                </motion.span>
              ))}
            </span>
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-2 block font-display italic text-[#e8b547] sm:mt-3 sm:text-[1.6rem] lg:text-[2rem]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 300 }}
            >
              uma pousada para você e seu pet.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.85, duration: 0.6 }}
            className="mt-5 max-w-xl text-[0.95rem] leading-relaxed text-[#f3ecdb]/80 sm:mt-7 sm:text-[1.05rem]"
          >
            A 1.500 metros das praias de Camburi e Camburizinho, cercada pela
            Mata Atlântica, a Portal do Cacau é um refúgio pet-friendly onde o
            café da manhã, as piscinas e as trilhas são compartilhados com seu
            companheiro de quatro patas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="mt-6 flex flex-row flex-wrap items-center gap-3 sm:mt-8 sm:gap-4"
          >
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="cta"
              className="group inline-flex items-center gap-2 rounded-full bg-[#e07a3c] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_50px_-18px_rgba(224,122,60,0.9)] transition-all duration-300 hover:bg-[#c25f28] hover:shadow-[0_22px_60px_-18px_rgba(224,122,60,1)]"
            >
              <MessageCircle size={18} strokeWidth={2.2} />
              Reservar pelo WhatsApp
            </a>
            <a
              href={`${import.meta.env.BASE_URL}#manifesto`}
              className="group inline-flex items-center gap-2 rounded-full border-2 border-[#f3ecdb]/45 bg-white/10 px-6 py-3.5 text-sm font-semibold text-[#f3ecdb] backdrop-blur-sm transition-all duration-300 hover:border-[#e8b547]/70 hover:bg-white/15"
            >
              Conhecer a pousada
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </motion.div>

          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.15, duration: 0.6 }}
            className="mt-7 hidden items-center gap-3 sm:flex"
          >
            <div className="flex">
              {[0, 1, 2, 3, 4].map((i) => (
                <Star
                  key={i}
                  size={15}
                  className="fill-[#e8b547] text-[#e8b547]"
                />
              ))}
            </div>
            <span className="text-[0.8rem] text-[#f3ecdb]/65">
              Amado por famílias e seus pets no litoral norte paulista
            </span>
          </motion.div>
        </div>

        {/* Right — field postcard */}
        <motion.div
          style={{ y: cardY }}
          initial={{ opacity: 0, y: 30, rotate: 2 }}
          animate={{ opacity: 1, y: 0, rotate: 0 }}
          transition={{ delay: 0.6, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm"
        >
          <div className="relative overflow-hidden rounded-[var(--radius-stage)] border border-[#e8b547]/25 bg-[#fbf6ea] p-6 shadow-2xl sm:p-7">
            {/* Texture */}
            <div
              className="pointer-events-none absolute inset-0 opacity-50"
              style={{
                background:
                  "radial-gradient(circle at 80% 10%, rgba(224,122,60,0.08), transparent 50%)",
              }}
            />

            <div className="relative flex items-center justify-between">
              <span className="eyebrow">Diário de campo · nº 01</span>
              <PawPrint size={18} className="text-[#9c4d1c]" />
            </div>

            <h2
              className="relative mt-4 font-display text-2xl text-[#14271f] sm:text-[1.7rem]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              Pousada Portal do Cacau
            </h2>
            <p className="relative mt-1 text-sm italic text-[#6b5d45]">
              Sertão do Camburi — paraíso ecológico
            </p>

            <div className="hairline my-5" />

            <dl className="relative grid grid-cols-1 gap-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-[#3d5d49]" />
                <span className="text-[#2a2418]">
                  {CONTACT.address}
                  <br />
                  <span className="text-[#6b5d45]">{CONTACT.city}</span>
                </span>
              </div>
              <div className="flex items-start gap-3">
                <Clock size={16} className="mt-0.5 shrink-0 text-[#3d5d49]" />
                <span className="text-[#2a2418]">{CONTACT.reception}</span>
              </div>
              <div className="flex items-start gap-3">
                <PawPrint size={16} className="mt-0.5 shrink-0 text-[#3d5d49]" />
                <span className="text-[#2a2418]">
                  100% pet-friendly — piscina, café da manhã e trilhas com seu
                  pet
                </span>
              </div>
            </dl>

            <div className="relative mt-6 flex items-center justify-between rounded-xl bg-[#1f3a2e] px-4 py-3">
              <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#e8b547]">
                A 1.500m do mar
              </span>
              <span className="font-display text-lg italic text-[#f3ecdb]" style={{ fontFamily: "var(--font-display)" }}>
                Camburi
              </span>
            </div>
          </div>

          {/* Floating badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1, duration: 0.6 }}
            className="absolute -left-4 -top-4 hidden rotate-[-6deg] rounded-full border border-[#e07a3c]/40 bg-[#e07a3c] px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.18em] text-white shadow-lg sm:block"
          >
            Pet friendly
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
