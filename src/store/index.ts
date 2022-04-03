import { createStore } from 'vuex'
import axios from 'axios'
import { Rate } from '@/types/rate'

export default createStore({
  state: {
    exchangeRate: {}
  },

  mutations: {
    SET_EXCHANGE_RATE(state, rate: Rate): void {
      state.exchangeRate = rate
    }
  },

  actions: {
    async GET_EXCHANGE_RATE({ commit }, currency: string): Promise<void> {
      const { data } = await axios.get(`http://economia.awesomeapi.com.br/json/last/${currency}-RUB`)
      const { ask, timestamp } = data[currency]

      commit('SET_EXCHANGE_RATE', { ask, timestamp })
    }
  }
})
