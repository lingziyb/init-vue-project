<template>
	<div id="app">
		<router-view></router-view>
	</div>
</template>
<script>
	export default {
		name: 'App'
	};
</script>
<style rel="stylesheet/less" lang="less" scoped>
	* {
		padding: 0;
		list-style: none;
	}

	html, body {
		height: 100%;
	}

	#app {
		height: 100%;
	}
</style>