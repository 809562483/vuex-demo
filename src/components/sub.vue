<!--
 * @Description: TODO
 * @Version: 1.0
 * @Autor: Observer
 * @Date: 2021-04-27 11:21:25
 * @LastEditors: Observer
 * @LastEditTime: 2021-04-27 15:05:53
-->
<template>
  <div>
    <h1>当前最新的count值为:{{ $store.state.count }}</h1>
    <button @click="sub1">-1</button>
    <button>-N</button>
    <button @click="subByMu">-1 by mutations</button>
    <button @click="subNByMu">-N by mutations</button>
    <button @click="asyncSubByMu">-1 by actions</button>
    <button @click="asyncSubNByMu">-N by actions</button>
  </div>
</template>
<script>
export default {
  methods: {
    sub1() {
      this.$store.state.count--
    },
    subByMu() {
      this.$store.commit('sub')
    },
    subNByMu() {
      this.$store.commit('subN', 2)
    },
    asyncSubByMu() {
      this.$store.dispatch('asyncSub')
    },
    asyncSubNByMu() {
      this.$store.dispatch('asyncNSub', 3)
    }
  }
}
</script>
