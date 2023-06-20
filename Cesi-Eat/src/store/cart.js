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
        decrement() {
            this.count--
        }
    }
})

