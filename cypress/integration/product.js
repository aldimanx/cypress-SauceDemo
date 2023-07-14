import productPage from "../pages/productPage"


let productpage = new productPage()

beforeEach(() => {

  let username = 'standard_user'
  let password = 'secret_sauce'
    cy.loginsaucedemo(username,password)
  })

  it('001 count total product', () => {
    productpage.ProductItem()
        .its('length').should('eq',6)
  })

  it('002 add product', () => {
    productpage.item1()
        .click()
    productpage.item2()
        .click()
    productpage.shoppingCart()
        .click()
    cy.contains("Sauce Labs Backpack")
        .should('exist')
        cy.contains("Sauce Labs Bike Light")
        .should('exist')
  })

  it('003 remove product', () => {
    productpage.item1()
        .click()
    productpage.item2()
        .click()
    productpage.shoppingCart()
        .click()
    productpage.removeItem1()
        .click()
    cy.contains("Sauce Labs Backpack")
        .should('not.exist')
     
  })