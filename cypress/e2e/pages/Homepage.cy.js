import homePage from '../component/home/home-component.js';

describe('Pagina de Inicio', () => {
  beforeEach(() => {
 
    cy.visit('/').timeMark('Entrada')
    cy.wait(5000)
    cy.injectAxe()
  });

  it('Click en Categoria Espacio de casa y una subcategoria', () => {
    homePage.clickBurgerMenu();
    homePage.clickCategoriaEspacioCasa();
    homePage.clickSubCategoriaMueblesEspacioCasa();
    cy.timeSince('Entrada','Finalizacion de la prueba')
    //cy.checkA11y()
  })

  it('Click en Categoria Espacio de casa y una subcategoria', () => {
    homePage.clickBurgerMenu();
    homePage.clickCategoriaEspacioCasa();
    homePage.clickSubCategoriaDormitorioEspacioCasa();
    cy.timeSince('Entrada','Finalizacion de la prueba')
    //cy.checkA11y()
  })

  it('Click en Categoria Espacio de casa y una subcategoria', () => {
    homePage.clickBurgerMenu();
    homePage.clickCategoriaEspacioCasa();
    homePage.clickSubCategoriaSalaLivinEspacioCasa();
    cy.timeSince('Entrada','Finalizacion de la prueba')
    //cy.checkA11y()
  })

  it('Hacer una busqueda', () => {
    homePage.typeInSearch("mmg");
    homePage.clickInSearch();
    cy.timeSince('Entrada','Finalizacion de la prueba')
    //cy.checkA11y()
  })


  it('Click en Categoria Espacio de casa y una subcategoria', () => {
    homePage.clickBurgerMenu();
    homePage.clickCategoriaEspacioCasa();
    homePage.clickAnySubCategoriaEspacioCasa("muebles");
    cy.timeSince('Entrada','Finalizacion de la prueba')
    //cy.checkA11y()
  })

  it('Click en Categoria Productos y una subcategoria', () => {
    homePage.clickBurgerMenu();
    homePage.clickCategoriaProducto();
    homePage.clickAnySubCategoriaProducto("Ofertas");
    cy.timeSince('Entrada','Finalizacion de la prueba')
    //cy.checkA11y()
  })




  it('Click en Categoria Productos y una subcategoria', () => {
    homePage.clickBurgerMenu();
    homePage.clickCategoriaProducto();
    cy.timeSince('Entrada','Finalizacion de la prueba')
  })

  it('Click en Categoria Nuevos', () => {
    homePage.clickBurgerMenu();
    homePage.clickCategoriaNuevos();
    cy.timeSince('Entrada','Finalizacion de la prueba')
  })

  it('Click en Categoria Muebles', () => {
    homePage.clickBurgerMenu();
    homePage.clickCategoriaMuebles();
    cy.timeSince('Entrada','Finalizacion de la prueba')
  })

  it('Click en Categoria Ninos', () => {
    homePage.clickBurgerMenu();
    homePage.clickCategoriaNinos();
    cy.timeSince('Entrada','Finalizacion de la prueba')
  })

 

/*
  it('Registrarse', () => {
    homePage.clickProfileIcon();
    homePage.getLoginModal();
    homePage.clickRegister();
    homePage.fillRegisterForm();
    cy.timeSince('Entrada','Finalizacion de la prueba')
  })

  it('Login', () => {
    homePage.clickProfileIcon();
    homePage.getLoginModal();
    homePage.fillLoginForm();
    cy.timeSince('Entrada','Finalizacion de la prueba')
  })

  */
})