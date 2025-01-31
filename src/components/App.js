import { Component } from "../common/Component.js";
import { Header } from "./Header.js"
import { Footer } from "./Footer.js";
import { ProductList } from "./ProductList.js";

export class App extends Component {
  render() {
    const appContainer = document.createElement('div')
    appContainer.className = 'container'
    appContainer.innerHTML = `
      <header></header>
      <main></main>
      <footer></footer>
    `
    const header = new Header({
      cartContext: this.props.cartContext,
      siteTitle: "Shop That Understands Me",
      desc: "The shop that really knows what I want"
    }).render()
    const mainContent = new ProductList({cartContext: this.props.cartContext})
    const footer = new Footer({cartContext: this.props.cartContext}).render()

    appContainer.querySelector('header').appendChild(header)
    appContainer.querySelector('footer').appendChild(footer)
    mainContent.mount(appContainer.querySelector("main"))

    return appContainer
  }
}