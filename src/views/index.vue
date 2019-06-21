<template>
 	<el-container class="ssep-container">
  		<el-header class="ssep-header">
   			<div class="ssep-header-logo header-item">
    			<img src="../assets/image/logo.png"/>
   			</div>
   			<div class="ssep-header-org header-item">巨石变电站智能管理系统</div>
   			<div class="ssep-header-site header-item">
    			<i class="material-icons fl">room</i>
    			<span class="site-name fl">西门子测试</span>
   			</div>
  		</el-header>
	  	<el-container>
		   	<el-aside :width="isOpen ? 'auto' : '200px'" class="ssep-menu">
		    	<div class="menu-size clearfix" v-model="isOpen">
		     		<a :class="['menu-btn', !isOpen ? 'fr' : 'center-auto']" href="javascript:;" @click="menuOpen">
		      			<i class="material-icons">menu</i>
		     		</a>
		    	</div>
		    	<el-menu :collapse="isOpen" router :unique-opened="true"
		     		@select="handleSelect">
		     		<el-submenu v-for="(item, index) in indexMenu" :index="item.name">
		      			<template slot="title">
		            		<i class="material-icons">{{ item.iconName }}</i>
		            		<span slot="title">{{ item.name }}</span>
		         		</template>
			         	<el-menu-item v-for="(value, i) in item.children"
			          		v-if="item.children"
			          		:index="value.path ? value.path : value.url">
			          			{{ value.name }}
			         	</el-menu-item>
		     		</el-submenu>
		    	</el-menu>
		   	</el-aside>
		   	<el-main class="ssep-wapper">
		    	<div class="ssep-content">
		     		<el-breadcrumb separator-class="el-icon-arrow-right">
		      			<el-breadcrumb-item 
		       				v-if="menuPath.length > 0"
		       				v-for="bread in menuPath"
		       				:to="{ path: bread.path ? bread.path : '' }"
		       				:replace="true">
		        			{{ bread.name }}
		      			</el-breadcrumb-item>
		     		</el-breadcrumb>
		    	</div>
		    	<div class="ssep-body">
		     		<router-view></router-view>
		    	</div>
		   	</el-main>
	  	</el-container>
 	</el-container>
</template>

<script>
 import { findmenu } from '../api/index.js';
 export default {
  	data() {
   		return {
    		menu: [],
    		isOpen: false,
    		menuPath: []
   		}
  	},
  	created() {
   		this.initBread(window.location.pathname);
  	},
  	methods: {
   		menuOpen(e) {
    		if(this.isOpen){
     			this.isOpen = false;
    		} else {
     			this.isOpen = true;
    		}
   		},
   		handleSelect(index, indexPath) {
    		this.initBread(index);
   		},
   		initBread(url) {
   			var o = this.menuIndex(url);
	   		if(o) {
	   			this.menuPath = [{
	  				name: '主页',
	  				path: '/'
	 			}, {
	  				name: o.first
	 			}, {
	  				name: o.name
	 			}];
	   		}
   		},
   		menuIndex(url) {
    		var opt = false;
    		this.indexMenu.filter(v => {
     			if(v.hasOwnProperty('children')){
     				v.children.filter(item => {
      					if(item.path == url){
	      					opt = {};
	       					opt.name = item.name;
	       					opt.first = v.name;
	      				}
	     			});
     			}
    		});
    		return opt;
   		}
  	},
  	mounted(){
  		this.$nextTick(() => {
  			
  		});
  	},
  	witch: {
   		menu: {
    		handler(a, b) {
     			console.log(a)
    		}
   		},
   		deep: true
  	},
  	computed: {
  		indexMenu(){
  			var menuList = sessionStorage.getItem('menuList');
  			if(this.$store.state.routemenu.menuList.length == 0 && menuList){
  				this.$store.commit('routemenu/updateMenu', JSON.parse(menuList));
  			}
  			return this.$store.state.routemenu.menuList;
  		}
  	}
}
</script>