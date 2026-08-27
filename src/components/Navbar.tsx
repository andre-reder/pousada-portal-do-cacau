import { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { Menu, X, MessageCircle, Leaf } from "lucide-react";
import { cn } from "./cn";
import { CONTACT } from "./cn";

const LINKS = [
  { href: "#manifesto", label: "A Pousada" },
  { href: "#acomodacoes", label: "Acomodações" },
  { href: "#comodidades", label: "Comodidades" },
  { href: "#pets", label: "Pets" },
  { href: "#ecoturismo", label: "Ecoturismo" },
  { href: "#eventos", label: "Eventos" },
  { href: "#contato", label: "Contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 40);
  });

  // Active section spy
  useEffect(() => {
    const ids = LINKS.map((l) => l.href.slice(1));
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(`#${visible[0].target.id}`);
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: [0, 0.25, 0.5] }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Lock scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <motion.header
        className={cn(
          "sticky top-0 z-[70] w-full transition-colors duration-500",
          scrolled
            ? "bg-[#14271f]/85 backdrop-blur-md shadow-[0_8px_30px_-12px_rgba(20,39,31,0.5)]"
            : "bg-[#14271f]/35 backdrop-blur-sm"
        )}
      >
        <nav className="mx-auto flex h-[4.5rem] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          {/* Logo */}
          <a
            href="#topo"
            className="group flex items-center gap-2.5"
            aria-label="Pousada Portal do Cacau — início"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e8b547]/40 bg-[#1f3a2e] text-[#e8b547] transition-transform duration-300 group-hover:rotate-12">
              <Leaf size={17} strokeWidth={1.8} />
            </span>
            <span className="flex flex-col leading-none">
              <span
                className="font-display text-[1.05rem] font-medium tracking-tight text-[#f3ecdb]"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Portal do Cacau
              </span>
              <span className="mt-0.5 text-[0.6rem] font-semibold uppercase tracking-[0.28em] text-[#e8b547]/80">
                Pousada · Camburi
              </span>
            </span>
          </a>

          {/* Desktop links */}
          <ul className="hidden items-center gap-7 lg:flex">
            {LINKS.map((l) => (
              <li key={l.href} className="relative">
                <a
                  href={l.href}
                  className={cn(
                    "relative text-[0.82rem] font-medium tracking-wide transition-colors duration-300",
                    active === l.href
                      ? "text-[#e8b547]"
                      : "text-[#f3ecdb]/85 hover:text-[#f3ecdb]"
                  )}
                >
                  {l.label}
                  <span
                    className={cn(
                      "absolute -bottom-1.5 left-0 h-px origin-left bg-[#e8b547] transition-transform duration-300",
                      active === l.href
                        ? "w-full scale-x-100"
                        : "w-full scale-x-0"
                    )}
                  />
                </a>
              </li>
            ))}
          </ul>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            <a
              href={CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="cta"
              className="hidden items-center gap-2 rounded-full bg-[#e07a3c] px-5 py-2.5 text-[0.82rem] font-semibold text-white shadow-[0_10px_30px_-10px_rgba(224,122,60,0.7)] transition-all duration-300 hover:bg-[#c25f28] hover:shadow-[0_14px_36px_-10px_rgba(224,122,60,0.85)] sm:flex"
            >
              <MessageCircle size={16} strokeWidth={2.2} />
              Reservar
            </a>
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Abrir menu"
              aria-expanded={open}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#f3ecdb]/40 text-[#f3ecdb] transition-colors hover:bg-[#f3ecdb]/10 lg:hidden"
            >
              <Menu size={20} />
            </button>
          </div>
        </nav>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[90] lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <div
              className="absolute inset-0 bg-[#14271f]/60 backdrop-blur-sm"
              onClick={() => setOpen(false)}
            />
            <motion.div
              className="absolute right-0 top-0 flex h-full w-[82%] max-w-[360px] flex-col bg-[#14271f] p-6 shadow-2xl"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 34 }}
            >
              <div className="flex items-center justify-between">
                <span className="font-display text-lg text-[#f3ecdb]" style={{ fontFamily: "var(--font-display)" }}>
                  Navegação
                </span>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Fechar menu"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-[#f3ecdb]/40 text-[#f3ecdb] transition-colors hover:bg-[#f3ecdb]/10"
                >
                  <X size={20} />
                </button>
              </div>

              <div className="hairline my-6 opacity-40" />

              <ul className="flex flex-col gap-1">
                {LINKS.map((l, i) => (
                  <motion.li
                    key={l.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + i * 0.05 }}
                  >
                    <a
                      href={l.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "flex items-center justify-between rounded-xl px-4 py-3.5 text-base transition-colors",
                        active === l.href
                          ? "bg-[#1f3a2e] text-[#e8b547]"
                          : "text-[#f3ecdb]/90 hover:bg-[#f3ecdb]/5"
                      )}
                    >
                      {l.label}
                      <span className="field-no text-sm">0{i + 1}</span>
                    </a>
                  </motion.li>
                ))}
              </ul>

              <a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                data-cursor="cta"
                className="mt-8 flex items-center justify-center gap-2 rounded-full bg-[#e07a3c] px-6 py-3.5 text-sm font-semibold text-white shadow-lg transition-colors hover:bg-[#c25f28]"
              >
                <MessageCircle size={18} />
                Reservar pelo WhatsApp
              </a>

              <p className="mt-auto pt-6 text-xs leading-relaxed text-[#f3ecdb]/55">
                {CONTACT.address}
                <br />
                {CONTACT.city} · {CONTACT.reception}
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
