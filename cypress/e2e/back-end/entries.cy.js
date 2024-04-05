import { getAllEntriesSchema } from "../../schemas/schema-get_all_entries";

describe('Entries feature', () => {
    it("TEST CASE 003 | BE | GET all entries", () => {
        cy.request("GET", "https://api.demoblaze.com/entries").then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.not.be.null;
            cy.validateSchema(getAllEntriesSchema, response.body);
            cy.log(JSON.stringify(response.body));
        });
    });
});