describe('Search feature', () => {
    it('TEST CASE 006 | FE | Filter by Search: T-Shirt', () => {
        cy.visit('/onlineshop')
        cy.get('.ui-autocomplete-input').type('T-Shirt') //Texto en TextArea.
        cy.get('button > .material-icons').click();
        cy.screenshot()
    });
});