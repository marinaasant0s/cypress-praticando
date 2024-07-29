const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'r1ysb7',
  e2e: {
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      chartes: true,
      reportTitle: 'Projeto curso básico cypress'
    },
    baseUrl:'https://www.automationpratice.com.br/',
    defaultCommandTimeout: 3000,
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },
});
