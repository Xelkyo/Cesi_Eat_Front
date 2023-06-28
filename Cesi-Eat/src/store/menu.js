// Utilities
import { defineStore } from 'pinia'

export const saveMenuSelect = defineStore('menu', {
    state: () => {
        return { 
            _id: "",
            name:""
    }
    },

    actions: {
        transfer_id(_idRestaurant,name) {
            this._id = _idRestaurant;
            this.name = name
        }
    }
})

