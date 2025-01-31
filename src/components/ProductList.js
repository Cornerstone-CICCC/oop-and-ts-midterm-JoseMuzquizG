import { Component } from "../common/Component.js";
import { ProductItem } from "./ProductItem.js";

export class ProductList extends Component {
  constructor(props){
    super(props)
    this.state = { products: [] }
  }

  mount(container) {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        this.state.products = data
        container.appendChild(this.render())
      })
      .catch(err => console.error(err))
  }
  
  render() {
    const productList = document.createElement('div')
    productList.className = 'product-list'
    productList.innerHTML = `<ul class="list"></ul>`

    this.state.products.forEach(product => {
      const newItem = new ProductItem({product, cartContext: this.props.cartContext})
      productList.querySelector(".list").appendChild(newItem.render())
    })

    return productList
  }
}

  //llamdo de la api
  //crear una nueva instancia por cada producto de api la instancia es la de product item
  //product item al hacer el render vas a tener un return y el resultado lo vas a agregar a lista
  //for(item =>{
    // const newItem = new ProductItem(item)
    // this.list.apend(newItem)
    //})

    // const listItems = document.createElement("div")
    // listItems.innerHTML = `
    // <ul class="list"></ul>
    // `
    // this.list = listItems.querySelector(".list")