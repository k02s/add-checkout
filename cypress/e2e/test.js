describe('add to cart lab 2', () => {
    
    it('add to cart => checkout => assert', () => {
        
        cy.visit("https://www.automationteststore.com/")
        // press on login & sign up
        cy.get('#customer_menu_top > li > a').click()

        // enter login name and password
        cy.get('#loginFrm_loginname').type("Katii")
        cy.get('#loginFrm_password').type("asac1234")
        cy.get('#loginFrm > fieldset > .btn').click()

        // add to cart
        cy.get(':nth-child(1) > .active').click()
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(1) > .thumbnail > .pricetag > .productcart > .fa').click()
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(3) > .thumbnail > .pricetag > .productcart > .fa').click()
        cy.get('#block_frame_featured_1769 > .thumbnails > :nth-child(4) > .thumbnail > .pricetag > .productcart > .fa').click()
        cy.get('.cart').click()

        // checkout
        cy.get('#cart_checkout1').click()
        cy.get('#checkout_btn').click()

        // assertion
        cy.get('.maintext').should('contain','Your Order Has Been Processed!')
    });
});