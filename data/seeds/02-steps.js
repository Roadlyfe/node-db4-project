
exports.seed = function(knex, Promise) {
return knex('steps').insert([
    {recipe_name: "Cereal", step_number: 1, step_instructions: "Pour cereal in bowl"},
    {recipe_name: "Cereal", step_number: 2, step_instructions: "Add milk to bowl"},
    {recipe_name: "butter sandwhich", step_number: 1, step_instructions: "get bread"},
    {recipe_name: "butter sandwhich", step_number: 2, step_instructions: "butter bread"},
])
}