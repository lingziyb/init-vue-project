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
		ul {
			list-style: none;

			li {
				height: 50px;
				margin-top: 15px;
				background-color: blanchedalmond;
				box-sizing: content-box;
				-moz-box-sizing: content-box;
			}
		}
	}

	html, body {
		height: 100%;
	}

	#app {
		height: 100%;
	}
</style>