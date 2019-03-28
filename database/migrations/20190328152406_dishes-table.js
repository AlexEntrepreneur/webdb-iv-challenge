exports.up = function(knex, Promise) {
  return knex.schema.createTable('dishes', function(tableColumn) {
    tableColumn.increments('dish_id');

    tableColumn
      .string('dish_name', 512)
      .unique("uq_dish_name")
      .notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('dishes');
};
