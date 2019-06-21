<template>
	<div class="login-body">
		<div class="login-logo">
			<img src="../assets/image/siemens-logo.png"/>
		</div>
		<el-form class="login-panel" :model="ruleForm" :rules="rules" ref="loginForm">
			<p class="form-logo">
				<img src="../assets/image/form-logo.png"/>
			</p>
			<el-form-item class="form-control" prop="username" :error="error.unMsg">
				<el-input type="text" v-model="ruleForm.username" placeholder="用户名"></el-input>
			</el-form-item>
			<el-form-item class="form-control" prop="password" :error="error.psdMsg">
				<el-input type="password" v-model="ruleForm.password" placeholder="密码"></el-input>
			</el-form-item>
			<el-form-item class="form-control" prop="code" :error="error.cdMsg">
				<el-input type="text" placeholder="验证码" v-model="ruleForm.code">
					<el-button slot="append">
						{{ruleForm.vCode}}
					</el-button>
				</el-input>
			</el-form-item>
			<el-form-item class="form-control" prop="orgName">
				<el-checkbox v-model="ruleForm.forgetPsd">记住密码</el-checkbox>
				<el-dropdown trigger="click" @command="handleDrop">
					<span class="el-dropdown-link" v-model="ruleForm.orgName">
						{{!ruleForm.orgName ? '请选择' : ruleForm.orgName}}<i class="el-icon-arrow-down el-icon--right"></i>
					</span>
					<el-dropdown-menu slot="dropdown">
						<el-dropdown-item command="西门子测试">西门子测试</el-dropdown-item>
						<el-dropdown-item command="西门子平台管理">西门子平台管理</el-dropdown-item>
					</el-dropdown-menu>
				</el-dropdown>
			</el-form-item>
			<div class="form-control">
				<el-button size="small" @click="login('loginForm')">登录</el-button>
			</div>
		</el-form>
	</div>
</template>
<script>
	import { loginHttps } from '../api/login.js';
	
	export default {
		data() {
			return {
				error: {
					unMsg: '',
					psdMsg: '',
					cdMsg: ''
				},
				ruleForm: {
					username: 'admin',
					password: 'admin',
					code: '9986',
					vCode: '9986',
					forgetPsd: false,
					orgName: '西门子测试'
				},
				rules: {
					username: [{
						required: true,
						message: '请输入用户名!',
						trigger: 'blur'
					}, {
						min: 3, 
						max: 10, 
						message: '长度在 3 到 5 个字符', 
						trigger: 'blur'
					}],
					password: [{
						required: true,
						message: '请输入密码!',
						trigger: 'blur'
					}],
					code: [{
						required: true,
						message: '请输入验证码!',
						trigger: 'blur'
					}, {
						min: 4, 
						max: 4, 
						message: '请输入四位数验证码!', 
						trigger: 'blur'
					}],
					orgName: [{
						required: true,
						message: '单位不能为空!',
						trigger: 'blur'
					}]
				}
			}
		},
		methods: {
			login(formname) {
				this.$refs[formname].validate((valid) => {
					if(valid){
						var userForm = {
							username: this.ruleForm.username,
							password: this.ruleForm.password,
							code: this.ruleForm.code
						}
						loginHttps(userForm).then(req => {
							if(req.state == "success"){
								sessionStorage.setItem('user', JSON.stringify(req));
								
								this.$store.commit('routemenu/clearMenu');
								this.$store.dispatch('routemenu/getMenus', {userName: 'admin'});
								
								this.$router.push({path: '/'})
							} else {
								this.error.unMsg = "";
								this.error.psdMsg = "";
								this.$refs.loginForm.resetFields();
								this.validataErr(req);
								return false;
							}
						});
					} else {
						return false;
					}
				});
			},
			validataErr(o){
				if(o.hasOwnProperty('username')){
					this.error.unMsg = o.username;
				}
				if(o.hasOwnProperty('password')){
					this.error.psdMsg = o.password;
				}
			},
			handleDrop(call) {
				this.ruleForm.orgName = call;
			}
		}
	}
</script>
<style lang="stylus">
.login-body{
	width: 100%;
	height: 100%;
	position: relative;
}

.login-logo{
	position: absolute;
	left: 60px;
	top: 60px;
}

.login-panel{
	width: 332px;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-top: -198px;
    margin-left: 113px;
    background-color: #fff;
    padding: 35px 40px;
    border: 1px solid #ccc;
}

.form-logo{
	margin-bottom: 25px;
}

.form-logo img{
	width: 100%;
}

.form-control .el-dropdown{
	float: right;
	cursor: pointer;
}

.form-control .el-button{
	width: 100%;
}

.form-control .el-form-item__content{
	line-height: inherit;
}
</style>