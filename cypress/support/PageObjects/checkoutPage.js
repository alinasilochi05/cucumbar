class Checkout {
    elements = {
        checkoutBtn: ()=> cy.get("#checkout_btn")
    }

    clickConfirmOrder(){
        this.elements.checkoutBtn().click()
    }
}
export default Checkout;