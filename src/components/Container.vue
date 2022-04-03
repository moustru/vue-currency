<template>
  <div class="container">
    <CurrencySelect
      @change-curr="changeCurr($event)"
    />

    <ExchangeBlock
      :curr="relatedCurrency"
    />

    <UpdateRate
      :curr="relatedCurrency"
    />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import CurrencySelect from './CurrencySelect.vue';
import ExchangeBlock from './ExchangeBlock.vue';
import UpdateRate from './UpdateRate.vue';

const relatedCurrency = ref('USD')
const store = useStore()

const getExchangeRate = (): Promise<void> => store.dispatch('GET_EXCHANGE_RATE', relatedCurrency.value)

const changeCurr = (curr: string): void => {
  relatedCurrency.value = curr
}

onMounted(() => {
  getExchangeRate()
})
</script>

<style scoped lang="scss">
.container {
  width: 600px;
  padding: 20px;
  background-color: #e5e5e5;
  border-radius: 10px;
}
</style>

<style lang="scss">
.bold-large-text {
  font-size: 20px;
  font-weight: 800;
}
</style>