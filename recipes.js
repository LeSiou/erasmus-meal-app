/**
 * Erasmus Meal Planner - Validated Week 8 Menu (Bergamo v27.0)
 * Semaine du 09/11 au 15/11 : congélateur (filets meunière, steak haché, pancetta, bâtonnets), sans oignon ni beurre.
 * Courses Carrefour Market : œufs, gnocchis, épinards surgelés, ricotta, mozzarella, thon, 1 courgette, 3 pommes de terre, petite passata (~10,25 € total).
 */

const RECIPES_DB = [
  {
    id: "filets-meuniere-riz",
    name: "Filets meunière & riz nature",
    category: "Poisson & Poêlées",
    prepTime: 15,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Féculent"],
    ingredients: [
      { name: "Filets meunière (congélateur)", amount: 2, unit: "pièces", rayon: "Boucherie & Poisson", bought: false },
      { name: "Riz (stock)", amount: 70, unit: "g", rayon: "Épicerie & Féculents", bought: false }
    ],
    steps: [
      "1. Cuire 70 g de riz à l'eau bouillante salée, le temps indiqué sur le paquet.",
      "2. Pendant ce temps, chauffer un filet d'huile dans une poêle à feu moyen.",
      "3. Cuire les 2 filets meunière selon le paquet (en général 4-5 min par face), jusqu'à ce qu'ils soient bien dorés.",
      "4. Égoutter le riz, ajouter sel, poivre et un filet d'huile d'olive. Servir avec les filets."
    ],
    bergamoTip: "Tout vient du congélo et du placard : rien à acheter pour ce soir."
  },
  {
    id: "pates-carbonara-pancetta",
    name: "Pâtes carbonara à la pancetta",
    category: "Pâtes & Riz",
    prepTime: 15,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Féculent"],
    ingredients: [
      { name: "Boîte de 6 œufs frais", amount: 1, unit: "boîte", rayon: "Crémerie & Fromages", bought: true },
      { name: "Pancetta en dés (congélateur)", amount: 1, unit: "barquette (80 g)", rayon: "Boucherie & Poisson", bought: false },
      { name: "Pâtes (stock)", amount: 100, unit: "g", rayon: "Épicerie & Féculents", bought: false },
      { name: "Fromage râpé (stock)", amount: 3, unit: "C. à soupe", rayon: "Crémerie & Fromages", bought: false }
    ],
    steps: [
      "1. Cuire 100 g de pâtes à l'eau bouillante salée.",
      "2. Dans un bol, battre 3 œufs avec 3 C. à soupe de fromage râpé et beaucoup de poivre.",
      "3. Faire dorer la pancetta 3-4 min à sec dans une grande poêle (elle rend son gras).",
      "4. Garder un demi-verre d'eau de cuisson, égoutter les pâtes et les mettre dans la poêle avec la pancetta. Remuer 30 secondes.",
      "5. COUPER LE FEU et attendre 30 secondes, puis verser les œufs en remuant vite. Ajouter un peu d'eau de cuisson jusqu'à obtenir une sauce crémeuse : si la poêle est trop chaude, les œufs font une omelette.",
      "6. Pas de sel : la pancetta et le fromage salent déjà."
    ],
    bergamoTip: "La vraie carbonara se fait sans crème : c'est l'œuf et l'eau de cuisson qui font la sauce. ~40 g de protéines."
  },
  {
    id: "gnocchis-facon-bolo",
    name: "Gnocchis façon bolo",
    category: "Viandes & Poêlées",
    prepTime: 20,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Féculent"],
    ingredients: [
      { name: "Gnocchis de pomme de terre (gnocchi di patate) 500 g", amount: 1, unit: "paquet", rayon: "Épicerie & Féculents", bought: true },
      { name: "Petite bouteille de passata (~235 g)", amount: 1, unit: "bouteille", rayon: "Épicerie & Féculents", bought: true },
      { name: "Steak haché (congélateur)", amount: 1, unit: "pièce", rayon: "Boucherie & Poisson", bought: false },
      { name: "Ail (stock)", amount: 1, unit: "gousse", rayon: "Fruits & Légumes", bought: false },
      { name: "Fromage râpé (stock)", amount: 2, unit: "C. à soupe", rayon: "Crémerie & Fromages", bought: false }
    ],
    steps: [
      "0. Le matin : sortir le steak haché du congélateur et le mettre au frigo.",
      "1. Faire revenir la gousse d'ail écrasée 1 min dans un filet d'huile. Ajouter le steak haché et l'émietter à la spatule, 4 min à feu moyen.",
      "2. Ajouter toute la passata, sel, poivre et une bonne pincée d'origan. Laisser mijoter 8 min à feu doux.",
      "3. Pendant ce temps, faire bouillir de l'eau salée. Y plonger la moitié du paquet de gnocchis (250 g) : ils sont cuits dès qu'ils remontent à la surface (~2 min).",
      "4. Les égoutter, les mélanger à la sauce et servir avec le fromage râpé.",
      "5. Bien refermer le reste de gnocchis et le garder au frigo pour vendredi soir."
    ],
    bergamoTip: "Idée piochée dans les menus de maman, en version 20 min."
  },
  {
    id: "haricots-beurre-thon-semoule",
    name: "Haricots beurre à l'ail, thon & semoule",
    category: "Poisson & Poêlées",
    prepTime: 12,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Légume", "Féculent"],
    ingredients: [
      { name: "Thon au naturel", amount: 1, unit: "boîte", rayon: "Épicerie & Féculents", bought: true },
      { name: "Haricots beurre en boîte (stock)", amount: 1, unit: "boîte", rayon: "Épicerie & Féculents", bought: false },
      { name: "Semoule (stock)", amount: 70, unit: "g", rayon: "Épicerie & Féculents", bought: false },
      { name: "Ail (stock)", amount: 1, unit: "gousse", rayon: "Fruits & Légumes", bought: false }
    ],
    steps: [
      "1. Verser 70 g de semoule dans un bol, couvrir du même volume d'eau bouillante salée avec un filet d'huile, couvrir 5 min puis égrainer à la fourchette.",
      "2. Égoutter et rincer les haricots beurre.",
      "3. Faire revenir la gousse d'ail écrasée 1 min dans 1 C. à soupe d'huile, puis ajouter les haricots, du sel, du poivre et de l'origan. Les faire sauter 4 min.",
      "4. Égoutter le thon, l'ajouter en morceaux et réchauffer 1 min sans trop remuer.",
      "5. Servir avec la semoule."
    ],
    bergamoTip: "Tes haricots beurre du placard, prêts en 12 min."
  },
  {
    id: "gnocchis-poeles-epinards-mozza",
    name: "Gnocchis poêlés, épinards & mozzarella fondue",
    category: "Pâtes & Riz",
    prepTime: 15,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Légume", "Féculent"],
    ingredients: [
      { name: "Gnocchis (reste de mercredi)", amount: 250, unit: "g", rayon: "Épicerie & Féculents", bought: false },
      { name: "Épinards surgelés (spinaci surgelati) 450 g", amount: 1, unit: "sachet", rayon: "Fruits & Légumes", bought: true },
      { name: "Mozzarella 125 g", amount: 1, unit: "boule", rayon: "Crémerie & Fromages", bought: true },
      { name: "Ail (stock)", amount: 1, unit: "gousse", rayon: "Fruits & Légumes", bought: false },
      { name: "Fromage râpé (stock)", amount: 1, unit: "C. à soupe", rayon: "Crémerie & Fromages", bought: false }
    ],
    steps: [
      "1. Faire décongeler 200 g d'épinards dans une casserole avec un fond d'eau et du sel, 5 min à couvert. Bien les égoutter en les pressant avec une cuillère. Remettre le reste du sachet au congélateur.",
      "2. Plonger les gnocchis dans l'eau bouillante salée : les sortir dès qu'ils remontent à la surface (~2 min), puis les égoutter.",
      "3. Dans une poêle, faire dorer les gnocchis 3 min dans 1 C. à soupe d'huile avec la gousse d'ail écrasée.",
      "4. Ajouter les épinards, du poivre et 1 C. à soupe de fromage râpé. Mélanger 1 min.",
      "5. Couper le feu, ajouter la mozzarella en dés, couvrir 1 min pour qu'elle fonde."
    ],
    bergamoTip: "La mozzarella apporte à elle seule ~20 g de protéines."
  },
  {
    id: "omelette-courgette-pdt-ail",
    name: "Omelette courgette-fromage & pommes de terre sautées à l'ail",
    category: "Œufs & Légumineuses",
    prepTime: 20,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Légume", "Féculent"],
    ingredients: [
      { name: "Œufs frais (de la boîte)", amount: 3, unit: "pièces", rayon: "Crémerie & Fromages", bought: false },
      { name: "Courgette fraîche", amount: 1, unit: "pièce", rayon: "Fruits & Légumes", bought: true },
      { name: "Pommes de terre (au détail)", amount: 1, unit: "pièce moyenne (~150 g)", rayon: "Fruits & Légumes", bought: true },
      { name: "Fromage râpé (stock)", amount: 2, unit: "C. à soupe", rayon: "Crémerie & Fromages", bought: false },
      { name: "Ail (stock)", amount: 1, unit: "gousse", rayon: "Fruits & Légumes", bought: false }
    ],
    steps: [
      "1. Couper la pomme de terre en petits cubes (1 cm). Les faire cuire 12 min à couvert dans une poêle avec 2 C. à soupe d'huile et du sel, en remuant de temps en temps. Ajouter l'ail écrasé la dernière minute.",
      "2. Pendant ce temps, couper la courgette en fines rondelles. La faire sauter 5 min dans une autre poêle avec un filet d'huile et du sel.",
      "3. Battre 3 œufs avec 2 C. à soupe de fromage râpé, du poivre et une pincée d'origan.",
      "4. Verser les œufs sur la courgette, à feu moyen-doux. Laisser prendre 3-4 min, puis plier l'omelette en deux.",
      "5. Servir avec les pommes de terre."
    ],
    bergamoTip: "Le plat du samedi midi avec les 3 derniers œufs de la boîte."
  },
  {
    id: "batonnets-poisson-puree-huile-olive",
    name: "Bâtonnets de poisson & purée à l'huile d'olive",
    category: "Poisson & Poêlées",
    prepTime: 20,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Féculent"],
    ingredients: [
      { name: "Bâtonnets de poisson pané (congélateur)", amount: 5, unit: "pièces", rayon: "Boucherie & Poisson", bought: false },
      { name: "Pommes de terre (au détail)", amount: 2, unit: "pièce moyenne (~150 g)", rayon: "Fruits & Légumes", bought: true },
      { name: "Fromage râpé (stock)", amount: 1, unit: "C. à soupe", rayon: "Crémerie & Fromages", bought: false }
    ],
    steps: [
      "1. Éplucher 2 pommes de terre et les couper en petits cubes. Les faire cuire 12-15 min dans une casserole d'eau bouillante salée, jusqu'à ce qu'elles s'écrasent à la fourchette.",
      "2. Pendant ce temps, cuire les 5 bâtonnets de poisson à la poêle dans un filet d'huile, 3-4 min par face (ou selon le paquet).",
      "3. Garder un peu d'eau de cuisson, égoutter les pommes de terre et les écraser à la fourchette avec 2 C. à soupe d'huile d'olive.",
      "4. Détendre avec un peu d'eau de cuisson, puis ajouter sel, poivre et 1 C. à soupe de fromage râpé. Servir avec les bâtonnets."
    ],
    bergamoTip: "Purée sans beurre : l'huile d'olive et le fromage suffisent."
  },
  {
    id: "semoule-ratatouille-pois-chiches",
    name: "Semoule, ratatouille & pois chiches",
    category: "Œufs & Légumineuses",
    prepTime: 10,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Légumineuse", "Légume", "Féculent"],
    ingredients: [
      { name: "Ratatouille en conserve (stock)", amount: 1, unit: "boîte (ou la moitié si grande)", rayon: "Épicerie & Féculents", bought: false },
      { name: "Pois chiches (stock, si tu veux)", amount: 1, unit: "boîte", rayon: "Épicerie & Féculents", bought: false },
      { name: "Semoule (stock)", amount: 70, unit: "g", rayon: "Épicerie & Féculents", bought: false }
    ],
    steps: [
      "1. Verser 70 g de semoule dans un bol, couvrir du même volume d'eau bouillante salée avec un filet d'huile, couvrir 5 min puis égrainer à la fourchette.",
      "2. Faire chauffer la ratatouille 5 min dans une petite casserole en remuant.",
      "3. Si tu veux des pois chiches : les rincer, les égoutter et les ajouter à la ratatouille dès le début.",
      "4. Servir sur la semoule, avec du poivre et une pincée d'origan."
    ],
    bergamoTip: "100 % placard, et ~28 g de protéines avec les pois chiches."
  },
  {
    id: "pates-ricotta-epinards",
    name: "Pâtes à la ricotta & aux épinards",
    category: "Pâtes & Riz",
    prepTime: 15,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Légume", "Féculent"],
    ingredients: [
      { name: "Ricotta 250 g", amount: 1, unit: "pot", rayon: "Crémerie & Fromages", bought: true },
      { name: "Épinards surgelés (reste de vendredi)", amount: 250, unit: "g", rayon: "Fruits & Légumes", bought: false },
      { name: "Pâtes (stock)", amount: 100, unit: "g", rayon: "Épicerie & Féculents", bought: false },
      { name: "Ail (stock)", amount: 1, unit: "gousse", rayon: "Fruits & Légumes", bought: false },
      { name: "Fromage râpé (stock)", amount: 2, unit: "C. à soupe", rayon: "Crémerie & Fromages", bought: false }
    ],
    steps: [
      "1. Cuire 100 g de pâtes à l'eau bouillante salée.",
      "2. Pendant ce temps, faire décongeler les épinards dans une poêle avec un fond d'eau, 5 min à couvert. Laisser évaporer l'eau restante.",
      "3. Ajouter la gousse d'ail écrasée et un filet d'huile, puis faire revenir 1 min.",
      "4. Couper le feu, ajouter toute la ricotta, du sel, du poivre et 2 C. à soupe de fromage râpé.",
      "5. Garder un peu d'eau de cuisson, égoutter les pâtes et les mélanger à la sauce. Ajouter un peu d'eau de cuisson pour la rendre crémeuse."
    ],
    bergamoTip: "Finit le sachet d'épinards, ~39 g de protéines."
  }
];

function getRecipeById(id) {
  return RECIPES_DB.find(r => r.id === id);
}

const CURRENT_REAL_WEEK_MENU = {
  lundi: { midi: null, soir: "filets-meuniere-riz" },
  mardi: { midi: null, soir: "pates-carbonara-pancetta" },
  mercredi: { midi: null, soir: "gnocchis-facon-bolo" },
  jeudi: { midi: null, soir: "haricots-beurre-thon-semoule" },
  vendredi: { midi: null, soir: "gnocchis-poeles-epinards-mozza" },
  samedi: { midi: "omelette-courgette-pdt-ail", soir: "batonnets-poisson-puree-huile-olive" },
  dimanche: { midi: "semoule-ratatouille-pois-chiches", soir: "pates-ricotta-epinards" }
};

const EXTRA_GROCERY_ITEMS = [];
