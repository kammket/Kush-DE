import type { Locale } from '../i18n/config';

type CategoryTranslations = Record<string, {
  name: string;
  description: string;
  metaTitle: string;
  metaDescription: string;
}>;

export const categoryTranslations: Record<Locale, CategoryTranslations> = {
  en: {
    'cbd-flowers': {
      name: 'Wholesale CBD Flowers',
      description: 'Premium wholesale CBD flowers selected with the greatest care. Thanks to daily monitoring of our partner farms, we guarantee consistent quality that complies with French CBD legislation.',
      metaTitle: 'Wholesale CBD Flowers | Premium Hemp Flowers | Greens Farmhouse',
      metaDescription: 'Buy premium CBD flowers wholesale. Greenhouse & indoor varieties including OG Kush, Gorilla Glue, Wedding Cake & more. Best prices for professionals.',
    },
    'cbd-resins': {
      name: 'Wholesale CBD Resins',
      description: 'If you\'re looking for the best CBD resins available today, you can trust Greens Farmhouse. We specialize in wholesale CBD resins and guarantee the best value on the market.',
      metaTitle: 'Wholesale CBD Resins & Hash | Premium Quality | Greens Farmhouse',
      metaDescription: 'Buy wholesale CBD resins and hash at the best prices. Afghan Hash, Ketama, Pollen CBD & more. Lab-tested, legal in EU.',
    },
    'cbd-oils': {
      name: 'Wholesale CBD Oils',
      description: 'We select our partners with the utmost care, enabling us to offer CBD oils of the highest quality. Our products meet all quality and legality criteria.',
      metaTitle: 'Wholesale CBD Oils | Organic Hemp Oil | Greens Farmhouse',
      metaDescription: 'Premium wholesale CBD oils from 5% to 20%. Available per liter or in bottles. Organic, lab-tested hemp oils.',
    },
    'cbd-gummies': {
      name: 'Wholesale CBD Gummies',
      description: 'CBD gummies provide all the benefits of CBD in a discreet and gourmet way. Our wholesale CBD candies are guaranteed legal with THC levels below 0.3%.',
      metaTitle: 'Wholesale CBD Gummies & Candies | Greens Farmhouse',
      metaDescription: 'Buy wholesale CBD gummies and candies. Full-spectrum, lab-tested. Best wholesale prices for professionals.',
    },
    'thc-gummies': {
      name: 'Wholesale THC Gummies',
      description: 'Discover our exclusive THC candy collection for professionals. Each candy is carefully formulated with several levels of potency. All products comply with European legislation.',
      metaTitle: 'Wholesale THC Gummies & Candies | Legal EU | Greens Farmhouse',
      metaDescription: 'Legal THC gummies wholesale. Compliant with EU regulations. Multiple flavors. Professional wholesale pricing.',
    },
  },
  es: {
    'cbd-flowers': {
      name: 'Flores CBD al por Mayor',
      description: 'Flores CBD premium seleccionadas con el mayor cuidado. Gracias al seguimiento diario de nuestras granjas asociadas, garantizamos una calidad constante conforme a la legislación europea.',
      metaTitle: 'Flores CBD al por Mayor | Flores de Cáñamo Premium | Greens Farmhouse',
      metaDescription: 'Compre flores CBD al por mayor. Variedades invernadero e interior: OG Kush, Gorilla Glue, Wedding Cake y más. Mejores precios para profesionales.',
    },
    'cbd-resins': {
      name: 'Resinas CBD al por Mayor',
      description: 'Si busca las mejores resinas CBD del mercado, confíe en Greens Farmhouse. Nos especializamos en resinas CBD al por mayor y garantizamos la mejor relación calidad-precio.',
      metaTitle: 'Resinas CBD al por Mayor | Hachís Premium | Greens Farmhouse',
      metaDescription: 'Compre resinas CBD y hachís al por mayor a los mejores precios. Afghan Hash, Ketama, Polen CBD y más. Testado en laboratorio.',
    },
    'cbd-oils': {
      name: 'Aceites CBD al por Mayor',
      description: 'Seleccionamos nuestros socios con sumo cuidado, lo que nos permite ofrecer aceites CBD de la más alta calidad. Nuestros productos cumplen todos los criterios de calidad y legalidad.',
      metaTitle: 'Aceites CBD al por Mayor | Aceite de Cáñamo Orgánico | Greens Farmhouse',
      metaDescription: 'Aceites CBD al por mayor del 5% al 20%. Disponibles por litro o en botellas. Aceites de cáñamo orgánico, testados en laboratorio.',
    },
    'cbd-gummies': {
      name: 'Gominolas CBD al por Mayor',
      description: 'Las gominolas CBD ofrecen todos los beneficios del CBD de forma discreta y gourmet. Nuestras gominolas CBD al por mayor son legales con THC inferior al 0,3%.',
      metaTitle: 'Gominolas CBD al por Mayor | Caramelos CBD | Greens Farmhouse',
      metaDescription: 'Compre gominolas y caramelos CBD al por mayor. Espectro completo, testados en laboratorio. Mejores precios mayoristas.',
    },
    'thc-gummies': {
      name: 'Gominolas THC al por Mayor',
      description: 'Descubra nuestra colección exclusiva de gominolas THC para profesionales. Cada gominola está formulada con varios niveles de potencia. Conforme a la legislación europea.',
      metaTitle: 'Gominolas THC al por Mayor | Legal UE | Greens Farmhouse',
      metaDescription: 'Gominolas THC legales al por mayor. Conformes con la normativa europea. Varios sabores. Precios mayoristas profesionales.',
    },
  },
  fr: {
    'cbd-flowers': {
      name: 'Fleurs CBD en Gros',
      description: 'Fleurs CBD premium sélectionnées avec le plus grand soin. Grâce au suivi quotidien de nos fermes partenaires, nous garantissons une qualité constante conforme à la législation française.',
      metaTitle: 'Fleurs CBD en Gros | Fleurs de Chanvre Premium | Greens Farmhouse',
      metaDescription: 'Achetez des fleurs CBD en gros. Variétés serre et indoor : OG Kush, Gorilla Glue, Wedding Cake et plus. Meilleurs prix pour professionnels.',
    },
    'cbd-resins': {
      name: 'Résines CBD en Gros',
      description: 'Si vous recherchez les meilleures résines CBD du marché, faites confiance à Greens Farmhouse. Nous sommes spécialisés dans la résine CBD en gros et garantissons le meilleur rapport qualité-prix.',
      metaTitle: 'Résines CBD en Gros | Haschich Premium | Greens Farmhouse',
      metaDescription: 'Achetez résines CBD et haschich en gros aux meilleurs prix. Afghan Hash, Ketama, Pollen CBD et plus. Testé en laboratoire.',
    },
    'cbd-oils': {
      name: 'Huiles CBD en Gros',
      description: 'Nous sélectionnons nos partenaires avec le plus grand soin, nous permettant de proposer des huiles CBD de la plus haute qualité répondant à tous les critères de qualité et légalité.',
      metaTitle: 'Huiles CBD en Gros | Huile de Chanvre Bio | Greens Farmhouse',
      metaDescription: 'Huiles CBD en gros de 5% à 20%. Par litre ou en flacons. Huiles de chanvre bio, testées en laboratoire.',
    },
    'cbd-gummies': {
      name: 'Bonbons CBD en Gros',
      description: 'Les bonbons CBD offrent tous les bienfaits du CBD de manière discrète et gourmande. Nos bonbons CBD en gros sont garantis légaux avec un THC inférieur à 0,3%.',
      metaTitle: 'Bonbons CBD en Gros | Gummies CBD | Greens Farmhouse',
      metaDescription: 'Achetez bonbons et gummies CBD en gros. Spectre complet, testés en laboratoire. Meilleurs prix grossiste.',
    },
    'thc-gummies': {
      name: 'Bonbons THC en Gros',
      description: 'Découvrez notre collection exclusive de bonbons THC pour professionnels. Chaque bonbon est soigneusement formulé avec plusieurs niveaux de puissance. Conforme à la législation européenne.',
      metaTitle: 'Bonbons THC en Gros | Légal UE | Greens Farmhouse',
      metaDescription: 'Bonbons THC légaux en gros. Conformes à la réglementation européenne. Plusieurs saveurs. Prix grossiste professionnel.',
    },
  },
  de: {
    'cbd-flowers': {
      name: 'CBD Blüten Großhandel',
      description: 'Premium CBD-Blüten mit größter Sorgfalt ausgewählt. Dank täglicher Überwachung unserer Partnerfarmen garantieren wir gleichbleibende Qualität gemäß europäischer Gesetzgebung.',
      metaTitle: 'CBD Blüten Großhandel | Premium Hanfblüten | Greens Farmhouse',
      metaDescription: 'CBD-Blüten im Großhandel kaufen. Gewächshaus- & Indoor-Sorten: OG Kush, Gorilla Glue, Wedding Cake & mehr. Beste Preise für Profis.',
    },
    'cbd-resins': {
      name: 'CBD Harze Großhandel',
      description: 'Wenn Sie die besten CBD-Harze auf dem Markt suchen, vertrauen Sie Greens Farmhouse. Wir sind spezialisiert auf CBD-Harze im Großhandel und garantieren das beste Preis-Leistungs-Verhältnis.',
      metaTitle: 'CBD Harze Großhandel | Premium Haschisch | Greens Farmhouse',
      metaDescription: 'CBD-Harze und Haschisch im Großhandel zu besten Preisen. Afghan Hash, Ketama, Pollen CBD & mehr. Laborgetestet.',
    },
    'cbd-oils': {
      name: 'CBD Öle Großhandel',
      description: 'Wir wählen unsere Partner mit größter Sorgfalt aus und können so CBD-Öle höchster Qualität anbieten, die alle Qualitäts- und Legalitätskriterien erfüllen.',
      metaTitle: 'CBD Öle Großhandel | Bio Hanföl | Greens Farmhouse',
      metaDescription: 'CBD-Öle im Großhandel von 5% bis 20%. Pro Liter oder in Flaschen. Bio-Hanföle, laborgetestet.',
    },
    'cbd-gummies': {
      name: 'CBD Gummis Großhandel',
      description: 'CBD-Gummis bieten alle Vorteile von CBD auf diskrete und genussvolle Weise. Unsere CBD-Gummis im Großhandel sind legal mit THC unter 0,3%.',
      metaTitle: 'CBD Gummis Großhandel | CBD Bonbons | Greens Farmhouse',
      metaDescription: 'CBD-Gummis und Bonbons im Großhandel. Vollspektrum, laborgetestet. Beste Großhandelspreise.',
    },
    'thc-gummies': {
      name: 'THC Gummis Großhandel',
      description: 'Entdecken Sie unsere exklusive THC-Bonbon-Kollektion für Profis. Jeder Bonbon ist sorgfältig in verschiedenen Stärken formuliert. EU-konform.',
      metaTitle: 'THC Gummis Großhandel | Legal EU | Greens Farmhouse',
      metaDescription: 'Legale THC-Gummis im Großhandel. EU-konform. Verschiedene Geschmacksrichtungen. Professionelle Großhandelspreise.',
    },
  },
  nl: {
    'cbd-flowers': {
      name: 'CBD Bloemen Groothandel',
      description: 'Premium CBD-bloemen met de grootste zorg geselecteerd. Dankzij dagelijkse controle van onze partnerboerderijen garanderen wij constante kwaliteit conform Europese wetgeving.',
      metaTitle: 'CBD Bloemen Groothandel | Premium Hennepbloemen | Greens Farmhouse',
      metaDescription: 'Koop premium CBD-bloemen in de groothandel. Kas- & binnenteeltvariëteiten: OG Kush, Gorilla Glue, Wedding Cake & meer.',
    },
    'cbd-resins': {
      name: 'CBD Harsen Groothandel',
      description: 'Als u op zoek bent naar de beste CBD-harsen op de markt, vertrouw dan op Greens Farmhouse. Wij zijn gespecialiseerd in CBD-harsen groothandel.',
      metaTitle: 'CBD Harsen Groothandel | Premium Hasj | Greens Farmhouse',
      metaDescription: 'CBD-harsen en hasj groothandel tegen de beste prijzen. Afghan Hash, Ketama, Pollen CBD & meer. Labgetest.',
    },
    'cbd-oils': {
      name: 'CBD Oliën Groothandel',
      description: 'Wij selecteren onze partners met de grootste zorg, waardoor wij CBD-oliën van de hoogste kwaliteit kunnen aanbieden die voldoen aan alle kwaliteits- en legaliteitscriteria.',
      metaTitle: 'CBD Oliën Groothandel | Biologische Hennepolie | Greens Farmhouse',
      metaDescription: 'CBD-oliën groothandel van 5% tot 20%. Per liter of in flessen. Biologische hennepoliën, labgetest.',
    },
    'cbd-gummies': {
      name: 'CBD Gummies Groothandel',
      description: 'CBD-gummies bieden alle voordelen van CBD op een discrete en lekkere manier. Onze CBD-gummies groothandel zijn legaal met THC onder 0,3%.',
      metaTitle: 'CBD Gummies Groothandel | CBD Snoepjes | Greens Farmhouse',
      metaDescription: 'CBD-gummies en snoepjes groothandel. Volledig spectrum, labgetest. Beste groothandelsprijzen.',
    },
    'thc-gummies': {
      name: 'THC Gummies Groothandel',
      description: 'Ontdek onze exclusieve THC-snoepjescollectie voor professionals. Elk snoepje is zorgvuldig geformuleerd. EU-conform.',
      metaTitle: 'THC Gummies Groothandel | Legaal EU | Greens Farmhouse',
      metaDescription: 'Legale THC-gummies groothandel. EU-conform. Meerdere smaken. Professionele groothandelsprijzen.',
    },
  },
  it: {
    'cbd-flowers': {
      name: 'Fiori CBD all\'Ingrosso',
      description: 'Fiori CBD premium selezionati con la massima cura. Grazie al monitoraggio quotidiano delle nostre fattorie partner, garantiamo qualità costante conforme alla legislazione europea.',
      metaTitle: 'Fiori CBD all\'Ingrosso | Fiori di Canapa Premium | Greens Farmhouse',
      metaDescription: 'Acquista fiori CBD all\'ingrosso. Varietà serra e indoor: OG Kush, Gorilla Glue, Wedding Cake e altro. Migliori prezzi per professionisti.',
    },
    'cbd-resins': {
      name: 'Resine CBD all\'Ingrosso',
      description: 'Se cercate le migliori resine CBD sul mercato, affidatevi a Greens Farmhouse. Siamo specializzati in resine CBD all\'ingrosso e garantiamo il miglior rapporto qualità-prezzo.',
      metaTitle: 'Resine CBD all\'Ingrosso | Hashish Premium | Greens Farmhouse',
      metaDescription: 'Resine CBD e hashish all\'ingrosso ai migliori prezzi. Afghan Hash, Ketama, Polline CBD e altro. Testato in laboratorio.',
    },
    'cbd-oils': {
      name: 'Oli CBD all\'Ingrosso',
      description: 'Selezioniamo i nostri partner con la massima cura, permettendoci di offrire oli CBD della massima qualità che soddisfano tutti i criteri di qualità e legalità.',
      metaTitle: 'Oli CBD all\'Ingrosso | Olio di Canapa Bio | Greens Farmhouse',
      metaDescription: 'Oli CBD all\'ingrosso dal 5% al 20%. Al litro o in bottiglie. Oli di canapa biologici, testati in laboratorio.',
    },
    'cbd-gummies': {
      name: 'Caramelle CBD all\'Ingrosso',
      description: 'Le caramelle CBD offrono tutti i benefici del CBD in modo discreto e gourmet. Le nostre caramelle CBD all\'ingrosso sono legali con THC inferiore allo 0,3%.',
      metaTitle: 'Caramelle CBD all\'Ingrosso | Gummies CBD | Greens Farmhouse',
      metaDescription: 'Caramelle e gummies CBD all\'ingrosso. Spettro completo, testati in laboratorio. Migliori prezzi all\'ingrosso.',
    },
    'thc-gummies': {
      name: 'Caramelle THC all\'Ingrosso',
      description: 'Scoprite la nostra collezione esclusiva di caramelle THC per professionisti. Ogni caramella è formulata con diversi livelli di potenza. Conforme alla legislazione europea.',
      metaTitle: 'Caramelle THC all\'Ingrosso | Legale UE | Greens Farmhouse',
      metaDescription: 'Caramelle THC legali all\'ingrosso. Conformi alle normative UE. Diversi gusti. Prezzi all\'ingrosso professionali.',
    },
  },
  fi: {
    'cbd-flowers': {
      name: 'CBD-kukat Tukkuhintaan',
      description: 'Premium CBD-kukat valittu suurimmalla huolella. Päivittäisen seurannan ansiosta takaamme tasaisen laadun eurooppalaisen lainsäädännön mukaisesti.',
      metaTitle: 'CBD-kukat Tukkuhintaan | Premium Hamppukukat | Greens Farmhouse',
      metaDescription: 'Osta premium CBD-kukkia tukkuhintaan. Kasvihuone- ja sisälajikkeet: OG Kush, Gorilla Glue, Wedding Cake ja lisää.',
    },
    'cbd-resins': {
      name: 'CBD-hartsit Tukkuhintaan',
      description: 'Jos etsit markkinoiden parhaita CBD-hartseja, luota Greens Farmhouseiin. Olemme erikoistuneet CBD-hartsien tukkumyyntiin.',
      metaTitle: 'CBD-hartsit Tukkuhintaan | Premium Hasis | Greens Farmhouse',
      metaDescription: 'CBD-hartsit ja hasis tukkuhintaan parhaaseen hintaan. Afghan Hash, Ketama, Siitepöly CBD ja lisää. Laboratoriotestattu.',
    },
    'cbd-oils': {
      name: 'CBD-öljyt Tukkuhintaan',
      description: 'Valitsemme kumppanimme suurimmalla huolella tarjoten korkeimman laadun CBD-öljyjä, jotka täyttävät kaikki laatu- ja laillisuuskriteerit.',
      metaTitle: 'CBD-öljyt Tukkuhintaan | Luomu Hampputöljy | Greens Farmhouse',
      metaDescription: 'CBD-öljyt tukkuhintaan 5%–20%. Litrittain tai pulloissa. Luomuhampputöljyt, laboratoriotestatut.',
    },
    'cbd-gummies': {
      name: 'CBD-karkit Tukkuhintaan',
      description: 'CBD-karkit tarjoavat kaikki CBD:n hyödyt huomaamattomalla ja herkullisella tavalla. CBD-karkkimme ovat laillisia THC-pitoisuudella alle 0,3%.',
      metaTitle: 'CBD-karkit Tukkuhintaan | CBD-makeiset | Greens Farmhouse',
      metaDescription: 'CBD-karkkeja ja -makeisia tukkuhintaan. Täyden spektrin, laboratoriotestattu. Parhaat tukkuhinnat.',
    },
    'thc-gummies': {
      name: 'THC-karkit Tukkuhintaan',
      description: 'Tutustu eksklusiiviseen THC-karkkikokoelmaamme ammattilaisille. Jokainen karkki on huolellisesti formuloitu eri tehokkuustasoilla. EU-säännösten mukainen.',
      metaTitle: 'THC-karkit Tukkuhintaan | Laillinen EU | Greens Farmhouse',
      metaDescription: 'Lailliset THC-karkit tukkuhintaan. EU-säännösten mukaiset. Useita makuja. Ammattimaiset tukkuhinnat.',
    },
  },
  pt: {
    'cbd-flowers': {
      name: 'Flores CBD por Grosso',
      description: 'Flores CBD premium selecionadas com o maior cuidado. Graças ao acompanhamento diário das nossas quintas parceiras, garantimos qualidade constante conforme a legislação europeia.',
      metaTitle: 'Flores CBD por Grosso | Flores de Cânhamo Premium | Greens Farmhouse',
      metaDescription: 'Compre flores CBD por grosso. Variedades estufa e interior: OG Kush, Gorilla Glue, Wedding Cake e mais. Melhores preços para profissionais.',
    },
    'cbd-resins': {
      name: 'Resinas CBD por Grosso',
      description: 'Se procura as melhores resinas CBD do mercado, confie no Greens Farmhouse. Somos especializados em resinas CBD por grosso e garantimos a melhor relação qualidade-preço.',
      metaTitle: 'Resinas CBD por Grosso | Haxixe Premium | Greens Farmhouse',
      metaDescription: 'Resinas CBD e haxixe por grosso aos melhores preços. Afghan Hash, Ketama, Pólen CBD e mais. Testado em laboratório.',
    },
    'cbd-oils': {
      name: 'Óleos CBD por Grosso',
      description: 'Selecionamos os nossos parceiros com o maior cuidado, permitindo-nos oferecer óleos CBD da mais alta qualidade que cumprem todos os critérios de qualidade e legalidade.',
      metaTitle: 'Óleos CBD por Grosso | Óleo de Cânhamo Bio | Greens Farmhouse',
      metaDescription: 'Óleos CBD por grosso de 5% a 20%. Por litro ou em frascos. Óleos de cânhamo biológicos, testados em laboratório.',
    },
    'cbd-gummies': {
      name: 'Gomas CBD por Grosso',
      description: 'As gomas CBD oferecem todos os benefícios do CBD de forma discreta e gourmet. As nossas gomas CBD por grosso são legais com THC inferior a 0,3%.',
      metaTitle: 'Gomas CBD por Grosso | Rebuçados CBD | Greens Farmhouse',
      metaDescription: 'Gomas e rebuçados CBD por grosso. Espectro completo, testados em laboratório. Melhores preços por grosso.',
    },
    'thc-gummies': {
      name: 'Gomas THC por Grosso',
      description: 'Descubra a nossa coleção exclusiva de gomas THC para profissionais. Cada goma é formulada com vários níveis de potência. Conforme a legislação europeia.',
      metaTitle: 'Gomas THC por Grosso | Legal UE | Greens Farmhouse',
      metaDescription: 'Gomas THC legais por grosso. Conformes com a regulamentação europeia. Vários sabores. Preços por grosso profissionais.',
    },
  },
};
