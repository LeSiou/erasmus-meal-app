/**
 * Erasmus Meal Planner - Validated Week 3 Menu (Bergamo)
 * 100% Validated by Alessio (v17.0)
 */

const RECIPES_DB = [
  {
    id: "poulet-pates-epinards",
    name: "Poulet, pâtes & épinards",
    category: "Pâtes & Volaille",
    prepTime: 15,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Légume", "Féculent"],
    ingredients: [
      { name: "Dés de dinde ou poulet (stock)", amount: 120, unit: "g", rayon: "Boucherie & Poisson", bought: false },
      { name: "Épinards (congélateur)", amount: 80, unit: "g", rayon: "Légumes", bought: false },
      { name: "Pâtes (stock)", amount: 80, unit: "g", rayon: "Épicerie & Féculents", bought: false }
    ],
    steps: [
      "1. Cuire 80g de pâtes du stock dans l'eau bouillante salée.",
      "2. Réchauffer tes dés de poulet et les épinards du congel 4 min à la poêle avec un filet d'huile d'olive.",
      "3. Mélanger le tout aux pâtes égouttées.",
      "4. Servir bien chaud !"
    ],
    bergamoTip: "Repas reporté de la semaine dernière (100% stock) !"
  },
  {
    id: "focaccia-mozza-tomates",
    name: "Focaccia italienne Mozzarella & Tomates",
    category: "Express & Salés",
    prepTime: 8,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Légume", "Féculent"],
    ingredients: [
      { name: "Focaccia ou pain frais", amount: 1, unit: "pièce", rayon: "Boulangerie & Épicerie", bought: true },
      { name: "Mozzarella", amount: 1, unit: "boule", rayon: "Crémerie & Fromages", bought: true },
      { name: "Tomates fraîches", amount: 1, unit: "pièces", rayon: "Fruits & Légumes", bought: true },
      { name: "Salade verte", amount: 0.33, unit: "sachet", rayon: "Fruits & Légumes", bought: true }
    ],
    steps: [
      "1. Trancher la boule de Mozzarella et 1 tomate fraîche.",
      "2. Ouvrir la Focaccia et la faire tiédir 1 minute à la poêle.",
      "3. Garnir avec la Mozzarella, la tomate et 1/3 du sachet de salade verte.",
      "4. Déguster immédiatement !"
    ],
    bergamoTip: "Consomme la Mozzarella fraîche dès le mardi !"
  },
  {
    id: "bruschetta-pomodoro",
    name: "Bruschetta al pomodoro & origan",
    category: "Salades & Fraîcheur",
    prepTime: 10,
    cost: "€",
    servings: 1,
    tags: ["Légume", "Féculent"],
    ingredients: [
      { name: "Pain frais ou baguette", amount: 2, unit: "tranches", rayon: "Boulangerie & Épicerie", bought: true },
      { name: "Tomates fraîches", amount: 2, unit: "pièces", rayon: "Fruits & Légumes", bought: true },
      { name: "Origan (stock)", amount: 1, unit: "C. à café", rayon: "Épicerie & Féculents", bought: false }
    ],
    steps: [
      "1. Couper 2 tomates fraîches en petits dés.",
      "2. Griller 2 tranches de pain au gril ou à la poêle.",
      "3. Garnir le pain des dés de tomates, arroser d'huile d'olive, d'origan du stock, sel et poivre.",
      "4. Servir immédiatement."
    ],
    bergamoTip: "Un classique italien ultra simple et frais."
  },
  {
    id: "gratin-chou-fleur-pdt-dinde",
    name: "Gratin de chou-fleur, pommes de terre & dinde",
    category: "Viandes & Poêlées",
    prepTime: 20,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Légume", "Féculent"],
    ingredients: [
      { name: "Dés de dinde ou poulet", amount: 1, unit: "barquette (150g)", rayon: "Boucherie & Poisson", bought: true },
      { name: "Chou-fleur (congélateur)", amount: 150, unit: "g", rayon: "Légumes", bought: false },
      { name: "Pommes de terre fraîches", amount: 150, unit: "g", rayon: "Fruits & Légumes", bought: true }
    ],
    steps: [
      "1. Cuire les pommes de terre en dés et le chou-fleur du congel 10 min à l'eau bouillante salée.",
      "2. Faire dorer ta barquette de dés de dinde 5 min à la poêle.",
      "3. Mélanger le tout dans un plat ou à la poêle avec un filet d'huile d'olive, saler et poivrer.",
      "4. Servir bien chaud."
    ],
    bergamoTip: "Utilise le chou-fleur de ton congélateur !"
  },
  {
    id: "poelee-pdt-courgettes-oeufs",
    name: "Poêlée de pommes de terre, courgettes & œufs au plat",
    category: "Express & Salés",
    prepTime: 15,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Légume", "Féculent"],
    ingredients: [
      { name: "Pommes de terre fraîches", amount: 200, unit: "g", rayon: "Fruits & Légumes", bought: true },
      { name: "Courgettes fraîches", amount: 1, unit: "pièces", rayon: "Fruits & Légumes", bought: true },
      { name: "Œufs frais", amount: 2, unit: "boîte (6 œufs)", rayon: "Crémerie & Fromages", bought: true }
    ],
    steps: [
      "1. Couper 200g de pommes de terre et 1 courgette en petits dés.",
      "2. Rissoler les pommes de terre 10 min à la poêle avec de l'huile d'olive, puis ajouter la courgette 5 min.",
      "3. Casser 2 œufs de ta boîte directement par-dessus ou les cuire au plat à côté.",
      "4. Servir bien chaud."
    ],
    bergamoTip: "Repas ultra économique (<1,50 €) de fin de semaine !"
  },
  {
    id: "sandwich-thon-tomate-salade",
    name: "Toast grillé au thon, tomate & salade",
    category: "Express & Salés",
    prepTime: 8,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Légume", "Féculent"],
    ingredients: [
      { name: "Thon au naturel (stock)", amount: 1, unit: "boîte (130g)", rayon: "Épicerie & Féculents", bought: false },
      { name: "Pain (stock)", amount: 2, unit: "tranches", rayon: "Épicerie & Féculents", bought: false },
      { name: "Salade verte", amount: 0.33, unit: "sachet", rayon: "Fruits & Légumes", bought: true }
    ],
    steps: [
      "1. Griller 2 tranches de pain du stock.",
      "2. Émietter la boîte de thon du stock avec un filet d'huile d'olive.",
      "3. Garnir le sandwich de thon et du 1/3 de salade verte.",
      "4. Déguster immédiatement."
    ],
    bergamoTip: "Repas sur le pouce ultra rapide du samedi midi."
  },
  {
    id: "poisson-pane-haricots-riz",
    name: "Poisson pané au citron, haricots verts & riz",
    category: "Poisson & Poêlées",
    prepTime: 15,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Légume", "Féculent"],
    ingredients: [
      { name: "Poisson pané (congélateur)", amount: 2, unit: "pièces", rayon: "Boucherie & Poisson", bought: false },
      { name: "Haricots verts (congélateur)", amount: 100, unit: "g", rayon: "Légumes", bought: false },
      { name: "Riz basmati (stock)", amount: 70, unit: "g", rayon: "Épicerie & Féculents", bought: false }
    ],
    steps: [
      "1. Cuire 70g de riz basmati et réchauffer les haricots verts du congel.",
      "2. Poêler 2 poissons panés du congel 8 min à feu moyen avec une noisette de beurre.",
      "3. Arroser d'un filet de jus de citron.",
      "4. Servir le tout chaud !"
    ],
    bergamoTip: "Utilise le poisson pané et les haricots verts de ton congélateur."
  },
  {
    id: "pates-thon-sauce-tomate-olives",
    name: "Pâtes au thon, sauce tomate & olives vertes",
    category: "Pâtes & Riz",
    prepTime: 12,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Légume", "Féculent"],
    ingredients: [
      { name: "Pâtes (stock)", amount: 90, unit: "g", rayon: "Épicerie & Féculents", bought: false },
      { name: "Thon au naturel (stock)", amount: 1, unit: "boîte (130g)", rayon: "Épicerie & Féculents", bought: false },
      { name: "Sauce tomate (stock)", amount: 1, unit: "bocal", rayon: "Épicerie & Féculents", bought: false },
      { name: "Olives vertes", amount: 1, unit: "bocal", rayon: "Épicerie & Féculents", bought: true }
    ],
    steps: [
      "1. Cuire 90g de pâtes du stock al dente.",
      "2. Réchauffer la sauce tomate du stock avec le thon et quelques olives vertes tranchées.",
      "3. Mélanger la sauce aux pâtes chaudes.",
      "4. Servir chaud."
    ],
    bergamoTip: "Recette rapide du dimanche midi du fichier de Maman !"
  },
  {
    id: "croque-monsieur-jambon-fromage",
    name: "Croque-monsieur au jambon & fromage à la poêle",
    category: "Express & Salés",
    prepTime: 8,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Féculent"],
    ingredients: [
      { name: "Jambon cuit & Fromage pour croque", amount: 1, unit: "paquet", rayon: "Charcuterie & Traiteur", bought: true },
      { name: "Pain (stock)", amount: 2, unit: "tranches", rayon: "Épicerie & Féculents", bought: false },
      { name: "Salade verte", amount: 0.33, unit: "sachet", rayon: "Fruits & Légumes", bought: true }
    ],
    steps: [
      "1. Monter le croque-monsieur avec 2 tranches de pain, le jambon et le fromage.",
      "2. Faire dorer à la poêle 3 min de chaque côté avec une noisette de beurre jusqu'à ce que le fromage fonde.",
      "3. Servir bien chaud avec le dernier 1/3 de salade verte."
    ],
    bergamoTip: "Repas express 5 min sans four pour le dimanche soir !"
  }
];

function getRecipeById(id) {
  return RECIPES_DB.find(r => r.id === id);
}

const CURRENT_REAL_WEEK_MENU = {
  lundi: { midi: null, soir: "poulet-pates-epinards" },
  mardi: { midi: null, soir: "focaccia-mozza-tomates" },
  mercredi: { midi: null, soir: "bruschetta-pomodoro" },
  jeudi: { midi: null, soir: "gratin-chou-fleur-pdt-dinde" },
  vendredi: { midi: null, soir: "poelee-pdt-courgettes-oeufs" },
  samedi: { midi: "sandwich-thon-tomate-salade", soir: "poisson-pane-haricots-riz" },
  dimanche: { midi: "pates-thon-sauce-tomate-olives", soir: "croque-monsieur-jambon-fromage" }
};
