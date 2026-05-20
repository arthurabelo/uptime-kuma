exports.up = function(knex) {
    return knex.schema.table('status_page', function(table) {
        table.boolean('enable_audible_alerts').defaultTo(1);
    });
};

exports.down = function(knex) {
    return knex.schema.table('status_page', function(table) {
        table.dropColumn('enable_audible_alerts');
    });
};
