import { Component } from "../common/Component.js"
import { CartItem } from "./CartItem.js"

export class CartList extends Component {
  constructor(props) {
    super(props)
    this.state = { cart: this.props.cartContext.getCart() }
    this.container = null
    this.totalAmount = 0
    this.props.cartContext.subscribe((cart) => {
      this.state.cart = cart;
      this.render()
    })
  }

  mount(container) {
    this.container = container
    this.render()
  }

  render() {
    if (!this.container) return

    this.container.innerHTML = ''

    if (this.state.cart.length === 0) {
      this.container.innerHTML = `<p>Shopping Cart Empty 🛒</p>`
    } else {
      const totalAmount = this.state.cart.reduce((total, product) => {
        return total + (product.price * product.quantity)
      }, 0)
      this.container.innerHTML = `
      <div class="cart-header">
        <h3>MY CART</h3>
        <h4>Total Items: ${this.state.cart.length}</h4>
        <h4>Total Amount: ${parseFloat(totalAmount).toFixed(2)}</h4>
      </div>
      
      `
    }

    this.state.cart.forEach((product) => {
      const cartItem = new CartItem({ product, cartContext: this.props.cartContext })
      this.container.appendChild(cartItem.render())
    })
  }
}
