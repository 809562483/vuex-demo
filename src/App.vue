<!--
 * @Description: TODO
 * @Version: 1.0
 * @Autor: Observer
 * @Date: 2021-04-27 11:13:35
 * @LastEditors: Observer
 * @LastEditTime: 2021-04-27 11:29:57
-->
<template>
  <div id="app">
    <com-add></com-add>
    <com-sub></com-sub>
  </div>
</template>

<script>
import Add from './components/add'
import Sub from './components/sub'
export default {
  name: 'App',
  components: {
    'com-add':Add,
    'com-sub':Sub
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
