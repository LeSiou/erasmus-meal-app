/**
 * Erasmus Meal Planner - Validated Week 7 Menu (Bergamo v26.0)
 * Semaine du 02/11 au 08/11 : œufs + légumineuses, congélateur (saumon, cordon bleu), sans oignon ni beurre.
 * Courses Carrefour Market : œufs, 2 pommes de terre, crème, pancetta, mozzarella, piadine, tomates cerises, 1 courgette, lentilles (~9,98 € total).
 */

const RECIPES_DB = [
  {
    id: "frittata-pdt-ail",
    name: "Frittata pommes de terre à l'ail",
    category: "Œufs & Légumineuses",
    prepTime: 20,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Féculent"],
    ingredients: [
      { name: "Boîte de 6 œufs frais", amount: 1, unit: "boîte", rayon: "Crémerie & Fromages", bought: true },
      { name: "Pommes de terre (au détail)", amount: 1, unit: "pièce moyenne (~150 g)", rayon: "Fruits & Légumes", bought: true },
      { name: "Fromage râpé (stock)", amount: 2, unit: "C. à soupe", rayon: "Crémerie & Fromages", bought: false },
      { name: "Ail (stock)", amount: 1, unit: "gousse", rayon: "Fruits & Légumes", bought: false }
    ],
    steps: [
      "C'est quoi ? Une omelette épaisse à l'italienne : on ne la plie pas, elle cuit doucement à couvert et se coupe comme un gâteau.",
      "1. Éplucher la pomme de terre (~150 g) et la couper en rondelles très fines (2-3 mm), plus c'est fin plus ça cuit vite.",
      "2. Dans une poêle moyenne, chauffer 2 C. à soupe d'huile à feu moyen. Mettre les rondelles, saler et couvrir. Cuire 10 min en retournant 2-3 fois, jusqu'à ce qu'elles soient tendres et un peu dorées. Ajouter la gousse d'ail écrasée la dernière minute.",
      "3. Pendant ce temps, battre 4 œufs dans un bol avec 2 C. à soupe de fromage râpé, sel, poivre et une pincée d'origan.",
      "4. Verser les œufs sur les pommes de terre et répartir avec une spatule. Baisser à feu doux et couvrir.",
      "5. Laisser cuire 6-8 min sans toucher, jusqu'à ce que le dessus soit pris (il ne doit plus être liquide quand tu secoues la poêle).",
      "6. La faire glisser sur une assiette et la couper en parts."
    ],
    bergamoTip: "4 œufs + fromage = ~30 g de protéines. Les 2 œufs qui restent servent samedi midi."
  },
  {
    id: "pates-saumon-creme",
    name: "Pâtes au saumon & à la crème",
    category: "Poisson & Poêlées",
    prepTime: 15,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Féculent"],
    ingredients: [
      { name: "Pavé de saumon (congélateur)", amount: 1, unit: "pièce", rayon: "Boucherie & Poisson", bought: false },
      { name: "Crème liquide (panna da cucina) 20 cl", amount: 1, unit: "brique", rayon: "Crémerie & Fromages", bought: true },
      { name: "Pâtes (stock)", amount: 100, unit: "g", rayon: "Épicerie & Féculents", bought: false },
      { name: "Ail (stock)", amount: 1, unit: "gousse", rayon: "Fruits & Légumes", bought: false }
    ],
    steps: [
      "0. Le matin : sortir le pavé de saumon du congélateur et le mettre au frigo.",
      "1. Cuire 100 g de pâtes à l'eau bouillante salée.",
      "2. Pendant ce temps, couper le saumon en dés (enlever la peau). Le faire cuire 3-4 min dans une poêle avec un filet d'huile et la gousse d'ail écrasée.",
      "3. Ajouter la moitié de la brique de crème (~10 cl), sel, poivre. Laisser frémir 2 min.",
      "4. Égoutter les pâtes et les mélanger dans la poêle avec la sauce.",
      "5. Refermer la brique de crème et la garder au frigo : elle sert dimanche midi pour le curry."
    ],
    bergamoTip: "Un pavé de saumon = ~25 g de protéines, plus les pâtes."
  },
  {
    id: "pasta-e-ceci",
    name: "Pasta e ceci (pâtes aux pois chiches)",
    category: "Œufs & Légumineuses",
    prepTime: 20,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Légumineuse", "Féculent"],
    ingredients: [
      { name: "Pois chiches (stock)", amount: 1, unit: "boîte", rayon: "Épicerie & Féculents", bought: false },
      { name: "Pâtes courtes (stock)", amount: 80, unit: "g", rayon: "Épicerie & Féculents", bought: false },
      { name: "Passata (stock)", amount: 3, unit: "C. à soupe", rayon: "Épicerie & Féculents", bought: false },
      { name: "Ail (stock)", amount: 1, unit: "gousse", rayon: "Fruits & Légumes", bought: false },
      { name: "Fromage râpé (stock)", amount: 2, unit: "C. à soupe", rayon: "Crémerie & Fromages", bought: false }
    ],
    steps: [
      "C'est quoi ? Un plat italien de tous les jours, entre la soupe épaisse et les pâtes : les pâtes cuisent directement avec les pois chiches.",
      "1. Dans une casserole, faire revenir la gousse d'ail écrasée 1 min dans 2 C. à soupe d'huile.",
      "2. Ajouter les pois chiches rincés et égouttés, 3 C. à soupe de passata et une bonne pincée d'origan. Remuer 2 min.",
      "3. Écraser à la fourchette environ la moitié des pois chiches dans la casserole (c'est ce qui rend le plat crémeux).",
      "4. Ajouter 2 verres d'eau (~400 ml) et du sel, porter à ébullition.",
      "5. Verser 80 g de pâtes courtes et les cuire dedans le temps indiqué sur le paquet, en remuant souvent. Rajouter un peu d'eau si ça devient trop sec : ça doit rester bien crémeux.",
      "6. Hors du feu : poivre, un filet d'huile d'olive et 2 C. à soupe de fromage râpé."
    ],
    bergamoTip: "100 % placard, 0 € ce soir, et ~25 g de protéines."
  },
  {
    id: "cordon-bleu-ratatouille",
    name: "Cordon bleu, ratatouille & semoule",
    category: "Viandes & Poêlées",
    prepTime: 15,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Légume", "Féculent"],
    ingredients: [
      { name: "Cordon bleu (congélateur)", amount: 1, unit: "pièce", rayon: "Boucherie & Poisson", bought: false },
      { name: "Ratatouille en conserve (stock)", amount: 1, unit: "boîte (ou la moitié si grande)", rayon: "Épicerie & Féculents", bought: false },
      { name: "Semoule (stock)", amount: 70, unit: "g", rayon: "Épicerie & Féculents", bought: false }
    ],
    steps: [
      "1. Cuire le cordon bleu à la poêle dans un filet d'huile, à feu moyen, 5-6 min par face (ou selon le paquet).",
      "2. Pendant ce temps, faire chauffer la ratatouille dans une petite casserole 5 min en remuant.",
      "3. Verser 70 g de semoule dans un bol, couvrir du même volume d'eau bouillante salée avec un filet d'huile, couvrir 5 min puis égrainer à la fourchette.",
      "4. Servir ensemble."
    ],
    bergamoTip: "Tout vient du congélo et du placard : 0 € ce soir."
  },
  {
    id: "haricots-rouges-tomate-riz",
    name: "Haricots rouges mijotés à la tomate, ail & origan, riz",
    category: "Œufs & Légumineuses",
    prepTime: 15,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Légumineuse", "Féculent"],
    ingredients: [
      { name: "Haricots rouges (stock)", amount: 1, unit: "boîte", rayon: "Épicerie & Féculents", bought: false },
      { name: "Passata (stock)", amount: 1, unit: "bouteille (235 g)", rayon: "Épicerie & Féculents", bought: false },
      { name: "Riz (stock)", amount: 70, unit: "g", rayon: "Épicerie & Féculents", bought: false },
      { name: "Ail (stock)", amount: 2, unit: "gousses", rayon: "Fruits & Légumes", bought: false },
      { name: "Fromage râpé (stock)", amount: 1, unit: "C. à soupe", rayon: "Crémerie & Fromages", bought: false }
    ],
    steps: [
      "1. Cuire 70 g de riz à l'eau bouillante salée.",
      "2. Dans une casserole, faire revenir 2 gousses d'ail écrasées 1 min dans un filet d'huile.",
      "3. Ajouter les haricots rouges rincés et égouttés, la passata, sel, poivre et 1 c. à café d'origan.",
      "4. Laisser mijoter 10 min à feu doux en remuant de temps en temps, jusqu'à ce que la sauce épaississe.",
      "5. Servir sur le riz avec un peu de fromage râpé par-dessus."
    ],
    bergamoTip: "Façon chili mais sans viande ni épices : 0 € ce soir."
  },
  {
    id: "oeufs-brouilles-tomates-cerises-semoule",
    name: "Œufs brouillés & tomates cerises poêlées, semoule",
    category: "Œufs & Légumineuses",
    prepTime: 12,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Légume", "Féculent"],
    ingredients: [
      { name: "Œufs frais (de la boîte)", amount: 2, unit: "pièces", rayon: "Crémerie & Fromages", bought: false },
      { name: "Tomates cerises (barquette 250 g)", amount: 1, unit: "barquette", rayon: "Fruits & Légumes", bought: true },
      { name: "Semoule (stock)", amount: 70, unit: "g", rayon: "Épicerie & Féculents", bought: false },
      { name: "Fromage râpé (stock)", amount: 1, unit: "C. à soupe", rayon: "Crémerie & Fromages", bought: false }
    ],
    steps: [
      "1. Préparer 70 g de semoule (même volume d'eau bouillante salée + filet d'huile, 5 min à couvert, puis égrainer).",
      "2. Couper la moitié de la barquette de tomates cerises en deux. Les faire sauter 3 min dans une poêle huilée avec sel et origan. Garder l'autre moitié de la barquette pour la piadina de dimanche soir.",
      "3. Battre 2 œufs avec sel, poivre et 1 C. à soupe de fromage râpé.",
      "4. Baisser le feu, verser les œufs sur les tomates et remuer sans arrêt avec une spatule 1-2 min : retirer du feu quand c'est encore un peu baveux (ça finit de cuire tout seul).",
      "5. Servir avec la semoule."
    ],
    bergamoTip: "Repas léger du samedi midi, prêt en 12 min."
  },
  {
    id: "lentilles-pancetta-pdt",
    name: "Lentilles mijotées à la pancetta & pommes de terre",
    category: "Œufs & Légumineuses",
    prepTime: 20,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Légumineuse", "Féculent"],
    ingredients: [
      { name: "Lentilles en boîte", amount: 1, unit: "boîte", rayon: "Épicerie & Féculents", bought: true },
      { name: "Pancetta en dés (paquet 2×80 g)", amount: 1, unit: "paquet", rayon: "Boucherie & Poisson", bought: true },
      { name: "Pommes de terre (au détail)", amount: 1, unit: "pièce moyenne (~150 g)", rayon: "Fruits & Légumes", bought: true },
      { name: "Ail (stock)", amount: 1, unit: "gousse", rayon: "Fruits & Légumes", bought: false },
      { name: "Passata (stock)", amount: 2, unit: "C. à soupe", rayon: "Épicerie & Féculents", bought: false }
    ],
    steps: [
      "1. Éplucher la pomme de terre (~150 g) et la couper en petits cubes (1 cm).",
      "2. Dans une casserole, faire dorer 1 barquette de pancetta (80 g) 3 min à sec (elle rend son gras). Mettre l'autre barquette au congélateur.",
      "3. Ajouter la gousse d'ail écrasée et les cubes de pomme de terre, remuer 1 min.",
      "4. Ajouter les lentilles égouttées, 2 C. à soupe de passata, 1 verre d'eau (~200 ml), poivre et origan (pas trop de sel : la pancetta est déjà salée).",
      "5. Couvrir et laisser mijoter 12-15 min à feu doux, jusqu'à ce que la pomme de terre soit tendre. Rajouter un peu d'eau si besoin."
    ],
    bergamoTip: "Le plat réconfortant du samedi soir, ~30 g de protéines."
  },
  {
    id: "curry-pois-chiches-courgette-riz",
    name: "Curry crémeux de pois chiches & courgette, riz",
    category: "Œufs & Légumineuses",
    prepTime: 18,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Légumineuse", "Légume", "Féculent"],
    ingredients: [
      { name: "Pois chiches (stock)", amount: 1, unit: "boîte", rayon: "Épicerie & Féculents", bought: false },
      { name: "Courgette fraîche", amount: 1, unit: "pièce", rayon: "Fruits & Légumes", bought: true },
      { name: "Crème liquide (reste de mardi)", amount: 10, unit: "cl", rayon: "Crémerie & Fromages", bought: false },
      { name: "Riz (stock)", amount: 70, unit: "g", rayon: "Épicerie & Féculents", bought: false },
      { name: "Ail (stock)", amount: 1, unit: "gousse", rayon: "Fruits & Légumes", bought: false }
    ],
    steps: [
      "1. Cuire 70 g de riz à l'eau bouillante salée.",
      "2. Couper la courgette en dés. La faire sauter 5 min dans une poêle huilée avec la gousse d'ail écrasée.",
      "3. Ajouter 1 c. à café bombée de curry et remuer 30 secondes.",
      "4. Ajouter les pois chiches rincés et égouttés et le reste de crème (~10 cl), saler. Laisser mijoter 5 min.",
      "5. Servir sur le riz."
    ],
    bergamoTip: "Finit la brique de crème de mardi : rien ne se perd."
  },
  {
    id: "piadina-thon-mozza-tomates-cerises",
    name: "Piadina thon, mozzarella & tomates cerises",
    category: "Pâtes & Riz",
    prepTime: 10,
    cost: "€",
    servings: 1,
    tags: ["Protéine"],
    ingredients: [
      { name: "Piadine (paquet de 3)", amount: 1, unit: "paquet", rayon: "Épicerie & Féculents", bought: true },
      { name: "Mozzarella 125 g", amount: 1, unit: "boule", rayon: "Crémerie & Fromages", bought: true },
      { name: "Thon au naturel (stock)", amount: 1, unit: "boîte", rayon: "Épicerie & Féculents", bought: false },
      { name: "Tomates cerises (reste de samedi)", amount: 0.5, unit: "barquette", rayon: "Fruits & Légumes", bought: false }
    ],
    steps: [
      "1. Égoutter le thon et la mozzarella. Couper la mozzarella en tranches et les tomates cerises en deux.",
      "2. Chauffer une poêle sans huile à feu moyen et y poser 1 piadina.",
      "3. Sur une moitié de la piadina : mozzarella, thon, tomates cerises, sel, poivre, origan.",
      "4. Replier en demi-lune et cuire 2-3 min par face en appuyant avec une spatule, jusqu'à ce que la mozza fonde.",
      "5. Faim ? Faire une 2e piadina avec le reste. La 3e se garde (ou se congèle)."
    ],
    bergamoTip: "La piadina vient de Romagne : c'est le casse-croûte italien par excellence."
  }
];

function getRecipeById(id) {
  return RECIPES_DB.find(r => r.id === id);
}

const CURRENT_REAL_WEEK_MENU = {
  lundi: { midi: null, soir: "frittata-pdt-ail" },
  mardi: { midi: null, soir: "pates-saumon-creme" },
  mercredi: { midi: null, soir: "pasta-e-ceci" },
  jeudi: { midi: null, soir: "cordon-bleu-ratatouille" },
  vendredi: { midi: null, soir: "haricots-rouges-tomate-riz" },
  samedi: { midi: "oeufs-brouilles-tomates-cerises-semoule", soir: "lentilles-pancetta-pdt" },
  dimanche: { midi: "curry-pois-chiches-courgette-riz", soir: "piadina-thon-mozza-tomates-cerises" }
};

const EXTRA_GROCERY_ITEMS = [];
