import { Given, When, And, Then, Before} from "cypress-cucumber-preprocessor/steps";
import Checkout from "../PageObjects/checkoutPage";
import Homepage from "../PageObjects/homePage";
import Login from "../PageObjects/loginPage";
let checkout = new Checkout()
let homepage = new Homepage()
let login = new Login();

Before(()=> {
    cy.visit("https://automationteststore.com/index.php?rt=account/login")
    login.setUsername("gloria")
    login.setPassword("pass")
    login.clickLoginBtn()
})

Given("The user have a product added in cart", ()=>{
    cy.visit("https://automationteststore.com/")
    homepage.clickAddToCartBtn('Skinsheen Bronzer Stick')
})
When("The user goes to checkout page", ()=> {
    cy.visit("https://automationteststore.com/index.php?rt=checkout/confirm")
})
And("The user clicks on confirm order", ()=> {
      checkout.clickConfirmOrder 
})

Then("The order is confirmed", ()=> {
    
})