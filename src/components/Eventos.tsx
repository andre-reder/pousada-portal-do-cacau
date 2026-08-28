import { motion } from "framer-motion";
import {
    ArrowRight,
    Briefcase,
    Cake,
    Heart,
    Maximize,
    MessageCircle,
    Sun,
    Users,
} from "lucide-react";
import { CONTACT } from "./cn";

export default function Eventos() {
  return (
    <section
      id="eventos"
      className="relative overflow-hidden bg-[#fbf6ea] py-24 sm:py-32 lg:py-36"
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
            <span className="field-no text-2xl" style={{ color: "#9c4d1c" }}>06</span>
            <span className="eyebrow">Eventos · Comemore na mata</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12% 0px" }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl font-display text-[2.2rem] leading-[1.05] text-[#14271f] sm:text-[3rem] lg:text-[3.4rem]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Um lugar que nutre
            <span className="italic text-[#9c4d1c]"> relações.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12% 0px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 max-w-2xl text-[0.95rem] leading-relaxed text-[#6b5d45]"
          >
            Bem-vindo à Pousada Portal do Cacau, um verdadeiro paraíso ecológico
            no Sertão do Camburi. Com design rústico e aconchegante, estamos a
            apenas 1.500 metros das praias de Camburi e Camburizinho. Recebemos
            eventos corporativos, casamentos, aniversários e retiros — com
            hospitalidade de quem recebe como família.
          </motion.p>
        </div>

        {/* Two large feature blocks */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
          {/* Corporate */}
          <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -6 }}
            className="group relative flex flex-col overflow-hidden rounded-[var(--radius-stage)] border border-[#d9cfb8] bg-white/70 p-8 shadow-(--shadow-subtle) transition-shadow duration-300 hover:shadow-(--shadow-elevated) sm:p-10"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1f3a2e] text-[#e8b547] transition-colors duration-300 group-hover:bg-[#e07a3c] group-hover:text-white">
              <Briefcase size={22} strokeWidth={1.7} />
            </div>
            <h3
              className="mt-6 font-display text-[1.7rem] text-[#14271f] sm:text-[2rem]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              Eventos corporativos & retiros
            </h3>
            <p className="mt-3 flex-1 text-[0.92rem] leading-relaxed text-[#4a4030]">
              Já pensou em fazer seu evento num local que nutre relações? O
              Portal recebe eventos corporativos, retiros e encontros de equipe
              com uma estrutura completa para trabalhar e descansar.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4 border-t border-[#e6dec9] pt-5">
              <Spec
                icon={Maximize}
                value="400 m²"
                label="Espaço coberto, toldos e piso de areia"
              />
              <Spec
                icon={Users}
                value="49 m²"
                label="Sala fechada para reuniões"
              />
            </div>

            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="cta"
              className="mt-7 inline-flex items-center gap-2 self-start rounded-full bg-[#1f3a2e] px-5 py-2.5 text-[0.8rem] font-semibold text-[#f3ecdb] transition-all duration-300 group-hover:bg-[#e07a3c] group-hover:text-white"
            >
              Solicitar proposta
              <ArrowRight
                size={15}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
          </motion.article>

          {/* Weddings */}
          <motion.article
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            whileHover={{ y: -6 }}
            className="group relative flex flex-col overflow-hidden rounded-[var(--radius-stage)] border border-[#e07a3c]/40 bg-linear-to-br from-[#fffdf6] to-[#fbf6ea] p-8 shadow-(--shadow-subtle) ring-1 ring-[#e07a3c]/15 transition-shadow duration-300 hover:shadow-(--shadow-elevated) sm:p-10"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#e07a3c] text-white transition-transform duration-300 group-hover:scale-110">
              <Heart size={22} strokeWidth={1.7} fill="currentColor" />
            </div>
            <h3
              className="mt-6 font-display text-[1.7rem] text-[#14271f] sm:text-[2rem]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
            >
              Casamentos & lua de mel
            </h3>
            <p className="mt-3 flex-1 text-[0.92rem] leading-relaxed text-[#4a4030]">
              Um espaço perfeito para sua festa de casamento, entre a mata e o
              mar. Hospede os padrinhos com descontos especiais e aproveite a
              acomodação com decoração especial de lua de mel para os noivos.
            </p>

            <div className="mt-6 grid grid-cols-2 gap-4 border-t border-[#e6dec9] pt-5">
              <Spec
                icon={Sun}
                value="Ao ar livre"
                label="Cerimônia sob as árvores"
              />
              <Spec
                icon={Heart}
                value="Lua de mel"
                label="Acomodação decorada"
              />
            </div>

            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="cta"
              className="mt-7 inline-flex items-center gap-2 self-start rounded-full bg-[#e07a3c] px-5 py-2.5 text-[0.8rem] font-semibold text-white transition-all duration-300 hover:bg-[#c25f28]"
            >
              <MessageCircle size={15} />
              Planejar meu casamento
            </a>
          </motion.article>
        </div>

        {/* Birthdays strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6 }}
          className="mt-6 flex flex-col items-start gap-5 rounded-[var(--radius-card)] border border-[#d9cfb8] bg-[#1f3a2e] p-7 text-[#f3ecdb] sm:flex-row sm:items-center sm:justify-between sm:p-8"
        >
          <div className="flex items-start gap-4">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#e8b547]/15 text-[#e8b547]">
              <Cake size={20} strokeWidth={1.7} />
            </div>
            <div>
              <h3
                className="font-display text-xl text-[#f3ecdb] sm:text-[1.4rem]"
                style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#f3ecdb" }}
              >
                Aniversários — inclusive do seu pet
              </h3>
              <p className="mt-1.5 max-w-xl text-[0.85rem] leading-relaxed text-[#f3ecdb]/70">
                Comemoração temática, cardápio pet com orientação veterinária,
                bolo pet e o espaço com piscina de 10m. A festa que seu pet (e
                sua família) vão guardar pra sempre.
              </p>
            </div>
          </div>
          <a
            href={`${import.meta.env.BASE_URL}#pets`}
            className="shrink-0 rounded-full border-2 border-[#e8b547]/60 px-5 py-2.5 text-[0.8rem] font-semibold text-[#e8b547] transition-colors duration-300 hover:bg-[#e8b547] hover:text-[#14271f]"
          >
            Ver detalhes pet
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 0.6 }}
          className="mt-8 flex justify-center"
        >
          <a
            href={`${import.meta.env.BASE_URL}/eventos`}
            data-cursor="cta"
            className="inline-flex items-center gap-2 rounded-full bg-[#1f3a2e] px-6 py-3 text-[0.85rem] font-semibold text-[#f3ecdb] transition-colors hover:bg-[#e07a3c] hover:text-white"
          >
            Ver todos os espaços e eventos
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function Spec({
  icon: Icon,
  value,
  label,
}: {
  icon: typeof Users;
  value: string;
  label: string;
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <span className="flex items-center gap-1.5 text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#6b5d45]">
        <Icon size={12} strokeWidth={1.8} />
        {label}
      </span>
      <span className="font-display text-lg text-[#14271f]" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>
        {value}
      </span>
    </div>
  );
}
