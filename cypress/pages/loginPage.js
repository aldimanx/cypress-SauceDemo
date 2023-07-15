class loginPage {

    InputUsername(){
        return cy.get('[data-test="username"]')
    }
    inputPassword(){
        return cy.get('[data-test="password"]')
    }
    LoginButton(){
        return cy.get('[data-test="login-button"]')  
    }
    ErrorMessage(){
        return cy.get('[data-test="error"]')
    }



}

export default loginPage