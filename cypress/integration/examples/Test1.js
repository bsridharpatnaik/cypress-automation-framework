/// <reference types="cypress"/>
describe('First Test Suite', function(){
    it('First Case', function(){
        cy.visit('https://rahulshettyacademy.com/seleniumPractise');
        cy.get('input.search-keyword').type("ca");
        cy.wait(2000)
        cy.get('.product:visible').should('have.length',4);
        cy.get('.products').find('.product').should('have.length',4);
        cy.get('.products').find('.product').eq(2).contains("ADD TO CART").click();
        expect(true).to.equals(true);
    })

})