describe('Category feature', () => {
    it('TEST CASE 009 | FE | Filter by category: Phone', () => {
        cy.visit('/onlineshop')
        //cy.get('#cat').click();
        cy.get('3-clothes').should('be.visible');
        cy.contains('Men').click();
    })
});