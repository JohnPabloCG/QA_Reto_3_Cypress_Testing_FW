describe('Sign feature', () => {
    beforeEach(() => {
        cy.visit('/onlineshop')
        cy.get('#_desktop_user_info').click()
        cy.get('.col-md-6 > .form-control').type('johnpablopc@gmail.com') //Texto en TextArea.
        cy.get('.input-group > .form-control').type('T3st1ngJ0hn*') //Texto en TextArea.
    });
    it('TEST CASE 007 | FE | Login authentication - Sign IN', () => {
        cy.get('#submit-login').click()
        cy.screenshot()
    });
    it('TEST CASE 008 | FE | Login authentication - Sign OUT', () => {
        cy.get('#submit-login').click()
        cy.get('.logout').click()
        cy.screenshot()
    });
});