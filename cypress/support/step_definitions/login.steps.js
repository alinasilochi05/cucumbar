import { Given, When, And, Then} from "cypress-cucumber-preprocessor/steps";
import Login from "../PageObjects/loginPage";
let login = new Login()

Given('I access Login page', ()=> {
    cy.visit("https://automationteststore.com/index.php?rt=account/login")
})
When("I enter username {word}", (username)=>{
     login.setUsername(username)
})
And("I enter password {word}", (password)=>{
    login.setPassword(password)
})
And("I click on Login Button", ()=>{
    login.clickLoginBtn()
})

Then("Home Page is loaded with title My Account", ()=>{
    cy.title().should('eq', "My account")
} )