/// <reference types="cypress" />

describe('Helloworld app test', () => {
    
    beforeEach(() => {
      cy.visit('https://applitools.com/helloworld?diff1');
    })
  
    it('add an item to the cart and go to cart', () => {
      cy.eyesOpen({
        appName: 'Hello World',
        testName: 'Test task',
        browser: { width: 1024, height: 768 },
    });

    cy.CheckWithIgnoreElement('Main page','.random-number')
      
    cy.contains('Click me!').click()

    cy.CheckWithIgnoreElement('After click','.random-number')
  
    cy.eyesClose()

    });
  })