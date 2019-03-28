exports.up = function(knex, Promise) {
  return knex.schema.createTable('recipes', function(tableColumn)  {
    tableColumn.increments('recipe_id');

    tableColumn
      .string('recipe_name', 512)
      .notNull();

    tableColumn
      .integer('dish_id')
      .references('dish_id')
      .inTable('dishes')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');

    tableColumn
      .text('instructions');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('recipes');
};
