'use strict';

/**
 * terapia service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::therapy.therapy');
