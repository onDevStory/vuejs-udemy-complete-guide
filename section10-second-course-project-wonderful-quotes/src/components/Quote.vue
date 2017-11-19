<template>
	<div class="col-sm-6 col-md-4 col-lg-3">
		<div class="panel panel-default">
			<div class="panel-body quote">
				<!-- QuoteGrid.vue 에서 {{quote}}를 전달받기 위해 slot을 사용 -->
				<slot></slot>
			</div>
		</div>
	</div>
</template>

<script>
</script>

<style>
.panel-body {
	font-family: 'Arizonia', cursive;
	font-size: 24px;
	color: #6e6e6e;
}
.quote {
	cursor: pointer;
}
.quote:hover {
	background-color: #ffe2e2;
}
</style>