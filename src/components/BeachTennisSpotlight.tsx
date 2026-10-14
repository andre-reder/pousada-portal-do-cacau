/// <reference types="vite/client" />
import { motion } from "framer-motion";
import { ArrowRight, Award, Camera, Check, Dumbbell, Moon, Sparkles } from "lucide-react";
import { pathWithBase } from "@/utils/base";

import img3939 from "../../assets/beach-tennis/IMG_3939.JPG";
import img3940 from "../../assets/beach-tennis/IMG_3940.JPG";
import img3942 from "../../assets/beach-tennis/IMG_3942.JPG";

export default function BeachTennisSpotlight() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.7 }}
      className="mt-14 overflow-hidden rounded-[var(--radius-stage)] border border-[#d9cfb8] bg-[#14271f] text-[#f3ecdb] shadow-(--shadow-elevated) sm:mt-18"
    >
      <div className="relative grid grid-cols-1 items-center gap-8 p-7 sm:p-10 lg:grid-cols-12 lg:gap-12 lg:p-12">
        {/* Fundo com efeito de luz sutil */}
        <div
          className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full opacity-20 blur-3xl"
          style={{
            background: "radial-gradient(circle, #e07a3c 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute -left-20 -bottom-20 h-80 w-80 rounded-full opacity-25 blur-3xl"
          style={{
            background: "radial-gradient(circle, #3d5d49 0%, transparent 70%)",
          }}
          aria-hidden="true"
        />

        {/* Lado Esquerdo — Conteúdo & Chamada */}
        <div className="relative z-10 lg:col-span-7">
          <div className="mb-4 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[#e8b547]/30 bg-[#e8b547]/15 px-3 py-1 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-[#e8b547]">
              <Dumbbell size={13} />
              Destaque de Lazer
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-white/10 px-3 py-1 text-[0.7rem] font-medium text-[#f3ecdb]/80">
              <Camera size={13} className="text-[#e07a3c]" />
              7 fotos reais da arena
            </span>
          </div>

          <h3
            className="font-display text-2xl leading-tight text-[#f3ecdb] sm:text-3xl lg:text-4xl"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}
          >
            Arena Oficial de Beach Tennis:
            <span className="block italic text-[#e8b547]">
              esporte, sol e mata atlântica.
            </span>
          </h3>

          <p className="mt-4 text-sm leading-relaxed text-[#f3ecdb]/80 sm:text-[0.95rem]">
            Quadra oficial de 20×11m com areia tratada, iluminação noturna e
            equipamentos gratuitos para hóspedes. Evolua seu jogo com aulas do
            Coach Robinho ou simplesmente divirta-se com a família e amigos.
          </p>

          {/* Bullets Rápidos */}
          <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            <div className="flex items-center gap-2.5 text-xs text-[#f3ecdb]/90 sm:text-sm">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#3d5d49] text-white">
                <Check size={12} strokeWidth={3} />
              </span>
              <span>100% grátis para hóspedes</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-[#f3ecdb]/90 sm:text-sm">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#3d5d49] text-white">
                <Check size={12} strokeWidth={3} />
              </span>
              <span>Raquetes e bolinhas inclusas</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-[#f3ecdb]/90 sm:text-sm">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#3d5d49] text-white">
                <Check size={12} strokeWidth={3} />
              </span>
              <span>Refletores para jogos noturnos</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-[#f3ecdb]/90 sm:text-sm">
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#3d5d49] text-white">
                <Check size={12} strokeWidth={3} />
              </span>
              <span>Aulas com Coach Robinho</span>
            </div>
          </div>

          {/* Botões de Ação */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href={pathWithBase("/beach-tennis#galeria")}
              data-cursor="cta"
              className="group inline-flex items-center justify-center gap-2.5 rounded-full bg-[#e07a3c] px-6 py-3 text-sm font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#c25f28] hover:shadow-xl"
            >
              <span>Ver fotos da quadra</span>
              <ArrowRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href={pathWithBase("/beach-tennis")}
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-[#f3ecdb] transition-colors hover:border-[#e8b547]/50 hover:bg-white/10 hover:text-[#e8b547]"
            >
              Ver detalhes da arena & aulas
            </a>
          </div>
        </div>

        {/* Lado Direito — Colagem Fotográfica Interativa */}
        <div className="relative z-10 lg:col-span-5">
          <a
            href={pathWithBase("/beach-tennis#galeria")}
            className="group relative block"
            aria-label="Ver galeria de fotos de Beach Tennis"
          >
            {/* Foto Principal (Aérea) */}
            <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-black/40 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
              <img
                src={img3939.src}
                alt="Vista aérea da Arena de Beach Tennis e complexo da pousada"
                className="h-56 w-full object-cover sm:h-64 lg:h-72"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-white">
                <span className="font-semibold text-[#e8b547]">
                  Vista aérea oficial
                </span>
                <span className="flex items-center gap-1 rounded-full bg-black/60 px-2.5 py-1 text-[0.7rem] backdrop-blur-sm">
                  <Camera size={12} />
                  Abrir galeria
                </span>
              </div>
            </div>

            {/* Miniatura 1 — Hóspedes & Coach */}
            <div className="absolute -bottom-5 -left-4 hidden w-32 overflow-hidden rounded-xl border-2 border-[#14271f] shadow-xl transition-transform duration-300 group-hover:-translate-y-1 sm:block sm:w-36">
              <img
                src={img3940.src}
                alt="Hóspedes com raquetes e Coach Robinho"
                className="h-24 w-full object-cover"
              />
            </div>

            {/* Miniatura 2 — Coach Robinho */}
            <div className="absolute -top-4 -right-4 hidden w-28 overflow-hidden rounded-xl border-2 border-[#14271f] shadow-xl transition-transform duration-300 group-hover:translate-y-1 sm:block sm:w-32">
              <img
                src={img3942.src}
                alt="Coach Robinho na rede da arena"
                className="h-28 w-full object-cover"
              />
            </div>

            {/* Floating Badge */}
            <div className="absolute -top-3 left-4 rounded-full border border-[#e8b547]/50 bg-[#1f3a2e] px-3.5 py-1 text-[0.68rem] font-bold uppercase tracking-wider text-[#e8b547] shadow-md">
              ★ Clique para ver as 7 fotos
            </div>
          </a>
        </div>
      </div>
    </motion.div>
  );
}
