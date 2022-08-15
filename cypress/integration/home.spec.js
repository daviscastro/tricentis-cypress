

describe('home page', ()=>{
    it('Página deve estar no ar', ()=>{
        cy.viewport(1440 , 900)
        cy.visit('http://sampleapp.tricentis.com')
        cy.get('.section-title').should('have.text', 'Welcome Aboard!Our Insane Insurance Offer')
    })
})