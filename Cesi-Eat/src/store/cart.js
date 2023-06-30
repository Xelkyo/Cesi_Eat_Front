// Utilities
import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
    state: () => {
        return { count: 0 }
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
        increment() {
            this.count++
        },
        reset() {
            this.count = 0
        }
    }
})

export const StoreInCart = defineStore('cartItem', {
    state: () => {
        return { Items: [] }
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
        CartAdd(Item) {
            this.Items.push(Item)
        },
        ResetCart(){
            this.Items = []
        }
    }
})

export const TTCCart = defineStore('cartPrice', {
    state: () => {
        return { price: 0 }
    },
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
        StorePrice(InputPrice) {
            this.price = InputPrice
        },
        Reset(){
            this.price = 0
        }
    }
})

