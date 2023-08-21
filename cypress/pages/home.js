class homePage {
    cookiesAcceptBtn() {
      return  cy.get('._wrapper_1mwpa_1')
    }
    bankPaymentBtn() {
      return  cy.get('[data-testid="bank-payment-btn"]')
    }
    cardReddirectBtn() {
      return  cy.get('[data-testid="card-redirect-btn"]')
    }
    paymentLinkBtn() {
        return cy.get('[data-testid="payment-link-btn"]')
    }
}

export default homePage