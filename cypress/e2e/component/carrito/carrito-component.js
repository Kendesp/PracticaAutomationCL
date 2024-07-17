class cartPage {
  
    elements = {

          addMoreItems : () => cy.get('div[class="QuantitySelector_pdp-quantity__f_cIy pdp-qty"]').find('button[aria-label="Add"]').last(),
          payButton : () => cy.get('button[class="Button_root__mZAHs Button_primary__9hYjw btn-primary w-full"]')

    }

    clickAddMoreItems(){
      this.elements.addMoreItems().click({force:true})
    }

    clickPayButton(){
      this.elements.payButton().click({force:true})
    }

 }

  module.exports = new cartPage();