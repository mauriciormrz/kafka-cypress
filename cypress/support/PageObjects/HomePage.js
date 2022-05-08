class HomePage {

    getDropDownLink(option) {

        return cy.get('#dropdown-cutom >p')
    }

    getSearchInput() {

        return cy.get('[data-testid=qa-search-input]');
    } 
}

export default HomePage;


