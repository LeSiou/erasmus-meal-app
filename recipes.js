/**
 * Erasmus Meal Planner - Validated Week 4 Menu (Bergamo v22.0)
 * Portions: 150g-200g of meat per meal (Pack of 350-400g for 2 Tupperware meals)
 * Clean aggregated grocery list (1 box of 6 eggs, 1 pack of poultry, 1 sachet parmesan, 500g pdt, 2 courgettes)
 */

const RECIPES_DB = [
  {
    id: "pates-pesto-legumes",
    name: "Pâtes au pesto de légumes & Parmigiano",
    category: "Pâtes & Riz",
    prepTime: 12,
    cost: "€",
    servings: 1,
    tags: ["Féculent"],
    ingredients: [
      { name: "Pâtes (stock)", amount: 90, unit: "g", rayon: "Épicerie & Féculents", bought: false },
      { name: "Sauce pesto de légumes (stock)", amount: 2, unit: "C. à soupe", rayon: "Épicerie & Féculents", bought: false },
      { name: "Parmigiano / Grana grattugiato", amount: 1, unit: "sachet (100g)", rayon: "Crémerie & Fromages", bought: true }
    ],
    steps: [
      "1. Cuire 90g de pâtes du stock dans l'eau bouillante salée.",
      "2. Égoutter en gardant 2 C. à soupe d'eau de cuisson.",
      "3. Mélanger avec ta sauce pesto de légumes du stock.",
      "4. Saupoudrer de Parmigiano et servir chaud."
    ],
    bergamoTip: "100% stock, rapide & savoureux le lundi soir !"
  },
  {
    id: "cordon-bleu-poelee",
    name: "Cordon bleu & poêlée légumes/pommes de terre",
    category: "Viandes & Poêlées",
    prepTime: 12,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Légume", "Féculent"],
    ingredients: [
      { name: "Cordon bleu (congélateur)", amount: 1, unit: "pièce", rayon: "Boucherie & Poisson", bought: false },
      { name: "Poêlée légumes/patates (congélateur)", amount: 200, unit: "g", rayon: "Légumes", bought: false }
    ],
    steps: [
      "1. Faire réchauffer 200g de poêlée légumes/patates du congel à la poêle 8 min.",
      "2. Poêler 1 cordon bleu du congel 5 min de chaque côté à feu moyen.",
      "3. Servir bien chaud."
    ],
    bergamoTip: "Utilise tes réserves du congélateur (0 €) !"
  },
  {
    id: "steak-hache-pates",
    name: "Steak haché & pâtes au Parmigiano",
    category: "Viandes & Poêlées",
    prepTime: 12,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Féculent"],
    ingredients: [
      { name: "Steak haché (congélateur)", amount: 1, unit: "pièce", rayon: "Boucherie & Poisson", bought: false },
      { name: "Pâtes (stock)", amount: 90, unit: "g", rayon: "Épicerie & Féculents", bought: false },
      { name: "Parmigiano / Grana grattugiato", amount: 20, unit: "g (du sachet)", rayon: "Crémerie & Fromages", bought: false }
    ],
    steps: [
      "1. Cuire 90g de pâtes du stock.",
      "2. Poêler 1 steak haché décongelé 3 min de chaque côté.",
      "3. Servir le steak avec les pâtes saupoudrées de Parmigiano."
    ],
    bergamoTip: "Utilise ton 1er steak haché congelé."
  },
  {
    id: "poelee-poulet-pdt-courgettes",
    name: "Poêlée géante de poulet, pdt & courgettes (1/2)",
    category: "Viandes & Poêlées",
    prepTime: 20,
    cost: "€",
    servings: 2,
    tags: ["Protéine", "Légume", "Féculent"],
    ingredients: [
      { name: "Volaille (poulet/dinde)", amount: 1, unit: "barquette (350g-400g)", rayon: "Boucherie & Poisson", bought: true },
      { name: "Pommes de terre fraîches", amount: 500, unit: "g", rayon: "Fruits & Légumes", bought: true },
      { name: "Courgettes fraîches", amount: 2, unit: "pièces", rayon: "Fruits & Légumes", bought: true },
      { name: "Riz basmati (stock)", amount: 140, unit: "g", rayon: "Épicerie & Féculents", bought: false }
    ],
    steps: [
      "1. Couper 500g de pommes de terre et 2 courgettes en dés.",
      "2. Faire rissoler les pommes de terre 10 min à la poêle dans l'huile d'olive, ajouter les courgettes 6 min et les dés de poulet (350g) 5 min.",
      "3. Cuire 140g de riz basmati et mélanger le tout.",
      "4. Manger la 1ère portion ce soir et garder la 2ème moitié dans un Tupperware pour vendredi soir !"
    ],
    bergamoTip: "Cuis en double ce soir (~175g de poulet par repas). 0 cuisine vendredi !"
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
      "2. Réchauffer 2 à 3 minutes au micro-ondes ou à la poêle.",
      "3. Déguster immédiatement !"
    ],
    bergamoTip: "0 cuisine et 0 vaisselle le vendredi soir !"
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
      "1. Cuire 1 œuf dur (9 min à l'eau bouillante).",
      "2. Mélanger le riz cuit froid du stock avec 1 boîte de thon émiettée et l'œuf dur en morceaux.",
      "3. Assaisonner avec un filet d'huile d'olive, sel et poivre."
    ],
    bergamoTip: "Repas frais du samedi midi 100% rapide."
  },
  {
    id: "saumon-haricots-riz",
    name: "Saumon en papillote au citron, haricots verts & riz",
    category: "Poisson & Poêlées",
    prepTime: 20,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Légume", "Féculent"],
    ingredients: [
      { name: "Pavé de saumon (congélateur)", amount: 1, unit: "pavé (150g)", rayon: "Boucherie & Poisson", bought: false },
      { name: "Haricots verts (congélateur)", amount: 100, unit: "g", rayon: "Légumes", bought: false },
      { name: "Riz basmati (stock)", amount: 70, unit: "g", rayon: "Épicerie & Féculents", bought: false }
    ],
    steps: [
      "1. Cuire 70g de riz basmati et réchauffer les haricots verts du congel.",
      "2. Disposer 1 saumon du congel sur papier cuisson avec citron et huile d'olive.",
      "3. Enfourner 15 min à 180°C.",
      "4. Servir chaud."
    ],
    bergamoTip: "Utilise 1 de tes 3 pavés de saumon congelés."
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
      "1. Cuire 90g de pâtes du stock.",
      "2. Réchauffer la sauce tomate avec le thon émietté du stock.",
      "3. Mélanger aux pâtes chaudes."
    ],
    bergamoTip: "Recette du dimanche midi du fichier de Maman !"
  },
  {
    id: "omelette-epinards-parmesan",
    name: "Omelette aux épinards & Parmigiano",
    category: "Express & Salés",
    prepTime: 8,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Légume"],
    ingredients: [
      { name: "Œufs frais (de la boîte)", amount: 2, unit: "pièces", rayon: "Crémerie & Fromages", bought: false },
      { name: "Épinards (congélateur)", amount: 80, unit: "g", rayon: "Légumes", bought: false },
      { name: "Parmigiano / Grana grattugiato", amount: 20, unit: "g (du sachet)", rayon: "Crémerie & Fromages", bought: false }
    ],
    steps: [
      "1. Faire revenir 80g d'épinards du congel 2 min à la poêle.",
      "2. Battre 2 œufs avec du sel, poivre et verser par-dessus.",
      "3. Rabattre en demi-lune et saupoudrer de Parmigiano."
    ],
    bergamoTip: "Repas express 5 min du dimanche soir."
  }
];

function getRecipeById(id) {
  return RECIPES_DB.find(r => r.id === id);
}

const CURRENT_REAL_WEEK_MENU = {
  lundi: { midi: null, soir: "pates-pesto-legumes" },
  mardi: { midi: null, soir: "cordon-bleu-poelee" },
  mercredi: { midi: null, soir: "steak-hache-pates" },
  jeudi: { midi: null, soir: "poelee-poulet-pdt-courgettes" },
  vendredi: { midi: null, soir: "tupperware-poulet-pdt-courgettes" },
  samedi: { midi: "salade-riz-thon-oeuf", soir: "saumon-haricots-riz" },
  dimanche: { midi: "pates-thon-sauce-tomate", soir: "omelette-epinards-parmesan" }
};
