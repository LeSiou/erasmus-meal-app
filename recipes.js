/**
 * Erasmus Meal Planner - Validated Week 2 Menu (Bergamo)
 * Exact Speck Portions (4 tranches), Sauce Tomate in stock, Clean 1 Sachet Salad
 */

const RECIPES_DB = [
  {
    id: "aubergines-boeuf-riz",
    name: "Poêlée d'aubergines au bœuf haché & riz",
    category: "Poêlées & Riz",
    prepTime: 20,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Légume", "Féculent"],
    ingredients: [
      { name: "Aubergines en dés (congélateur)", amount: 150, unit: "g", rayon: "Légumes", bought: false },
      { name: "Viande hachée de bœuf (congélateur)", amount: 125, unit: "g", rayon: "Boucherie & Poisson", bought: false },
      { name: "Riz basmati (stock)", amount: 70, unit: "g", rayon: "Épicerie & Féculents", bought: false }
    ],
    steps: [
      "1. Cuire 70g de riz basmati dans l'eau bouillante salée pendant 10 minutes.",
      "2. Faire dorer la viande hachée dans 1 C. à soupe d'huile d'olive pendant 4 min.",
      "3. Ajouter les dés d'aubergines du congel, saler, poivrer et rissoler 8-10 min.",
      "4. Servir le riz chaud nappé de la poêlée aubergines-bœuf."
    ],
    bergamoTip: "Repas du lundi 100% stock & congélateur."
  },
  {
    id: "riz-cantonais-dinde",
    name: "Riz cantonais rapide à la dinde",
    category: "Riz & Poêlées",
    prepTime: 15,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Légume", "Féculent"],
    ingredients: [
      { name: "Dés de dinde ou poulet", amount: 120, unit: "g", rayon: "Boucherie & Poisson", bought: true },
      { name: "Œufs frais", amount: 1, unit: "boîte (6 œufs)", rayon: "Crémerie & Fromages", bought: true },
      { name: "Salade verte", amount: 0.33, unit: "sachet", rayon: "Fruits & Légumes", bought: true },
      { name: "Riz basmati (stock)", amount: 70, unit: "g", rayon: "Épicerie & Féculents", bought: false }
    ],
    steps: [
      "1. Cuire 70g de riz basmati al dente et le laisser tiédir.",
      "2. Faire dorer 120g de dés de dinde (1/3 de la barquette) 5 min à la poêle.",
      "3. Casser 1 œuf de ta boîte directement dans la poêle et mélanger vivement.",
      "4. Incorporer le riz et servir avec 1/3 du sachet de salade verte."
    ],
    bergamoTip: "Utilise 1/3 de ta barquette de dinde et 1/3 de ton sachet de salade !"
  },
  {
    id: "salade-italienne-mozza-speck",
    name: "Salade italienne Mozzarella, Speck & Tomates",
    category: "Salades & Fraîcheur",
    prepTime: 10,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Légume", "Féculent"],
    ingredients: [
      { name: "Mozzarella", amount: 1, unit: "boule", rayon: "Crémerie & Fromages", bought: true },
      { name: "Speck italien", amount: 2, unit: "tranches", rayon: "Charcuterie & Traiteur", bought: true },
      { name: "Tomates fraîches", amount: 2, unit: "pièces", rayon: "Fruits & Légumes", bought: true },
      { name: "Salade verte", amount: 0.33, unit: "sachet", rayon: "Fruits & Légumes", bought: true },
      { name: "Pain (stock)", amount: 2, unit: "tranches", rayon: "Épicerie & Féculents", bought: false }
    ],
    steps: [
      "1. Couper 2 tomates en tranches.",
      "2. Disposer 1/3 du sachet de salade verte, les tomates et 2 tranches de Speck dans une assiette.",
      "3. Déposer 1 boule de Mozzarella au centre, arroser d'huile d'olive, sel et poivre.",
      "4. Servir avec 2 tranches de pain grillé du stock."
    ],
    bergamoTip: "Utilise 1 des 2 boules de mozza et 2 tranches de speck sur les 4 du paquet !"
  },
  {
    id: "pates-sauce-maison",
    name: "Pâtes à la sauce toute faite",
    category: "Pâtes & Riz",
    prepTime: 12,
    cost: "€",
    servings: 1,
    tags: ["Féculent"],
    ingredients: [
      { name: "Pâtes (stock)", amount: 100, unit: "g", rayon: "Épicerie & Féculents", bought: false },
      { name: "Sauce toute faite (stock)", amount: 1, unit: "pot", rayon: "Épicerie & Féculents", bought: false }
    ],
    steps: [
      "1. Cuire 100g de pâtes du stock dans l'eau bouillante salée.",
      "2. Égoutter en gardant un peu d'eau de cuisson.",
      "3. Réchauffer ta sauce toute faite du stock et la mélanger aux pâtes chaudes.",
      "4. Servir immédiatement avec du parmesan du stock."
    ],
    bergamoTip: "Repas express du jeudi 100% stock."
  },
  {
    id: "dinde-poelee-pdt-courgettes",
    name: "Escalope de dinde poêlée, pommes de terre & courgettes",
    category: "Viandes & Poêlées",
    prepTime: 20,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Légume", "Féculent"],
    ingredients: [
      { name: "Dés de dinde ou poulet", amount: 150, unit: "g", rayon: "Boucherie & Poisson", bought: true },
      { name: "Pommes de terre fraîches", amount: 250, unit: "g", rayon: "Fruits & Légumes", bought: true },
      { name: "Courgettes fraîches", amount: 1, unit: "pièces", rayon: "Fruits & Légumes", bought: true }
    ],
    steps: [
      "1. Couper 2-3 pommes de terre et 1 courgette en petits dés.",
      "2. Rissoler les pommes de terre 10 min à la poêle dans l'huile d'olive, puis ajouter la courgette 6 min.",
      "3. Faire dorer les dés de dinde (portion 1/3 barquette) 5 min.",
      "4. Mélanger le tout, assaisonner et servir bien chaud."
    ],
    bergamoTip: "Repas complet et équilibré pour le vendredi soir."
  },
  {
    id: "piadina-speck-mozza",
    name: "Piadina italienne Speck, Mozzarella & Tomates",
    category: "Express & Salés",
    prepTime: 10,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Légume", "Féculent"],
    ingredients: [
      { name: "Piadine romagnole", amount: 1, unit: "paquet", rayon: "Épicerie & Féculents", bought: true },
      { name: "Speck italien", amount: 2, unit: "tranches", rayon: "Charcuterie & Traiteur", bought: true },
      { name: "Mozzarella", amount: 1, unit: "boule", rayon: "Crémerie & Fromages", bought: true },
      { name: "Tomates fraîches", amount: 1, unit: "pièces", rayon: "Fruits & Légumes", bought: true },
      { name: "Salade verte", amount: 0.33, unit: "sachet", rayon: "Fruits & Légumes", bought: true }
    ],
    steps: [
      "1. Trancher la 2ème boule de Mozzarella et 1 tomate.",
      "2. Chauffer 1 piadina du paquet dans une poêle à sec pendant 1 minute.",
      "3. Garnir avec les 2 tranches de Speck restantes, la mozzarella, les tranches de tomate et le 1/3 de salade restant.",
      "4. Plier en deux et chauffer 1 min."
    ],
    bergamoTip: "Permet de finir le paquet de speck, la 2ème mozza et le sachet de salade !"
  },
  {
    id: "saumon-papillote-haricots-riz",
    name: "Saumon en papillote au citron, haricots verts & riz",
    category: "Poisson & Poêlées",
    prepTime: 20,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Légume", "Féculent"],
    ingredients: [
      { name: "Pavé de saumon (congélateur)", amount: 150, unit: "g", rayon: "Boucherie & Poisson", bought: false },
      { name: "Haricots verts (stock)", amount: 100, unit: "g", rayon: "Légumes", bought: false },
      { name: "Riz basmati (stock)", amount: 70, unit: "g", rayon: "Épicerie & Féculents", bought: false }
    ],
    steps: [
      "1. Cuire 70g de riz basmati et réchauffer les haricots verts du stock.",
      "2. Disposer le saumon sur papier cuisson. Arroser d'huile d'olive, citron, sel et poivre.",
      "3. Fermer la papillote et enfourner 15 min à 180°C.",
      "4. Servir chaud avec le riz et les haricots verts."
    ],
    bergamoTip: "Ton seul repas de poisson de la semaine, sain et léger !"
  },
  {
    id: "pates-cremeuses-dinde-epinards",
    name: "Pâtes crémeuses à la dinde & épinards frais",
    category: "Pâtes & Riz",
    prepTime: 18,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Légume", "Féculent"],
    ingredients: [
      { name: "Dés de dinde ou poulet", amount: 120, unit: "g", rayon: "Boucherie & Poisson", bought: true },
      { name: "Épinards (congélateur)", amount: 80, unit: "g", rayon: "Légumes", bought: false },
      { name: "Pâtes (stock)", amount: 80, unit: "g", rayon: "Épicerie & Féculents", bought: false }
    ],
    steps: [
      "1. Cuire 80g de pâtes du stock al dente.",
      "2. Dorer le dernier 1/3 de dés de dinde à la poêle 5 min, puis ajouter les épinards du congel 3 min.",
      "3. Ajouter un filet d'huile d'olive et 2 C. à soupe d'eau de cuisson.",
      "4. Mélanger aux pâtes chaudes et servir."
    ],
    bergamoTip: "Utilise le dernier tiers de dinde et tes épinards du congel !"
  },
  {
    id: "tarte-thon-sauce-tomate-fromage",
    name: "Tarte au thon, sauce tomate & fromage râpé",
    category: "Tartes & Salés",
    prepTime: 25,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Féculent"],
    ingredients: [
      { name: "Pâte feuilletée", amount: 1, unit: "rouleau", rayon: "Crémerie & Fromages", bought: true },
      { name: "Sauce tomate (stock)", amount: 1, unit: "bocal", rayon: "Épicerie & Féculents", bought: false },
      { name: "Fromage râpé (Mozzarella / Emmental)", amount: 1, unit: "sachet", rayon: "Crémerie & Fromages", bought: true },
      { name: "Thon au naturel (stock)", amount: 1, unit: "boîte (130g)", rayon: "Épicerie & Féculents", bought: false }
    ],
    steps: [
      "1. Étaler la pâte feuilletée dans un plat à tarte.",
      "2. Étaler ta sauce tomate du stock et émietter la boîte de thon du stock.",
      "3. Recouvrir généreusement du sachet de fromage râpé.",
      "4. Enfourner 20 min à 190°C jusqu'à ce que le fromage soit bien gratiné et servir chaud."
    ],
    bergamoTip: "Recette modifiée : Pâte feuilletée, thon (stock), sauce tomate (stock) & fromage râpé !"
  }
];

function getRecipeById(id) {
  return RECIPES_DB.find(r => r.id === id);
}

const CURRENT_REAL_WEEK_MENU = {
  lundi: { midi: null, soir: "aubergines-boeuf-riz" },
  mardi: { midi: null, soir: "riz-cantonais-dinde" },
  mercredi: { midi: null, soir: "salade-italienne-mozza-speck" },
  jeudi: { midi: null, soir: "pates-sauce-maison" },
  vendredi: { midi: null, soir: "dinde-poelee-pdt-courgettes" },
  samedi: { midi: "piadina-speck-mozza", soir: "saumon-papillote-haricots-riz" },
  dimanche: { midi: "pates-cremeuses-dinde-epinards", soir: "tarte-thon-sauce-tomate-fromage" }
};
