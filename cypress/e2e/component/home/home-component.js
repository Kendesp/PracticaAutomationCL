class homePage {

  
  
    elements = {

          getProfileButton : () => cy.get('li[class="UserNav_item__E4TKF UserNav_itemReset__gsEOT"]', { timeout: 30000 }).find('button[class="Button_root__mZAHs Button_link__DdCCk btn-link UserNav_avatarButton__Zw5Lk"]').should('have.attr','aria-label','Menu'),
          getLoginModal: () => cy.get('div[class="Forms_root__kckWm"]', { timeout: 30000 }),
          getRegisterLink: () => cy.get('div[class="Auth_form-below-options__eaZ_Z"]', { timeout: 30000 }).find('span').contains('regístrate aquí'),
          getEmailRegister: () => cy.get('#email', { timeout: 30000 }),
          getFNameRegister: () => cy.get('#firstName', { timeout: 30000 }),
          getLNameRegister: () => cy.get('#lastName', { timeout: 30000 }),
          getPhoneRegister: () => cy.get('#phone', { timeout: 30000 }),
          getRutRegister: () => cy.get('#rut', { timeout: 30000 }),
          getBirthRegister: () => cy.get('#birthday', { timeout: 30000 }),
          getPassRegister: () => cy.get('#password', { timeout: 30000 }),
          getConfirmPassRegister: () => cy.get('#confirmPassword', { timeout: 30000 }),
          getAcceptTermsRegister: () => cy.get('#acceptTerms', { timeout: 30000 }),
          getCartIcon: () => cy.get('div[class="relative flex items-center justify-center"]', { timeout: 30000 }),
          getMobileSearch: () => cy.get('div[class="Navbar_mobile-search-icon__BfW6v"]', { timeout: 30000 }).find('input'),
          getSearchIcon: () => cy.get('div[class="Navbar_mobile-search-icon__BfW6v"]', { timeout: 30000 }).find('button').first(),
          getRegisterButton: () => cy.get('button[type="submit"]', { timeout: 30000 }).find('span').contains('Regístrate aquí'),
          getCerrarLoginModal: () => cy.get('div[class="Modal_modal-content__unaEP modal-content"]', { timeout: 30000 }).find('button[class="Button_root__mZAHs Button_link__DdCCk btn-link Modal_close-panel__9W2lq close-panel"]').should('have.attr','aria-label','Cerrar panel'),
          getRegistroExitoso: () => cy.get('div[class="Toast_toast-text__E4pea toast-text"]', { timeout: 30000 }).contains('Gracias por registrarte'),
          getProfileButtonRegistered : () => cy.get('li[class="UserNav_item__E4TKF UserNav_itemReset__gsEOT"]').find('button[class="DropdownMenu_avatarButton__qq1X_"]', { timeout: 30000 }).should('have.attr','aria-label','auth|Menu'),
          getProfileButtonRegisteredHelloMessage : () => cy.get('ul[class="DropdownMenu_dropdownMenu__2ewYO animate-fade-in-up"]', { timeout: 30000 }).find('li[class="DropdownMenu_welcome-message__BAhsy"]'),
          getLoginButton: () => cy.get('button[type="submit"]', { timeout: 30000 }).find('span').contains('Ingresar'),
          getWishlistButton: () => cy.get('div[class="MobileMegaMenu_megamenu-container-bottom__0MVY0"]', { timeout: 30000 }).find('button').contains('Mi Lista de Deseos'),
          getBurgermenu: () => cy.get('#navbar', { timeout: 30000 }).find('div').then(navbar =>{
            cy.wrap(navbar).eq(2)
          }),
          getCategoryEspacioCasa: () => cy.get('div[class="MobileMegaMenu_menu-item__3Neox"]', { timeout: 30000 }).find('span').contains('ESPACIO DE LA CASA'),
          getSubCategoryEspacioCasaMueble: () => cy.get('div[class="columnGroup_root__UEATy"]', { timeout: 30000 }).find('div').then(subcategoria =>{
            cy.wrap(subcategoria).eq(2).find('h5').contains('MUEBLES')
          }),
          getSubCategoryEspacioCasaDormitorio: () => cy.get('div[class="columnGroup_root__UEATy"]', { timeout: 30000 }).find('div').then(subcategoria =>{
            cy.wrap(subcategoria).eq(3).find('h5').contains('DORMITORIO')
          }),
          getSubCategoryEspacioCasaSalaLiving: () => cy.get('div[class="columnGroup_root__UEATy"]', { timeout: 30000 }).find('div').then(subcategoria =>{
            cy.wrap(subcategoria).eq(5).find('h5').contains('LIVING Y SALA DE ESTAR')
          }),
          getSubCategoryEspacioCasaBodegaCloset: () => cy.get('div[class="columnGroup_root__UEATy"]', { timeout: 30000 }).find('div').then(subcategoria =>{
            cy.wrap(subcategoria).eq(8).find('h5').contains('BODEGA Y CLÓSET')
          }),
          getSubCategoryEspacioCasaCocina: () => cy.get('div[class="columnGroup_root__UEATy"]', { timeout: 30000 }).find('div').then(subcategoria =>{
            cy.wrap(subcategoria).eq(10).find('h5').contains('COCINA')
          }),
          getSubCategoryEspacioCasaComedor: () => cy.get('div[class="columnGroup_root__UEATy"]', { timeout: 30000 }).find('div').then(subcategoria =>{
            cy.wrap(subcategoria).eq(10).find('h5').contains('COMEDOR')
          }),
          getSubCategoryEspacioCasaLavanderia: () => cy.get('div[class="columnGroup_root__UEATy"]', { timeout: 30000 }).find('div').then(subcategoria =>{
            cy.wrap(subcategoria).eq(15).find('h5').contains('LAVANDERÍA')
          }),
          getSubCategoryEspacioCasaBano: () => cy.get('div[class="columnGroup_root__UEATy"]', { timeout: 30000 }).find('div').then(subcategoria =>{
            cy.wrap(subcategoria).eq(15).find('h5').contains('BAÑO')
          }),
          getSubCategoryEspacioCasaNinosBebe: () => cy.get('div[class="columnGroup_root__UEATy"]', { timeout: 30000 }).find('div').then(subcategoria =>{
            cy.wrap(subcategoria).eq(20).find('h5').contains('NIÑOS Y BEBÉ')
          }),
          getSubCategoryEspacioCasaEscritorioPapel: () => cy.get('div[class="columnGroup_root__UEATy"]', { timeout: 30000 }).find('div').then(subcategoria =>{
            cy.wrap(subcategoria).eq(20).find('h5').contains('ESCRITORIO Y PAPELERÍA')
          }),
          getSubCategoryEspacioCasaJardin: () => cy.get('div[class="columnGroup_root__UEATy"]', { timeout: 30000 }).find('div').then(subcategoria =>{
            cy.wrap(subcategoria).eq(25).find('h5').contains('JARDÍN')
          }),
          getSubCategoryEspacioCasaMascotas: () => cy.get('div[class="columnGroup_root__UEATy"]', { timeout: 30000 }).find('div').then(subcategoria =>{
            cy.wrap(subcategoria).eq(25).find('h5').contains('MASCOTAS')
          }),
          getSubCategoryEspacioCasaEscolares: () => cy.get('div[class="columnGroup_root__UEATy"]', { timeout: 30000 }).find('div').then(subcategoria =>{
            cy.wrap(subcategoria).eq(30).find('h5').contains('ESCOLARES')
          }),
          getSubCategoryEspacioCasaAccesoriosPersonales: () => cy.get('div[class="columnGroup_root__UEATy"]', { timeout: 30000 }).find('div').then(subcategoria =>{
            cy.wrap(subcategoria).eq(30).find('h5').contains('ACCESORIOS PERSONALES')
          }),
          getAnySubCategoryEspacioCasa: (subcategoria) => cy.get('div[class="columnGroup_root__UEATy"]', { timeout: 30000 }).find('div').find('h5').contains(subcategoria),

          getCategoryProductos: () => cy.get('div[class="MobileMegaMenu_menu-item__3Neox"]', { timeout: 30000 }).find('span').contains('PRODUCTOS'),
          getAnySubCategoryProductos: (subcategoria) => cy.get('div[class="column_root__siq0I pagebuilder-column"]', { timeout: 30000 }).find('div').find('a').contains(subcategoria),
          getCategoryNuevos: () => cy.get('div[class="MobileMegaMenu_menu-item__3Neox"]', { timeout: 30000 }).find('span').contains('Nuevos'),
          getCategoryMueble: () => cy.get('div[class="MobileMegaMenu_menu-item__3Neox"]', { timeout: 30000 }).find('span').find('span').contains('Muebles'),
          getCategoryNinos: () => cy.get('div[class="MobileMegaMenu_menu-item__3Neox"]', { timeout: 30000 }).find('span').find('span').contains('Niñoideas'),


    }

    clickProfileIcon(){
      this.elements.getProfileButton().click({force:true})
    }

    getLoginModal(){
      this.elements.getLoginModal().should('be.visible')
    }

    clickRegister(){
      this.elements.getRegisterLink().click()
    }

    fillRegisterForm(){
   
      cy.wait(7000)
      this.elements.getEmailRegister().type('kendry9@test.com',{force: true})
      cy.wait(3000)
      this.elements.getFNameRegister().type('kendry1',{force: true})
      cy.wait(3000)
      this.elements.getLNameRegister().type('espinosa1',{force: true})
      cy.wait(3000)
      this.elements.getPhoneRegister().type('782228200',{force: true})
      cy.wait(3000)
      this.elements.getRutRegister().type('3,036,547-K',{force: true})
      cy.wait(3000)
      this.elements.getBirthRegister().type('2309',{force: true})
      cy.wait(3000)
      this.elements.getPassRegister().type('Admin1234!')
      cy.wait(3000)
      this.elements.getConfirmPassRegister().type('Admin1234!')
      cy.wait(3000)
      this.elements.getAcceptTermsRegister().click({force: true})
      cy.wait(3000)
      this.elements.getRegisterButton().click({force: true})
      cy.wait(7000)
      this.elements.getRegistroExitoso().should('be.visible')
      //this.elements.getCerrarLoginModal().click({force: true})
      this.elements.getProfileButtonRegistered().click({force:true})
      this.elements.getProfileButtonRegisteredHelloMessage().contains('¡Hola')

    }
    
    fillLoginForm(){
   
      cy.wait(7000)
      this.elements.getEmailRegister().type('kendry9@test.com',{force: true})
      cy.wait(3000)
      this.elements.getPassRegister().type('Admin1234!')
      cy.wait(3000)
      this.elements.getLoginButton().click({force: true})
      cy.wait(7000)
      this.elements.getProfileButtonRegistered().click({force:true})
      cy.wait(3000)
      this.elements.getProfileButtonRegisteredHelloMessage().contains('¡Hola')
    }

    clickBurgerMenu(){
      cy.wait(2000)
      this.elements.getBurgermenu().click({force: true })
    }

    clickCategoriaEspacioCasa(){
      cy.wait(2000),
      this.elements.getCategoryEspacioCasa().click({force: true })
    }

    clickSubCategoriaMueblesEspacioCasa(){
      cy.wait(2000),
      this.elements.getSubCategoryEspacioCasaMueble().click({force: true })
    }
    clickSubCategoriaDormitorioEspacioCasa(){
      cy.wait(2000),
      this.elements.getSubCategoryEspacioCasaDormitorio().click({force: true })
    }
    clickSubCategoriaSalaLivinEspacioCasa(){
      cy.wait(2000),
      this.elements.getSubCategoryEspacioCasaSalaLiving().click({force: true })
    }
    clickSubCategoriaBodegaClosetEspacioCasa(){
      cy.wait(2000),
      this.elements.getSubCategoryEspacioCasaBodegaCloset().click({force: true })
    }
    clickSubCategoriaCocinaEspacioCasa(){
      cy.wait(2000),
      this.elements.getSubCategoryEspacioCasaCocina().click({force: true })
    }
    clickSubCategoriaComedorEspacioCasa(){
      cy.wait(2000),
      this.elements.getSubCategoryEspacioCasaComedor().click({force: true })
    }
    clickSubCategoriaLavanderiaEspacioCasa(){
      cy.wait(2000),
      this.elements.getSubCategoryEspacioCasaLavanderia().click({force: true })
    }
    clickSubCategoriaBanoEspacioCasa(){
      cy.wait(2000),
      this.elements.getSubCategoryEspacioCasaBano().click({force: true })
    }
    clickSubCategoriaNinoBebeEspacioCasa(){
      cy.wait(2000),
      this.elements.getSubCategoryEspacioCasaNinosBebe().click({force: true })
    }
    clickSubCategoriaEscritorioPapelEspacioCasa(){
      cy.wait(2000),
      this.elements.getSubCategoryEspacioCasaEscritorioPapel().click({force: true })
    }
    clickSubCategoriaJardinEspacioCasa(){
      cy.wait(2000),
      this.elements.getSubCategoryEspacioCasaJardin().click({force: true })
    }
    clickSubCategoriaMascotaEspacioCasa(){
      cy.wait(2000),
      this.elements.getSubCategoryEspacioCasaMascotas().click({force: true })
    }
    clickSubCategoriaEscolaresEspacioCasa(){
      cy.wait(2000),
      this.elements.getSubCategoryEspacioCasaEscolares().click({force: true })
    }
    clickSubCategoriaAccPersonalEspacioCasa(){
      cy.wait(2000),
      this.elements.getSubCategoryEspacioCasaAccesoriosPersonales().click({force: true })
    }
    clickAnySubCategoriaEspacioCasa(subcategoria){
      cy.wait(2000),
      this.elements.getAnySubCategoryEspacioCasa(subcategoria.toUpperCase()).click({force: true })
    }

    clickCategoriaProducto(){
      cy.wait(2000),
      this.elements.getCategoryProductos().click({force: true })
    }
    clickAnySubCategoriaProducto(subcategoria){
      cy.wait(2000),
      this.elements.getAnySubCategoryProductos(subcategoria).click({force: true })
    }

    clickCategoriaNuevos(){
      cy.wait(2000),
      this.elements.getCategoryNuevos().click({force: true })
    }

    clickCategoriaMuebles(){
      cy.wait(2000),
      this.elements.getCategoryMueble().click({force: true })
    }

    clickCategoriaNinos(){
      cy.wait(2000),
      this.elements.getCategoryNinos().click({force: true })
    }

    clickInSearch(){
      cy.wait(2000),
      this.elements.getSearchIcon().click({force: true })
    }
    typeInSearch(busqueda){
      cy.wait(2000),
      this.elements.getMobileSearch().type(busqueda,{force: true})
    }

    clickWishList(){
      this.elements.getWishlistButton().click({force: true })
    }

    clickCartIcon(){
      this.elements.getCartIcon().click({force: true })
    }

 }

  module.exports = new homePage();