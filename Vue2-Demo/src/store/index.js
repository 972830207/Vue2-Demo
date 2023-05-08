/**
 * @author yc
 * @filename index.js
 * @date 2021-11-11 星期四
 * @仓库，放一些用户不可见的数据 用store.commit("",参数)来存，store.getters[""]来取
 */
import Vue from 'vue'
import Vuex from 'vuex'
import workStore from './modules/workStore'
Vue.use(Vuex)

const store = new Vuex.Store({
    modules: {
        workStore
    }
})

export default store