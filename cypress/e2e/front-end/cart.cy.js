describe('Cart feature', () => {
    beforeEach(() => {
        cy.visit('/onlineshop/')
        cy.get('[data-id-product="1"] > .thumbnail-container > .thumbnail > img').click();
        cy.get(':nth-child(2) > label > .input-color').click();
        cy.get('.add > .btn').click();
    });
    it('TEST CASE 002 | FE | Add new product to cart', () => {
        cy.get('.btn-secondary').click();
        cy.screenshot()
    })
    it('TEST CASE 003 | FE | Delete product from the cart', () => {
        cy.get('.btn-secondary').click();
        cy.get('.blockcart').click();
        cy.get('.remove-from-cart > .material-icons').click();
        cy.get('.blockcart').click();
        cy.get('.product-image > img').should('not.exist');
        cy.screenshot()
    })
});