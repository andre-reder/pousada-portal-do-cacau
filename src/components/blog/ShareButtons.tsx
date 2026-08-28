import { Camera, MessageCircle, Share2 } from "lucide-react";

interface Props {
  title: string;
  url: string;
}

export default function ShareButtons({ title, url }: Props) {
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  const links = [
    {
      label: "WhatsApp",
      icon: MessageCircle,
      href: `https://api.whatsapp.com/send?text=${encodedTitle}%20${encodedUrl}`,
      color: "hover:bg-[#25d366] hover:text-white",
    },
    {
      label: "Facebook",
      icon: Share2,
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      color: "hover:bg-[#1877f2] hover:text-white",
    },
    {
      label: "Instagram",
      icon: Camera,
      href: "https://www.instagram.com/pousadaportaldocacau",
      color: "hover:bg-[#e1306c] hover:text-white",
    },
  ];

  return (
    <div className="flex items-center gap-3">
      <span className="text-[0.75rem] font-semibold uppercase tracking-[0.14em] text-[#6b5d45]">
        Compartilhar
      </span>
      <div className="flex gap-2">
        {links.map((l) => (
          <a
            key={l.label}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Compartilhar no ${l.label}`}
            data-cursor="cta"
            className={`flex h-9 w-9 items-center justify-center rounded-full border border-[#d9cfb8] bg-[#fbf6ea] text-[#3d5d49] transition-all duration-300 ${l.color}`}
          >
            <l.icon size={16} />
          </a>
        ))}
      </div>
    </div>
  );
}
