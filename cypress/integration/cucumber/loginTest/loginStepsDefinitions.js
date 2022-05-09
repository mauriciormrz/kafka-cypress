import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";


import SignInPage from "../../../support/PageObjects/SignInPage";
import MyAccountMenu from "../../../support/PageObjects/MyAccountMenu";
import EndPage from '../../../support/PageObjects/EndPage';
//

const signInPage = new SignInPage();
const myAccountMenu = new MyAccountMenu();
const endPage = new EndPage();
//
Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
});

Given('I am at the Login page', () => {
    cy.goToLoginPage();
})


When('I fill in the account email field with the value {string}', (user) => {

    signInPage.getLabelFormText()
        .should('be.visible')
        .and('contain.text', 'LOGIN INFORMATION');
    signInPage.getUserNameText()
        .clear()
        .type(user);
    signInPage.getContinueButton().click();
})

And('I fill in the password field with the value {string}', (password) => {

    signInPage.getLabelFormText()
        .should('be.visible')
        .and('contain.text', 'LOGIN INFORMATION');
    signInPage.getPasswordText()
        .clear()
        .type(password);
})

And('I hit the login button', () => {

    signInPage.getLoginButton().click();
})

Then('I should be at the home page', () => {

    cy.welComeHomePage();
})

And('I logout', () => {

    myAccountMenu.getSignOutLink().click();
    endPage.getLogOutMessageText()
        .should('be.visible')
        .and('contain.text', 'You have been logged out.');
})

