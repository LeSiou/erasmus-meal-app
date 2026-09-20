/**
 * Erasmus Meal Planner - Database of Student Recipes for Bergamo (Semaine 2)
 * Strictly complying with student budget, <30 min prep, no poivrons/petits pois/carottes cuites/sucré-salé.
 */

const RECIPES_DB = [
  {
    id: "aubergines-boeuf-riz",
    name: "Aubergines sautées à la viande hachée & riz",
    category: "Viandes & Poêlées",
    prepTime: 20,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Légume", "Féculent"],
    ingredients: [
      { name: "Aubergines en dés (congélateur)", amount: 150, unit: "g", rayon: "Légumes", bought: false },
      { name: "Viande hachée de bœuf (congélateur)", amount: 125, unit: "g", rayon: "Boucherie & Poisson", bought: false },
      { name: "Riz blanc ou basmati", amount: 70, unit: "g", rayon: "Épicerie & Féculents", bought: false },
      { name: "Gousse d'ail, Huile d'olive, Sel & Poivre", amount: 1, unit: "dose", rayon: "Épicerie & Féculents", bought: false }
    ],
    steps: [
      "1. Cuisson du riz : Porter 150ml d'eau salée à ébullition dans une petite casserole. Verser les 70g de riz, couvrir et cuire 10-12 min à feu doux.",
      "2. Décongélation & Saisie : Dans une poêle avec 1 cuillère à soupe d'huile d'olive, faire dorer la viande hachée décongelée et l'ail émincé pendant 4 min.",
      "3. Rissolage des aubergines : Ajouter les dés d'aubergines. Saler, poivrer et faire rissoler le tout 8-10 min à feu moyen jusqu'à ce que les aubergines soient bien tendres.",
      "4. Assemblage : Déposer le riz chaud dans l'assiette et recouvrir du mélange poêlé aubergines-bœuf juteux."
    ],
    bergamoTip: "Parfait pour vider ton congélateur le lundi soir en rentrant des cours !"
  },
  {
    id: "poulet-curry-courgettes-riz",
    name: "Poêlée de poulet au curry, courgettes & riz basmati",
    category: "Viandes & Poêlées",
    prepTime: 20,
    cost: "€",
    servings: 2, // Mardi + Mercredi
    tags: ["Protéine", "Légume", "Féculent"],
    ingredients: [
      { name: "Lamelles de poulet", amount: 250, unit: "g", rayon: "Boucherie & Poisson", bought: true },
      { name: "Courgettes fraîches", amount: 2, unit: "pièces", rayon: "Fruits & Légumes", bought: true },
      { name: "Riz basmati", amount: 140, unit: "g", rayon: "Épicerie & Féculents", bought: false },
      { name: "Curry en poudre, Huile d'olive, Sel & Poivre", amount: 1, unit: "dose", rayon: "Épicerie & Féculents", bought: false }
    ],
    steps: [
      "1. Cuisson du riz : Cuire 140g de riz basmati dans de l'eau bouillante salée 10 minutes. Égoutter.",
      "2. Courgettes : Couper les 2 courgettes fraîches en dés de 1 cm et les faire revenir 6-8 min à la poêle dans de l'huile d'olive.",
      "3. Poulet & Curry : Ajouter les 250g de poulet et 1 cuillère à café de curry. Faire dorer 5 min supplémentaires.",
      "4. Sauçage : Verser 3 cuillères d'eau pour lier le jus de cuisson. Servir la moitié avec le riz chaud le mardi soir et garder l'autre portion au frigo pour mercredi."
    ],
    bergamoTip: "Fait pour 2 soirs : mardi soir + mercredi soir."
  },
  {
    id: "chili-con-carne-express",
    name: "Chili con carne express sans poivrons & riz",
    category: "Viandes & Poêlées",
    prepTime: 20,
    cost: "€",
    servings: 2, // Jeudi + Vendredi
    tags: ["Protéine", "Légume", "Féculent"],
    ingredients: [
      { name: "Viande hachée de bœuf", amount: 250, unit: "g", rayon: "Boucherie & Poisson", bought: true },
      { name: "Haricots rouges en conserve", amount: 1, unit: "petite boîte", rayon: "Épicerie & Féculents", bought: true },
      { name: "Coulis de tomate nature", amount: 1, unit: "briquette (200g)", rayon: "Épicerie & Féculents", bought: true },
      { name: "Riz blanc", amount: 140, unit: "g", rayon: "Épicerie & Féculents", bought: false },
      { name: "Ail, Épices chili, Huile d'olive, Sel", amount: 1, unit: "dose", rayon: "Épicerie & Féculents", bought: false }
    ],
    steps: [
      "1. Riz : Lancer les 140g de riz blanc dans l'eau bouillante salée pendant 10 min.",
      "2. Viande : Faire dorer les 250g de viande hachée avec l'ail haché dans de l'huile d'olive pendant 4-5 min.",
      "3. Chili : Verser les haricots rouges égouttés, le coulis de tomate et les épices chili. Laisser mijoter 10 min à feu doux.",
      "4. Service & Batch : Servir la 1ère portion le jeudi soir et conserver la 2ème au frais pour vendredi."
    ],
    bergamoTip: "Fait pour 2 soirs : jeudi soir + vendredi soir."
  },
  {
    id: "omelette-tomates-cerises",
    name: "Omelette moelleuse aux tomates cerises & fromage + pain",
    category: "Express & Salés",
    prepTime: 10,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Légume", "Féculent"],
    ingredients: [
      { name: "Tomates cerises", amount: 1, unit: "barquette", rayon: "Fruits & Légumes", bought: true },
      { name: "Pain ou paquet de pain de mie", amount: 1, unit: "paquet", rayon: "Épicerie & Féculents", bought: true },
      { name: "Œufs frais (stock)", amount: 2, unit: "pièces", rayon: "Crémerie & Fromages", bought: false },
      { name: "Fromage râpé ou Emmental (stock)", amount: 30, unit: "g", rayon: "Crémerie & Fromages", bought: false }
    ],
    steps: [
      "1. Préparation : Laver et couper 5-6 tomates cerises en deux.",
      "2. Appareil : Battre 2 œufs dans un bol avec du sel, du poivre et 1 cuillère d'eau.",
      "3. Cuisson : Faire fondre une noisette de beurre à la poêle, verser les œufs. Quand ils commencent à prendre, ajouter le fromage râpé et les demi-tomates cerises.",
      "4. Pliage : Rabattre en demi-lune et servir immédiatement avec 2 tranches de pain grillé."
    ],
    bergamoTip: "Repas express du samedi midi prêt en 10 minutes."
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
      { name: "Haricots verts (frais ou surgelés)", amount: 1, unit: "portion (150g)", rayon: "Fruits & Légumes", bought: true },
      { name: "Citron jaune ou jus de citron", amount: 1, unit: "filet", rayon: "Fruits & Légumes", bought: false },
      { name: "Riz ou Pommes de terre (stock)", amount: 100, unit: "g", rayon: "Épicerie & Féculents", bought: false }
    ],
    steps: [
      "1. Haricots : Faire cuire les haricots verts dans l'eau bouillante salée pendant 8-10 min. Égoutter.",
      "2. Papillote : Sur une feuille de papier cuisson, déposer le pavé de saumon décongelé. Arroser d'un filet d'huile d'olive, de jus de citron, sel et poivre. Refermer bien la papillote.",
      "3. Cuisson saumon : Cuire 12-15 min au four à 180°C (ou 10 min à la poêle à couvert avec un fond d'eau).",
      "4. Service : Servir le saumon fondant avec les haricots verts et le riz du stock."
    ],
    bergamoTip: "Le saumon en papillote est ultra moelleux et sans odeur de cuisson !"
  },
  {
    id: "bagel-avocat-thon",
    name: "Toast Avocat, Thon au naturel & jus de citron",
    category: "Express & Salés",
    prepTime: 10,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Légume", "Féculent"],
    ingredients: [
      { name: "Avocat mûr", amount: 1, unit: "pièce", rayon: "Fruits & Légumes", bought: true },
      { name: "Thon au naturel (stock)", amount: 1, unit: "boîte (80g)", rayon: "Boucherie & Poisson", bought: false },
      { name: "Pain de mie ou Bagel (acheté)", amount: 2, unit: "tranches", rayon: "Épicerie & Féculents", bought: false },
      { name: "Citron, Sel & Poivre", amount: 1, unit: "dose", rayon: "Fruits & Légumes", bought: false }
    ],
    steps: [
      "1. Toast : Faire griller 2 tranches de pain au grille-pain.",
      "2. Écrasé d'avocat : Écraser la moitié de l'avocat à la fourchette avec un filet de jus de citron, sel et poivre.",
      "3. Mélange : Ajouter le thon égoutté du stock et mélanger légèrement.",
      "4. Tartinade : Étaler généreusement la préparation au thon et avocat sur le pain chaud grillé."
    ],
    bergamoTip: "Repas du dimanche midi ultra frais et protéiné."
  },
  {
    id: "focaccia-pizza-mozza",
    name: "Focaccia gratinée façon pizza tomate & mozzarella (Air Fryer)",
    category: "Express & Salés",
    prepTime: 10,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Légume", "Féculent"],
    ingredients: [
      { name: "Grosse tomate fraîche", amount: 1, unit: "pièce", rayon: "Fruits & Légumes", bought: true },
      { name: "Boule de mozzarella fraîche", amount: 1, unit: "boule", rayon: "Crémerie & Fromages", bought: true },
      { name: "Focaccia nature", amount: 1, unit: "pièce", rayon: "Épicerie & Féculents", bought: true },
      { name: "Origan & Huile d'olive (stock)", amount: 1, unit: "pincée", rayon: "Épicerie & Féculents", bought: false }
    ],
    steps: [
      "1. Découpe : Ouvrir la focaccia nature achetée en deux.",
      "2. Garniture : Trancher la grosse tomate et la mozzarella en rondelles régulières.",
      "3. Gratinage : Disposer tomates et mozza sur le pain, saupoudrer d'origan. Passer à l'Air Fryer 6-8 min à 180°C jusqu'à ce que le fromage soit gratiné et coulant."
    ],
    bergamoTip: "Le repas chaud réconfortant du dimanche soir !"
  }
];

function getRecipeById(id) {
  return RECIPES_DB.find(r => r.id === id);
}

const CURRENT_REAL_WEEK_MENU = {
  lundi: { midi: null, soir: "aubergines-boeuf-riz" },
  mardi: { midi: null, soir: "poulet-curry-courgettes-riz" },
  mercredi: { midi: null, soir: "poulet-curry-courgettes-riz" },
  jeudi: { midi: null, soir: "chili-con-carne-express" },
  vendredi: { midi: null, soir: "chili-con-carne-express" },
  samedi: { midi: "omelette-tomates-cerises", soir: "saumon-papillote-haricots" },
  dimanche: { midi: "bagel-avocat-thon", soir: "focaccia-pizza-mozza" }
};
