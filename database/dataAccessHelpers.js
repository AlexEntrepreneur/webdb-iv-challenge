const knex = require('knex');
const knexConfig = require('../knexfile.js');
const db = knex(knexConfig.development);
const Dishes = db('dishes');
const Recipes = db('recipes');
const RecipeIngredients = db('recipe_ingredients');
const Ingredients = db('ingredients');

module.exports = {
  getDishes: () => {
    return Dishes;
  },

  getDish: (id) => {
    return Dishes
      .innerJoin('recipes', 'dishes.dish_id', 'recipes.dish_id')
      .where('dishes.dish_id', 2)
      .then(data => {
        // Reformatting the data so that it returns a single "dish" object containg an array of "recipes"
        const { dish_id, dish_name } = data[0];
        let newDishObject = { dish_id, dish_name };

        newDishObject['recipes'] = [];

        for (let i = 0; i < data.length; i++) {
          const { recipe_id, recipe_name, instructions } = data[i];
          const relatedRecipeObject = { recipe_id, recipe_name, instructions };
          newDishObject['recipes'].push(relatedRecipeObject);
        }

        // Return the new object to the next chained .then()
        return newDishObject;
      });
  },

  getRecipes: () => {
    return Recipes
      .innerJoin('dishes', 'dishes.dish_id', 'recipes.dish_id')
      .then(data => {
        // Reformatting the data so that each recipe contains a dish object with the dish id + dish name
        for (let i = 0; i < data.length; i++) {
          const { dish_id, dish_name } = data[i];
          const relatedDishObject = { dish_id, dish_name };

          // Remove dish keys from recipe object body
          ['dish_id', 'dish_name'].forEach(key => delete data[i][key]);


          // Add dish keys to "dish" object
          data[i]['dish'] = relatedDishObject;
        }

        return data;
      })
  },

  addDish: (dish) => {
    return Dishes.insert(dish);
  },

  addRecipe: (recipe) => {
    return Recipes.insert(recipe);
  }
}
