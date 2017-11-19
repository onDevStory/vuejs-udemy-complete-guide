<template>
	<div class="row">
		<form>
			<div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
				<label>Quote</label>
				<textarea class="form-control" rows="3" v-model="quote"></textarea>
			</div>
			<div class="col-sm-8 col-sm-offset-2 col-xs-12 col-md-6 col-md-offset-3 form-group">
				<!--
					버튼을 눌렀을때 화면이 refresh되는 현상 해결
					prevent - 클릭 이벤트 외에 별도의 브라우저 행동을 막기 위해 사용됩니다.
				-->
				<button class="btn btn-primary" @click.prevent="createNew">Add Quote</button>
			</div>
		</form>
	</div>
</template>

<script>
export default {
	data: function() {
		return {
			quote: ''
		};
	},
	methods: {
		createNew() {
			var quote = this.quote;
			if(quote){
				this.$emit('quoteAdded', quote);
				// quote 는 this.quote의 값만 전달 받았기 때문에 this.quote와는 다르다
				// quote = '';
				this.quote = '';
			}
		}
	}
}
</script>
