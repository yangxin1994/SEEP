/**
 * 时间格式化
 */
Date.prototype.format = function(fmt){
	var _date = {
		"M+": this.getMonth() + 1,// 月份
        "d+": this.getDate(),// 日
        "h+": this.getHours(),// 小时
        "m+": this.getMinutes(),// 分
        "s+": this.getSeconds(),// 秒
        "q+": Math.floor((this.getMonth() + 3) / 3),// 季度
        "S": this.getMilliseconds()// 毫秒
	};
	if(/(y+)/.test(fmt)){
		//RegExp.$1 与正则表达式匹配的第一个 子匹配(以括号为标志)字符串
		fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	}
	for (var key in _date){
		if (new RegExp("(" + key + ")").test(fmt)){
			fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (_date[key]) : (("00" + _date[key]).substr(("" + _date[key]).length)));
		}
	}
	return fmt;
}