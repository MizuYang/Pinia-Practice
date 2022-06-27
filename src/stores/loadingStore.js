import { defineStore } from 'pinia'

export default defineStore('loadingStore', {
  //* Data
  state: () => ({
    isLoading: false
  })
})
