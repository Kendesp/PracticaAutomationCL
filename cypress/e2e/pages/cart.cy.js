import productListingPage from '../component/product listing page/plp-component.js';
import homePage from '../component/home/home-component.js';
import productDetailPage from '../component/product detail page/pdp-component.js';
import cartPage from '../component/carrito/carrito-component.js';

describe('Cart page', () => {
  beforeEach(() => {
 
    cy.visit('/')
    cy.wait(5000)
  });

  it('Agregar al carrito, login y cambiar metodo envio', () => {
    homePage.typeInSearch("cama");
    homePage.clickInSearch();
    cy.wait(20000)
    productListingPage.clickFirstProducts();
    cy.wait(20000)
    productDetailPage.clickAddToCartFromPDP();
    cy.wait(10000)
    homePage.clickCartIcon();
    cy.wait(10000)
    cartPage.clickPayButton();
    cy.wait(10000)
    cartPage.loginCarrito();
    cy.wait(25000)
    cartPage.clickOpcionDespachoDomicilio();
    cy.wait(10000)
    cartPage.clickOpcionRetiroTienda();
    cy.wait(10000)
    cartPage.clickOpcionPuntoRetiro();

  })

  it('Agregar al carrito, login y añadir direccion', () => {
    homePage.typeInSearch("cama");
    homePage.clickInSearch();
    cy.wait(20000)
    productListingPage.clickFirstProducts();
    cy.wait(20000)
    productDetailPage.clickAddToCartFromPDP();
    cy.wait(10000)
    homePage.clickCartIcon();
    cy.wait(10000)
    cartPage.clickPayButton();
    cy.wait(10000)
    cartPage.loginCarrito();
    cy.wait(25000)
    cartPage.clickAddAdress();
    cy.wait(10000)
    cartPage.fillAddressInfo();
    cartPage.clickSaveAddressButton();
    cy.wait(10000)
  })
  
})