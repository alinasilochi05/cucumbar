import {Given, When, Then} from "cypress-cucumber-preprocessor/steps";
import Register from "../PageObjects/registerPage";
let register = new Register();

Given("The user access Register Page", ()=> {
    cy.visit("https://automationteststore.com/index.php?rt=account/create")
})
When("The user enters the firstname {word}", (firstName)=> {
    register.setFirstName(firstName)
})
And("The user enters the lastname {word}", (lastName)=> {
    register.setLastName(lastName)
})
And("The user enters the email {word}", (email)=> {
    register.setEmailInput(email)
})
And("The user enters the address {word}", (address)=> {
register.setAddressInput(address)
})
And("The user enters the city {word}", (city)=> {
register.setCityInput(city)
})
And("The user selects the country {word}", (country)=> {
register.setCountryInput(country)
})
And("The user selects de region state {word}", (region)=> {
register.setRegionInput(region)
})
And("The user enters the zip code {word}", (zip)=> {
register.setZipInput(zip)
})
And("The user enters the login name {word}", (loginName)=> {
register.setLoginName(loginName)
})
And("The user enters the password {word}", (password)=> {
register.setPassword(password)
})
And("The user confirms password {word}", (confirmedPassword)=> {
register.setPasswordConfirmation(confirmedPassword)
})
And("The the user agrees the privacy policy", ()=> {
register.setPrivacyCheckbox()
})
And("The user click the continue button", ()=> {
register.clickContinueButton
})
Then("The users registration is confirmed", ()=> {

})