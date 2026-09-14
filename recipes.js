/**
 * Erasmus Meal Planner - Database of Student Recipes for Bergamo
 * Strictly matched with Alessio's explicit 5 items purchased this week.
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
    ingredients: [], // Stock
    steps: [
      "Plonger les pâtes fraîches du stock dans l'eau bouillante salée 2 à 3 minutes.",
      "Égoutter et réchauffer à la poêle ou au micro-ondes."
    ],
    bergamoTip: "Repas zéro effort du lundi soir avec tes restes de pâtes fraîches."
  },
  {
    id: "chili-con-carne-express",
    name: "Chili con carne express & riz",
    category: "Viandes & Poêlées",
    prepTime: 20,
    cost: "€",
    servings: 2, // Mardi + Mercredi
    tags: ["Protéine", "Légume", "Féculent"],
    ingredients: [], // Ingrédients en stock
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
      { name: "Courgettes fraîches", amount: 2, unit: "pièces", rayon: "Fruits & Légumes" }
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
      { name: "Pain ou paquet de pain de mie", amount: 1, unit: "paquet", rayon: "Épicerie & Féculents" }
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
      { name: "Aubergine", amount: 1, unit: "pièce", rayon: "Fruits & Légumes" }
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
    ingredients: [], // Tout en stock
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
      { name: "Grosse tomate fraîche", amount: 1, unit: "pièce", rayon: "Fruits & Légumes" },
      { name: "Boule de mozzarella", amount: 1, unit: "boule", rayon: "Crémerie & Fromages" }
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
