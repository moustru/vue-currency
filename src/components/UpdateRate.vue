<template>
	<div>
		<div v-if="autoUpdate">
			Следующее обновление курса валют через
			<span class="bold-large-text">{{ time }}</span>
		</div>
		<div v-else>Обновление курса отключено</div>
		<button
			v-if="autoUpdate"
			class="btn-off"
			@click="offUpdate"
		>
			Отключить автообновление курса
		</button>
	</div>
</template>

<script lang="ts" setup>
import { ref, defineProps } from 'vue'
import { useStore } from 'vuex'

const store = useStore()
const props = defineProps({
	curr: {
		type: String,
		default: ''
	}
})

const time = ref(60)
const autoUpdate = ref(true)
const getExchangeRate = (): Promise<void> => store.dispatch('GET_EXCHANGE_RATE', props.curr)

const interval = setInterval(() => {
	time.value--

	if (time.value < 0) {
		time.value = 60
		getExchangeRate()
	}
}, 1000)

const offUpdate = () => {
	autoUpdate.value = false
	clearInterval(interval)
}
</script>

<style lang="scss" scoped>
.btn-off {
	margin-top: 10px;
}
</style>