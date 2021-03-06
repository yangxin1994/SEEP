import axios from 'axios';
import qs from 'qs';

export const findmenu = params => {return axios.post('/api/vue/vMenu.html', qs.stringify(params)).then(res => formatMenu(menu.data))};

function formatMenu(menu){
	return menu.map(function(item){
		return {
			path: '/',
			id: item.id,
			type: item.type,
			name: item.name,
			component: resolve => require([`../views/index`], resolve),
			level: item.level,
			roleId: item.roleId,
			iconName: item.iconName,
			organizationResourceId: item.organizationResourceId,
			children: typeof item.childrenResource == 'undefined' ? '' : item.childrenResource.map(function(child){
				return {
					path: child.url,
					id: child.id,
					code: child.code,
					type: child.type,
					name: child.name,
					level: child.level,
					roleId: child.roleId,
					parentId: child.parentId,
					iconName: child.iconName,
					organizationResourceId: child.organizationResourceId,
					component: resolve => require([`../views${child.url}`], resolve)
				}
			})
		}
	});
}

const tmenu = {
	data: [
	    {
	    	level: 1,
	    	path: "/",
	    	name: "一级菜单-1",
	    	childrenResource: [
	    		{url: "/menu/menu2", name: '二级菜单-1'}
	    	]
	    },
	    {
	    	level: 1,
	    	path: "/",
	    	name: "一级菜单-2",
	    	childrenResource: [
	    		{url: "/menu/menu2", name: '二级菜单-1'}
	    	]
	    }
  	]
}

const menu = {
	"data":[
		{
			"childrenResource":[
				{
					"code":"loadMonitor",
					"iconName":"",
					"id":"1576c82e20564b4da7ef05ed00753933",
					"isValid":"1",
					"level":2,
					"name":"能源负荷监测",
					"organizationResourceId":"1576c82e20564b4da7ef05ed00753933",
					"parentId":"9653ecc4c6974c16bdb17a1f4926a4b4",
					"roleId":"7a0fd5918f8a4aa7b52413fffda9d004",
					"type":1,
					"url":"/chart/showPage?pageId=e05bd8eb8348432387adfec9e546082e",
					"webResourceId":"f4b40c62fa2241f8966ade49a140e7b6"
				},
				{
					"code":"monthEnergy",
					"iconName":"today",
					"id":"bea6c1b857364b098b2d6776b68480cf",
					"isValid":"1",
					"level":2,
					"name":"日用能统计（机构）",
					"organizationResourceId":"bea6c1b857364b098b2d6776b68480cf",
					"parentId":"9653ecc4c6974c16bdb17a1f4926a4b4",
					"roleId":"7a0fd5918f8a4aa7b52413fffda9d004",
					"type":1,
					"url":"/chart/showPage?pageId=81706610d2334edb958909725a49dad2",
					"webResourceId":"fe5551aa9edf418e84d54113dd2f1fd5"
				},
				{
					"code":"consumptionDay",
					"iconName":"",
					"id":"d616df94055640b9b589b5589cc394a1",
					"isValid":"1",
					"level":2,
					"name":"日用能曲线（机构）",
					"organizationResourceId":"d616df94055640b9b589b5589cc394a1",
					"parentId":"9653ecc4c6974c16bdb17a1f4926a4b4",
					"roleId":"7a0fd5918f8a4aa7b52413fffda9d004",
					"type":1,
					"url":"/chart/showPage?pageId=25fcc20a13f4449392db75a46cc3d160",
					"webResourceId":"5a69c172b8a44bdb956910d8fcd3e075"
				},
				{
					"code":"dayUse",
					"iconName":"",
					"id":"eb725bf930b9433986602b8911b88bc4",
					"isValid":"1",
					"level":2,
					"name":"日用能分项统计（机构）",
					"organizationResourceId":"eb725bf930b9433986602b8911b88bc4",
					"parentId":"9653ecc4c6974c16bdb17a1f4926a4b4",
					"roleId":"7a0fd5918f8a4aa7b52413fffda9d004",
					"type":1,
					"url":"/chart/showPage?pageId=cc4753404149403a8cfedef45abf7f6f",
					"webResourceId":"ec5dcf56b7584c158abd467b5db162a7"
				},
				{
					"code":"dayElec",
					"iconName":"",
					"id":"44b630901cb04431bde5b0071eb21957",
					"isValid":"1",
					"level":2,
					"name":"日用电监测",
					"organizationResourceId":"44b630901cb04431bde5b0071eb21957",
					"parentId":"9653ecc4c6974c16bdb17a1f4926a4b4",
					"roleId":"7a0fd5918f8a4aa7b52413fffda9d004",
					"type":1,
					"url":"/chart/showPage?pageId=ff8ed41b2ba24a72925ebf13951c01ca",
					"webResourceId":"73c2ba93b9464419899f8abca06a0ac1"
				},
				{
					"code":"设备能耗越限",
					"iconName":"",
					"id":"85a0220acf7849efbf89b8ab16ad8635",
					"isValid":"1",
					"level":2,
					"name":"设备用能越限监测",
					"organizationResourceId":"85a0220acf7849efbf89b8ab16ad8635",
					"parentId":"9653ecc4c6974c16bdb17a1f4926a4b4",
					"roleId":"7a0fd5918f8a4aa7b52413fffda9d004",
					"type":1,
					"url":"/chart/showPage?pageId=943391f142ac4bf59d056a7b8e85c160",
					"webResourceId":"00e505a934c7453398c7964302944a3e"
				}
			],
			"iconName":"lightbulb_outline",
			"id":"9653ecc4c6974c16bdb17a1f4926a4b4",
			"level":1,
			"name":"能源监测",
			"organizationResourceId":"9653ecc4c6974c16bdb17a1f4926a4b4",
			"roleId":"7a0fd5918f8a4aa7b52413fffda9d004",
			"type":3
		},
		{
			"childrenResource":[
				{
					"code":"alarm",
					"iconName":"",
					"id":"cd5edc86947c47f0932c2c1c2b31269a",
					"isValid":"1",
					"level":2,
					"name":"告警",
					"organizationResourceId":"cd5edc86947c47f0932c2c1c2b31269a",
					"parentId":"1456bb0f25cd4424819efcf64e67e821",
					"roleId":"7a0fd5918f8a4aa7b52413fffda9d004",
					"type":1,
					"url":"/alarm/show",
					"webResourceId":"981a26c2a61546368ab72e0ffbfafe7b"
				}
			],
			"code":"alarmManagement",
			"iconName":"notifications",
			"id":"1456bb0f25cd4424819efcf64e67e821",
			"isValid":"1",
			"level":1,
			"name":"信息告警",
			"organizationResourceId":"1456bb0f25cd4424819efcf64e67e821",
			"roleId":"7a0fd5918f8a4aa7b52413fffda9d004",
			"type":3,
			"webResourceId":"09be3efca6c04b609b04e5b7e15a695c"
		},
		{
			"childrenResource":[
				{
					"code":"initConfig",
					"iconName":"iconfont-wrench",
					"id":"9f39b22dee42441e8e49ee62d21be302",
					"isValid":"1",
					"level":2,
					"name":"初始化配置",
					"organizationResourceId":"9f39b22dee42441e8e49ee62d21be302",
					"parentId":"3c15b13a6bd84d4faf166762c4f70edf",
					"roleId":"7a0fd5918f8a4aa7b52413fffda9d004",
					"type":1,
					"url":"/setting/show",
					"webResourceId":"9004549b06eb443fabd4480976e960fb"
				}
			],
			"code":"initialization",
			"iconName":"language",
			"id":"3c15b13a6bd84d4faf166762c4f70edf",
			"isValid":"1",
			"level":1,
			"name":"站点管理",
			"organizationResourceId":"3c15b13a6bd84d4faf166762c4f70edf",
			"roleId":"7a0fd5918f8a4aa7b52413fffda9d004",
			"type":3,
			"url":"",
			"webResourceId":"29eeaffe6ab04d46bfeeb4ac1642006f"
		},
		{
			"childrenResource":[
				{
					"code":"userLog",
					"iconName":"fa fa-eye",
					"id":"134e1e1b279d483397a767bdb1dc9c36",
					"isValid":"1",
					"level":2,
					"name":"用户日志",
					"organizationResourceId":"134e1e1b279d483397a767bdb1dc9c36",
					"parentId":"82dc8608261c4100b96312e480c70ad1",
					"roleId":"7a0fd5918f8a4aa7b52413fffda9d004",
					"type":1,
					"url":"/userLog/show",
					"webResourceId":"98540bc3fecb4e9f8de9a33e37c80950"
				},
				{
					"code":"ip_filter",
					"id":"54164796f47f4d1a9ea02dac738e408a",
					"isValid":"1",
					"level":2,
					"name":"IP策略配置",
					"organizationResourceId":"54164796f47f4d1a9ea02dac738e408a",
					"parentId":"82dc8608261c4100b96312e480c70ad1",
					"roleId":"7a0fd5918f8a4aa7b52413fffda9d004",
					"type":1,
					"url":"ipfilter/ipfilterMain",
					"webResourceId":"ce850b7d7856489db1d6cc3d04922dd7"
				}
			],
			"code":"systemSecurity",
			"iconName":"security",
			"id":"82dc8608261c4100b96312e480c70ad1",
			"isValid":"1",
			"level":1,
			"name":"系统安全",
			"organizationResourceId":"82dc8608261c4100b96312e480c70ad1",
			"roleId":"7a0fd5918f8a4aa7b52413fffda9d004",
			"type":3,
			"url":"",
			"webResourceId":"3686d7f7f472407285aa901f51b3d1ba"
		},
		{
			"childrenResource":[
				{
					"code":"roleMenu",
					"id":"0894de264e744ec29a1289ac2d8f6d47",
					"isValid":"1",
					"level":2,
					"name":"角色管理",
					"organizationResourceId":"0894de264e744ec29a1289ac2d8f6d47",
					"parentId":"bcd61f25753f454b81c621879a09715a",
					"roleId":"7a0fd5918f8a4aa7b52413fffda9d004",
					"type":1,
					"url":"/user/roleMenu",
					"webResourceId":"11a53292c80b4d5eaee9589fca23451r"
				},
				{
					"code":"user",
					"iconName":"fa fa-user",
					"id":"4163705e632c4a818ee80ccdf9ba66a6",
					"isValid":"1",
					"level":2,
					"name":"员工管理",
					"organizationResourceId":"4163705e632c4a818ee80ccdf9ba66a6",
					"parentId":"bcd61f25753f454b81c621879a09715a",
					"roleId":"7a0fd5918f8a4aa7b52413fffda9d004",
					"type":1,
					"url":"/user/userMain",
					"webResourceId":"4ae701fac727430bb60f0b04b58599fb"
				},
				{
					"code":"roleAuthorization",
					"iconName":"1",
					"id":"2dabff72892c4826af3965589594c497",
					"isValid":"1",
					"level":2,
					"name":"角色权限分配",
					"organizationResourceId":"2dabff72892c4826af3965589594c497",
					"parentId":"bcd61f25753f454b81c621879a09715a",
					"roleId":"7a0fd5918f8a4aa7b52413fffda9d004",
					"type":1,
					"url":"/user/roleAuthorization",
					"webResourceId":"a1e06e9176864ec48add976e0378f3d2"
				},
				{
					"code":"manufacturer_user",
					"iconName":"1",
					"id":"3cece04aa6984c3bafbcf246b560ae14",
					"isValid":"1",
					"level":2,
					"name":"制造商人员",
					"organizationResourceId":"3cece04aa6984c3bafbcf246b560ae14",
					"parentId":"bcd61f25753f454b81c621879a09715a",
					"roleId":"7a0fd5918f8a4aa7b52413fffda9d004",
					"type":1,
					"url":"manufacturerUser/manufacturerUserMain",
					"webResourceId":"a8369201809944d08b00b939658cf165"
				},
				{
					"code":"userRole",
					"id":"42a198ff74d04f8bb080aa4a1c4d7b6f",
					"isValid":"1",
					"level":2,
					"name":"用户角色分派",
					"organizationResourceId":"42a198ff74d04f8bb080aa4a1c4d7b6f",
					"parentId":"bcd61f25753f454b81c621879a09715a",
					"roleId":"7a0fd5918f8a4aa7b52413fffda9d004",
					"type":1,
					"url":"/userRole/show",
					"webResourceId":"e590bc97598b4aadab83d6d194d146b0"
				}
			],
			"code":"authorizationMgt",
			"iconName":"lock",
			"id":"bcd61f25753f454b81c621879a09715a",
			"isValid":"1",
			"level":1,
			"name":"权限管理",
			"organizationResourceId":"bcd61f25753f454b81c621879a09715a",
			"roleId":"7a0fd5918f8a4aa7b52413fffda9d004",
			"type":3,
			"url":"",
			"webResourceId":"7c9f8d85d3a54c5fa44faa87009ba351"
		},
		{
			"childrenResource":[
				{
					"code":"dataset",
					"iconName":"",
					"id":"7ab3414db7094901a78e475a8cad1778",
					"isValid":"1",
					"level":2,
					"name":"数据集",
					"organizationResourceId":"7ab3414db7094901a78e475a8cad1778",
					"parentId":"510502bd1f6c4c6cb1e11dabed5905d3",
					"roleId":"7a0fd5918f8a4aa7b52413fffda9d004",
					"type":1,
					"url":"attrPage/attributeData",
					"webResourceId":"0c618bade0ee4d86b6a0179584358c89"
				},
				{
					"code":"svgEdit",
					"iconName":"",
					"id":"64e2b9b805934536825d47c20de33aee",
					"isValid":"1",
					"level":2,
					"name":"图形编辑",
					"organizationResourceId":"64e2b9b805934536825d47c20de33aee",
					"parentId":"510502bd1f6c4c6cb1e11dabed5905d3",
					"roleId":"7a0fd5918f8a4aa7b52413fffda9d004",
					"type":1,
					"url":"draw/svgEdit",
					"webResourceId":"6307aa57cd8b4ab2812bc1b0359d6431"
				},
				{
					"code":"chartPage",
					"iconName":"",
					"id":"6ef7f704df4a41cab909327b0c816601",
					"isValid":"1",
					"level":2,
					"name":"页面定制",
					"organizationResourceId":"6ef7f704df4a41cab909327b0c816601",
					"parentId":"510502bd1f6c4c6cb1e11dabed5905d3",
					"roleId":"7a0fd5918f8a4aa7b52413fffda9d004",
					"type":1,
					"url":"chart/clayout",
					"webResourceId":"9c1c4da7193848cd8b72c5e554b76f53"
				},
				{
					"code":"chartTemplate",
					"iconName":"",
					"id":"197c788d7b004113b768bd9661f1d9ae",
					"isValid":"1",
					"level":2,
					"name":"图表模型",
					"organizationResourceId":"197c788d7b004113b768bd9661f1d9ae",
					"parentId":"510502bd1f6c4c6cb1e11dabed5905d3",
					"roleId":"7a0fd5918f8a4aa7b52413fffda9d004",
					"type":1,
					"url":"/chartTemplate/show",
					"webResourceId":"ce28d7bba6354abd82f24cd9b789bf82"
				}
			],
			"code":"chartManagement",
			"iconName":"insert_chart",
			"id":"510502bd1f6c4c6cb1e11dabed5905d3",
			"isValid":"1",
			"level":1,
			"name":"页面配置",
			"organizationResourceId":"510502bd1f6c4c6cb1e11dabed5905d3",
			"roleId":"7a0fd5918f8a4aa7b52413fffda9d004",
			"type":3,
			"url":"",
			"webResourceId":"9391544b1cad412d9ad7820dc43839c8"
		},
		{
			"childrenResource":[
				{
					"code":"sparePartMain",
					"id":"57458c39379446cca11888d5550a8701",
					"isValid":"1",
					"level":2,
					"name":"备件管理",
					"organizationResourceId":"57458c39379446cca11888d5550a8701",
					"parentId":"11d4de0279914a9fb17228b5b842707b",
					"roleId":"7a0fd5918f8a4aa7b52413fffda9d004",
					"type":1,
					"url":"sparePart/toSparePartMain",
					"webResourceId":"170c1924312f4cd984247cdb36cfea6b"
				},
				{
					"code":"asset",
					"iconName":"iconfont-cogs",
					"id":"608c8973ce64466ba461797d896442f1",
					"isValid":"1",
					"level":2,
					"name":"资产",
					"organizationResourceId":"608c8973ce64466ba461797d896442f1",
					"parentId":"11d4de0279914a9fb17228b5b842707b",
					"roleId":"7a0fd5918f8a4aa7b52413fffda9d004",
					"type":1,
					"url":"asset/assetMain",
					"webResourceId":"6a93ebb3799b43fda8824a723148ac1c"
				},
				{
					"code":"sparePart",
					"id":"e2aee6b5477a496fa10045785042ae3c",
					"isValid":"1",
					"level":2,
					"name":"备件关联",
					"organizationResourceId":"e2aee6b5477a496fa10045785042ae3c",
					"parentId":"11d4de0279914a9fb17228b5b842707b",
					"roleId":"7a0fd5918f8a4aa7b52413fffda9d004",
					"type":1,
					"url":"asset/sparePart",
					"webResourceId":"c0d88d5c6c014659880e59324af694d8"
				}
			],
			"code":"assetManagement",
			"iconName":"domain",
			"id":"11d4de0279914a9fb17228b5b842707b",
			"isValid":"1",
			"level":1,
			"name":"资产管理",
			"organizationResourceId":"11d4de0279914a9fb17228b5b842707b",
			"roleId":"7a0fd5918f8a4aa7b52413fffda9d004",
			"type":3,
			"webResourceId":"addb0d3da673429a83c9694a3b0d3aee"
		},
		{
			"childrenResource":[
				{
					"code":"pointPrice",
					"iconName":"",
					"id":"950969431a2547339d5696ed7cc92cc3",
					"isValid":"1",
					"level":2,
					"name":"测点计费",
					"organizationResourceId":"950969431a2547339d5696ed7cc92cc3",
					"parentId":"195a5fca52f946c4b294ab2a64bf9d96",
					"roleId":"7a0fd5918f8a4aa7b52413fffda9d004",
					"type":1,
					"url":"/pointEnergyPrice/toPointPriceMain",
					"webResourceId":"01e45139c04541ffa50e947fc7b975f7"
				},
				{
					"code":"energyFlow",
					"iconName":"",
					"id":"d50fb03c51114fa58d6d58bcb0d73255",
					"isValid":"1",
					"level":2,
					"name":"能源流向图",
					"organizationResourceId":"d50fb03c51114fa58d6d58bcb0d73255",
					"parentId":"195a5fca52f946c4b294ab2a64bf9d96",
					"roleId":"7a0fd5918f8a4aa7b52413fffda9d004",
					"type":1,
					"url":"/nodepointconfigure/energyFlow",
					"webResourceId":"27d8952e2ff34b02931ce94abef82a4a"
				},
				{
					"code":"realTimeData",
					"id":"8b9682278654494482f36e80ac2a96e6",
					"isValid":"1",
					"level":2,
					"name":"实时数据",
					"organizationResourceId":"8b9682278654494482f36e80ac2a96e6",
					"parentId":"195a5fca52f946c4b294ab2a64bf9d96",
					"roleId":"7a0fd5918f8a4aa7b52413fffda9d004",
					"type":1,
					"url":"device/toRealTimeData",
					"webResourceId":"61411ca3da8c4c4182f891727410bb4b"
				},
				{
					"code":"device",
					"id":"0c5f30830b114c65b1fddd773c4f24ee",
					"isValid":"1",
					"level":2,
					"name":"设备管理",
					"organizationResourceId":"0c5f30830b114c65b1fddd773c4f24ee",
					"parentId":"195a5fca52f946c4b294ab2a64bf9d96",
					"roleId":"7a0fd5918f8a4aa7b52413fffda9d004",
					"type":1,
					"url":"devicePage/main",
					"webResourceId":"837e45bd1f734831a9e8bb3a86909840"
				},
				{
					"code":"rtu",
					"id":"b52e0168689b4aa189cfa6e2a9cb3138",
					"isValid":"1",
					"level":2,
					"name":"RTU管理",
					"organizationResourceId":"b52e0168689b4aa189cfa6e2a9cb3138",
					"parentId":"195a5fca52f946c4b294ab2a64bf9d96",
					"roleId":"7a0fd5918f8a4aa7b52413fffda9d004",
					"type":1,
					"url":"devicePage/rtu-main",
					"webResourceId":"9fc012c157494cebb14154b3745909fe"
				},
				{
					"code":"energyPrice",
					"iconName":"",
					"id":"8f4366a9590b4c0fa3fc51253757e3a7",
					"isValid":"1",
					"level":2,
					"name":"能源价格",
					"organizationResourceId":"8f4366a9590b4c0fa3fc51253757e3a7",
					"parentId":"195a5fca52f946c4b294ab2a64bf9d96",
					"roleId":"7a0fd5918f8a4aa7b52413fffda9d004",
					"type":1,
					"url":"/energyPrice/show",
					"webResourceId":"a85e301d5df84836aa589f4c40cd2737"
				},
				{
					"code":"energyFlowAllocation",
					"iconName":"",
					"id":"2dfc06c900c14f8589319fae0c845047",
					"isValid":"1",
					"level":2,
					"name":"能源流向配置",
					"organizationResourceId":"2dfc06c900c14f8589319fae0c845047",
					"parentId":"195a5fca52f946c4b294ab2a64bf9d96",
					"roleId":"7a0fd5918f8a4aa7b52413fffda9d004",
					"type":1,
					"url":"/nodepointconfigure/energyConfiguration",
					"webResourceId":"a9044420160b4811bc79fcd18772c321"
				},
				{
					"code":"virtualNode",
					"iconName":"",
					"id":"6571e08cb2eb4deda0d6a494e2102d0d",
					"isValid":"1",
					"level":2,
					"name":"虚拟节点",
					"organizationResourceId":"6571e08cb2eb4deda0d6a494e2102d0d",
					"parentId":"195a5fca52f946c4b294ab2a64bf9d96",
					"roleId":"7a0fd5918f8a4aa7b52413fffda9d004",
					"type":1,
					"url":"/nodepointconfigure/toVirtualNode",
					"webResourceId":"e8b8d5d230574f63a8f7c5e5e9b1cd6b"
				},
				{
					"code":"virtualNode",
					"iconName":"",
					"id":"6571e08cb2eb4deda0d6a494e2102d9d",
					"isValid":"1",
					"level":2,
					"name":"报表管理",
					"organizationResourceId":"6571e08cb2eb4deda0d6a494e2102d0d",
					"parentId":"195a5fca52f946c4b294ab2a64bf9d96",
					"roleId":"7a0fd5918f8a4aa7b52413fffda9d004",
					"type":1,
					"url":"/nodepointconfigure/statement",
					"webResourceId":"e8b8d5d230574f63a8f7c5e5e9b1cd6b"
				}
			],
			"code":"deviceManagement",
			"iconName":"important_devices",
			"id":"195a5fca52f946c4b294ab2a64bf9d96",
			"isValid":"1",
			"level":1,
			"name":"计量管理",
			"organizationResourceId":"195a5fca52f946c4b294ab2a64bf9d96",
			"roleId":"7a0fd5918f8a4aa7b52413fffda9d004",
			"type":3,
			"url":"",
			"webResourceId":"b200fc46555a47e28610f91c0993fc25"
		},
		{
			"childrenResource":[
				{
					"code":"attribute",
					"id":"258dd64e6c75403e942d1cf56af6a059",
					"isValid":"1",
					"level":2,
					"name":"信息模型",
					"organizationResourceId":"258dd64e6c75403e942d1cf56af6a059",
					"parentId":"3091b24ff4dc4f4ab40d62cdb0730bea",
					"roleId":"7a0fd5918f8a4aa7b52413fffda9d004",
					"type":1,
					"url":"attrPage/attributeMain",
					"webResourceId":"6fddd5e9c2e4495e9e3c33ccdbe6800a"
				},
				{
					"code":"dictionary",
					"iconName":"storage",
					"id":"3fdccbef207a4271a0f84d2a7e38d485",
					"isValid":"1",
					"level":2,
					"name":"字典管理",
					"organizationResourceId":"3fdccbef207a4271a0f84d2a7e38d485",
					"parentId":"3091b24ff4dc4f4ab40d62cdb0730bea",
					"roleId":"7a0fd5918f8a4aa7b52413fffda9d004",
					"type":1,
					"url":"dictionaryPage/main",
					"webResourceId":"afacafe5cf3b4e9d9b0f3547e502cdd1"
				}
			],
			"code":"systemSetting",
			"iconName":"brightness_high",
			"id":"3091b24ff4dc4f4ab40d62cdb0730bea",
			"isValid":"1",
			"level":1,
			"name":"系统配置",
			"organizationResourceId":"3091b24ff4dc4f4ab40d62cdb0730bea",
			"roleId":"7a0fd5918f8a4aa7b52413fffda9d004",
			"type":3,
			"url":"",
			"webResourceId":"c179c9ea092f4f02b55e7b5ea4172d76"
		},
		{
			"childrenResource":[
				{
					"code":"orgManagement",
					"id":"88ca6e77b0db4c66970a1727378e9591",
					"isValid":"1",
					"level":2,
					"name":"部门管理",
					"organizationResourceId":"88ca6e77b0db4c66970a1727378e9591",
					"parentId":"78825c03431741669cdde6b387e7fb6c",
					"roleId":"7a0fd5918f8a4aa7b52413fffda9d004",
					"type":1,
					"url":"orgPage/org-main",
					"webResourceId":"11a53292c80b4d5eaee9589fca234518"
				},
				{
					"code":"manufacturer",
					"id":"92ed8e64da9f44639867919d41616a2c",
					"isValid":"1",
					"level":2,
					"name":"制造商管理",
					"organizationResourceId":"92ed8e64da9f44639867919d41616a2c",
					"parentId":"78825c03431741669cdde6b387e7fb6c",
					"roleId":"7a0fd5918f8a4aa7b52413fffda9d004",
					"type":1,
					"url":"manufacturer/manufacturerMain",
					"webResourceId":"4a7b990693744c5cbe5eed6399f71544"
				},
				{
					"code":"post",
					"id":"3f8f9c7265324bb0a1c33a9b49bd0c77",
					"isValid":"1",
					"level":2,
					"name":"岗位管理",
					"organizationResourceId":"3f8f9c7265324bb0a1c33a9b49bd0c77",
					"parentId":"78825c03431741669cdde6b387e7fb6c",
					"roleId":"7a0fd5918f8a4aa7b52413fffda9d004",
					"type":1,
					"url":"post/postMain",
					"webResourceId":"5417828469204868aeec4ec5e77ca93e"
				},
				{
					"code":"location",
					"id":"25da2b58b87c4fd1b5a33ec10cd90a06",
					"isValid":"1",
					"level":2,
					"name":"地理节点管理",
					"organizationResourceId":"25da2b58b87c4fd1b5a33ec10cd90a06",
					"parentId":"78825c03431741669cdde6b387e7fb6c",
					"roleId":"7a0fd5918f8a4aa7b52413fffda9d004",
					"type":1,
					"url":"location/location-main",
					"webResourceId":"dd4056b0afd94da98c569e9de37351dd"
				}
			],
			"code":"orgManagement",
			"iconName":"widgets",
			"id":"78825c03431741669cdde6b387e7fb6c",
			"isValid":"1",
			"level":1,
			"name":"机构信息",
			"organizationResourceId":"78825c03431741669cdde6b387e7fb6c",
			"roleId":"7a0fd5918f8a4aa7b52413fffda9d004",
			"type":3,
			"url":"",
			"webResourceId":"c8f54d251912458f91d22025c3ce5ec7"
		}
	],
	"resultCode":"200",
	"resultMessage":"请求成功"
}