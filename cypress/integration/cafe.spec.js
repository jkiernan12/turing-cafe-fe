context('Landing page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Should have a title, form and reservation cards', () => {
    // https://on.cypress.io/type
    cy.get('h1')
    .contains('Turing Cafe Reservations')
    .should('exist')
    
    .get('form')
    .should('exist')

    .get('.ResCard')
    .should('exist')
  })

  it('should adjust the form input values', () => {
    cy.get('input[placeholder="Name"]')
    .click()
    .type('TestName')
    .should('have.value', 'TestName')

    .get('input[type="date"]')
    .click()
    .type('2022-01-22')
    .should('have.value', '2022-01-22')

    .get('input[type="time"]')
    .click()
    .type('10:30')
    .should('have.value', '10:30')

    .get('input[type="number"]')
    .click()
    .clear()
    .type('3')
    .should('have.value', '3')
  })

  it('should be able to add a new card to the page', () => {
    cy.get('input[placeholder="Name"]')
    .click()
    .type('TestName')

    .get('input[type="date"]')
    .click()
    .type('2022-01-22')

    .get('input[type="time"]')
    .click()
    .type('10:30')

    .get('input[type="number"]')
    .click()
    .clear()
    .type('3')

    .get('.reserve-button')
    .click()

    cy.contains('TestName')
    .should('exist')
  })
})
