class cartPage {
  
    elements = {

          addMoreItems : () => cy.get('div[class="QuantitySelector_pdp-quantity__f_cIy pdp-qty"]', { timeout: 30000 }).find('button[aria-label="Add"]').last(),
          payButton : () => cy.get('button[class="Button_root__mZAHs Button_primary__9hYjw btn-primary w-full"]', { timeout: 30000 }),
          getAddAddressButton : () => cy.get('button[class="ShippingMethodsForm_add-address__Bpqoz"]', { timeout: 30000 }),
          getLoginButton: () => cy.get('button[type="submit"]', { timeout: 30000 }).find('span').contains('Inicia Sesión'),
          getEmailRegister: () => cy.get('#email', { timeout: 30000 }),
          getPassRegister: () => cy.get('#password', { timeout: 30000 }),
          getFNameRegister: () => cy.get('#firstname', { timeout: 30000 }),
          getLNameRegister: () => cy.get('#lastname', { timeout: 30000 }),
          getPhoneRegister: () => cy.get('#telephone', { timeout: 30000 }),
          getRutRegister: () => cy.get('#rut', { timeout: 30000 }),
          getStreet1: () => cy.get('#street1', { timeout: 30000 }),
          getStreet2: () => cy.get('#street2', { timeout: 30000 }),
          getStreet3: () => cy.get('#street3', { timeout: 30000 }),
          getSelectRegion: () => cy.get('#select-region', { timeout: 30000 }),
          getSelectComuna: () => cy.get('#select-comuna', { timeout: 30000 }),
          saveAddressButton : () => cy.get('button[type="submit"]', { timeout: 30000 }).find('span').contains('Guardar dirección'),
          selectDespachoADomicilio: () => cy.get('div[class="Checkout_tab__AafbH"]', { timeout: 30000 }).find('button').then(opciones =>{
            cy.wrap(opciones).eq(0)
          }),
          selectRetiroTienda: () => cy.get('div[class="Checkout_tab__AafbH"]', { timeout: 30000 }).find('button').then(opciones =>{
            cy.wrap(opciones).eq(1)
          }),
          selectPuntoRetiro: () => cy.get('div[class="Checkout_tab__AafbH"]', { timeout: 30000 }).find('button').then(opciones =>{
            cy.wrap(opciones).eq(2)
          }),
          selectOneClick: () => cy.get('div[class="Checkout_payment-methods__KKfvS"]', { timeout: 30000 }).find('input').then(opcionesDePago =>{
            cy.wrap(opcionesDePago).eq(0)
          }),
          selectWebPay: () => cy.get('div[class="Checkout_payment-methods__KKfvS"]', { timeout: 30000 }).find('input').then(opcionesDePago =>{
            cy.wrap(opcionesDePago).eq(1)
          }),
          selectMercadoPago: () => cy.get('div[class="Checkout_payment-methods__KKfvS"]', { timeout: 30000 }).find('input').then(opcionesDePago =>{
            cy.wrap(opcionesDePago).eq(2)
          }),
          getBotonVerDetalles : () => cy.get('div[class="Checkout_minicart-item-totals-container__oQMEu"]', { timeout: 30000 }).find('button').contains('Ver detalles'),
          getDetallesCompraSubTotal : () => cy.get('ul[class="border-t border-accents-3"]', { timeout: 30000 }).find('li').contains('Subtotal'),
          getDetallesCompraEnvio : () => cy.get('ul[class="border-t border-accents-3"]', { timeout: 30000 }).find('li').find('span').contains('Costo de Envío'),
          
    }

    clickAddMoreItems(){
      this.elements.addMoreItems().click({force:true})
    }

    clickPayButton(){
      this.elements.payButton().click({force:true})
    }

    loginCarrito(){
      this.elements.getEmailRegister().type('kendry9@test.com',{force: true})
      cy.wait(5000)
      this.elements.getPassRegister().type('Admin1234!')
      cy.wait(5000)
      this.elements.getLoginButton().click({force: true})
    }

    clickAddAdress(){
      cy.wait(3000)
      this.elements.getAddAddressButton().click()
      cy.wait(3000)
    }

    fillAddressInfo(){
      cy.wait(5000)
      this.elements.getFNameRegister().type('kendry',{force: true})
      cy.wait(5000)
      this.elements.getLNameRegister().type('espinosa',{force: true})
      cy.wait(5000)
      this.elements.getPhoneRegister().type('782228200',{force: true})
      cy.wait(5000)
      this.elements.getStreet1().type('Calle principal',{force: true})
      cy.wait(2000)
      this.elements.getStreet2().type('2',{force: true})
      cy.wait(2000)
      this.elements.getStreet3().type('Calle 3',{force: true})
      cy.wait(2000)
      this.elements.getSelectRegion().select('ATACAMA')
      cy.wait(5000)
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

    clickOpcionOneClick(){
      this.elements.selectOneClick().click({force:true})
    }

    clickOpcionWebPay(){
      this.elements.selectWebPay().click({force:true})
    }

    clickOpcionMercadoPago(){
      this.elements.selectMercadoPago().click({force:true})
    }

    clickVerDetalles(){
      this.elements.getBotonVerDetalles().click({force:true})
    }

    validarSubtotalCarrito(){
      this.elements.getDetallesCompraSubTotal().next()
    }

    validarCostoEnvioCarrito(){
      this.elements.getDetallesCompraEnvio().next()
    }

 }

  module.exports = new cartPage();