/// <reference types="cypress" />

context('Homepage', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('shows the hello world heading', () => {
    cy.get('h1').should('have.text', 'Hello, World!')
  })
})
