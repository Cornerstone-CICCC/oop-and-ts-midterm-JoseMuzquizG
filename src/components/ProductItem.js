import { Component } from "../common/Component.js";

export class ProductItem extends Component {
  constructor(props) {
    super(props)
    this.handleAddToCart.bind(this)
  }

  handleAddToCart() {
    this.props.cartContext.addProduct(this.props.product)
  }

  render() {
    
  }
}