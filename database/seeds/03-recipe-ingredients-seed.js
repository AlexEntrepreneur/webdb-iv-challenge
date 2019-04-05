
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe_ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe_ingredients').insert([
        {
          recipe_ingredients_id: 1,
          recipe_id: 1,
          ingredient_id: 5,
          quantity: 800
        },
        {
          recipe_ingredients_id: 2,
          recipe_id: 1,
          ingredient_id: 3,
          quantity: 5
        },
        {
          recipe_ingredients_id: 3,
          recipe_id: 2,
          ingredient_id: 5,
          quantity: 950
        },
        {
          recipe_ingredients_id: 4,
          recipe_id: 2,
          ingredient_id: 4,
          quantity: 6
        },
        {
          recipe_ingredients_id: 5,
          recipe_id: 3,
          ingredient_id: 10,
          quantity: 300
        },
        {
          recipe_ingredients_id: 6,
          recipe_id: 3,
          ingredient_id: 11,
          quantity: 1.321
        },
        {
          recipe_ingredients_id: 7,
          recipe_id: 3,
          ingredient_id: 6,
          quantity: 300
        },
        {
          recipe_ingredients_id: 8,
          recipe_id: 4,
          ingredient_id: 6,
          quantity: 342
        },
        {
          recipe_ingredients_id: 9,
          recipe_id: 4,
          ingredient_id: 1,
          quantity: 260
        },
        {
          recipe_ingredients_id: 10,
          recipe_id: 4,
          ingredient_id: 2,
          quantity: 3
        },
        {
          recipe_ingredients_id: 11,
          recipe_id: 5,
          ingredient_id: 8,
          quantity: 1
        },
        {
          recipe_ingredients_id: 12,
          recipe_id: 5,
          ingredient_id: 9,
          quantity: 150
        },
        {
          recipe_ingredients_id: 13,
          recipe_id: 6,
          ingredient_id: 7,
          quantity: 1.543
        },
        {
          recipe_ingredients_id: 14,
          recipe_id: 6,
          ingredient_id: 9,
          quantity: 143
        },
        {
          recipe_ingredients_id: 15,
          recipe_id: 7,
          ingredient_id: 1,
          quantity: 200
        },
        {
          recipe_ingredients_id: 16,
          recipe_id: 7,
          ingredient_id: 9,
          quantity: 163
        },
      ]);
    });
};
