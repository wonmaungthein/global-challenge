import {elements} from "../../dom/elements";

class tShirtMoreDetailLandingPage {
      continueShoppingBtn (){
         return  cy.get(elements.continueShoppingBtn)
      }

     verifyTshirtMoreDetailLandingPage = () => {
        cy.log('T-shirt more detail page')
        cy.get(elements.mainPageBody).should('be.visible')
        cy.get(elements.mainPageFooter).should('be.visible')
        cy.get(elements.productDetailBreadCrumb).should('be.visible')

        cy.get(elements.productDetailImage).should('be.visible')
        cy.get(elements.productDetailDescription).should('be.visible')
        cy.get(elements.productDetailSelection).should('be.visible')
    }

     verifyProductListSelectionComponent = () => {
        cy.log('Verify product selection section')
        cy.get(elements.productDetailSelectionPrice).should('be.visible')
        cy.get(elements.productDetailSelectionQuantity).should('be.visible')
        cy.get(elements.productDetailSelectionSize).should('be.visible')
        cy.get(elements.productDetailSelectionColour).should('be.visible')
        cy.get(elements.productDetailSelectionAddToCartBtn).should('be.visible')
        cy.get(elements.productDetailSelectionAddToWishlist).should('be.visible')
    }

     selectSizeAndColour = (desiredSize) => {
        cy.get(elements.productDetailSelectionSizeDropdownBtn).click()
        cy.get(elements.productDetailSelectionSizeDropdownValue).should('have.attr', 'title', 'S')
        cy.get(elements.productDetailDesiredSizeSelector).select(desiredSize)
        cy.get(elements.productDetailDesiredSizeValue).should('have.text', desiredSize)

        cy.get(elements.cartValue).should('have.text', '(empty)')

        cy.get(elements.productDetailSelectionAddToCartBtn).click()
        cy.get(elements.productDetailSelectionAddToCartComponent).should('be.visible')

        // Need to add a function to count the item increase and decrease
    }

     verifyItemAddedConfirmationPopup = () => {
        cy.log('Verify Item Added Confirmation Popup')
        cy.get(elements.layerCart).should('be.visible')
        cy.get(elements.layerCartProduct).should('be.visible')
        cy.get(elements.layerCartCart).should('be.visible')
        cy.get(elements.closeBtn).should('be.visible')
        cy.get(elements.productTitle).should('be.visible')
        cy.get(elements.productInfo).should('be.visible')
        // The selectors changed after adding new item
        // cy.get(elements.itemCounterText).should('be.visible')
        cy.get(elements.totalProducts).should('be.visible')
        cy.get(elements.totalShipping).should('be.visible')
        cy.get(elements.total).should('be.visible')
        cy.get(elements.continueShoppingBtn).should('be.visible')
        cy.get(elements.proceedToCheckoutBtn).should('be.visible')
    }
}

export default new tShirtMoreDetailLandingPage();
