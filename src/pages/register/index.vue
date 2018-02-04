<template>
	<div class="popup">
		register
		<header>
			<div style="font-size: 21px;padding: 15px;">用户登录</div>
			<input placeholder="请输入用户名" v-model="username">
			<input placeholder="请输入密码" type="password" v-model="password">
			<button @click="login" type="primary">登录</button>
			<button @click="register" type="success">注册</button>
		</header>
	</div>
</template>

<script>
	import axios from 'axios';

	export default {
		data() {
			return {
				username: "",
				password: "",
				domain: ".youku.com",
				cookies: ""
			};
		},
		mounted: function() {},
		methods: {
			register() {
				this.$router.replace( "/register" );
			},
			async login(){
			}
		}
	};
</script>

<style lang="less" rel="stylesheet/less" scoped="true">
	.popup {
		width: 300px;
		padding: 20px;
		box-sizing: border-box;
	}

	header {
		text-align: center;

		input {
			margin-bottom: 20px;
		}

		button {
			width: 100%;
		}

	}

</style>