/*
import registerDurationMetricsPlugin from 'cypress-duration-metrics/plugin';

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      registerDurationMetricsPlugin(on);
    }
  }
});
*/
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  viewportWidth: 414,
  viewportHeight: 896,
  e2e: {
    baseUrl: "https://www.casaideas.cl/",
    specPattern: "./cypress/e2e/pages/*.cy.js",
    setupNodeEvents() {
    },
  },
});
