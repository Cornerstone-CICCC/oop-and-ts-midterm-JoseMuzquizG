import { Component } from "../common/Component.js"
import { Header } from "./Header.js"
import { Footer } from "./Footer.js"
import { ProductList } from "./ProductList.js"
import { CartList } from "./CartList.js"


export class App extends Component {
  render() {
    const appContainer = document.createElement('div')
    appContainer.className = 'container'
    appContainer.innerHTML = `
      <header></header>
      <main>
        <section class= "shop"></section>
        <section class= "cart"></section>
      </main>
      <footer></footer>
    `
    const header = new Header({
      cartContext: this.props.cartContext,
      siteTitle: "Shop That Understands Me",
      desc: "The shop that really knows what I want"
    }).render()
    const shopContent = new ProductList({cartContext: this.props.cartContext})
    const cartList = new CartList({ cartContext: this.props.cartContext })
    const footer = new Footer({cartContext: this.props.cartContext}).render()

    appContainer.querySelector('header').appendChild(header)
    appContainer.querySelector('footer').appendChild(footer)
    shopContent.mount(appContainer.querySelector(".shop"))
    cartList.mount(appContainer.querySelector(".cart"))

    return appContainer
  }
}