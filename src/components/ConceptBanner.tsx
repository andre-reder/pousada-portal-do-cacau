import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

/**
 * Floating, dismissible concept notice — bottom-right corner.
 * Persists dismissal in sessionStorage so it doesn't nag within a session.
 */
export default function ConceptBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      const dismissed = sessionStorage.getItem("pcacau_concept_dismissed");
      if (!dismissed) setOpen(true);
    } catch {
      setOpen(true);
    }
  }, []);

  const close = () => {
    setOpen(false);
    try {
      sessionStorage.setItem("pcacau_concept_dismissed", "1");
    } catch {
      /* ignore */
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          role="status"
          initial={{ opacity: 0, y: 24, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.96 }}
          transition={{ type: "spring", stiffness: 260, damping: 26 }}
          className="fixed bottom-4 right-4 z-[60] max-w-[320px] rounded-xl border border-white/10 bg-[#14271f]/95 p-4 pr-10 text-[#f3ecdb] shadow-2xl backdrop-blur-sm"
        >
          <button
            type="button"
            onClick={close}
            aria-label="Fechar aviso"
            className="absolute right-2 top-2 flex h-7 w-7 items-center justify-center rounded-md text-[#f3ecdb]/70 transition-colors hover:bg-white/10 hover:text-[#f3ecdb]"
          >
            <X size={15} />
          </button>
          <p className="text-[11px] leading-relaxed text-[#f3ecdb]/85">
            <span className="font-semibold text-[#e8b547]">
              Proposta conceitual não oficial.
            </span>{" "}
            Conteúdo e dados podem ser fictícios e devem ser confirmados antes
            da publicação.
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
