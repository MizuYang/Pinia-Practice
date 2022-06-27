<template>
<div class="container p-5">
  <h1>Store 練習</h1>
  <AView1></AView1>
  <hr>
  <AView2></AView2>
</div>
<IsLoading v-model:active="isLoading"></IsLoading>
</template>

<script>
import AView1 from '@/components/AView1.vue'
import AView2 from '@/components/AView2.vue'
import { mapState } from 'pinia'
import loadingStore from '@/stores/loadingStore.js'
export default {
  components: {
    AView1,
    AView2
  },
  computed: {
    ...mapState(loadingStore, ['isLoading'])
  }
}
</script>
