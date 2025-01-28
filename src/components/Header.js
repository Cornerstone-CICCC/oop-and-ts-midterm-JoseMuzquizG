import { Component } from "../common/Component.js";

export class Header extends Component {
  render() {
    const header = document.createElement('div')
    header.className = 'header-container'
    header.innerHTML = `
      <div class="logo">
        VERY COOL LOGO
      </div>
      <div class="page-name">
        <small>${this.props.desc}</small> <br />
        <h1>STUM</h1> <br />
        <p>${this.props.siteTitle}</p>
      </div>
      <div class="menu">
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
          </ul>
        </nav>
      </div>      
    `

    return header
  }
}

