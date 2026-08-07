exports.up = async function (knex) {
    const hasAudibleAlertMode = await knex.schema.hasColumn("status_page", "audible_alert_mode");

    return knex.schema.alterTable("status_page", function (table) {
        if (!hasAudibleAlertMode) {
            table.string("audible_alert_mode").notNullable().defaultTo("oscillator");
        }
    });
};

exports.down = async function (knex) {
    const hasAudibleAlertMode = await knex.schema.hasColumn("status_page", "audible_alert_mode");

    return knex.schema.alterTable("status_page", function (table) {
        if (hasAudibleAlertMode) {
            table.dropColumn("audible_alert_mode");
        }
    });
};
