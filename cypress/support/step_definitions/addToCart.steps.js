import { Given, When,Then} from "cypress-cucumber-preprocessor/steps";
import Homepage from "../PageObjects/homePage";
let homepage = new Homepage();

Given("The user accesses the homepage", ()=>{
    cy.visit("https://automationteststore.com")

})
When("The user click on the add to cart Button", ()=> {
    homepage.clickAddToCartBtn("Skinsheen Bronzer Stick")
})
Then("The product is added to cart", ()=> {
    
})