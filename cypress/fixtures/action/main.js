import mainLandingPage from "../landing-page/main-landing-page";
import tShirtLandingPage from "../landing-page/tshirt-landing-page";
import tShirtMoreDetailLandingPage from '../landing-page/tshirt-more-details-landing-page';
import shoppingCartSummaryPage from '../landing-page/shopping-cart-summary-landing-page';

class main {
    addAnItem = ( elems, values, btn, extra) => {
        mainLandingPage.verifyLandingPage()

        mainLandingPage.verifyCategoryTitleSection()

        cy.get(elems.itemType).click()

        extra ? cy.get(extra).click() : cy.log('No extra element included')

        cy.get(elems.catColour).click()

        cy.get(elems.catSizeBtn).click()

        // Currently loading time is a bit long
        cy.wait(3800)
        tShirtLandingPage.verifyTshirtLandingPage()

        cy.log('Faded Short Sleeve T-shirts')
        tShirtLandingPage.verifyProductListComponent(values.itemTitle)

        cy.log('Click Add more btn')
        tShirtLandingPage.addMoreBtn().click()
        tShirtMoreDetailLandingPage.verifyTshirtMoreDetailLandingPage()
        tShirtMoreDetailLandingPage.verifyProductListSelectionComponent()
        tShirtMoreDetailLandingPage.selectSizeAndColour( values.productSize)

        cy.log('Verify item added to the cart component')
        tShirtMoreDetailLandingPage.verifyItemAddedConfirmationPopup()

        if(btn === 'continue'){
            cy.log('Click continue shopping btn')
            tShirtMoreDetailLandingPage.continueShoppingBtn().should('be.visible').click()
        } else {
            shoppingCartSummaryPage.proceedToCheckoutBtn().should('be.visible').click()
            cy.url().should('include', `controller=order`)
        }
    }

    removeItem = () => {
        shoppingCartSummaryPage.verifyShoppingCartSummaryLandingPage()
        shoppingCartSummaryPage.eveningDressDeleteBtn().click()
    }

    addSecond = () => {
        shoppingCartSummaryPage.tShirtQty().should('be.visible').and('have.value', '1')
        shoppingCartSummaryPage.addBtn().should('be.visible').click()
        shoppingCartSummaryPage.tShirtQty().should('be.visible').and('have.value', '2')
    }
}

export default new main();
