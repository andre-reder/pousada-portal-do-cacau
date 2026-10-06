export const SITE_CONFIG = {
  name: "Pousada Portal do Cacau",
  title: "Pousada Portal do Cacau - Pousada Petfriendly em Camburi",
  description:
    "Pousada Petfriendly em Camburi localizada no Sertão do Camburi, um paraíso ecológico de São Sebastião (litoral paulista). Melhor preço garantido para reservas via site!",
  url: "https://portaldocacau.com.br",
  themeColor: "#f58634", // Cor oficial da marca preservada do site original
  locale: "pt_BR",
  
  contact: {
    phoneDisplay: "(12) 97410-8006",
    phoneIntl: "5512974108006",
    whatsappUrl:
      "https://api.whatsapp.com/send?1=pt_BR&phone=5512974108006&text=Ol%C3%A1!%20Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20reservas%20na%20Pousada%20Portal%20do%20Cacau.",
    email: "reservas@portaldocacau.com.br",
    address: {
      street: "Rua Tijucas, 895",
      neighborhood: "Sertão do Camburi",
      city: "São Sebastião",
      state: "SP",
      postalCode: "11619-100",
      country: "BR",
      geo: {
        latitude: -23.766674829868215,
        longitude: -45.632658728835686,
      },
    },
  },

  social: {
    facebook: "https://www.facebook.com/pousada.portaldocacau/?fref=ts",
    instagram: "https://www.instagram.com/portaldocacau/",
    tripadvisor:
      "https://www.tripadvisor.com.br/Hotel_Review-g5617507-d3264911-Reviews-Pousada_Portal_do_Cacau-Camburi_Sao_Sebastiao_State_of_Sao_Paulo.html",
  },

  /** IDs de medição e campanhas de anúncios */
  tracking: {
    // Tag ativa no site original (Universal Analytics conectado/legado)
    defaultGoogleAnalyticsId: "UA-143727205-1",
    // Suporte flexível para substituição via env vars
    ga4Id: import.meta.env.PUBLIC_GA4_ID || "",
    googleAdsId: import.meta.env.PUBLIC_GOOGLE_ADS_ID || "",
    gtmId: import.meta.env.PUBLIC_GTM_ID || "",
    metaPixelId: import.meta.env.PUBLIC_META_PIXEL_ID || "",
    // Verificações de domínio
    googleSiteVerification: import.meta.env.PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    facebookDomainVerification: import.meta.env.PUBLIC_FACEBOOK_DOMAIN_VERIFICATION || "",
  },
};
