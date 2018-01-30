const uuidv1 = require('uuid/v1');

// local params
const contentType = 'application/x-www-form-urlencoded; charset=UTF-8',
	token = localStorage.getItem('token'),
	deviceId = localStorage.getItem('deviceId') || (() => {
		let deviceId = uuidv1();
		localStorage.setItem('deviceId',deviceId);
		return deviceId;
	})();	

export {
	contentType,
	token,
	deviceId
}