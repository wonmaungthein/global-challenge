import {elements} from "../../dom/elements";

class shoppingCartSummaryPage {
    proceedToCheckoutBtn (){
        return cy.get(elements.proceedToCheckoutBtn)
    }

    eveningDressDeleteBtn(){
        return cy.get(elements.eveningDressDeleteBtn)
    }

    tShirtQty(){
        return cy.get(elements.tShirtQty)
    }

    addBtn(){
        return cy.get(elements.addBtn)
    }

     verifyShoppingCartSummaryLandingPage = () => {
        cy.log('T-shirt more detail page')
        cy.get(elements.mainPageBody).should('be.visible')
        cy.get(elements.mainPageFooter).should('be.visible')
        cy.get(elements.cartSummaryTitle).should('be.visible')
        cy.get(elements.orderStep).should('be.visible')
        cy.get(elements.orderDetailComponent).should('be.visible')
    }
}

export default new shoppingCartSummaryPage();
