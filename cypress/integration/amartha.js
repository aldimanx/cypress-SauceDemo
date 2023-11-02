import SauceDemo from "../pages/saucedemo";

describe('sauce demo', () => {
  let saucedemo = new SauceDemo();
  let visibleElementCount
  const url = 'https://www.saucedemo.com'

  let username = ['standard_user', 'locked_out_user', 'visual_user'];
  const password = "secret_sauce"
  beforeEach(() => {
    cy.visit(url); // Correct the URL
  })

  it('login feature', () => {

    for (let i = 0; i < username.length; i++) {

      saucedemo.Funclogin(username[i], password)
      
      cy.get('body').then((bodyElement) => {
    //If ProductPage is found on the page, navigate to it
       if (bodyElement.find('[class="error-message-container error"]').length){
        saucedemo.btnLogin().should('exist')
      } else {
        saucedemo.ttlProduct().should('have.text','Products')
        saucedemo.FuncLogout()
      }    
    })
}
});

it('add items', () => {

   saucedemo.Funclogin(username[0], password)
    saucedemo.btnAddItem().then(($elements) => {
      // Use the callback function to filter and count visible elements
      visibleElementCount = $elements.length;
      // Log the count or perform assertions
      cy.log(`Number of visible elements: ${visibleElementCount}`);
    })
    saucedemo.btnAddItem().each((index) => {
      // Click each element
      cy.wrap(index).click();
})
    saucedemo.btncart().click()
    saucedemo.txtItem().should(($lis) => {
      expect($lis).to.have.length(visibleElementCount)
      expect($lis.eq(0)).to.contain('Sauce Labs Backpack')
      expect($lis.eq(1), 'second item').to.contain('Sauce Labs Bike Light')
      expect($lis.eq(2), 'third item').to.contain('Sauce Labs Bolt T-Shirt')
})

});




});
