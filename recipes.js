/**
 * Erasmus Meal Planner - Validated Week 5 Menu (Bergamo v23.0)
 * Strategy B: Opportunistic Smoothing & Budget Optimization (~7.95 € total grocery spend)
 * Reserves preserved: 5 cordons bleus, 1 saumon, 4 filets meunière, bâtonnets poisson pané.
 */

const RECIPES_DB = [
  {
    id: "cordon-bleu-pates",
    name: "Cordon bleu & pâtes au Parmigiano",
    category: "Viandes & Poêlées",
    prepTime: 12,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Féculent"],
    ingredients: [
      { name: "Cordon bleu (congélateur)", amount: 1, unit: "pièce", rayon: "Boucherie & Poisson", bought: false },
      { name: "Pâtes (stock)", amount: 90, unit: "g", rayon: "Épicerie & Féculents", bought: false },
      { name: "Parmigiano / Grana (stock)", amount: 15, unit: "g", rayon: "Crémerie & Fromages", bought: false }
    ],
    steps: [
      "1. Cuire 90g de pâtes du stock dans l'eau bouillante salée.",
      "2. Poêler 1 cordon bleu du congélateur 5 min de chaque côté à feu moyen.",
      "3. Égoutter les pâtes, saupoudrer de Parmigiano et servir chaud."
    ],
    bergamoTip: "Repas express 100% stock après les cours du lundi (0 €) !"
  },
  {
    id: "salade-riz-thon-oeuf",
    name: "Salade de riz froide au thon & œuf dur",
    category: "Express & Salés",
    prepTime: 10,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Féculent"],
    ingredients: [
      { name: "Riz basmati (stock)", amount: 80, unit: "g", rayon: "Épicerie & Féculents", bought: false },
      { name: "Thon au naturel (stock)", amount: 1, unit: "boîte (130g)", rayon: "Épicerie & Féculents", bought: false },
      { name: "Boîte de 6 œufs frais", amount: 1, unit: "boîte", rayon: "Crémerie & Fromages", bought: true }
    ],
    steps: [
      "1. Cuire 1 œuf dur (9 min à l'eau bouillante) et laisser refroidir.",
      "2. Mélanger le riz cuit froid du stock avec 1 boîte de thon émiettée et l'œuf dur coupé en morceaux.",
      "3. Assaisonner avec un filet d'huile d'olive, sel et poivre."
    ],
    bergamoTip: "Repas frais, rapide et sans vaisselle compliquée pour le mardi soir."
  },
  {
    id: "steak-hache-chou-fleur",
    name: "Steak haché, chou-fleur poêlé & riz",
    category: "Viandes & Poêlées",
    prepTime: 15,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Légume", "Féculent"],
    ingredients: [
      { name: "Steak haché (congélateur)", amount: 1, unit: "pièce", rayon: "Boucherie & Poisson", bought: false },
      { name: "Chou-fleur (congélateur)", amount: 180, unit: "g", rayon: "Légumes", bought: false },
      { name: "Riz basmati (stock)", amount: 70, unit: "g", rayon: "Épicerie & Féculents", bought: false }
    ],
    steps: [
      "1. Cuire 70g de riz basmati à l'eau bouillante.",
      "2. Faire revenir les fleurettes de chou-fleur du congélateur à la poêle 8 min avec un filet d'huile d'olive, sel et ail.",
      "3. Cuire le dernier steak haché décongelé 3 min par face.",
      "4. Servir le steak bien chaud avec le chou-fleur fondant et le riz."
    ],
    bergamoTip: "Utilise ton dernier steak haché et tes réserves de chou-fleur congelé (0 €)."
  },
  {
    id: "poelee-poulet-pdt-courgettes",
    name: "Poêlée géante de poulet frais, pdt & courgettes (1/2)",
    category: "Viandes & Poêlées",
    prepTime: 20,
    cost: "€",
    servings: 2,
    tags: ["Protéine", "Légume", "Féculent"],
    ingredients: [
      { name: "Volaille fraîche (poulet ou dinde)", amount: 1, unit: "barquette (350g-400g)", rayon: "Boucherie & Poisson", bought: true },
      { name: "Pommes de terre fraîches", amount: 1, unit: "filet (1 kg)", rayon: "Fruits & Légumes", bought: true },
      { name: "Courgettes fraîches", amount: 2, unit: "pièces", rayon: "Fruits & Légumes", bought: true },
      { name: "Riz basmati (stock)", amount: 140, unit: "g", rayon: "Épicerie & Féculents", bought: false }
    ],
    steps: [
      "1. Éplucher et couper 500g de pommes de terre (la moitié du filet) et les 2 courgettes en dés.",
      "2. Faire dorer les dés de pommes de terre 10 min à la poêle avec huile d'olive, sel et herbes.",
      "3. Ajouter les dés de courgettes (6 min), puis les morceaux de poulet frais (toute la barquette de 350g) pendant 5 min.",
      "4. Cuire 140g de riz basmati et assembler le tout.",
      "5. Déguster la 1ère portion ce soir, et placer la 2ème moitié dans un Tupperware pour vendredi soir !"
    ],
    bergamoTip: "Batch cooking malin du jeudi soir : tu cuisines frais en double, zéro cuisine vendredi !"
  },
  {
    id: "tupperware-poulet-pdt-courgettes",
    name: "Tupperware réchauffé : Poêlée de poulet & légumes (2/2)",
    category: "Viandes & Poêlées",
    prepTime: 3,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Légume", "Féculent"],
    ingredients: [
      { name: "Poêlée poulet/pdt/courgettes (Tupperware)", amount: 1, unit: "portion (cuisinée jeudi)", rayon: "Boucherie & Poisson", bought: false }
    ],
    steps: [
      "1. Sortir ton Tupperware du frigo.",
      "2. Réchauffer 2 à 3 minutes au micro-ondes ou à la poêle à feu moyen.",
      "3. Déguster directement !"
    ],
    bergamoTip: "0 cuisine et 0 vaisselle le vendredi soir après une semaine de cours."
  },
  {
    id: "pates-thon-sauce-tomate",
    name: "Pâtes au thon, sauce tomate & origan",
    category: "Pâtes & Riz",
    prepTime: 12,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Féculent"],
    ingredients: [
      { name: "Pâtes (stock)", amount: 90, unit: "g", rayon: "Épicerie & Féculents", bought: false },
      { name: "Thon au naturel (stock)", amount: 1, unit: "boîte (130g)", rayon: "Épicerie & Féculents", bought: false },
      { name: "Sauce tomate (stock)", amount: 1, unit: "bocal", rayon: "Épicerie & Féculents", bought: false }
    ],
    steps: [
      "1. Cuire 90g de pâtes du stock à l'eau bouillante salée.",
      "2. Dans une petite casserole, réchauffer la sauce tomate avec le thon égoutté et émietté du stock, saler et ajouter de l'origan.",
      "3. Mélanger avec les pâtes égouttées et servir chaud."
    ],
    bergamoTip: "Recette traditionnelle réconfortante du samedi midi (100% placard, 0 €)."
  },
  {
    id: "saumon-epinards-riz",
    name: "Saumon en papillote au citron, riz basmati & épinards",
    category: "Poisson & Poêlées",
    prepTime: 20,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Légume", "Féculent"],
    ingredients: [
      { name: "Pavé de saumon (congélateur)", amount: 1, unit: "pavé (150g)", rayon: "Boucherie & Poisson", bought: false },
      { name: "Épinards (congélateur)", amount: 100, unit: "g", rayon: "Légumes", bought: false },
      { name: "Riz basmati (stock)", amount: 70, unit: "g", rayon: "Épicerie & Féculents", bought: false }
    ],
    steps: [
      "1. Cuire 70g de riz basmati du stock.",
      "2. Faire fondre 100g d'épinards du congélateur à la poêle avec un filet d'huile d'olive.",
      "3. Disposer 1 pavé de saumon sur une feuille de papier cuisson, arroser d'un filet d'huile d'olive et de citron, fermer en papillote.",
      "4. Enfourner 15 min à 180°C.",
      "5. Servir le saumon fondant sur son lit d'épinards et de riz."
    ],
    bergamoTip: "Excellent dîner de week-end riche en Oméga-3 (utilise 1 de tes 2 saumons congelés)."
  },
  {
    id: "lentilles-tomate-oeufs",
    name: "Poêlée de lentilles à la tomate & 2 œufs au plat",
    category: "Express & Salés",
    prepTime: 10,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Légume", "Féculent"],
    ingredients: [
      { name: "Lentilles au naturel", amount: 1, unit: "boîte (400g)", rayon: "Épicerie & Féculents", bought: true },
      { name: "Sauce tomate (stock)", amount: 3, unit: "C. à soupe", rayon: "Épicerie & Féculents", bought: false },
      { name: "Œufs frais (de la boîte)", amount: 2, unit: "pièces", rayon: "Crémerie & Fromages", bought: false }
    ],
    steps: [
      "1. Rincer et égoutter la boîte de lentilles.",
      "2. Les faire revenir 4 min à la poêle avec 3 C. à soupe de sauce tomate, de l'huile d'olive, sel et origan.",
      "3. Dans une seconde poêle (ou à côté), cuire 2 œufs au plat.",
      "4. Déposer les œufs sur le lit de lentilles chaudes et assaisonner."
    ],
    bergamoTip: "Combo protéiné express imbattable en coût (~0,65 € le repas entier du dimanche midi)."
  },
  {
    id: "frittata-pommes-de-terre",
    name: "Frittata de pommes de terre dorées & Parmigiano",
    category: "Express & Salés",
    prepTime: 15,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Féculent"],
    ingredients: [
      { name: "Pommes de terre", amount: 250, unit: "g (du filet acheté)", rayon: "Fruits & Légumes", bought: false },
      { name: "Œufs frais (de la boîte)", amount: 2, unit: "pièces", rayon: "Crémerie & Fromages", bought: false },
      { name: "Parmigiano / Grana (stock)", amount: 20, unit: "g", rayon: "Crémerie & Fromages", bought: false }
    ],
    steps: [
      "1. Couper 250g de pommes de terre restantes en petits dés fins.",
      "2. Les faire rissoler 10 min dans une poêle huilée à feu moyen avec couvercle jusqu'à ce qu'elles soient bien dorées et fondantes.",
      "3. Dans un bol, battre 2 œufs avec du sel, poivre et 20g de Parmigiano.",
      "4. Verser les œufs battus sur les pommes de terre chaudes, laisser prendre 3-4 min à feu doux, rabattre ou retourner.",
      "5. Déguster chaud avec une belle croûte dorée !"
    ],
    bergamoTip: "Style tortilla espagnole / frittata di patate : chaud, consistant et économique pour clore la semaine."
  }
];

function getRecipeById(id) {
  return RECIPES_DB.find(r => r.id === id);
}

const CURRENT_REAL_WEEK_MENU = {
  lundi: { midi: null, soir: "cordon-bleu-pates" },
  mardi: { midi: null, soir: "salade-riz-thon-oeuf" },
  mercredi: { midi: null, soir: "steak-hache-chou-fleur" },
  jeudi: { midi: null, soir: "poelee-poulet-pdt-courgettes" },
  vendredi: { midi: null, soir: "tupperware-poulet-pdt-courgettes" },
  samedi: { midi: "pates-thon-sauce-tomate", soir: "saumon-epinards-riz" },
  dimanche: { midi: "lentilles-tomate-oeufs", soir: "frittata-pommes-de-terre" }
};

const EXTRA_GROCERY_ITEMS = [
  { name: "Thon au naturel", amount: 1, unit: "pack (3 boîtes)", rayon: "Épicerie & Féculents" },
  { name: "Regarder pour des pâtes et du riz", amount: "", unit: "À vérifier (prix/promo)", rayon: "Épicerie & Féculents" },
  { name: "Céréales du matin (Extra chocolat & noisettes)", amount: 1, unit: "paquet", rayon: "Petit-déjeuner & Goûter" }
];

