class Homepage {

clickAddToCartBtn(productName){
    cy.get(".fixed").each(($element, index)=> {
       if($element.text().includes(productName)){
        cy.get(".productcart").eq(index).click()
       }
    })
 }
}

export default Homepage;
