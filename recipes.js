/**
 * Erasmus Meal Planner - Database of Student Recipes for Bergamo (Semaine 2)
 * Replaced shrimp recipe with Pasta Primavera Pesto & Burrata (easy Carrefour Express ingredients).
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
      { name: "Riz blanc ou basmati", amount: 70, unit: "g", rayon: "Épicerie & Féculents", bought: false }
    ],
    steps: [
      "1. Cuisson du riz : Cuire 70g de riz dans 150ml d'eau bouillante salée à couvert pendant 10 min.",
      "2. Saisie : Dans une poêle avec 1 C. à soupe d'huile d'olive, faire dorer la viande hachée décongelée et 1 gousse d'ail émincée pendant 4 min.",
      "3. Rissolage : Ajouter les dés d'aubergines du congélateur, saler, poivrer et faire rissoler 8-10 min jusqu'à ce qu'elles soient tendres.",
      "4. Servir le riz chaud nappé du poêlé aubergines-bœuf."
    ],
    bergamoTip: "Repas du lundi soir idéal pour vider ton congélateur !"
  },
  {
    id: "pasta-courgettes-pesto-burrata",
    name: "Pâtes Primavera courgettes poêlées, Pesto & Burrata",
    category: "Pâtes & Riz",
    prepTime: 18,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Légume", "Féculent"],
    ingredients: [
      { name: "Pâtes (Penne / Farfalle)", amount: 100, unit: "g", rayon: "Épicerie & Féculents", bought: true },
      { name: "Courgette fraîche", amount: 1, unit: "pièce", rayon: "Fruits & Légumes", bought: true },
      { name: "Pesto alla Genovese", amount: 2, unit: "C. à soupe", rayon: "Épicerie & Féculents", bought: true },
      { name: "Burrata fraîche (ou Mozzarella)", amount: 1, unit: "pièce", rayon: "Crémerie & Fromages", bought: true }
    ],
    steps: [
      "1. Pâtes : Cuire 100g de pâtes al dente dans l'eau bouillante salée.",
      "2. Courgettes : Faire dorer 1 courgette en demi-rondelles 7-8 min à la poêle avec un filet d'huile d'olive et de l'ail.",
      "3. Assemblage : Égoutter les pâtes en gardant un peu d'eau de cuisson. Mélanger les pâtes, les courgettes et 2 C. à soupe de pesto dans la poêle.",
      "4. Finition : Servir chaud et déposer la Burrata fraîche entière sur le dessus en l'ouvrant délicatement."
    ],
    bergamoTip: "Ingrédients simples trouvables dans n'importe quel Carrefour Express en Italie ! Tiré du fichier de maman."
  },
  {
    id: "piadina-scamorza-jambon",
    name: "Piadina italienne Scamorza affumicata, Prosciutto & Tomates",
    category: "Express & Salés",
    prepTime: 12,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Légume", "Féculent"],
    ingredients: [
      { name: "Piadine romagnole", amount: 2, unit: "pièces", rayon: "Épicerie & Féculents", bought: true },
      { name: "Prosciutto di Parma ou Cotto", amount: 3, unit: "tranches", rayon: "Charcuterie & Traiteur", bought: true },
      { name: "Scamorza affumicata", amount: 60, unit: "g", rayon: "Crémerie & Fromages", bought: true },
      { name: "Tomate fraîche", amount: 1, unit: "pièce", rayon: "Fruits & Légumes", bought: true }
    ],
    steps: [
      "1. Trancher la tomate et la Scamorza fumée en lamelles.",
      "2. Chauffer une poêle à sec et poser la piadina.",
      "3. Sur une moitié, disposer fromage, jambon et rondelles de tomate. Plier en deux.",
      "4. Chauffer 2-3 min de chaque côté jusqu'à ce que le fromage soit bien fondant."
    ],
    bergamoTip: "Le grand classique italien de maman : rapide et délicieux !"
  },
  {
    id: "cake-olives-pancetta",
    name: "Cake salé aux olives vertes, pancetta & salade verte",
    category: "Express & Salés",
    prepTime: 30,
    cost: "€",
    servings: 2, // Jeudi + Vendredi
    tags: ["Protéine", "Légume", "Féculent"],
    ingredients: [
      { name: "Pancetta en dés", amount: 100, unit: "g", rayon: "Charcuterie & Traiteur", bought: true },
      { name: "Olives vertes dénoyautées", amount: 50, unit: "g", rayon: "Épicerie & Féculents", bought: true },
      { name: "Salade verte fraîche", amount: 1, unit: "sachet", rayon: "Fruits & Légumes", bought: true }
    ],
    steps: [
      "1. Préparation : Fouetter 3 œufs avec 150g de farine, 1/2 sachet de levure, 80ml de lait et 2 C. à soupe d'huile.",
      "2. Garniture : Incorporer les 100g de pancetta dorée à la poêle et les 50g d'olives vertes tranchées.",
      "3. Cuisson : Verser dans un moule à cake et enfourner 25-30 min à 180°C.",
      "4. Déguster chaud ou tiède le jeudi soir avec une salade verte, et garder la 2ème portion pour vendredi soir !"
    ],
    bergamoTip: "Recette familiale incontournable de maman, idéale pour 2 soirs !"
  },
  {
    id: "pancakes-epinards-jambon",
    name: "Pancakes salés épinards, Robiola & jambon",
    category: "Express & Salés",
    prepTime: 15,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Légume", "Féculent"],
    ingredients: [
      { name: "Pousses d'épinards fraîches", amount: 60, unit: "g", rayon: "Fruits & Légumes", bought: true },
      { name: "Jambon blanc ou Prosciutto Cotto", amount: 2, unit: "tranches", rayon: "Charcuterie & Traiteur", bought: true },
      { name: "Fromage frais Robiola ou Philadelphia", amount: 50, unit: "g", rayon: "Crémerie & Fromages", bought: true }
    ],
    steps: [
      "1. Pâte : Mixer 60g de pousses d'épinards avec 1 œuf, 60ml de lait, 60g de farine, sel et poivre.",
      "2. Cuisson : Cuire de petites louches de pâte à la poêle huilée 2-3 min par face.",
      "3. Garniture : Étaler la Robiola crémeuse sur les pancakes chauds et poser le jambon par-dessus."
    ],
    bergamoTip: "Un repas original de maman parfait pour le samedi midi !"
  },
  {
    id: "saumon-papillote-haricots",
    name: "Saumon en papillote au citron & haricots verts",
    category: "Poisson & Poêlées",
    prepTime: 20,
    cost: "€€",
    servings: 1,
    tags: ["Protéine", "Légume", "Féculent"],
    ingredients: [
      { name: "Pavé de saumon (congélateur)", amount: 1, unit: "pavé (150g)", rayon: "Boucherie & Poisson", bought: false },
      { name: "Haricots verts (frais ou surgelés)", amount: 150, unit: "g", rayon: "Fruits & Légumes", bought: true }
    ],
    steps: [
      "1. Haricots : Cuire les haricots verts à l'eau bouillante salée 8-10 min.",
      "2. Papillote : Sur du papier cuisson, poser le saumon. Arroser d'huile d'olive, citron, sel et poivre. Refermer la papillote.",
      "3. Cuisson : Cuire 15 min au four à 180°C. Servir avec les haricots verts et du riz du stock."
    ],
    bergamoTip: "Moelleux et léger pour le samedi soir."
  },
  {
    id: "gnocchis-courgettes-tomates-sechees",
    name: "Poêlée de Gnocchis dorés aux courgettes & tomates séchées",
    category: "Pâtes & Riz",
    prepTime: 12,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Légume", "Féculent"],
    ingredients: [
      { name: "Gnocchis de pommes de terre frais", amount: 200, unit: "g", rayon: "Épicerie & Féculents", bought: true },
      { name: "Courgette fraîche", amount: 1, unit: "pièce", rayon: "Fruits & Légumes", bought: true },
      { name: "Tomates séchées à l'huile", amount: 4, unit: "pièces", rayon: "Épicerie & Féculents", bought: true }
    ],
    steps: [
      "1. Courgettes : Faire rissoler 1 courgette en dés 6 min dans de l'huile de tomates séchées.",
      "2. Gnocchis : Poêler les 200g de gnocchis frais directement dans la poêle sans cuisson à l'eau préalable pendant 5 min jusqu'à ce qu'ils soient bien dorés et croustillants.",
      "3. Émincer les tomates séchées, mélanger au tout et servir chaud."
    ],
    bergamoTip: "Gnocchis poêlés express tirés du fichier de maman !"
  },
  {
    id: "chou-fleur-gorgonzola-steak",
    name: "Gratin de chou-fleur au Gorgonzola & steak haché bœuf",
    category: "Viandes & Poêlées",
    prepTime: 25,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Légume", "Féculent"],
    ingredients: [
      { name: "Steak haché de bœuf", amount: 1, unit: "pièce", rayon: "Boucherie & Poisson", bought: true },
      { name: "Chou-fleur (frais ou surgelé)", amount: 200, unit: "g", rayon: "Fruits & Légumes", bought: true },
      { name: "Gorgonzola d.o.p.", amount: 50, unit: "g", rayon: "Crémerie & Fromages", bought: true }
    ],
    steps: [
      "1. Chou-fleur : Cuire les fleurettes de chou-fleur 10 min dans l'eau bouillante salée.",
      "2. Gratin : Mettre le chou-fleur dans un plat, émietter les 50g de Gorgonzola par-dessus avec 2 C. à soupe de crème et faire gratiner 5 min.",
      "3. Steak : Cuire le steak haché à la poêle bien chaude.",
      "4. Servir le steak chaud accompagné du gratin de chou-fleur au Gorgonzola coulant."
    ],
    bergamoTip: "La grande recette de maman avec le vrai Gorgonzola lombard !"
  }
];

function getRecipeById(id) {
  return RECIPES_DB.find(r => r.id === id);
}

const CURRENT_REAL_WEEK_MENU = {
  lundi: { midi: null, soir: "aubergines-boeuf-riz" },
  mardi: { midi: null, soir: "pasta-courgettes-pesto-burrata" },
  mercredi: { midi: null, soir: "piadina-scamorza-jambon" },
  jeudi: { midi: null, soir: "cake-olives-pancetta" },
  vendredi: { midi: null, soir: "cake-olives-pancetta" },
  samedi: { midi: "pancakes-epinards-jambon", soir: "saumon-papillote-haricots" },
  dimanche: { midi: "gnocchis-courgettes-tomates-sechees", soir: "chou-fleur-gorgonzola-steak" }
};
