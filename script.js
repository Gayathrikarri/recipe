document.addEventListener('DOMContentLoaded', function () {
    // Sample recipes
    const recipes = [
        {
            name: "Spaghetti Bolognese",
            ingredients: ["500g ground beef", "1 onion", "2 cloves garlic", "1 can tomatoes", "250g spaghetti"],
            steps: ["Brown beef in a pan", "Saute chopped onion and garlic", "Add tomatoes and simmer", "Cook spaghetti", "Serve sauce over cooked spaghetti"]
        },
        {
            name: "Chicken Stir-Fry",
            ingredients: ["500g chicken breast", "1 bell pepper", "1 broccoli", "3 tbsp soy sauce", "2 tbsp oil"],
            steps: ["Slice chicken and vegetables", "Stir-fry chicken in oil", "Add vegetables and soy sauce", "Cook until vegetables are tender"]
        },
        {
            name: "Vegetarian Pizza",
            ingredients: ["Pizza dough", "1 cup tomato sauce", "1 bell pepper", "1 onion", "1 cup mushrooms", "1 cup mozzarella cheese"],
            steps: ["Roll out pizza dough", "Spread tomato sauce over the dough", "Top with sliced vegetables and cheese", "Bake in the oven until crust is golden"]
        },
        {
            name: "Chocolate Chip Cookies",
            ingredients: ["2 1/4 cups all-purpose flour", "1/2 teaspoon baking soda", "1 cup unsalted butter", "1/2 cup granulated sugar", "1 cup brown sugar", "2 teaspoons vanilla extract", "2 cups chocolate chips"],
            steps: ["Preheat oven to 350°F", "Cream together butter and sugars", "Add eggs and vanilla", "Mix in dry ingredients", "Fold in chocolate chips", "Drop tablespoons of dough onto baking sheets", "Bake for 10-12 minutes"]
        },
        {
            name: "Grilled Salmon",
            ingredients: ["4 salmon fillets", "2 tbsp olive oil", "1 lemon", "Salt and pepper to taste"],
            steps: ["Preheat grill to medium-high heat", "Rub salmon fillets with olive oil", "Season with salt and pepper", "Grill for 4-5 minutes per side", "Squeeze lemon juice over before serving"]
        },
        {
            name: "Caprese Salad",
            ingredients: ["Tomatoes", "Fresh mozzarella", "Basil leaves", "Balsamic glaze", "Salt and pepper to taste"],
            steps: ["Slice tomatoes and mozzarella", "Arrange on a plate with basil leaves", "Drizzle balsamic glaze", "Season with salt and pepper"]
        }
    ];

    // Display sample recipes
    recipes.forEach(recipe => {
        displayRecipe(recipe, 'recipe-list');
    });
});

function displayRecipe(recipe, containerId) {
    const recipeContainer = document.getElementById(containerId);
    const recipeCard = document.createElement('div');
    recipeCard.classList.add('col-md-4', 'recipe');
    recipeCard.innerHTML = `
        <div class="card">
            <img src="https://bing.com/th?id=OSK.b3160d9166cf66aed380d088e38755ce" class="card-img-top" alt="Recipe Image">
            <div class="card-body">
                <h5 class="card-title">${recipe.name}</h5>
                <p class="card-text"><strong>Ingredients:</strong> ${recipe.ingredients.join(', ')}</p>
                <p class="card-text"><strong>Steps:</strong> ${recipe.steps.join(', ')}</p>
            </div>
        </div>
    `;
    recipeContainer.appendChild(recipeCard);
}
