/**
 * Erasmus Meal Planner - Ultra-Budget Student Week 2 (Bergamo)
 * Reduced to 5 inexpensive core items to buy at Carrefour Express.
 */

const RECIPES_DB = [
  {
    id: "aubergines-boeuf-riz",
    name: "Aubergines sautées au bœuf haché & riz",
    category: "Viandes & Poêlées",
    prepTime: 20,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Légume", "Féculent"],
    ingredients: [
      { name: "Aubergines en dés (congélateur)", amount: 150, unit: "g", rayon: "Légumes", bought: false },
      { name: "Viande hachée de bœuf (congélateur)", amount: 125, unit: "g", rayon: "Boucherie & Poisson", bought: false },
      { name: "Riz blanc ou basmati (stock)", amount: 70, unit: "g", rayon: "Épicerie & Féculents", bought: false }
    ],
    steps: [
      "1. Cuisson du riz : Cuire 70g de riz dans 150ml d'eau bouillante salée à couvert pendant 10 min.",
      "2. Saisie : Faire dorer la viande hachée décongelée et l'ail dans 1 C. à soupe d'huile d'olive pendant 4 min.",
      "3. Rissolage : Ajouter les dés d'aubergines du congélateur, saler, poivrer et rissoler 8-10 min jusqu'à tendreté.",
      "4. Servir le riz chaud nappé du poêlé aubergines-bœuf."
    ],
    bergamoTip: "Repas du lundi soir zéro dépense (100% stock & congélateur) !"
  },
  {
    id: "gnocchis-courgettes-beurre",
    name: "Poêlée de Gnocchis dorés aux courgettes & parmesan",
    category: "Pâtes & Riz",
    prepTime: 12,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Légume", "Féculent"],
    ingredients: [
      { name: "Gnocchis de pommes de terre frais", amount: 200, unit: "g", rayon: "Épicerie & Féculents", bought: true },
      { name: "Courgettes fraîches", amount: 1, unit: "pièce", rayon: "Fruits & Légumes", bought: true }
    ],
    steps: [
      "1. Courgettes : Couper 1 courgette en petits dés et les faire rissoler 6 min à la poêle avec du beurre ou de l'huile d'olive.",
      "2. Gnocchis : Verser les gnocchis frais directement dans la poêle avec les courgettes (sans cuisson préalable à l'eau).",
      "3. Faire dorer 5 min à feu moyen-vif jusqu'à ce que les gnocchis soient bien croustillants.",
      "4. Saupoudrer généreusement de parmesan du stock et servir chaud !"
    ],
    bergamoTip: "Les gnocchis poêlés à la poêle sont ultra croustillants et coûtent 1€ chez Carrefour !"
  },
  {
    id: "piadina-scamorza-prosciutto",
    name: "Piadina italienne Scamorza affumicata, Prosciutto & courgette",
    category: "Express & Salés",
    prepTime: 10,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Légume", "Féculent"],
    ingredients: [
      { name: "Piadine romagnole", amount: 2, unit: "pièces", rayon: "Épicerie & Féculents", bought: true },
      { name: "Prosciutto (Cotto ou Crudo)", amount: 3, unit: "tranches", rayon: "Charcuterie & Traiteur", bought: true },
      { name: "Scamorza affumicata", amount: 60, unit: "g", rayon: "Crémerie & Fromages", bought: true }
    ],
    steps: [
      "1. Couper la Scamorza fumée en tranches fines.",
      "2. Chauffer une poêle à sec et poser la piadina.",
      "3. Disposer la Scamorza, le Prosciutto et quelques rondelles de courgette poêlée sur une moitié. Plier en deux.",
      "4. Chauffer 2 min de chaque côté jusqu'à ce que le fromage fonde."
    ],
    bergamoTip: "Un repas étudiant italien prêt en 10 minutes !"
  },
  {
    id: "pates-courgettes-scamorza",
    name: "Pâtes aux courgettes rissolées & Scamorza fondante",
    category: "Pâtes & Riz",
    prepTime: 18,
    cost: "€",
    servings: 2, // Jeudi + Vendredi
    tags: ["Protéine", "Légume", "Féculent"],
    ingredients: [
      { name: "Pâtes (Penne / Farfalle du stock)", amount: 140, unit: "g", rayon: "Épicerie & Féculents", bought: false },
      { name: "Courgettes fraîches", amount: 1, unit: "pièce", rayon: "Fruits & Légumes", bought: true },
      { name: "Scamorza affumicata", amount: 60, unit: "g", rayon: "Crémerie & Fromages", bought: true }
    ],
    steps: [
      "1. Pâtes : Cuire 140g de pâtes du stock al dente dans l'eau bouillante salée.",
      "2. Courgettes : Faire dorer 1 courgette en dés à la poêle avec un filet d'huile d'olive pendant 6-7 min.",
      "3. Mélange : Ajouter les pâtes égouttées et la Scamorza coupée en dés. Mélanger 1 min pour faire fondre le fromage.",
      "4. Servir la 1ère portion le jeudi soir et garder la 2ème au frigo pour vendredi soir !"
    ],
    bergamoTip: "Batch cooking idéal pour 2 soirs avec la Scamorza fondante."
  },
  {
    id: "omelette-prosciutto-fromage",
    name: "Omelette moelleuse au Prosciutto & pain",
    category: "Express & Salés",
    prepTime: 10,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Légume", "Féculent"],
    ingredients: [
      { name: "Prosciutto", amount: 2, unit: "tranches", rayon: "Charcuterie & Traiteur", bought: true },
      { name: "Œufs frais (stock)", amount: 2, unit: "pièces", rayon: "Crémerie & Fromages", bought: false },
      { name: "Pain (stock)", amount: 2, unit: "tranches", rayon: "Épicerie & Féculents", bought: false }
    ],
    steps: [
      "1. Battre 2 œufs du stock avec du sel, du poivre et 1 C. à soupe d'eau.",
      "2. Faire fondre une noisette de beurre dans une poêle, verser les œufs battus.",
      "3. Ajouter le Prosciutto émincé et du parmesan du stock. Rabattre l'omelette en demi-lune.",
      "4. Servir immédiatement avec 2 tranches de pain grillé."
    ],
    bergamoTip: "Repas express du samedi midi."
  },
  {
    id: "saumon-papillote-courgettes-riz",
    name: "Saumon en papillote au citron & riz",
    category: "Poisson & Poêlées",
    prepTime: 20,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Légume", "Féculent"],
    ingredients: [
      { name: "Pavé de saumon (congélateur)", amount: 1, unit: "pavé (150g)", rayon: "Boucherie & Poisson", bought: false },
      { name: "Riz ou Pommes de terre (stock)", amount: 100, unit: "g", rayon: "Épicerie & Féculents", bought: false }
    ],
    steps: [
      "1. Cuire 100g de riz du stock dans l'eau bouillante salée.",
      "2. Sur du papier cuisson, poser le saumon décongelé. Arroser d'huile d'olive, jus de citron, sel et poivre.",
      "3. Cuire 15 min au four à 180°C (ou 10 min à la poêle à couvert). Servir chaud avec le riz !"
    ],
    bergamoTip: "Utilise ton saumon du congélateur le samedi soir !"
  },
  {
    id: "gnocchis-beurre-parmesan",
    name: "Poêlée de Gnocchis dorés au beurre & parmesan",
    category: "Pâtes & Riz",
    prepTime: 10,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Féculent"],
    ingredients: [
      { name: "Gnocchis de pommes de terre frais", amount: 200, unit: "g", rayon: "Épicerie & Féculents", bought: true }
    ],
    steps: [
      "1. Faire fondre une belle noisette de beurre du stock dans une poêle.",
      "2. Faire dorer les gnocchis frais directement dans la poêle pendant 5 minutes à feu moyen jusqu'à ce qu'ils soient croustillants.",
      "3. Saupoudrer de parmesan râpé du stock et poivrer."
    ],
    bergamoTip: "Repas réconfortant du dimanche soir prêt en 10 minutes !"
  }
];

function getRecipeById(id) {
  return RECIPES_DB.find(r => r.id === id);
}

const CURRENT_REAL_WEEK_MENU = {
  lundi: { midi: null, soir: "aubergines-boeuf-riz" },
  mardi: { midi: null, soir: "gnocchis-courgettes-beurre" },
  mercredi: { midi: null, soir: "piadina-scamorza-prosciutto" },
  jeudi: { midi: null, soir: "pates-courgettes-scamorza" },
  vendredi: { midi: null, soir: "pates-courgettes-scamorza" },
  samedi: { midi: "omelette-prosciutto-fromage", soir: "saumon-papillote-courgettes-riz" },
  dimanche: { midi: "piadina-scamorza-prosciutto", soir: "gnocchis-beurre-parmesan" }
};
