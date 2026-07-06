import type { Locale } from '../../i18n/config';

export interface CategoryFaqItem {
  question: string;
  answer: string;
}

// categoryFaqs[locale][categorySlug] = FAQ items (4 per category)
export const categoryFaqs: Record<Locale, Record<string, CategoryFaqItem[]>> = {
  en: {
    'cbd-flowers': [
      { question: 'What is the minimum order for wholesale CBD flowers?', answer: 'You can order from as little as 25g to test a strain. Bulk pricing kicks in from 1kg, with the best rates at 5kg and 10kg+.' },
      { question: 'Are your CBD flowers lab-tested and legal in the EU?', answer: 'Yes — every batch is independently lab-tested and verified below the 0.3% legal THC limit, with a certificate of analysis available on request.' },
      { question: 'How fast do CBD flower orders ship?', answer: 'Within 24 hours from our French warehouse, with tracking, to anywhere in Europe. Free delivery applies to orders over €99.' },
      { question: 'Can I try a sample before ordering in bulk?', answer: "Yes — our Flower Discovery Pack and custom sample packs let you test strains before committing to a wholesale order." },
    ],
    'cbd-resins': [
      { question: 'What is the minimum order for wholesale CBD resins?', answer: 'Orders start from 10g for testing, with wholesale pricing improving at 100g and 1kg+ for hash, pollen, and premium concentrates.' },
      { question: 'Are your CBD resins lab-tested and legal in the EU?', answer: 'Yes — every batch is independently lab-tested, with THC verified below the 0.3% legal limit. Our 0% THC line is guaranteed THC-free by certificate.' },
      { question: 'How fast do CBD resin orders ship?', answer: 'Within 24 hours from our French warehouse, with tracking, across Europe. Free delivery applies to orders over €99.' },
      { question: 'Can I try a sample before ordering resins in bulk?', answer: 'Yes — our Resin Discovery Pack lets you sample hash, pollen, and premium concentrates before a larger order.' },
    ],
    'cbd-oils': [
      { question: 'What is the minimum order for wholesale CBD oils?', answer: 'Retail bottles can be ordered individually; bulk oil for white-label starts at 1 liter, roughly 100 retail bottles.' },
      { question: 'Are your CBD oils lab-tested and legal in the EU?', answer: 'Yes — every batch is independently lab-tested for cannabinoid content and THC compliance below the 0.3% legal limit.' },
      { question: 'How fast do CBD oil orders ship?', answer: 'Within 24 hours from our French warehouse, with tracking, to anywhere in Europe. Free delivery applies to orders over €99.' },
      { question: 'Can I get samples of CBD oil before a wholesale order?', answer: 'Yes — single retail bottles are available to test a concentration or flavor before ordering in bulk or per liter.' },
    ],
    'cbd-gummies': [
      { question: 'What is the minimum order for wholesale CBD gummies?', answer: 'Gummies are sold by the pack, with better wholesale pricing from 10+ packs and further discounts at higher volumes.' },
      { question: 'Are your CBD gummies lab-tested and legal in the EU?', answer: 'Yes — every batch is independently lab-tested and verified below the 0.3% legal THC limit, including our melatonin sleep formula.' },
      { question: 'How fast do CBD gummy orders ship?', answer: 'Within 24 hours from our French warehouse, with tracking, across Europe. Free delivery applies to orders over €99.' },
      { question: 'Can I sample CBD gummies before a bulk order?', answer: 'Yes — order a small quantity first, or ask us on WhatsApp about combining flavors in a starter order.' },
    ],
    'thc-gummies': [
      { question: 'What is the minimum order for legal THC gummies?', answer: 'Wholesale pricing starts at 10 units, with better rates at higher volumes across our 10mg, 25mg, and 50mg lines.' },
      { question: 'Are these THC gummies actually legal in the EU?', answer: 'Yes — every product contains less than 0.20% THC, fully compliant with European legislation, verified by independent lab certificate.' },
      { question: 'How fast do THC gummy orders ship?', answer: 'Within 24 hours from our French warehouse, with tracking, across Europe. Free delivery applies to orders over €99.' },
      { question: 'Can I try a sample before ordering THC gummies wholesale?', answer: 'Yes — message us on WhatsApp for a small starter order across flavors and strengths before committing to volume.' },
    ],
  },
  fr: {
    'cbd-flowers': [
      { question: 'Quelle est la commande minimum pour les fleurs CBD en gros ?', answer: 'Vous pouvez commander dès 25g pour tester une variété. Les tarifs de gros s\'appliquent à partir de 1kg, avec les meilleurs prix à 5kg et 10kg+.' },
      { question: 'Vos fleurs CBD sont-elles testées en laboratoire et légales dans l\'UE ?', answer: 'Oui — chaque lot est testé indépendamment en laboratoire et vérifié sous la limite légale de 0,3 % de THC, avec certificat d\'analyse disponible sur demande.' },
      { question: 'Quel est le délai d\'expédition des commandes de fleurs CBD ?', answer: 'Sous 24 heures depuis notre entrepôt français, avec suivi, vers toute l\'Europe. Livraison gratuite dès 99 €.' },
      { question: 'Puis-je essayer un échantillon avant de commander en gros ?', answer: 'Oui — notre Pack Découverte Fleurs et nos packs d\'échantillons sur mesure permettent de tester les variétés avant de commander en gros.' },
    ],
    'cbd-resins': [
      { question: 'Quelle est la commande minimum pour les résines CBD en gros ?', answer: 'Les commandes démarrent à 10g pour tester, avec des tarifs de gros améliorés à 100g et 1kg+ pour le hash, le pollen et les concentrés premium.' },
      { question: 'Vos résines CBD sont-elles testées en laboratoire et légales dans l\'UE ?', answer: 'Oui — chaque lot est testé indépendamment, avec un THC vérifié sous la limite légale de 0,3 %. Notre gamme 0 % THC est garantie sans THC par certificat.' },
      { question: 'Quel est le délai d\'expédition des commandes de résines CBD ?', answer: 'Sous 24 heures depuis notre entrepôt français, avec suivi, dans toute l\'Europe. Livraison gratuite dès 99 €.' },
      { question: 'Puis-je essayer un échantillon avant de commander des résines en gros ?', answer: 'Oui — notre Pack Découverte Résines permet de goûter hash, pollen et concentrés premium avant une commande plus importante.' },
    ],
    'cbd-oils': [
      { question: 'Quelle est la commande minimum pour les huiles CBD en gros ?', answer: 'Les flacons de détail peuvent être commandés à l\'unité ; l\'huile en vrac pour marque blanche démarre à 1 litre, soit environ 100 flacons de détail.' },
      { question: 'Vos huiles CBD sont-elles testées en laboratoire et légales dans l\'UE ?', answer: 'Oui — chaque lot est testé indépendamment pour sa teneur en cannabinoïdes et sa conformité THC sous la limite légale de 0,3 %.' },
      { question: 'Quel est le délai d\'expédition des commandes d\'huile CBD ?', answer: 'Sous 24 heures depuis notre entrepôt français, avec suivi, vers toute l\'Europe. Livraison gratuite dès 99 €.' },
      { question: 'Puis-je obtenir des échantillons d\'huile CBD avant une commande en gros ?', answer: 'Oui — des flacons de détail individuels sont disponibles pour tester une concentration ou un arôme avant de commander en gros ou au litre.' },
    ],
    'cbd-gummies': [
      { question: 'Quelle est la commande minimum pour les gummies CBD en gros ?', answer: 'Les gummies sont vendus par sachet, avec de meilleurs tarifs de gros dès 10+ sachets et des remises supplémentaires en volume.' },
      { question: 'Vos gummies CBD sont-ils testés en laboratoire et légaux dans l\'UE ?', answer: 'Oui — chaque lot est testé indépendamment et vérifié sous la limite légale de 0,3 % de THC, y compris notre formule sommeil à la mélatonine.' },
      { question: 'Quel est le délai d\'expédition des commandes de gummies CBD ?', answer: 'Sous 24 heures depuis notre entrepôt français, avec suivi, dans toute l\'Europe. Livraison gratuite dès 99 €.' },
      { question: 'Puis-je échantillonner les gummies CBD avant une commande en gros ?', answer: 'Oui — commandez d\'abord une petite quantité, ou demandez-nous sur WhatsApp de combiner les saveurs dans une commande de démarrage.' },
    ],
    'thc-gummies': [
      { question: 'Quelle est la commande minimum pour les gummies THC légaux ?', answer: 'Les tarifs de gros démarrent à 10 unités, avec de meilleurs prix en volume sur nos gammes 10mg, 25mg et 50mg.' },
      { question: 'Ces gummies THC sont-ils vraiment légaux dans l\'UE ?', answer: 'Oui — chaque produit contient moins de 0,20 % de THC, pleinement conforme à la législation européenne, vérifié par certificat de laboratoire indépendant.' },
      { question: 'Quel est le délai d\'expédition des commandes de gummies THC ?', answer: 'Sous 24 heures depuis notre entrepôt français, avec suivi, dans toute l\'Europe. Livraison gratuite dès 99 €.' },
      { question: 'Puis-je essayer un échantillon avant de commander des gummies THC en gros ?', answer: 'Oui — écrivez-nous sur WhatsApp pour une petite commande de démarrage sur plusieurs saveurs et dosages avant de vous engager en volume.' },
    ],
  },
  de: {
    'cbd-flowers': [
      { question: 'Wie hoch ist die Mindestbestellung für CBD-Blüten im Großhandel?', answer: 'Sie können ab 25g bestellen, um eine Sorte zu testen. Großhandelspreise gelten ab 1kg, mit den besten Konditionen ab 5kg und 10kg+.' },
      { question: 'Sind Ihre CBD-Blüten laborgeprüft und in der EU legal?', answer: 'Ja — jede Charge wird unabhängig laborgeprüft und liegt nachweislich unter der gesetzlichen THC-Grenze von 0,3 %, Laborzertifikat auf Anfrage erhältlich.' },
      { question: 'Wie schnell werden CBD-Blüten-Bestellungen versandt?', answer: 'Innerhalb von 24 Stunden aus unserem französischen Lager, mit Sendungsverfolgung, in ganz Europa. Kostenloser Versand ab 99€.' },
      { question: 'Kann ich vor einer Großbestellung ein Muster testen?', answer: 'Ja — unser Blüten-Entdeckungspaket und individuelle Musterpakete lassen Sie Sorten testen, bevor Sie eine Großhandelsbestellung aufgeben.' },
    ],
    'cbd-resins': [
      { question: 'Wie hoch ist die Mindestbestellung für CBD-Harze im Großhandel?', answer: 'Bestellungen starten bei 10g zum Testen, mit besseren Großhandelspreisen ab 100g und 1kg+ für Hasch, Pollen und Premium-Konzentrate.' },
      { question: 'Sind Ihre CBD-Harze laborgeprüft und in der EU legal?', answer: 'Ja — jede Charge wird unabhängig geprüft, mit THC nachweislich unter der gesetzlichen Grenze von 0,3 %. Unsere 0%-THC-Linie ist per Zertifikat garantiert THC-frei.' },
      { question: 'Wie schnell werden CBD-Harz-Bestellungen versandt?', answer: 'Innerhalb von 24 Stunden aus unserem französischen Lager, mit Sendungsverfolgung, in ganz Europa. Kostenloser Versand ab 99€.' },
      { question: 'Kann ich vor einer Großbestellung von Harzen ein Muster testen?', answer: 'Ja — unser Harz-Entdeckungspaket lässt Sie Hasch, Pollen und Premium-Konzentrate vor einer größeren Bestellung probieren.' },
    ],
    'cbd-oils': [
      { question: 'Wie hoch ist die Mindestbestellung für CBD-Öle im Großhandel?', answer: 'Einzelhandelsflaschen können einzeln bestellt werden; Bulk-Öl für White-Label startet bei 1 Liter, etwa 100 Einzelhandelsflaschen.' },
      { question: 'Sind Ihre CBD-Öle laborgeprüft und in der EU legal?', answer: 'Ja — jede Charge wird unabhängig auf Cannabinoidgehalt und THC-Konformität unter der gesetzlichen Grenze von 0,3 % geprüft.' },
      { question: 'Wie schnell werden CBD-Öl-Bestellungen versandt?', answer: 'Innerhalb von 24 Stunden aus unserem französischen Lager, mit Sendungsverfolgung, in ganz Europa. Kostenloser Versand ab 99€.' },
      { question: 'Kann ich Muster von CBD-Öl vor einer Großhandelsbestellung erhalten?', answer: 'Ja — einzelne Einzelhandelsflaschen sind verfügbar, um eine Konzentration oder einen Geschmack zu testen, bevor Sie in Bulk oder pro Liter bestellen.' },
    ],
    'cbd-gummies': [
      { question: 'Wie hoch ist die Mindestbestellung für CBD-Fruchtgummis im Großhandel?', answer: 'Fruchtgummis werden paketweise verkauft, mit besseren Großhandelspreisen ab 10+ Paketen und weiteren Rabatten bei höheren Mengen.' },
      { question: 'Sind Ihre CBD-Fruchtgummis laborgeprüft und in der EU legal?', answer: 'Ja — jede Charge wird unabhängig geprüft und liegt nachweislich unter der gesetzlichen THC-Grenze von 0,3 %, einschließlich unserer Melatonin-Schlafformel.' },
      { question: 'Wie schnell werden CBD-Fruchtgummi-Bestellungen versandt?', answer: 'Innerhalb von 24 Stunden aus unserem französischen Lager, mit Sendungsverfolgung, in ganz Europa. Kostenloser Versand ab 99€.' },
      { question: 'Kann ich CBD-Fruchtgummis vor einer Großbestellung probieren?', answer: 'Ja — bestellen Sie zunächst eine kleine Menge, oder fragen Sie uns auf WhatsApp nach einer Starterbestellung mit gemischten Geschmacksrichtungen.' },
    ],
    'thc-gummies': [
      { question: 'Wie hoch ist die Mindestbestellung für legale THC-Fruchtgummis?', answer: 'Großhandelspreise starten bei 10 Einheiten, mit besseren Konditionen bei höheren Mengen über unsere 10mg-, 25mg- und 50mg-Linien.' },
      { question: 'Sind diese THC-Fruchtgummis wirklich in der EU legal?', answer: 'Ja — jedes Produkt enthält weniger als 0,20 % THC, vollständig konform mit europäischem Recht, verifiziert durch unabhängiges Laborzertifikat.' },
      { question: 'Wie schnell werden THC-Fruchtgummi-Bestellungen versandt?', answer: 'Innerhalb von 24 Stunden aus unserem französischen Lager, mit Sendungsverfolgung, in ganz Europa. Kostenloser Versand ab 99€.' },
      { question: 'Kann ich vor einer Großhandelsbestellung von THC-Fruchtgummis ein Muster testen?', answer: 'Ja — schreiben Sie uns auf WhatsApp für eine kleine Starterbestellung über Geschmacksrichtungen und Stärken, bevor Sie sich auf Volumen festlegen.' },
    ],
  },
  es: {
    'cbd-flowers': [
      { question: '¿Cuál es el pedido mínimo para flores CBD al por mayor?', answer: 'Puedes pedir desde 25g para probar una variedad. Los precios mayoristas se aplican desde 1kg, con las mejores tarifas a partir de 5kg y 10kg+.' },
      { question: '¿Vuestras flores CBD están testadas en laboratorio y son legales en la UE?', answer: 'Sí — cada lote se testa de forma independiente y se verifica por debajo del límite legal del 0,3 % de THC, con certificado de análisis disponible bajo petición.' },
      { question: '¿Qué rapidez tienen los envíos de flores CBD?', answer: 'En 24 horas desde nuestro almacén francés, con seguimiento, a toda Europa. Envío gratuito en pedidos superiores a 99€.' },
      { question: '¿Puedo probar una muestra antes de pedir al por mayor?', answer: 'Sí — nuestro Pack Descubrimiento de Flores y los packs de muestras a medida permiten probar variedades antes de comprometerte en un pedido mayorista.' },
    ],
    'cbd-resins': [
      { question: '¿Cuál es el pedido mínimo para resinas CBD al por mayor?', answer: 'Los pedidos empiezan en 10g para probar, con mejores precios mayoristas a partir de 100g y 1kg+ para hachís, polen y concentrados premium.' },
      { question: '¿Vuestras resinas CBD están testadas en laboratorio y son legales en la UE?', answer: 'Sí — cada lote se testa de forma independiente, con THC verificado por debajo del límite legal del 0,3 %. Nuestra línea 0 % THC está garantizada libre de THC por certificado.' },
      { question: '¿Qué rapidez tienen los envíos de resinas CBD?', answer: 'En 24 horas desde nuestro almacén francés, con seguimiento, por toda Europa. Envío gratuito en pedidos superiores a 99€.' },
      { question: '¿Puedo probar una muestra antes de pedir resinas al por mayor?', answer: 'Sí — nuestro Pack Descubrimiento de Resinas permite probar hachís, polen y concentrados premium antes de un pedido mayor.' },
    ],
    'cbd-oils': [
      { question: '¿Cuál es el pedido mínimo para aceites CBD al por mayor?', answer: 'Los frascos de venta al detalle se pueden pedir individualmente; el aceite a granel para marca blanca empieza en 1 litro, unos 100 frascos de venta.' },
      { question: '¿Vuestros aceites CBD están testados en laboratorio y son legales en la UE?', answer: 'Sí — cada lote se testa de forma independiente en contenido de cannabinoides y conformidad de THC por debajo del límite legal del 0,3 %.' },
      { question: '¿Qué rapidez tienen los envíos de aceite CBD?', answer: 'En 24 horas desde nuestro almacén francés, con seguimiento, a toda Europa. Envío gratuito en pedidos superiores a 99€.' },
      { question: '¿Puedo conseguir muestras de aceite CBD antes de un pedido mayorista?', answer: 'Sí — hay frascos de venta individuales disponibles para probar una concentración o sabor antes de pedir a granel o por litro.' },
    ],
    'cbd-gummies': [
      { question: '¿Cuál es el pedido mínimo para gominolas CBD al por mayor?', answer: 'Las gominolas se venden por paquete, con mejores precios mayoristas desde 10+ paquetes y descuentos adicionales en mayor volumen.' },
      { question: '¿Vuestras gominolas CBD están testadas en laboratorio y son legales en la UE?', answer: 'Sí — cada lote se testa de forma independiente y se verifica por debajo del límite legal del 0,3 % de THC, incluyendo nuestra fórmula nocturna con melatonina.' },
      { question: '¿Qué rapidez tienen los envíos de gominolas CBD?', answer: 'En 24 horas desde nuestro almacén francés, con seguimiento, por toda Europa. Envío gratuito en pedidos superiores a 99€.' },
      { question: '¿Puedo probar gominolas CBD antes de un pedido al por mayor?', answer: 'Sí — pide primero una pequeña cantidad, o pregúntanos por WhatsApp sobre combinar sabores en un pedido inicial.' },
    ],
    'thc-gummies': [
      { question: '¿Cuál es el pedido mínimo para gominolas THC legales?', answer: 'Los precios mayoristas empiezan en 10 unidades, con mejores tarifas en mayor volumen en nuestras líneas de 10mg, 25mg y 50mg.' },
      { question: '¿Estas gominolas THC son realmente legales en la UE?', answer: 'Sí — cada producto contiene menos del 0,20 % de THC, totalmente conforme con la legislación europea, verificado por certificado de laboratorio independiente.' },
      { question: '¿Qué rapidez tienen los envíos de gominolas THC?', answer: 'En 24 horas desde nuestro almacén francés, con seguimiento, por toda Europa. Envío gratuito en pedidos superiores a 99€.' },
      { question: '¿Puedo probar una muestra antes de pedir gominolas THC al por mayor?', answer: 'Sí — escríbenos por WhatsApp para un pequeño pedido inicial con varios sabores y potencias antes de comprometerte en volumen.' },
    ],
  },
  it: {
    'cbd-flowers': [
      { question: 'Qual è l\'ordine minimo per i fiori CBD all\'ingrosso?', answer: 'Puoi ordinare da 25g per testare una varietà. I prezzi all\'ingrosso si applicano da 1kg, con le tariffe migliori da 5kg e 10kg+.' },
      { question: 'I vostri fiori CBD sono testati in laboratorio e legali nell\'UE?', answer: 'Sì — ogni lotto è testato in modo indipendente e verificato sotto il limite legale dello 0,3% di THC, con certificato di analisi disponibile su richiesta.' },
      { question: 'Quanto velocemente vengono spediti gli ordini di fiori CBD?', answer: 'Entro 24 ore dal nostro magazzino francese, con tracciamento, in tutta Europa. Spedizione gratuita per ordini superiori a 99€.' },
      { question: 'Posso provare un campione prima di ordinare all\'ingrosso?', answer: 'Sì — il nostro Pack Scoperta Fiori e i pack campione su misura permettono di testare le varietà prima di impegnarti in un ordine all\'ingrosso.' },
    ],
    'cbd-resins': [
      { question: 'Qual è l\'ordine minimo per le resine CBD all\'ingrosso?', answer: 'Gli ordini partono da 10g per testare, con prezzi all\'ingrosso migliori da 100g e 1kg+ per hashish, polline e concentrati premium.' },
      { question: 'Le vostre resine CBD sono testate in laboratorio e legali nell\'UE?', answer: 'Sì — ogni lotto è testato in modo indipendente, con THC verificato sotto il limite legale dello 0,3%. La nostra linea 0% THC è garantita priva di THC da certificato.' },
      { question: 'Quanto velocemente vengono spediti gli ordini di resine CBD?', answer: 'Entro 24 ore dal nostro magazzino francese, con tracciamento, in tutta Europa. Spedizione gratuita per ordini superiori a 99€.' },
      { question: 'Posso provare un campione prima di ordinare resine all\'ingrosso?', answer: 'Sì — il nostro Pack Scoperta Resine permette di assaggiare hashish, polline e concentrati premium prima di un ordine più grande.' },
    ],
    'cbd-oils': [
      { question: 'Qual è l\'ordine minimo per gli oli CBD all\'ingrosso?', answer: 'I flaconi al dettaglio possono essere ordinati singolarmente; l\'olio sfuso per white label parte da 1 litro, circa 100 flaconi al dettaglio.' },
      { question: 'I vostri oli CBD sono testati in laboratorio e legali nell\'UE?', answer: 'Sì — ogni lotto è testato in modo indipendente per contenuto di cannabinoidi e conformità THC sotto il limite legale dello 0,3%.' },
      { question: 'Quanto velocemente vengono spediti gli ordini di olio CBD?', answer: 'Entro 24 ore dal nostro magazzino francese, con tracciamento, in tutta Europa. Spedizione gratuita per ordini superiori a 99€.' },
      { question: 'Posso ottenere campioni di olio CBD prima di un ordine all\'ingrosso?', answer: 'Sì — sono disponibili flaconi al dettaglio singoli per testare una concentrazione o un gusto prima di ordinare sfuso o al litro.' },
    ],
    'cbd-gummies': [
      { question: 'Qual è l\'ordine minimo per le caramelle gommose CBD all\'ingrosso?', answer: 'Le caramelle gommose sono vendute a confezione, con prezzi all\'ingrosso migliori da 10+ confezioni e ulteriori sconti a volumi maggiori.' },
      { question: 'Le vostre caramelle gommose CBD sono testate in laboratorio e legali nell\'UE?', answer: 'Sì — ogni lotto è testato in modo indipendente e verificato sotto il limite legale dello 0,3% di THC, inclusa la nostra formula notte alla melatonina.' },
      { question: 'Quanto velocemente vengono spediti gli ordini di caramelle gommose CBD?', answer: 'Entro 24 ore dal nostro magazzino francese, con tracciamento, in tutta Europa. Spedizione gratuita per ordini superiori a 99€.' },
      { question: 'Posso provare le caramelle gommose CBD prima di un ordine all\'ingrosso?', answer: 'Sì — ordina prima una piccola quantità, o chiedici su WhatsApp di combinare gusti in un ordine iniziale.' },
    ],
    'thc-gummies': [
      { question: 'Qual è l\'ordine minimo per le caramelle gommose THC legali?', answer: 'I prezzi all\'ingrosso partono da 10 unità, con tariffe migliori a volumi maggiori sulle nostre linee da 10mg, 25mg e 50mg.' },
      { question: 'Queste caramelle gommose THC sono davvero legali nell\'UE?', answer: 'Sì — ogni prodotto contiene meno dello 0,20% di THC, pienamente conforme alla legislazione europea, verificato da certificato di laboratorio indipendente.' },
      { question: 'Quanto velocemente vengono spediti gli ordini di caramelle gommose THC?', answer: 'Entro 24 ore dal nostro magazzino francese, con tracciamento, in tutta Europa. Spedizione gratuita per ordini superiori a 99€.' },
      { question: 'Posso provare un campione prima di ordinare caramelle gommose THC all\'ingrosso?', answer: 'Sì — scrivici su WhatsApp per un piccolo ordine iniziale su gusti e potenze diverse prima di impegnarti in volume.' },
    ],
  },
  nl: {
    'cbd-flowers': [
      { question: 'Wat is de minimale bestelling voor groothandel CBD-bloemen?', answer: 'U kunt vanaf 25g bestellen om een soort te testen. Groothandelsprijzen gelden vanaf 1kg, met de beste tarieven vanaf 5kg en 10kg+.' },
      { question: 'Zijn uw CBD-bloemen laboratoriumgetest en legaal in de EU?', answer: 'Ja — elke partij wordt onafhankelijk laboratoriumgetest en geverifieerd onder de wettelijke limiet van 0,3% THC, met certificaat van analyse op aanvraag.' },
      { question: 'Hoe snel worden CBD-bloembestellingen verzonden?', answer: 'Binnen 24 uur vanuit ons Franse magazijn, met tracking, naar heel Europa. Gratis verzending vanaf €99.' },
      { question: 'Kan ik een monster proberen voordat ik in bulk bestel?', answer: 'Ja — ons Bloemen-Ontdekkingspakket en aangepaste proefpakketten laten u soorten testen voordat u zich vastlegt op een groothandelsbestelling.' },
    ],
    'cbd-resins': [
      { question: 'Wat is de minimale bestelling voor groothandel CBD-hars?', answer: 'Bestellingen beginnen bij 10g om te testen, met betere groothandelsprijzen vanaf 100g en 1kg+ voor hasj, pollen en premium concentraten.' },
      { question: 'Is uw CBD-hars laboratoriumgetest en legaal in de EU?', answer: 'Ja — elke partij wordt onafhankelijk getest, met THC geverifieerd onder de wettelijke limiet van 0,3%. Onze 0% THC-lijn is gegarandeerd THC-vrij per certificaat.' },
      { question: 'Hoe snel worden CBD-harsbestellingen verzonden?', answer: 'Binnen 24 uur vanuit ons Franse magazijn, met tracking, door heel Europa. Gratis verzending vanaf €99.' },
      { question: 'Kan ik een monster proberen voordat ik hars in bulk bestel?', answer: 'Ja — ons Hars-Ontdekkingspakket laat u hasj, pollen en premium concentraten proeven voor een grotere bestelling.' },
    ],
    'cbd-oils': [
      { question: 'Wat is de minimale bestelling voor groothandel CBD-olie?', answer: 'Retailflesjes kunnen individueel worden besteld; bulkolie voor white label begint bij 1 liter, ongeveer 100 retailflesjes.' },
      { question: 'Is uw CBD-olie laboratoriumgetest en legaal in de EU?', answer: 'Ja — elke partij wordt onafhankelijk getest op cannabinoïdengehalte en THC-conformiteit onder de wettelijke limiet van 0,3%.' },
      { question: 'Hoe snel worden CBD-oliebestellingen verzonden?', answer: 'Binnen 24 uur vanuit ons Franse magazijn, met tracking, naar heel Europa. Gratis verzending vanaf €99.' },
      { question: 'Kan ik monsters van CBD-olie krijgen voor een groothandelsbestelling?', answer: 'Ja — losse retailflesjes zijn beschikbaar om een concentratie of smaak te testen voordat u in bulk of per liter bestelt.' },
    ],
    'cbd-gummies': [
      { question: 'Wat is de minimale bestelling voor groothandel CBD-gummies?', answer: 'Gummies worden per pak verkocht, met betere groothandelsprijzen vanaf 10+ pakken en verdere kortingen bij hogere volumes.' },
      { question: 'Zijn uw CBD-gummies laboratoriumgetest en legaal in de EU?', answer: 'Ja — elke partij wordt onafhankelijk getest en geverifieerd onder de wettelijke limiet van 0,3% THC, inclusief onze melatonine-nachtformule.' },
      { question: 'Hoe snel worden CBD-gummybestellingen verzonden?', answer: 'Binnen 24 uur vanuit ons Franse magazijn, met tracking, door heel Europa. Gratis verzending vanaf €99.' },
      { question: 'Kan ik CBD-gummies proberen voor een bulkbestelling?', answer: 'Ja — bestel eerst een kleine hoeveelheid, of vraag ons via WhatsApp naar het combineren van smaken in een startbestelling.' },
    ],
    'thc-gummies': [
      { question: 'Wat is de minimale bestelling voor legale THC-gummies?', answer: 'Groothandelsprijzen beginnen bij 10 stuks, met betere tarieven bij hogere volumes over onze 10mg-, 25mg- en 50mg-lijnen.' },
      { question: 'Zijn deze THC-gummies echt legaal in de EU?', answer: 'Ja — elk product bevat minder dan 0,20% THC, volledig conform de Europese wetgeving, geverifieerd door onafhankelijk laboratoriumcertificaat.' },
      { question: 'Hoe snel worden THC-gummybestellingen verzonden?', answer: 'Binnen 24 uur vanuit ons Franse magazijn, met tracking, door heel Europa. Gratis verzending vanaf €99.' },
      { question: 'Kan ik een monster proberen voordat ik THC-gummies in bulk bestel?', answer: 'Ja — stuur ons een bericht op WhatsApp voor een kleine startbestelling met verschillende smaken en sterktes voordat u zich vastlegt op volume.' },
    ],
  },
  fi: {
    'cbd-flowers': [
      { question: 'Mikä on minimitilaus CBD-kukille tukussa?', answer: 'Voit tilata jo 25g:sta lajikkeen testaamiseksi. Tukkuhinnat astuvat voimaan 1 kg:sta alkaen, parhaimmat hinnat 5 kg ja 10 kg+ tilauksille.' },
      { question: 'Ovatko CBD-kukkanne laboratoriotestattuja ja laillisia EU:ssa?', answer: 'Kyllä — jokainen erä testataan riippumattomasti ja vahvistetaan laillisen 0,3 %:n THC-rajan alle, laboratoriotodistus saatavilla pyynnöstä.' },
      { question: 'Kuinka nopeasti CBD-kukkatilaukset toimitetaan?', answer: '24 tunnin sisällä Ranskan varastostamme, seurannalla, kaikkialle Eurooppaan. Ilmainen toimitus yli 99 €:n tilauksiin.' },
      { question: 'Voinko kokeilla näytettä ennen tukkutilausta?', answer: 'Kyllä — kukkien tutustumispakkauksemme ja räätälöidyt näytepakkaukset antavat sinun testata lajikkeita ennen tukkutilaukseen sitoutumista.' },
    ],
    'cbd-resins': [
      { question: 'Mikä on minimitilaus CBD-hartseille tukussa?', answer: 'Tilaukset alkavat 10g:sta testaamiseksi, parempien tukkuhintojen astuessa voimaan 100g ja 1kg+ hasiksen, siitepölyn ja premium-konsentraattien osalta.' },
      { question: 'Ovatko CBD-hartsinne laboratoriotestattuja ja laillisia EU:ssa?', answer: 'Kyllä — jokainen erä testataan riippumattomasti, THC vahvistettuna laillisen 0,3 %:n rajan alle. 0 % THC -linjamme on taattu THC-vapaaksi todistuksella.' },
      { question: 'Kuinka nopeasti CBD-hartsitilaukset toimitetaan?', answer: '24 tunnin sisällä Ranskan varastostamme, seurannalla, kaikkialle Eurooppaan. Ilmainen toimitus yli 99 €:n tilauksiin.' },
      { question: 'Voinko kokeilla näytettä ennen hartsien tukkutilausta?', answer: 'Kyllä — hartsien tutustumispakkauksemme antaa sinun maistaa hasista, siitepölyä ja premium-konsentraatteja ennen suurempaa tilausta.' },
    ],
    'cbd-oils': [
      { question: 'Mikä on minimitilaus CBD-öljyille tukussa?', answer: 'Vähittäispulloja voi tilata yksittäin; bulkkiöljy private labelille alkaa 1 litrasta, noin 100 vähittäispulloa.' },
      { question: 'Ovatko CBD-öljynne laboratoriotestattuja ja laillisia EU:ssa?', answer: 'Kyllä — jokainen erä testataan riippumattomasti kannabinoidipitoisuuden ja THC-vaatimustenmukaisuuden osalta laillisen 0,3 %:n rajan alla.' },
      { question: 'Kuinka nopeasti CBD-öljytilaukset toimitetaan?', answer: '24 tunnin sisällä Ranskan varastostamme, seurannalla, kaikkialle Eurooppaan. Ilmainen toimitus yli 99 €:n tilauksiin.' },
      { question: 'Voinko saada CBD-öljynäytteitä ennen tukkutilausta?', answer: 'Kyllä — yksittäisiä vähittäispulloja on saatavilla pitoisuuden tai maun testaamiseen ennen bulkki- tai litratilausta.' },
    ],
    'cbd-gummies': [
      { question: 'Mikä on minimitilaus CBD-kumikarkeille tukussa?', answer: 'Kumikarkit myydään pusseittain, parempien tukkuhintojen astuessa voimaan 10+ pussista ja lisäalennuksilla suuremmilla määrillä.' },
      { question: 'Ovatko CBD-kumikarkkinne laboratoriotestattuja ja laillisia EU:ssa?', answer: 'Kyllä — jokainen erä testataan riippumattomasti ja vahvistetaan laillisen 0,3 %:n THC-rajan alle, mukaan lukien melatoniini-yöformulamme.' },
      { question: 'Kuinka nopeasti CBD-kumikarkkitilaukset toimitetaan?', answer: '24 tunnin sisällä Ranskan varastostamme, seurannalla, kaikkialle Eurooppaan. Ilmainen toimitus yli 99 €:n tilauksiin.' },
      { question: 'Voinko maistaa CBD-kumikarkkeja ennen tukkutilausta?', answer: 'Kyllä — tilaa ensin pieni määrä, tai kysy meiltä WhatsAppissa makujen yhdistämisestä aloitustilauksessa.' },
    ],
    'thc-gummies': [
      { question: 'Mikä on minimitilaus laillisille THC-kumikarkeille?', answer: 'Tukkuhinnat alkavat 10 kappaleesta, parempien hintojen ollessa saatavilla suuremmilla määrillä 10mg-, 25mg- ja 50mg-linjoillamme.' },
      { question: 'Ovatko nämä THC-kumikarkit todella laillisia EU:ssa?', answer: 'Kyllä — jokainen tuote sisältää alle 0,20 % THC:tä, täysin EU-lainsäädännön mukainen, riippumattoman laboratoriotodistuksen vahvistama.' },
      { question: 'Kuinka nopeasti THC-kumikarkkitilaukset toimitetaan?', answer: '24 tunnin sisällä Ranskan varastostamme, seurannalla, kaikkialle Eurooppaan. Ilmainen toimitus yli 99 €:n tilauksiin.' },
      { question: 'Voinko kokeilla näytettä ennen THC-kumikarkkien tukkutilausta?', answer: 'Kyllä — lähetä meille viesti WhatsAppissa pientä aloitustilausta varten eri mauilla ja vahvuuksilla ennen volyymiin sitoutumista.' },
    ],
  },
  pt: {
    'cbd-flowers': [
      { question: 'Qual é a encomenda mínima para flores CBD por grosso?', answer: 'Pode encomendar a partir de 25g para testar uma variedade. Os preços por grosso aplicam-se a partir de 1kg, com as melhores tarifas a partir de 5kg e 10kg+.' },
      { question: 'As vossas flores CBD são testadas em laboratório e legais na UE?', answer: 'Sim — cada lote é testado de forma independente e verificado abaixo do limite legal de 0,3% de THC, com certificado de análise disponível a pedido.' },
      { question: 'Com que rapidez são enviadas as encomendas de flores CBD?', answer: 'Em 24 horas a partir do nosso armazém francês, com rastreio, para toda a Europa. Envio gratuito em encomendas superiores a 99€.' },
      { question: 'Posso experimentar uma amostra antes de encomendar por grosso?', answer: 'Sim — o nosso Pack Descoberta de Flores e packs de amostras à medida permitem testar variedades antes de se comprometer numa encomenda grossista.' },
    ],
    'cbd-resins': [
      { question: 'Qual é a encomenda mínima para resinas CBD por grosso?', answer: 'As encomendas começam em 10g para testar, com melhores preços por grosso a partir de 100g e 1kg+ para haxixe, pólen e concentrados premium.' },
      { question: 'As vossas resinas CBD são testadas em laboratório e legais na UE?', answer: 'Sim — cada lote é testado de forma independente, com THC verificado abaixo do limite legal de 0,3%. A nossa linha 0% THC é garantida sem THC por certificado.' },
      { question: 'Com que rapidez são enviadas as encomendas de resinas CBD?', answer: 'Em 24 horas a partir do nosso armazém francês, com rastreio, por toda a Europa. Envio gratuito em encomendas superiores a 99€.' },
      { question: 'Posso experimentar uma amostra antes de encomendar resinas por grosso?', answer: 'Sim — o nosso Pack Descoberta de Resinas permite provar haxixe, pólen e concentrados premium antes de uma encomenda maior.' },
    ],
    'cbd-oils': [
      { question: 'Qual é a encomenda mínima para óleos CBD por grosso?', answer: 'Frascos de retalho podem ser encomendados individualmente; óleo a granel para white label começa em 1 litro, cerca de 100 frascos de retalho.' },
      { question: 'Os vossos óleos CBD são testados em laboratório e legais na UE?', answer: 'Sim — cada lote é testado de forma independente quanto ao teor de canabinoides e conformidade de THC abaixo do limite legal de 0,3%.' },
      { question: 'Com que rapidez são enviadas as encomendas de óleo CBD?', answer: 'Em 24 horas a partir do nosso armazém francês, com rastreio, para toda a Europa. Envio gratuito em encomendas superiores a 99€.' },
      { question: 'Posso obter amostras de óleo CBD antes de uma encomenda por grosso?', answer: 'Sim — frascos de retalho individuais estão disponíveis para testar uma concentração ou sabor antes de encomendar a granel ou ao litro.' },
    ],
    'cbd-gummies': [
      { question: 'Qual é a encomenda mínima para gomas CBD por grosso?', answer: 'As gomas são vendidas por embalagem, com melhores preços por grosso a partir de 10+ embalagens e descontos adicionais em volumes maiores.' },
      { question: 'As vossas gomas CBD são testadas em laboratório e legais na UE?', answer: 'Sim — cada lote é testado de forma independente e verificado abaixo do limite legal de 0,3% de THC, incluindo a nossa fórmula noturna com melatonina.' },
      { question: 'Com que rapidez são enviadas as encomendas de gomas CBD?', answer: 'Em 24 horas a partir do nosso armazém francês, com rastreio, por toda a Europa. Envio gratuito em encomendas superiores a 99€.' },
      { question: 'Posso experimentar gomas CBD antes de uma encomenda por grosso?', answer: 'Sim — encomende primeiro uma pequena quantidade, ou pergunte-nos no WhatsApp sobre combinar sabores numa encomenda inicial.' },
    ],
    'thc-gummies': [
      { question: 'Qual é a encomenda mínima para gomas THC legais?', answer: 'Os preços por grosso começam em 10 unidades, com melhores tarifas em volumes maiores nas nossas linhas de 10mg, 25mg e 50mg.' },
      { question: 'Estas gomas THC são realmente legais na UE?', answer: 'Sim — cada produto contém menos de 0,20% de THC, totalmente conforme com a legislação europeia, verificado por certificado de laboratório independente.' },
      { question: 'Com que rapidez são enviadas as encomendas de gomas THC?', answer: 'Em 24 horas a partir do nosso armazém francês, com rastreio, por toda a Europa. Envio gratuito em encomendas superiores a 99€.' },
      { question: 'Posso experimentar uma amostra antes de encomendar gomas THC por grosso?', answer: 'Sim — envie-nos mensagem no WhatsApp para uma pequena encomenda inicial com vários sabores e potências antes de se comprometer em volume.' },
    ],
  },
};

export function getCategoryFaqs(locale: Locale, slug: string): CategoryFaqItem[] {
  return categoryFaqs[locale]?.[slug] ?? categoryFaqs.en[slug] ?? [];
}
