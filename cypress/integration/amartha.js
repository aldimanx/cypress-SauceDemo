import saucedemo from "../pages/saucedemo"; // Adjust the path as needed

describe('sauce demo', () => {
  let Saucedemo = new saucedemo();

  let username = ['standard_user', 'locked_out_user', 'standard_user'];

  it('login feature', () => {
    cy.visit('https://www.saucedemo.com'); // Correct the URL

    for (let i = 0; i < username.length; i++) {
      cy.xpath('//input[@id="user-name"]').clear();
      cy.xpath('//input[@id="user-name"]').type(username[i]);
      cy.xpath('//input[@id="password"]').clear();
      cy.xpath('//input[@id="password"]').type('secret_sauce');
      cy.xpath('//input[@id="login-button"]').click();
      cy.get('body').then((bodyElement) => {

    // If ProductPage is found on the page, navigate to it
        if(bodyElement.find){
       // if (bodyElement.find('[data-test="error"]').length > 0) {
        cy.log(username[i]); // Log the username
      } else {
        cy.xpath('//button[text()="Open Menu"]').click();
        cy.get('#logout_sidebar_link').click();
      }
    
    })
}
  });
});
