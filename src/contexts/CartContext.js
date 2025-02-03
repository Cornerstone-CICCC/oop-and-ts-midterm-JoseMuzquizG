export class CartContext {
    constructor() {
        this.cart = []
        this.listeners = []
    }

    getCart() {
        return this.cart
    }
    
    addProduct(product) {
        const found = this.cart.find(item => item.id === product.id)
        if (found) {
            this.updateQuantity(product.id, found.quantity +1)
        } else {
            this.cart.push({
                ...product,
                quantity: 1
            })
        }
        this.notifyListeners()
    }

    updateQuantity(id, newQuantity) {
        if (newQuantity <= 0) {
            this.removeProduct(id)
        }
        this.cart = this.cart.map(product => {
            if (product.id === id) {
                return {
                    ...product,
                    quantity: newQuantity
                }
            } else {
                return product
            }
        })
        this.notifyListeners()
    }

    removeProduct(id) {
        this.cart = this.cart.filter(product => product.id !== id)
        this.notifyListeners()
    }

    subscribe(listener) {
        this.listeners.push(listener)
    }

    notifyListeners() {
        this.listeners.forEach(listener => listener(this.cart))
    }
}
