const { defineConfig } = require('cypress')

module.exports = defineConfig({
  pageLoadTimeout: 100_000,
  e2e: {
    setupNodeEvents(on, config){
      
    },
    //baseUrl: 'http://localhost:1234'
  },
});