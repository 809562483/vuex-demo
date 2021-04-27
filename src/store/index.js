/*
 * @Description: TODO
 * @Version: 1.0
 * @Autor: Observer
 * @Date: 2021-04-27 11:13:35
 * @LastEditors: Observer
 * @LastEditTime: 2021-04-27 15:34:44
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count: 0
  },
  mutations: {
    add(state) {
      state.count++
    },
    sub(state) {
      state.count--
    },
    addN(state, N) {
      state.count += N
    },
    subN(state, N) {
      state.count -= N
    }
  },
  actions: {
    asyncAdd(context) {
      setTimeout(() => {
        context.commit('add')
      }, 1000)
    },
    asyncSub(context) {
      setTimeout(() => {
        context.commit('sub')
      }, 1000)
    },
    asyncNAdd(context, N) {
      setTimeout(() => {
        context.commit('addN', N)
      }, 1000)
    },
    asyncNSub(context, N) {
      setTimeout(() => {
        context.commit('subN', N)
      }, 1000)
    }
  },
  getters: {
    showCount(state) {
      return '当前最新的数量是【' + state.count + '】'
    }
  }
})
