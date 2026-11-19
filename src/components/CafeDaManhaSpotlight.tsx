/// <reference types="vite/client" />
import { motion, useReducedMotion } from "framer-motion";
import {
  ArrowRight,
  Camera,
  ChefHat,
  Coffee,
  PawPrint,
  Play,
  Sun,
  Wheat,
} from "lucide-react";
import { pathWithBase } from "@/utils/base";

import buffetImg from "../../assets/breakfest/buffet-mesa-cafe-da-manha.webp";
import cafePetImg from "../../assets/breakfest/cafe-pet-muffins-kisuco-golden.webp";
import tapiocaImg from "../../assets/breakfest/tapioca-rosa-queijo-dourado.webp";

const HIGHLIGHTS = [
  {
    icon: ChefHat,
    title: "100% feito na pousada",
    description: "Cuscuz, bolos, tapiocas, waffles e geleias caseiras",
  },
  {
    icon: Wheat,
    title: "Farinhas funcionais",
    description: "Receitas nutritivas; opções sem glúten, lactose e veganas",
  },
  {
    icon: PawPrint,
    title: "Café da manhã para pets",
    description: "Muffins de abóbora e biscoitinhos 100% naturais",
  },
  {
    icon: Sun,
    title: "Salão pé na areia",
    description: "Clima acolhedor na Mata Atlântica, com seu pet ao lado",
  },
];

export default function CafeDaManhaSpotlight() {
  const reduce = useReducedMotion();

  return (
    <section
      id="cafe-da-manha"
      className="relative overflow-hidden bg-[#1a241d] py-24 text-[#f3ecdb] sm:py-32 lg:py-36"
    >
      {/* Ambiente quente discreto */}
      <div
        className="pointer-events-none absolute -right-28 -top-24 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{
          background: "radial-gradient(circle, #e07a3c 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -bottom-24 -left-24 h-96 w-96 rounded-full opacity-25 blur-3xl"
        style={{
          background: "radial-gradient(circle, #6b4423 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Coluna Esquerda — Narrativa, Diferenciais & CTAs */}
          <div className="lg:col-span-6">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[#e8b547]/40 bg-[#e8b547]/15 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[#e8b547]">
                <Coffee size={14} aria-hidden="true" />
                Carro-chefe da Casa · Produção Própria
              </span>
              <span className="inline-flex items-center rounded-full border border-[#f3ecdb]/20 bg-[#14271f]/80 px-3.5 py-1.5 text-xs font-medium text-[#f3ecdb]">
                Incluso na diária · 8h às 10h
              </span>
            </div>

            <motion.h2
              initial={reduce ? false : { y: 18 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[2.15rem] leading-[1.06] text-[#f3ecdb] sm:text-[2.9rem] lg:text-[3.3rem]"
              style={{
                fontFamily: "var(--font-display)",
                fontWeight: 400,
                color: "#f3ecdb",
              }}
            >
              Um café da manhã
              <span className="mt-1 block italic text-[#e8b547]">
                caprichado em cada detalhe — até para o seu pet.
              </span>
            </motion.h2>

            <p className="mt-5 max-w-xl text-[0.96rem] leading-relaxed text-[#f3ecdb]/90 sm:text-[1.02rem]">
              Um dos maiores sucessos da Portal do Cacau: todo produzido na
              cozinha da pousada, nutritivo, pensado com farinhas funcionais e
              apresentação caprichada — de cuscuz quentinho, bolos caseiros,
              tapiocas na hora e geleias artesanais até biscoitinhos e muffins
              naturais feitos especialmente para os pets.
            </p>

            {/* 4 Diferenciais */}
            <div className="mt-8 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
              {HIGHLIGHTS.map((item) => (
                <div
                  key={item.title}
                  className="flex items-start gap-3.5 rounded-2xl border border-[#f3ecdb]/15 bg-[#14271f]/75 p-4 transition-colors duration-300 hover:border-[#e8b547]/45"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#e07a3c]/20 text-[#e8b547]">
                    <item.icon size={19} strokeWidth={1.8} aria-hidden="true" />
                  </span>
                  <div>
                    <h3
                      className="font-display text-base leading-snug text-[#f3ecdb]"
                      style={{
                        fontFamily: "var(--font-display)",
                        fontWeight: 400,
                        color: "#f3ecdb",
                      }}
                    >
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-snug text-[#d9cfb8]">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTAs Duplos */}
            <div className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:flex-wrap sm:items-center">
              <a
                href={pathWithBase("/cafe-da-manha")}
                data-cursor="cta"
                className="group inline-flex min-h-12 items-center justify-center gap-2.5 rounded-full bg-[#e07a3c] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_14px_34px_-12px_rgba(224,122,60,0.75)] transition-all duration-300 hover:bg-[#c25f28]"
              >
                <span>Conhecer nosso café da manhã</span>
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </a>

              <a
                href={pathWithBase("/cafe-da-manha#galeria")}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#f3ecdb]/30 bg-white/5 px-6 py-3.5 text-sm font-semibold text-[#f3ecdb] transition-colors duration-300 hover:border-[#e8b547]/65 hover:bg-white/10 hover:text-[#e8b547]"
              >
                <Play size={15} className="fill-current" aria-hidden="true" />
                <span>Ver fotos e vídeos</span>
              </a>
            </div>
          </div>

          {/* Coluna Direita — Colagem Fotográfica Editorial */}
          <motion.div
            initial={reduce ? false : { y: 20 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6"
          >
            <a
              href={pathWithBase("/cafe-da-manha#galeria")}
              aria-label="Ver galeria de fotos e vídeos reais do café da manhã e do café pet"
              className="group relative block sm:px-6 sm:pb-7 sm:pt-5"
            >
              {/* Foto Principal — Buffet e salão pé na areia */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[var(--radius-stage)] border border-[#f3ecdb]/20 bg-[#14271f] shadow-2xl sm:aspect-auto sm:h-[460px] lg:h-[500px]">
                <img
                  src={buffetImg.src}
                  alt="Mesa farta do café da manhã no salão pé na areia com frutas, bolos, pães, geleias e Golden Retriever sorrindo"
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover object-[center_62%] transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#0c1812]/90 via-[#0c1812]/20 to-transparent"
                  aria-hidden="true"
                />

                <div className="absolute inset-x-4 bottom-4 flex flex-wrap items-center justify-between gap-2 sm:inset-x-5 sm:bottom-5">
                  <span className="text-sm font-semibold text-[#e8b547] drop-shadow">
                    Salão pé na areia · 7 fotos e 2 vídeos reais
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-[#f3ecdb]/25 bg-[#0c1812]/80 px-3.5 py-1.5 text-xs font-semibold text-[#f3ecdb] backdrop-blur-sm transition-colors group-hover:border-[#e8b547]/60 group-hover:text-[#e8b547]">
                    <Camera size={13} aria-hidden="true" />
                    Abrir galeria
                  </span>
                </div>
              </div>

              {/* Cards de Apoio — Grid 2 cols no mobile, sobreposição editorial no desktop */}
              <div className="mt-3.5 grid grid-cols-2 gap-3.5 sm:mt-0 sm:block">
                {/* Apoio 1 — Tapioca rosa artesanal */}
                <div className="overflow-hidden rounded-2xl border-2 border-[#1a241d] bg-[#14271f] shadow-xl transition-transform duration-300 group-hover:-translate-y-1 sm:absolute sm:bottom-0 sm:left-0 sm:z-20 sm:w-44 lg:w-48">
                  <div className="relative aspect-[4/3] sm:h-36 sm:aspect-auto">
                    <img
                      src={tapiocaImg.src}
                      alt="Tapioca rosa artesanal com crosta de queijo dourado, xícara de café e frutas frescas"
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover object-center"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-[#0c1812]/85 via-transparent to-transparent"
                      aria-hidden="true"
                    />
                    <span className="absolute bottom-2 left-2.5 right-2.5 text-xs font-semibold leading-tight text-[#f3ecdb]">
                      Tapiocas & sabores feitos na hora
                    </span>
                  </div>
                </div>

                {/* Apoio 2 — Café da manhã para pets */}
                <div className="overflow-hidden rounded-2xl border-2 border-[#1a241d] bg-[#14271f] shadow-xl transition-transform duration-300 group-hover:translate-y-1 sm:absolute sm:right-0 sm:top-0 sm:z-20 sm:w-48 lg:w-52">
                  <div className="relative aspect-[4/3] sm:h-40 sm:aspect-auto">
                    <img
                      src={cafePetImg.src}
                      alt="Cãocierge Kisuco e Golden Retriever diante do prato de muffins e bolinhos naturais pet"
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover object-center"
                    />
                    <div
                      className="absolute inset-0 bg-gradient-to-t from-[#0c1812]/85 via-transparent to-transparent"
                      aria-hidden="true"
                    />
                    <span className="absolute left-2.5 top-2.5 rounded-full bg-[#e8b547] px-2.5 py-0.5 text-[0.68rem] font-bold uppercase tracking-wider text-[#14271f] shadow">
                      Café Pet Incluso
                    </span>
                    <span className="absolute bottom-2 left-2.5 right-2.5 text-xs font-semibold leading-tight text-[#f3ecdb]">
                      Muffins naturais para pets
                    </span>
                  </div>
                </div>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
