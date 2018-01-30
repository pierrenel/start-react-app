// IPv4 addresses
const os = require('os'),path = require('path'),ifaces = os.networkInterfaces();
let ipv4 = '';
for (let key in ifaces) {
    ifaces[key].forEach((item,index) => {
        if (item.family == 'IPv4' && item.address != '127.0.0.1' && !item.internal) {
            ipv4 = item.address;
            return;
        }
    });
}    

module.exports = {
	dev: {
		host: ipv4,
		port: '8080',
		// outputDir: '' // packed into memory
        browserUrl: 'http://' + ipv4 + ':8080/dev/index.html',
    	apiURL: 'http://localhost:3000', 
        // apiURL: 'http://api.test.com', // interface domain in test env
        projectURL: '/dev/' 
	},
	test: {
        host: ipv4,
        port: '3000',
        outputDir: path.resolve(__dirname, '../prod/test'), // packed into some dir
        browserUrl: 'http://' + ipv4 + ':3000/test/index.html',
        apiURL: 'http://localhost:3000',
        // apiURL: 'http://api.test.com', // interface domain in test env
        projectURL: '/test/',
        // projectURL: 'http://project.test.com/app/' // project address in test env  
	},
    normal: {
        host: ipv4,
        port: '3000',
        outputDir: path.resolve(__dirname, '../prod/normal'), // packed into some dir
        browserUrl: 'http://' + ipv4 + ':3000/normal/index.html',
        apiURL: 'http://localhost:3000',
        // apiURL: 'http://api.normal.com', // interface domain in normal env
        projectURL: '/normal/',
        // projectURL: 'http://project.normal.com/app/' // project address in normal env  
    }   
}