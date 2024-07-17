class productDetailPage {
  
    elements = {

          getAddToCartPDP : () => cy.get('div[class="PDP_buttons-container__lrhMg"]').find('button[aria-label="Add to Cart"]'),
          

    }

    clickAddToCartFromPDP(){
      this.elements.getAddToCartPDP().click({force:true})
    }



 }

  module.exports = new productDetailPage();