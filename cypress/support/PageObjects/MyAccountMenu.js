class MyAccountMenu {

    getWelcomeText() {
        return cy.get('.welcome-title')
    }

    getSignOutLink() {
        return cy.get('[data-testid=qa-signout]');
    }

}

export default MyAccountMenu;