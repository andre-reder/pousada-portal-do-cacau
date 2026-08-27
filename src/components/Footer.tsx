import { Camera, Clock, Globe, Leaf, Mail, MapPin, MessageCircle } from "lucide-react";
import { CONTACT } from "./cn";

const NAV = [
  { href: "#manifesto", label: "A Pousada" },
  { href: "#acomodacoes", label: "Acomodações" },
  { href: "#comodidades", label: "Comodidades" },
  { href: "#pets", label: "Pet Friendly" },
  { href: "#ecoturismo", label: "Ecoturismo" },
  { href: "#eventos", label: "Eventos" },
  { href: "#faq", label: "FAQ" },
  { href: "#contato", label: "Contato" },
];

export default function Footer() {
  return (
    <footer className="relative bg-[#0c1812] pt-16 pb-10 text-[#f3ecdb] sm:pt-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr] lg:gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e8b547]/40 bg-[#1f3a2e] text-[#e8b547]">
                <Leaf size={17} strokeWidth={1.8} />
              </span>
              <span className="flex flex-col leading-none">
                <span
                  className="font-display text-lg text-[#f3ecdb]"
                  style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
                >
                  Pousada Portal do Cacau
                </span>
                <span className="mt-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-[#e8b547]/80">
                  Sertão do Camburi · SP
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-[0.85rem] leading-relaxed text-[#f3ecdb]/55">
              Pousada pet-friendly no paraíso ecológico do Sertão do Camburi,
              em São Sebastião. Onde a Mata Atlântica encontra o mar — e o seu
              pet é parte da viagem.
            </p>
            <div className="mt-6 flex gap-3">
              <a
                href={CONTACT.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#f3ecdb]/30 text-[#f3ecdb]/70 transition-all duration-300 hover:border-[#e8b547]/60 hover:text-[#e8b547]"
              >
                <Camera size={17} />
              </a>
              <a
                href={CONTACT.website}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Site oficial"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#f3ecdb]/30 text-[#f3ecdb]/70 transition-all duration-300 hover:border-[#e8b547]/60 hover:text-[#e8b547]"
              >
                <Globe size={17} />
              </a>
              <a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#f3ecdb]/30 text-[#f3ecdb]/70 transition-all duration-300 hover:border-[#e8b547]/60 hover:text-[#e8b547]"
              >
                <MessageCircle size={17} />
              </a>
            </div>
          </div>

          {/* Nav */}
          <div>
            <h3 className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[#e8b547]/80" style={{ color: "#e8b547" }}>
              Navegação
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-x-4 gap-y-2.5">
              {NAV.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-[0.85rem] text-[#f3ecdb]/65 transition-colors duration-300 hover:text-[#e8b547]"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-[#e8b547]/80" style={{ color: "#e8b547" }}>
              Contato
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-[0.85rem] text-[#f3ecdb]/65">
              <li className="flex items-start gap-2.5">
                <MapPin size={15} className="mt-0.5 shrink-0 text-[#e8b547]/70" />
                <span>
                  {CONTACT.address}
                  <br />
                  {CONTACT.city}
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Clock size={15} className="shrink-0 text-[#e8b547]/70" />
                <span>{CONTACT.reception}</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail size={15} className="shrink-0 text-[#e8b547]/70" />
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="transition-colors hover:text-[#e8b547]"
                >
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-[#f3ecdb]/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-3 text-[0.75rem] text-[#f3ecdb]/60 sm:flex-row">
            <p>
              © {new Date().getFullYear()} Pousada Portal do Cacau — Pousada
              pet-friendly em Camburi, São Sebastião.
            </p>
            <p>Proposta conceitual não oficial.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
