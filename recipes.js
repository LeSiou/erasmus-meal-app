/**
 * Erasmus Meal Planner - Database of Student Recipes for Bergamo
 * Recipes with ultra-detailed, professional step-by-step cooking instructions (<30 min).
 */

const RECIPES_DB = [
  {
    id: "pates-fraiches-epinards-ricotta",
    name: "Pâtes fraîches épinards & ricotta au beurre de parmesan",
    category: "Pâtes & Riz",
    prepTime: 5,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Légume", "Féculent"],
    ingredients: [
      { name: "Pâtes fraîches épinards & ricotta", amount: 150, unit: "g", rayon: "Épicerie & Féculents", bought: false },
      { name: "Beurre doux ou Huile d'olive", amount: 1, unit: "C. à soupe", rayon: "Crémerie & Fromages", bought: false },
      { name: "Parmesan râpé (Parmigiano Reggiano)", amount: 20, unit: "g", rayon: "Crémerie & Fromages", bought: false },
      { name: "Sel fin & Poivre du moulin", amount: 1, unit: "pincée", rayon: "Épicerie & Féculents", bought: false }
    ],
    steps: [
      "1. Ébullition : Remplir une casserole avec 1,5L d'eau, couvrir et porter à forte ébullition à feu vif. Ajouter 1 grosse pincée de sel marin.",
      "2. Cuisson flash : Plonger délicatement les 150g de pâtes fraîches à la ricotta & épinards dans l'eau bouillante. Baisser légèrement à feu moyen et laisser cuire 2 à 3 minutes seulement. Dès qu'elles remontent toutes à la surface, elles sont prêtes et al dente.",
      "3. Conservation de l'eau de cuisson : Avant d'égoutter, prélever 2 cuillères à soupe de l'eau de cuisson chargée en amidon et la réserver dans une poêle.",
      "4. Émulsion & Nappage : Égoutter les pâtes. Dans la poêle avec l'eau de cuisson chaude, ajouter 1 cuillère à soupe de beurre à feu très doux. Mélanger énergiquement pour créer une émulsion brillante et crémeuse.",
      "5. Finition : Verser les pâtes dans la poêle, mélanger délicatement pendant 30 secondes pour bien les enrober de sauce. Servir chaud dans une assiette creuse en saupoudrant généreusement des 20g de parmesan râpé et d'un tour de moulin à poivre noir."
    ],
    bergamoTip: "Les pâtes fraîches farcies au rayon frais d'Esselunga ou Conad (Rana ou marque repère) sont excellentes et prêtes en 3 minutes chrono."
  },
  {
    id: "chili-con-carne-express",
    name: "Chili con carne express au bœuf & riz parfumé",
    category: "Viandes & Poêlées",
    prepTime: 20,
    cost: "€",
    servings: 2, // Mardi + Mercredi
    tags: ["Protéine", "Légume", "Féculent"],
    ingredients: [
      { name: "Viande hachée de bœuf (5% ou 15% MG)", amount: 250, unit: "g", rayon: "Boucherie & Poisson", bought: false },
      { name: "Haricots rouges en conserve", amount: 1, unit: "petite boîte (250g)", rayon: "Épicerie & Féculents", bought: false },
      { name: "Coulis de tomate nature (Passata)", amount: 1, unit: "briquette (200g)", rayon: "Épicerie & Féculents", bought: false },
      { name: "Gousse d'ail fraîche", amount: 1, unit: "gousse", rayon: "Fruits & Légumes", bought: false },
      { name: "Riz blanc (Basmati ou Thaï)", amount: 140, unit: "g", rayon: "Épicerie & Féculents", bought: false },
      { name: "Épices Chili / Cumin / Paprika, Huile d'olive", amount: 1, unit: "C. à café", rayon: "Épicerie & Féculents", bought: false }
    ],
    steps: [
      "1. Cuisson du riz : Dans une petite casserole, verser 140g de riz avec 280ml d'eau froide salée (ratio 1 volume de riz pour 2 volumes d'eau). Porter à ébullition, puis réduire à feu très doux, couvrir et laisser cuire 10 à 12 minutes sans ouvrir jusqu'à absorption complète de l'eau.",
      "2. Préparation des aromates : Éplucher et émincer très finement la gousse d'ail. Rincer les haricots rouges dans une passoire sous l'eau froide puis les égoutter.",
      "3. Saisie de la viande : Faire chauffer 1 cuillère à soupe d'huile d'olive dans une grande poêle à feu moyen-vif. Ajouter la viande hachée (250g) et l'ail émincé. Faire dorer pendant 4 à 5 minutes en émiettant constamment la viande avec une spatule en bois.",
      "4. Mijotage & Épices : Ajouter 1 cuillère à café d'épices chili/cumin, 1 pincée de sel et de poivre. Verser la briquette de coulis de tomate (200g) et les haricots rouges égouttés. Mélanger le tout, baisser le feu et laisser mijoter doucement pendant 10 minutes à découvert jusqu'à obtention d'une sauce riche et nappante.",
      "5. Service & Batch Cooking : Servir immédiatement la moitié du Chili chaud sur un lit de riz blanc pour le repas du mardi soir. Placer la seconde moitié du Chili et du riz dans une boîte hermétique au réfrigérateur dès refroidissement : ton repas du mercredi soir sera prêt à être réchauffé en 2 min au micro-ondes !"
    ],
    bergamoTip: "Préparé en 20 min pour 2 repas complets (mardi soir + mercredi soir). Le chili est encore meilleur le lendemain !"
  },
  {
    id: "poulet-curry-courgettes-riz",
    name: "Poêlée de poulet au curry, courgettes poêlées & riz basmati",
    category: "Viandes & Poêlées",
    prepTime: 20,
    cost: "€",
    servings: 2, // Jeudi + Vendredi
    tags: ["Protéine", "Légume", "Féculent"],
    ingredients: [
      { name: "Lamelles de filet de poulet", amount: 250, unit: "g", rayon: "Boucherie & Poisson", bought: false },
      { name: "Courgettes fraîches", amount: 2, unit: "pièces (moyennes)", rayon: "Fruits & Légumes", bought: true },
      { name: "Riz basmati", amount: 140, unit: "g", rayon: "Épicerie & Féculents", bought: false },
      { name: "Curry doux ou Madras en poudre", amount: 1, unit: "C. à café", rayon: "Épicerie & Féculents", bought: false },
      { name: "Huile d'olive, Sel fin & Poivre", amount: 1, unit: "C. à soupe", rayon: "Épicerie & Féculents", bought: false }
    ],
    steps: [
      "1. Cuisson du riz : Lancer la cuisson des 140g de riz basmati dans une grande casserole d'eau bouillante salée pendant 10 minutes. Égoutter et réserver au chaud.",
      "2. Découpe des courgettes : Laver soigneusement les 2 courgettes fraîches sans les éplucher. Couper les extrémités puis les détailler en dés réguliers d'environ 1 cm de côté.",
      "3. Rissolage des courgettes : Faire chauffer 1 cuillère à soupe d'huile d'olive dans une grande poêle à feu moyen-vif. Y jeter les dés de courgettes et les faire rissoler 6 à 8 minutes en remuant régulièrement jusqu'à ce qu'ils soient tendres et légèrement dorés.",
      "4. Cuisson du poulet au curry : Ajouter les 250g de lamelles de poulet et 1 cuillère à café de curry en poudre dans la poêle. Mélanger énergiquement pour bien enrober le poulet d'épices. Faire dorer 5 minutes supplémentaires à feu moyen.",
      "5. Sauçage & Dressage : Verser 3 à 4 cuillères à soupe d'eau chaude dans la poêle pour décoller les sucs de cuisson et former une petite sauce curry parfumée. Rectifier l'assaisonnement en sel et poivre. Servir la moitié du poulet aux courgettes sur le riz chaud (jeudi soir) et placer l'autre moitié au frais pour le vendredi soir !"
    ],
    bergamoTip: "Recette idéale pour batch-cooker 2 dîners protéinés et légers."
  },
  {
    id: "omelette-epinards-frais",
    name: "Omelette baveuse aux épinards frais & tranches de pain grillé",
    category: "Express & Salés",
    prepTime: 10,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Légume", "Féculent"],
    ingredients: [
      { name: "Œufs frais bio ou plein air", amount: 2, unit: "gros œufs", rayon: "Crémerie & Fromages", bought: false },
      { name: "Épinards frais en pousses", amount: 50, unit: "g", rayon: "Fruits & Légumes", bought: false },
      { name: "Pain frais ou pain de mie complet", amount: 2, unit: "tranches", rayon: "Épicerie & Féculents", bought: true },
      { name: "Beurre ou Huile d'olive, Sel & Poivre", amount: 1, unit: "pincée", rayon: "Crémerie & Fromages", bought: false }
    ],
    steps: [
      "1. Tombée d'épinards : Rincer les pousses d'épinards sous l'eau froide et les sécher. Dans une poêle antiadhésive, faire fondre une noisette de beurre à feu moyen. Y jeter les épinards et les faire 'tomber' (réduire) pendant 1 minute seulement jusqu'à ce qu'ils flétrissent.",
      "2. Appareil à œufs : Pendant ce temps, casser les 2 œufs frais dans un bol, ajouter 1 cuillère à soupe d'eau froide (secret pour une omelette très moelleuse), une pincée de sel et du poivre noir moulu. Battre vigoureusement à la fourchette pendant 30 secondes.",
      "3. Cuisson de l'omelette : Verser les œufs battus directement sur les épinards réduits dans la poêle. Baisser à feu doux-moyen. Avec une spatule, ramener délicatement les bords cuits vers le centre en inclinant la poêle pour faire couler l'œuf liquide au fond.",
      "4. Pliage : Laisser cuire 2 à 3 minutes selon ton goût (baveuse au centre ou bien cuite). Rabattre une moitié de l'omelette sur l'autre pour former une demi-lune.",
      "5. Service : Faire toaster les 2 tranches de pain au grille-pain ou à la poêle. Glisser l'omelette aux épinards sur une assiette chaude et déguster immédiatement avec le pain croustillant !"
    ],
    bergamoTip: "Le repas de midi ultra rapide du samedi après les cours, prêt en 10 min chrono."
  },
  {
    id: "pates-aubergine-pancetta",
    name: "Pâtes sautées à l'aubergine rôtie & pancetta grillée (Air Fryer)",
    category: "Pâtes & Riz",
    prepTime: 25,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Légume", "Féculent"],
    ingredients: [
      { name: "Pâtes sèches (Penne Rigate ou Rigatoni)", amount: 100, unit: "g", rayon: "Épicerie & Féculents", bought: false },
      { name: "Aubergine fraîche", amount: 1, unit: "pièce", rayon: "Fruits & Légumes", bought: true },
      { name: "Pancetta italienne en dés", amount: 100, unit: "g", rayon: "Charcuterie & Traiteur", bought: false },
      { name: "Huile d'olive extra vierge, Sel & Poivre", amount: 1, unit: "C. à soupe", rayon: "Épicerie & Féculents", bought: false }
    ],
    steps: [
      "1. Préparation de l'aubergine : Laver l'aubergine sans la peler. La couper en dés réguliers d'environ 1,5 cm. Dans un cul de poule, mélanger les dés d'aubergine avec 1 cuillère à soupe d'huile d'olive, du sel et du poivre.",
      "2. Rôtissage Air Fryer : Préchauffer l'Air Fryer à 190°C. Déposer les dés d'aubergine dans le panier et faire rôtir pendant 15 minutes en secouant le panier à mi-cuisson (à la minute 7) jusqu'à ce que l'aubergine soit très tendre et bien dorée.",
      "3. Cuisson des pâtes : Pendant la cuisson de l'aubergine, porter à ébullition 1L d'eau salée dans une casserole. Cuire les 100g de Penne ou Rigatoni al dente selon le temps indiqué sur le paquet (généralement 10 min).",
      "4. Pancetta croustillante : Dans une poêle sans matière grasse à feu moyen, faire suer et griller les 100g de dés de pancetta pendant 3 à 4 minutes jusqu'à ce qu'ils soient bien dorés et croustillants.",
      "5. Assemblage & Dégustation : Égoutter les pâtes en gardant un petit fond d'eau de cuisson. Les verser directement dans la poêle avec la pancetta grillée, ajouter les dés d'aubergine rôties et mélanger à feu vif pendant 1 minute. Servir immédiatement bien chaud !"
    ],
    bergamoTip: "L'Air Fryer permet d'avoir une aubergine ultra-fondante sans absorber trop d'huile !"
  },
  {
    id: "salade-thon-oeufs-durs",
    name: "Salade de thon estivale aux œufs durs & vinaigrette olive",
    category: "Express & Salés",
    prepTime: 10,
    cost: "€",
    servings: 1,
    tags: ["Protéine", "Légume"],
    ingredients: [
      { name: "Thon au naturel en conserve", amount: 1, unit: "boîte (80g)", rayon: "Boucherie & Poisson", bought: false },
      { name: "Œufs frais", amount: 2, unit: "pièces", rayon: "Crémerie & Fromages", bought: false },
      { name: "Salade verte fraîche mélangée", amount: 1, unit: "grosse poignée", rayon: "Fruits & Légumes", bought: false },
      { name: "Huile d'olive, Vinaigre, Sel & Poivre", amount: 1, unit: "C. à soupe", rayon: "Épicerie & Féculents", bought: false }
    ],
    steps: [
      "1. Cuisson des œufs durs : Porter une petite casserole d'eau à ébullition. Y plonger délicatement 2 œufs frais avec une cuillère et laisser cuire à petits bouillons pendant 9 minutes exactement.",
      "2. Choc thermique & Écaillage : Dès la fin des 9 minutes, sortir les œufs et les plonger immédiatement dans un bol rempli d'eau froide avec quelques glaçons pendant 2 minutes. Tapoter les œufs sur le plan de travail et retirer la coquille facilement sous un filet d'eau.",
      "3. Préparation du thon & salade : Égoutter la boîte de thon au naturel. Rincer et sécher une belle poignée de salade verte.",
      "4. Vinaigrette express : Dans le fond du saladier, mélanger 1 cuillère à soupe d'huile d'olive, 1 cuillère à café de vinaigre, du sel et du poivre noir.",
      "5. Dressage : Ajouter la salade fraîche dans le saladier et mélanger. Émietter le thon au naturel par-dessus, puis couper les 2 œufs durs en 4 quartiers et les disposer harmonieusement sur la salade. Déguster immédiatement !"
    ],
    bergamoTip: "Un repas complet, ultra frais et riche en protéines pour le dimanche midi."
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
      { name: "Focaccia nature artisanale", amount: 1, unit: "part", rayon: "Épicerie & Féculents", bought: false },
      { name: "Grosse tomate fraîche mûre", amount: 1, unit: "pièce", rayon: "Fruits & Légumes", bought: true },
      { name: "Boule de mozzarella fraîche (125g)", amount: 1, unit: "boule", rayon: "Crémerie & Fromages", bought: true },
      { name: "Origan séché & Huile d'olive", amount: 1, unit: "pincée", rayon: "Épicerie & Féculents", bought: false }
    ],
    steps: [
      "1. Découpe de la focaccia : Prendre la focaccia nature et la trancher en deux dans le sens de la longueur avec un couteau à pain pour créer deux grands demi-pains.",
      "2. Préparation du garnissage : Laver la grosse tomate fraîche et la trancher en rondelles régulières de 5 mm. Égoutter la boule de mozzarella et la couper en tranches d'épaisseur égale.",
      "3. Montage pizza : Disposer les rondelles de tomate fraîche sur les bases de focaccia. Recouvrir uniformément avec les tranches de mozzarella fraîche.",
      "4. Assaisonnement : Saupoudrer généreusement d'origan séché et verser un léger filet d'huile d'olive sur le fromage.",
      "5. Gratinage Air Fryer : Préchauffer l'Air Fryer à 180°C. Y déposer les demi-focaccias garnies et cuire pendant 6 à 8 minutes jusqu'à ce que la mozzarella soit complètement fondue, dorée et gratinait avec des petites bulles. Servir chaud et croustillant !"
    ],
    bergamoTip: "Le repas réconfortant ultime du dimanche soir préparé en 10 minutes !"
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
