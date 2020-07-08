const knex = require('knex');
const knexConfigs = require('../knexfile');
const db = knex(knexConfigs.development);

const table = 'products';

module.exports = {

  get: () => db(table)
    .select('*'),

  getById: (id) => db(table)
    .where('id', id).select('*'),

  getByPrices: (lower, upper) => db(table)
    .whereBetween('price', [lower, upper]).select('*'),

  insert: (product) => db(table)
    .insert(product),

  delete: (product) => db(table)
    .where('id', product.id).del(),

  update: (product) => db(table)
    .where('id', product.id)
    .update({ name: product.name, description: product.description, price: product.price })

}
