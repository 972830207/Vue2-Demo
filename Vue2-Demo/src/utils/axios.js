/**
 * @author yc
 * @filename axios.js
 * @date 2021-11-10 星期三
 * @封装axios
 */
import axios from 'axios'
import router from '@/router'
export const Axios = axios.create({
    headers: {
        'Content-Type': 'application/json'
    },
    baseURL: '',
    timeout: 30000,
});

// POST传参序列化(添加请求拦截器)
Axios.interceptors.request.use(config => {
    // 在发送请求之前做某件事
    return config
}, error => {
    return Promise.reject(error)
});

// 返回状态判断(添加响应拦截器)
Axios.interceptors.response.use(res => {
    if (!!res.data.code && res.data.code !== 200) {
        if (res.data.msg) {
            console.log(res.data.msg);
        } else {
            console.log('接口异常');
        }
        //获取token的方式，保存在本地或者vuex中
        res.data.token && localStorage.setItem('token',res.data.token)
        return res
    }
    return res
}, error => {
    let _response = error.response
    switch (_response.status) {
        case 403:
            alert('请求的格式有误');
            return;
        case 401:
            localStorage.removeItem('token',"");
            alert('身份过期，请重新登录');
            return router.push('/Login');
        case 403:
            alert('禁止访问');
            return;
        case 404:
            alert('服务器未找到相关资源')
            return;
        case 500:
            alert('服务器异常')
            return;
        case 502:
            alert('服务器网关错误')
            //this.$message({type: 'error', message: '服务器网关错误'});
            return;
    }
    // 返回 response 里的错误信息
    return Promise.reject(error)
});

// 封装get请求
export function get(url, data = {}) {
    if (process.env.VUE_APP_PROVINCE == 'HAINAN') {
        return _CommonAxios({
            method: 'GET',
            url: url,
            data: data
        })
    } else {
        return new Promise((resolve, reject) => {
            Axios.get(url, {
                    params: data
                })
                .then(response => {
                    resolve(response)
                }).catch(err => {
                    reject(err)
                })
        })
    }
}

// 封装post请求
export function post(url, data = {}) {
    if (process.env.VUE_APP_PROVINCE == 'HAINAN') {
        return _CommonAxios({
            method: 'POST',
            url: url,
            data: data
        })
    } else {
        return new Promise((resolve, reject) => {
            Axios.post(url, data)
                .then(response => {
                    resolve(response)
                }).catch(err => {
                    reject(err)
                })
        })
    }
}