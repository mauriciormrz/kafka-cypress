class SignInPage {
 
    getAcceptCookiesStringButton() {
        return "button#onetrust-accept-btn-handler";
    }

    getLabelFormText() {
        return cy.get('.form-label')
    }

    getUserNameText() {
        return cy.get('#loginUsername');
    }

    getContinueButton() {
        return cy.get('#continue-btn');
    }

    getPasswordText() {
        return cy.get('#loginPassword');
    }

    getLoginButton() {
        return cy.get('#login-btn');
    }

}

export default SignInPage;