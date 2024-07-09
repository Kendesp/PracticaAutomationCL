import homePage from '../component/home/home-component.js';

describe('Pagina de Inicio', () => {
  beforeEach(() => {
 
    cy.visit('/')
    cy.wait(5000)
  });


  it('Registrarse', () => {
    homePage.clickProfileIcon();
    homePage.getLoginModal();
    homePage.clickRegister();
    homePage.fillRegisterForm();
  })
})