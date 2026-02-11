// Nigerian Meal Database
const nigerianMeals = {
    breakfast: [
        {
            name: "Akara & Pap",
            emoji: "🥞",
            description: "Crispy bean cakes served with smooth corn pudding",
            tags: ["Protein-Rich", "Traditional"],
            ingredients: ["Black-eyed beans", "Corn flour", "Palm oil", "Onions", "Pepper"],
            recipe: [
                "Soak black-eyed beans overnight, then peel off the skins by rubbing between your palms",
                "Blend the beans with onions and peppers until smooth, adding minimal water",
                "Whisk the batter vigorously for 2-3 minutes to incorporate air for fluffiness",
                "Heat palm oil in a deep pan until very hot (test with a drop of batter)",
                "Scoop batter with a spoon and gently drop into hot oil, fry until golden brown",
                "For the pap: Mix corn flour with cold water to form a smooth paste",
                "Boil water separately, then pour the hot water into the paste while stirring continuously",
                "Cook for 5 minutes until thick and smooth, add sugar or milk to taste",
                "Serve hot akara alongside warm pap for a traditional Nigerian breakfast"
            ]
        },
        {
            name: "Moi Moi",
            emoji: "🫘",
            description: "Steamed bean pudding with eggs and fish",
            tags: ["Nutritious", "Filling"],
            ingredients: ["Black-eyed beans", "Eggs", "Fish", "Palm oil", "Peppers"],
            recipe: [
                "Soak and peel black-eyed beans, then blend with peppers, onions, and crayfish",
                "Add palm oil, seasoning cubes, and salt to the blended mixture",
                "Stir in warm water gradually until you achieve a smooth, pourable consistency",
                "Prepare your containers (banana leaves, foil cups, or plastic bowls)",
                "Pour mixture into containers, filling about 3/4 full",
                "Add boiled eggs and pieces of fish to each container",
                "Steam in a large pot with water for 45-60 minutes until firm",
                "Check doneness by inserting a knife - it should come out clean",
                "Allow to cool slightly before unmolding and serving"
            ]
        },
        {
            name: "Yam & Egg Sauce",
            emoji: "🍠",
            description: "Boiled yam with spicy scrambled eggs",
            tags: ["Quick", "Energizing"],
            ingredients: ["Yam", "Eggs", "Tomatoes", "Onions", "Vegetable oil"],
            recipe: [
                "Peel yam and cut into medium-sized chunks",
                "Boil yam in salted water for 15-20 minutes until tender when pierced with a fork",
                "While yam is cooking, dice tomatoes and onions finely",
                "Heat vegetable oil in a pan and sauté onions until translucent",
                "Add diced tomatoes and cook until soft and pulpy",
                "Beat eggs in a bowl with salt and pepper",
                "Pour eggs into the tomato mixture and scramble gently",
                "Cook until eggs are just set but still moist",
                "Drain boiled yam and serve hot with the egg sauce on top"
            ]
        },
        {
            name: "Plantain & Beans",
            emoji: "🍌",
            description: "Fried ripe plantain with beans porridge",
            tags: ["Sweet & Savory", "Popular"],
            ingredients: ["Ripe plantain", "Beans", "Palm oil", "Crayfish", "Onions"],
            recipe: [
                "Pick and wash beans, then boil with water until soft (about 45 minutes)",
                "While beans cook, peel ripe plantains and slice diagonally",
                "Heat vegetable oil and fry plantain slices until golden on both sides, set aside",
                "When beans are soft, add palm oil, chopped onions, and crayfish",
                "Add seasoning cubes, salt, and pepper to taste",
                "Cook for another 10 minutes, mashing some beans for a thicker consistency",
                "Add water if needed to achieve desired thickness",
                "Serve the beans porridge hot with fried plantain on the side",
                "Optionally garnish with fresh pepper or serve with fish"
            ]
        },
        {
            name: "Bread & Akamu",
            emoji: "🍞",
            description: "Fresh bread with fermented corn pap",
            tags: ["Light", "Quick"],
            ingredients: ["Bread", "Corn flour", "Sugar", "Milk", "Butter"],
            recipe: [
                "Mix corn flour (ogi/akamu) with cold water to form a smooth paste",
                "Boil water in a separate pot",
                "Pour the boiling water into the paste while stirring continuously to avoid lumps",
                "Return to low heat and cook for 3-5 minutes, stirring constantly",
                "Add sugar to taste and stir until dissolved",
                "Add milk for creaminess if desired",
                "Slice fresh bread and spread with butter",
                "Serve the warm akamu in a bowl alongside buttered bread",
                "This is a quick, comforting breakfast perfect for busy mornings"
            ]
        },
        {
            name: "Fried Yam & Pepper Sauce",
            emoji: "🍟",
            description: "Crispy fried yam with spicy pepper sauce",
            tags: ["Crispy", "Spicy"],
            ingredients: ["Yam", "Vegetable oil", "Peppers", "Tomatoes", "Onions"],
            recipe: [
                "Peel yam and cut into finger-sized chips or rounds",
                "Soak yam pieces in salted water for 10 minutes",
                "Heat vegetable oil in a deep pan until very hot",
                "Drain yam and pat dry with paper towels",
                "Fry yam in batches until golden and crispy, about 5-7 minutes per batch",
                "For the sauce: Blend peppers, tomatoes, and onions together",
                "Heat oil in a pan and fry the blended mixture until it reduces and darkens",
                "Add seasoning cubes, salt, and a little water if too thick",
                "Serve crispy fried yam hot with the spicy pepper sauce for dipping"
            ]
        },
        {
            name: "Pancakes Nigerian Style",
            emoji: "🥞",
            description: "Fluffy pancakes with Nigerian twist",
            tags: ["Sweet", "Modern"],
            ingredients: ["Flour", "Eggs", "Milk", "Sugar", "Nutmeg"],
            recipe: [
                "In a bowl, mix flour, sugar, baking powder, salt, and ground nutmeg",
                "In another bowl, whisk eggs, milk, and melted butter together",
                "Pour wet ingredients into dry ingredients and mix until just combined (don't overmix)",
                "Let batter rest for 5 minutes",
                "Heat a non-stick pan over medium heat and lightly grease",
                "Pour about 1/4 cup of batter for each pancake",
                "Cook until bubbles form on the surface, then flip",
                "Cook the other side until golden brown",
                "Serve warm with honey, maple syrup, or fresh fruits"
            ]
        },
        {
            name: "Okpa",
            emoji: "🫘",
            description: "Bambara nut pudding from Eastern Nigeria",
            tags: ["Regional", "Unique"],
            ingredients: ["Bambara nuts", "Palm oil", "Crayfish", "Pepper", "Seasoning"],
            recipe: [
                "Grind Bambara nuts into fine flour (or use pre-ground okpa flour)",
                "Mix the flour with warm water to form a smooth, thick paste",
                "Add palm oil, ground crayfish, pepper, and seasoning cubes",
                "Stir thoroughly until all ingredients are well incorporated",
                "Prepare banana leaves or aluminum foil for wrapping",
                "Scoop mixture onto leaves/foil and wrap into parcels",
                "Arrange parcels in a steamer or large pot with boiling water",
                "Steam for 45-60 minutes until firm and cooked through",
                "Unwrap and serve hot - perfect with cold drinks or pap"
            ]
        },
        {
            name: "Agege Bread & Ewa Agoyin",
            emoji: "🍞",
            description: "Soft stretchy bread with spicy mashed beans",
            tags: ["Street Food", "Spicy"],
            ingredients: ["Beans", "Palm oil", "Dried peppers", "Onions", "Agege Bread"],
            recipe: [
                "Boil beans until extremely soft and mash them",
                "Bleach palm oil until dark (be careful of smoke)",
                "Fry chopped onions until burnt/dark brown",
                "Add blended dried peppers and cook until gritty and dark",
                "Season with salt and seasoning cubes",
                "Serve the spicy sauce over the mashed beans with fresh soft bread"
            ]
        },
        {
            name: "Indomie & Fried Eggs",
            emoji: "🍜",
            description: "Spicy noodles served with vegetables and eggs",
            tags: ["Quick", "Modern"],
            ingredients: ["Indomie noodles", "Eggs", "Carrots", "Green beans", "Peppers"],
            recipe: [
                "Boil noodles with chopped carrots and green beans",
                "Add the noodle seasoning spices",
                "Stir-fry chopped peppers and onions in a separate pan",
                "Mix the stir-fry with the cooked noodles",
                "Fry eggs sunny-side up or plain omelette",
                "Serve hot together"
            ]
        },
        {
            name: "Boiled Plantain & Egg Sauce",
            emoji: "🍌",
            description: "Healthy boiled unripe/ripe plantain with savory sauce",
            tags: ["Healthy", "Simple"],
            ingredients: ["Plantain", "Eggs", "Tomatoes", "Vegetable oil", "Smoked fish"],
            recipe: [
                "Peel plantains and boil in salted water until soft",
                "Chop tomatoes, peppers, and onions",
                "Heat oil and fry the vegetables",
                "Add flaked smoked fish and seasoning",
                "Whisk eggs and pour into the sauce, scrambling gently",
                "Serve the sauce over the hot boiled plantain"
            ]
        },
        {
            name: "Custard & Moi Moi",
            emoji: "🍮",
            description: "Creamy custard served with steamed bean pudding",
            tags: ["Creamy", "Classic"],
            ingredients: ["Custard powder", "Milk", "Sugar", "Moi Moi"],
            recipe: [
                "Mix custard powder with a little water to form a smooth paste",
                "Boil water and pour into the paste while stirring to thicken",
                "Add milk and sugar to taste",
                "Warm up your pre-made Moi Moi",
                "Serve the hot custard in a bowl with Moi Moi on the side"
            ]
        },
        {
            name: "Yam Porridge (Asaro)",
            emoji: "🍠",
            description: "Yam cooked in a rich palm oil and pepper sauce",
            tags: ["One-Pot", "Comfort"],
            ingredients: ["Yam", "Palm oil", "Crayfish", "Smoked fish", "Vegetables"],
            recipe: [
                "Peel and cut yam into small cubes",
                "Boil yam with water, palm oil, and chopped onions",
                "Add ground crayfish, pepper, and seasoning cubes",
                "Add smoked fish and cook until yam is soft",
                "Mash some yam pieces to thicken the porridge",
                "Add spinach or scent leaves and simmer for 2 minutes"
            ]
        },
        {
            name: "Club Sandwich Naija Style",
            emoji: "🥪",
            description: "Double-decker sandwich with sardines, eggs, and veggies",
            tags: ["Continental", "Filling"],
            ingredients: ["Sliced bread", "Sardines", "Eggs", "Mayonnaise", "Carrots"],
            recipe: [
                "Hard boil two eggs and mash them",
                "Mix mashed eggs with mayonnaise and grated carrots",
                "In a separate bowl, mash sardines with butter/mayo",
                "Toast bread slices lightly",
                "Layer the mixes between slices of bread",
                "Cut comfortably into triangles"
            ]
        },
        {
            name: "Golden Morn & Milk",
            emoji: "🥣",
            description: "Quick maize and soya cereal",
            tags: ["Instant", "Cereal"],
            ingredients: ["Golden Morn", "Powdered milk", "Sugar", "Cold water"],
            recipe: [
                "Scoop Golden Morn into a bowl",
                "Add powdered milk and sugar",
                "Pour cold water and stir for a crunchy texture",
                "Or use warm water if you prefer it soft",
                "Enjoy immediately"
            ]
        },
        {
            name: "Oats & Plantain",
            emoji: "🌾",
            description: "Healthier oatmeal paired with fried plantain cubes",
            tags: ["Fusion", "Fiber"],
            ingredients: ["Quaker Oats", "Ripe plantain", "Milk", "Honey"],
            recipe: [
                "Dice ripe plantain and fry until golden",
                "Cook oats with water or milk until smooth",
                "Sweeten oats with honey or sugar",
                "Top the oats with the fried plantain cubes",
                "Add milk for creaminess"
            ]
        }
    ],
    lunch: [
        {
            name: "Jollof Rice",
            emoji: "🍛",
            description: "Flavorful rice cooked in tomato sauce with spices",
            tags: ["Spicy", "Popular"],
            ingredients: ["Rice", "Tomatoes", "Chicken", "Onions", "Curry powder", "Thyme"],
            recipe: [
                "Blend tomatoes, peppers, and onions until smooth",
                "Season and cook chicken pieces until golden, set aside",
                "In a large pot, heat oil and fry sliced onions until translucent",
                "Add tomato paste and fry for 2-3 minutes to remove raw taste",
                "Pour in blended tomato mixture and cook until oil floats to the top (about 15 minutes)",
                "Add curry powder, thyme, seasoning cubes, and salt to taste",
                "Add chicken stock and bring to a boil",
                "Stir in washed rice and the cooked chicken pieces",
                "Cover tightly and cook on low heat for 30-40 minutes until rice is tender",
                "Fluff with a fork and serve hot with fried plantains or coleslaw"
            ]
        },
        {
            name: "Fried Rice",
            emoji: "🍚",
            description: "Colorful rice with mixed vegetables and protein",
            tags: ["Festive", "Colorful"],
            ingredients: ["Rice", "Mixed vegetables", "Shrimp", "Liver", "Soy sauce"],
            recipe: [
                "Parboil rice with a pinch of salt, drain and spread to cool completely",
                "Dice carrots, green beans, sweet corn, and green peas",
                "Season and cook shrimp and liver separately, dice the liver",
                "Heat oil in a large wok or pan over high heat",
                "Stir-fry the vegetables for 2-3 minutes until slightly tender",
                "Push vegetables to the side, scramble beaten eggs in the center",
                "Add the cooled rice and stir-fry everything together",
                "Add soy sauce, curry powder, thyme, and seasoning to taste",
                "Toss in the cooked shrimp and liver, stir well",
                "Serve hot as a complete meal or with grilled chicken"
            ]
        },
        {
            name: "Ofada Rice & Ayamase",
            emoji: "🍛",
            description: "Local rice with spicy green pepper sauce",
            tags: ["Authentic", "Spicy"],
            ingredients: ["Ofada rice", "Green peppers", "Locust beans", "Assorted meat", "Palm oil"],
            recipe: [
                "Wash ofada rice thoroughly to remove stones and chaff",
                "Boil rice with excess water until tender, drain and set aside",
                "Blend green bell peppers, scotch bonnet, and onions coarsely (leave some texture)",
                "Season and cook assorted meat (beef, tripe, liver) until tender",
                "Bleach palm oil until it loses its red color and cools down",
                "Fry the blended pepper mixture in the bleached palm oil until dark green",
                "Add locust beans (iru) and continue frying for 5 minutes",
                "Add the cooked meat and stock, simmer for 10 minutes",
                "Season with salt and seasoning cubes to taste",
                "Serve the ofada rice with the ayamase sauce and boiled eggs"
            ]
        },
        {
            name: "Pounded Yam & Egusi",
            emoji: "🥘",
            description: "Smooth pounded yam with melon seed soup",
            tags: ["Traditional", "Hearty"],
            ingredients: ["Yam", "Egusi seeds", "Spinach", "Beef", "Stockfish"],
            recipe: [
                "Peel and cut yam into chunks, boil until very soft",
                "Pound the yam in a mortar with a pestle until smooth and stretchy (or use a food processor)",
                "For egusi: Grind melon seeds into powder",
                "Cook beef and stockfish with seasonings until tender, reserve the stock",
                "Heat palm oil, add chopped onions and fry briefly",
                "Add ground egusi and stir continuously for 3-4 minutes",
                "Gradually add meat stock while stirring to avoid lumps",
                "Add the cooked meat, crayfish, and seasoning",
                "Simmer for 10 minutes, then add washed spinach",
                "Cook for 5 more minutes and serve hot with pounded yam"
            ]
        },
        {
            name: "Amala & Ewedu",
            emoji: "🍲",
            description: "Yam flour swallow with jute leaf soup",
            tags: ["Yoruba Classic", "Smooth"],
            ingredients: ["Yam flour", "Ewedu leaves", "Goat meat", "Locust beans", "Palm oil"],
            recipe: [
                "Boil water in a pot until vigorously boiling",
                "Gradually add yam flour (elubo) while stirring continuously to avoid lumps",
                "Stir vigorously until smooth and thick, cover and let it steam for 2 minutes",
                "For ewedu: Wash jute leaves thoroughly and boil briefly",
                "Blend or whisk the leaves until slimy and smooth",
                "Season goat meat and cook until very tender",
                "Heat palm oil, add locust beans and fry briefly",
                "Add the blended ewedu to the oil and stir",
                "Add meat stock and seasoning, simmer for 5 minutes",
                "Serve amala with ewedu soup and assorted meat on the side"
            ]
        },
        {
            name: "Tuwo Shinkafa & Miyan Kuka",
            emoji: "🥣",
            description: "Rice swallow with baobab leaf soup",
            tags: ["Northern Delight", "Nutritious"],
            ingredients: ["Rice flour", "Baobab leaves", "Beef", "Groundnut paste", "Spices"],
            recipe: [
                "Boil water in a pot until bubbling",
                "Add rice flour gradually while stirring to prevent lumps",
                "Stir continuously until thick and smooth, cover and steam for 5 minutes",
                "For miyan kuka: Soak baobab leaf powder in warm water",
                "Season and cook beef until tender, reserve stock",
                "Mix groundnut paste with water to form a smooth consistency",
                "Add the groundnut mixture to the meat stock and bring to a boil",
                "Add the soaked kuka powder and stir well",
                "Add cooked meat, seasoning, and spices (ginger, garlic)",
                "Simmer for 15 minutes until thick, serve with tuwo shinkafa"
            ]
        },
        {
            name: "Coconut Rice",
            emoji: "🥥",
            description: "Fragrant rice cooked in coconut milk",
            tags: ["Aromatic", "Rich"],
            ingredients: ["Rice", "Coconut milk", "Chicken", "Carrots", "Green beans"],
            recipe: [
                "Season and cook chicken until golden, set aside",
                "Wash rice and drain thoroughly",
                "Heat oil in a pot, add sliced onions and fry until soft",
                "Add diced carrots and green beans, stir-fry for 2 minutes",
                "Pour in coconut milk and chicken stock (1:1 ratio)",
                "Add curry powder, thyme, and seasoning cubes",
                "Bring to a boil, then add the washed rice",
                "Add the cooked chicken pieces on top",
                "Cover tightly and cook on low heat for 25-30 minutes",
                "Fluff with a fork and serve with fried plantains or salad"
            ]
        },
        {
            name: "Spaghetti Jollof",
            emoji: "🍝",
            description: "Nigerian-style pasta in tomato sauce",
            tags: ["Fusion", "Quick"],
            ingredients: ["Spaghetti", "Tomatoes", "Sausages", "Peppers", "Curry"],
            recipe: [
                "Parboil spaghetti in salted water until half-cooked, drain and set aside",
                "Blend tomatoes, peppers, and onions until smooth",
                "Slice sausages and fry until browned, set aside",
                "Heat oil in a large pot, add sliced onions and fry",
                "Add tomato paste and fry for 2 minutes",
                "Pour in blended tomato mixture and cook until oil rises (about 10 minutes)",
                "Add curry powder, thyme, seasoning cubes, and salt",
                "Add water or stock and bring to a boil",
                "Add the parboiled spaghetti and fried sausages",
                "Cover and cook on low heat for 10-15 minutes until spaghetti is tender and sauce is absorbed"
            ]
        },
        {
            name: "Banga Soup & Starch",
            emoji: "🌴",
            description: "Rich palm nut soup served with yellow starch",
            tags: ["Delta Special", "Rich"],
            ingredients: ["Palm nut concentrate", "Fresh fish", "Starch", "Banga spices", "Bitter leaf"],
            recipe: [
                "Boil palm nut extract until it thickens",
                "Add chopped onions, banga spices, and crushed dried bitter leaf",
                "Add fresh fish or dried fish and cook gently",
                "Season with salt and seasoning cubes",
                "Prepare starch by mixing with water and stirring over heat until it turns yellow and stretchy",
                "Serve the soup hot with the starch"
            ]
        },
        {
            name: "White Rice & Stew (Obe Ata)",
            emoji: "🍚",
            description: "Steamed rice with spicy red tomato stew",
            tags: ["Staple", "Classic"],
            ingredients: ["Rice", "Tomatoes", "Peppers", "Beef/Chicken", "Vegetable oil"],
            recipe: [
                "Boil white rice until tender and drain",
                "Blend tomatoes, peppers, and onions",
                "Boil the mixture until water dries up",
                "Fried the boiled paste in hot oil",
                "Add meat stock, curry, thyme, and cooked meat",
                "Simmer until oil floats on top",
                "Serve rice with the stew"
            ]
        },
        {
            name: "Onunu & Fresh Fish Stew",
            emoji: "🍠",
            description: "Rivers state pounded yam & plantain with spice stew",
            tags: ["Rivers", "Traditional"],
            ingredients: ["Yam", "Ripe Plantain", "Palm Oil", "Fresh Fish", "Pepper"],
            recipe: [
                "Boil yam and ripe plantain together until soft",
                "Pound them together in a mortar while adding palm oil",
                "Pound until smooth and stretchy and yellow",
                "Make a fresh fish stew with fresh tomatoes and peppers",
                "Serve the Onunu with the fresh fish stew"
            ]
        },
        {
            name: "Ikokore (Water Yam Pottage)",
            emoji: "🥘",
            description: "Ijebu special pottage made with water yam",
            tags: ["Ogun", "Delicacy"],
            ingredients: ["Water Yam", "Dried Fish", "Ponmo", "Palm Oil", "Locust Beans"],
            recipe: [
                "Peel and grate water yam into a bowl",
                "Boil water/stock with palm oil, pepper, and seasoning",
                "Add chunks of fish, ponmo, and locust beans",
                "Scoop lumps of grated water yam into the boiling pot",
                "Cover and cook without stirring initially to let lumps set",
                "Stir gently and cook until thickened"
            ]
        },
        {
            name: "Ekpang Nkukwo",
            emoji: "🥬",
            description: "Cocoyam wrapped in leaves - a Calabar/Akwa Ibom special",
            tags: ["Calabar", "Premium"],
            ingredients: ["Cocoyam", "Water Yam", "Cocoyam Leaves", "Periwinkles", "Palm Oil"],
            recipe: [
                "Grate cocoyam and water yam, mix and season",
                "Wrap small amounts of paste in cocoyam leaves",
                "Arrange wraps in a pot lined with periwinkles and oil",
                "Add hot water, pepper, crayfish, and seasoning",
                "Cook until set, shake pot (don't stir) to prevent burning",
                "Serve hot"
            ]
        },
        {
            name: "Ofe Owerri & Fufu",
            emoji: "🍲",
            description: "The 'King of Soups' from Imo State",
            tags: ["Imo", "Expensive"],
            ingredients: ["Assorted Meat", "Stockfish", "Snails", "Okazi Leaves", "Uziza Leaves"],
            recipe: [
                "Cook meats, stockfish, and snails until tender",
                "Add palm oil, crayfish, and achi/cocoyam thickener",
                "Add shredded Okazi leaves and cook for 5 mins",
                "Add Uziza leaves for aroma",
                "Simmer and serve with Akpu (Fufu)"
            ]
        },
        {
            name: "Beans & Corn (Adalu)",
            emoji: "🌽",
            description: "Sweet and savory mix of beans and corn",
            tags: ["Traditional", "Fiber"],
            ingredients: ["Beans", "Fresh corn", "Palm oil", "Pepper", "Smoked fish"],
            recipe: [
                "Cook corn until soft",
                "Add washed beans to the pot and cook until both are tender",
                "Add palm oil, onions, pepper, and seasoning",
                "Add smoked fish and cook until the liquid thickens",
                "Stir well to combine the flavors"
            ]
        },
        {
            name: "Roasted Plantain (Boli) & Fish",
            emoji: "🔥",
            description: "Grilled plantain street food with spicy fish",
            tags: ["Street Food", "Smoky"],
            ingredients: ["Ripe plantain", "Mackerel fish", "Palm oil", "Pepper sauce"],
            recipe: [
                "Score plantains and grill over charcoal (or oven) until golden brown",
                "Marinate fish with spices and grill alongside plantains",
                "Make a sauce with palm oil and coarsely blended peppers",
                "Serve the hot boli and fish with the pepper sauce"
            ]
        },
        {
            name: "Semovita & Efo Riro",
            emoji: "🥬",
            description: "Semolina swallow with rich vegetable soup",
            tags: ["Nutrient-Dense", "Popular"],
            ingredients: ["Semovita", "Spinach/Shoko", "Assorted meat", "Locust beans", "Palm oil"],
            recipe: [
                "Make Semo: Boil water, stir in semolina flour until smooth and thick",
                "Fry blended peppers in palm oil",
                "Add locust beans (iru) and assorted meat",
                "Add blanched vegetables (spinach) and stir",
                "Cook for 2 minutes to keep veggies fresh",
                "Serve with the hot Semo"
            ]
        },
        {
            name: "Gizdodo",
            emoji: "🍗",
            description: "Spicy combo of gizzards and fried plantain",
            tags: ["Side-Dish", "Party Special"],
            ingredients: ["Chicken gizzards", "Ripe plantain", "Peppers", "Onions"],
            recipe: [
                "Boil and fry gizzards until tender and brown",
                "Dice and fry plantains",
                "Fry a spicy pepper sauce with onions",
                "Toss the fried gizzards and plantain in the sauce",
                "Serve hot as a meal or side dish"
            ]
        },
        {
            name: "Concoction Rice",
            emoji: "🥘",
            description: "Traditional one-pot rice with palm oil and fish",
            tags: ["Rustic", "Flavorful"],
            ingredients: ["Rice", "Palm oil", "Smoked fish", "Scent leaves", "Locust beans"],
            recipe: [
                "Boil water with palm oil, pepper, and seasonings",
                "Add washed rice and smoked fish",
                "Add locust beans and cook until water absorbs",
                "Stir in chopped scent leaves at the end",
                "Serve hot"
            ]
        },
        {
            name: "Macaroni Stir-fry",
            emoji: "🍝",
            description: "Nigerian style fried macaroni with veggies",
            tags: ["Quick", "Modern"],
            ingredients: ["Macaroni", "Carrots", "Green peppers", "Chicken/Sausage", "Curry"],
            recipe: [
                "Boil macaroni until al dente, drain",
                "Stir-fry chopped veggies and sausage/chicken in oil",
                "Season with curry, thyme, garlic, and stock cubes",
                "Add macaroni and toss to combine",
                "Fry for 2-3 minutes until hot"
            ]
        }
    ],
    dinner: [
        {
            name: "Egusi Soup",
            emoji: "🥘",
            description: "Rich melon seed soup with vegetables and meat",
            tags: ["Hearty", "Nutritious"],
            ingredients: ["Egusi seeds", "Spinach", "Beef", "Stockfish", "Palm oil"],
            recipe: [
                "Grind egusi (melon) seeds into a fine powder",
                "Season and cook beef and stockfish until tender, reserve the stock",
                "Heat palm oil in a pot, add chopped onions and fry briefly",
                "Add the ground egusi and stir continuously for 3-4 minutes to toast",
                "Gradually add meat stock while stirring to prevent lumps",
                "Add ground crayfish, pepper, and seasoning cubes",
                "Add the cooked meat and stockfish, simmer for 10 minutes",
                "Wash and add spinach or pumpkin leaves",
                "Cook for 5 more minutes until vegetables are tender",
                "Serve hot with pounded yam, eba, or fufu"
            ]
        },
        {
            name: "Bitterleaf Soup",
            emoji: "🍲",
            description: "Traditional soup with bitter leaves and assorted meat",
            tags: ["Traditional", "Medicinal"],
            ingredients: ["Bitter leaves", "Cocoyam", "Beef", "Dried fish", "Crayfish"],
            recipe: [
                "Wash bitter leaves thoroughly, squeezing and rinsing multiple times to reduce bitterness",
                "Peel and boil cocoyam until soft, then pound into a smooth paste",
                "Season and cook beef and dried fish until tender",
                "In a pot, bring the meat stock to a boil",
                "Add small portions of pounded cocoyam paste, stirring to dissolve and thicken the soup",
                "Add palm oil, ground crayfish, and pepper",
                "Add the washed bitter leaves and stir well",
                "Add the cooked meat and fish",
                "Simmer for 15-20 minutes, adjusting seasoning to taste",
                "Serve with fufu, eba, or pounded yam"
            ]
        },
        {
            name: "Edikang Ikong",
            emoji: "🥬",
            description: "Vegetable soup with pumpkin and waterleaf",
            tags: ["Nutritious", "Premium"],
            ingredients: ["Pumpkin leaves", "Waterleaf", "Periwinkle", "Beef", "Stockfish"],
            recipe: [
                "Wash and slice pumpkin leaves (ugu) and waterleaf very finely",
                "Season and cook beef, stockfish, and periwinkle until tender",
                "In a pot, heat palm oil and add chopped onions",
                "Add the meat stock and bring to a boil",
                "Add ground crayfish, pepper, and seasoning cubes",
                "Add the cooked meat, stockfish, and periwinkle",
                "Add the sliced waterleaf first and cook for 3 minutes",
                "Add the pumpkin leaves and stir gently",
                "Cook for only 5 minutes to retain the vibrant green color and nutrients",
                "Serve immediately with your choice of swallow"
            ]
        },
        {
            name: "Ogbono Soup",
            emoji: "🍜",
            description: "Draw soup made from wild mango seeds",
            tags: ["Smooth", "Popular"],
            ingredients: ["Ogbono seeds", "Spinach", "Beef", "Stockfish", "Crayfish"],
            recipe: [
                "Grind ogbono (wild mango) seeds into fine powder",
                "Season and cook beef and stockfish until tender, reserve stock",
                "Heat palm oil in a pot, add chopped onions briefly",
                "Add the ground ogbono to the hot oil and stir quickly",
                "Immediately add meat stock while stirring to create the draw (slimy texture)",
                "Add ground crayfish, pepper, and seasoning cubes",
                "Add the cooked meat and stockfish",
                "Simmer on low heat for 10 minutes, stirring occasionally",
                "Add washed spinach or pumpkin leaves",
                "Cook for 5 more minutes and serve with eba, fufu, or pounded yam"
            ]
        },
        {
            name: "Afang Soup",
            emoji: "🥗",
            description: "Delicious soup with afang leaves and waterleaf",
            tags: ["Delicacy", "Rich"],
            ingredients: ["Afang leaves", "Waterleaf", "Periwinkle", "Beef", "Palm oil"],
            recipe: [
                "Grind or pound afang leaves until very fine (traditionally done with a mortar)",
                "Wash and slice waterleaf",
                "Season and cook beef, stockfish, and periwinkle until tender",
                "In a pot, heat palm oil and add chopped onions",
                "Add meat stock and bring to a boil",
                "Add ground crayfish, pepper, and seasoning cubes",
                "Add the ground afang leaves and stir well",
                "Add the waterleaf and mix thoroughly",
                "Add the cooked meat, stockfish, and periwinkle",
                "Simmer for 10-15 minutes, stirring occasionally, then serve with fufu or eba"
            ]
        },
        {
            name: "Pepper Soup",
            emoji: "🌶️",
            description: "Spicy broth with meat or fish",
            tags: ["Spicy", "Light"],
            ingredients: ["Goat meat", "Pepper soup spice", "Scent leaves", "Yam", "Utazi"],
            recipe: [
                "Cut goat meat into medium pieces and rinse",
                "Place meat in a pot with water, add chopped onions and seasoning cubes",
                "Boil until meat is almost tender (about 30 minutes)",
                "Peel and cut yam into chunks, add to the pot",
                "Add pepper soup spice mix (or blend fresh peppers, ginger, and garlic)",
                "Add ground crayfish and more seasoning if needed",
                "Cook until yam is soft and meat is very tender",
                "Add sliced scent leaves and utazi leaves",
                "Simmer for 2-3 minutes to release the aroma",
                "Serve hot as a comforting, spicy soup"
            ]
        },
        {
            name: "Okro Soup",
            emoji: "🥒",
            description: "Slimy soup with okra and seafood",
            tags: ["Healthy", "Traditional"],
            ingredients: ["Okra", "Seafood", "Beef", "Palm oil", "Crayfish"],
            recipe: [
                "Wash and grate or blend okra (don't over-blend to maintain texture)",
                "Season and cook beef and seafood separately until tender",
                "In a pot, heat palm oil and add chopped onions",
                "Add meat and seafood stock, bring to a boil",
                "Add ground crayfish, pepper, and seasoning cubes",
                "Add the cooked beef and seafood",
                "Add the grated okra and stir gently",
                "Cook on low heat for 5-7 minutes (don't overcook to keep okra fresh)",
                "Optionally add sliced vegetables like pumpkin leaves",
                "Serve hot with eba, fufu, or garri"
            ]
        },
        {
            name: "Oha Soup",
            emoji: "🍵",
            description: "Special soup with oha leaves",
            tags: ["Igbo Special", "Aromatic"],
            ingredients: ["Oha leaves", "Cocoyam", "Beef", "Stockfish", "Uziza seeds"],
            recipe: [
                "Peel and boil cocoyam until very soft",
                "Pound cocoyam into a smooth paste for thickening",
                "Season and cook beef and stockfish until tender",
                "Bring meat stock to a boil in a pot",
                "Add small portions of pounded cocoyam, stirring to dissolve and thicken",
                "Add palm oil, ground crayfish, uziza seeds, and pepper",
                "Add the cooked meat and stockfish",
                "Wash oha leaves and add them whole (don't cut with knife)",
                "Simmer for 5-7 minutes until leaves are tender",
                "Serve immediately with your preferred swallow"
            ]
        },
        {
            name: "Catfish Pepper Soup",
            emoji: "🐟",
            description: "Spicy broth with fresh catfish (Point & Kill)",
            tags: ["Spicy", "Evening"],
            ingredients: ["Catfish", "Pepper soup spices", "Scent leaves", "Habanero", "Onions"],
            recipe: [
                "Wash catfish thoroughly with hot water to remove slime",
                "Place in pot with water, onions, and spices",
                "Add ground pepper soup spices and habanero",
                "Cook for 10-15 minutes (fish cooks fast)",
                "Add scent leaves and simmer for 2 minutes",
                "Serve hot"
            ]
        },
        {
            name: "White Soup (Ofe Nsala)",
            emoji: "🥣",
            description: "Rich spicy soup without palm oil",
            tags: ["Eastern", "Delicacy"],
            ingredients: ["Catfish", "Yam (for thickener)", "Utazi leaves", "Uziza seeds", "Crayfish"],
            recipe: [
                "Boil yam cubes until soft and pound into a paste",
                "Cook fish with seasoning until almost done",
                "Add water and dissolve the yam paste to thicken",
                "Add crayfish, pepper, and ground uziza seeds",
                "Add a few bitter (utazi) leaves",
                "Simmer and serve with Pounded Yam"
            ]
        },
        {
            name: "Fisherman's Soup",
            emoji: "🦀",
            description: "Loaded seafood soup from the Niger Delta",
            tags: ["Seafood", "Premium"],
            ingredients: ["Fresh fish", "Crabs", "Prawns", "Periwinkles", "Palm oil"],
            recipe: [
                "Clean all seafood thoroughly",
                "Cook fish and crabs with onions and seasoning",
                "Add palm oil and thickener (cocoyam or garri)",
                "Add prawns and periwinkles",
                "Simmer gently so seafood doesn't break",
                "Serve with starch or eba"
            ]
        },
        {
            name: "Grilled Catfish & Chips",
            emoji: "🍟",
            description: "Oven grilled fish with fried potato chips",
            tags: ["Modern", "Relaxed"],
            ingredients: ["Catfish", "Potatoes", "Foil", "Spices", "Vegetable oil"],
            recipe: [
                "Marinate scored catfish with pepper, ginger, garlic, and oil",
                "Wrap in foil or place on grill rack",
                "Grill for 45 minutes",
                "Peel and fry potato chips until crispy",
                "Serve fish with chips and ketchup/pepper sauce"
            ]
        },
        {
            name: "Goat Meat Stew & Rice",
            emoji: "🍛",
            description: "Tender goat meat in rich tomato stew",
            tags: ["Savory", "Classic"],
            ingredients: ["Goat meat", "Tomatoes", "Rice", "Curry", "Thyme"],
            recipe: [
                "Boil goat meat with strong spices until tender",
                "Fry tomato blend in oil until dry",
                "Add meat stock and fried meat",
                "Simmer until oil seperates",
                "Serve over plain white rice"
            ]
        },
        {
            name: "Vegetable Salad & Chicken",
            emoji: "🥗",
            description: "Light Nigerian salad with creamy dressing",
            tags: ["Light", "Healthy"],
            ingredients: ["Cabbage", "Carrots", "Lettuce", "Baked beans", "Chicken"],
            recipe: [
                "Shred cabbage and grate carrots",
                "Mix with lettuce, cucumber, and sweet corn",
                "Add a spoonful of baked beans and cream (Heinz)",
                "Serve with a piece of grilled or fried chicken"
            ]
        },
        {
            name: "Isi Ewu",
            emoji: "🐐",
            description: "Spiced goat head delicacy in palm oil sauce",
            tags: ["Specialty", "Spicy"],
            ingredients: ["Goat head", "Palm oil", "Potash", "Utazi leaves", "Ehu seeds"],
            recipe: [
                "Cut goat head into chunks and cook until tender",
                "Mix palm oil and dissolved potash to form a yellow paste (Ncha)",
                "Add pepper, ehu seeds, and crayfish to the paste",
                "Stir the cooked meat into the paste",
                "Garnish with onion rings and utazi leaves",
                "Serve in a wooden mortar"
            ]
        },
        {
            name: "Black Soup",
            emoji: "🍵",
            description: "Edo state herbal soup",
            tags: ["Medicinal", "Traditional"],
            ingredients: ["Bitter leaf", "Scent leaf", "Uziza leaf", "Palm nut extract", "Meat"],
            recipe: [
                "Blend all leaves separately until smooth",
                "Cook meat and fish until tender",
                "Add palm nut extract to the meat stock",
                "Add the blended leaves starting with bitter leaf",
                "Simmer until soup turns dark",
                "Serve with Pounded Yam or Semo"
            ]
        },
        {
            name: "Native Soup",
            emoji: "🥣",
            description: "Rivers State rich seafood soup",
            tags: ["Rivers", "Seafood"],
            ingredients: ["Fresh Fish", "Periwinkles", "Ngolo (Whelks)", "Ofor (Thickener)", "Uziza"],
            recipe: [
                "Clean fresh fish and seafood (ngolo, periwinkles)",
                "Boil with onions and seasoning",
                "Add palm oil and thickener (ofor or achi)",
                "Add uziza leaves and bitter leaf",
                "Simmer until thickened",
                "Serve with starch or eba"
            ]
        },
        {
            name: "Afang Soup",
            emoji: "🌿",
            description: "Famous vegetable soup from Calabar/Akwa Ibom",
            tags: ["Calabar", "Vegetable"],
            ingredients: ["Afang Leaves (Okazi)", "Waterleaves", "Beef", "Kanda", "Periwinkles"],
            recipe: [
                "Grind/pound Afang leaves until smooth",
                "Cook beef, stockfish, and kanda until soft",
                "Add palm oil, crayfish, and pepper",
                "Add sliced waterleaves and cook for 2 minutes",
                "Add the ground Afang leaves and periwinkles",
                "Simmer for 5 minutes and serve"
            ]
        },
        {
            name: "Edikang Ikong",
            emoji: "🥦",
            description: "Vegetable soup of the Efik people",
            tags: ["Calabar", "Nutritious"],
            ingredients: ["Pumpkin Leaves (Ugu)", "Waterleaves", "Beef", "Dried Fish", "Periwinkles"],
            recipe: [
                "Cook meat and fish with very little water (soup should not be watery)",
                "Add plenty of palm oil, crayfish, and pepper",
                "Add sliced waterleaves and cook until wilted",
                "Add sliced Ugu leaves and periwinkles",
                "Stir and turn off heat almost immediately to keep veggies fresh",
                "Serve with Fufu or Pounded Yam"
            ]
        },
        {
            name: "Ofe Akwu (Banga Stew)",
            emoji: "🥘",
            description: "Igbo style palm nut stew served with white rice",
            tags: ["Imo", "Sunday Special"],
            ingredients: ["Palm fruit extract", "Scent leaves", "Dried Fish", "Crayfish", "Meat"],
            recipe: [
                "Boil palm nut extract until it thickens",
                "Add cooked meat stock, dried fish, and crayfish",
                "Add ogiri (locust bean paste) for traditional flavor",
                "Add chopped scent leaves (nchanwu)",
                "Simmer until oil floats on top",
                "Serve with white rice (unlike Delta Banga for starch)"
            ]
        }
    ]
};

const nigerianCocktails = [
    {
        name: "Chapman",
        emoji: "🍹",
        description: "A refreshing Nigerian mocktail with Fanta, Sprite, grenadine, Angostura bitters, and fresh fruits",
        meta: ["Chilled", "Sweet"],
        recipe: [
            "In a large jug, mix equal parts Fanta and Sprite (about 350ml each)",
            "Add a splash of Grenadine syrup (about 2-3 tablespoons) for the red color",
            "Add 5-10 dashes of Angostura Bitters (this gives the unique Chapman taste)",
            "Squeeze in juice from half a lemon and half a lime",
            "Cut cucumber and remaining citrus into slices and add to the jug",
            "Refrigerate for at least 1 hour to let flavors meld",
            "Serve in large mugs with plenty of ice cubes",
            "Garnish with a slice of cucumber and lemon on the rim"
        ]
    },
    {
        name: "Zobo Mojito",
        emoji: "🍷",
        description: "Traditional hibiscus drink infused with mint, lime, and a splash of rum for a tropical twist",
        meta: ["Herbal", "Refreshing"],
        recipe: [
            "Wash zobo (hibiscus) leaves and boil with ginger, cloves, and pineapple peel for 20 mins",
            "Strain the liquid and let it cool completely, sweeten with sugar or honey if desired",
            "In a sturdy glass, muddle (crush) fresh mint leaves with lime wedges and sugar",
            "Fill the glass with crushed ice",
            "Pour the cooled zobo drink over the ice",
            "Add a shot of white rum (optional, omit for virgin version)",
            "Top with a splash of soda water for fizz",
            "Garnish with a sprig of mint and a lime wheel"
        ]
    },
    {
        name: "Palm Wine Cocktail",
        emoji: "🥥",
        description: "Fresh palm wine mixed with pineapple juice and coconut water for a tropical experience",
        meta: ["Traditional", "Tropical"],
        recipe: [
            "Ensure you have fresh Palm Wine (preferably sourced same day)",
            "Mix 2 parts Palm Wine with 1 part fresh pineapple juice",
            "Add a splash of coconut water to smooth out the taste",
            "Shake well with ice to chill thoroughly",
            "Strain into a glass filled with fresh ice",
            "Add a dash of nutmeg on top for aroma",
            "Garnish with a wedge of pineapple",
            "Serve immediately as palm wine ferments quickly"
        ]
    },
    {
        name: "Kunu Colada",
        emoji: "🥛",
        description: "Nigerian millet drink blended with coconut cream and pineapple for a creamy delight",
        meta: ["Creamy", "Exotic"],
        recipe: [
            "Prepare or buy fresh Kunu Aya (Tiger nut milk) or Kunu Zaki (Millet drink)",
            "In a blender, combine 1 cup Kunu with 1/2 cup pineapple chunks",
            "Add 1/4 cup coconut cream or milk",
            "Add a handful of ice cubes",
            "Blend until smooth and frothy",
            "Taste and add honey if extra sweetness is needed",
            "Pour into a tall glass",
            "Garnish with a pineapple leaf or cherry"
        ]
    },
    {
        name: "Sobo Sangria",
        emoji: "🍇",
        description: "Hibiscus tea infused with red wine, fresh berries, and citrus fruits",
        meta: ["Fruity", "Sophisticated"],
        recipe: [
            "Brew a strong concentrate of Zobo (hibiscus) tea with spices",
            "In a large pitcher, combine 2 cups cooled Zobo with 1 bottle of red wine",
            "Add 1/2 cup orange juice and 1/4 cup brandy (optional)",
            "Slice oranges, lemons, and apples into thin rounds/pieces",
            "Add the fruits to the pitcher along with some berries",
            "Refrigerate for at least 4 hours (or overnight) to let fruits infuse",
            "Serve cold over ice, ensuring fruit pieces get into every glass"
        ]
    },
    {
        name: "Ginger Beer Punch",
        emoji: "🫚",
        description: "Spicy homemade ginger beer with lime, honey, and a hint of rum",
        meta: ["Spicy", "Zesty"],
        recipe: [
            "Blend fresh ginger root with water and strain to get potent ginger juice",
            "Mix the ginger juice with fresh lime juice, water, and honey to taste",
            "This forms your base ginger beer (add yeast/sugar and ferment for 2 days for carbonation, or use soda water)",
            "Steps for Punch: In a glass, pour 1 part dark rum (optional) over ice",
            "Top with your homemade ginger beer/juice",
            "Add a splash of Angostura bitters",
            "Stir gently to combine",
            "Garnish with a lime wedge and a slice of fresh ginger"
        ]
    },
    {
        name: "Tiger Nut Smoothie",
        emoji: "🥤",
        description: "Creamy tiger nut milk blended with dates, vanilla, and ice",
        meta: ["Nutritious", "Smooth"],
        recipe: [
            "Soak dried tiger nuts (ofio) in water for 24-48 hours inside the fridge",
            "Wash soak dates and remove the seeds",
            "Blend tiger nuts and dates with minimal water until very smooth",
            "Strain using a nut milk bag or cheesecloth to extract the milk",
            "Return milk to blender, add a drop of vanilla extract and a banana (optional for thickness)",
            "Add plenty of ice and blend again until frothy",
            "Pour into a glass and serve immediately while cold",
            "Sprinkle crushed nuts on top for texture"
        ]
    },
    {
        name: "Pineapple & Ginger Fizz",
        emoji: "🍍",
        description: "Fresh pineapple juice with ginger syrup and sparkling water",
        meta: ["Fizzy", "Tangy"],
        recipe: [
            "Peel and juice a ripe pineapple",
            "Make ginger syrup by boiling equal parts sugar and water with sliced ginger, then cool",
            "Fill a tall glass with ice cubes",
            "Pour in pineapple juice until glass is half full",
            "Add 2 tablespoons of ginger syrup",
            "Top up delicately with sparkling water or club soda",
            "Stir gently with a long spoon to mix without losing fizz",
            "Garnish with a pineapple wedge and mint leaf"
        ]
    },
    {
        name: "Lagos Island Iced Tea",
        emoji: "🍹",
        description: "A potent mix of spirits with a splash of cola",
        meta: ["Strong", "Party"],
        recipe: [
            "Mix equal parts vodka, gin, tequila, rum, and triple sec",
            "Pour over ice in a tall glass",
            "Add sweet and sour mix",
            "Top with a splash of cola for color",
            "Garnish with a lemon slice"
        ]
    },
    {
        name: "Orijin Bitters Cocktail",
        emoji: "🌿",
        description: "Herbal bitters mixed with sweet cranberry juice",
        meta: ["Herbal", "Bittersweet"],
        recipe: [
            "Pour 1 shot of Orijin Bitters over ice",
            "Top with cranberry juice",
            "Add a squeeze of orange",
            "Stir well",
            "Serve distinctively herbal"
        ]
    },
    {
        name: "Cucumber & Mint Cooler",
        emoji: "🥒",
        description: "Hydrating non-alcoholic cooler",
        meta: ["Fresh", "Detox"],
        recipe: [
            "Blend cucumber with a little water and strain",
            "Muddle fresh mint leaves in a glass",
            "Pour in cucumber juice and lime juice",
            "Sweeten with syrup/sugar",
            "Top with soda water"
        ]
    },
    {
        name: "Watermelon & Ginger Juice",
        emoji: "🍉",
        description: "Sweet watermelon with a spicy ginger kick",
        meta: ["Natural", "Revitalizing"],
        recipe: [
            "Blend fresh watermelon chunks with peeled ginger",
            "Strain to remove pulp",
            "Serve chilled over ice",
            "Excellent for hot afternoons"
        ]
    },
    {
        name: "Malt & Milk",
        emoji: "🥛",
        description: "Rich creamy mix of malt drink and evaporated milk",
        meta: ["Rich", "Energy"],
        recipe: [
            "Pour chilled Malt drink (Malta Guinness/Amstel) into a glass",
            "Add Peak milk (evaporated) generously",
            "Stir to combine the creaminess",
            "Serve cold - popularly used for energy"
        ]
    },
    {
        name: "Agbalumo Drink",
        emoji: "🟠",
        description: "Tangy African Star Apple juice",
        meta: ["Seasonal", "Tangy"],
        recipe: [
            "Remove flesh from Agbalumo seeds",
            "Blend flesh with water and sugar",
            "Strain well to remove fibers",
            "Serve over ice with a dash of ginger"
        ]
    },
    {
        name: "Guava Spice",
        emoji: "🍹",
        description: "Tropical guava nectar with cinnamon",
        meta: ["Tropical", "Sweet"],
        recipe: [
            "Use fresh guava juice or nectar",
            "Add a pinch of cinnamon and nutmeg",
            "Shake with ice",
            "Serve with a cinnamon stick garnish"
        ]
    },
    {
        name: "Sugarcane Juice",
        emoji: "🎋",
        description: "Pure extracted sugarcane water with lime",
        meta: ["Natural", "Sweet"],
        recipe: [
            "Extract juice from sugarcane (using machine or chewing method! - preferably juiced)",
            "Add a squeeze of lime to cut the sweetness",
            "Add ginger juice for heat",
            "Serve extremely cold"
        ]
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
    checkMonetization();
    generateBtn.addEventListener('click', generateMealPlan);
    refreshBtn.addEventListener('click', generateMealPlan);
    copyListBtn.addEventListener('click', copyShoppingList);

    // Email form listener
    const emailForm = document.getElementById('emailForm');
    if (emailForm) {
        emailForm.addEventListener('submit', handleTrialStart);
    }

    // Reset Trial listener (for testing)
    const resetBtn = document.getElementById('resetTrialBtn');
    if (resetBtn) {
        resetBtn.addEventListener('click', () => {
            localStorage.removeItem('userEmail');
            localStorage.removeItem('trialStartDate');
            location.reload();
        });
    }
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
        updateRecipe('breakfast', breakfast.recipe);

        // Update lunch
        document.getElementById('lunchImage').querySelector('.dish-emoji').textContent = lunch.emoji;
        document.getElementById('lunchName').textContent = lunch.name;
        document.getElementById('lunchDescription').textContent = lunch.description;
        updateTags('lunchTags', lunch.tags);
        updateIngredients('lunchIngredients', lunch.ingredients);
        updateRecipe('lunch', lunch.recipe);
        document.getElementById('lunchCocktail').textContent = lunchCocktail.name;
        document.getElementById('lunchCocktailDetail').textContent = lunchCocktail.name;
        document.getElementById('lunchCocktailDesc').textContent = lunchCocktail.description;

        // Update dinner
        document.getElementById('dinnerImage').querySelector('.dish-emoji').textContent = dinner.emoji;
        document.getElementById('dinnerName').textContent = dinner.name;
        document.getElementById('dinnerDescription').textContent = dinner.description;
        updateTags('dinnerTags', dinner.tags);
        updateIngredients('dinnerIngredients', dinner.ingredients);
        updateRecipe('dinner', dinner.recipe);
        document.getElementById('dinnerCocktail').textContent = dinnerCocktail.name;
        document.getElementById('dinnerCocktailDetail').textContent = dinnerCocktail.name;
        document.getElementById('dinnerCocktailDesc').textContent = dinnerCocktail.description;

        // Update cocktail emojis and meta
        const lunchCocktailCard = document.querySelector('.cocktail-card:first-child');
        lunchCocktailCard.querySelector('.cocktail-emoji').textContent = lunchCocktail.emoji;
        updateCocktailMeta(lunchCocktailCard, lunchCocktail.meta, 'Lunch');
        updateRecipe('lunchCocktail', lunchCocktail.recipe);

        const dinnerCocktailCard = document.querySelector('.cocktail-card:last-child');
        dinnerCocktailCard.querySelector('.cocktail-emoji').textContent = dinnerCocktail.emoji;
        updateCocktailMeta(dinnerCocktailCard, dinnerCocktail.meta, 'Dinner');
        updateRecipe('dinnerCocktail', dinnerCocktail.recipe);

        // Hide all recipe sections and reset buttons when generating new menu
        ['breakfast', 'lunch', 'dinner', 'lunchCocktail', 'dinnerCocktail'].forEach(id => {
            const recipeSection = document.getElementById(`${id}Recipe`);
            if (recipeSection) {
                recipeSection.style.display = 'none';
            }

            // Handle buttons
            let button;
            if (id.includes('Cocktail')) {
                // For cocktails, the button is inside the cocktail-card which is inside cocktails-grid
                // We can find the button using the cocktail card directly
                if (id === 'lunchCocktail') {
                    button = document.querySelector('.cocktail-card:first-child .view-recipe-btn');
                } else if (id === 'dinnerCocktail') {
                    button = document.querySelector('.cocktail-card:last-child .view-recipe-btn');
                }
                if (button) {
                    button.innerHTML = '<span class="recipe-icon">📖</span><span>View Preparation</span>';
                }
            } else {
                button = document.querySelector(`.${id}-card .view-recipe-btn`);
                if (button) {
                    button.innerHTML = '<span class="recipe-icon">📖</span><span>View Recipe</span>';
                }
            }
        });

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
J QUALITY NIGERIAN MEAL PLANNER - SHOPPING LIST
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

// Update recipe steps
function updateRecipe(mealType, recipe) {
    const recipeStepsContainer = document.getElementById(`${mealType}RecipeSteps`);
    if (recipeStepsContainer) {
        recipeStepsContainer.innerHTML = recipe.map(step => `<li>${step}</li>`).join('');
    }
}

// Toggle recipe visibility
function toggleRecipe(mealType, btn) {
    const recipeSection = document.getElementById(`${mealType}Recipe`);

    // Fallback if btn is not passed (from older onclicks)
    if (!btn) {
        btn = event.target.closest('.view-recipe-btn');
    }

    if (!recipeSection || !btn) return;

    const isCocktail = mealType.includes('Cocktail');
    const viewText = isCocktail ? 'View Preparation' : 'View Recipe';
    const hideText = isCocktail ? 'Hide Preparation' : 'Hide Recipe';

    if (recipeSection.style.display === 'none') {
        recipeSection.style.display = 'block';
        btn.innerHTML = `<span class="recipe-icon">📖</span><span>${hideText}</span>`;
        // Smooth scroll to recipe
        setTimeout(() => {
            recipeSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 100);
    } else {
        recipeSection.style.display = 'none';
        btn.innerHTML = `<span class="recipe-icon">📖</span><span>${viewText}</span>`;
    }
}

// Valid Subscription Codes (You can add more here)
const VALID_CODES = ['MEAL30', 'JQUALITY2024', 'SUB-JUNE'];

// Check Monetization Status
function checkMonetization() {
    const userEmail = localStorage.getItem('userEmail');
    const trialStartDate = localStorage.getItem('trialStartDate');
    const subscriptionEndDate = localStorage.getItem('subscriptionEndDate');

    // UI Elements
    const overlay = document.getElementById('monetizationOverlay');
    const expiredState = document.getElementById('expiredState');
    const emailForm = document.getElementById('emailForm');
    const secureNote = document.getElementById('secureNote');
    const trialTitle = document.querySelector('.monetization-card h2');
    const trialBadge = document.querySelector('.trial-badge');
    const trialText = document.querySelector('.trial-text');

    if (!userEmail || !trialStartDate) {
        // No email or start date => New User => Show Signup
        overlay.classList.add('active');
        document.body.classList.add('locked');
        return;
    }

    // Check Subscription Status first
    if (subscriptionEndDate) {
        const endDate = new Date(subscriptionEndDate);
        const now = new Date();
        if (now < endDate) {
            // Subscription Active! Unlock everything.
            overlay.classList.remove('active');
            document.body.classList.remove('locked');
            return;
        }
    }

    // If no active subscription, check Trial Status
    const startDate = new Date(trialStartDate);
    const currentDate = new Date();
    const timeDiff = currentDate - startDate;
    const daysDiff = timeDiff / (1000 * 3600 * 24); // Convert ms to days

    if (daysDiff > 14) {
        // Trial expired AND No active subscription
        overlay.classList.add('active');
        document.body.classList.add('locked');

        // Update UI for expired state
        expiredState.style.display = 'block';
        emailForm.style.display = 'none';
        secureNote.style.display = 'none';
        trialTitle.textContent = "Your Free Trial Has Ended";
        trialBadge.textContent = "Subscription Required";
        trialBadge.style.background = "#e74c3c"; // Red for urgency
        trialBadge.style.color = "white";
        trialText.textContent = "Continue enjoying daily Nigerian meal plans for just £5/month.";

        // Setup Passcode Listener if not already set
        const verifyBtn = document.getElementById('verifyCodeBtn');
        if (verifyBtn) {
            // Remove old listeners to avoid duplicates (naive approach)
            const newBtn = verifyBtn.cloneNode(true);
            verifyBtn.parentNode.replaceChild(newBtn, verifyBtn);
            newBtn.addEventListener('click', verifyPasscode);
        }

    } else {
        // Trial active
        overlay.classList.remove('active');
        document.body.classList.remove('locked');
    }
}

// Verify Passcode Logic
function verifyPasscode() {
    const input = document.getElementById('passcodeInput');
    const code = input.value.trim().toUpperCase();

    if (VALID_CODES.includes(code)) {
        // Calculate new end date (Now + 30 days)
        const newEndDate = new Date();
        newEndDate.setDate(newEndDate.getDate() + 30);

        localStorage.setItem('subscriptionEndDate', newEndDate.toISOString());

        alert(`Success! Application unlocked until ${newEndDate.toLocaleDateString()}`);
        checkMonetization(); // Re-check to unlock
    } else {
        alert('Invalid Activation Code. Please try again.');
    }
}

// Handle Trial Start
function handleTrialStart(e) {
    e.preventDefault();
    const emailInput = document.getElementById('userEmail');
    const form = document.getElementById('emailForm');
    const email = emailInput.value.trim();
    const btn = form.querySelector('button');

    if (email && email.includes('@')) {
        // Show loading state
        const originalText = btn.textContent;
        btn.textContent = 'Activating...';
        btn.disabled = true;

        // Send to Formspree
        fetch(form.action, {
            method: form.method,
            body: new FormData(form),
            headers: {
                'Accept': 'application/json'
            }
        }).then(response => {
            if (response.ok) {
                // Success
                localStorage.setItem('userEmail', email);
                localStorage.setItem('trialStartDate', new Date().toISOString());

                // Show success and unlock
                alert('Trial activated successfully! Welcome to J Quality Nigerian Meal Planner.');
                checkMonetization();
            } else {
                // Error from Formspree
                response.json().then(data => {
                    if (Object.hasOwn(data, 'errors')) {
                        alert(data["errors"].map(error => error["message"]).join(", "));
                    } else {
                        alert('Oops! There was a problem submitting your form');
                    }
                });
            }
        }).catch(error => {
            alert('Oops! There was a problem submitting your form');
        }).finally(() => {
            // Reset button
            btn.textContent = originalText;
            btn.disabled = false;
        });
    } else {
        alert('Please enter a valid email address.');
    }
}

// Initialize app
init();
