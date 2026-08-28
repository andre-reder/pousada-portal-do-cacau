import {
    motion,
    useReducedMotion,
    useScroll,
    useTransform,
} from "framer-motion";
import {
    Bath,
    Cake,
    CircleDollarSign,
    Cookie,
    Heart,
    Home,
    Info,
    MessageCircle,
    PawPrint,
    Scale,
    ShieldAlert,
    ShieldCheck,
    Waves
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

const PET_POLICIES: {
  icon: typeof Waves;
  title: string;
  text: string;
  items?: string[];
}[] = [
  {
    icon: CircleDollarSign,
    title: "Taxa",
    text: "Cobramos uma taxa diária no valor de R$ 120,00 por pet.",
  },
  {
    icon: ShieldAlert,
    title: "Machos não castrados",
    text: "Não recebemos machos não castrados. A falta de castração pode levar a um aumento da agressividade, especialmente em relação a outros machos.",
  },
  {
    icon: PawPrint,
    title: "Quais e quantos animais recebemos",
    text: "Recebemos pets de todos os portes, desde que sejam sociáveis com outros pets e humanos. Durante o período de cio as fêmeas sofrem uma queda em sua imunidade e soltam feromônios que alteram o comportamento dos demais pets — o melhor é deixar ela em casa ou se programar para outro período. A quantidade por acomodação depende da raça e porte; consultar via WhatsApp.",
  },
  {
    icon: Home,
    title: "Local apropriado",
    text: "Os pets ficam na mesma acomodação que o tutor, não temos canil. Ao sair da pousada sem levar o pet, ele deve permanecer na acomodação. Pedimos para considerar o tempo que deixará seu pet sozinho — ele deve estar acostumado a isso para não sofrer estresse. Traga brinquedos que ele gosta. Todo dano causado a objetos, móveis e estrutura será ressarcido pelo responsável.",
  },
  {
    icon: Scale,
    title: "Lei municipal 848/92",
    text: "Proíbe o acesso, permanência e banho de animais domésticos na praia. Tutores cientes em caso de multa (podendo chegar a R$ 600,00).",
  },
  {
    icon: Bath,
    title: "Espaço de Banho SPA'PET",
    text: "Temos espaço de banho e secagem apropriado para os pets, com soprador profissional. Parceria com a SPLASH DOG para banho com profissional (serviço cobrado à parte). Estrutura com banheira, torneira com água aquecida, mesa, secador e soprador profissional. Agendar na recepção. Não é permitido o uso do espaço para dois pets desconhecidos simultaneamente, para evitar estresse.",
  },
  {
    icon: Info,
    title: "Regras de convivência, alimentação e higiene",
    text: "",
    items: [
      "Fora da acomodação o pet é bem-vindo em toda área comum, exceto a parte interna do restaurante (mas bem-vindo na parte externa).",
      "O pet pode ficar solto pela pousada, desde que o tutor esteja ao seu lado (área de mata, risco de animais peçonhentos).",
      "O tutor é responsável pelo acompanhamento, alimentação e recolhimento dos dejetos.",
      "A limpeza na acomodação com pet é obrigatoriamente diária — agende um horário entre 11h e 14h na recepção, e se ausente do quarto com o pet.",
      "Não fazemos limpeza com o pet dentro (risco de fuga e acidente com camareiras).",
      "O tutor é responsável por qualquer comportamento não social ou agressivo. Em caso de ocorrências, solicitaremos retirada das áreas de convivência; em caso de recorrência, pediremos que o hóspede se retire sem restituição.",
    ],
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

        {/* Política Pet */}
        <div className="mt-16 sm:mt-20">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12% 0px" }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex items-center gap-4 sm:mb-10"
          >
            <span className="eyebrow text-[#e8b547]/90">Política Pet</span>
            <span className="h-px flex-1 bg-[#f3ecdb]/15" />
          </motion.div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:gap-6">
            {PET_POLICIES.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-8% 0px" }}
                transition={{ duration: 0.6, delay: (i % 2) * 0.1 }}
                className="group flex flex-col gap-4 rounded-[var(--radius-card)] border border-[#f3ecdb]/12 bg-[#14271f]/50 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-[#e8b547]/40 sm:p-7"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e07a3c]/15 text-[#e8b547] transition-colors duration-300 group-hover:bg-[#e07a3c] group-hover:text-white">
                    <p.icon size={20} strokeWidth={1.7} />
                  </div>
                  <h3
                    className="font-display text-lg leading-tight text-[#f3ecdb] sm:text-xl"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#f3ecdb" }}
                  >
                    {p.title}
                  </h3>
                </div>
                {p.text && (
                  <p className="text-[0.86rem] leading-relaxed text-[#f3ecdb]/70">
                    {p.text}
                  </p>
                )}
                {p.items && (
                  <ul className="flex flex-col gap-2.5">
                    {p.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex gap-3 text-[0.86rem] leading-relaxed text-[#f3ecdb]/70"
                      >
                        <span
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#e8b547]"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-8% 0px" }}
            transition={{ duration: 0.6 }}
            className="mt-10 flex justify-center"
          >
            <a
              href={`${import.meta.env.BASE_URL}/pet-friendly#manual`}
              data-cursor="cta"
              className="group inline-flex items-center gap-2 rounded-full border border-[#e8b547]/50 bg-[#e8b547]/10 px-6 py-3.5 text-sm font-semibold text-[#e8b547] transition-all duration-300 hover:bg-[#e8b547] hover:text-[#1f3a2e]"
            >
              <PawPrint size={18} />
              Ver manual completo de viagens com pet
            </a>
          </motion.div>
        </div>

        {/* Cãocierge highlight */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.7 }}
          className="mt-8 overflow-hidden rounded-[var(--radius-stage)] border border-[#e8b547]/30 bg-linear-to-br from-[#14271f] to-[#1f3a2e] p-8 sm:p-10 lg:p-12"
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
