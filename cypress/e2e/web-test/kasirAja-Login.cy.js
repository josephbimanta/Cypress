describe('template spec', () => {
  it.only('Failed Login - Wrong Email', () => {
    cy.visit('https://kasirdemo.belajarqa.com/')
    cy.get('#email').type('salah.bimanta@gmail.com')
    cy.get('#password').type('1234567890')
    cy.get('.chakra-button').click()
    cy.get('.chakra-alert').should('contain.text', 'Kredensial yang Anda berikan salah')
  })

  it('Success Login', () => {
    cy.visit('https://kasirdemo.belajarqa.com/')
    cy.get('#email').type('joseph.bimanta@gmail.com')
    cy.get('#password').type('1234567890')
    cy.get('.chakra-button').click()
    cy.url().should('include', 'dashboard')
  })
})