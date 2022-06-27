<template>
  <h2>A2 元件的資料</h2>
  <p>state：{{ name }}</p>
  <p>getters：{{ getReverse }}</p>
  <p>actions：<button type="button" @click="getRandomuser">取得 Randomuser 資料</button></p>
  <p>資料響應式： <button type="button" @click="updateName">點我，並查看其他 state 的Name</button>
  <br />
  所有狀態都是由 Store 提供，所以 Store 的狀態被改變，所有使用該狀態的值都會被改變
  </p>
</template>

<script>
import { mapState, mapActions } from 'pinia'
import aStore from '@/stores/aStore.js'
export default {

  computed: {
  //* 參數：1.Store  2.要帶入的 State, Getters
    ...mapState(aStore, ['name', 'getReverse'])
  },

  methods: {
    ...mapActions(aStore, ['getRandomuser', 'updateName'])
  }
}
</script>
