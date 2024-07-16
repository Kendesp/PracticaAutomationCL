class productListingPage {
  
    elements = {

          getPriceFromCard : () => cy.get('div[class="product-price productsearchproduct"]').find('span[class="ProductPrice_subtotal-price__reh2h"]'),
          scrollDown: () => cy.scrollTo('bottom', { duration: 3000 }),
          getFavoriteIconFromPLP: () => cy.get('div[class="ProductTile_add-to-wishlist-btn__YYNeE"]'),
          verifyFavoritesAreSaved: () => cy.get('div[class="product-price wishlist-product-price"]').should('be.visible'),
          

    }

    clickMultipleFavoriteFromPLP(){
      this.elements.getFavoriteIconFromPLP().click({multiple:true})
    }

    getPriceFromCard(){
      this.elements.getPriceFromCard().should('be.visible')
    }

    verifyFavoritesAreSaved(){
      this.elements.verifyFavoritesAreSaved()
    }

    scrollDown(){
      this.elements.scrollDown()
    }

 }

  module.exports = new productListingPage();