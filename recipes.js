/**
 * Erasmus Meal Planner - Database of Student Recipes for Bergamo
 * Recipes with complete step-by-step cooking instructions (<30 min).
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
      "Porter une casserole d'eau salée à ébullition (1L d'eau pour 100g de pâtes).",
      "Plonger les pâtes fraîches à la ricotta & épinards et cuire 2 à 3 minutes seulement (elles remontent à la surface).",
      "Égoutter délicatement en conservant 2 cuillères à soupe d'eau de cuisson.",
      "Dans une poêle à feu doux, faire fondre une noisette de beurre avec l'eau de cuisson conservée pour créer une liaison onctueuse.",
      "Ajouter les pâtes, mélanger doucement et servir chaud saupoudré généreusement de parmesan râpé."
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
      "Lancer la cuisson du riz (1 volume de riz pour 2 volumes d'eau salée) pendant 10-12 min à couvert.",
      "Émincer la gousse d'ail. Faire chauffer une poêle avec un filet d'huile d'olive à feu moyen.",
      "Ajouter les 250g de viande hachée et l'ail haché. Faire dorer 4-5 min en émiettant la viande avec une spatule.",
      "Rincer et égoutter les haricots rouges. Les verser dans la poêle avec la briquette de coulis de tomate, sel, poivre et épices (chili/paprika).",
      "Laisser mijoter à feu doux 10 min jusqu'à épaississement. Servir la 1ère portion avec le riz, et placer la 2ème portion au frigo pour mercredi soir."
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
      "Lancer la cuisson du riz basmati dans l'eau bouillante salée pendant 10 minutes.",
      "Laver les 2 courgettes fraîches et les couper en dés réguliers de 1 cm.",
      "Dans une poêle, faire dorer les dés de courgettes avec une cuillère d'huile d'olive pendant 6-8 minutes à feu moyen-vif.",
      "Ajouter les 250g de lamelles de poulet et 1 cuillère à café de curry en poudre. Faire dorer 5 minutes supplémentaires.",
      "Verser 3 cuillères à soupe d'eau pour décoller les sucs et former une sauce parfumée. Servir la moitié avec le riz chaud et réserver l'autre moitié au frais pour vendredi."
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
      "Rincer et sécher la poignée d'épinards frais.",
      "Faire fondre une noisette de beurre dans une poêle. Faire tomber les épinards 1 minute jusqu'à ce qu'ils réduisent.",
      "Dans un bol, battre les 2 œufs avec du sel et du poivre à la fourchette.",
      "Verser les œufs battus directement sur les épinards dans la poêle. Cuire 2-3 min à feu moyen jusqu'à consistance baveuse ou bien cuite.",
      "Servir chaud immédiatement avec les tranches de pain frais ou grillé."
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
      "Laver l'aubergine et la couper en petits cubes de 1,5 cm. Les mélanger avec un filet d'huile d'olive, sel et poivre.",
      "Préchauffer l'Air Fryer à 190°C. Faire rôtir les dés d'aubergine pendant 15 minutes en secouant le panier à mi-cuisson.",
      "Pendant ce temps, faire cuire les 100g de pâtes al dente dans l'eau bouillante salée.",
      "Dans une poêle à sec, faire griller les 100g de pancetta en dés pendant 3-4 minutes jusqu'à ce qu'ils soient croustillants.",
      "Égoutter les pâtes, ajouter les dés d'aubergine fondants et la pancetta grillée. Mélanger le tout et servir chaud."
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
      "Porter une petite casserole d'eau à ébullition. Y plonger les 2 œufs et cuire 9 minutes exactement.",
      "Plonger les œufs dans un bol d'eau froide pour stopper la cuisson, puis les écailler et les couper en 4 quartiers.",
      "Égoutter la boîte de thon au naturel.",
      "Dans une grande assiette, disposer la salade fraîche, le thon émietté et les quartiers d'œufs durs.",
      "Assaisonner d'une cuillère d'huile d'olive, un trait de vinaigre, du sel et du poivre."
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
      "Ouvrir la focaccia nature en deux dans le sens de la longueur.",
      "Trancher la tomate fraîche et la boule de mozzarella en rondelles régulières.",
      "Garnir la focaccia avec les rondelles de tomate et de mozzarella.",
      "Saupoudrer d'origan séché et ajouter un filet d'huile d'olive.",
      "Placer dans l'Air Fryer et cuire à 180°C pendant 6 à 8 minutes jusqu'à ce que le fromage soit gratiné et coulant."
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
