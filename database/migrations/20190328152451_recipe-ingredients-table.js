exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipe_ingredients', function(tableColumn) {
    tableColumn.increments('recipe_ingredients_id');
    tableColumn
      .integer('recipe_id')
      .references('recipe_id')
      .inTable('recipes')
      .onDelete('CASCADE')
      .onUpdate('CASCADE')
      .notNullable();

    tableColumn
      .integer('ingredient_id')
      .references('ingredient_id')
      .inTable('ingredients')
      .notNullable()
      .onDelete('CASCADE')
      .onUpdate('CASCADE');

    tableColumn
      .float('quantity');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipe_ingredients');
};
