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

    //getCreateAnAccountButton() {
    //    return  cy.get('#toggle-create-account-btn');
    //}

    //
    //    getCreateAccountButton() {
    //        return cy.get('#toggle-create-account-btn');
    //    }
    //


    //
    //    getErrorMessageText() {
    //        return cy.xpath("//div[contains(text(),'Incorrect username or password')]");
    //    }
    //
    //    getAcceptCookiesButton() {
    //        return cy.get('button#onetrust-accept-btn-handler');
    //    }
    //    
    //
}

export default SignInPage;