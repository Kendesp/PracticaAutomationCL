import homePage from '../component/home/home-component.js';

describe('Pagina de Inicio', () => {
  beforeEach(() => {
 
    cy.visit('/')
    cy.wait(5000)
  });
/*
  it('Click en Categoria Espacio de casa y una subcategoria', () => {
    homePage.clickBurgerMenu();
    homePage.clickCategoriaEspacioCasa();
    homePage.clickSubCategoriaMueblesEspacioCasa();
    cy.wait(3000)
  })

  it('Click en Categoria Espacio de casa y una subcategoria', () => {
    homePage.clickBurgerMenu();
    homePage.clickCategoriaEspacioCasa();
    homePage.clickSubCategoriaDormitorioEspacioCasa();
    cy.wait(3000)
  })

  it('Click en Categoria Espacio de casa y una subcategoria', () => {
    homePage.clickBurgerMenu();
    homePage.clickCategoriaEspacioCasa();
    homePage.clickSubCategoriaSalaLivinEspacioCasa();
    cy.wait(3000)
  })
*/
  it('Hacer una busqueda', () => {
    homePage.typeInSearch("mmg");
    homePage.clickInSearch();
    cy.wait(15000)
  })


  it('Click en Categoria Espacio de casa y una subcategoria', () => {
    homePage.clickBurgerMenu();
    homePage.clickCategoriaEspacioCasa();
    homePage.clickAnySubCategoriaEspacioCasa("muebles");
    cy.wait(5000)
  })

  it('Click en Categoria Productos y una subcategoria', () => {
    homePage.clickBurgerMenu();
    homePage.clickCategoriaProducto();
    homePage.clickAnySubCategoriaProducto("Ofertas");
    cy.wait(3000)
  })




  it('Click en Categoria Productos y una subcategoria', () => {
    homePage.clickBurgerMenu();
    homePage.clickCategoriaProducto();
  })

  it('Click en Categoria Nuevos', () => {
    homePage.clickBurgerMenu();
    homePage.clickCategoriaNuevos();
  })

  it('Click en Categoria Muebles', () => {
    homePage.clickBurgerMenu();
    homePage.clickCategoriaMuebles();
  })

  it('Click en Categoria Ninos', () => {
    homePage.clickBurgerMenu();
    homePage.clickCategoriaNinos();
  })

 

/*
  it('Registrarse', () => {
    homePage.clickProfileIcon();
    homePage.getLoginModal();
    homePage.clickRegister();
    homePage.fillRegisterForm();
  })

  it('Login', () => {
    homePage.clickProfileIcon();
    homePage.getLoginModal();
    homePage.fillLoginForm();
  })

  */
})