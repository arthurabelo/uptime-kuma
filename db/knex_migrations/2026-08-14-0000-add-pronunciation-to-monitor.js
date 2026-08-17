exports.up = function (knex) {
    return knex.schema.table("monitor", function (table) {
        table.string("pronunciation", 255).nullable();
    });
};

exports.down = function (knex) {
    return knex.schema.table("monitor", function (table) {
        table.dropColumn("pronunciation");
    });
};
