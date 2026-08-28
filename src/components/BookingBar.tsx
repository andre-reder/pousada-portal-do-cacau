import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CalendarDays, ChevronDown, PawPrint, Users, X } from "lucide-react";
import { BOOKING } from "./cn";

/**
 * Fixed top booking bar.
 * - Always visible on desktop, collapses into a "Reservar" pill on mobile
 *   that expands a dropdown with the form fields.
 * - Builds the ireservas URL from the inputs and opens it in a new tab.
 */
function todayISO(offsetDays = 0): string {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  return d.toISOString().slice(0, 10);
}

function prettyDate(iso: string): string {
  if (!iso) return "";
  const [y, m, d] = iso.split("-").map(Number);
  if (!y || !m || !d) return iso;
  return new Date(y, m - 1, d).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "short",
  });
}

export default function BookingBar() {
  const [checkIn, setCheckIn] = useState<string>(todayISO(0));
  const [checkOut, setCheckOut] = useState<string>(todayISO(2));
  const [adults, setAdults] = useState<number>(2);
  const [pets, setPets] = useState<number>(0);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Ensure checkout is always after checkin
  useEffect(() => {
    if (checkOut <= checkIn) {
      const [y, m, d] = checkIn.split("-").map(Number);
      const next = new Date(y, m - 1, d);
      next.setDate(next.getDate() + 1);
      setCheckOut(next.toISOString().slice(0, 10));
    }
  }, [checkIn, checkOut]);

  const bookingUrl = useMemo(
    () =>
      BOOKING.buildUrl({
        checkIn,
        checkOut,
        adults,
        pets,
      }),
    [checkIn, checkOut, adults, pets]
  );

  const handleReserve = () => {
    window.open(bookingUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-75 bg-[#0c1812]/95 backdrop-blur-md shadow-[0_8px_24px_-12px_rgba(12,24,18,0.7)]">
        <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-2.5 sm:px-6 lg:px-8">
          {/* Compact label on desktop */}
          <span className="hidden items-center gap-2 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-[#e8b547]/90 lg:flex">
            <CalendarDays size={14} strokeWidth={2} />
            Reservar
          </span>

          {/* Desktop form — inline */}
          <div className="hidden flex-1 items-center gap-2 lg:flex">
            <Field label="Entrada">
              <input
                type="date"
                value={checkIn}
                min={todayISO(0)}
                onChange={(e) => setCheckIn(e.target.value)}
                className="cursor-text rounded-md border border-[#f3ecdb]/15 bg-[#1f3a2e] px-2.5 py-1.5 text-[0.82rem] text-[#f3ecdb] outline-none transition-colors focus:border-[#e8b547]/60 scheme-dark"
              />
            </Field>
            <Field label="Saída">
              <input
                type="date"
                value={checkOut}
                min={checkIn}
                onChange={(e) => setCheckOut(e.target.value)}
                className="cursor-text rounded-md border border-[#f3ecdb]/15 bg-[#1f3a2e] px-2.5 py-1.5 text-[0.82rem] text-[#f3ecdb] outline-none transition-colors focus:border-[#e8b547]/60 scheme-dark"
              />
            </Field>
            <Field label="Adultos">
              <NumberSelect
                value={adults}
                onChange={setAdults}
                options={[1, 2, 3, 4, 5, 6]}
                icon={Users}
              />
            </Field>
            <Field label="Pets">
              <NumberSelect
                value={pets}
                onChange={setPets}
                options={[0, 1, 2, 3]}
                icon={PawPrint}
              />
            </Field>
          </div>

          {/* Reserve button — desktop */}
          <button
            type="button"
            onClick={handleReserve}
            data-cursor="cta"
            className="hidden items-center gap-2 rounded-full bg-[#e07a3c] px-5 py-2 text-[0.82rem] font-bold text-white shadow-[0_8px_24px_-8px_rgba(224,122,60,0.8)] transition-all duration-300 hover:bg-[#c25f28] hover:shadow-[0_12px_30px_-8px_rgba(224,122,60,1)] lg:flex"
          >
            Reservar
          </button>

          {/* Mobile — compact summary + expand toggle */}
          <button
            type="button"
            onClick={() => setMobileOpen((v) => !v)}
            className="flex flex-1 items-center justify-between gap-2 rounded-full border border-[#f3ecdb]/15 bg-[#1f3a2e] px-4 py-2 text-left lg:hidden"
            aria-expanded={mobileOpen}
          >
            <span className="flex items-center gap-2 text-[0.78rem] font-medium text-[#f3ecdb]">
              <CalendarDays size={14} className="text-[#e8b547]" />
              {prettyDate(checkIn)} → {prettyDate(checkOut)}
              <span className="text-[#f3ecdb]/50">·</span>
              <Users size={13} className="text-[#e8b547]" /> {adults}
              <span className="text-[#f3ecdb]/50">·</span>
              <PawPrint size={13} className="text-[#e8b547]" /> {pets}
            </span>
            <ChevronDown
              size={16}
              className={`shrink-0 text-[#e8b547] transition-transform duration-300 ${
                mobileOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          <button
            type="button"
            onClick={handleReserve}
            data-cursor="cta"
            className="rounded-full bg-[#e07a3c] px-4 py-2 text-[0.78rem] font-bold text-white shadow-lg transition-colors hover:bg-[#c25f28] lg:hidden"
          >
            Reservar
          </button>
        </div>

        {/* Mobile dropdown */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden border-t border-[#f3ecdb]/10 bg-[#0c1812] lg:hidden"
            >
              <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 px-4 py-4 sm:px-6">
                <Field label="Entrada" stacked>
                  <input
                    type="date"
                    value={checkIn}
                    min={todayISO(0)}
                    onChange={(e) => setCheckIn(e.target.value)}
                    className="w-full cursor-text rounded-md border border-[#f3ecdb]/15 bg-[#1f3a2e] px-3 py-2 text-[0.85rem] text-[#f3ecdb] outline-none focus:border-[#e8b547]/60 scheme-dark"
                  />
                </Field>
                <Field label="Saída" stacked>
                  <input
                    type="date"
                    value={checkOut}
                    min={checkIn}
                    onChange={(e) => setCheckOut(e.target.value)}
                    className="w-full cursor-text rounded-md border border-[#f3ecdb]/15 bg-[#1f3a2e] px-3 py-2 text-[0.85rem] text-[#f3ecdb] outline-none focus:border-[#e8b547]/60 scheme-dark"
                  />
                </Field>
                <Field label="Adultos" stacked>
                  <NumberSelect
                    value={adults}
                    onChange={setAdults}
                    options={[1, 2, 3, 4, 5, 6]}
                    icon={Users}
                    full
                  />
                </Field>
                <Field label="Pets" stacked>
                  <NumberSelect
                    value={pets}
                    onChange={setPets}
                    options={[0, 1, 2, 3]}
                    icon={PawPrint}
                    full
                  />
                </Field>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Spacer so content doesn't hide behind the fixed bar.
          Desktop bar ~46px; mobile bar ~44px. */}
      <div className="h-11 lg:h-[46px]" aria-hidden="true" />
    </>
  );
}

function Field({
  label,
  children,
  stacked,
}: {
  label: string;
  children: React.ReactNode;
  stacked?: boolean;
}) {
  return (
    <label className={`flex ${stacked ? "flex-col gap-1" : "items-center gap-1.5"}`}>
      <span className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#f3ecdb]/55">
        {label}
      </span>
      {children}
    </label>
  );
}

function NumberSelect({
  value,
  onChange,
  options,
  icon: Icon,
  full,
}: {
  value: number;
  onChange: (v: number) => void;
  options: number[];
  icon: typeof Users;
  full?: boolean;
}) {
  return (
    <div className={`relative ${full ? "w-full" : ""}`}>
      <Icon
        size={13}
        className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-[#e8b547]"
      />
      <select
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className={`appearance-none rounded-md border border-[#f3ecdb]/15 bg-[#1f3a2e] py-1.5 pl-8 pr-7 text-[0.82rem] font-medium text-[#f3ecdb] outline-none transition-colors focus:border-[#e8b547]/60 ${
          full ? "w-full" : ""
        }`}
      >
        {options.map((n) => (
          <option key={n} value={n}>
            {n}
          </option>
        ))}
      </select>
      <ChevronDown
        size={13}
        className="pointer-events-none absolute right-2 top-1/2 -translate-y-1/2 text-[#f3ecdb]/50"
      />
    </div>
  );
}
