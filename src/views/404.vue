<template>
	<div class="notfound">
		<h2 class="notfound-title">404</h2>
		<p class="notfound-tip">很抱歉, 你查找的页面不存在!</p>
		<p>
			<el-button size="small" icon="el-icon-back" @click="toIndex">返回首页</el-button>
		</p>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			toIndex() {
				this.$router.push({path: "/"});
				location.reload();
			}
		}
	}
</script>

<style lang="stylus">
  .notfound
    width 380px
    height 240px
    position absolute
    left 50%
    top 50%
    margin-top -120px
    margin-left -190px
    text-align center
    .notfound-title
      font-size 70px
      font-style italic
      color #32a0a0
      margin 15px
    .notfound-tip
      margin-bottom 15px
</style>