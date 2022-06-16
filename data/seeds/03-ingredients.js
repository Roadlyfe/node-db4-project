exports.seed = function(knex, Promise) {
    return knex('ingredients').insert([
        {ingredient_name: "Cereal", quantity:1 },
        {ingredient_name: "Milk", quantity:2 },
        {ingredient_name: "Bread", quantity:2 },
        {ingredient_name: "Butter", quantity:1 },
    ])
}