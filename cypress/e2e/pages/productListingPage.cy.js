import productListingPage from '../component/product listing page/plp-component.js';
import homePage from '../component/home/home-component.js';
import productDetailPage from '../component/product detail page/pdp-component.js';
import cartPage from '../component/carrito/carrito-component.js';

describe('Product Listing Page', () => {
  beforeEach(() => {
 
    cy.visit('/')
    cy.wait(5000)
  });

  it('Login, Agregar mas productos del mismo tipo e ir a pagar', () => {
    homePage.clickProfileIcon();
    homePage.getLoginModal();
    homePage.fillLoginForm();
    cy.wait(5000)
    homePage.clickCartIcon();
    cy.wait(5000)
    cartPage.clickAddMoreItems();
    cy.wait(5000)
    cartPage.clickPayButton();
    cy.wait(5000)
  })
  
  it('Login y Agregar producto al carrito', () => {
    homePage.clickProfileIcon();
    homePage.getLoginModal();
    homePage.fillLoginForm();
    cy.wait(5000)
    homePage.typeInSearch("cama");
    homePage.clickInSearch();
    cy.wait(5000)
    productListingPage.clickFirstProducts();
    cy.wait(5000)
    productDetailPage.clickAddToCartFromPDP();
    cy.wait(5000)
    homePage.clickCartIcon();
    cy.wait(5000)
  })

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