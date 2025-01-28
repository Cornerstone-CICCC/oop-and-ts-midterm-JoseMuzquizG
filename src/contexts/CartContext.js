export class CartContext {
    constructor() {
        this.cart = []
        this.listeners = []
    }

    getCart() {
        return this.cart
    }
    
    addProduct(product) {

    }

    updateQuantity(id) {

    }

    removeProduct(id) {
        this.cart = this.cart.filter(product => product.id !== id)
    }

    subscribe(listener) {
        this.listeners.push(listener)
        console.log(this.listeners)
    }

    notifyListeners() {
        this.listeners.forEach(listener => listener(this,cart))
    }
}