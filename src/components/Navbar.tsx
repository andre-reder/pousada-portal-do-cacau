import {
    AnimatePresence,
    motion,
    useMotionValueEvent,
    useScroll,
} from "framer-motion";
import { CalendarDays, ChevronDown, Grid3x3, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import logoUrl from "../../assets/logo/image.png";
import BookingForm from "./BookingForm";
import { cn, CONTACT } from "./cn";

const BASE = import.meta.env.BASE_URL;

const LINKS = [
  { href: `${BASE}#acomodacoes`, label: "Acomodações" },
  { href: `${BASE}#comodidades`, label: "Comodidades" },
  { href: `${BASE}#pets`, label: "Pets" },
  { href: `${BASE}#ecoturismo`, label: "Ecoturismo" },
  { href: `${BASE}#eventos`, label: "Eventos" },
  { href: `${BASE}#avaliacoes`, label: "Avaliações" },
  { href: `${BASE}#faq`, label: "FAQ" },
  { href: `${BASE}#contato`, label: "Contato" },
];

const MORE_LINKS = [
  { href: `${BASE}/blog`, label: "Blog" },
  { href: `${BASE}/sustentabilidade`, label: "Sustentabilidade" },
  { href: `${BASE}/parceiros`, label: "Parceiros" },
  { href: `${BASE}/beach-tennis`, label: "Beach Tennis" },
  { href: `${BASE}/privacidade`, label: "Privacidade" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [active, setActive] = useState<string>("");
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 40);
  });

  // Active section spy — only for in-page anchors (href contains #)
  useEffect(() => {
    const anchorLinks = LINKS.filter((l) => l.href.includes("#"));
    if (!anchorLinks.length) return;
    const ids = anchorLinks.map((l) => l.href.split("#")[1]);
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

  // Highlight active page link based on current pathname
  const [pathname, setPathname] = useState<string>("");
  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  // Lock scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  // Close dropdowns on Escape
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        setBookingOpen(false);
        setMoreOpen(false);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <motion.header
        className={cn(
          "sticky top-0 z-70 w-full transition-colors duration-500",
          scrolled
            ? "bg-[#14271f]/90 backdrop-blur-md shadow-[0_8px_30px_-12px_rgba(20,39,31,0.5)]"
            : "bg-[#14271f]/40 backdrop-blur-sm"
        )}
      >
        <nav className="mx-auto flex h-18 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
          {/* Logo */}
          <a
            href={`${BASE}`}
            className="group flex items-center gap-2.5"
            aria-label="Pousada Portal do Cacau — início"
          >
            <img
              src={logoUrl.src}
              alt="Portal do Cacau"
              width={40}
              height={40}
              className="h-10 w-10 rounded-full object-cover transition-transform duration-300 group-hover:rotate-6"
            />
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
            {LINKS.map((l) => {
              const hash = l.href.includes("#")
                ? "#" + l.href.split("#")[1]
                : null;
              const isActive = hash
                ? active === hash
                : pathname === l.href || pathname === l.href + "/";
              return (
                <li key={l.href} className="relative">
                  <a
                    href={l.href}
                    className={cn(
                      "relative text-[0.82rem] font-medium tracking-wide transition-colors duration-300",
                      isActive
                        ? "text-[#e8b547]"
                        : "text-[#f3ecdb]/85 hover:text-[#f3ecdb]"
                    )}
                  >
                    {l.label}
                    <span
                      className={cn(
                        "absolute -bottom-1.5 left-0 h-px origin-left bg-[#e8b547] transition-transform duration-300",
                        isActive ? "w-full scale-x-100" : "w-full scale-x-0"
                      )}
                    />
                  </a>
                </li>
              );
            })}

            {/* Mais — dropdown for extra pages */}
            <li
              className="relative"
              onMouseEnter={() => setMoreOpen(true)}
              onMouseLeave={() => setMoreOpen(false)}
            >
              <button
                type="button"
                onClick={() => setMoreOpen((v) => !v)}
                aria-expanded={moreOpen}
                className="flex items-center gap-1 text-[0.82rem] font-medium tracking-wide text-[#f3ecdb]/85 transition-colors duration-300 hover:text-[#f3ecdb]"
              >
                <Grid3x3 size={14} />
                Mais
                <ChevronDown
                  size={13}
                  className={cn(
                    "transition-transform duration-300",
                    moreOpen && "rotate-180"
                  )}
                />
              </button>
              <AnimatePresence>
                {moreOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 top-full z-50 mt-2 w-52 overflow-hidden rounded-xl border border-[#f3ecdb]/15 bg-[#0c1812] py-2 shadow-2xl"
                  >
                    {MORE_LINKS.map((l) => {
                      const isActive =
                        pathname === l.href || pathname === l.href + "/";
                      return (
                        <a
                          key={l.href}
                          href={l.href}
                          className={cn(
                            "block px-4 py-2.5 text-[0.82rem] transition-colors",
                            isActive
                              ? "bg-[#1f3a2e] text-[#e8b547]"
                              : "text-[#f3ecdb]/80 hover:bg-[#f3ecdb]/5 hover:text-[#f3ecdb]"
                          )}
                        >
                          {l.label}
                        </a>
                      );
                    })}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          </ul>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-3">
            {/* Reservar button — toggles booking dropdown */}
            <button
              type="button"
              onClick={() => setBookingOpen((v) => !v)}
              aria-expanded={bookingOpen}
              aria-label="Abrir formulário de reserva"
              data-cursor="cta"
              className={cn(
                "flex items-center gap-2 rounded-full px-5 py-2.5 text-[0.82rem] font-semibold text-white shadow-[0_10px_30px_-10px_rgba(224,122,60,0.7)] transition-all duration-300 hover:shadow-[0_14px_36px_-10px_rgba(224,122,60,0.85)] sm:flex",
                bookingOpen
                  ? "bg-[#c25f28]"
                  : "bg-[#e07a3c] hover:bg-[#c25f28]"
              )}
            >
              <CalendarDays size={16} strokeWidth={2.2} />
              <span className="hidden sm:inline">Reservar</span>
              <ChevronDown
                size={14}
                className={cn(
                  "transition-transform duration-300",
                  bookingOpen && "rotate-180"
                )}
              />
            </button>
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

        {/* Booking dropdown — desktop */}
        <AnimatePresence>
          {bookingOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-[#f3ecdb]/10 bg-[#0c1812]/95 backdrop-blur-md lg:block"
            >
              <div className="mx-auto max-w-7xl">
                <BookingForm onReserve={() => setBookingOpen(false)} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-90 lg:hidden"
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
              className="absolute right-0 top-0 flex h-full w-[82%] max-w-90 flex-col bg-[#14271f] p-6 shadow-2xl"
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

              <div className="hairline my-5 opacity-40" />

              {/* Booking form inside mobile drawer */}
              <div className="mb-5">
                <p className="mb-3 text-[0.65rem] font-semibold uppercase tracking-[0.18em] text-[#e8b547]/80">
                  Reserva rápida
                </p>
                <BookingForm compact onReserve={() => setOpen(false)} />
              </div>

              <div className="hairline my-5 opacity-40" />

              <ul className="flex flex-col gap-1">
                {LINKS.map((l, i) => {
                  const hash = l.href.includes("#")
                    ? "#" + l.href.split("#")[1]
                    : null;
                  const isActive = hash
                    ? active === hash
                    : pathname === l.href || pathname === l.href + "/";
                  return (
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
                          isActive
                            ? "bg-[#1f3a2e] text-[#e8b547]"
                            : "text-[#f3ecdb]/90 hover:bg-[#f3ecdb]/5"
                        )}
                      >
                        {l.label}
                        <span className="field-no text-sm">0{i + 1}</span>
                      </a>
                    </motion.li>
                  );
                })}
              </ul>

              {/* Mais páginas — mobile */}
              <p className="mb-2 mt-5 text-[0.6rem] font-semibold uppercase tracking-[0.18em] text-[#e8b547]/60">
                Mais
              </p>
              <ul className="flex flex-col gap-1">
                {MORE_LINKS.map((l) => {
                  const isActive =
                    pathname === l.href || pathname === l.href + "/";
                  return (
                    <li key={l.href}>
                      <a
                        href={l.href}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex items-center justify-between rounded-xl px-4 py-3 text-[0.9rem] transition-colors",
                          isActive
                            ? "bg-[#1f3a2e] text-[#e8b547]"
                            : "text-[#f3ecdb]/75 hover:bg-[#f3ecdb]/5"
                        )}
                      >
                        {l.label}
                      </a>
                    </li>
                  );
                })}
              </ul>

              <a
                href={CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                data-cursor="cta"
                className="mt-6 flex items-center justify-center gap-2 rounded-full border border-[#e8b547]/40 px-6 py-3 text-sm font-semibold text-[#e8b547] transition-colors hover:bg-[#e8b547] hover:text-[#14271f]"
              >
                Falar pelo WhatsApp
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
