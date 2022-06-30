/// <reference types="cypress" />

import mainLandingPage from '../../fixtures/landing-page/main-landing-page';
import tShirtLandingPage from '../../fixtures/landing-page/tshirt-landing-page';
import main from '../../fixtures/action/main';
import {elements} from "../../dom/elements";
import data from '../../fixtures/data.json.json';

describe('example to-do app', async () => {
  before(() => {
    cy.visit('/')
  })

  it('Add and remove items to the the cart', () => {
    cy.log(`Add to the cart a Faded Short Sleeve T Shirt, size M, colour blue`)
    main.addAnItem({
      itemType: elements.tShirtBtn,
      catSizeBtn: elements.mediumSizeBtn,
      catColour:elements.blue,
    }, {
      itemTitle: data.tshirtTitle,
      productSize: data.medium,
    }, 'continue' )

    cy.log('Add to the cart an Evening Dress, size small, colour beige')
    main.addAnItem({
      itemType: elements.dressesBtn,
      catSizeBtn: elements.smallSizeBtn,
      catColour:elements.beige,
    }, {
      itemTitle: data.eveningDressTitle,
      productSize: data.small,
    }, 'continue', elements.eveningDressesBtn)

    cy.log('Add to the cart a Printed Summer Dress, size medium, colour orange')
    main.addAnItem({
      itemType: elements.dressesBtn,
      catSizeBtn: elements.mediumSizeBtn,
      catColour:elements.orange,
    }, {
      itemTitle: data.summerDressTitle,
      productSize: data.medium,
    },elements.summerDressesBtn)

    // cy.log('Check out')
    // main.checkOut()

    cy.log('Remove the Evening Dress from the cart')
    main.removeItem()
    cy.log('Verify the cart has only 2 items left')

    cy.log('Add a second Faded Short Sleeve T Shirt of the same size and colour')
    main.addSecond()

    cy.log('7.Assert the total for each line in the cart')
    cy.get(elements.tShirtTotalPrice).should('have.text', data.tShirtTotalPriceVal)
    cy.get(elements.summerDressTotalPrice).should('have.value', data.summerDressTotalPriceValue)

    cy.log('8.Assert the cart total is $65.53')
    cy.get(elements.totalPrice).should('have.value', data.desiredTotalPrice)
    })
})
