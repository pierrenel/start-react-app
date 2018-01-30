import fetchIntercept from 'fetch-intercept';
import qs from 'qs';
import { Toast } from 'antd-mobile';
import { token,deviceId,contentType } from './variable';

/***********fetch conf*************/
fetchIntercept.register({
    request: function (url, config) {
        // show loading
        Toast.loading('正在加载',0,null,true);

    	// add api domian 
    	url = process.env.apiURL + url;

        // initialize conf
        config = config || {};
        config.params = config.params || {};
        config.headers = config.headers || {};
        config.data = config.data || {};

    	// add api params
    	let params = Object.assign(config.params,{
            token: token, 
    		deviceId: deviceId
    	});
    	url += '?' + qs.stringify(params);

        // POST
        if(config.method == 'POST' && !config.headers['Content-Type']){
            // set data format in body
            config.headers['Content-Type'] = contentType;

            // set uploaded params in body
            config.body = qs.stringify(config.data);
        }
       
        return [url, config];
    },

    requestError: function (error) {

        return Promise.reject(error);
    },

    response: function (response) {
        // hide loading
        Toast.hide();

        return response;
    },

    responseError: function (error) {

        return Promise.reject(error);
    }
});
