import { motion } from "framer-motion";
import {
    Camera,
    Clock,
    Globe,
    Mail,
    MapPin,
    MessageCircle,
    Navigation,
    Phone,
} from "lucide-react";
import { CONTACT } from "./cn";

const PEXELS_IMAGE =
  "https://images.pexels.com/photos/1482784/pexels-photo-1482784.jpeg?auto=compress&cs=tinysrgb&h=650&w=940";

export default function Localizacao() {
  return (
    <section
      id="contato"
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
            <span className="field-no text-2xl">09</span>
            <span className="eyebrow">Localização & Contato · Como chegar</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12% 0px" }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl font-display text-[2.2rem] leading-[1.05] text-[#14271f] sm:text-[3rem] lg:text-[3.4rem]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Venha nos encontrar
            <span className="italic text-[#2c6e7f]"> no Sertão do Camburi.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_1.1fr] lg:gap-8">
          {/* Left — contact details */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7 }}
            className="flex flex-col gap-4"
          >
            <div className="rounded-[var(--radius-card)] border border-[#d9cfb8] bg-white/70 p-6 shadow-[var(--shadow-subtle)] sm:p-7">
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#1f3a2e] text-[#e8b547]">
                  <MapPin size={20} strokeWidth={1.7} />
                </div>
                <div>
                  <h3
                    className="font-display text-xl text-[#14271f]"
                    style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                  >
                    Endereço
                  </h3>
                  <p className="mt-1.5 text-[0.92rem] leading-relaxed text-[#4a4030]">
                    {CONTACT.address}
                    <br />
                    {CONTACT.city} · {CONTACT.cep}
                  </p>
                  <p className="mt-2 text-[0.82rem] text-[#6b5d45]">
                    A 1.500m das praias de Camburi e Camburizinho.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <ContactCard
                icon={MessageCircle}
                title="WhatsApp"
                value={CONTACT.phoneDisplay}
                href={CONTACT.whatsappUrl}
                cta
              />
              <ContactCard
                icon={Phone}
                title="Telefone"
                value={CONTACT.phoneDisplay}
                href={`tel:+${CONTACT.phoneIntl}`}
              />
              <ContactCard
                icon={Mail}
                title="E-mail"
                value="reservas@portaldocacau.com.br"
                href={`mailto:${CONTACT.email}`}
              />
              <ContactCard
                icon={Clock}
                title="Recepção"
                value="24 horas"
              />
            </div>

            <div className="flex flex-wrap gap-3">
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#d9cfb8] bg-white/60 px-4 py-2.5 text-[0.8rem] font-semibold text-[#3d5d49] transition-all duration-300 hover:border-[#9c4d1c]/60 hover:text-[#9c4d1c]"
              >
                <Camera size={15} />
                Instagram
              </a>
              <a
                href={CONTACT.website}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#d9cfb8] bg-white/60 px-4 py-2.5 text-[0.8rem] font-semibold text-[#3d5d49] transition-all duration-300 hover:border-[#9c4d1c]/60 hover:text-[#9c4d1c]"
              >
                <Globe size={15} />
                Site oficial
              </a>
            </div>
          </motion.div>

          {/* Right — stylized map + regional image */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="flex flex-col gap-4"
          >
            {/* Stylized map */}
            <div className="relative overflow-hidden rounded-[var(--radius-stage)] border border-[#d9cfb8] bg-[#1f3a2e] shadow-[var(--shadow-elevated)]">
              <div
                className="relative h-[300px] w-full sm:h-[340px]"
                style={{
                  background:
                    "radial-gradient(120% 90% at 70% 100%, #2c6e7f 0%, #1f5663 40%, #14271f 100%)",
                }}
              >
                {/* Topographic lines */}
                <svg
                  className="absolute inset-0 h-full w-full opacity-30"
                  viewBox="0 0 400 340"
                  fill="none"
                  aria-hidden="true"
                >
                  {[40, 90, 140, 190, 240].map((y, i) => (
                    <path
                      key={i}
                      d={`M0 ${y} C 80 ${y - 20}, 160 ${y + 30}, 240 ${y}, S 360 ${y - 25}, 400 ${y}`}
                      stroke="#e8b547"
                      strokeWidth="0.6"
                      fill="none"
                    />
                  ))}
                  {/* Coast line */}
                  <path
                    d="M400 0 L 250 120 C 230 160, 260 200, 240 240 C 220 280, 250 320, 230 340"
                    stroke="#f3ecdb"
                    strokeWidth="1.2"
                    fill="none"
                    strokeDasharray="4 4"
                  />
                </svg>

                {/* Pin */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.6 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3, type: "spring" }}
                  className="absolute left-[28%] top-[42%] flex flex-col items-center"
                >
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{
                      duration: 2.4,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e07a3c] text-white shadow-lg ring-4 ring-[#e07a3c]/30"
                  >
                    <MapPin size={22} fill="currentColor" strokeWidth={1.5} />
                  </motion.div>
                  <span className="mt-2 rounded-full bg-[#14271f]/80 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.14em] text-[#e8b547] backdrop-blur-sm">
                    Pousada
                  </span>
                </motion.div>

                {/* Sea label */}
                <span className="absolute bottom-6 right-6 font-display text-sm italic text-[#f3ecdb]/60" style={{ fontFamily: "var(--font-display)" }}>
                  Mar · Camburi
                </span>
                <span className="absolute left-6 top-6 font-display text-sm italic text-[#f3ecdb]/65" style={{ fontFamily: "var(--font-display)" }}>
                  Mata Atlântica
                </span>
              </div>

              <div className="flex items-center justify-between gap-4 border-t border-[#f3ecdb]/10 bg-[#14271f] px-6 py-4">
                <div className="flex items-center gap-2 text-[0.8rem] text-[#f3ecdb]/80">
                  <Navigation size={14} className="text-[#e8b547]" />
                  Sertão do Camburi, São Sebastião — SP
                </div>
                <a
                  href="https://maps.google.com/?q=Rua+Tijucas+895+Sertão+do+Camburi+São+Sebastião+SP"
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor="cta"
                  className="shrink-0 text-[0.78rem] font-semibold text-[#e8b547] transition-colors hover:text-[#f3ecdb]"
                >
                  Traçar rota →
                </a>
              </div>
            </div>

            {/* Regional atmosphere image with attribution */}
            <figure className="relative overflow-hidden rounded-[var(--radius-card)] border border-[#d9cfb8] shadow-[var(--shadow-subtle)]">
              <img
                src={PEXELS_IMAGE}
                alt="Atmosfera do estado de São Paulo — fotografia ilustrativa da região."
                loading="lazy"
                className="h-[180px] w-full object-cover sm:h-[200px]"
              />
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "linear-gradient(180deg, transparent 50%, rgba(20,39,31,0.7) 100%)",
                }}
                aria-hidden="true"
              />
              <figcaption className="absolute bottom-0 left-0 right-0 flex items-center justify-between gap-3 px-4 py-3 text-[0.7rem] text-[#f3ecdb]/85">
                <span>Imagem ilustrativa da região · litoral paulista</span>
                <a
                  href="https://www.pexels.com/@bertellifotografia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-[#e8b547] transition-colors hover:text-[#f3ecdb]"
                >
                  Foto: Matheus Bertelli / Pexels
                </a>
              </figcaption>
            </figure>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ContactCard({
  icon: Icon,
  title,
  value,
  href,
  cta,
}: {
  icon: typeof Phone;
  title: string;
  value: string;
  href?: string;
  cta?: boolean;
}) {
  const inner = (
    <div className="flex h-full flex-col gap-2 rounded-[var(--radius-card)] border border-[#d9cfb8] bg-white/70 p-5 transition-all duration-300 hover:border-[#9c4d1c]/40 hover:shadow-[var(--shadow-subtle)]">
      <div className="flex items-center gap-2">
        <Icon size={16} className="text-[#9c4d1c]" strokeWidth={1.9} />
        <span className="text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#6b5d45]">
          {title}
        </span>
      </div>
      <span className="text-[0.92rem] font-medium text-[#2a2418]">{value}</span>
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        data-cursor={cta ? "cta" : undefined}
        className="block"
      >
        {inner}
      </a>
    );
  }
  return inner;
}
