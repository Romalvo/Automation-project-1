const {defineConfig} = require("cypress");

module.exports = defineConfig({
    pageLoadTimeout: 13000,
    chromeWebSecurity: false,

    env: {
        firstCookieValue: "firstValue",
    },

    e2e: {
        setupNodeEvents(on, config) {
            return config;
        }
    },
});
