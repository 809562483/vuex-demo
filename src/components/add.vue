<!--
 * @Description: TODO
 * @Version: 1.0
 * @Autor: Observer
 * @Date: 2021-04-27 11:21:25
 * @LastEditors: Observer
 * @LastEditTime: 2021-04-27 15:37:56
-->
<template>
  <div>
    <h1>当前最新的count值为:{{ count }}</h1>
    <button @click="add1">+1</button>
    <button>+N</button>
    <button @click="add">+1 by mutations</button>
    <button @click="addN(3)">+N by mutations</button>
    <button @click="asyncAdd">+1 by actions</button>
    <button @click="asyncNAdd(4)">+N by actions</button>
    <h2>{{ showCount }}</h2>
  </div>
</template>
<script>
import { mapMutations, mapState, mapActions, mapGetters } from 'vuex'
export default {
  data() {
    return {}
  },
  methods: {
    add1() {
      this.$store.state.count++
    },
    ...mapMutations(['add', 'addN']),
    ...mapActions(['asyncAdd', 'asyncNAdd'])
  },
  computed: {
    ...mapState(['count']),
    ...mapGetters(['showCount'])
  }
}
</script>
