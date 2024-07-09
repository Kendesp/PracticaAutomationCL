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


          
          getDeskSpaces : () => cy.get('div[class="p-1.5 px-4 lg:px-0 flex gap-8 overflow-x-auto lg:overflow-x-visible lg:justify-evenly"]').find('button').then(spaces =>{
            cy.wrap(spaces).eq(0)
            }),
          getMeetingRoompaces : () => cy.get('div[class="p-1.5 px-4 lg:px-0 flex gap-8 overflow-x-auto lg:overflow-x-visible lg:justify-evenly"]').find('button').then(spaces =>{
            cy.wrap(spaces).eq(1)
            }),
          getEventSpace: () => cy.get('div[class="p-1.5 px-4 lg:px-0 flex gap-8 overflow-x-auto lg:overflow-x-visible lg:justify-evenly"]').find('button').then(spaces =>{
            cy.wrap(spaces).eq(2)
            }),
          getOfficeSpace: () => cy.get('div[class="p-1.5 px-4 lg:px-0 flex gap-8 overflow-x-auto lg:overflow-x-visible lg:justify-evenly"]').find('button').then(spaces =>{
            cy.wrap(spaces).eq(3)
            }),  
          getSuiteSpace: () => cy.get('div[class="p-1.5 px-4 lg:px-0 flex gap-8 overflow-x-auto lg:overflow-x-visible lg:justify-evenly"]').find('button').then(spaces =>{
            cy.wrap(spaces).eq(4)
            }), 
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
      this.elements.getEmailRegister().type('kendry6@test.com',{force: true})
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
    
    


 }

  module.exports = new homePage();