<template>
	<div class="container-results">
		<div class="container-results-line container-results-give">
			Вы даете: 
			<input
				v-model="rubles"
				type="number"
			>
			<span class="container-results-line-cur"> RUB</span>
		</div>

		<div class="container-results-line container-results-take">
			Вы получаете:
			<span class="bold-large-text">{{ Math.floor(rubles! / exchangeRate.ask * 100) / 100 }}&nbsp;</span>
			<span class="container-results-line-cur">{{ props.curr }}</span>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { defineProps, computed, ref } from 'vue';
import { useStore } from 'vuex'

const store = useStore()
const props = defineProps({
	curr: {
		type: String,
		default: ''
	}
})

const rubles = ref(null)
const exchangeRate = computed(() => store.state.exchangeRate)
</script>

<style lang="scss" scoped>
.container {
  &-results {
    margin: 30px 0;

	&-take {
		margin-top: 10px;
	}
  }
}
</style>