class SauceDemo{

frmUsername(){
    return cy.get('#user-name')
}
frmPassword(){
    return cy.get('#password')
}
btnLogin(){
    return cy.get("#login-button")
}
ttlProduct(){
    return cy.xpath('//span[@class="title"]')
}
btnNavigation(){
    return cy.xpath('//button[text()="Open Menu"]')
}
btnLogout(){
    return cy.get('#logout_sidebar_link')
}
btnAddItem(){
    return cy.xpath('//button[@class="btn btn_primary btn_small btn_inventory "]')
}
btncart(){
    return cy.get(".shopping_cart_link")
}
txtItem(){
    return cy.xpath('//div[@class="inventory_item_name"]')
}


Funclogin(username, password) {
    this.frmUsername().clear()
    this.frmUsername().type(username)
    this.frmPassword().clear()
    this.frmPassword().type(password)
    this.btnLogin().click()
}

FuncLogout(){
    this.btnNavigation().click()
    this.btnLogout().click()
}


}

export default SauceDemo