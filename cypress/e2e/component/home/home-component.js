class homePage {

    elements = {

          getProfileButton : () => cy.get('li[class="UserNav_item__E4TKF UserNav_itemReset__gsEOT"]').find('button[class="Button_root__mZAHs Button_link__DdCCk btn-link UserNav_avatarButton__Zw5Lk"]').should('have.attr','aria-label','Menu'),
          getLoginModal: () => cy.get('div[class="Forms_root__kckWm"]'),
          getRegisterLink: () => cy.get('div[class="Auth_form-below-options__eaZ_Z"]').find('span').contains('regístrate aquí'),
          getEmailRegister: () => cy.get('#email'),
          getFNameRegister: () => cy.get('#firstName'),
          getLNameRegister: () => cy.get('#lastName'),
          getPhoneRegister: () => cy.get('#phone'),
          getRutRegister: () => cy.get('#rut'),
          getBirthRegister: () => cy.get('#birthday'),
          getPassRegister: () => cy.get('#password'),
          getConfirmPassRegister: () => cy.get('#confirmPassword'),
          getAcceptTermsRegister: () => cy.get('#acceptTerms'),
          getRegisterButton: () => cy.get('button[type="submit"]').find('span').contains('Regístrate aquí'),
          getCerrarLoginModal: () => cy.get('div[class="Modal_modal-content__unaEP modal-content"]').find('button[class="Button_root__mZAHs Button_link__DdCCk btn-link Modal_close-panel__9W2lq close-panel"]').should('have.attr','aria-label','Cerrar panel'),
          getRegistroExitoso: () => cy.get('div[class="Toast_toast-text__E4pea toast-text"]').contains('Gracias por registrarte'),
          getProfileButtonRegistered : () => cy.get('li[class="UserNav_item__E4TKF UserNav_itemReset__gsEOT"]').find('button[class="DropdownMenu_avatarButton__qq1X_"]').should('have.attr','aria-label','auth|Menu'),
          getProfileButtonRegisteredHelloMessage : () => cy.get('ul[class="DropdownMenu_dropdownMenu__2ewYO animate-fade-in-up"]').find('li[class="DropdownMenu_welcome-message__BAhsy"]'),
          getLoginButton: () => cy.get('button[type="submit"]').find('span').contains('Ingresar'),
          getBurgermenu: () => cy.get('#navbar').find('div').then(navbar =>{
            cy.wrap(navbar).eq(2)
          }),
          getCategoryEspacioCasa: () => cy.get('div[class="MobileMegaMenu_menu-item__3Neox"]').find('span').contains('ESPACIO DE LA CASA'),
          getSubCategoryEspacioCasaMueble: () => cy.get('div[class="columnGroup_root__UEATy"]').find('div').then(subcategoria =>{
            cy.wrap(subcategoria).eq(2).find('h5').contains('MUEBLES')
          }),
          getSubCategoryEspacioCasaDormitorio: () => cy.get('div[class="columnGroup_root__UEATy"]').find('div').then(subcategoria =>{
            cy.wrap(subcategoria).eq(3).find('h5').contains('DORMITORIO')
          }),
          getSubCategoryEspacioCasaSalaLiving: () => cy.get('div[class="columnGroup_root__UEATy"]').find('div').then(subcategoria =>{
            cy.wrap(subcategoria).eq(5).find('h5').contains('LIVING Y SALA DE ESTAR')
          }),
          getSubCategoryEspacioCasaBodegaCloset: () => cy.get('div[class="columnGroup_root__UEATy"]').find('div').then(subcategoria =>{
            cy.wrap(subcategoria).eq(8).find('h5').contains('BODEGA Y CLÓSET')
          }),
          getSubCategoryEspacioCasaCocina: () => cy.get('div[class="columnGroup_root__UEATy"]').find('div').then(subcategoria =>{
            cy.wrap(subcategoria).eq(8).find('h5').contains('COCINA')
          }),
          getCategoryProductos: () => cy.get('div[class="MobileMegaMenu_menu-item__3Neox"]').find('span').contains('PRODUCTOS'),
          getCategoryNuevos: () => cy.get('div[class="MobileMegaMenu_menu-item__3Neox"]').find('span').contains('Nuevos'),
          getCategoryMueble: () => cy.get('div[class="MobileMegaMenu_menu-item__3Neox"]').find('span').find('span').contains('Muebles'),
          getCategoryNinos: () => cy.get('div[class="MobileMegaMenu_menu-item__3Neox"]').find('span').find('span').contains('Niñoideas'),


          getNumberOfResults: () => cy.get('div[class="mb-3 lg:mb-0 relative"]').find('p'),
          getInstantBookingToggle: () => cy.get('button[id="headlessui-switch-:Rb2sn6:"]'),
          getNoResults: () => cy.get('div[class="flex flex-col items-center lg:m-0 m-4"]').find('p'), 
          getCityDropDown: () => cy.get('button[id="headlessui-listbox-button-:Rcasn6:"]'),
          getCityDropdownList: () => cy.get('div[id="or-filter-section-region-dropdown-dialog"]'),
          getCityDropdownLosAngeles : () => cy.get('div[id="headlessui-dialog-:Rkasn6:').find('ul li').contains('Los Angeles'),
          getCityDropdownWashingtonDC : () => cy.get('div[id="headlessui-dialog-:Rkasn6:').find('ul li').contains('Washington DC'),
          getCityDropdownBoston : () => cy.get('div[id="headlessui-dialog-:Rkasn6:').find('ul li').contains('Boston'),
          getCityDropdownChicago : () => cy.get('div[id="headlessui-dialog-:Rkasn6:').find('ul li').contains('Chicago'),
          getCityDropdownSanFrancisco : () => cy.get('div[id="headlessui-dialog-:Rkasn6:').find('ul li').contains('San Francisco'),
          getCityDropdownBrasilia : () => cy.get('div[id="headlessui-dialog-:Rkasn6:').find('ul li').contains('Brasilia'),
          getBuildingDropDown: () => cy.get('button[id="headlessui-listbox-button-:Rcisn6:"]'),
          getBuildingDropdownList: () => cy.get('div[id="headlessui-dialog-:Rkisn6:"]') 
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
      //cy.wait(3000)
      this.elements.getFNameRegister().type('kendry1',{force: true})
      //cy.wait(3000)
      this.elements.getLNameRegister().type('espinosa1',{force: true})
      //cy.wait(3000)
      this.elements.getPhoneRegister().type('782228200',{force: true})
      //cy.wait(3000)
      this.elements.getRutRegister().type('3,036,547-K',{force: true})
      //cy.wait(3000)
      this.elements.getBirthRegister().type('2309',{force: true})
      this.elements.getPassRegister().type('Admin1234!')
      this.elements.getConfirmPassRegister().type('Admin1234!')
      this.elements.getAcceptTermsRegister().click({force: true})
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
      this.elements.getPassRegister().type('Admin1234!')
      this.elements.getLoginButton().click({force: true})
      cy.wait(7000)
      this.elements.getProfileButtonRegistered().click({force:true})
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

    clickCategoriaProducto(){
      cy.wait(2000),
      this.elements.getCategoryProductos().click({force: true })
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

 }

  module.exports = new homePage();