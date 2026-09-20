/**
 * Erasmus Meal Planner - Validated Week 2 Menu (Bergamo)
 * Inspired by Maman's MENUS.numbers file.
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
      "3. Ajouter les dés d'aubergines décongelés, saler, poivrer et rissoler 8-10 min.",
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
      { name: "Riz basmati (stock)", amount: 70, unit: "g", rayon: "Épicerie & Féculents", bought: false },
      { name: "Œuf frais (stock)", amount: 1, unit: "pièce", rayon: "Crémerie & Fromages", bought: false },
      { name: "Salade verte", amount: 50, unit: "g", rayon: "Fruits & Légumes", bought: true }
    ],
    steps: [
      "1. Cuire le riz basmati al dente et le laisser tiédir.",
      "2. Faire dorer les dés de dinde 5 min à la poêle avec un peu d'huile d'olive.",
      "3. Casser l'œuf directement dans la poêle et mélanger vivement pour former un œuf brouillé.",
      "4. Incorporer le riz, mélanger 2 min et servir avec la salade verte assaisonnée."
    ],
    bergamoTip: "Recette du fichier de Maman, ultra rapide et complète !"
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
      { name: "Mozzarella di Bufala ou Burrata", amount: 1, unit: "boule (125g)", rayon: "Crémerie & Fromages", bought: true },
      { name: "Tranches de Speck italien", amount: 4, unit: "tranches", rayon: "Charcuterie & Traiteur", bought: true },
      { name: "Tomates fraîches", amount: 2, unit: "pièces", rayon: "Fruits & Légumes", bought: true },
      { name: "Salade verte", amount: 50, unit: "g", rayon: "Fruits & Légumes", bought: true },
      { name: "Pain (stock)", amount: 2, unit: "tranches", rayon: "Épicerie & Féculents", bought: false }
    ],
    steps: [
      "1. Laver et couper les tomates en tranches.",
      "2. Disposer la salade verte, les tomates et le Speck dans une assiette.",
      "3. Poser la Mozzarella au centre, arroser d'huile d'olive, sel et poivre.",
      "4. Déguster avec des tranches de pain grillé."
    ],
    bergamoTip: "Un grand classique rapide et frais du mercredi soir."
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
      "1. Cuire 100g de pâtes dans l'eau bouillante salée.",
      "2. Égoutter les pâtes en gardant un peu d'eau de cuisson.",
      "3. Réchauffer la sauce toute faite et la mélanger aux pâtes chaudes.",
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
      { name: "Escalope de dinde ou poulet", amount: 150, unit: "g", rayon: "Boucherie & Poisson", bought: true },
      { name: "Pommes de terre fraîches", amount: 150, unit: "g", rayon: "Fruits & Légumes", bought: true },
      { name: "Courgette fraîche", amount: 1, unit: "pièce", rayon: "Fruits & Légumes", bought: true }
    ],
    steps: [
      "1. Couper les pommes de terre et la courgette en petits dés.",
      "2. Faire rissoler les pommes de terre 10 min à la poêle avec de l'huile d'olive, puis ajouter la courgette 6 min.",
      "3. Poêler l'escalope de dinde 4-5 min de chaque côté jusqu'à ce qu'elle soit bien dorée.",
      "4. Assaisonner et servir bien chaud."
    ],
    bergamoTip: "Un repas complet et équilibré pour le vendredi soir."
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
      { name: "Piadine romagnole", amount: 1, unit: "pièce", rayon: "Épicerie & Féculents", bought: true },
      { name: "Speck italien", amount: 3, unit: "tranches", rayon: "Charcuterie & Traiteur", bought: true },
      { name: "Mozzarella", amount: 50, unit: "g", rayon: "Crémerie & Fromages", bought: true },
      { name: "Tomate fraîche", amount: 1, unit: "pièce", rayon: "Fruits & Légumes", bought: true },
      { name: "Salade verte", amount: 30, unit: "g", rayon: "Fruits & Légumes", bought: true }
    ],
    steps: [
      "1. Trancher la mozzarella et la tomate.",
      "2. Chauffer une poêle à sec et y déposer la piadina 1 minute.",
      "3. Garnir une moitié avec le Speck, la mozzarella, la tomate et la salade. Plier en deux.",
      "4. Chauffer 1-2 min supplémentaires pour faire fondre le fromage."
    ],
    bergamoTip: "Le repas sur le pouce parfait du samedi midi !"
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
      { name: "Pavé de saumon (congélateur)", amount: 1, unit: "pavé (150g)", rayon: "Boucherie & Poisson", bought: false },
      { name: "Haricots verts (stock)", amount: 100, unit: "g", rayon: "Légumes", bought: false },
      { name: "Riz basmati (stock)", amount: 70, unit: "g", rayon: "Épicerie & Féculents", bought: false }
    ],
    steps: [
      "1. Cuire 70g de riz basmati et réchauffer les haricots verts du stock.",
      "2. Disposer le saumon sur du papier cuisson. Arroser d'huile d'olive, jus de citron, sel et poivre.",
      "3. Fermer la papillote et enfourner 15 min à 180°C.",
      "4. Servir le saumon fondant avec le riz et les haricots verts."
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
      { name: "Épinards frais", amount: 80, unit: "g", rayon: "Fruits & Légumes", bought: true },
      { name: "Pâtes (stock)", amount: 80, unit: "g", rayon: "Épicerie & Féculents", bought: false }
    ],
    steps: [
      "1. Cuire 80g de pâtes du stock al dente.",
      "2. Faire dorer les dés de dinde 5 min à la poêle, puis ajouter les épinards frais 2 min.",
      "3. Ajouter un peu d'eau de cuisson des pâtes et un filet d'huile d'olive ou fromage frais du stock.",
      "4. Mélanger aux pâtes égouttées et servir chaud."
    ],
    bergamoTip: "Inspiré directement du fichier de Maman pour le dimanche midi !"
  },
  {
    id: "tarte-thon-tomates-salade",
    name: "Tarte au thon, tomates fraîches & salade verte",
    category: "Tartes & Salés",
    prepTime: 25,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Légume", "Féculent"],
    ingredients: [
      { name: "Pâte feuilletée ou brisée", amount: 1, unit: "rouleau", rayon: "Crémerie & Fromages", bought: true },
      { name: "Thon au naturel (stock)", amount: 1, unit: "boîte (130g)", rayon: "Épicerie & Féculents", bought: false },
      { name: "Tomates fraîches", amount: 2, unit: "pièces", rayon: "Fruits & Légumes", bought: true },
      { name: "Œuf frais (stock)", amount: 1, unit: "pièce", rayon: "Crémerie & Fromages", bought: false },
      { name: "Salade verte", amount: 50, unit: "g", rayon: "Fruits & Légumes", bought: true }
    ],
    steps: [
      "1. Étaler la pâte dans un moule et badigeonner de moutarde du stock.",
      "2. Émietter le thon du stock et disposer les rondelles de tomates fraîches.",
      "3. Battre 1 œuf avec un peu d'eau/lait et verser par-dessus.",
      "4. Enfourner 20 min à 190°C et servir chaud avec la salade verte."
    ],
    bergamoTip: "Option 1 sélectionnée du fichier de Maman pour le dimanche soir !"
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
  dimanche: { midi: "pates-cremeuses-dinde-epinards", soir: "tarte-thon-tomates-salade" }
};
