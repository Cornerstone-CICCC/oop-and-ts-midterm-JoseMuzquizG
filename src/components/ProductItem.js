import { Component } from "../common/Component.js"

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
        <h3>$${parseFloat(this.props.product.price).toFixed(2)}</h3>
      </div>
      <button class="add-to-cart">Add to cart</button>
    </div>
    `

    product.querySelector('.add-to-cart').addEventListener('click', this.handleAddToCart.bind(this))

    return product
  }
}