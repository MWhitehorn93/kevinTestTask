import homePage from "../../pages/home"
import bankPayment from "../../pages/bankPayment"

const home = new homePage
const bank = new bankPayment
const testURL = 'https://demo.kevin.eu/'
const testEmail = 'whitehornmatthew@gmail.com'
const testAmount = '0.01'

describe('Charity test purchase using SwedBank', () => {
  it('Charity test purchase using SwedBank', () => {
    cy.visit(testURL)
    home.cookiesAcceptBtn().click()
    home.cardReddirectBtn().should('be.visible')
    home.paymentLinkBtn().should('be.visible')
    home.bankPaymentBtn().click()
    bank.amountTxtBx().clear().type(testAmount)
    bank.emailTxtBx().clear().type(testEmail)
    cy.get('[for=":rc:"]').click()
    bank.tCSCheckbox().should('not.be.checked')
    bank.payBtn().click()
    cy.get('._wrapper_usu0x_1').contains('You have to agree to the terms and conditions and privacy policy').should('have.css', 'color', 'rgb(255, 59, 48)')
    bank.tCSCheckbox().click()
    bank.payBtn().click()
    cy.visit(testURL)
    home.cookiesAcceptBtn().should('not.exist')
  })
})