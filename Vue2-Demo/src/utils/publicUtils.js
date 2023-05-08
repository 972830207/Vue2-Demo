/**
 * @author yc
 * @filename publicUtils.js
 * @date 2021-11-11 星期四
 * @一些公共的函数 
 */
 export function resetTokenAndClearUser() {
     // 退出登陆 清除用户资料
     localStorage.setItem('token', '')
     localStorage.setItem('userName', '')
 }