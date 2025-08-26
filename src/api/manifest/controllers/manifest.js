'use strict';

/**
 * manifest controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::manifest.manifest');
