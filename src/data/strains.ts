// Strain guide content for /strains/<slug> pages (English-only cluster).
export interface StrainGuide {
  slug: string;
  name: string;
  type: 'Indica-dominant' | 'Sativa-dominant' | 'Hybrid';
  lineage: string;
  aroma: string[];
  terpenes: string[];
  cultivation: 'Greenhouse' | 'Indoor';
  productSlug: string;
  intro: string[];
  faq: { question: string; answer: string }[];
  related: string[];
}

export const strainGuides: StrainGuide[] = [
  {
    slug: 'og-kush-cbd',
    name: 'OG Kush CBD',
    type: 'Hybrid',
    lineage: 'Chemdawg × Hindu Kush (CBD-rich hemp phenotype)',
    aroma: ['Earthy', 'Pine', 'Lemon', 'Fuel'],
    terpenes: ['Myrcene', 'Limonene', 'Caryophyllene'],
    cultivation: 'Greenhouse',
    productSlug: 'og-kush-greenhouse',
    intro: [
      "OG Kush is arguably the most famous cannabis strain in the world, and its CBD-rich hemp version is the closest legal experience to the original. The unmistakable profile is all there: dense, resinous buds with the classic blend of earth, pine and bright lemon over a subtle fuel undertone — the signature that made OG Kush the backbone of the entire West Coast cannabis family tree.",
      "Our OG Kush CBD is grown in greenhouse conditions from certified hemp genetics, keeping THC below the 0.3% legal limit while preserving the terpene profile the strain is loved for. For retailers, it's the safest possible listing: customers recognize the name instantly, which makes it a consistent best-seller and an ideal anchor for any CBD flower menu.",
      "Wholesale buyers typically pair OG Kush with one or two fruity strains (Zkittlez, Gelato) to cover both classic and modern taste preferences in a small assortment."
    ],
    faq: [
      { question: "Does OG Kush CBD smell like the original?", answer: "Yes — aroma comes from terpenes, not THC. Our OG Kush CBD carries the same myrcene, limonene and caryophyllene profile as its famous namesake: earthy pine with lemon and a fuel edge, at fully legal THC levels below 0.3%." },
      { question: "Is OG Kush CBD good for first-time CBD flower customers?", answer: "It's the single best entry point. The name recognition means zero explanation is needed at the counter, and the classic profile matches what most customers expect cannabis flower to smell and look like." },
    ],
    related: ['gorilla-glue-cbd', 'sour-diesel-cbd', 'jack-herer-cbd'],
  },
  {
    slug: 'gelato-cbd',
    name: 'Gelato CBD',
    type: 'Hybrid',
    lineage: 'Sunset Sherbet × Thin Mint GSC (CBD-rich hemp phenotype)',
    aroma: ['Sweet', 'Creamy', 'Lavender', 'Citrus'],
    terpenes: ['Caryophyllene', 'Limonene', 'Humulene'],
    cultivation: 'Indoor',
    productSlug: 'gelato-indoor',
    intro: [
      "Gelato defined the modern 'dessert strain' era, and its CBD version is one of the most requested flowers in European shops. The profile is unmistakable: sweet, creamy and dessert-like with soft lavender and citrus notes, wrapped in dense, colorful buds with a heavy trichome coat.",
      "We grow Gelato CBD indoors under fully controlled conditions — the only way to preserve the delicate dessert terpenes and the frosted bag appeal that justifies its premium positioning. Lab-tested under 0.3% THC and shipped with certificates, it sits at the top of the menu as a connoisseur pick.",
      "For retailers, Gelato is the strain that upsells itself: display it next to greenhouse options and the visual difference does the selling. It pairs naturally with Wedding Cake and Zkittlez for a complete dessert shelf."
    ],
    faq: [
      { question: "Why is Gelato CBD more expensive than greenhouse strains?", answer: "Gelato is grown indoors, where light, climate and humidity are fully controlled. That preserves its delicate dessert terpene profile and dense trichome coverage — quality you can see and smell, which supports a premium retail price." },
      { question: "What does Gelato CBD taste like?", answer: "Sweet and creamy with lavender and citrus undertones — the classic dessert-strain profile that made Gelato world famous, from caryophyllene, limonene and humulene terpenes." },
    ],
    related: ['wedding-cake-cbd', 'zkittlez-cbd', 'white-widow-cbd'],
  },
  {
    slug: 'gorilla-glue-cbd',
    name: 'Gorilla Glue CBD',
    type: 'Hybrid',
    lineage: 'Chem Sis × Sour Dubb × Chocolate Diesel (CBD-rich hemp phenotype)',
    aroma: ['Earthy', 'Pine', 'Sour', 'Chocolate'],
    terpenes: ['Caryophyllene', 'Myrcene', 'Limonene'],
    cultivation: 'Indoor',
    productSlug: 'gorilla-glue-indoor',
    intro: [
      "Gorilla Glue (GG4) earned its name from resin production so heavy that trimming scissors stick together — and the CBD version inherits exactly that trait. Expect some of the stickiest, most trichome-loaded legal flower on the market, with a pungent profile of earth, pine and sour diesel over a faint chocolate base note.",
      "Grown indoors to maximize resin development, our Gorilla Glue CBD is consistently among the highest-CBD flowers in the catalog and a favorite of experienced customers who judge flower by feel. It's lab-tested under 0.3% THC with certificates included.",
      "Retail tip: Gorilla Glue's tackiness is a selling point — a tester jar lets customers feel the resin content that photos can't convey."
    ],
    faq: [
      { question: "Why is Gorilla Glue CBD so sticky?", answer: "The GG4 lineage is famous for extreme resin production. The stickiness is trichomes — the structures that hold cannabinoids and terpenes — so tacky flower literally means potent flower." },
      { question: "Is Gorilla Glue CBD strong?", answer: "It's consistently among the most cannabinoid-rich flowers we grow, with a heavy trichome coat and intense terpene profile — while staying below the 0.3% THC legal limit, verified by lab certificate." },
    ],
    related: ['og-kush-cbd', 'gelato-cbd', 'sour-diesel-cbd'],
  },
  {
    slug: 'white-widow-cbd',
    name: 'White Widow CBD',
    type: 'Hybrid',
    lineage: 'Brazilian sativa × South Indian indica (CBD-rich hemp phenotype)',
    aroma: ['Earthy', 'Woody', 'Spicy'],
    terpenes: ['Myrcene', 'Pinene', 'Caryophyllene'],
    cultivation: 'Indoor',
    productSlug: 'white-widow-indoor',
    intro: [
      "White Widow is a true legend — the Amsterdam coffeeshop icon of the 1990s, named for the blanket of white trichomes that covers its buds. The CBD version delivers the same look: frosted, almost silver flowers with an earthy, woody aroma and a peppery spice on the finish.",
      "Our White Widow CBD is grown indoors from certified hemp genetics, keeping the famous trichome coverage intact at legal THC levels below 0.3%. It's one of the most photographed strains in the catalog for good reason — the bag appeal is immediate.",
      "For shops serving customers over 35, White Widow often outsells trendier strains: it's the name they remember. Pair it with OG Kush for a 'classics' section that anchors the menu."
    ],
    faq: [
      { question: "Why is it called White Widow?", answer: "For the dense white trichome layer that covers mature buds, making them look frosted or silver. Our CBD version preserves this signature trait through indoor cultivation." },
      { question: "Is White Widow CBD a classic strain?", answer: "One of the most iconic ever bred — a staple of Amsterdam coffeeshops since the early 1990s and a multiple Cannabis Cup winner. The CBD version brings that heritage to the legal market." },
    ],
    related: ['jack-herer-cbd', 'og-kush-cbd', 'gelato-cbd'],
  },
  {
    slug: 'jack-herer-cbd',
    name: 'Jack Herer CBD',
    type: 'Sativa-dominant',
    lineage: 'Haze × Northern Lights #5 × Shiva Skunk (CBD-rich hemp phenotype)',
    aroma: ['Pine', 'Spicy', 'Herbal', 'Citrus'],
    terpenes: ['Terpinolene', 'Pinene', 'Caryophyllene'],
    cultivation: 'Greenhouse',
    productSlug: 'jack-herer-greenhouse',
    intro: [
      "Named after the legendary cannabis activist and author of 'The Emperor Wears No Clothes', Jack Herer is the definitive daytime sativa — and its CBD version keeps the bright, energizing character intact. The profile leads with fresh pine and spice, lifted by herbal and citrus top notes from its distinctive terpinolene content.",
      "Grown in greenhouse conditions, our Jack Herer CBD offers that uplifting profile at an accessible wholesale price point, lab-tested under 0.3% THC. It's the go-to recommendation for customers who want CBD flower without a heavy, sedative character.",
      "Menu strategy: position Jack Herer as your 'daytime' option opposite indica-leaning strains like Bubba Kush — the contrast gives counter staff an easy recommendation framework."
    ],
    faq: [
      { question: "Is Jack Herer CBD energizing or relaxing?", answer: "Its terpinolene-forward profile is associated with a brighter, more uplifting character — which is why Jack Herer is traditionally recommended as a daytime strain, in contrast to heavier myrcene-dominant varieties." },
      { question: "Who was Jack Herer?", answer: "A famous cannabis activist and author whose book 'The Emperor Wears No Clothes' became a foundational text of the legalization movement. The strain was named in his honor in the 1990s." },
    ],
    related: ['sour-diesel-cbd', 'white-widow-cbd', 'og-kush-cbd'],
  },
  {
    slug: 'sour-diesel-cbd',
    name: 'Sour Diesel CBD',
    type: 'Sativa-dominant',
    lineage: 'Chemdawg 91 × Super Skunk (CBD-rich hemp phenotype)',
    aroma: ['Diesel', 'Pungent', 'Citrus', 'Herbal'],
    terpenes: ['Caryophyllene', 'Limonene', 'Myrcene'],
    cultivation: 'Greenhouse',
    productSlug: 'sour-diesel-greenhouse',
    intro: [
      "Sour Diesel is the East Coast legend — the strain whose sharp fuel aroma defined New York cannabis culture in the 1990s. The CBD version delivers that unmistakable pungent diesel nose with citrus and herbal edges, at fully legal THC levels.",
      "Grown in greenhouse conditions from certified hemp genetics, our Sour Diesel CBD is the strain customers can identify blind. That aromatic intensity makes it a shop favorite: one open jar sells it better than any description.",
      "It anchors the 'classic and loud' end of a flower menu — pair it with sweeter options like Zkittlez or Blueberry so customers can self-sort by aroma preference in seconds."
    ],
    faq: [
      { question: "Why does Sour Diesel smell like fuel?", answer: "Its intense caryophyllene and limonene combination over a chemdawg lineage produces the signature sharp, gassy aroma. In legal CBD form, the terpene profile is fully preserved — the smell is the strain, not the THC." },
      { question: "Is Sour Diesel CBD popular with experienced customers?", answer: "Extremely. It's a heritage strain that experienced consumers seek out by name, and its loud aroma profile signals quality immediately — which makes it one of the fastest-rotating strains in tobacco shops and CBD stores." },
    ],
    related: ['og-kush-cbd', 'jack-herer-cbd', 'gorilla-glue-cbd'],
  },
  {
    slug: 'wedding-cake-cbd',
    name: 'Wedding Cake CBD',
    type: 'Indica-dominant',
    lineage: 'Triangle Kush × Animal Mints (CBD-rich hemp phenotype)',
    aroma: ['Sweet', 'Vanilla', 'Tangy', 'Earthy'],
    terpenes: ['Limonene', 'Caryophyllene', 'Linalool'],
    cultivation: 'Indoor',
    productSlug: 'wedding-cake-indoor',
    intro: [
      "Wedding Cake is the premium dessert strain — rich, tangy and creamy with a vanilla frosting finish, on buds so densely frosted they look sugar-dusted. Its CBD version is among the most visually impressive legal flowers available.",
      "Grown indoors to protect its delicate linalool and limonene profile, our Wedding Cake CBD ships lab-tested under 0.3% THC with certificates. It photographs beautifully, which makes it a natural pick for shops that market on social media.",
      "Positioned next to Gelato, it completes a premium dessert duo that commands the top of the price list — customers who buy one usually return to try the other."
    ],
    faq: [
      { question: "What does Wedding Cake CBD taste like?", answer: "Rich and tangy with sweet vanilla and a creamy finish — the signature dessert profile from its limonene, caryophyllene and linalool terpenes. The flavor lives up to the name." },
      { question: "Is Wedding Cake CBD a premium strain?", answer: "Yes — indoor-grown, heavily frosted and terpene-rich, it sits at the premium end of the menu alongside Gelato. The visual appeal alone justifies the positioning." },
    ],
    related: ['gelato-cbd', 'zkittlez-cbd', 'white-widow-cbd'],
  },
  {
    slug: 'zkittlez-cbd',
    name: 'Zkittlez CBD',
    type: 'Indica-dominant',
    lineage: 'Grape Ape × Grapefruit (CBD-rich hemp phenotype)',
    aroma: ['Tropical', 'Fruity', 'Sweet', 'Berry'],
    terpenes: ['Caryophyllene', 'Humulene', 'Linalool'],
    cultivation: 'Greenhouse',
    productSlug: 'zkittlez-greenhouse',
    intro: [
      "Zkittlez tastes exactly like it sounds: a burst of tropical fruit and candy sweetness that won it multiple Cannabis Cups and made it the template for the entire fruity-strain generation. The CBD version keeps that rainbow of fruit flavors at legal THC levels.",
      "Grown in greenhouse conditions, our Zkittlez CBD delivers the candy-fruit profile at an accessible price point — the strain that converts customers who 'don't like the smell of cannabis' with one sniff.",
      "It's the definitive gateway strain for new CBD flower customers and the natural companion to dessert strains like Gelato and Wedding Cake on a modern menu."
    ],
    faq: [
      { question: "Does Zkittlez CBD really taste like candy?", answer: "Remarkably close. Its Grape Ape × Grapefruit lineage produces an unusually sweet, tropical fruit profile that earned the strain its candy name and several Cannabis Cup awards." },
      { question: "Is Zkittlez CBD good for customers new to CBD flower?", answer: "It's the best converter in the catalog. The approachable fruity-sweet aroma wins over customers who find classic strains too pungent — ideal as a first recommendation." },
    ],
    related: ['gelato-cbd', 'wedding-cake-cbd', 'sour-diesel-cbd'],
  },
];

export function getStrainBySlug(slug: string): StrainGuide | undefined {
  return strainGuides.find(s => s.slug === slug);
}

export function getStrainByProductSlug(productSlug: string): StrainGuide | undefined {
  return strainGuides.find(s => s.productSlug === productSlug);
}
