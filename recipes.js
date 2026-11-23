/**
 * Erasmus Meal Planner - Validated Week 10 Menu (Bergamo v29.0)
 * Semaine du 23/11 au 29/11 : congélateur (saumon, poulet), sans oignon, beurre ni feta.
 * Courses Carrefour Market : crème, 6 œufs, 3 pommes de terre, 3 courgettes, tomates cerises, ricotta, jambon cuit, pancetta, mozzarella, haricots rouges, pois chiches (~14,50 € total).
 */

const RECIPES_DB = [
  {
    id: "pates-saumon-creme-v10",
    name: "Pâtes au saumon & à la crème",
    category: "Pâtes & Riz",
    prepTime: 15,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Féculent"],
    ingredients: [
      { name: "Pavé de saumon (congélateur)", amount: 1, unit: "pièce", rayon: "Boucherie & Poisson", bought: false },
      { name: "Crème liquide (panna da cucina) 200 ml", amount: 1, unit: "brique", rayon: "Crémerie & Fromages", bought: true },
      { name: "Pâtes (stock)", amount: 100, unit: "g", rayon: "Épicerie & Féculents", bought: false },
      { name: "Ail (stock)", amount: 1, unit: "gousse", rayon: "Fruits & Légumes", bought: false }
    ],
    steps: [
      "0. Sortir le saumon du congélateur et le mettre dans un bol d'eau froide (~1 h), ou le matin au frigo.",
      "1. Cuire 100 g de pâtes à l'eau bouillante salée.",
      "2. Retirer la peau du saumon et le couper en dés. Le faire dorer 3-4 min dans un filet d'huile avec l'ail écrasé.",
      "3. Ajouter la MOITIÉ de la crème (100 ml), poivrer, laisser épaissir 2 min à feu doux.",
      "4. Égoutter les pâtes en gardant un peu d'eau de cuisson, les verser dans la poêle et mélanger (un peu d'eau si c'est trop épais)."
    ],
    bergamoTip: "Referme bien la brique : l'autre moitié sert samedi soir (riz pancetta). ~30 g de protéines."
  },
  {
    id: "oeufs-poches-tomate-mozzarella-riz",
    name: "Œufs pochés à la tomate, ail & origan, mozzarella, riz",
    category: "Légumineuses & Œufs",
    prepTime: 20,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Féculent", "Végétarien"],
    ingredients: [
      { name: "Boîte de 6 œufs frais", amount: 1, unit: "boîte", rayon: "Crémerie & Fromages", bought: true },
      { name: "Mozzarella 125 g", amount: 1, unit: "boule", rayon: "Crémerie & Fromages", bought: true },
      { name: "Passata (stock)", amount: 300, unit: "g", rayon: "Épicerie & Féculents", bought: false },
      { name: "Ail (stock)", amount: 1, unit: "gousse", rayon: "Fruits & Légumes", bought: false },
      { name: "Origan (stock)", amount: 1, unit: "pincée", rayon: "Épicerie & Féculents", bought: false },
      { name: "Riz (stock)", amount: 70, unit: "g", rayon: "Épicerie & Féculents", bought: false }
    ],
    steps: [
      "1. Cuire 70 g de riz à l'eau bouillante salée.",
      "2. Faire revenir l'ail écrasé dans un filet d'huile 30 secondes, ajouter ~300 g de passata, l'origan, sel et poivre. Laisser épaissir 5 min.",
      "3. Mettre de côté la moitié de la sauce dans une boîte au frigo (pour vendredi).",
      "4. Creuser 2 trous dans la sauce restante, y casser 2 œufs, poser la mozzarella en morceaux autour, couvrir et cuire 5-6 min à feu doux jusqu'à ce que les blancs soient pris.",
      "5. Servir sur le riz."
    ],
    bergamoTip: "Garde bien la moitié de la sauce pour la semoule de vendredi. ~26 g de protéines."
  },
  {
    id: "chili-haricots-rouges-poulet-riz",
    name: "Chili de haricots rouges au poulet, riz",
    category: "Viandes & Poêlées",
    prepTime: 20,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Féculent"],
    ingredients: [
      { name: "Blanc de poulet (congélateur)", amount: 150, unit: "g", rayon: "Boucherie & Poisson", bought: false },
      { name: "Haricots rouges en boîte (fagioli rossi) 400 g", amount: 1, unit: "boîte", rayon: "Épicerie & Féculents", bought: true },
      { name: "Passata (stock)", amount: 150, unit: "g", rayon: "Épicerie & Féculents", bought: false },
      { name: "Ail (stock)", amount: 1, unit: "gousse", rayon: "Fruits & Légumes", bought: false },
      { name: "Origan (stock)", amount: 1, unit: "pincée", rayon: "Épicerie & Féculents", bought: false },
      { name: "Riz (stock)", amount: 70, unit: "g", rayon: "Épicerie & Féculents", bought: false }
    ],
    steps: [
      "0. La veille au soir : sortir le poulet du congélateur et le mettre au frigo.",
      "1. Cuire 70 g de riz à l'eau bouillante salée.",
      "2. Couper le poulet en petits dés et le faire dorer 5 min dans un filet d'huile avec l'ail écrasé.",
      "3. Ajouter toute la boîte de haricots rouges égouttés et rincés, 150 g de passata, l'origan, sel et poivre (et du piment si tu en as).",
      "4. Laisser mijoter 5-8 min à feu moyen : ça doit être épais. Servir avec le riz."
    ],
    bergamoTip: "~45 g de protéines."
  },
  {
    id: "pates-ricotta-jambon-courgette",
    name: "Pâtes à la ricotta, jambon cuit & courgette",
    category: "Pâtes & Riz",
    prepTime: 15,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Féculent", "Légumes"],
    ingredients: [
      { name: "Ricotta 250 g", amount: 1, unit: "pot", rayon: "Crémerie & Fromages", bought: true },
      { name: "Jambon cuit (prosciutto cotto) 120 g", amount: 1, unit: "barquette", rayon: "Crémerie & Fromages", bought: true },
      { name: "Courgette", amount: 1, unit: "pièce", rayon: "Fruits & Légumes", bought: true },
      { name: "Fromage râpé (stock)", amount: 2, unit: "C. à soupe", rayon: "Crémerie & Fromages", bought: false },
      { name: "Ail (stock)", amount: 1, unit: "gousse", rayon: "Fruits & Légumes", bought: false },
      { name: "Pâtes (stock)", amount: 100, unit: "g", rayon: "Épicerie & Féculents", bought: false }
    ],
    steps: [
      "1. Cuire 100 g de pâtes à l'eau bouillante salée.",
      "2. Faire sauter la courgette en petits dés 6-7 min à feu vif dans un filet d'huile, avec l'ail écrasé à la fin.",
      "3. Ajouter le jambon coupé en lanières 1 min.",
      "4. Hors du feu, ajouter la ricotta (tout le pot), le fromage râpé, du poivre et un peu d'eau de cuisson pour faire une sauce crémeuse.",
      "5. Ajouter les pâtes égouttées et bien mélanger."
    ],
    bergamoTip: "~38 g de protéines."
  },
  {
    id: "semoule-pois-chiches-sauce-tomate",
    name: "Semoule, pois chiches, tomates cerises & reste de sauce tomate",
    category: "Légumineuses & Œufs",
    prepTime: 10,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Féculent", "Végétarien"],
    ingredients: [
      { name: "Pois chiches en boîte (ceci) 400 g", amount: 1, unit: "boîte", rayon: "Épicerie & Féculents", bought: true },
      { name: "Tomates cerises 250 g", amount: 1, unit: "barquette", rayon: "Fruits & Légumes", bought: true },
      { name: "Sauce tomate (reste de mardi)", amount: 1, unit: "boîte", rayon: "Épicerie & Féculents", bought: false },
      { name: "Semoule (stock)", amount: 70, unit: "g", rayon: "Épicerie & Féculents", bought: false }
    ],
    steps: [
      "1. Préparer 70 g de semoule : la couvrir d'eau bouillante salée avec un filet d'huile, attendre 5 min, puis l'égrainer à la fourchette.",
      "2. Pendant ce temps, réchauffer le reste de sauce tomate de mardi dans une poêle avec les pois chiches égouttés et rincés, 3-4 min.",
      "3. Ajouter quelques tomates cerises coupées en deux à la fin.",
      "4. Servir sur la semoule."
    ],
    bergamoTip: "~20 g de protéines."
  },
  {
    id: "tortilla-pdt-ail",
    name: "Tortilla de pommes de terre à l'ail, tomates cerises",
    category: "Légumineuses & Œufs",
    prepTime: 20,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Féculent", "Végétarien"],
    ingredients: [
      { name: "Pommes de terre (à l'unité)", amount: 3, unit: "pièces", rayon: "Fruits & Légumes", bought: true },
      { name: "Œufs frais (de la boîte)", amount: 3, unit: "œufs", rayon: "Crémerie & Fromages", bought: false },
      { name: "Tomates cerises (de la barquette)", amount: 6, unit: "pièces", rayon: "Fruits & Légumes", bought: false },
      { name: "Ail (stock)", amount: 1, unit: "gousse", rayon: "Fruits & Légumes", bought: false }
    ],
    steps: [
      "1. Éplucher les pommes de terre et les couper en fines rondelles (ou petits dés).",
      "2. Les cuire 10-12 min à couvert à feu moyen dans une poêle avec un bon filet d'huile, en remuant de temps en temps, jusqu'à ce qu'elles soient tendres. Ajouter l'ail écrasé à la fin.",
      "3. Battre 3 œufs avec sel et poivre, y verser les pommes de terre et mélanger.",
      "4. Remettre le tout dans la poêle huilée, couvrir et cuire 4-5 min à feu doux. Retourner avec une assiette et cuire encore 2 min.",
      "5. Servir avec les tomates cerises coupées en deux."
    ],
    bergamoTip: "~21 g de protéines."
  },
  {
    id: "riz-cremeux-pancetta-courgette",
    name: "Riz crémeux à la pancetta & à la courgette",
    category: "Pâtes & Riz",
    prepTime: 20,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Féculent", "Légumes"],
    ingredients: [
      { name: "Pancetta en dés (cubetti) 75 g", amount: 1, unit: "barquette", rayon: "Boucherie & Poisson", bought: true },
      { name: "Courgette", amount: 1, unit: "pièce", rayon: "Fruits & Légumes", bought: true },
      { name: "Crème liquide (reste de lundi)", amount: 100, unit: "ml", rayon: "Crémerie & Fromages", bought: false },
      { name: "Fromage râpé (stock)", amount: 3, unit: "C. à soupe", rayon: "Crémerie & Fromages", bought: false },
      { name: "Riz (stock)", amount: 80, unit: "g", rayon: "Épicerie & Féculents", bought: false }
    ],
    steps: [
      "1. Cuire 80 g de riz à l'eau bouillante salée, puis l'égoutter.",
      "2. Pendant ce temps, faire dorer la pancetta 3 min à sec dans une poêle, puis ajouter la courgette en petits dés et la faire sauter 6-7 min.",
      "3. Ajouter le riz, la crème restante et le fromage râpé. Mélanger 2 min à feu doux jusqu'à ce que ce soit crémeux. Poivrer (la pancetta sale déjà)."
    ],
    bergamoTip: "Sens la crème avant : ouverte lundi, elle doit encore être bonne. ~22 g de protéines."
  },
  {
    id: "haricots-blancs-pancetta-ail-origan",
    name: "Haricots blancs poêlés à l'ail, à l'origan & à la pancetta",
    category: "Légumineuses & Œufs",
    prepTime: 12,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Féculent"],
    ingredients: [
      { name: "Haricots blancs (cannellini) en boîte (stock)", amount: 1, unit: "boîte", rayon: "Épicerie & Féculents", bought: false },
      { name: "Pancetta en dés (cubetti) 75 g", amount: 1, unit: "barquette", rayon: "Boucherie & Poisson", bought: true },
      { name: "Ail (stock)", amount: 1, unit: "gousse", rayon: "Fruits & Légumes", bought: false },
      { name: "Origan (stock)", amount: 1, unit: "pincée", rayon: "Épicerie & Féculents", bought: false },
      { name: "Riz (stock) ou pain", amount: 70, unit: "g", rayon: "Épicerie & Féculents", bought: false }
    ],
    steps: [
      "1. Si riz : cuire 70 g de riz à l'eau bouillante salée.",
      "2. Faire dorer la pancetta 3 min à sec dans une poêle.",
      "3. Ajouter l'ail écrasé, puis les haricots blancs égouttés et rincés, l'origan et un filet d'huile. Faire sauter 4-5 min pour qu'ils dorent un peu. Poivrer.",
      "4. Servir avec le riz ou du pain."
    ],
    bergamoTip: "~27 g de protéines."
  },
  {
    id: "pates-legumes-courgette-tomates-cerises",
    name: "Pâtes aux légumes : courgette à l'ail, tomates cerises & fromage râpé",
    category: "Pâtes & Riz",
    prepTime: 15,
    cost: "€",
    servings: 1,
    tags: ["Féculent", "Légumes", "Végétarien"],
    ingredients: [
      { name: "Courgette", amount: 1, unit: "pièce", rayon: "Fruits & Légumes", bought: true },
      { name: "Tomates cerises (reste de la barquette)", amount: 8, unit: "pièces", rayon: "Fruits & Légumes", bought: false },
      { name: "Fromage râpé (stock)", amount: 3, unit: "C. à soupe", rayon: "Crémerie & Fromages", bought: false },
      { name: "Ail (stock)", amount: 1, unit: "gousse", rayon: "Fruits & Légumes", bought: false },
      { name: "Pâtes (stock)", amount: 100, unit: "g", rayon: "Épicerie & Féculents", bought: false }
    ],
    steps: [
      "1. Cuire 100 g de pâtes à l'eau bouillante salée.",
      "2. Faire sauter la courgette en demi-rondelles 6-7 min à feu vif dans un filet d'huile, puis ajouter l'ail écrasé et les tomates cerises coupées en deux 2 min.",
      "3. Ajouter les pâtes égouttées avec un peu d'eau de cuisson et le fromage râpé, mélanger. Sel, poivre."
    ],
    bergamoTip: "~18 g de protéines."
  }
];

function getRecipeById(id) {
  return RECIPES_DB.find(r => r.id === id);
}

const CURRENT_REAL_WEEK_MENU = {
  lundi: { midi: null, soir: "pates-saumon-creme-v10" },
  mardi: { midi: null, soir: "oeufs-poches-tomate-mozzarella-riz" },
  mercredi: { midi: null, soir: "chili-haricots-rouges-poulet-riz" },
  jeudi: { midi: null, soir: "pates-ricotta-jambon-courgette" },
  vendredi: { midi: null, soir: "semoule-pois-chiches-sauce-tomate" },
  samedi: { midi: "tortilla-pdt-ail", soir: "riz-cremeux-pancetta-courgette" },
  dimanche: { midi: "haricots-blancs-pancetta-ail-origan", soir: "pates-legumes-courgette-tomates-cerises" }
};

const EXTRA_GROCERY_ITEMS = [];
