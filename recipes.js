/**
 * Erasmus Meal Planner - Validated Week 6 Menu (Bergamo v25.0)
 * Semaine du 26/10 au 01/11 : œufs + légumineuses du placard, congélateur (filets meunière, bâtonnets, steaks hachés).
 * Courses Carrefour Market : 4 courgettes, 1 boîte de 6 œufs, 2 pommes de terre (~4,30 € total).
 */

const RECIPES_DB = [
  {
    id: "chakchouka-haricots-rouges",
    name: "Chakchouka aux haricots rouges & 2 œufs pochés",
    category: "Œufs & Légumineuses",
    prepTime: 15,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Légumineuse"],
    ingredients: [
      { name: "Boîte de 6 œufs frais", amount: 1, unit: "boîte", rayon: "Crémerie & Fromages", bought: true },
      { name: "Passata (stock)", amount: 1, unit: "bouteille (235g)", rayon: "Épicerie & Féculents", bought: false },
      { name: "Haricots rouges (stock)", amount: 1, unit: "petite boîte", rayon: "Épicerie & Féculents", bought: false },
      { name: "Oignon (stock)", amount: 0.5, unit: "pièce", rayon: "Fruits & Légumes", bought: false }
    ],
    steps: [
      "1. Faire revenir 1/2 oignon émincé 3 min dans une poêle avec un filet d'huile d'olive.",
      "2. Ajouter toute la bouteille de passata (235g), les haricots rouges rincés et égouttés, sel, poivre, cumin ou paprika. Laisser mijoter 5 min.",
      "3. Creuser 2 puits dans la sauce et y casser 2 œufs.",
      "4. Couvrir et laisser cuire 5-6 min à feu doux jusqu'à ce que les blancs soient pris.",
      "5. Déguster directement dans la poêle."
    ],
    bergamoTip: "Plat d'Afrique du Nord ultra économique : 2 œufs + haricots = ~28 g de protéines."
  },
  {
    id: "pdt-sautees-oeufs-plat",
    name: "Pommes de terre sautées & 2 œufs au plat",
    category: "Œufs & Légumineuses",
    prepTime: 20,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Féculent"],
    ingredients: [
      { name: "Pommes de terre (au détail)", amount: 2, unit: "pièces moyennes", rayon: "Fruits & Légumes", bought: true },
      { name: "Œufs frais (de la boîte)", amount: 2, unit: "pièces", rayon: "Crémerie & Fromages", bought: false }
    ],
    steps: [
      "1. Éplucher et couper les 2 pommes de terre en petits cubes (plus c'est petit, plus ça cuit vite).",
      "2. Les faire dorer 15 min dans une poêle huilée à feu moyen, avec couvercle les 8 premières minutes, en remuant de temps en temps. Saler, ajouter de l'ail ou des herbes.",
      "3. Pousser les pommes de terre sur le côté et cuire 2 œufs au plat dans la même poêle (3 min).",
      "4. Servir bien chaud."
    ],
    bergamoTip: "Une seule poêle, zéro vaisselle en plus."
  },
  {
    id: "filets-meuniere-courgette-riz",
    name: "Filets meunière, courgette à l'ail & riz",
    category: "Poisson & Poêlées",
    prepTime: 15,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Légume", "Féculent"],
    ingredients: [
      { name: "Filets meunière (congélateur)", amount: 2, unit: "pièces", rayon: "Boucherie & Poisson", bought: false },
      { name: "Courgette fraîche", amount: 1, unit: "pièce", rayon: "Fruits & Légumes", bought: true },
      { name: "Riz basmati (stock)", amount: 70, unit: "g", rayon: "Épicerie & Féculents", bought: false }
    ],
    steps: [
      "1. Cuire 70g de riz à l'eau bouillante salée.",
      "2. Couper la courgette en rondelles et la faire sauter 6-7 min à la poêle avec huile d'olive, ail, sel et poivre.",
      "3. Dans une autre poêle, cuire les filets meunière surgelés selon le paquet (environ 4 min par face).",
      "4. Servir avec un filet de citron si tu en as."
    ],
    bergamoTip: "Si tes lentilles sont sèches, lance-les en cuisson ce soir (25 min) pour le dahl de jeudi."
  },
  {
    id: "dahl-lentilles-riz",
    name: "Dahl de lentilles au curry & riz",
    category: "Œufs & Légumineuses",
    prepTime: 15,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Légumineuse", "Féculent"],
    ingredients: [
      { name: "Lentilles (stock)", amount: 1, unit: "boîte (ou ~80g sèches cuites la veille)", rayon: "Épicerie & Féculents", bought: false },
      { name: "Riz basmati (stock)", amount: 70, unit: "g", rayon: "Épicerie & Féculents", bought: false },
      { name: "Oignon (stock)", amount: 0.5, unit: "pièce", rayon: "Fruits & Légumes", bought: false }
    ],
    steps: [
      "1. Cuire 70g de riz à l'eau bouillante salée.",
      "2. Faire revenir 1/2 oignon émincé dans une casserole avec un filet d'huile et 1 c. à café de curry (1 min).",
      "3. Ajouter les lentilles égouttées et un petit verre d'eau. Laisser mijoter 8 min en écrasant un peu les lentilles pour que ça devienne crémeux.",
      "4. Saler, poivrer et servir sur le riz."
    ],
    bergamoTip: "Plat indien 100% placard : 0 € ce soir."
  },
  {
    id: "pates-pesto",
    name: "Pâtes au pesto",
    category: "Pâtes & Riz",
    prepTime: 12,
    cost: "€",
    servings: 1,
    tags: ["Féculent"],
    ingredients: [
      { name: "Pâtes (stock)", amount: 100, unit: "g", rayon: "Épicerie & Féculents", bought: false },
      { name: "Pesto (stock)", amount: 2, unit: "C. à soupe", rayon: "Épicerie & Féculents", bought: false }
    ],
    steps: [
      "1. Cuire 100g de pâtes à l'eau bouillante salée.",
      "2. Égoutter en gardant une cuillère d'eau de cuisson.",
      "3. Mélanger hors du feu avec 2 C. à soupe de pesto et l'eau de cuisson pour que ce soit bien enrobé."
    ],
    bergamoTip: "Le classique italien du vendredi soir, 0 € et 12 min."
  },
  {
    id: "batonnets-poisson-courgette",
    name: "Bâtonnets de poisson & courgette poêlée",
    category: "Poisson & Poêlées",
    prepTime: 15,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Légume"],
    ingredients: [
      { name: "Bâtonnets de poisson pané (congélateur)", amount: 6, unit: "pièces", rayon: "Boucherie & Poisson", bought: false },
      { name: "Courgette fraîche", amount: 1, unit: "pièce", rayon: "Fruits & Légumes", bought: true }
    ],
    steps: [
      "1. Cuire les bâtonnets de poisson à la poêle dans un peu d'huile, 3-4 min par face (ou au four selon le paquet).",
      "2. Pendant ce temps, faire sauter la courgette en dés 6-7 min avec huile d'olive, sel et herbes.",
      "3. Servir ensemble."
    ],
    bergamoTip: "Repas du samedi midi sans prise de tête, tout vient du congélateur."
  },
  {
    id: "pois-chiches-poeles-semoule",
    name: "Pois chiches poêlés à l'ail & paprika, semoule",
    category: "Œufs & Légumineuses",
    prepTime: 12,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Légumineuse", "Féculent"],
    ingredients: [
      { name: "Pois chiches (stock)", amount: 1, unit: "boîte", rayon: "Épicerie & Féculents", bought: false },
      { name: "Semoule (stock)", amount: 70, unit: "g", rayon: "Épicerie & Féculents", bought: false }
    ],
    steps: [
      "1. Verser 70g de semoule dans un bol, couvrir du même volume d'eau bouillante salée avec un filet d'huile, couvrir 5 min puis égrainer à la fourchette.",
      "2. Rincer et bien sécher les pois chiches.",
      "3. Les faire dorer 8 min à la poêle avec de l'huile d'olive, 1 gousse d'ail écrasée, 1 c. à café de paprika, sel et poivre, jusqu'à ce qu'ils soient un peu croustillants.",
      "4. Servir sur la semoule."
    ],
    bergamoTip: "Les pois chiches croustillants à la poêle, c'est 0 € et ça change des sauces tomate."
  },
  {
    id: "steak-hache-courgette-semoule",
    name: "Steak haché, courgette sautée & semoule",
    category: "Viandes & Poêlées",
    prepTime: 15,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Légume", "Féculent"],
    ingredients: [
      { name: "Steak haché (congélateur)", amount: 1, unit: "pièce", rayon: "Boucherie & Poisson", bought: false },
      { name: "Courgette fraîche", amount: 1, unit: "pièce", rayon: "Fruits & Légumes", bought: true },
      { name: "Semoule (stock)", amount: 70, unit: "g", rayon: "Épicerie & Féculents", bought: false }
    ],
    steps: [
      "1. Préparer 70g de semoule (même volume d'eau bouillante salée, 5 min à couvert).",
      "2. Faire sauter la courgette en dés 6-7 min avec huile d'olive, ail, sel et poivre.",
      "3. Cuire le steak haché décongelé 3 min par face.",
      "4. Servir ensemble."
    ],
    bergamoTip: "Pense à sortir le steak du congélateur samedi soir pour qu'il décongèle au frigo."
  },
  {
    id: "riz-saute-thon-oeufs",
    name: "Riz sauté au thon, œufs & courgette",
    category: "Pâtes & Riz",
    prepTime: 18,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Légume", "Féculent"],
    ingredients: [
      { name: "Riz basmati (stock)", amount: 70, unit: "g", rayon: "Épicerie & Féculents", bought: false },
      { name: "Thon au naturel (stock)", amount: 1, unit: "boîte (130g)", rayon: "Épicerie & Féculents", bought: false },
      { name: "Œufs frais (de la boîte)", amount: 2, unit: "pièces", rayon: "Crémerie & Fromages", bought: false },
      { name: "Courgette fraîche", amount: 1, unit: "pièce", rayon: "Fruits & Légumes", bought: true }
    ],
    steps: [
      "1. Cuire 70g de riz (idéalement le cuire à midi pour qu'il soit froid le soir, il saute mieux).",
      "2. Faire sauter la courgette en petits dés 5 min dans une grande poêle huilée.",
      "3. Pousser la courgette sur le côté, casser 2 œufs et les brouiller 1 min.",
      "4. Ajouter le riz et le thon égoutté, faire sauter 3 min à feu vif avec sel, poivre (et sauce soja si tu en as).",
      "5. Servir aussitôt."
    ],
    bergamoTip: "Façon riz cantonais, avec les 2 derniers œufs de la boîte."
  }
];

function getRecipeById(id) {
  return RECIPES_DB.find(r => r.id === id);
}

const CURRENT_REAL_WEEK_MENU = {
  lundi: { midi: null, soir: "chakchouka-haricots-rouges" },
  mardi: { midi: null, soir: "pdt-sautees-oeufs-plat" },
  mercredi: { midi: null, soir: "filets-meuniere-courgette-riz" },
  jeudi: { midi: null, soir: "dahl-lentilles-riz" },
  vendredi: { midi: null, soir: "pates-pesto" },
  samedi: { midi: "batonnets-poisson-courgette", soir: "pois-chiches-poeles-semoule" },
  dimanche: { midi: "steak-hache-courgette-semoule", soir: "riz-saute-thon-oeufs" }
};

const EXTRA_GROCERY_ITEMS = [];
