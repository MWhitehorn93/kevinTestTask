class bankPayment {
    amountTxtBx() {
        return  cy.get('[data-testid="amount-input"]')
    }

    emailTxtBx() {
        return cy.get('[data-testid="email-input"]')
    }

    bankForm() {
        return cy.get('[data-testid="bank-payment-form"] > :nth-child(4)')
    }

    tCSCheckbox() {
        return cy.get('[data-testid="checkmark-icon"]')
    }

    payBtn () {
        return cy.get('[data-testid="bank-payment-form"] > ._wrapper_1mwpa_1')
    }
}

export default bankPayment