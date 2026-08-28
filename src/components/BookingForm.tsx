import { useEffect, useMemo, useState } from "react";
import { CalendarDays, ChevronDown, PawPrint, Users } from "lucide-react";
import { BOOKING } from "./cn";

function todayISO(offsetDays = 0): string {
  const d = new Date();
  d.setDate(d.getDate() + offsetDays);
  return d.toISOString().slice(0, 10);
}

/**
 * Reusable booking form.
 * Renders the date/adults/pets fields + "Reservar" submit button.
 * Used inside the navbar dropdown (desktop) and mobile drawer.
 */
export default function BookingForm({
  onReserve,
  compact,
}: {
  onReserve?: () => void;
  compact?: boolean;
}) {
  const [checkIn, setCheckIn] = useState<string>(todayISO(0));
  const [checkOut, setCheckOut] = useState<string>(todayISO(2));
  const [adults, setAdults] = useState<number>(2);
  const [pets, setPets] = useState<number>(0);

  useEffect(() => {
    if (checkOut <= checkIn) {
      const [y, m, d] = checkIn.split("-").map(Number);
      const next = new Date(y, m - 1, d);
      next.setDate(next.getDate() + 1);
      setCheckOut(next.toISOString().slice(0, 10));
    }
  }, [checkIn, checkOut]);

  const bookingUrl = useMemo(
    () => BOOKING.buildUrl({ checkIn, checkOut, adults, pets }),
    [checkIn, checkOut, adults, pets]
  );

  const handleReserve = () => {
    window.open(bookingUrl, "_blank", "noopener,noreferrer");
    onReserve?.();
  };

  if (compact) {
    // Mobile layout — stacked, full width
    return (
      <div className="space-y-3">
        <div className="grid grid-cols-2 gap-3">
          <label className="flex flex-col gap-1">
            <span className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#f3ecdb]/55">
              Entrada
            </span>
            <input
              type="date"
              value={checkIn}
              min={todayISO(0)}
              onChange={(e) => setCheckIn(e.target.value)}
              className="w-full cursor-text rounded-md border border-[#f3ecdb]/15 bg-[#1f3a2e] px-3 py-2.5 text-[0.85rem] text-[#f3ecdb] outline-none focus:border-[#e8b547]/60 [color-scheme:dark]"
            />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#f3ecdb]/55">
              Saída
            </span>
            <input
              type="date"
              value={checkOut}
              min={checkIn}
              onChange={(e) => setCheckOut(e.target.value)}
              className="w-full cursor-text rounded-md border border-[#f3ecdb]/15 bg-[#1f3a2e] px-3 py-2.5 text-[0.85rem] text-[#f3ecdb] outline-none focus:border-[#e8b547]/60 [color-scheme:dark]"
            />
          </label>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <label className="flex flex-col gap-1">
            <span className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#f3ecdb]/55">
              Adultos
            </span>
            <SelectInput
              value={adults}
              onChange={setAdults}
              options={[1, 2, 3, 4, 5, 6]}
              icon={Users}
            />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-[0.62rem] font-semibold uppercase tracking-[0.14em] text-[#f3ecdb]/55">
              Pets
            </span>
            <SelectInput
              value={pets}
              onChange={setPets}
              options={[0, 1, 2, 3]}
              icon={PawPrint}
            />
          </label>
        </div>
        <button
          type="button"
          onClick={handleReserve}
          data-cursor="cta"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-[#e07a3c] px-5 py-3 text-[0.85rem] font-bold text-white shadow-lg transition-colors hover:bg-[#c25f28]"
        >
          <CalendarDays size={16} />
          Reservar agora
        </button>
      </div>
    );
  }

  // Desktop dropdown layout — horizontal
  return (
    <div className="flex flex-wrap items-end gap-3 px-5 py-4 sm:px-8">
      <Field label="Entrada">
        <input
          type="date"
          value={checkIn}
          min={todayISO(0)}
          onChange={(e) => setCheckIn(e.target.value)}
          className="cursor-text rounded-lg border border-[#f3ecdb]/15 bg-[#1f3a2e] px-3 py-2 text-[0.82rem] text-[#f3ecdb] outline-none transition-colors focus:border-[#e8b547]/60 [color-scheme:dark]"
        />
      </Field>
      <Field label="Saída">
        <input
          type="date"
          value={checkOut}
          min={checkIn}
          onChange={(e) => setCheckOut(e.target.value)}
          className="cursor-text rounded-lg border border-[#f3ecdb]/15 bg-[#1f3a2e] px-3 py-2 text-[0.82rem] text-[#f3ecdb] outline-none transition-colors focus:border-[#e8b547]/60 [color-scheme:dark]"
        />
      </Field>
      <Field label="Adultos">
        <SelectInput
          value={adults}
          onChange={setAdults}
          options={[1, 2, 3, 4, 5, 6]}
          icon={Users}
        />
      </Field>
      <Field label="Pets">
        <SelectInput
          value={pets}
          onChange={setPets}
          options={[0, 1, 2, 3]}
          icon={PawPrint}
        />
      </Field>
      <button
        type="button"
        onClick={handleReserve}
        data-cursor="cta"
        className="flex items-center gap-2 rounded-full bg-[#e07a3c] px-6 py-2.5 text-[0.82rem] font-bold text-white shadow-[0_8px_24px_-8px_rgba(224,122,60,0.8)] transition-all duration-300 hover:bg-[#c25f28] hover:shadow-[0_12px_30px_-8px_rgba(224,122,60,1)]"
      >
        <CalendarDays size={15} />
        Reservar
      </button>
    </div>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-[0.6rem] font-semibold uppercase tracking-[0.14em] text-[#f3ecdb]/50">
        {label}
      </span>
      {children}
    </label>
  );
}

function SelectInput({
  value,
  onChange,
  options,
  icon: Icon,
}: {
  value: number;
  onChange: (v: number) => void;
  options: number[];
  icon: typeof Users;
}) {
  return (
    <div className="relative">
      <Icon
        size={13}
        className="pointer-events-none absolute left-2.5 top-1/2 -translate-y-1/2 text-[#e8b547]"
      />
      <select
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="appearance-none rounded-lg border border-[#f3ecdb]/15 bg-[#1f3a2e] py-2 pl-8 pr-7 text-[0.82rem] font-medium text-[#f3ecdb] outline-none transition-colors focus:border-[#e8b547]/60"
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
