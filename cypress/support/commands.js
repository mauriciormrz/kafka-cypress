// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import HomePage from './PageObjects/HomePage';
import SignInPage from "./PageObjects/SignInPage";
import MyAccountMenu from "./PageObjects/MyAccountMenu";


const homePage = new HomePage();
const signInPage = new SignInPage();
const myAccountMenu = new MyAccountMenu();


Cypress.Commands.add('goToLoginPage', () => {

    cy.visit(Cypress.env('url') + "/us/en/", {
        auth: {
            username: Cypress.env('username'),
            password: Cypress.env('password')
        }
    })
    cy.clickIfElemExists(signInPage.getAcceptCookiesStringButton());
    homePage.getDropDownLink('Sign-In')
        .should('be.visible')
        .and('contain.text', 'Sign In').click();
})


Cypress.Commands.add('clickIfElemExists', (elem) => {

    cy.wait(1000);
    cy.get('body').then($body => {
        if ($body.find(elem).length > 0) {
            cy.get(elem).should('be.visible').click();
        }
    });
})

Cypress.Commands.add('welComeHomePage', () => {

    homePage.getDropDownLink('Sign-In')
        .should('be.visible')
        .and('contain.text', 'my Account')
        .trigger('mouseover');
    homePage.getDropDownLink('my Account').trigger('mouseover');
    myAccountMenu.getWelcomeText()
        .should('be.visible')
        .and('contain', 'Welcome');
})
