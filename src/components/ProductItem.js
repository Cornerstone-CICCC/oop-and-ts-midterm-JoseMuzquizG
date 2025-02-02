import { Component } from "../common/Component.js";

export class ProductItem extends Component {
  constructor(props) {
    super(props)
    this.handleAddToCart = this.handleAddToCart.bind(this)
  }

  handleAddToCart() {
    this.props.cartContext.addProduct(this.props.product)
  }

  render() {
    const product = document.createElement('li')
    product.className = "product-item"
    product.innerHTML = `
    <div class="product-item-upper">
      <img src="${this.props.product.image}" alt="Product Image"">
    </div>
    <div class="product-item-lower">
      <div class="product-item-title">
        <h3>${this.props.product.title}</h3>
      </div>
      <div class ="product-item-rating">
        <p>⭐${this.props.product.rating.rate}/5 (${this.props.product.rating.count} reviews)</p>
      </div>
      <div class="product-item-price">
        <h3>$${this.props.product.price}</h3>
      </div>
      <button class="add-to-cart">Buy Item</button>
    </div>
    `
    return product
  }
}