import { Component } from "../common/Component.js";
import { Header } from "./Header.js"
import { Footer } from "./Footer.js";

export class App extends Component {
  render() {
    const appContainer = document.createElement('div')
    appContainer.className = 'container'
    appContainer.innerHTML = `
      <header></header>
        
      <footer></footer>
    `
    const header = new Header({
      cartContext: this.props.cartContext,
      siteTitle: "Shop That Understands Me",
      desc: "The shop that really knows what I want"
    }).render()
    const footer = new Footer({cartContext: this.props.cartContext}).render()

    appContainer.querySelector('header').appendChild(header)
    appContainer.querySelector('footer').appendChild(footer)

    return appContainer
  }
}