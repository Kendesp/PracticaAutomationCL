import productListingPage from '../component/product listing page/plp-component.js';
import homePage from '../component/home/home-component.js';

describe('Product Listing Page', () => {
  beforeEach(() => {
 
    cy.visit('/')
    cy.wait(5000)
  });


  it('Login, hacer una busqueda y guardar en favoritos', () => {
    homePage.clickProfileIcon();
    homePage.getLoginModal();
    homePage.fillLoginForm();
    cy.wait(5000)
    homePage.typeInSearch("sofa");
    homePage.clickInSearch();
    cy.wait(15000)
    productListingPage.clickMultipleFavoriteFromPLP();
  })

  it('Login y verificar guardado en favoritos', () => {
    homePage.clickProfileIcon();
    homePage.getLoginModal();
    homePage.fillLoginForm();
    cy.wait(5000)
    homePage.clickBurgerMenu();
    cy.wait(5000)
    homePage.clickWishList();
    cy.wait(5000)
    productListingPage.verifyFavoritesAreSaved();
  })

  /*

    it('Verificar Precio de la card', () => {
    homePage.typeInSearch("sofa");
    homePage.clickInSearch();
    cy.wait(5000)
    productListingPage.scrollDown();
    productListingPage.getPriceFromCard();
  })

  */

})