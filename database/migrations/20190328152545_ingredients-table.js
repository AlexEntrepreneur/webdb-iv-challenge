exports.up = function(knex, Promise) {
  return knex.schema.createTable('ingredients', function(tableColumn) {
    tableColumn.increments('ingredient_id');
    tableColumn
      .string('ingredient_name')
      .unique('uq_ingredient_name')
      .notNullable();
  })
};

exports.down = function(knex, Promise) {
return knex.schema.dropTableIfExists('ingredients');
};
