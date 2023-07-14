import loginPage from "../pages/loginPage"
import productPage from "../pages/productPage"

let productpage = new productPage()
let loginpage = new loginPage()

describe('login feature', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/')
  
})

  it('001 login with valid account', () => {
    loginpage.InputUsername()
        .type("standard_user")
    loginpage.inputPassword()
        .type("secret_sauce")
    loginpage.LoginButton()
        .click()
    cy.get('.app_logo')
        .should('exist')
        
  })
  it('002 login with invalid password', () => {
    loginpage.InputUsername()
        .type("standard_user")
    loginpage.inputPassword()
        .type("randompass")
    loginpage.LoginButton()
        .click()
    loginpage.ErrorMessage()
        .should('have.text','Epic sadface: Username and password do not match any user in this service')    
  })
  it('003 login with locked account', () => {
    loginpage.InputUsername()
        .type("locked_out_user")
    loginpage.inputPassword()
        .type("secret_sauce")
    loginpage.LoginButton()
        .click()
    loginpage.ErrorMessage()
        .should('have.text','Epic sadface: Sorry, this user has been locked out.')    
  })

//   it('004 login with problem user', ()=>{
//     loginpage.InputUsername()
//         .type("problem_user")
//     loginpage.inputPassword()
//         .type("secret_sauce")
//     loginpage.LoginButton()
//         .click()
//     cy.xpath('//img[@class="inventory_item_img"]')
//         .should('exist')
//     productpage.item1()
//         .click()
//    cy.get('[data-test="remove-sauce-labs-backpack"]')
//         .click()        


  })



