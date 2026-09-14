/**
 * Erasmus Meal Planner - Database of Student Recipes for Bergamo
 * Complete recipe ingredients for cooking + bought flags for shopping list.
 */

const RECIPES_DB = [
  {
    id: "pates-fraiches-epinards-ricotta",
    name: "Pâtes fraîches épinards & ricotta",
    category: "Pâtes & Riz",
    prepTime: 5,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Légume", "Féculent"],
    ingredients: [
      { name: "Pâtes fraîches épinards & ricotta", amount: 150, unit: "g", rayon: "Épicerie & Féculents", bought: false },
      { name: "Beurre ou Huile d'olive", amount: 1, unit: "C. à soupe", rayon: "Crémerie & Fromages", bought: false },
      { name: "Parmesan râpé", amount: 20, unit: "g", rayon: "Crémerie & Fromages", bought: false }
    ],
    steps: [
      "Plonger les pâtes fraîches du stock dans l'eau bouillante salée 2 à 3 minutes.",
      "Égoutter en conservant un peu d'eau de cuisson.",
      "Mélanger avec une noisette de beurre ou un filet d'huile d'olive et saupoudrer de parmesan."
    ],
    bergamoTip: "Les pâtes fraîches farcies au rayon frais d'Esselunga ou Conad sont excellentes et prêtes en 3 min."
  },
  {
    id: "chili-con-carne-express",
    name: "Chili con carne express & riz",
    category: "Viandes & Poêlées",
    prepTime: 20,
    cost: "€",
    servings: 2, // Mardi + Mercredi
    tags: ["Protéine", "Légume", "Féculent"],
    ingredients: [
      { name: "Viande hachée de bœuf", amount: 250, unit: "g", rayon: "Boucherie & Poisson", bought: false },
      { name: "Haricots rouges en boîte", amount: 1, unit: "petite boîte", rayon: "Épicerie & Féculents", bought: false },
      { name: "Coulis de tomate nature", amount: 1, unit: "briquette (200g)", rayon: "Épicerie & Féculents", bought: false },
      { name: "Gousse d'ail", amount: 1, unit: "pièce", rayon: "Fruits & Légumes", bought: false },
      { name: "Riz blanc", amount: 140, unit: "g", rayon: "Épicerie & Féculents", bought: false }
    ],
    steps: [
      "Faire cuire le riz du stock dans de l'eau bouillante salée.",
      "Dans une poêle, faire revenir la moitié de la viande hachée (stock) avec l'ail du stock.",
      "Ajouter les haricots rouges du stock et le coulis de tomate du stock.",
      "Servir la moitié avec le riz. Réchauffer l'autre moitié mercredi soir !"
    ],
    bergamoTip: "Fait pour 2 soirs : mardi soir et mercredi soir."
  },
  {
    id: "poulet-curry-courgettes-riz",
    name: "Poêlée de poulet au curry, courgettes & riz",
    category: "Viandes & Poêlées",
    prepTime: 20,
    cost: "€",
    servings: 2, // Jeudi + Vendredi
    tags: ["Protéine", "Légume", "Féculent"],
    ingredients: [
      { name: "Lamelles de poulet", amount: 250, unit: "g", rayon: "Boucherie & Poisson", bought: false },
      { name: "Courgettes fraîches", amount: 2, unit: "pièces", rayon: "Fruits & Légumes", bought: true },
      { name: "Riz blanc", amount: 140, unit: "g", rayon: "Épicerie & Féculents", bought: false },
      { name: "Curry en poudre", amount: 1, unit: "C. à café", rayon: "Épicerie & Féculents", bought: false }
    ],
    steps: [
      "Faire cuire le riz du stock dans de l'eau bouillante salée.",
      "Couper les 2 courgettes achetées en dés et les faire dorer à la poêle.",
      "Ajouter les lamelles de poulet du stock et le curry du stock.",
      "Servir la moitié le jeudi soir et réchauffer l'autre moitié vendredi soir."
    ],
    bergamoTip: "Fait pour 2 soirs : jeudi soir et vendredi soir."
  },
  {
    id: "omelette-epinards-frais",
    name: "Omelette aux épinards frais & pain",
    category: "Express & Salés",
    prepTime: 10,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Légume", "Féculent"],
    ingredients: [
      { name: "Œufs frais", amount: 2, unit: "pièces", rayon: "Crémerie & Fromages", bought: false },
      { name: "Épinards frais", amount: 50, unit: "g", rayon: "Fruits & Légumes", bought: false },
      { name: "Pain ou paquet de pain de mie", amount: 1, unit: "paquet", rayon: "Épicerie & Féculents", bought: true }
    ],
    steps: [
      "Faire réduire les épinards du stock 1 min dans la poêle chaude.",
      "Verser 2 œufs du stock battus par-dessus et cuire à feu moyen.",
      "Servir avec le pain fraîchement acheté."
    ],
    bergamoTip: "Repas minute idéal du samedi midi."
  },
  {
    id: "pates-aubergine-pancetta",
    name: "Pâtes sautées à l'aubergine & pancetta",
    category: "Pâtes & Riz",
    prepTime: 25,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Légume", "Féculent"],
    ingredients: [
      { name: "Pâtes (Penne / Rigatoni)", amount: 100, unit: "g", rayon: "Épicerie & Féculents", bought: false },
      { name: "Aubergine", amount: 1, unit: "pièce", rayon: "Fruits & Légumes", bought: true },
      { name: "Pancetta en dés", amount: 100, unit: "g", rayon: "Charcuterie & Traiteur", bought: false }
    ],
    steps: [
      "Couper l'aubergine achetée en dés et la rôtir à l'Air Fryer (15 min à 190°C).",
      "Faire cuire les pâtes du stock.",
      "Griller la pancetta du stock et mélanger le tout."
    ],
    bergamoTip: "Repas croustillant du samedi soir."
  },
  {
    id: "salade-thon-oeufs-durs",
    name: "Salade de thon estivale & œufs durs",
    category: "Express & Salés",
    prepTime: 10,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Légume"],
    ingredients: [
      { name: "Thon au naturel", amount: 1, unit: "boîte", rayon: "Boucherie & Poisson", bought: false },
      { name: "Œufs durs", amount: 2, unit: "pièces", rayon: "Crémerie & Fromages", bought: false },
      { name: "Salade fraîche", amount: 1, unit: "poignée", rayon: "Fruits & Légumes", bought: false }
    ],
    steps: [
      "Cuire 2 œufs du stock pendant 10 min pour faire des œufs durs.",
      "Mélanger la salade du stock avec le thon du stock et les œufs durs en quartiers."
    ],
    bergamoTip: "Repas frais du dimanche midi."
  },
  {
    id: "focaccia-pizza-mozza",
    name: "Focaccia gratinée façon pizza (Air Fryer)",
    category: "Express & Salés",
    prepTime: 10,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Légume", "Féculent"],
    ingredients: [
      { name: "Focaccia nature", amount: 1, unit: "pièce", rayon: "Épicerie & Féculents", bought: false },
      { name: "Grosse tomate fraîche", amount: 1, unit: "pièce", rayon: "Fruits & Légumes", bought: true },
      { name: "Boule de mozzarella", amount: 1, unit: "boule", rayon: "Crémerie & Fromages", bought: true }
    ],
    steps: [
      "Ouvrir la focaccia du stock.",
      "Garnir de rondelles de la tomate achetée et de la mozzarella achetée.",
      "Saupoudrer d'origan du stock et passer à l'Air Fryer 8 min."
    ],
    bergamoTip: "Repas chaud réconfortant du dimanche soir."
  }
];

function getRecipeById(id) {
  return RECIPES_DB.find(r => r.id === id);
}

const CURRENT_REAL_WEEK_MENU = {
  lundi: { midi: null, soir: "pates-fraiches-epinards-ricotta" },
  mardi: { midi: null, soir: "chili-con-carne-express" },
  mercredi: { midi: null, soir: "chili-con-carne-express" },
  jeudi: { midi: null, soir: "poulet-curry-courgettes-riz" },
  vendredi: { midi: null, soir: "poulet-curry-courgettes-riz" },
  samedi: { midi: "omelette-epinards-frais", soir: "pates-aubergine-pancetta" },
  dimanche: { midi: "salade-thon-oeufs-durs", soir: "focaccia-pizza-mozza" }
};
