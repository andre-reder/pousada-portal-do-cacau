import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Site-wide contact constants derived from the business dossier. */
export const CONTACT = {
  businessName: "Pousada Portal do Cacau",
  phoneDisplay: "(12) 97410-8006",
  phoneIntl: "5512974108006",
  whatsappUrl:
    "https://api.whatsapp.com/send?1=pt_BR&phone=5512974108006&text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20reservas%20na%20Pousada%20Portal%20do%20Cacau.",
  email: "reservas@portaldocacau.com.br",
  address: "Rua Tijucas, 895 — Sertão do Camburi",
  city: "São Sebastião — SP",
  cep: "CEP 11200-000",
  reception: "Recepção 24 horas",
  instagram: "https://www.instagram.com/pousadaportaldocacau",
  facebook: "https://www.facebook.com/pousada.portaldocacau",
  website: "https://portaldocacau.com.br/",
  tripadvisor:
    "https://www.tripadvisor.com.br/Hotel_Review-g5617507-d3264911-Reviews-Pousada_Portal_do_Cacau-Camburi_Sao_Sebastiao_State_of_Sao_Paulo.html",
};

/** ireservas booking engine configuration. */
export const BOOKING = {
  /** Booking engine base URL. */
  baseUrl: "https://ireservas.com.br/booking-tool/booking-engine.php",
  /** Property key (k param). */
  key: "4DE7DAE5-8B6",
  /**
   * Build the full booking URL from the given parameters.
   * Dates must be in YYYY-MM-DD format.
   */
  buildUrl(params: {
    checkIn: string;
    checkOut: string;
    adults?: number;
    children?: number;
    pets?: number;
  }): string {
    const url = new URL(this.baseUrl);
    url.searchParams.set("k", this.key);
    url.searchParams.set("adt", String(params.adults ?? 2));
    url.searchParams.set("chd", String(params.children ?? ""));
    url.searchParams.set("pts", String(params.pets ?? 0));
    url.searchParams.set("in", params.checkIn);
    url.searchParams.set("out", params.checkOut);
    return url.toString();
  },
};
