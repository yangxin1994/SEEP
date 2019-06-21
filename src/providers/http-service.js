import axios from 'axios';
import qs from 'qs';

const baseURL = "/api";
// 请求成功
const CODE_200 = 200;
const MSG_200 = "请求成功";
// 客户端请求参数有误
const CODE_400 = 400;
const MSG_400 = "请求参数有误";
// 用户尚未登录或登录超时
const CODE_401 = 401;
const MSG_401 = "用户尚未登录或登录超时";
// 用户没有此权限
const CODE_403 = 403;
const MSG_403 = "用户没有此权限";
// 无效请求
const CODE_404 = 404;
const MSG_404 = "无效请求";
// 系统异常，请联系管理员
const CODE_500 = 500;
const MSG_500 = "系统异常，请联系管理员";
// 查询结果冲突
const CODE_600 = 600;
const MSG_600 = "查询结果冲突";
// 客户端请求参数为空
const CODE_10001 = 10001;
const MSG_10001 = "请求参数为空";

   
axios.interceptors.request.use(config => {  
	// store.commit('UPDATE_LOADING',true);
	return config;
}, error => {  
	return Promise.reject(error);
})  
   
   
axios.interceptors.response.use(response => {  
	return response;
}, error => {  
  	return Promise.resolve(error.response);
});
   
function errorState(response) {  
	// store.commit('UPDATE_LOADING',false);
  	// 如果http状态码正常，则直接返回数据
  	if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {  
    	return response  
      	// 如果不需要除了data之外的数据，可以直接 return response.data  
  	}else{  
    	Vue.$message({
			message: '网络异常',
			type: 'error'
		});
  	}  
}  
   
function successState(res) {  
	// store.commit('UPDATE_LOADING',false);
  	// 统一判断后端返回的错误码
  	// isTips 是否不提示请求错误信息
  	switch (parseInt(res.data.resultCode)){
  		case CODE_200:
  			res.message = MSG_200;
  			res.isTips = true;
  			break;
  		case CODE_400:
  			res.message = MSG_400;
  			break;
  		case CODE_401:
  			res.message = MSG_401;
  			break;
  		case CODE_403:
  			res.message = MSG_403;
  			break;
  		case CODE_404:
  			res.message = MSG_404;
  			break;
  		case CODE_500:
  			res.message = MSG_500;
  			break;
  		case CODE_600:
  			res.message = MSG_600;
  			break;
  		case CODE_10001:
  			res.message = MSG_10001;
  			break;
  		default:
  			res.message = "未知错误!";
  			res.isTips = true;
  			break;
  	}
  	
  	if(!res.isTips) {
  		Vue.$message({
			message: res.message,
			type: 'error'
		});
  	}
}  
const httpServer = (opts, data) => {  
   
    let Public = { //公共参数  
    	
    }  
   
    let httpDefaultOpts = { //http默认配置  
		method: opts.method,  
      	baseURL,  
      	url: opts.url,  
      	timeout: 10000,  
      	params: Object.assign(Public, data),  
      	data: qs.stringify(Object.assign(Public, data)),  
      	headers: opts.method == 'get' ? {  
        	"X-Requested-With": "XMLHttpRequest",  
        	"Accept": "application/json",  
        	"Content-Type": "application/json; charset=UTF-8" 
      	} : {  
        	"X-Requested-With": "XMLHttpRequest",  
        	"Content-Type": "application/x-www-form-urlencoded; charset=UTF-8" 
      	}  
    }
   
    if(opts.method == 'get') {  
    	delete httpDefaultOpts.data  
    } else {  
      	delete httpDefaultOpts.params  
    }  
       
    let promise = new Promise(function(resolve, reject) {  
      	axios(httpDefaultOpts).then(  
        	(res) => {  
          		successState(res);
          		resolve(res);
        	}  
      	).catch(  
        	(response) => {  
          		errorState(response);
          		reject(response);
        	}  
      	)  
    });
  	return promise;
}
   
export default httpServer