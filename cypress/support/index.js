// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************
require('cypress-xpath');
require('cypress-plugin-tab');

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')


//const produce = require("../support/Kafka/producer")
//const consume = require("../support/Kafka/consumer")

// call the `produce` function and log an error if it occurs
//produce().catch((err) => {
//	console.error("error in producer: ", err)
//})

// start the consumer, and log any errors
//consume().catch((err) => {
//	console.error("error in consumer: ", err)
//})
