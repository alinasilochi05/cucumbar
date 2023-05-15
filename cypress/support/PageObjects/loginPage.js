class Login {

elements  = {
    usernameInput: ()=> cy.get('#loginFrm_loginname'),
    passwordInput: ()=> cy.get('#loginFrm_password'),
    loginBtn: ()=> cy.get('[title="Login"]')
}

setUsername (username){
    this.elements.usernameInput().type(username)}

setPassword (password){
        this.elements.passwordInput().type(password)
}
clickLoginBtn(){
    this.elements.loginBtn().click()
}
}



export default Login;