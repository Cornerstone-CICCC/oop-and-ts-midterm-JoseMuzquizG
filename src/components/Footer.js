import { Component } from "../common/Component.js";

export class Footer extends Component {
  render() {
    const footer = document.createElement('div')
    footer.className = "footer-wrapper"
    footer.innerHTML = `
      <p>&copy; ${new Date().getFullYear()}. All rights reserved.</p>
    `
    return footer
  }
}