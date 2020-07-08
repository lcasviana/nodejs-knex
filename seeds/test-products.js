exports.seed = (knex, promise) => {
  return knex('products').del().then(() => {
    return knex('products').insert([
      { id: 1, name: 'iPhone X', description: 'Amazing cellphone', price: 999.00 },
      { id: 2, name: 'Smartwatch', description: 'Amazing smartwatch', price: 349.00 },
      { id: 3, name: 'S10 Plus', description: 'Better than iPhone', price: 800.00 }
    ]);
  });
};
