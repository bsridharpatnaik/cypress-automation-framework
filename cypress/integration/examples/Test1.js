/// <reference types="cypress"/>
describe('First Test Suite', function(){
    it('First Case', function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise');
        cy.get('input.search-keyword').type("ca");
        cy.get('.product').should('have.length',4);
        expect(true).to.equals(true);
    })

})