import { Component } from "../common/Component.js";

export class Header extends Component {
  render() {
    const header = document.createElement('div')
    header.className = 'header-container'
    header.innerHTML = `
      <div class="logo">
        <img src="./images/online_store_logo.jpg" alt="online store logo" width=100px>
      </div>
      <div class="title">
          <h1>STUM</h1>
          <p>${this.props.siteTitle}</p>
      </div>
      <small>${this.props.desc}</small>
    `

    return header
  }
}

