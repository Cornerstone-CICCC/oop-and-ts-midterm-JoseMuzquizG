import { Component } from "../common/Component.js";

export class CartItem extends Component {
  render() {
    const cartProduct = document.createElement('div')
    cartProduct.className = 'cart-product-card'
    cartProduct.innerHTML = `
      <div class="cart-product-card-image">
      
      </div>
    `
  }
}