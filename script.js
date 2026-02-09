// Nigerian Meal Database
const nigerianMeals = {
    breakfast: [
        {
            name: "Akara & Pap",
            emoji: "🥞",
            description: "Crispy bean cakes served with smooth corn pudding",
            tags: ["Protein-Rich", "Traditional"],
            ingredients: ["Black-eyed beans", "Corn flour", "Palm oil", "Onions", "Pepper"]
        },
        {
            name: "Moi Moi",
            emoji: "🫘",
            description: "Steamed bean pudding with eggs and fish",
            tags: ["Nutritious", "Filling"],
            ingredients: ["Black-eyed beans", "Eggs", "Fish", "Palm oil", "Peppers"]
        },
        {
            name: "Yam & Egg Sauce",
            emoji: "🍠",
            description: "Boiled yam with spicy scrambled eggs",
            tags: ["Quick", "Energizing"],
            ingredients: ["Yam", "Eggs", "Tomatoes", "Onions", "Vegetable oil"]
        },
        {
            name: "Plantain & Beans",
            emoji: "🍌",
            description: "Fried ripe plantain with beans porridge",
            tags: ["Sweet & Savory", "Popular"],
            ingredients: ["Ripe plantain", "Beans", "Palm oil", "Crayfish", "Onions"]
        },
        {
            name: "Bread & Akamu",
            emoji: "🍞",
            description: "Fresh bread with fermented corn pap",
            tags: ["Light", "Quick"],
            ingredients: ["Bread", "Corn flour", "Sugar", "Milk", "Butter"]
        },
        {
            name: "Fried Yam & Pepper Sauce",
            emoji: "🍟",
            description: "Crispy fried yam with spicy pepper sauce",
            tags: ["Crispy", "Spicy"],
            ingredients: ["Yam", "Vegetable oil", "Peppers", "Tomatoes", "Onions"]
        },
        {
            name: "Pancakes Nigerian Style",
            emoji: "🥞",
            description: "Fluffy pancakes with Nigerian twist",
            tags: ["Sweet", "Modern"],
            ingredients: ["Flour", "Eggs", "Milk", "Sugar", "Nutmeg"]
        },
        {
            name: "Okpa",
            emoji: "🫘",
            description: "Bambara nut pudding from Eastern Nigeria",
            tags: ["Regional", "Unique"],
            ingredients: ["Bambara nuts", "Palm oil", "Crayfish", "Pepper", "Seasoning"]
        }
    ],
    lunch: [
        {
            name: "Jollof Rice",
            emoji: "🍛",
            description: "Flavorful rice cooked in tomato sauce with spices",
            tags: ["Spicy", "Popular"],
            ingredients: ["Rice", "Tomatoes", "Chicken", "Onions", "Curry powder", "Thyme"]
        },
        {
            name: "Fried Rice",
            emoji: "🍚",
            description: "Colorful rice with mixed vegetables and protein",
            tags: ["Festive", "Colorful"],
            ingredients: ["Rice", "Mixed vegetables", "Shrimp", "Liver", "Soy sauce"]
        },
        {
            name: "Ofada Rice & Ayamase",
            emoji: "🍛",
            description: "Local rice with spicy green pepper sauce",
            tags: ["Authentic", "Spicy"],
            ingredients: ["Ofada rice", "Green peppers", "Locust beans", "Assorted meat", "Palm oil"]
        },
        {
            name: "Pounded Yam & Egusi",
            emoji: "🥘",
            description: "Smooth pounded yam with melon seed soup",
            tags: ["Traditional", "Hearty"],
            ingredients: ["Yam", "Egusi seeds", "Spinach", "Beef", "Stockfish"]
        },
        {
            name: "Amala & Ewedu",
            emoji: "🍲",
            description: "Yam flour swallow with jute leaf soup",
            tags: ["Yoruba Classic", "Smooth"],
            ingredients: ["Yam flour", "Ewedu leaves", "Goat meat", "Locust beans", "Palm oil"]
        },
        {
            name: "Tuwo Shinkafa & Miyan Kuka",
            emoji: "🥣",
            description: "Rice swallow with baobab leaf soup",
            tags: ["Northern Delight", "Nutritious"],
            ingredients: ["Rice flour", "Baobab leaves", "Beef", "Groundnut paste", "Spices"]
        },
        {
            name: "Coconut Rice",
            emoji: "🥥",
            description: "Fragrant rice cooked in coconut milk",
            tags: ["Aromatic", "Rich"],
            ingredients: ["Rice", "Coconut milk", "Chicken", "Carrots", "Green beans"]
        },
        {
            name: "Spaghetti Jollof",
            emoji: "🍝",
            description: "Nigerian-style pasta in tomato sauce",
            tags: ["Fusion", "Quick"],
            ingredients: ["Spaghetti", "Tomatoes", "Sausages", "Peppers", "Curry"]
        }
    ],
    dinner: [
        {
            name: "Egusi Soup",
            emoji: "🥘",
            description: "Rich melon seed soup with vegetables and meat",
            tags: ["Hearty", "Nutritious"],
            ingredients: ["Egusi seeds", "Spinach", "Beef", "Stockfish", "Palm oil"]
        },
        {
            name: "Bitterleaf Soup",
            emoji: "🍲",
            description: "Traditional soup with bitter leaves and assorted meat",
            tags: ["Traditional", "Medicinal"],
            ingredients: ["Bitter leaves", "Cocoyam", "Beef", "Dried fish", "Crayfish"]
        },
        {
            name: "Edikang Ikong",
            emoji: "🥬",
            description: "Vegetable soup with pumpkin and waterleaf",
            tags: ["Nutritious", "Premium"],
            ingredients: ["Pumpkin leaves", "Waterleaf", "Periwinkle", "Beef", "Stockfish"]
        },
        {
            name: "Ogbono Soup",
            emoji: "🍜",
            description: "Draw soup made from wild mango seeds",
            tags: ["Smooth", "Popular"],
            ingredients: ["Ogbono seeds", "Spinach", "Beef", "Stockfish", "Crayfish"]
        },
        {
            name: "Afang Soup",
            emoji: "🥗",
            description: "Delicious soup with afang leaves and waterleaf",
            tags: ["Delicacy", "Rich"],
            ingredients: ["Afang leaves", "Waterleaf", "Periwinkle", "Beef", "Palm oil"]
        },
        {
            name: "Pepper Soup",
            emoji: "🌶️",
            description: "Spicy broth with meat or fish",
            tags: ["Spicy", "Light"],
            ingredients: ["Goat meat", "Pepper soup spice", "Scent leaves", "Yam", "Utazi"]
        },
        {
            name: "Okro Soup",
            emoji: "🥒",
            description: "Slimy soup with okra and seafood",
            tags: ["Healthy", "Traditional"],
            ingredients: ["Okra", "Seafood", "Beef", "Palm oil", "Crayfish"]
        },
        {
            name: "Oha Soup",
            emoji: "🍵",
            description: "Special soup with oha leaves",
            tags: ["Igbo Special", "Aromatic"],
            ingredients: ["Oha leaves", "Cocoyam", "Beef", "Stockfish", "Uziza seeds"]
        }
    ]
};

const nigerianCocktails = [
    {
        name: "Chapman",
        emoji: "🍹",
        description: "A refreshing Nigerian mocktail with Fanta, Sprite, grenadine, Angostura bitters, and fresh fruits",
        meta: ["Chilled", "Sweet"]
    },
    {
        name: "Zobo Mojito",
        emoji: "🍷",
        description: "Traditional hibiscus drink infused with mint, lime, and a splash of rum for a tropical twist",
        meta: ["Herbal", "Refreshing"]
    },
    {
        name: "Palm Wine Cocktail",
        emoji: "🥥",
        description: "Fresh palm wine mixed with pineapple juice and coconut water for a tropical experience",
        meta: ["Traditional", "Tropical"]
    },
    {
        name: "Kunu Colada",
        emoji: "🥛",
        description: "Nigerian millet drink blended with coconut cream and pineapple for a creamy delight",
        meta: ["Creamy", "Exotic"]
    },
    {
        name: "Sobo Sangria",
        emoji: "🍇",
        description: "Hibiscus tea infused with red wine, fresh berries, and citrus fruits",
        meta: ["Fruity", "Sophisticated"]
    },
    {
        name: "Ginger Beer Punch",
        emoji: "🫚",
        description: "Spicy homemade ginger beer with lime, honey, and a hint of rum",
        meta: ["Spicy", "Zesty"]
    },
    {
        name: "Tiger Nut Smoothie",
        emoji: "🥤",
        description: "Creamy tiger nut milk blended with dates, vanilla, and ice",
        meta: ["Nutritious", "Smooth"]
    },
    {
        name: "Pineapple & Ginger Fizz",
        emoji: "🍍",
        description: "Fresh pineapple juice with ginger syrup and sparkling water",
        meta: ["Fizzy", "Tangy"]
    }
];

// DOM Elements
const generateBtn = document.getElementById('generateBtn');
const refreshBtn = document.getElementById('refreshBtn');
const copyListBtn = document.getElementById('copyListBtn');
const currentDateEl = document.getElementById('currentDate');
const loadingSection = document.getElementById('loadingSection');
const mealPlanSection = document.getElementById('mealPlanSection');

// Initialize
function init() {
    updateDate();
    generateBtn.addEventListener('click', generateMealPlan);
    refreshBtn.addEventListener('click', generateMealPlan);
    copyListBtn.addEventListener('click', copyShoppingList);
}

// Update current date
function updateDate() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = new Date().toLocaleDateString('en-US', options);
    currentDateEl.textContent = today;
}

// Generate meal plan
function generateMealPlan() {
    // Hide meal plan and show loading
    mealPlanSection.style.display = 'none';
    loadingSection.style.display = 'block';

    // Simulate loading
    setTimeout(() => {
        // Get random meals
        const breakfast = getRandomItem(nigerianMeals.breakfast);
        const lunch = getRandomItem(nigerianMeals.lunch);
        const dinner = getRandomItem(nigerianMeals.dinner);
        const lunchCocktail = getRandomItem(nigerianCocktails);
        const dinnerCocktail = getRandomItem(nigerianCocktails.filter(c => c.name !== lunchCocktail.name));

        // Update breakfast
        document.getElementById('breakfastImage').querySelector('.dish-emoji').textContent = breakfast.emoji;
        document.getElementById('breakfastName').textContent = breakfast.name;
        document.getElementById('breakfastDescription').textContent = breakfast.description;
        updateTags('breakfastTags', breakfast.tags);
        updateIngredients('breakfastIngredients', breakfast.ingredients);

        // Update lunch
        document.getElementById('lunchImage').querySelector('.dish-emoji').textContent = lunch.emoji;
        document.getElementById('lunchName').textContent = lunch.name;
        document.getElementById('lunchDescription').textContent = lunch.description;
        updateTags('lunchTags', lunch.tags);
        updateIngredients('lunchIngredients', lunch.ingredients);
        document.getElementById('lunchCocktail').textContent = lunchCocktail.name;
        document.getElementById('lunchCocktailDetail').textContent = lunchCocktail.name;
        document.getElementById('lunchCocktailDesc').textContent = lunchCocktail.description;

        // Update dinner
        document.getElementById('dinnerImage').querySelector('.dish-emoji').textContent = dinner.emoji;
        document.getElementById('dinnerName').textContent = dinner.name;
        document.getElementById('dinnerDescription').textContent = dinner.description;
        updateTags('dinnerTags', dinner.tags);
        updateIngredients('dinnerIngredients', dinner.ingredients);
        document.getElementById('dinnerCocktail').textContent = dinnerCocktail.name;
        document.getElementById('dinnerCocktailDetail').textContent = dinnerCocktail.name;
        document.getElementById('dinnerCocktailDesc').textContent = dinnerCocktail.description;

        // Update cocktail emojis and meta
        const lunchCocktailCard = document.querySelector('.cocktail-card:first-child');
        lunchCocktailCard.querySelector('.cocktail-emoji').textContent = lunchCocktail.emoji;
        updateCocktailMeta(lunchCocktailCard, lunchCocktail.meta, 'Lunch');

        const dinnerCocktailCard = document.querySelector('.cocktail-card:last-child');
        dinnerCocktailCard.querySelector('.cocktail-emoji').textContent = dinnerCocktail.emoji;
        updateCocktailMeta(dinnerCocktailCard, dinnerCocktail.meta, 'Dinner');

        // Hide loading and show meal plan
        loadingSection.style.display = 'none';
        mealPlanSection.style.display = 'block';

        // Scroll to meal plan
        mealPlanSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 2000);
}

// Helper function to get random item from array
function getRandomItem(array) {
    return array[Math.floor(Math.random() * array.length)];
}

// Update tags
function updateTags(elementId, tags) {
    const container = document.getElementById(elementId);
    container.innerHTML = tags.map(tag => `<span class="tag">${tag}</span>`).join('');
}

// Update ingredients
function updateIngredients(elementId, ingredients) {
    const container = document.getElementById(elementId);
    container.innerHTML = ingredients.map(ingredient => `<li>${ingredient}</li>`).join('');
}

// Update cocktail meta
function updateCocktailMeta(card, meta, mealTime) {
    const metaContainer = card.querySelector('.cocktail-meta');
    metaContainer.innerHTML = `
        <span class="meta-item">🕐 ${mealTime}</span>
        ${meta.map(m => `<span class="meta-item">${getMetaIcon(m)} ${m}</span>`).join('')}
    `;
}

// Get meta icon
function getMetaIcon(meta) {
    const icons = {
        'Chilled': '❄️',
        'Sweet': '🍬',
        'Herbal': '🌿',
        'Refreshing': '💧',
        'Traditional': '🏺',
        'Tropical': '🌴',
        'Creamy': '🥛',
        'Exotic': '🌺',
        'Fruity': '🍓',
        'Sophisticated': '🥂',
        'Spicy': '🌶️',
        'Zesty': '🍋',
        'Nutritious': '💪',
        'Smooth': '✨',
        'Fizzy': '🫧',
        'Tangy': '🍊'
    };
    return icons[meta] || '✨';
}

// Copy shopping list
function copyShoppingList() {
    const breakfastItems = Array.from(document.getElementById('breakfastIngredients').querySelectorAll('li'))
        .map(li => li.textContent);
    const lunchItems = Array.from(document.getElementById('lunchIngredients').querySelectorAll('li'))
        .map(li => li.textContent);
    const dinnerItems = Array.from(document.getElementById('dinnerIngredients').querySelectorAll('li'))
        .map(li => li.textContent);

    const shoppingList = `
NIGERIAN MEAL PLANNER - SHOPPING LIST
${new Date().toLocaleDateString()}

BREAKFAST INGREDIENTS:
${breakfastItems.map(item => `- ${item}`).join('\n')}

LUNCH INGREDIENTS:
${lunchItems.map(item => `- ${item}`).join('\n')}

DINNER INGREDIENTS:
${dinnerItems.map(item => `- ${item}`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(shoppingList).then(() => {
        const originalText = copyListBtn.innerHTML;
        copyListBtn.innerHTML = '<svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15 5L7 13L3 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg> Copied!';
        copyListBtn.style.background = 'var(--primary-green)';
        copyListBtn.style.color = 'white';

        setTimeout(() => {
            copyListBtn.innerHTML = originalText;
            copyListBtn.style.background = 'var(--accent-yellow)';
            copyListBtn.style.color = 'var(--text-dark)';
        }, 2000);
    }).catch(err => {
        alert('Failed to copy shopping list. Please try again.');
    });
}

// Initialize app
init();
