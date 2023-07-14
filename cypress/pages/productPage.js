class productPage

{
ProductItem(){
   return cy.xpath('//div[@class="inventory_item"]')
}
item1(){
    return cy.get('[data-test="add-to-cart-sauce-labs-backpack"]')
}
item2(){
    return cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]')
}
shoppingCart(){
    return cy.get('.shopping_cart_link')
}
removeItem1(){
    return cy.get('[data-test="remove-sauce-labs-backpack"]')
}




}
export default productPage