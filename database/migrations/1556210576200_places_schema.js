'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PlacesSchema extends Schema {
  up () {
    this.create('places', (table) => {
      table.increments()
      table.string('image', 255)
      table.string('name', 150)
      table.string('address', 255)
      table.string('latitude', 255)
      table.string('longitude', 255)
      table.integer('rating')
      table.timestamps()
    })
  }

  down () {
    this.drop('places')
  }
}

module.exports = PlacesSchema
