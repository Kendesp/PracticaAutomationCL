class cartPage {
  
    elements = {

          addMoreItems : () => cy.get('div[class="QuantitySelector_pdp-quantity__f_cIy pdp-qty"]').find('button[aria-label="Add"]').last(),
          payButton : () => cy.get('button[class="Button_root__mZAHs Button_primary__9hYjw btn-primary w-full"]'),
          getAddAddressButton : () => cy.get('button[class="ShippingMethodsForm_add-address__Bpqoz"]'),
          getLoginButton: () => cy.get('button[type="submit"]').find('span').contains('Inicia Sesión'),
          getEmailRegister: () => cy.get('#email'),
          getPassRegister: () => cy.get('#password'),
          getFNameRegister: () => cy.get('#firstname'),
          getLNameRegister: () => cy.get('#lastname'),
          getPhoneRegister: () => cy.get('#telephone'),
          getRutRegister: () => cy.get('#rut'),
          getStreet1: () => cy.get('#street1'),
          getStreet2: () => cy.get('#street2'),
          getStreet3: () => cy.get('#street3'),
          getSelectRegion: () => cy.get('#select-region'),
          getSelectComuna: () => cy.get('#select-comuna'),
          saveAddressButton : () => cy.get('button[type="submit"]').find('span').contains('Guardar dirección'),
          selectDespachoADomicilio: () => cy.get('div[class="Checkout_tab__AafbH"]').find('button').then(opciones =>{
            cy.wrap(opciones).eq(0)
          }),
          selectRetiroTienda: () => cy.get('div[class="Checkout_tab__AafbH"]').find('button').then(opciones =>{
            cy.wrap(opciones).eq(1)
          }),
          selectPuntoRetiro: () => cy.get('div[class="Checkout_tab__AafbH"]').find('button').then(opciones =>{
            cy.wrap(opciones).eq(2)
          }),

    }

    clickAddMoreItems(){
      this.elements.addMoreItems().click({force:true})
    }

    clickPayButton(){
      this.elements.payButton().click({force:true})
    }

    loginCarrito(){
      this.elements.getEmailRegister().type('kendry9@test.com',{force: true})
      cy.wait(3000)
      this.elements.getPassRegister().type('Admin1234!')
      cy.wait(3000)
      this.elements.getLoginButton().click({force: true})
    }

    clickAddAdress(){
      cy.wait(3000)
      this.elements.getAddAddressButton().click()
      cy.wait(3000)
    }

    fillAddressInfo(){

      this.elements.getFNameRegister().type('kendry',{force: true})
      //cy.wait(3000)
      this.elements.getLNameRegister().type('espinosa',{force: true})
      //cy.wait(3000)
      this.elements.getPhoneRegister().type('782228200',{force: true})
      //
      this.elements.getStreet1().type('Calle principal',{force: true})
      this.elements.getStreet2().type('2',{force: true})
      this.elements.getStreet3().type('Calle 3',{force: true})
      this.elements.getSelectRegion().select('ATACAMA')
      cy.wait(3000)
      this.elements.getSelectComuna().select('COPIAPO')
    }

    clickSaveAddressButton(){
      this.elements.saveAddressButton().click({force:true})
    }

    clickOpcionDespachoDomicilio(){
      this.elements.selectDespachoADomicilio().click({force:true})
    }

    clickOpcionRetiroTienda(){
      this.elements.selectRetiroTienda().click({force:true})
    }

    clickOpcionPuntoRetiro(){
      this.elements.selectPuntoRetiro().click({force:true})
    }

 }

  module.exports = new cartPage();