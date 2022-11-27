exports.up = (knex) => {
  return knex.schema.createTable('subscription', (table) => {
    table.increments('id').primary()
    table.integer('garden_id').references('gardens.id')
    table.string('email')
    table.string('first_name')
    table.string('last_name')
  })
}

exports.down = (knex) => {
  return knex.schema.dropColumns('subscription')
}
