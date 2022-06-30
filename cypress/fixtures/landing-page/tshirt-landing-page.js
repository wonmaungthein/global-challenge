import {elements} from "../../dom/elements";

class tShirtLandingPage {

     addMoreBtn () {
       return cy.get(elements.productListDescriptionAddMoreBtn)
    }

     verifyTshirtLandingPage = () => {
        cy.log('Verify T-Shirt landing page is displayed')
        cy.get(elements.mainPage).should('be.visible')
        cy.get(elements.mainPageHeader).should('be.visible')
        cy.get(elements.centerColumn).should('be.visible')
        cy.get(elements.mainPageFooter).should('be.visible')
    }

     verifyProductListComponent = (dressType) => {
        cy.log('Verify product list component displayed')
        cy.get(elements.productList).should('be.visible')
        cy.get(elements.productListImage).should('be.visible')
        cy.get(elements.productListDescription).should('be.visible')
        cy.get(elements.productListDescriptionTitle).should('be.visible')
        cy.get(elements.productListDescriptionButtonContainer).should('be.visible')
        cy.get(elements.productListDescriptionColourContainer).should('be.visible')
        cy.get(elements.productListDescriptionAvailabilityContainer).should('be.visible')
    }
}

export default new tShirtLandingPage();
