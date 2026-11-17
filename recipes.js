/**
 * Erasmus Meal Planner - Validated Week 9 Menu (Bergamo v28.0)
 * Semaine du 17/11 au 22/11 (lundi soir retiré) : congélateur (escalope de dinde, cordons bleus, steak haché, pancetta), sans oignon ni beurre.
 * Courses Carrefour Market : œufs, 2 courgettes, lentilles, semoule, crème, tortellini, piadine, mozzarella, tomates cerises (~11,50 € total).
 */

const RECIPES_DB = [
  {
    id: "escalope-dinde-ail-citron-riz",
    name: "Escalope de dinde à l'ail & au citron, riz",
    category: "Viandes & Poêlées",
    prepTime: 15,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Féculent"],
    ingredients: [
      { name: "Escalope de dinde (congélateur)", amount: 1, unit: "pièce", rayon: "Boucherie & Poisson", bought: false },
      { name: "Jus de citron (stock)", amount: 1, unit: "C. à soupe", rayon: "Épicerie & Féculents", bought: false },
      { name: "Riz (stock)", amount: 70, unit: "g", rayon: "Épicerie & Féculents", bought: false },
      { name: "Ail (stock)", amount: 1, unit: "gousse", rayon: "Fruits & Légumes", bought: false }
    ],
    steps: [
      "0. Le matin : sortir l'escalope du congélateur et la mettre au frigo.",
      "1. Cuire 70 g de riz à l'eau bouillante salée, le temps indiqué sur le paquet.",
      "2. Chauffer un filet d'huile dans une poêle à feu moyen-vif. Saler et poivrer l'escalope.",
      "3. La cuire 3-4 min par face, jusqu'à ce qu'elle soit bien dorée et plus du tout rose au centre.",
      "4. Baisser le feu, ajouter la gousse d'ail écrasée et 1 C. à soupe de jus de citron. Laisser 30 secondes en retournant l'escalope dans le jus.",
      "5. Égoutter le riz, puis verser dessus le jus de la poêle."
    ],
    bergamoTip: "~35 g de protéines."
  },
  {
    id: "curry-pois-chiches-oeufs-riz",
    name: "Curry crémeux de pois chiches aux œufs, riz",
    category: "Légumineuses & Œufs",
    prepTime: 20,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Féculent", "Végétarien"],
    ingredients: [
      { name: "Boîte de 6 œufs frais", amount: 1, unit: "boîte", rayon: "Crémerie & Fromages", bought: true },
      { name: "Pois chiches en boîte (stock)", amount: 1, unit: "boîte", rayon: "Épicerie & Féculents", bought: false },
      { name: "Crème liquide (panna da cucina) 200 ml", amount: 1, unit: "brique", rayon: "Crémerie & Fromages", bought: true },
      { name: "Passata (stock)", amount: 3, unit: "C. à soupe", rayon: "Épicerie & Féculents", bought: false },
      { name: "Curry (stock)", amount: 1, unit: "C. à café", rayon: "Épicerie & Féculents", bought: false },
      { name: "Ail (stock)", amount: 1, unit: "gousse", rayon: "Fruits & Légumes", bought: false },
      { name: "Riz (stock)", amount: 70, unit: "g", rayon: "Épicerie & Féculents", bought: false }
    ],
    steps: [
      "1. Cuire 70 g de riz à l'eau bouillante salée. Dans une autre casserole, cuire 2 œufs 9 min dans l'eau bouillante (œufs durs), puis les passer sous l'eau froide.",
      "2. Dans une poêle, faire revenir l'ail écrasé dans un filet d'huile 30 secondes, puis ajouter le curry 30 secondes.",
      "3. Ajouter les pois chiches égouttés et rincés, 3 C. à soupe de passata et la MOITIÉ de la crème (100 ml). Laisser épaissir 5 min à feu doux. Saler.",
      "4. Écaler les œufs, les couper en deux et les poser dans le curry. Servir avec le riz."
    ],
    bergamoTip: "Garde l'autre moitié de la crème au frigo pour les tortellini de vendredi. ~30 g de protéines."
  },
  {
    id: "cordons-bleus-courgette-ail-origan",
    name: "Cordons bleus & courgette poêlée à l'ail et à l'origan",
    category: "Viandes & Poêlées",
    prepTime: 15,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Légumes"],
    ingredients: [
      { name: "Cordons bleus (congélateur)", amount: 2, unit: "pièces", rayon: "Boucherie & Poisson", bought: false },
      { name: "Courgette", amount: 1, unit: "pièce", rayon: "Fruits & Légumes", bought: true },
      { name: "Ail (stock)", amount: 1, unit: "gousse", rayon: "Fruits & Légumes", bought: false },
      { name: "Origan (stock)", amount: 1, unit: "pincée", rayon: "Épicerie & Féculents", bought: false }
    ],
    steps: [
      "1. Cuire les 2 cordons bleus à la poêle dans un filet d'huile, selon le paquet (en général 5-6 min par face à feu moyen).",
      "2. Pendant ce temps, couper la courgette en demi-rondelles.",
      "3. Dans une autre poêle, faire sauter la courgette 6-7 min à feu vif dans un filet d'huile, jusqu'à ce qu'elle soit dorée.",
      "4. Ajouter l'ail écrasé et l'origan pour la dernière minute. Saler, poivrer."
    ],
    bergamoTip: "~30 g de protéines. Pas de féculent ce soir : la panure des cordons bleus suffit."
  },
  {
    id: "tortellini-jambon-creme",
    name: "Tortellini au jambon, sauce crème & fromage",
    category: "Pâtes & Riz",
    prepTime: 10,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Féculent"],
    ingredients: [
      { name: "Tortellini au jambon (tortellini al prosciutto) 250 g", amount: 1, unit: "paquet", rayon: "Crémerie & Fromages", bought: true },
      { name: "Crème liquide (reste de mercredi)", amount: 100, unit: "ml", rayon: "Crémerie & Fromages", bought: false },
      { name: "Fromage râpé (stock)", amount: 3, unit: "C. à soupe", rayon: "Crémerie & Fromages", bought: false }
    ],
    steps: [
      "1. Cuire les tortellini à l'eau bouillante salée, le temps indiqué sur le paquet (souvent 3-4 min).",
      "2. Pendant ce temps, faire chauffer doucement le reste de crème dans une poêle avec 3 C. à soupe de fromage râpé et du poivre.",
      "3. Égoutter les tortellini, les verser dans la poêle et mélanger 1 min pour les enrober."
    ],
    bergamoTip: "Rayon frais, à côté des pâtes fraîches. ~27 g de protéines."
  },
  {
    id: "lentilles-tomate-oeufs-semoule",
    name: "Lentilles à la tomate & à l'ail, œufs cuits dedans, semoule",
    category: "Légumineuses & Œufs",
    prepTime: 20,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Féculent", "Végétarien"],
    ingredients: [
      { name: "Lentilles en boîte (lenticchie) 400 g", amount: 1, unit: "boîte", rayon: "Épicerie & Féculents", bought: true },
      { name: "Œufs frais (de la boîte)", amount: 2, unit: "œufs", rayon: "Crémerie & Fromages", bought: false },
      { name: "Passata (stock)", amount: 150, unit: "g", rayon: "Épicerie & Féculents", bought: false },
      { name: "Ail (stock)", amount: 1, unit: "gousse", rayon: "Fruits & Légumes", bought: false },
      { name: "Origan (stock)", amount: 1, unit: "pincée", rayon: "Épicerie & Féculents", bought: false },
      { name: "Semoule 500 g", amount: 1, unit: "paquet", rayon: "Épicerie & Féculents", bought: true }
    ],
    steps: [
      "1. Faire revenir l'ail écrasé dans un filet d'huile 30 secondes.",
      "2. Ajouter les lentilles égouttées et rincées, 150 g de passata, l'origan, du sel et du poivre. Laisser réduire 5 min à feu moyen : ça doit être épais, pas liquide.",
      "3. Creuser 2 petits trous, y casser les 2 œufs, couvrir et cuire 5-6 min à feu doux, jusqu'à ce que les blancs soient pris.",
      "4. Pendant ce temps, préparer 70 g de semoule : la couvrir d'eau bouillante salée avec un filet d'huile, attendre 5 min, puis l'égrainer à la fourchette."
    ],
    bergamoTip: "~28 g de protéines."
  },
  {
    id: "piadina-steak-mozzarella",
    name: "Piadina garnie : steak haché émietté & mozzarella",
    category: "Viandes & Poêlées",
    prepTime: 15,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Féculent"],
    ingredients: [
      { name: "Piadine (paquet de 3-4)", amount: 1, unit: "paquet", rayon: "Boulangerie", bought: true },
      { name: "Mozzarella 125 g", amount: 1, unit: "boule", rayon: "Crémerie & Fromages", bought: true },
      { name: "Steak haché (congélateur)", amount: 1, unit: "pièce", rayon: "Boucherie & Poisson", bought: false },
      { name: "Passata (stock)", amount: 3, unit: "C. à soupe", rayon: "Épicerie & Féculents", bought: false },
      { name: "Origan (stock)", amount: 1, unit: "pincée", rayon: "Épicerie & Féculents", bought: false }
    ],
    steps: [
      "0. Le matin : sortir le steak haché du congélateur et le mettre au frigo.",
      "1. Cuire le steak haché à la poêle dans un filet d'huile en l'émiettant à la spatule, 5-6 min. Saler, poivrer, puis réserver.",
      "2. Dans la même poêle à feu moyen, poser une piadina. Étaler 3 C. à soupe de passata sur une moitié, puis l'origan, la viande et la mozzarella en morceaux.",
      "3. Replier la piadina, couvrir et laisser 2-3 min par face, jusqu'à ce que la mozzarella fonde."
    ],
    bergamoTip: "Une seule piadina suffit s'il y a beaucoup de garniture ; sinon fais-en 2. ~32 g de protéines."
  },
  {
    id: "riz-saute-pancetta-oeufs-courgette",
    name: "Riz sauté pancetta, œufs & courgette",
    category: "Pâtes & Riz",
    prepTime: 20,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Féculent", "Légumes"],
    ingredients: [
      { name: "Pancetta en dés (congélateur)", amount: 1, unit: "barquette (80 g)", rayon: "Boucherie & Poisson", bought: false },
      { name: "Œufs frais (de la boîte)", amount: 2, unit: "œufs", rayon: "Crémerie & Fromages", bought: false },
      { name: "Courgette", amount: 1, unit: "pièce", rayon: "Fruits & Légumes", bought: true },
      { name: "Riz (stock)", amount: 70, unit: "g", rayon: "Épicerie & Féculents", bought: false },
      { name: "Ail (stock)", amount: 1, unit: "gousse", rayon: "Fruits & Légumes", bought: false }
    ],
    steps: [
      "1. Cuire 70 g de riz à l'eau bouillante salée, puis l'égoutter. (C'est encore mieux avec du riz cuit la veille.)",
      "2. Faire dorer la pancetta 3 min à sec dans une grande poêle, puis ajouter la courgette en petits dés et l'ail écrasé. Laisser 5 min à feu vif.",
      "3. Ajouter le riz et le faire sauter 2 min.",
      "4. Pousser le riz sur le côté, casser les 2 œufs dans l'espace libre et les brouiller, puis tout mélanger. Poivrer : la pancetta sale déjà."
    ],
    bergamoTip: "~27 g de protéines."
  },
  {
    id: "pates-pesto-thon-tomates-cerises",
    name: "Pâtes au pesto, thon & tomates cerises",
    category: "Pâtes & Riz",
    prepTime: 12,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Féculent", "Légumes"],
    ingredients: [
      { name: "Pesto (stock)", amount: 2, unit: "C. à soupe", rayon: "Épicerie & Féculents", bought: false },
      { name: "Thon au naturel (stock)", amount: 2, unit: "boîtes (80 g)", rayon: "Épicerie & Féculents", bought: false },
      { name: "Tomates cerises 250 g", amount: 1, unit: "barquette", rayon: "Fruits & Légumes", bought: true },
      { name: "Jus de citron (stock)", amount: 1, unit: "C. à café", rayon: "Épicerie & Féculents", bought: false },
      { name: "Pâtes (stock)", amount: 100, unit: "g", rayon: "Épicerie & Féculents", bought: false }
    ],
    steps: [
      "1. Cuire 100 g de pâtes à l'eau bouillante salée.",
      "2. Pendant ce temps, couper une dizaine de tomates cerises en deux et égoutter les 2 boîtes de thon.",
      "3. Garder un peu d'eau de cuisson, puis égoutter les pâtes.",
      "4. Hors du feu, mélanger les pâtes avec 2 C. à soupe de pesto et un peu d'eau de cuisson, puis ajouter le thon, les tomates cerises et un trait de jus de citron."
    ],
    bergamoTip: "Les tomates cerises qui restent se grignotent. ~30 g de protéines."
  }
];

function getRecipeById(id) {
  return RECIPES_DB.find(r => r.id === id);
}

const CURRENT_REAL_WEEK_MENU = {
  lundi: { midi: null, soir: null },
  mardi: { midi: null, soir: "escalope-dinde-ail-citron-riz" },
  mercredi: { midi: null, soir: "curry-pois-chiches-oeufs-riz" },
  jeudi: { midi: null, soir: "cordons-bleus-courgette-ail-origan" },
  vendredi: { midi: null, soir: "tortellini-jambon-creme" },
  samedi: { midi: "lentilles-tomate-oeufs-semoule", soir: "piadina-steak-mozzarella" },
  dimanche: { midi: "riz-saute-pancetta-oeufs-courgette", soir: "pates-pesto-thon-tomates-cerises" }
};

const EXTRA_GROCERY_ITEMS = [];
