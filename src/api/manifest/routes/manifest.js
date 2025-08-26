'use strict';

/**
 * manifest router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::manifest.manifest');
