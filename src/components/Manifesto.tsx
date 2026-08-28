import {
    motion,
    useReducedMotion,
    useScroll,
    useTransform,
} from "framer-motion";
import { Leaf, PawPrint, Waves } from "lucide-react";
import { useRef } from "react";

const MANIFESTO =
  "O melhor destino pet-friendly do litoral paulista. Há um lugar onde a Mata Atlântica desce das montanhas e encontra o mar. Onde o som da manhã é feito de pássaros, água corrente e patas na varanda. Onde o seu pet não é tolerado — é esperado.";

const INTRO =
  "A Pousada Portal do Cacau localiza-se no Sertão do Camburi, paraíso ecológico de São Sebastião, no litoral norte paulista. Nossas instalações oferecem uma atmosfera super aconchegante, totalmente pet-friendly, familiar e que lhe proporcionará momentos íntimos com a natureza e junto de quem você ama. Temos uma estrutura 100% dedicada aos pets — da hora do café até o mergulho na piscina, tudo acontece com eles!";

export default function Manifesto() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.9", "end 0.65"],
  });

  const words = MANIFESTO.split(" ");
  const revealEnd = 0.72;

  return (
    <section
      id="manifesto"
      ref={ref}
      className="relative overflow-hidden bg-[#14271f] py-24 sm:py-32 lg:py-40"
    >
      {/* Transition gradient from hero into paper */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-24"
        style={{
          background: "linear-gradient(180deg, #0c1812 0%, transparent 100%)",
        }}
        aria-hidden="true"
      />
      {/* Soft canopy glow */}
      <div
        className="pointer-events-none absolute -left-20 top-1/3 h-72 w-72 rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(circle, #3d5d49, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-5 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex items-center gap-4 sm:mb-14"
        >
          <span className="field-no text-2xl" style={{ color: "#e8b547" }}>01</span>
          <span className="eyebrow text-[#e8b547]/90">A Pousada · Manifesto</span>
          <span className="h-px flex-1 bg-[#f3ecdb]/15" />
        </motion.div>

        <motion.p
          className="font-display text-[1.5rem] leading-[1.4] text-[#f3ecdb]/40 sm:text-[2.1rem] sm:leading-[1.35] lg:text-[2.6rem]"
          style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
        >
          {reduce
            ? words.map((w, i) => (
                <span key={i} className="text-[#f3ecdb]">
                  {w}{" "}
                </span>
              ))
            : words.map((w, i) => {
                const start = (i / words.length) * revealEnd;
                const end = ((i + 1) / words.length) * revealEnd;
                return (
                  <Word
                    key={i}
                    progress={scrollYProgress}
                    range={[start, end]}
                  >
                    {w}
                  </Word>
                );
              })}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-8 max-w-3xl text-[0.95rem] leading-relaxed text-[#f3ecdb]/70 sm:mt-10 sm:text-[1.05rem]"
        >
          {INTRO}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mt-14 grid grid-cols-1 gap-6 sm:mt-20 sm:grid-cols-3"
        >
          {[
            {
              icon: Leaf,
              title: "Mata Atlântica",
              text: "Cercada por árvores nativas, trilhas e cachoeiras do Sertão do Camburi — um paraíso ecológico preservado.",
            },
            {
              icon: Waves,
              title: "Mar a 1.500m",
              text: "Caminhada curta até as praias de Camburi e Camburizinho, com areia branca e mar cristalino.",
            },
            {
              icon: PawPrint,
              title: "Pet-friendly de coração",
              text: "Estrutura dedicada aos pets: piscina, café da manhã, espaço de festa e cãocierge para receber seu amigo.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-2xl border border-[#f3ecdb]/10 bg-[#1f3a2e]/40 p-6 backdrop-blur-sm"
            >
              <item.icon size={22} className="text-[#e8b547]" strokeWidth={1.6} />
              <h3
                className="mt-4 font-display text-xl text-[#f3ecdb]"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#f3ecdb" }}
              >
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[#f3ecdb]/70">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Word({
  children,
  progress,
  range,
}: {
  children: string;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  range: [number, number];
}) {
  const opacity = useTransform(progress, range, [0.18, 1]);
  const y = useTransform(progress, range, [6, 0]);
  return (
    <span className="relative mr-[0.28em] inline-block">
      <motion.span
        style={{ opacity, y }}
        className="inline-block text-[#f3ecdb]"
      >
        {children}
      </motion.span>
    </span>
  );
}
