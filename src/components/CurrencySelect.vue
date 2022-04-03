<template>
	<div class="container-selects">
		<div class="currency">
			<select
				v-model="relatedCurr"
				name="currency"
				@change="changeCurr"
			>
				<option value="USD">Доллар США</option>
				<option value="EUR">Евро</option>
			</select>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref, defineEmits } from 'vue';
import { useStore } from 'vuex'

const emit = defineEmits([ 'change-curr' ])
const store = useStore()

const relatedCurr = ref('USD')
const getExchangeRate = (): Promise<void> => store.dispatch('GET_EXCHANGE_RATE', relatedCurr.value)

const changeCurr = (): void => {
	getExchangeRate()
	emit('change-curr', relatedCurr.value)
}
</script>

<style lang="scss" scoped>
.container {
  &-selects {
    display: flex;
		justify-content: center;

    &-icon {
      margin: 0 10px;
    }
  }
}
</style>