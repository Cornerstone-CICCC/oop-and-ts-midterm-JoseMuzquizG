import { Component } from "../common/Component.js"

export class CartItem extends Component {
    constructor(props) {
        super(props)
        this.state = { quantity: props.product.quantity }

        this.handleIncrease = this.handleIncrease.bind(this)
        this.handleDecrease = this.handleDecrease.bind(this)
        this.handleRemove = this.handleRemove.bind(this)

        this.props.cartContext.subscribe(cart => {
            const found = cart.find(item => item.id === this.props.product.id)
            if (found) {
                this.state.quantity = found.quantity
                this.updateQuantityDisplay()
            }
        })
    }

    handleIncrease() {
        this.props.cartContext.updateQuantity(this.props.product.id, this.state.quantity + 1)
    }

    handleDecrease() {
        this.props.cartContext.updateQuantity(this.props.product.id, this.state.quantity - 1)
    }

    handleRemove() {
        this.props.cartContext.removeProduct(this.props.product.id)
    }

    updateQuantityDisplay() {
        if (this.element) {
            this.element.querySelector(".quantity").textContent = this.state.quantity
        }
    }

    render() {
        const cartProduct = document.createElement("div")
        cartProduct.className = "cart-product-card"
        cartProduct.innerHTML = `
            <div class="cart-product-card-image">
                <img src="${this.props.product.image}" alt="Product Image">
            </div>
            <div class="cart-product-card-info">
              <div class="price">
                <p>$${this.props.product.price.toFixed(2)} (ea)</p>
              </div>
              <div class="quant-btns">
                <div class="quant-inc-dec">
                  <button class="decrease"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M160-440v-80h640v80H160Z"/></svg></button>
                  <p class="quantity">${this.state.quantity}</p>
                  <button class="increase"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M440-440H200v-80h240v-240h80v240h240v80H520v240h-80v-240Z"/></svg></button>
                </div>
                <div class="delete-btn">
                  <button class="remove"><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#FFFFFF"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></button>
                </div>
              </div>
            </div>
        `


        this.element = cartProduct;


        cartProduct.querySelector(".increase").addEventListener("click", this.handleIncrease)
        cartProduct.querySelector(".decrease").addEventListener("click", this.handleDecrease)
        cartProduct.querySelector(".remove").addEventListener("click", this.handleRemove)

        return cartProduct
    }
}
