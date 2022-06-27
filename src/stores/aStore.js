import { defineStore } from 'pinia'
import loadingStore from './loadingStore'
import axios from 'axios'
const status = loadingStore()
console.log(status)
export default defineStore('aStore', {
  state: () => ({
    name: 'Mizu',
    dataReverse: ['AA', 'BB', 'CC', 'DD']
  }),

  getters: { //* 這參數就是上面的 state 狀態 Data
    getReverse: (state) => state.dataReverse.reverse()
  },
  actions: {
    updateName () { this.name = '名字被更改了' },
    getRandomuser () {
      status.isLoading = true
      axios.get('https://randomuser.me/api/')
        .then(res => {
          console.log(res)
          status.isLoading = false
        })
        .catch(err => {
          status.isLoading = false
          console.log(err)
        })
    }
  }
})
