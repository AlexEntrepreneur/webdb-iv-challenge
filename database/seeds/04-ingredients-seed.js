
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {
          ingredient_id: 1,
          ingredient_name: "Chicken Breast"
        },
        {
          ingredient_id: 2,
          ingredient_name: "BBQ Sauce"
        },
        {
          ingredient_id: 3,
          ingredient_name: "Eggs"
        },
        {
          ingredient_id: 4,
          ingredient_name: "Chocolate Sprinkles"
        },
        {
          ingredient_id: 5,
          ingredient_name: "Flour"
        },
        {
          ingredient_id: 6,
          ingredient_name: "Tagliatelle"
        },
        {
          ingredient_id: 7,
          ingredient_name: "Organic Carrot"
        },
        {
          ingredient_id: 8,
          ingredient_name: "Organic Potato"
        },
        {
          ingredient_id: 9,
          ingredient_name: "Organic Lettuce"
        },
        {
          ingredient_id: 10,
          ingredient_name: "Mozzarella Cheese"
        },
        {
          ingredient_id: 11,
          ingredient_name: "Basil"
        }
      ]);
    });
};
