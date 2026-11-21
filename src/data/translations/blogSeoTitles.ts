/**
 * Shorter <title> tags for blog posts whose headline runs past ~63 characters,
 * where Google would cut it off mid-phrase. The full headline is still the
 * page's H1 and the BlogPosting `headline`; this only changes the search-result
 * title. Keep each value at or under 60 characters, primary keyword first.
 */
export const blogSeoTitles: Record<string, Partial<Record<string, string>>> = {
  'full-spectrum-vs-broad-spectrum-vs-isolate': {
    en: 'Full-Spectrum vs Broad-Spectrum vs Isolate CBD Explained',
    fr: 'Full-Spectrum vs Broad-Spectrum vs Isolat CBD : Différences',
    de: 'Full-Spectrum vs Broad-Spectrum vs Isolat CBD: Unterschiede',
    es: 'Full-Spectrum vs Broad-Spectrum vs Aislado CBD: Diferencias',
    it: 'Full-Spectrum vs Broad-Spectrum vs Isolato CBD: Differenze',
    nl: 'Full-Spectrum vs Broad-Spectrum vs Isolaat CBD: Verschillen',
    pt: 'Full-Spectrum vs Broad-Spectrum vs Isolado CBD: Diferenças',
  },
  'hhc-thcp-semi-synthetic-cannabinoids-europe': {
    en: 'HHC, THCP & Semi-Synthetic Cannabinoids: Retailer Briefing',
    fr: 'HHC, THCP et Cannabinoïdes Semi-Synthétiques en Europe',
    de: 'HHC, THCP & Halbsynthetische Cannabinoide: Händler-Briefing',
    es: 'HHC, THCP y Cannabinoides Semi-Sintéticos en Europa',
    it: 'HHC, THCP e Cannabinoidi Semi-Sintetici in Europa',
    nl: 'HHC, THCP en Semi-Synthetische Cannabinoïden in Europa',
    fi: 'HHC, THCP ja Puolisynteettiset Kannabinoidit Euroopassa',
    pt: 'HHC, THCP e Canabinoides Semi-Sintéticos na Europa',
  },
  'cbd-drug-interactions-what-to-know': {
    fr: 'CBD et Interactions Médicamenteuses : Guide Détaillants',
    de: 'CBD und Arzneimittelwechselwirkungen: Leitfaden für Händler',
    es: 'CBD e Interacciones Medicamentosas: Guía para Minoristas',
    it: 'CBD e Interazioni Farmacologiche: Guida per Rivenditori',
    nl: 'CBD en Geneesmiddeleninteracties: Gids voor Retailers',
    fi: 'CBD ja Lääkeaineinteraktiot: Opas Jälleenmyyjille',
    pt: 'CBD e Interações Medicamentosas: Guia para Retalhistas',
  },
  'best-selling-cbd-products': {
    fr: 'Produits CBD les Plus Vendus en 2026 : Que Stocker ?',
    de: 'Bestverkaufte CBD-Produkte 2026: Was Händler Führen Sollten',
    es: 'Productos CBD Más Vendidos en 2026: Qué Tener en Stock',
    it: 'Prodotti CBD Più Venduti nel 2026: Cosa Tenere in Stock',
    nl: 'Best Verkopende CBD-Producten 2026: Wat Op Voorraad?',
    fi: 'Parhaiten Myyvät CBD-Tuotteet 2026: Mitä Varastoida?',
    pt: 'Produtos CBD Mais Vendidos em 2026: O que Ter em Stock',
  },
  'cbd-for-sleep-cbn-melatonin': {
    fr: 'CBD pour le Sommeil : CBN, CBD et Mélatonine Expliqués',
    de: 'CBD für den Schlaf: CBN, CBD und Melatonin Erklärt',
    it: 'CBD per il Sonno: CBN, CBD e Melatonina Spiegati',
    fi: 'CBD Unta Varten: CBN, CBD ja Melatoniini Selitettynä',
  },
  'choose-right-cbd-flower-supplier': {
    fr: 'Choisir son Fournisseur de Fleurs CBD : 7 Critères Clés',
    de: 'CBD-Blüten-Lieferanten Wählen: 7 Wichtige Kriterien',
    es: 'Cómo Elegir Proveedor de Flores CBD: 7 Criterios Clave',
    it: 'Scegliere il Fornitore di Fiori CBD: 7 Criteri Chiave',
    nl: 'De Juiste CBD-Bloemenleverancier Kiezen: 7 Criteria',
    pt: 'Escolher o Fornecedor de Flores CBD: 7 Critérios Chave',
  },
  'eu-novel-food-cbd-what-retailers-need-to-know': {
    fr: 'Nouveaux Aliments UE et CBD : Guide pour Détaillants',
    es: 'Novel Food UE y CBD: Lo que los Minoristas Deben Saber',
    fi: 'EU:n Uuselintarvikkeet ja CBD: Opas Jälleenmyyjille',
    pt: 'Novos Alimentos UE e CBD: Guia para Retalhistas',
  },
  'european-cbd-regulations-2024': {
    fr: 'Réglementations CBD en Europe 2026 : Guide Détaillants',
    es: 'Regulaciones CBD en Europa 2026: Guía para Minoristas',
    pt: 'Regulamentações CBD na Europa 2026: Guia para Retalhistas',
  },
  'how-cbd-hash-is-made-dry-sift-bubble-charas': {
    fr: 'Fabrication du Hash CBD : Dry Sift, Bubble Hash et Charas',
    de: 'CBD-Haschisch Herstellung: Dry Sift, Bubble Hash, Charas',
  },
  'how-is-cbd-extracted-co2-vs-ethanol': {
    fr: 'Extraction du CBD : CO2 vs Éthanol Expliquée',
  },
  'how-long-does-cbd-stay-in-your-system': {
    fr: 'Combien de Temps le CBD Reste-t-il dans l\'Organisme ?',
  },
  'what-are-terpenes-cbd-guide': {
    fr: 'Que Sont les Terpènes ? Guide Pratique pour Détaillants CBD',
  },
  'cbd-dosage-guide-how-much-to-take': {
    fr: 'Guide de Dosage CBD : Combien d\'Huile CBD Prendre ?',
  },
  'cbd-vs-thc-difference': {
    de: 'CBD vs THC: Was ist der Unterschied? Leitfaden 2026',
  },
  'avoid-mistakes-with-cbd-wholesaler': {
    de: '5 Fehler bei der Wahl eines CBD-Großhändlers',
  },
  'manage-cbd-wholesale-stock': {
    it: 'Gestire lo Stock CBD all\'Ingrosso nel 2026',
  },
  'how-to-start-cbd-business': {
    fi: 'CBD-liiketoiminnan Aloittaminen Euroopassa: Opas 2026',
  },
};

export function getBlogSeoTitle(slug: string, locale: string): string | undefined {
  return blogSeoTitles[slug]?.[locale];
}
