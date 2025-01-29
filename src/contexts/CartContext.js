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
            this.updateQuantity(product.id)
        } else {
            this.cart.push({
                ...product,
                quantity: 1
            })
        }
        this.notifyListeners()
    }

    updateQuantity(id) {
        this.cart = this.cart.map(product => {
            if (product.id === id) {
                return {
                    ...product,
                    quantity: product.quantity + 1
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
        console.log(this.listeners)
    }

    notifyListeners() {
        this.listeners.forEach(listener => listener(this.cart))
    }
}
