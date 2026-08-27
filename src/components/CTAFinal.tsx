import {
    motion,
    useReducedMotion,
    useScroll,
    useTransform,
} from "framer-motion";
import { Leaf, Mail, MessageCircle, PawPrint, Phone } from "lucide-react";
import { useRef } from "react";
import { CONTACT } from "./cn";

export default function CTAFinal() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const glowX = useTransform(scrollYProgress, [0, 1], [-40, 40]);
  const glowY = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : 20, reduce ? 0 : -20]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden bg-[#14271f] py-24 sm:py-32 lg:py-40"
    >
      {/* Sunset glow */}
      <motion.div
        style={{ x: glowX, y: glowY }}
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[620px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-40 blur-3xl"
        aria-hidden="true"
      >
        <div
          className="h-full w-full rounded-full"
          style={{
            background:
              "radial-gradient(circle, rgba(224,122,60,0.5) 0%, rgba(232,181,71,0.2) 40%, transparent 70%)",
          }}
        />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-4xl px-5 text-center sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.6 }}
          className="mb-7 flex items-center justify-center gap-3"
        >
          <Leaf size={18} className="text-[#e8b547]" />
          <span className="eyebrow text-[#e8b547]/90">Sua próxima estadia</span>
          <PawPrint size={18} className="text-[#e8b547]" />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.8 }}
          className="font-display text-[2.4rem] leading-[1.05] text-[#f3ecdb] sm:text-[3.4rem] lg:text-[4.2rem]"
          style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#f3ecdb" }}
        >
          A mata está te esperando.
          <span className="block italic text-[#e8b547]">
            Seu pet também.
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="mx-auto mt-6 max-w-2xl text-[0.98rem] leading-relaxed text-[#f3ecdb]/75"
        >
          Reserve sua estadia na Pousada Portal do Cacau — onde a Mata Atlântica
          encontra o mar, o café da manhã é compartilhado com seu pet e cada
          cantinho foi feito para você desacelerar. A recepção está aberta 24
          horas.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12% 0px" }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-9 flex flex-row flex-wrap items-center justify-center gap-3 sm:gap-4"
        >
          <a
            href={CONTACT.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor="cta"
            className="group inline-flex items-center gap-2 rounded-full bg-[#e07a3c] px-7 py-4 text-sm font-semibold text-white shadow-[0_22px_60px_-18px_rgba(224,122,60,1)] transition-all duration-300 hover:bg-[#c25f28] hover:shadow-[0_26px_70px_-18px_rgba(224,122,60,1)]"
          >
            <MessageCircle size={18} strokeWidth={2.2} />
            Reservar pelo WhatsApp
          </a>
          <a
            href={`tel:+${CONTACT.phoneIntl}`}
            className="inline-flex items-center gap-2 rounded-full border-2 border-[#f3ecdb]/35 bg-white/5 px-7 py-4 text-sm font-semibold text-[#f3ecdb] backdrop-blur-sm transition-all duration-300 hover:border-[#e8b547]/70 hover:bg-white/10"
          >
            <Phone size={17} />
            {CONTACT.phoneDisplay}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[0.82rem] text-[#f3ecdb]/55"
        >
          <a
            href={`mailto:${CONTACT.email}`}
            className="inline-flex items-center gap-1.5 transition-colors hover:text-[#e8b547]"
          >
            <Mail size={14} />
            {CONTACT.email}
          </a>
          <span className="hidden h-1 w-1 rounded-full bg-[#f3ecdb]/30 sm:inline-block" />
          <span>{CONTACT.address} · {CONTACT.city}</span>
        </motion.div>
      </div>
    </section>
  );
}
