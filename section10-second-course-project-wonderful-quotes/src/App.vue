<template>
	<div class="container">
		<app-header :quoteCount="quotes.length" :maxQuotes="maxQuotes"></app-header>
		<!-- $event를 쓰지 않아도 된다 -->
		<!-- <app-new-quote @quoteAdded="newQuote($event)"></app-new-quote> -->
		<app-new-quote @quoteAdded="newQuote"></app-new-quote>
		<app-quoteGrid :quotes="quotes" @quoteDeleted="deleteQuote"></app-quoteGrid>
		<div class="row">
			<div class="col-sm-12 text-center">
				<div class="alert alert-info">Info: Click on a Quote to delete it!</div>
			</div>
		</div>
	</div>
</template>

<script>
import Header from './components/Header.vue';
import QuoteGrid from './components/QuoteGrid.vue';
import NewQuote from './components/NewQuote.vue';

export default {
	components: {
		appHeader: Header,
		appQuoteGrid: QuoteGrid,
		appNewQuote: NewQuote
	},
	data: function() {
		return {
			quotes: [
			'Just a Quote to see something'
			],
			maxQuotes: 10
		}
	},
	methods: {
		newQuote(quote) {
			if (this.quotes.length >= this.maxQuotes) {
				return alert('Please delete Quotes first!');
			}
			this.quotes.push(quote);
		},
		deleteQuote(index) {
			this.quotes.splice(index, 1);
		}
	}
}
</script>

<style>
</style>
