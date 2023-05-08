const webpack = require('webpack');
let path
// if(process.env.VUE_APP_PROVINCE == 'HENAN'){
if (process.env.NODE_ENV === 'production') { //生产
    path = './path'
} else {
    path = '/'
}
// }else{
//   path = '/tackle'
// }
module.exports = {
    publicPath: path,
    // assetsDir: './static',
    // 配置less
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true,
            }
        },
    },
    devServer: {
        overlay: {
            warnings: false,
            errors: true
        },
        port: 8080,
        // host: '192.168.1.159', // 真机调试时本机host
        host: 'localhost',
        proxy: {
            '/api': {  //api改成对应的接口前缀
                // target: 'http://10.5.17.69:8080/',
                target: process.env.VUE_APP_BASE_URL + 'api',
                // ws:true,
                changOrigin: true,
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    },
    productionSourceMap: false
};