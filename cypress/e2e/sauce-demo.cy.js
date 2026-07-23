describe('Sauce Demo - End-to-End Checkout Flow', () => {

  beforeEach(() => {
    cy.visit('https://www.saucedemo.com/');

    // Login
    cy.get('[data-test="username"]').should('be.visible').type('standard_user');
    cy.get('[data-test="password"]').should('be.visible').type('secret_sauce');
    cy.get('[data-test="login-button"]').click();

    // Verify successful login
    cy.url().should('include', '/inventory.html');
    cy.get('.title').should('have.text', 'Products');
  });

  it('should display all available products', () => {
    cy.get('.inventory_item').should('have.length', 6);
  });

  it('should sort products by Price (Low to High)', () => {
    cy.get('[data-test="product-sort-container"]').select('lohi');

    cy.get('.inventory_item_price').then(($prices) => {
      const prices = [...$prices].map(price =>
        Number(price.innerText.replace('$', ''))
      );

      const sorted = [...prices].sort((a, b) => a - b);

      expect(prices).to.deep.equal(sorted);
    });
  });

  it('should add a single item to the cart', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    cy.get('.shopping_cart_badge')
      .should('be.visible')
      .and('contain', '1');
  });

  it('should add multiple items to the cart', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bike-light"]').click();
    cy.get('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();

    cy.get('.shopping_cart_badge')
      .should('contain', '3');
  });

  it('should remove an item from the cart', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    cy.get('[data-test="remove-sauce-labs-backpack"]').click();

    cy.get('.shopping_cart_badge').should('not.exist');
  });

  it('should view cart successfully', () => {
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    cy.get('.shopping_cart_link').click();

    cy.url().should('include', '/cart.html');

    cy.get('.inventory_item_name')
      .should('contain', 'Sauce Labs Backpack');
  });

  it('should proceed to checkout successfully', () => {

    // Add item
    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    // Cart
    cy.get('.shopping_cart_link').click();

    // Checkout
    cy.get('[data-test="checkout"]').click();

    cy.url().should('include', '/checkout-step-one.html');

    // Customer information
    cy.get('[data-test="firstName"]').type('John');
    cy.get('[data-test="lastName"]').type('Doe');
    cy.get('[data-test="postalCode"]').type('100001');

    cy.get('[data-test="continue"]').click();

    // Verify overview page
    cy.url().should('include', '/checkout-step-two.html');

    cy.get('.title')
      .should('have.text', 'Checkout: Overview');

    cy.get('.inventory_item_name')
      .should('contain', 'Sauce Labs Backpack');
  });

  it('should complete checkout successfully', () => {

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click();

    cy.get('.shopping_cart_link').click();

    cy.get('[data-test="checkout"]').click();

    cy.get('[data-test="firstName"]').type('John');
    cy.get('[data-test="lastName"]').type('Doe');
    cy.get('[data-test="postalCode"]').type('100001');

    cy.get('[data-test="continue"]').click();

    cy.get('[data-test="finish"]').click();

    cy.url().should('include', '/checkout-complete.html');

    cy.get('.complete-header')
      .should('contain', 'Thank you for your order!');

    cy.get('.complete-text')
      .should('contain', 'Your order has been dispatched');

    cy.get('[data-test="back-to-products"]').click();

    cy.url().should('include', '/inventory.html');
  });

  it('should logout successfully', () => {

    cy.get('#react-burger-menu-btn').click();

    cy.get('#logout_sidebar_link')
      .should('be.visible')
      .click();

    cy.url().should('eq', 'https://www.saucedemo.com/');
  });

});