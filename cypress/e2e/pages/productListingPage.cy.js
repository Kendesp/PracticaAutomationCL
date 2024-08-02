import productListingPage from '../component/product listing page/plp-component.js';
import homePage from '../component/home/home-component.js';
import productDetailPage from '../component/product detail page/pdp-component.js';
import cartPage from '../component/carrito/carrito-component.js';

describe('Product Listing Page', () => {
  beforeEach(() => {
 
    cy.visit('/').timeMark('Entrada')
    cy.wait(5000)
    cy.injectAxe()
  });

 
  it('Login y Agregar producto al carrito', () => {
    homePage.clickProfileIcon();
    homePage.getLoginModal();
    homePage.fillLoginForm();
    homePage.typeInSearch("cama");
    homePage.clickInSearch();
    productListingPage.clickFirstProducts();
    productDetailPage.clickAddToCartFromPDP();
    homePage.clickCartIcon();
    cy.timeSince('Entrada','Finalizacion de la prueba')
    //cy.checkA11y()
  })

  it('Login, Agregar mas productos del mismo tipo e ir a pagar', () => {
    homePage.clickProfileIcon();
    homePage.getLoginModal();
    homePage.fillLoginForm();
    homePage.typeInSearch("cama");
    homePage.clickInSearch();
    productListingPage.clickFirstProducts();
    productDetailPage.clickAddToCartFromPDP();
    homePage.clickCartIcon();
    cartPage.clickAddMoreItems();
    cartPage.clickPayButton();
    cy.timeSince('Entrada','Finalizacion de la prueba')
    //cy.checkA11y()
  })

  it('Login, hacer una busqueda y guardar en favoritos', () => {
    homePage.clickProfileIcon();
    homePage.getLoginModal();
    homePage.fillLoginForm();
    homePage.typeInSearch("sofa");
    homePage.clickInSearch();
    productListingPage.clickMultipleFavoriteFromPLP();
    cy.timeSince('Entrada','Finalizacion de la prueba')
    //cy.checkA11y()
  })

  it('Login y verificar guardado en favoritos', () => {
    homePage.clickProfileIcon();
    homePage.getLoginModal();
    homePage.fillLoginForm();
    homePage.clickBurgerMenu();
    homePage.clickWishList();
    productListingPage.verifyFavoritesAreSaved();
    cy.timeSince('Entrada','Finalizacion de la prueba')
    //cy.checkA11y()
  })



    it('Verificar Precio de la card', () => {
    homePage.typeInSearch("Juego de sábanas estampado");
    homePage.clickInSearch();
    productListingPage.scrollDown();
    productListingPage.getPriceFromCard();
    cy.timeSince('Entrada','Finalizacion de la prueba')
    //cy.checkA11y()
  })



})