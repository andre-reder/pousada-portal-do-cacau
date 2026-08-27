import {
    motion,
    useReducedMotion,
    useScroll,
    useTransform,
} from "framer-motion";
import {
    Cake,
    Cookie,
    Heart,
    MessageCircle,
    PawPrint,
    ShieldCheck,
    Waves,
} from "lucide-react";
import { useRef } from "react";
import { CONTACT } from "./cn";

const PET_FEATURES = [
  {
    icon: Waves,
    title: "Piscina exclusiva para pets",
    text: "Uma de nossas piscinas, com 10 metros, é de livre acesso para eles. Seu companheiro mergulha, brinca e se refresca como parte da família — não fica só assistindo da borda.",
  },
  {
    icon: Cookie,
    title: "Café da manhã pet",
    text: "Biscoitinhos e muffins de abóbora 100% naturais, que tanto humanos quanto pets podem comer. O café da manhã da pousada é compartilhado de verdade.",
  },
  {
    icon: Cake,
    title: "Aniversário do seu pet",
    text: "Decoração temática personalizada, cardápio pet preparado pela nossa cozinha com orientação de veterinária nutróloga, bolo pet e o espaço único com a piscina de 10m. A comemoração que seu pet merece, com a cara dele.",
  },
  {
    icon: ShieldCheck,
    title: "Acomodações preparadas",
    text: "Tratamos cada acomodação que recebeu pets com produtos específicos para minimizar alergias. As acomodações são amplas e a área total é enorme para o seu amigo circular livre.",
  },
];

export default function PetFriendly() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const pawY = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const pawRotate = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 18]);

  return (
    <section
      id="pets"
      ref={ref}
      className="relative overflow-hidden bg-[#1f3a2e] py-24 sm:py-32 lg:py-40"
    >
      {/* Decorative giant paw */}
      <motion.div
        style={{ y: pawY, rotate: pawRotate }}
        className="pointer-events-none absolute -right-16 top-10 hidden text-[#2c4a3a] lg:block"
        aria-hidden="true"
      >
        <PawPrint size={420} strokeWidth={0.8} />
      </motion.div>
      <div
        className="pointer-events-none absolute -left-24 bottom-0 h-80 w-80 rounded-full opacity-40 blur-3xl"
        style={{ background: "radial-gradient(circle, #e8b547, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-14 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12% 0px" }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center gap-4"
          >
            <span className="field-no text-2xl" style={{ color: "#e8b547" }}>04</span>
            <span className="eyebrow text-[#e8b547]/90">Pet Friendly · O coração da casa</span>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.3fr_1fr] lg:items-end">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{ duration: 0.7 }}
              className="font-display text-[2.2rem] leading-[1.05] text-[#f3ecdb] sm:text-[3rem] lg:text-[3.8rem]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#f3ecdb" }}
            >
              Seu pet não é
              <span className="block italic text-[#e8b547]">
                tolerado. É esperado.
              </span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-[0.95rem] leading-relaxed text-[#f3ecdb]/75 lg:pb-3"
            >
              Os pets fazem parte da família e nada mais justo do que levá-los
              junto na viagem. Aqui a estrutura é 100% dedicada a eles — da hora
              do café ao mergulho na piscina, tudo acontece com seu companheiro
              ao seu lado.
            </motion.p>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
          {PET_FEATURES.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
              whileHover={{ y: -5 }}
              className="group flex gap-5 rounded-[var(--radius-card)] border border-[#f3ecdb]/12 bg-[#14271f]/50 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-[#e8b547]/40 sm:p-7"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#e07a3c]/15 text-[#e8b547] transition-colors duration-300 group-hover:bg-[#e07a3c] group-hover:text-white">
                <f.icon size={22} strokeWidth={1.7} />
              </div>
              <div>
                <h3
                  className="font-display text-xl text-[#f3ecdb] sm:text-[1.35rem]"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#f3ecdb" }}
                >
                  {f.title}
                </h3>
                <p className="mt-2.5 text-[0.88rem] leading-relaxed text-[#f3ecdb]/70">
                  {f.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cãocierge highlight */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7 }}
          className="mt-8 overflow-hidden rounded-[var(--radius-stage)] border border-[#e8b547]/30 bg-gradient-to-br from-[#14271f] to-[#1f3a2e] p-8 sm:p-10 lg:p-12"
        >
          <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-[1fr_auto]">
            <div>
              <div className="flex items-center gap-3">
                <Heart size={20} className="text-[#e07a3c]" fill="currentColor" />
                <span className="eyebrow text-[#e8b547]/90">Cãocierge</span>
              </div>
              <h3
                className="mt-4 max-w-2xl font-display text-[1.6rem] leading-tight text-[#f3ecdb] sm:text-[2rem]"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#f3ecdb" }}
              >
                Recebemos cada hóspede de quatro patas como se fosse da família —
                com carinho, atenção e um espaço feito para ele ser feliz.
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#f3ecdb]/70">
                Da chegada ao check-out, nossa equipe está preparada para
                receber seu pet com tudo o que ele precisa para uma estadia
                segura e alegre.
              </p>
            </div>
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="cta"
              className="group inline-flex items-center justify-center gap-2 self-start rounded-full bg-[#e07a3c] px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#c25f28] lg:self-center"
            >
              <MessageCircle size={18} />
              Reservar com meu pet
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
