describe('Category feature', () => {
    beforeEach(() => {
        cy.visit('/onlineshop')
        cy.get('.right').click();
        cy.get('#category-3 > .dropdown-item').click(); 
    });
    
    it('TEST CASE 004 | FE | Filter by category: Clothes - Men', () => {
        cy.get('.category-sub-menu > :nth-child(1) > a').click();//Selecciona la sub categoria Clothes.
        cy.screenshot()
    })
    it('TEST CASE 005 | FE | Filter by category: Clothes - Women', () => {
        cy.get('.category-sub-menu > :nth-child(2) > a').click();//Selecciona la sub categoria Clothes.
        cy.screenshot()
    })
});