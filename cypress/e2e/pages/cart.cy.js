import productListingPage from '../component/product listing page/plp-component.js';
import homePage from '../component/home/home-component.js';
import productDetailPage from '../component/product detail page/pdp-component.js';
import cartPage from '../component/carrito/carrito-component.js';

describe('Cart page', () => {
  beforeEach(() => {
 
    cy.visit('/').timeMark('Entrada')
    cy.injectAxe()
  });


  it('Agregar al carrito, login y confirmar datos de compra (subtotal y costo de envios)', () => {
    homePage.typeInSearch("cama");
    homePage.clickInSearch();
    productListingPage.clickFirstProducts();
    productDetailPage.clickAddToCartFromPDP();
    homePage.clickCartIcon();
    cartPage.clickPayButton();
    cartPage.loginCarrito();
    cartPage.clickVerDetalles();
    cartPage.validarSubtotalCarrito();
    //cartPage.validarCostoEnvioCarrito();
    cy.timeSince('Entrada','Finalizacion de la prueba')
    //cy.log(cy.checkA11y())

  })

  it('Agregar al carrito, login y cambiar metodo de pago', () => {
    homePage.typeInSearch("cama");
    homePage.clickInSearch();
    productListingPage.clickFirstProducts();
    productDetailPage.clickAddToCartFromPDP();
    homePage.clickCartIcon();
    cartPage.clickPayButton();
    cartPage.loginCarrito();
    cartPage.clickOpcionOneClick();
    cartPage.clickOpcionWebPay();
    cartPage.clickOpcionMercadoPago();
    cy.timeSince('Entrada','Finalizacion de la prueba')
  })

  it('Agregar al carrito, login y cambiar metodo envio', () => {
    homePage.typeInSearch("cama");
    homePage.clickInSearch();
    productListingPage.clickFirstProducts();
    productDetailPage.clickAddToCartFromPDP();
    homePage.clickCartIcon();
    cartPage.clickPayButton();
    cartPage.loginCarrito();
    cartPage.clickOpcionDespachoDomicilio();
    cartPage.clickOpcionRetiroTienda();
    cartPage.clickOpcionPuntoRetiro();
    cy.timeSince('Entrada','Finalizacion de la prueba')
  })

  it('Agregar al carrito, login y añadir direccion', () => {
    homePage.typeInSearch("cama");
    homePage.clickInSearch();
    productListingPage.clickFirstProducts();
    productDetailPage.clickAddToCartFromPDP();
    homePage.clickCartIcon();
    cartPage.clickPayButton();
    cartPage.loginCarrito();
    cartPage.clickAddAdress();
    cartPage.fillAddressInfo();
    cartPage.clickSaveAddressButton();
    cy.timeSince('Entrada','Finalizacion de la prueba')
  })
  
})