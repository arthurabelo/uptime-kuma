exports.up = async function (knex) {
    const hasEnableSlideshow = await knex.schema.hasColumn("status_page", "enable_slideshow");
    const hasSlideshowInterval = await knex.schema.hasColumn("status_page", "slideshow_interval");
    const hasSlideshowAutoPlay = await knex.schema.hasColumn("status_page", "slideshow_auto_play");
    const hasSlideshowLoop = await knex.schema.hasColumn("status_page", "slideshow_loop");
    const hasSlideshowShowControls = await knex.schema.hasColumn("status_page", "slideshow_show_controls");

    return knex.schema.alterTable("status_page", function (table) {
        if (!hasEnableSlideshow) {
            table.boolean("enable_slideshow").notNullable().defaultTo(false);
        }
        if (!hasSlideshowInterval) {
            table.integer("slideshow_interval").unsigned().notNullable().defaultTo(8);
        }
        if (!hasSlideshowAutoPlay) {
            table.boolean("slideshow_auto_play").notNullable().defaultTo(true);
        }
        if (!hasSlideshowLoop) {
            table.boolean("slideshow_loop").notNullable().defaultTo(true);
        }
        if (!hasSlideshowShowControls) {
            table.boolean("slideshow_show_controls").notNullable().defaultTo(true);
        }
    });
};

exports.down = async function (knex) {
    const hasEnableSlideshow = await knex.schema.hasColumn("status_page", "enable_slideshow");
    const hasSlideshowInterval = await knex.schema.hasColumn("status_page", "slideshow_interval");
    const hasSlideshowAutoPlay = await knex.schema.hasColumn("status_page", "slideshow_auto_play");
    const hasSlideshowLoop = await knex.schema.hasColumn("status_page", "slideshow_loop");
    const hasSlideshowShowControls = await knex.schema.hasColumn("status_page", "slideshow_show_controls");

    return knex.schema.alterTable("status_page", function (table) {
        if (hasSlideshowShowControls) {
            table.dropColumn("slideshow_show_controls");
        }
        if (hasSlideshowLoop) {
            table.dropColumn("slideshow_loop");
        }
        if (hasSlideshowAutoPlay) {
            table.dropColumn("slideshow_auto_play");
        }
        if (hasSlideshowInterval) {
            table.dropColumn("slideshow_interval");
        }
        if (hasEnableSlideshow) {
            table.dropColumn("enable_slideshow");
        }
    });
};
