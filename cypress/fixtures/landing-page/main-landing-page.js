import {elements} from '../../dom/elements';

class mainLandingPage {

     verifyLandingPage = () => {
        cy.log('Verify Landing Page')
        cy.get(elements.mainPage).should('be.visible')
        cy.get(elements.mainPageHeader).should('be.visible')
        cy.get(elements.mainPageBody).should('be.visible')
        cy.get(elements.mainPageFooter).should('be.visible')
    }

     verifyCategoryTitleSection = () => {
        cy.get(elements.categoriesTitle).should('be.visible')
        cy.get(elements.tShirtBtn).should('be.visible').and('have.text','T-shirts')
        cy.get(elements.dressesBtn).should('be.visible').and('have.text','Dresses')
        cy.get(elements.womenBtn).should('be.visible').and('have.text','Women')
    }
}


export default new mainLandingPage();
