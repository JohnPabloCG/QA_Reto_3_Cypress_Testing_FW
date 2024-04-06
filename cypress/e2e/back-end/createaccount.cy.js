describe('Sign feature', () => {
    it('', () => {
        cy.request("POST", "/onlineshop/login?create_account=1", {
            //No tenia el API, trate de usar lo que logre extraer desde JMeter, sin embargo, por obvias razones no crea el usuario.
            id_gender: "1", 
            firstname: "John Pablo",
            lastname: "Canon G", 
            email: "pruebas@gmail.com",
            password: "T3st1ngJ0hn",
            birthday: "01/02/1991",
            psgdpr: "1",
            submitCreate: "1"
        }).then((response) => {
            expect(response.status).to.eq(200);
            cy.log(JSON.stringify(response.body))
        });
    });
});