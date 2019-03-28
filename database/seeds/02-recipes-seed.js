
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {
          recipe_id: 1,
          dish_id: 1,
          recipe_name: 'Red Velvet Cake',
          instructions: "..."
        },
        {
          recipe_id: 2,
          dish_id: 1,
          recipe_name: 'Chocolate Sprinkles Cake',
          instructions: "..."
        },
        {
          recipe_id: 3,
          dish_id: 3,
          recipe_name: 'Mozzarella Basil Pasta',
          instructions: "..."
        },
        {
          recipe_id: 4,
          dish_id: 3,
          recipe_name: 'BBQ Chicken Pasta',
          instructions: "..."
        },
        {
          recipe_id: 5,
          dish_id: 2,
          recipe_name: 'Potato Salad',
          instructions: "..."
        },
        {
          recipe_id: 6,
          dish_id: 2,
          recipe_name: 'Spicy Carrot Salad',
          instructions: "..."
        },
        {
          recipe_id: 7,
          dish_id: 2,
          recipe_name: 'Vietnamese Chicken Salad',
          instructions: "..."
        },
      ]);
    });
};
