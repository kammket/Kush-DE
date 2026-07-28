import type { Locale } from '../../i18n/config';

// Long-form marketing/SEO content rendered below the product grid on
// collection pages. HTML strings; internal links use root-relative paths
// and are locale-prefixed at render time by the page.
export const categorySeoContent: Partial<Record<Locale, Record<string, string>>> = {
  en: {
    'cbd-flowers': `
      <h3>Why Retailers Choose Our Wholesale CBD Flowers</h3>
      <p>CBD flowers are the best-selling category in every European CBD shop, and margins depend entirely on your supplier. We grow with partner farms under daily monitoring, so every batch of <a href="/cbd-hemp-flowers-greenhouse">greenhouse CBD flowers</a> (from €0.19/g) and <a href="/cbd-hemp-flowers-indoor">indoor CBD flowers</a> arrives lab-tested, compliant with EU law (&lt;0.3% THC), and consistent from one order to the next. Popular strains like OG Kush, Gelato, Gorilla Glue, White Widow and Jack Herer are permanently in stock.</p>
      <h3>Bulk Pricing That Scales With You</h3>
      <p>Order from 25g to test a strain, or move to <a href="/cbd-flowers-bulk-europe">bulk CBD flowers</a> by the kilo for the best rates — most of our retail partners see 50–200% margins at recommended resale prices. Every order ships within 24 hours from our French warehouse to the whole of <a href="/wholesale-cbd-flowers-europe">Europe</a>. New to the category? Start with our Flower Discovery Pack, or pair flowers with <a href="/collections/cbd-resins">CBD resins</a> — the two categories share the same customers.</p>`,
    'cbd-resins': `
      <h3>Traditional Hash Quality, Modern Compliance</h3>
      <p>Our wholesale CBD resins cover the full spectrum tobacco shops and CBD stores ask for: traditional-style <strong>Afghan Hash</strong>, <strong>Ketama</strong> and <strong>King Hassan</strong>, affordable Skuff pollen, and ultra-premium concentrates like 85% CBD crumbles and MoonRock. Every reference is lab-tested and EU-compliant, and our <strong>0% THC line</strong> (25–50% CBD) is made for markets with the strictest regulations.</p>
      <h3>Higher Margins Per Gram</h3>
      <p>Resins are the highest-margin product family in the CBD retail business: compact to ship, easy to store, and familiar to a large customer base. Combine them with <a href="/collections/cbd-flowers">wholesale CBD flowers</a> for a complete smoking range, or explore our <a href="/cbd-wholesaler-organic">organic CBD selection</a>. Not sure where to start? The Resin Discovery Pack lets you sample the best sellers before committing to volume.</p>`,
    'cbd-oils': `
      <h3>From Bulk Liters to Retail-Ready Bottles</h3>
      <p>We supply wholesale CBD oil in two formats: <strong>bulk per liter</strong> (5%, 10%, 20% — ideal for white-label bottling under your own brand) and <strong>retail-ready organic bottles</strong> made from European hemp with full-spectrum extract. Flavored lines in cherry, mint and peach consistently outsell natural in tobacco shops, and our CBD+CBN+melatonin sleep formula opens the fast-growing sleep-support segment.</p>
      <h3>White Label & Product Formulation</h3>
      <p>Building your own brand? Our 90% CBD distillate and 99.8% CBD isolate give manufacturers a pure, documented base for any formulation. Every batch ships with lab certificates. Round out your shelf with <a href="/collections/cbd-gummies">CBD gummies</a> — the natural cross-sell for oil customers — and see our <a href="/cbd-wholesaler-organic">organic CBD range</a> for certified-organic references.</p>`,
    'cbd-gummies': `
      <h3>The Fastest-Growing CBD Category in Europe</h3>
      <p>CBD edibles are where new customers start: discreet, pre-dosed, and pleasant to take. Our wholesale CBD gummies deliver 30mg full-spectrum CBD per piece (1400mg per pack) in strawberry and banana, plus a <strong>melatonin night formula</strong> for the sleep-support market. All references are EU-compliant with &lt;0.3% THC and ship with lab certificates.</p>
      <h3>Perfect Impulse Buys at the Counter</h3>
      <p>Retailers place gummies at the register for a reason — they are the highest-rotation impulse product in the CBD shop. Pair them with <a href="/collections/cbd-oils">CBD oils</a> for wellness customers, or add our <a href="/collections/thc-gummies">legal THC gummies</a> for customers looking for stronger effects. Free delivery over €150, shipped within 24 hours across <a href="/wholesale-cbd-flowers-europe">Europe</a>.</p>`,
    'thc-gummies': `
      <h3>Legal THC Edibles for the EU Market</h3>
      <p>Our THC gummies collection is fully compliant with European legislation — every product contains less than 0.20% THC while delivering precisely dosed effects (10mg, 25mg and 50mg per piece). Flavors like peach mimosa, sour diesel apple and kush berries are developed for adult consumers who want a controlled, repeatable experience, plus original formats like THC popcorn and chocolate balls.</p>
      <h3>A Differentiator for Your Shop</h3>
      <p>Few European shops stock legal THC edibles, which makes this category a genuine traffic driver: customers travel for it and come back for refills. Precise per-piece dosing means easy advice at the counter. Combine with <a href="/collections/cbd-gummies">CBD gummies</a> for a complete edibles wall, and check our <a href="/legal">legal guide</a> for country-specific rules. Wholesale pricing starts at 10 units.</p>`,
  },
  fr: {
    'cbd-flowers': `
      <h3>Pourquoi les détaillants choisissent nos fleurs CBD en gros</h3>
      <p>Les fleurs CBD sont la catégorie la plus vendue dans toutes les boutiques CBD d'Europe, et vos marges dépendent entièrement de votre fournisseur. Nous cultivons avec des fermes partenaires sous contrôle quotidien : chaque lot de <a href="/cbd-hemp-flowers-greenhouse">fleurs CBD sous serre</a> (dès 0,19 €/g) et de <a href="/cbd-hemp-flowers-indoor">fleurs CBD indoor</a> arrive testé en laboratoire, conforme à la législation européenne (&lt;0,3 % THC) et constant d'une commande à l'autre. Les variétés populaires comme OG Kush, Gelato, Gorilla Glue, White Widow et Jack Herer sont en stock permanent.</p>
      <h3>Des prix de gros qui évoluent avec vous</h3>
      <p>Commandez dès 25 g pour tester une variété, ou passez aux <a href="/cbd-flowers-bulk-europe">fleurs CBD en vrac</a> au kilo pour les meilleurs tarifs — la plupart de nos partenaires détaillants réalisent 50 à 200 % de marge aux prix de revente conseillés. Chaque commande part sous 24 h de notre entrepôt français vers toute l'<a href="/wholesale-cbd-flowers-europe">Europe</a>. Nouveau dans la catégorie ? Commencez par notre Pack Découverte Fleurs, ou associez les fleurs aux <a href="/collections/cbd-resins">résines CBD</a> — les deux catégories partagent la même clientèle.</p>`,
    'cbd-resins': `
      <h3>La qualité du hash traditionnel, la conformité moderne</h3>
      <p>Nos résines CBD en gros couvrent tout ce que demandent bureaux de tabac et boutiques CBD : <strong>Afghan Hash</strong>, <strong>Ketama</strong> et <strong>King Hassan</strong> de style traditionnel, pollen Skuff abordable, et concentrés ultra-premium comme les crumbles 85 % CBD et le MoonRock. Chaque référence est testée en laboratoire et conforme UE, et notre <strong>gamme 0 % THC</strong> (25–50 % CBD) est conçue pour les marchés les plus réglementés.</p>
      <h3>Des marges supérieures au gramme</h3>
      <p>Les résines sont la famille de produits la plus rentable du commerce CBD : compactes à expédier, faciles à stocker et familières pour une large clientèle. Associez-les aux <a href="/collections/cbd-flowers">fleurs CBD en gros</a> pour une gamme fumeur complète, ou explorez notre <a href="/cbd-wholesaler-organic">sélection CBD bio</a>. Vous hésitez ? Le Pack Découverte Résines permet de goûter les best-sellers avant de commander en volume.</p>`,
    'cbd-oils': `
      <h3>Du litre en vrac aux flacons prêts à vendre</h3>
      <p>Nous fournissons l'huile CBD en gros sous deux formats : <strong>en vrac au litre</strong> (5 %, 10 %, 20 % — idéal pour l'embouteillage en marque blanche) et en <strong>flacons bio prêts à la vente</strong>, issus de chanvre européen avec extrait à spectre complet. Les gammes aromatisées cerise, menthe et pêche se vendent systématiquement mieux que le naturel en bureau de tabac, et notre formule sommeil CBD+CBN+mélatonine ouvre le segment en forte croissance du soutien au sommeil.</p>
      <h3>Marque blanche et formulation</h3>
      <p>Vous créez votre marque ? Notre distillat 90 % CBD et notre isolat 99,8 % CBD offrent aux fabricants une base pure et documentée pour toute formulation. Chaque lot part avec ses certificats de laboratoire. Complétez votre rayon avec les <a href="/collections/cbd-gummies">gummies CBD</a> — la vente croisée naturelle pour les clients huile — et découvrez notre <a href="/cbd-wholesaler-organic">gamme CBD bio</a>.</p>`,
    'cbd-gummies': `
      <h3>La catégorie CBD qui croît le plus vite en Europe</h3>
      <p>Les comestibles CBD sont la porte d'entrée des nouveaux clients : discrets, pré-dosés et agréables. Nos gummies CBD en gros délivrent 30 mg de CBD à spectre complet par pièce (1400 mg par sachet) en fraise et banane, plus une <strong>formule nuit à la mélatonine</strong> pour le marché du sommeil. Toutes les références sont conformes UE (&lt;0,3 % THC) et livrées avec certificats de laboratoire.</p>
      <h3>L'achat d'impulsion parfait en caisse</h3>
      <p>Les détaillants placent les gummies près de la caisse pour une bonne raison : c'est le produit d'impulsion à plus forte rotation de la boutique CBD. Associez-les aux <a href="/collections/cbd-oils">huiles CBD</a> pour la clientèle bien-être, ou ajoutez nos <a href="/collections/thc-gummies">gummies THC légaux</a> pour les clients en quête d'effets plus marqués. Livraison gratuite dès 99 €, expédition sous 24 h dans toute l'<a href="/wholesale-cbd-flowers-europe">Europe</a>.</p>`,
    'thc-gummies': `
      <h3>Des comestibles THC légaux pour le marché européen</h3>
      <p>Notre collection de gummies THC est totalement conforme à la législation européenne : chaque produit contient moins de 0,20 % de THC tout en offrant des effets dosés avec précision (10 mg, 25 mg et 50 mg par pièce). Les saveurs pêche mimosa, pomme sour diesel et kush berries sont développées pour des consommateurs adultes recherchant une expérience contrôlée et reproductible, avec des formats originaux comme le popcorn THC et les boules de chocolat.</p>
      <h3>Un facteur de différenciation pour votre boutique</h3>
      <p>Peu de boutiques européennes proposent des comestibles THC légaux : cette catégorie attire une clientèle qui se déplace et revient. Le dosage précis par pièce facilite le conseil en caisse. Associez-les aux <a href="/collections/cbd-gummies">gummies CBD</a> pour un rayon comestibles complet, et consultez notre <a href="/legal">guide légal</a> pour les règles par pays. Tarifs de gros dès 10 unités.</p>`,
  },
  de: {
    'cbd-flowers': `
      <h3>Warum Händler unsere CBD-Blüten im Großhandel wählen</h3>
      <p>CBD-Blüten sind die meistverkaufte Kategorie in jedem europäischen CBD-Shop — und die Marge hängt vollständig vom Lieferanten ab. Wir produzieren mit Partnerfarmen unter täglicher Kontrolle: Jede Charge <a href="/cbd-hemp-flowers-greenhouse">Gewächshaus-CBD-Blüten</a> (ab 0,19 €/g) und <a href="/cbd-hemp-flowers-indoor">Indoor-CBD-Blüten</a> kommt laborgeprüft, EU-konform (&lt;0,3 % THC) und von Bestellung zu Bestellung gleichbleibend an. Beliebte Sorten wie OG Kush, Gelato, Gorilla Glue, White Widow und Jack Herer sind dauerhaft auf Lager.</p>
      <h3>Großhandelspreise, die mitwachsen</h3>
      <p>Bestellen Sie ab 25 g zum Testen einer Sorte oder wechseln Sie zu <a href="/cbd-flowers-bulk-europe">CBD-Blüten in Kilomengen</a> für die besten Konditionen — die meisten unserer Handelspartner erzielen 50–200 % Marge zu empfohlenen Wiederverkaufspreisen. Jede Bestellung verlässt unser französisches Lager innerhalb von 24 Stunden nach ganz <a href="/wholesale-cbd-flowers-europe">Europa</a>. Neu in der Kategorie? Starten Sie mit dem Blüten-Entdeckungspaket oder kombinieren Sie Blüten mit <a href="/collections/cbd-resins">CBD-Harzen</a> — beide Kategorien teilen sich dieselbe Kundschaft.</p>`,
    'cbd-resins': `
      <h3>Traditionelle Hasch-Qualität, moderne Konformität</h3>
      <p>Unsere CBD-Harze im Großhandel decken das komplette Spektrum ab, das Tabakläden und CBD-Shops nachfragen: <strong>Afghan Hash</strong>, <strong>Ketama</strong> und <strong>King Hassan</strong> im traditionellen Stil, günstigen Skuff-Pollen sowie Ultra-Premium-Konzentrate wie 85%-CBD-Crumble und MoonRock. Jede Referenz ist laborgeprüft und EU-konform; unsere <strong>0%-THC-Linie</strong> (25–50 % CBD) ist für die am strengsten regulierten Märkte gemacht.</p>
      <h3>Höhere Margen pro Gramm</h3>
      <p>Harze sind die margenstärkste Produktfamilie im CBD-Einzelhandel: kompakt im Versand, einfach zu lagern und einer breiten Kundschaft vertraut. Kombinieren Sie sie mit <a href="/collections/cbd-flowers">CBD-Blüten im Großhandel</a> zu einem kompletten Raucher-Sortiment oder entdecken Sie unsere <a href="/cbd-wholesaler-organic">Bio-CBD-Auswahl</a>. Unsicher beim Einstieg? Das Harz-Entdeckungspaket lässt Sie die Bestseller testen, bevor Sie Volumen bestellen.</p>`,
    'cbd-oils': `
      <h3>Vom Liter-Gebinde bis zur verkaufsfertigen Flasche</h3>
      <p>Wir liefern CBD-Öl im Großhandel in zwei Formaten: <strong>als Bulk pro Liter</strong> (5 %, 10 %, 20 % — ideal für White-Label-Abfüllung unter Ihrer eigenen Marke) und als <strong>verkaufsfertige Bio-Flaschen</strong> aus europäischem Hanf mit Vollspektrum-Extrakt. Die aromatisierten Linien Kirsche, Minze und Pfirsich verkaufen sich im Tabakhandel durchweg besser als Natur, und unsere CBD+CBN+Melatonin-Schlafformel erschließt das schnell wachsende Schlaf-Segment.</p>
      <h3>White Label &amp; Produktformulierung</h3>
      <p>Sie bauen eine eigene Marke auf? Unser 90%-CBD-Destillat und 99,8%-CBD-Isolat geben Herstellern eine reine, dokumentierte Basis für jede Formulierung. Jede Charge wird mit Laborzertifikaten geliefert. Ergänzen Sie Ihr Regal mit <a href="/collections/cbd-gummies">CBD-Fruchtgummis</a> — dem natürlichen Cross-Sell für Öl-Kunden — und sehen Sie sich unser <a href="/cbd-wholesaler-organic">Bio-CBD-Sortiment</a> an.</p>`,
    'cbd-gummies': `
      <h3>Die am schnellsten wachsende CBD-Kategorie Europas</h3>
      <p>CBD-Edibles sind der Einstieg für Neukunden: diskret, vordosiert und angenehm einzunehmen. Unsere CBD-Fruchtgummis im Großhandel liefern 30 mg Vollspektrum-CBD pro Stück (1400 mg pro Packung) in Erdbeere und Banane, plus eine <strong>Melatonin-Nachtformel</strong> für den Schlaf-Markt. Alle Referenzen sind EU-konform (&lt;0,3 % THC) und werden mit Laborzertifikaten geliefert.</p>
      <h3>Der perfekte Impulskauf an der Kasse</h3>
      <p>Händler platzieren Fruchtgummis aus gutem Grund an der Kasse — sie sind das Impulsprodukt mit der höchsten Rotation im CBD-Shop. Kombinieren Sie sie mit <a href="/collections/cbd-oils">CBD-Ölen</a> für Wellness-Kunden oder ergänzen Sie unsere <a href="/collections/thc-gummies">legalen THC-Fruchtgummis</a> für Kunden, die stärkere Effekte suchen. Kostenlose Lieferung ab 99 €, Versand innerhalb von 24 Stunden in ganz <a href="/wholesale-cbd-flowers-europe">Europa</a>.</p>`,
    'thc-gummies': `
      <h3>Legale THC-Edibles für den EU-Markt</h3>
      <p>Unsere THC-Fruchtgummi-Kollektion ist vollständig konform mit europäischem Recht — jedes Produkt enthält weniger als 0,20 % THC und liefert präzise dosierte Effekte (10 mg, 25 mg und 50 mg pro Stück). Geschmacksrichtungen wie Pfirsich-Mimosa, Sour-Diesel-Apfel und Kush Berries sind für erwachsene Konsumenten entwickelt, die ein kontrolliertes, wiederholbares Erlebnis wollen — dazu originelle Formate wie THC-Popcorn und Schokoladenkugeln.</p>
      <h3>Ein Alleinstellungsmerkmal für Ihren Shop</h3>
      <p>Nur wenige europäische Shops führen legale THC-Edibles — die Kategorie ist ein echter Frequenzbringer: Kunden nehmen Wege auf sich und kommen zum Nachkauf wieder. Die präzise Dosierung pro Stück macht die Beratung an der Kasse einfach. Kombinieren Sie mit <a href="/collections/cbd-gummies">CBD-Fruchtgummis</a> für eine komplette Edibles-Wand und lesen Sie unseren <a href="/legal">Rechtsguide</a> für länderspezifische Regeln. Großhandelspreise ab 10 Einheiten.</p>`,
  },
  es: {
    'cbd-flowers': `
      <h3>Por qué los minoristas eligen nuestras flores CBD al por mayor</h3>
      <p>Las flores CBD son la categoría más vendida en todas las tiendas CBD de Europa, y el margen depende por completo del proveedor. Cultivamos con granjas asociadas bajo control diario: cada lote de <a href="/cbd-hemp-flowers-greenhouse">flores CBD de invernadero</a> (desde 0,19 €/g) y de <a href="/cbd-hemp-flowers-indoor">flores CBD de interior</a> llega testado en laboratorio, conforme a la ley de la UE (&lt;0,3 % THC) y constante de un pedido a otro. Variedades populares como OG Kush, Gelato, Gorilla Glue, White Widow y Jack Herer están siempre en stock.</p>
      <h3>Precios mayoristas que crecen contigo</h3>
      <p>Pide desde 25 g para probar una variedad, o pasa a <a href="/cbd-flowers-bulk-europe">flores CBD a granel</a> por kilos para obtener las mejores tarifas — la mayoría de nuestros socios minoristas logran márgenes del 50 al 200 % a precios de reventa recomendados. Cada pedido sale en 24 h de nuestro almacén francés hacia toda <a href="/wholesale-cbd-flowers-europe">Europa</a>. ¿Nuevo en la categoría? Empieza con nuestro Pack Descubrimiento de Flores, o combina flores con <a href="/collections/cbd-resins">resinas CBD</a> — ambas categorías comparten la misma clientela.</p>`,
    'cbd-resins': `
      <h3>Calidad de hachís tradicional, conformidad moderna</h3>
      <p>Nuestras resinas CBD al por mayor cubren todo lo que piden estancos y tiendas CBD: <strong>Afghan Hash</strong>, <strong>Ketama</strong> y <strong>King Hassan</strong> de estilo tradicional, polen Skuff asequible y concentrados ultra premium como crumbles de 85 % CBD y MoonRock. Cada referencia está testada en laboratorio y es conforme UE; nuestra <strong>línea 0 % THC</strong> (25–50 % CBD) está pensada para los mercados más regulados.</p>
      <h3>Márgenes superiores por gramo</h3>
      <p>Las resinas son la familia de productos más rentable del comercio CBD: compactas para enviar, fáciles de almacenar y familiares para una amplia clientela. Combínalas con <a href="/collections/cbd-flowers">flores CBD al por mayor</a> para una gama completa de fumador, o explora nuestra <a href="/cbd-wholesaler-organic">selección CBD orgánica</a>. ¿No sabes por dónde empezar? El Pack Descubrimiento de Resinas te permite probar los superventas antes de pedir en volumen.</p>`,
    'cbd-oils': `
      <h3>Del litro a granel a la botella lista para vender</h3>
      <p>Suministramos aceite CBD al por mayor en dos formatos: <strong>a granel por litro</strong> (5 %, 10 %, 20 % — ideal para embotellado de marca blanca) y en <strong>botellas orgánicas listas para la venta</strong>, de cáñamo europeo con extracto de espectro completo. Las líneas con sabor a cereza, menta y melocotón superan sistemáticamente al natural en estancos, y nuestra fórmula de sueño CBD+CBN+melatonina abre el segmento de apoyo al sueño, en rápido crecimiento.</p>
      <h3>Marca blanca y formulación</h3>
      <p>¿Construyes tu propia marca? Nuestro destilado 90 % CBD y aislado 99,8 % CBD ofrecen a los fabricantes una base pura y documentada para cualquier formulación. Cada lote se envía con certificados de laboratorio. Completa tu estantería con <a href="/collections/cbd-gummies">gominolas CBD</a> — la venta cruzada natural para clientes de aceite — y mira nuestra <a href="/cbd-wholesaler-organic">gama CBD orgánica</a>.</p>`,
    'cbd-gummies': `
      <h3>La categoría CBD de mayor crecimiento en Europa</h3>
      <p>Los comestibles CBD son la puerta de entrada de los nuevos clientes: discretos, predosificados y agradables de tomar. Nuestras gominolas CBD al por mayor aportan 30 mg de CBD de espectro completo por pieza (1400 mg por bolsa) en fresa y plátano, más una <strong>fórmula nocturna con melatonina</strong> para el mercado del sueño. Todas las referencias son conformes UE (&lt;0,3 % THC) y se entregan con certificados de laboratorio.</p>
      <h3>La compra por impulso perfecta en caja</h3>
      <p>Los minoristas colocan las gominolas junto a la caja por una buena razón: son el producto de impulso con mayor rotación de la tienda CBD. Combínalas con <a href="/collections/cbd-oils">aceites CBD</a> para la clientela de bienestar, o añade nuestras <a href="/collections/thc-gummies">gominolas THC legales</a> para clientes que buscan efectos más intensos. Envío gratuito desde 99 €, expedición en 24 h a toda <a href="/wholesale-cbd-flowers-europe">Europa</a>.</p>`,
    'thc-gummies': `
      <h3>Comestibles THC legales para el mercado de la UE</h3>
      <p>Nuestra colección de gominolas THC cumple plenamente la legislación europea: cada producto contiene menos del 0,20 % de THC y ofrece efectos dosificados con precisión (10 mg, 25 mg y 50 mg por pieza). Sabores como melocotón mimosa, manzana sour diesel y kush berries están desarrollados para consumidores adultos que buscan una experiencia controlada y repetible, con formatos originales como palomitas THC y bolas de chocolate.</p>
      <h3>Un diferenciador para tu tienda</h3>
      <p>Pocas tiendas europeas ofrecen comestibles THC legales: esta categoría atrae a una clientela que se desplaza y vuelve a por más. La dosificación precisa por pieza facilita el consejo en caja. Combínalas con <a href="/collections/cbd-gummies">gominolas CBD</a> para un lineal de comestibles completo, y consulta nuestra <a href="/legal">guía legal</a> para las normas por país. Precios mayoristas desde 10 unidades.</p>`,
  },
  it: {
    'cbd-flowers': `
      <h3>Perché i rivenditori scelgono i nostri fiori CBD all'ingrosso</h3>
      <p>I fiori CBD sono la categoria più venduta in ogni negozio CBD europeo, e il margine dipende interamente dal fornitore. Coltiviamo con aziende agricole partner sotto controllo quotidiano: ogni lotto di <a href="/cbd-hemp-flowers-greenhouse">fiori CBD da serra</a> (da 0,19 €/g) e di <a href="/cbd-hemp-flowers-indoor">fiori CBD indoor</a> arriva testato in laboratorio, conforme alla legge UE (&lt;0,3 % THC) e costante da un ordine all'altro. Varietà popolari come OG Kush, Gelato, Gorilla Glue, White Widow e Jack Herer sono sempre disponibili.</p>
      <h3>Prezzi all'ingrosso che crescono con te</h3>
      <p>Ordina da 25 g per testare una varietà, o passa ai <a href="/cbd-flowers-bulk-europe">fiori CBD sfusi</a> al chilo per le tariffe migliori — la maggior parte dei nostri partner rivenditori realizza margini del 50–200 % ai prezzi di rivendita consigliati. Ogni ordine parte entro 24 ore dal nostro magazzino francese verso tutta l'<a href="/wholesale-cbd-flowers-europe">Europa</a>. Nuovo nella categoria? Inizia con il Pack Scoperta Fiori, o abbina i fiori alle <a href="/collections/cbd-resins">resine CBD</a> — le due categorie condividono la stessa clientela.</p>`,
    'cbd-resins': `
      <h3>Qualità dell'hashish tradizionale, conformità moderna</h3>
      <p>Le nostre resine CBD all'ingrosso coprono tutto ciò che tabaccherie e negozi CBD richiedono: <strong>Afghan Hash</strong>, <strong>Ketama</strong> e <strong>King Hassan</strong> in stile tradizionale, polline Skuff economico e concentrati ultra premium come crumble all'85 % di CBD e MoonRock. Ogni referenza è testata in laboratorio e conforme UE; la nostra <strong>linea 0 % THC</strong> (25–50 % CBD) è pensata per i mercati più regolamentati.</p>
      <h3>Margini superiori al grammo</h3>
      <p>Le resine sono la famiglia di prodotti più redditizia del commercio CBD: compatte da spedire, facili da stoccare e familiari a una vasta clientela. Abbinale ai <a href="/collections/cbd-flowers">fiori CBD all'ingrosso</a> per una gamma fumatori completa, o esplora la nostra <a href="/cbd-wholesaler-organic">selezione CBD biologica</a>. Non sai da dove iniziare? Il Pack Scoperta Resine ti permette di assaggiare i best seller prima di ordinare in volume.</p>`,
    'cbd-oils': `
      <h3>Dal litro sfuso alla bottiglia pronta per la vendita</h3>
      <p>Forniamo olio CBD all'ingrosso in due formati: <strong>sfuso al litro</strong> (5 %, 10 %, 20 % — ideale per l'imbottigliamento white label con il tuo marchio) e in <strong>bottiglie biologiche pronte per la vendita</strong>, da canapa europea con estratto a spettro completo. Le linee aromatizzate ciliegia, menta e pesca vendono sistematicamente più del naturale in tabaccheria, e la nostra formula sonno CBD+CBN+melatonina apre il segmento in rapida crescita del supporto al sonno.</p>
      <h3>White label e formulazione</h3>
      <p>Stai costruendo il tuo marchio? Il nostro distillato 90 % CBD e l'isolato 99,8 % CBD offrono ai produttori una base pura e documentata per qualsiasi formulazione. Ogni lotto viene spedito con certificati di laboratorio. Completa lo scaffale con le <a href="/collections/cbd-gummies">caramelle gommose CBD</a> — il cross-sell naturale per i clienti dell'olio — e guarda la nostra <a href="/cbd-wholesaler-organic">gamma CBD biologica</a>.</p>`,
    'cbd-gummies': `
      <h3>La categoria CBD in più rapida crescita in Europa</h3>
      <p>Gli edibili CBD sono il punto d'ingresso dei nuovi clienti: discreti, predosati e piacevoli da assumere. Le nostre caramelle gommose CBD all'ingrosso offrono 30 mg di CBD a spettro completo per pezzo (1400 mg per confezione) alla fragola e alla banana, più una <strong>formula notte alla melatonina</strong> per il mercato del sonno. Tutte le referenze sono conformi UE (&lt;0,3 % THC) e consegnate con certificati di laboratorio.</p>
      <h3>L'acquisto d'impulso perfetto in cassa</h3>
      <p>I rivenditori posizionano le caramelle gommose vicino alla cassa per una buona ragione: sono il prodotto d'impulso a più alta rotazione del negozio CBD. Abbinale agli <a href="/collections/cbd-oils">oli CBD</a> per la clientela wellness, o aggiungi le nostre <a href="/collections/thc-gummies">caramelle THC legali</a> per i clienti che cercano effetti più intensi. Consegna gratuita da 99 €, spedizione in 24 ore in tutta <a href="/wholesale-cbd-flowers-europe">Europa</a>.</p>`,
    'thc-gummies': `
      <h3>Edibili THC legali per il mercato UE</h3>
      <p>La nostra collezione di caramelle gommose THC è pienamente conforme alla legislazione europea: ogni prodotto contiene meno dello 0,20 % di THC e offre effetti dosati con precisione (10 mg, 25 mg e 50 mg per pezzo). Gusti come pesca mimosa, mela sour diesel e kush berries sono sviluppati per consumatori adulti che vogliono un'esperienza controllata e ripetibile, con formati originali come popcorn THC e palline di cioccolato.</p>
      <h3>Un elemento distintivo per il tuo negozio</h3>
      <p>Pochi negozi europei tengono edibili THC legali: questa categoria è un vero generatore di traffico — i clienti si spostano apposta e tornano per riacquistare. Il dosaggio preciso per pezzo rende semplice il consiglio in cassa. Abbina alle <a href="/collections/cbd-gummies">caramelle gommose CBD</a> per una parete edibili completa, e consulta la nostra <a href="/legal">guida legale</a> per le regole per paese. Prezzi all'ingrosso da 10 unità.</p>`,
  },
  nl: {
    'cbd-flowers': `
      <h3>Waarom retailers onze groothandel CBD-bloemen kiezen</h3>
      <p>CBD-bloemen zijn de bestverkopende categorie in elke Europese CBD-winkel, en de marge hangt volledig af van de leverancier. Wij telen met partnerboerderijen onder dagelijkse controle: elke partij <a href="/cbd-hemp-flowers-greenhouse">kas-CBD-bloemen</a> (vanaf €0,19/g) en <a href="/cbd-hemp-flowers-indoor">indoor-CBD-bloemen</a> arriveert laboratoriumgetest, conform EU-wetgeving (&lt;0,3 % THC) en constant van bestelling tot bestelling. Populaire soorten zoals OG Kush, Gelato, Gorilla Glue, White Widow en Jack Herer zijn permanent op voorraad.</p>
      <h3>Groothandelsprijzen die meegroeien</h3>
      <p>Bestel vanaf 25 g om een soort te testen, of stap over op <a href="/cbd-flowers-bulk-europe">bulk-CBD-bloemen</a> per kilo voor de beste tarieven — de meeste van onze retailpartners halen 50–200 % marge tegen aanbevolen wederverkoopprijzen. Elke bestelling verlaat ons Franse magazijn binnen 24 uur naar heel <a href="/wholesale-cbd-flowers-europe">Europa</a>. Nieuw in de categorie? Begin met het Bloemen-Ontdekkingspakket, of combineer bloemen met <a href="/collections/cbd-resins">CBD-hars</a> — beide categorieën delen dezelfde klanten.</p>`,
    'cbd-resins': `
      <h3>Traditionele hasjkwaliteit, moderne conformiteit</h3>
      <p>Onze groothandel CBD-harsen dekken het volledige spectrum dat tabakszaken en CBD-winkels vragen: <strong>Afghan Hash</strong>, <strong>Ketama</strong> en <strong>King Hassan</strong> in traditionele stijl, betaalbare Skuff-pollen en ultra-premium concentraten zoals 85 % CBD-crumble en MoonRock. Elke referentie is laboratoriumgetest en EU-conform; onze <strong>0 % THC-lijn</strong> (25–50 % CBD) is gemaakt voor de strengst gereguleerde markten.</p>
      <h3>Hogere marges per gram</h3>
      <p>Hars is de meest winstgevende productfamilie in de CBD-retail: compact te verzenden, makkelijk op te slaan en vertrouwd voor een brede klantenkring. Combineer met <a href="/collections/cbd-flowers">groothandel CBD-bloemen</a> voor een compleet rokersassortiment, of verken onze <a href="/cbd-wholesaler-organic">biologische CBD-selectie</a>. Weet u niet waar te beginnen? Met het Hars-Ontdekkingspakket proeft u de bestsellers voordat u volume bestelt.</p>`,
    'cbd-oils': `
      <h3>Van bulk-liters tot verkoopklare flesjes</h3>
      <p>Wij leveren groothandel CBD-olie in twee formaten: <strong>bulk per liter</strong> (5 %, 10 %, 20 % — ideaal voor white-label botteling onder uw eigen merk) en <strong>verkoopklare biologische flesjes</strong> van Europese hennep met volspectrumextract. De smaaklijnen kers, munt en perzik verkopen in tabakszaken consequent beter dan naturel, en onze CBD+CBN+melatonine-slaapformule opent het snelgroeiende slaapsegment.</p>
      <h3>White label &amp; productformulering</h3>
      <p>Bouwt u een eigen merk? Ons 90 % CBD-distillaat en 99,8 % CBD-isolaat geven fabrikanten een zuivere, gedocumenteerde basis voor elke formulering. Elke partij wordt geleverd met laboratoriumcertificaten. Vul uw schap aan met <a href="/collections/cbd-gummies">CBD-gummies</a> — de natuurlijke cross-sell voor olieklanten — en bekijk ons <a href="/cbd-wholesaler-organic">biologische CBD-assortiment</a>.</p>`,
    'cbd-gummies': `
      <h3>De snelst groeiende CBD-categorie van Europa</h3>
      <p>CBD-edibles zijn het startpunt voor nieuwe klanten: discreet, voorgedoseerd en aangenaam in gebruik. Onze groothandel CBD-gummies leveren 30 mg volspectrum-CBD per stuk (1400 mg per zak) in aardbei en banaan, plus een <strong>melatonine-nachtformule</strong> voor de slaapmarkt. Alle referenties zijn EU-conform (&lt;0,3 % THC) en worden geleverd met laboratoriumcertificaten.</p>
      <h3>De perfecte impulsaankoop bij de kassa</h3>
      <p>Retailers leggen gummies niet voor niets bij de kassa — het is het impulsproduct met de hoogste rotatie in de CBD-winkel. Combineer met <a href="/collections/cbd-oils">CBD-oliën</a> voor wellnessklanten, of voeg onze <a href="/collections/thc-gummies">legale THC-gummies</a> toe voor klanten die sterkere effecten zoeken. Gratis levering vanaf €150, verzending binnen 24 uur door heel <a href="/wholesale-cbd-flowers-europe">Europa</a>.</p>`,
    'thc-gummies': `
      <h3>Legale THC-edibles voor de EU-markt</h3>
      <p>Onze THC-gummiecollectie voldoet volledig aan de Europese wetgeving — elk product bevat minder dan 0,20 % THC en levert nauwkeurig gedoseerde effecten (10 mg, 25 mg en 50 mg per stuk). Smaken als perzik-mimosa, sour diesel-appel en kush berries zijn ontwikkeld voor volwassen consumenten die een gecontroleerde, herhaalbare ervaring willen, plus originele formaten zoals THC-popcorn en chocoladeballen.</p>
      <h3>Een onderscheidende factor voor uw winkel</h3>
      <p>Weinig Europese winkels voeren legale THC-edibles, wat deze categorie een echte trafficmagneet maakt: klanten reizen ervoor om en komen terug voor meer. De precieze dosering per stuk maakt advies aan de kassa eenvoudig. Combineer met <a href="/collections/cbd-gummies">CBD-gummies</a> voor een complete edibles-wand, en raadpleeg onze <a href="/legal">juridische gids</a> voor landspecifieke regels. Groothandelsprijzen vanaf 10 stuks.</p>`,
  },
  pt: {
    'cbd-flowers': `
      <h3>Porque é que os retalhistas escolhem as nossas flores CBD por grosso</h3>
      <p>As flores CBD são a categoria mais vendida em todas as lojas CBD da Europa, e a margem depende inteiramente do fornecedor. Cultivamos com quintas parceiras sob controlo diário: cada lote de <a href="/cbd-hemp-flowers-greenhouse">flores CBD de estufa</a> (desde 0,19 €/g) e de <a href="/cbd-hemp-flowers-indoor">flores CBD de interior</a> chega testado em laboratório, conforme a lei da UE (&lt;0,3 % THC) e constante de encomenda para encomenda. Variedades populares como OG Kush, Gelato, Gorilla Glue, White Widow e Jack Herer estão permanentemente em stock.</p>
      <h3>Preços grossistas que crescem consigo</h3>
      <p>Encomende a partir de 25 g para testar uma variedade, ou passe às <a href="/cbd-flowers-bulk-europe">flores CBD a granel</a> ao quilo para as melhores tarifas — a maioria dos nossos parceiros retalhistas obtém margens de 50–200 % aos preços de revenda recomendados. Cada encomenda sai em 24 h do nosso armazém francês para toda a <a href="/wholesale-cbd-flowers-europe">Europa</a>. Novo na categoria? Comece com o Pack Descoberta de Flores, ou combine flores com <a href="/collections/cbd-resins">resinas CBD</a> — as duas categorias partilham a mesma clientela.</p>`,
    'cbd-resins': `
      <h3>Qualidade de haxixe tradicional, conformidade moderna</h3>
      <p>As nossas resinas CBD por grosso cobrem todo o espetro que tabacarias e lojas CBD procuram: <strong>Afghan Hash</strong>, <strong>Ketama</strong> e <strong>King Hassan</strong> de estilo tradicional, pólen Skuff acessível e concentrados ultra premium como crumbles de 85 % CBD e MoonRock. Cada referência é testada em laboratório e conforme UE; a nossa <strong>linha 0 % THC</strong> (25–50 % CBD) foi criada para os mercados mais regulados.</p>
      <h3>Margens superiores por grama</h3>
      <p>As resinas são a família de produtos mais rentável do retalho CBD: compactas para enviar, fáceis de armazenar e familiares para uma clientela ampla. Combine-as com <a href="/collections/cbd-flowers">flores CBD por grosso</a> para uma gama de fumador completa, ou explore a nossa <a href="/cbd-wholesaler-organic">seleção CBD biológica</a>. Não sabe por onde começar? O Pack Descoberta de Resinas permite provar os best-sellers antes de encomendar em volume.</p>`,
    'cbd-oils': `
      <h3>Do litro a granel ao frasco pronto para venda</h3>
      <p>Fornecemos óleo CBD por grosso em dois formatos: <strong>a granel ao litro</strong> (5 %, 10 %, 20 % — ideal para engarrafamento white label com a sua marca) e em <strong>frascos biológicos prontos para venda</strong>, de cânhamo europeu com extrato de espetro completo. As linhas aromatizadas de cereja, menta e pêssego vendem sistematicamente mais do que o natural nas tabacarias, e a nossa fórmula de sono CBD+CBN+melatonina abre o segmento de apoio ao sono, em rápido crescimento.</p>
      <h3>White label e formulação</h3>
      <p>A construir a sua marca? O nosso destilado 90 % CBD e isolado 99,8 % CBD dão aos fabricantes uma base pura e documentada para qualquer formulação. Cada lote é enviado com certificados de laboratório. Complete a prateleira com <a href="/collections/cbd-gummies">gomas CBD</a> — o cross-sell natural para clientes de óleo — e veja a nossa <a href="/cbd-wholesaler-organic">gama CBD biológica</a>.</p>`,
    'cbd-gummies': `
      <h3>A categoria CBD que mais cresce na Europa</h3>
      <p>Os comestíveis CBD são a porta de entrada dos novos clientes: discretos, pré-doseados e agradáveis de tomar. As nossas gomas CBD por grosso fornecem 30 mg de CBD de espetro completo por unidade (1400 mg por embalagem) em morango e banana, mais uma <strong>fórmula noturna com melatonina</strong> para o mercado do sono. Todas as referências são conformes UE (&lt;0,3 % THC) e entregues com certificados de laboratório.</p>
      <h3>A compra por impulso perfeita na caixa</h3>
      <p>Os retalhistas colocam as gomas junto à caixa por uma boa razão — são o produto de impulso com maior rotação da loja CBD. Combine-as com <a href="/collections/cbd-oils">óleos CBD</a> para a clientela de bem-estar, ou acrescente as nossas <a href="/collections/thc-gummies">gomas THC legais</a> para clientes que procuram efeitos mais fortes. Entrega gratuita a partir de 99 €, expedição em 24 h para toda a <a href="/wholesale-cbd-flowers-europe">Europa</a>.</p>`,
    'thc-gummies': `
      <h3>Comestíveis THC legais para o mercado da UE</h3>
      <p>A nossa coleção de gomas THC cumpre integralmente a legislação europeia — cada produto contém menos de 0,20 % de THC e oferece efeitos doseados com precisão (10 mg, 25 mg e 50 mg por unidade). Sabores como pêssego mimosa, maçã sour diesel e kush berries foram desenvolvidos para consumidores adultos que querem uma experiência controlada e repetível, com formatos originais como pipocas THC e bolas de chocolate.</p>
      <h3>Um fator de diferenciação para a sua loja</h3>
      <p>Poucas lojas europeias têm comestíveis THC legais, o que torna esta categoria um verdadeiro gerador de tráfego: os clientes deslocam-se de propósito e voltam para reabastecer. A dosagem precisa por unidade facilita o aconselhamento na caixa. Combine com <a href="/collections/cbd-gummies">gomas CBD</a> para uma parede de comestíveis completa, e consulte o nosso <a href="/legal">guia legal</a> para as regras por país. Preços grossistas a partir de 10 unidades.</p>`,
  },
  fi: {
    'cbd-flowers': `
      <h3>Miksi jälleenmyyjät valitsevat CBD-kukkamme tukusta</h3>
      <p>CBD-kukat ovat jokaisen eurooppalaisen CBD-liikkeen myydyin kategoria, ja kate riippuu täysin toimittajasta. Viljelemme kumppanitilojen kanssa päivittäisessä valvonnassa: jokainen erä <a href="/cbd-hemp-flowers-greenhouse">kasvihuone-CBD-kukkia</a> (alkaen 0,19 €/g) ja <a href="/cbd-hemp-flowers-indoor">sisätiloissa kasvatettuja CBD-kukkia</a> saapuu laboratoriotestattuna, EU-lainsäädännön mukaisena (&lt;0,3 % THC) ja tasalaatuisena tilauksesta toiseen. Suositut lajikkeet kuten OG Kush, Gelato, Gorilla Glue, White Widow ja Jack Herer ovat jatkuvasti varastossa.</p>
      <h3>Tukkuhinnat, jotka kasvavat mukanasi</h3>
      <p>Tilaa 25 g:sta alkaen lajikkeen testaamiseen tai siirry <a href="/cbd-flowers-bulk-europe">CBD-kukkiin kiloittain</a> parhaisiin hintoihin — useimmat jälleenmyyjäkumppanimme saavuttavat 50–200 %:n katteen suositelluilla jälleenmyyntihinnoilla. Jokainen tilaus lähtee 24 tunnissa Ranskan varastostamme kaikkialle <a href="/wholesale-cbd-flowers-europe">Eurooppaan</a>. Uusi kategoriassa? Aloita kukkien tutustumispakkauksella tai yhdistä kukat <a href="/collections/cbd-resins">CBD-hartseihin</a> — kategoriat jakavat saman asiakaskunnan.</p>`,
    'cbd-resins': `
      <h3>Perinteisen hasiksen laatu, moderni vaatimustenmukaisuus</h3>
      <p>Tukku-CBD-hartsimme kattavat koko kirjon, jota tupakkakaupat ja CBD-liikkeet kysyvät: perinteistyyliset <strong>Afghan Hash</strong>, <strong>Ketama</strong> ja <strong>King Hassan</strong>, edullinen Skuff-siitepöly sekä ultra-premium-konsentraatit kuten 85 % CBD-crumblet ja MoonRock. Jokainen tuote on laboratoriotestattu ja EU-vaatimusten mukainen; <strong>0 % THC -linjamme</strong> (25–50 % CBD) on tehty tiukimmin säännellyille markkinoille.</p>
      <h3>Korkeammat katteet grammaa kohden</h3>
      <p>Hartsit ovat CBD-vähittäiskaupan kannattavin tuoteperhe: pieniä lähettää, helppoja varastoida ja tuttuja laajalle asiakaskunnalle. Yhdistä ne <a href="/collections/cbd-flowers">tukku-CBD-kukkiin</a> täydelliseksi valikoimaksi tai tutustu <a href="/cbd-wholesaler-organic">luomu-CBD-valikoimaamme</a>. Etkö tiedä mistä aloittaa? Hartsien tutustumispakkauksella maistat bestsellerit ennen volyymiostoja.</p>`,
    'cbd-oils': `
      <h3>Bulkkilitroista myyntivalmiisiin pulloihin</h3>
      <p>Toimitamme CBD-öljyä tukusta kahdessa muodossa: <strong>bulkkina litroittain</strong> (5 %, 10 %, 20 % — ihanteellinen private label -pullotukseen omalla brändilläsi) ja <strong>myyntivalmiissa luomupulloissa</strong> eurooppalaisesta hampusta täyden spektrin uutteella. Kirsikan, mintun ja persikan makuiset linjat myyvät tupakkakaupoissa johdonmukaisesti paremmin kuin maustamaton, ja CBD+CBN+melatoniini-uniformulamme avaa nopeasti kasvavan unituotesegmentin.</p>
      <h3>Private label ja tuoteformulointi</h3>
      <p>Rakennatko omaa brändiä? 90 % CBD-tisleemme ja 99,8 % CBD-isolaattimme antavat valmistajille puhtaan, dokumentoidun pohjan mihin tahansa formulaatioon. Jokainen erä toimitetaan laboratoriotodistuksineen. Täydennä hyllysi <a href="/collections/cbd-gummies">CBD-kumikarkeilla</a> — luonteva lisämyynti öljyasiakkaille — ja katso <a href="/cbd-wholesaler-organic">luomu-CBD-valikoimamme</a>.</p>`,
    'cbd-gummies': `
      <h3>Euroopan nopeimmin kasvava CBD-kategoria</h3>
      <p>CBD-syötävät ovat uusien asiakkaiden ensiaskel: huomaamattomia, valmiiksi annosteltuja ja miellyttäviä käyttää. Tukku-CBD-kumikarkkimme sisältävät 30 mg täyden spektrin CBD:tä per karkki (1400 mg per pussi) mansikan ja banaanin makuisina, sekä <strong>melatoniini-yöformulan</strong> unimarkkinoille. Kaikki tuotteet ovat EU-vaatimusten mukaisia (&lt;0,3 % THC) ja toimitetaan laboratoriotodistuksineen.</p>
      <h3>Täydellinen heräteostos kassalla</h3>
      <p>Jälleenmyyjät sijoittavat kumikarkit kassalle hyvästä syystä — ne ovat CBD-liikkeen nopeimmin kiertävä heräteostotuote. Yhdistä ne <a href="/collections/cbd-oils">CBD-öljyihin</a> hyvinvointiasiakkaille tai lisää <a href="/collections/thc-gummies">lailliset THC-kumikarkkimme</a> vahvempia vaikutuksia etsiville. Ilmainen toimitus yli 99 €:n tilauksiin, lähetys 24 tunnissa kaikkialle <a href="/wholesale-cbd-flowers-europe">Eurooppaan</a>.</p>`,
    'thc-gummies': `
      <h3>Laillisia THC-syötäviä EU-markkinoille</h3>
      <p>THC-kumikarkkikokoelmamme on täysin eurooppalaisen lainsäädännön mukainen — jokainen tuote sisältää alle 0,20 % THC:tä ja tarjoaa tarkasti annostellut vaikutukset (10 mg, 25 mg ja 50 mg per karkki). Maut kuten persikka-mimosa, sour diesel -omena ja kush berries on kehitetty aikuisille kuluttajille, jotka haluavat hallitun ja toistettavan kokemuksen, lisäksi omaperäiset muodot kuten THC-popcorn ja suklaapallot.</p>
      <h3>Erottautumistekijä liikkeellesi</h3>
      <p>Harva eurooppalainen liike myy laillisia THC-syötäviä, mikä tekee kategoriasta todellisen asiakasvirran tuojan: asiakkaat matkustavat sen perässä ja palaavat täydennysostoksille. Tarkka annostus per karkki tekee neuvonnasta kassalla helppoa. Yhdistä <a href="/collections/cbd-gummies">CBD-kumikarkkeihin</a> täydelliseksi syötävien valikoimaksi ja katso <a href="/legal">lakioppaamme</a> maakohtaisiin sääntöihin. Tukkuhinnat alkaen 10 kappaleesta.</p>`,
  },
};

export function getCategorySeoContent(locale: Locale, slug: string): string | undefined {
  return categorySeoContent[locale]?.[slug] ?? categorySeoContent.en?.[slug];
}
