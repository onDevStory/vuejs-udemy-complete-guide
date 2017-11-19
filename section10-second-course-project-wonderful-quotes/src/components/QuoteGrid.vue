<template>
	<div class="row">
		<!--
			click.native - 자식 컴포넌트에서 발생한 이벤트를
			부모 컴포넌트에서 수신하려고 할 때 사용
		-->
		<app-quote v-for="(quote, index) in quotes" @click.native="deleteQuote(index)">
			{{quote}}
		</app-quote>
	</div>
</template>

<script>
import Quote from './Quote.vue';

export default {
	components: {
		appQuote: Quote
	},
	props: {
		quotes: Array
	},
	methods: {
		deleteQuote(index) {
			this.$emit('quoteDeleted', index);
		}
	}
}
</script>