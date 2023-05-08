/**
 * @author yc
 * @filename apiService.js
 * @date 2021-11-11 星期四
 * @接口路径 
 */
import * as axios from '@/utils/axios'
import api from '@/utils/api'

const {get, post} = axios

//示例
export function postSessionUser (params) {
    return post(api.getSessionUser, params)
}