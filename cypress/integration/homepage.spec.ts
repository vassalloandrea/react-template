/// <reference types="cypress" />

context('Homepage', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('shows the alert when the button is clicked', () => {
    const alertStub = cy.stub()
    cy.on('window:alert', alertStub)

    cy.get('button')
      .contains('Click me!')
      .click()
      .then(() => {
        expect(alertStub.getCall(0)).to.be.calledWith('Hello world!')
      })
  })
})
