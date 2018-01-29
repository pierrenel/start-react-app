import fetchIntercept from 'fetch-intercept';
import qs from 'qs';
import { Toast } from 'antd-mobile';
import { token,deviceId,contentType } from './variable';

/***********配置fetch*************/
fetchIntercept.register({
    request: function (url, config) {
        // 显示loading
        Toast.loading('正在加载',0,null,true);

    	// 添加请求域名
    	url = process.env.apiURL + url;

        // 初始化配置项
        config = config || {};
        config.params = config.params || {};
        config.headers = config.headers || {};
        config.data = config.data || {};

    	// 添加URL中的请求参数
    	let params = Object.assign(config.params,{
            token: token, 
    		deviceId: deviceId
    	});
    	url += '?' + qs.stringify(params);

        // 如果是POST请求
        if(config.method == 'POST' && !config.headers['Content-Type']){
            // 设置数据格式
            config.headers['Content-Type'] = contentType;

            // 添加body中的上传参数
            config.body = qs.stringify(config.data);
        }
       
        return [url, config];
    },

    requestError: function (error) {

        return Promise.reject(error);
    },

    response: function (response) {
        // 隐藏loading
        Toast.hide();

        return response;
    },

    responseError: function (error) {

        return Promise.reject(error);
    }
});
