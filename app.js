/**
 * Erasmus Meal & Grocery Planner - App Core Logic (v15.0 Practical 2 Cutlets Poultry Pack)
 */

function forceAppRefresh() {
  localStorage.clear();
  sessionStorage.clear();
  window.location.reload(true);
}

// Force purge old cache & local storage to guarantee fresh week menu display
localStorage.clear();

let currentMenu = CURRENT_REAL_WEEK_MENU;
let checkedGroceryItems = {};
let activeTab = 'calendar';

const DAYS_TRANSLATIONS = {
  lundi: "Lundi",
  mardi: "Mardi",
  mercredi: "Mercredi",
  jeudi: "Jeudi",
  vendredi: "Vendredi",
  samedi: "Samedi",
  dimanche: "Dimanche"
};

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  renderCalendar();
  renderGroceryList();
});

// TAB SWITCHING (2 TABS: CALENDAR & GROCERY)
function switchTab(tabId) {
  activeTab = tabId;
  document.querySelectorAll('.view-section').forEach(sec => sec.classList.remove('active'));
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));

  document.getElementById(`view-${tabId}`).classList.add('active');
  const activeBtn = document.getElementById(`tab-${tabId}`);
  if (activeBtn) activeBtn.classList.add('active');

  if (tabId === 'grocery') {
    renderGroceryList();
  }
}

// CALENDAR RENDERING
function renderCalendar() {
  const container = document.getElementById('days-container');
  if (!container) return;
  container.innerHTML = '';

  Object.keys(DAYS_TRANSLATIONS).forEach(dayKey => {
    const dayName = DAYS_TRANSLATIONS[dayKey];
    const dayData = currentMenu[dayKey] || { midi: null, soir: null };
    const isWeekend = (dayKey === 'samedi' || dayKey === 'dimanche');

    const card = document.createElement('div');
    card.className = 'day-card';
    card.innerHTML = `
      <div class="day-header">
        <span class="day-name">${dayName}</span>
        <span class="day-status">${isWeekend ? 'Week-end' : 'Cours (RU le midi)'}</span>
      </div>
      <div class="meals-wrapper">
        ${isWeekend || dayData.midi ? renderMealSlot(dayData.midi, 'Déjeuner (Midi)') : ''}
        ${renderMealSlot(dayData.soir, 'Dîner (Soir)')}
      </div>
    `;
    container.appendChild(card);
  });
}

function renderMealSlot(recipeId, slotTitle) {
  const recipe = recipeId ? getRecipeById(recipeId) : null;

  if (recipe) {
    return `
      <div class="meal-slot" onclick="openRecipeModal('${recipe.id}')">
        <div class="meal-info">
          <div>
            <div class="slot-label">${slotTitle}</div>
            <div class="meal-title">${recipe.name}</div>
            <div class="meal-meta">
              <span>⏱️ ${recipe.prepTime} min</span> • 
              <span>${recipe.tags.join(', ')}</span>
            </div>
          </div>
        </div>
        <div class="slot-action">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
        </div>
      </div>
    `;
  }
  return '';
}

// RECIPE MODAL DETAILS (APPLE SHEET)
function openRecipeModal(recipeId) {
  const recipe = getRecipeById(recipeId);
  if (!recipe) return;

  const catPill = document.getElementById('modal-recipe-cat');
  if (catPill) catPill.textContent = recipe.category ? recipe.category.toUpperCase() : 'RECETTE';

  document.getElementById('modal-recipe-title').textContent = recipe.name;
  document.getElementById('modal-recipe-time').textContent = `⏱️ ${recipe.prepTime} min`;
  document.getElementById('modal-recipe-servings').textContent = `👤 ${recipe.servings} portion(s)`;
  document.getElementById('modal-recipe-tip').innerHTML = `<strong>Astuce Bergame :</strong> ${recipe.bergamoTip}`;

  // Render ALL ingredients needed for the recipe
  const ingContainer = document.getElementById('modal-ingredients-list');
  ingContainer.innerHTML = '';
  
  if (recipe.ingredients && recipe.ingredients.length > 0) {
    recipe.ingredients.forEach(ing => {
      const item = document.createElement('div');
      item.className = 'ingredient-item';
      item.style.cursor = 'default';
      item.innerHTML = `
        <div class="ing-name-qty">
          <span class="ing-name">${ing.name} ${ing.bought ? '<span style="font-size:0.75rem; color:var(--secondary-text); margin-left:6px;">(À acheter)</span>' : '<span style="font-size:0.75rem; color:var(--tertiary-text); margin-left:6px;">(En stock)</span>'}</span>
        </div>
        <span class="ing-qty">${ing.amount} ${ing.unit}</span>
      `;
      ingContainer.appendChild(item);
    });
  }

  // Render steps
  const stepsContainer = document.getElementById('modal-steps-list');
  stepsContainer.innerHTML = '';
  recipe.steps.forEach((step, idx) => {
    const stepEl = document.createElement('div');
    stepEl.className = 'step-card';
    stepEl.innerHTML = `
      <div class="step-num">${idx + 1}</div>
      <div>${step}</div>
    `;
    stepsContainer.appendChild(stepEl);
  });

  document.getElementById('recipe-modal').classList.add('active');
}

function closeRecipeModal(event) {
  if (event.target.id === 'recipe-modal') {
    closeRecipeModalDirect();
  }
}

function closeRecipeModalDirect() {
  document.getElementById('recipe-modal').classList.remove('active');
}

// GROCERY LIST AGGREGATION
function renderGroceryList() {
  const categoriesContainer = document.getElementById('grocery-categories-container');
  if (!categoriesContainer) return;

  const aggregated = {};
  let totalItemsCount = 0;
  const processedBatchRecipes = new Set();

  Object.values(currentMenu).forEach(day => {
    ['midi', 'soir'].forEach(slot => {
      const recipeId = day[slot];
      if (recipeId) {
        if (processedBatchRecipes.has(recipeId)) return;

        const recipe = getRecipeById(recipeId);
        if (recipe) {
          if (recipe.servings > 1) {
            processedBatchRecipes.add(recipeId);
          }

          recipe.ingredients.forEach(ing => {
            if (ing.bought) {
              const key = `${ing.name.toLowerCase()}_${ing.unit}`;
              if (!aggregated[key]) {
                aggregated[key] = {
                  name: ing.name,
                  amount: ing.amount,
                  unit: ing.unit,
                  rayon: ing.rayon
                };
              } else {
                aggregated[key].amount += ing.amount;
              }
            }
          });
        }
      }
    });
  });

  // Group by Rayon
  const groupedByRayon = {};
  Object.values(aggregated).forEach(item => {
    totalItemsCount++;
    if (!groupedByRayon[item.rayon]) {
      groupedByRayon[item.rayon] = [];
    }
    groupedByRayon[item.rayon].push(item);
  });

  document.getElementById('grocery-item-count').textContent = totalItemsCount;
  
  let checkedCount = 0;
  categoriesContainer.innerHTML = '';

  Object.keys(groupedByRayon).forEach(rayonName => {
    const items = groupedByRayon[rayonName];

    const catEl = document.createElement('div');
    catEl.className = 'grocery-category';
    
    let itemsHTML = '';
    items.forEach(ing => {
      const itemId = `ing_${ing.name.replace(/\s+/g, '_')}`;
      const isChecked = checkedGroceryItems[itemId] || false;
      if (isChecked) checkedCount++;

      let displayAmount = ing.amount;
      if (typeof ing.amount === 'number') {
        const rounded = Math.round(ing.amount);
        if (Math.abs(ing.amount - rounded) < 0.05) {
          displayAmount = rounded;
        }
      }

      itemsHTML += `
        <div class="ingredient-item ${isChecked ? 'checked' : ''}" onclick="toggleGroceryCheck('${itemId}')">
          <div style="display: flex; align-items: center;">
            <div class="checkbox-custom">${isChecked ? '✓' : ''}</div>
            <div class="ing-name-qty">
              <span class="ing-name">${ing.name}</span>
            </div>
          </div>
          <span class="ing-qty">${displayAmount} ${ing.unit}</span>
        </div>
      `;
    });

    catEl.innerHTML = `
      <div class="cat-header">
        <span>${rayonName}</span>
      </div>
      <div class="ingredient-list">
        ${itemsHTML}
      </div>
    `;

    categoriesContainer.appendChild(catEl);
  });

  document.getElementById('grocery-checked-count').textContent = checkedCount;
}

function toggleGroceryCheck(itemId) {
  checkedGroceryItems[itemId] = !checkedGroceryItems[itemId];
  localStorage.setItem('erasmus_grocery_checked', JSON.stringify(checkedGroceryItems));
  renderGroceryList();
}
