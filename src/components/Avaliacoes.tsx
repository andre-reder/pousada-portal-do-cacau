import { motion } from "framer-motion";
import { PawPrint, Play, Quote, Star } from "lucide-react";
import { useState } from "react";
import { CONTACT } from "./cn";

type Review = {
  name: string;
  text: string;
  stars: number;
  tag: string;
};

const REVIEWS: Review[] = [
  {
    name: "Natasha",
    stars: 5,
    tag: "Hospedagem com pet",
    text: "Só tenho elogios para a nossa estadia! Desde o atendimento para reserva até a nossa saída. Equipe maravilhosa, sempre muito educados e atenciosos, principalmente com nossa filha de 4 patas. O café da manhã é excepcional, inclusive para os pets (minha cachorrinha não queria mais nada além do muffin). Para quem quer viajar com o pet, a pousada é um prato cheio.",
  },
  {
    name: "João Paulo",
    stars: 5,
    tag: "Casal com pet",
    text: "Pelas fotos vemos os atrativos do local, mas quando chegamos lá as expectativas são superadas. É ainda mais bonito ao vivo, com muita natureza e área de lazer ótima com piscinas — inclusive uma onde os pets são permitidos. O café da manhã tem um clima muito gostoso, com música de fundo. Os colaboradores e donos são muito gentis e fazem nos sentirmos em casa.",
  },
  {
    name: "Caroline Moura",
    stars: 5,
    tag: "Hospedagem com dog",
    text: "Nossa hospedagem foi maravilhosa! A pousada é aconchegante, bem localizada e organizada. Curti cada momento com meu dog, os funcionários são bem receptivos e preparados. Possui um café da manhã delicioso, e cada cantinho é acolhedor.",
  },
  {
    name: "Marcelo Bravo",
    stars: 5,
    tag: "Família",
    text: "Uma pousada cheia de charme e conforto! O casal João e Andreia, junto com seu cãocierge Kisuco, nos recebeu como se fôssemos da família. Feriado maravilhoso com passeio na cachoeira do Sertão de Camburi, jantar com música ao vivo e muita alegria. Minha filha de 15 anos amou e saiu de lá já me pedindo pra voltar.",
  },
  {
    name: "Paola A.",
    stars: 5,
    tag: "Cliente fiel",
    text: "Vou na pousada desde que nossos filhos eram pequenos, agora adolescentes. Amamos esse lugar — o espaço é incrível e os proprietários cuidam de tudo e todos pessoalmente. Lá tudo é excelente. Recomendo de olhos fechados, vale a visita sempre. Virou extensão da nossa casa e ganhamos grandes amigos.",
  },
];

type VideoItem = {
  id: string;
  title: string;
};

const VIDEOS: VideoItem[] = [
  { id: "StoWzx8zvEU", title: "Depoimento em vídeo" },
  { id: "gY3U-hLR8os", title: "Depoimento em vídeo" },
  { id: "FbXvQkrhzLI", title: "Tour pela pousada" },
];

function VideoCard({ id, title }: VideoItem) {
  const [clicked, setClicked] = useState(false);
  const thumb = `https://img.youtube.com/vi/${id}/hqdefault.jpg`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.6 }}
      whileHover={{ y: -5 }}
      className="group relative overflow-hidden rounded-[var(--radius-card)] border border-[#f3ecdb]/12 bg-[#1f3a2e]/60 backdrop-blur-sm transition-colors duration-300 hover:border-[#e8b547]/40"
    >
      <div className="relative aspect-video w-full">
        {clicked ? (
          <iframe
            src={`https://www.youtube.com/embed/${id}?autoplay=1`}
            title={title}
            className="absolute inset-0 h-full w-full"
            frameBorder="0"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setClicked(true)}
            className="absolute inset-0 h-full w-full cursor-pointer"
            aria-label={`Reproduzir vídeo: ${title}`}
          >
            <img
              src={thumb}
              alt={title}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-black/30 transition-opacity duration-300 group-hover:bg-black/20" />
            <span className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-[#e07a3c]/90 shadow-lg transition-transform duration-300 group-hover:scale-110">
              <Play size={26} className="ml-1 fill-white text-white" />
            </span>
          </button>
        )}
      </div>
      <div className="px-5 py-4">
        <div className="text-[0.8rem] uppercase tracking-[0.16em] text-[#e8b547]/80">
          {title}
        </div>
      </div>
    </motion.div>
  );
}

export default function Avaliacoes() {
  return (
    <section
      id="avaliacoes"
      className="relative overflow-hidden bg-[#14271f] py-24 sm:py-32 lg:py-36"
    >
      <div
        className="pointer-events-none absolute right-0 top-1/4 h-72 w-72 rounded-full opacity-25 blur-3xl"
        style={{ background: "radial-gradient(circle, #e07a3c, transparent 70%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Header */}
        <div className="mb-14 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12% 0px" }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex items-center gap-4"
          >
            <span className="field-no text-2xl" style={{ color: "#e8b547" }}>07</span>
            <span className="eyebrow text-[#e8b547]/90">Avaliações · Quem esteve aqui</span>
          </motion.div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.3fr_1fr] lg:items-end">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{ duration: 0.7 }}
              className="font-display text-[2.2rem] leading-[1.05] text-[#f3ecdb] sm:text-[3rem] lg:text-[3.6rem]"
              style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#f3ecdb" }}
            >
              Histórias de quem
              <span className="block italic text-[#e8b547]">
                voltou para casa feliz.
              </span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-12% 0px" }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="lg:pb-3"
            >
              <p className="text-[0.9rem] leading-relaxed text-[#f3ecdb]/65">
                Relatos de hóspedes que compartilharam suas estadias conosco.
                Exemplos representativos da experiência no Portal do Cacau.
              </p>
              <a
                href={CONTACT.tripadvisor}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center gap-2 text-[0.85rem] font-medium text-[#e8b547] underline-offset-4 transition-colors duration-200 hover:text-[#e07a3c] hover:underline"
              >
                Veja mais avaliações no Tripadvisor
              </a>
            </motion.div>
          </div>
        </div>

        {/* Reviews grid — masonry-ish with varied sizes */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {REVIEWS.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8% 0px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -5 }}
              className={`group relative flex flex-col rounded-[var(--radius-card)] border border-[#f3ecdb]/12 bg-[#1f3a2e]/60 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-[#e8b547]/40 sm:p-7 ${
                i === 0 ? "md:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <Quote
                size={28}
                className="text-[#e07a3c]/60"
                fill="currentColor"
              />
              <blockquote className="mt-4 flex-1 text-[0.88rem] leading-relaxed text-[#f3ecdb]/85">
                {r.text}
              </blockquote>

              <figcaption className="mt-6 flex items-center justify-between border-t border-[#f3ecdb]/10 pt-5">
                <div>
                  <div className="font-display text-base text-[#f3ecdb]" style={{ fontFamily: "var(--font-display)", fontWeight: 400 }}>
                    {r.name}
                  </div>
                  <div className="mt-0.5 text-[0.7rem] uppercase tracking-[0.16em] text-[#e8b547]/80">
                    {r.tag}
                  </div>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star
                      key={s}
                      size={13}
                      className={
                        s < r.stars
                          ? "fill-[#e8b547] text-[#e8b547]"
                          : "text-[#f3ecdb]/25"
                      }
                    />
                  ))}
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* Vídeos subsection */}
        <div className="mt-20 sm:mt-28">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12% 0px" }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex items-center gap-4 sm:mb-10"
          >
            <span className="eyebrow text-[#e8b547]/90">Vídeos · Quem esteve aqui em vídeo</span>
          </motion.div>

          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-12% 0px" }}
            transition={{ duration: 0.7 }}
            className="mb-10 font-display text-[1.8rem] leading-[1.1] text-[#f3ecdb] sm:text-[2.2rem] lg:text-[2.6rem]"
            style={{ fontFamily: "var(--font-display)", fontWeight: 400, color: "#f3ecdb" }}
          >
            Veja em vídeo
            <span className="block italic text-[#e8b547]">a experiência por quem viveu.</span>
          </motion.h3>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
            {VIDEOS.map((v) => (
              <VideoCard key={v.id} id={v.id} title={v.title} />
            ))}
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 flex items-center justify-center gap-2 text-center text-sm text-[#f3ecdb]/55 relative z-10"
        >
          <PawPrint size={15} className="text-[#e8b547]" />
          Avaliações representativas da experiência de hóspedes no segmento.
        </motion.div>
      </div>
    </section>
  );
}
