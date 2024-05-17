describe('template spec', () => {

  beforeEach(() => {
    cy.clearCookies()
    cy.visit('https://demowebshop.tricentis.com/register')
  })

  it('Register - Firstname field not filled', () => {
    cy.get('#gender-male').click()
    //cy.get('#FirstName').type('Joseph')
    cy.get('#LastName').type('Sanbercode')
    cy.get('#Email').type('joseph.sanbercodeqa1@gmail.com')

    cy.get('#Password').type('1234567890')
    cy.get('#ConfirmPassword').type('1234567890')

    cy.get('#register-button').click()
    cy.get('.field-validation-error > span').should('contain.text', 'First name is required.')
  })

  it('Register - Lastname field not filled', () => {
    cy.get('#gender-male').click()
    cy.get('#FirstName').type('Joseph')
    //cy.get('#LastName').type('Sanbercode')
    cy.get('#Email').type('joseph.sanbercodeqa1@gmail.com')

    cy.get('#Password').type('1234567890')
    cy.get('#ConfirmPassword').type('1234567890')

    cy.get('#register-button').click()
    cy.get('.field-validation-error > span').should('contain.text', 'Last name is required.')
  })

  it('Register - Email field not filled', () => {
    cy.get('#gender-male').click()
    cy.get('#FirstName').type('Joseph')
    cy.get('#LastName').type('Sanbercode')
    //cy.get('#Email').type('joseph.sanbercodeqa1@gmail.com')

    cy.get('#Password').type('1234567890')
    cy.get('#ConfirmPassword').type('1234567890')

    cy.get('#register-button').click()
    cy.get('.field-validation-error > span').should('contain.text', 'Email is required.')
  })

  it('Register - Wrong email', () => {
    cy.get('#gender-male').click()
    cy.get('#FirstName').type('Joseph')
    cy.get('#LastName').type('Sanbercode')
    cy.get('#Email').type('joseph.sanbercodeqa1')

    cy.get('#Password').type('1234567890')
    cy.get('#ConfirmPassword').type('1234567890')

    cy.get('#register-button').click()
    cy.get('.field-validation-error > span').should('contain.text', 'Wrong email')
  })

  it('Register - Password field not filled', () => {
    cy.get('#gender-male').click()
    cy.get('#FirstName').type('Joseph')
    cy.get('#LastName').type('Sanbercode')
    cy.get('#Email').type('joseph.sanbercodeqa1@gmail.com')

    //cy.get('#Password').type('1234567890')
    cy.get('#ConfirmPassword').type('1234567890')

    cy.get('#register-button').click()
    cy.get('.field-validation-error > span').should('contain.text', 'Password is required.')
  })

  it('Register - Password and confirm password doesnt match', () => {
    cy.get('#gender-male').click()
    cy.get('#FirstName').type('Joseph')
    cy.get('#LastName').type('Sanbercode')
    cy.get('#Email').type('joseph.sanbercodeqa1@gmail.com')

    cy.get('#Password').type('1234567890')
    cy.get('#ConfirmPassword').type('12345')

    cy.get('#register-button').click()
    cy.get('.field-validation-error > span').should('contain.text', 'The password and confirmation password do not match.')
  })

  it('Email already registered', () => {
    cy.get('#FirstName').click()
    cy.get('#FirstName').type('Joseph')
    cy.get('#LastName').type('Sanbercode')
    cy.get('#Email').type('joseph.sanbercode@gmail.com')

    cy.get('#Password').type('1234567890')
    cy.get('#ConfirmPassword').type('1234567890')

    cy.get('#register-button').click()
    cy.get('.validation-summary-errors > ul > li').should('contain.text', 'The specified email already exists')
  })

  it.only('Register success', () => {
    cy.get('#FirstName').click()
    cy.get('#FirstName').type('Joseph')
    cy.get('#LastName').type('Sanbercode')
    cy.get('#Email').type('joseph.sanbercode1@gmail.com')

    cy.get('#Password').type('1234567890')
    cy.get('#ConfirmPassword').type('1234567890')

    cy.get('#register-button').click()
    cy.get('.page-body > .buttons > .button-1').click()
    cy.get('.topic-html-content-body > :nth-child(1)').should('contain.text', 'Welcome to the new Tricentis store!')
  })
})