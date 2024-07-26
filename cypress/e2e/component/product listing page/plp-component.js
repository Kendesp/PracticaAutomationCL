class productListingPage {
  
    elements = {

          getPriceFromCard : () => cy.get('div[class="product-price productsearchproduct"]', { timeout: 30000 }).find('span[class="ProductPrice_subtotal-price__reh2h"]'),
          scrollDown: () => cy.scrollTo('bottom', { duration: 3000 }),
          getFavoriteIconFromPLP: () => cy.get('div[class="ProductTile_add-to-wishlist-btn__YYNeE"]', { timeout: 30000 }),
          verifyFavoritesAreSaved: () => cy.get('div[class="product-price wishlist-product-price"]', { timeout: 30000 }).should('be.visible'),
          openAnyProduct: () => cy.get('div[class="ProductTile_productitem-block___1J_0 show"]', { timeout: 30000 }).find('div[class="ProductTile_productimage-block__CM6xY"]').first(),

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

    clickFirstProducts(){
      this.elements.openAnyProduct().click({multiple:true})
    }

 }

  module.exports = new productListingPage();