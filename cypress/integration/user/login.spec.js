describe('Log in to user account', () => {
  before(() => {
    cy
      .visit('/')
      .get('[data-cy=profile-cart-icon]').click()
  })

  it('Login page', () => {
    cy
      .get('[data-cy=login-page-title]').contains('Log in')
  })

  it('Type account credentials', () => {
    cy
      .get('[data-cy=email-input]').type(Cypress.env('TEST_USER'))
      .get('[data-cy=password-input]').type(Cypress.env('USER_PW'))
  })
  
  it('Submit login', () => {
    cy.get('[data-cy=login-submit-button]').click()
  })

  it('Check login status', () => {
    cy.get('[data-cy=account-page-email]').contains(Cypress.env('TEST_USER'))
  })

  it('Logout', () => {
    cy.get('[data-cy=logout-button]').click()
  })
})