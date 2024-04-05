describe('Cart feature', () => {
    it("TEST CASE 001 | BE | Add new product to cart", () => {
        cy.request("POST", "https://api.demoblaze.com/addtocart", {
            id: "33490463-a8b6-a7c9-7676-2946cd6c061d",
            cookie: "user=6d1bf361-98fc-4bc3-70de-aaa5640f5588",
            prod_id: 1,
            flag: false
        }).then((response) => {
            expect(response.status).to.eq(200);
        });
    });

    it("TEST CASE 002 | BE | Delete product to cart", () => {
        cy.request("POST", "https://api.demoblaze.com/deletecart", {
            cookie: "user=6d1bf361-98fc-4bc3-70de-aaa5640f5588",
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.eq("Item deleted.");
            cy.log(JSON.stringify(response.body))
        });
    });
});