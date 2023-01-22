# Cypress-code-coverage

1. Install project with cra.

2. Install following npm packages with command
`npm i -D start-server-and-test cypress babel-plugin-istanbul @cypress/instrument-cra @cypress/code-coverage`

3. Add next code to the cypress.config.js file 

```
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here,
      require("@cypress/code-coverage/task")(on, config);
      // include any other plugin code...

      // It's IMPORTANT to return the config object
      // with any changed environment variables
      return config;
    },
  },
```

4. Import "@cypress/code-coverage/support" in `cypress` -> `support` -> `e2e.js`

`import "@cypress/code-coverage/support";`

5. In package.json file change scripts like following -> 

```
    "start": "react-scripts -r @cypress/instrument-cra start",
    "cypress": "cypress open",
    "test:cypress": "start-server-and-test start http://localhost:3000/ cypress"
```

6. Run `npm run test:cypress` this command should generate in your folder structure coverage folder with corresponding information.




