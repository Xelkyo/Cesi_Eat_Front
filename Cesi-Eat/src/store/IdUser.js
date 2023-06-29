// Utilities
import { defineStore } from 'pinia'

export const saveIdUser = defineStore('Id', {
    state: () => {
        return { 
            _id: "",
    }
    },

    actions: {
        transfer_id(_idUser) {
            this._id = _idUser;
        }
    }
})

