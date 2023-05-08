/**
 * @author yc
 * @filename Debounce.js
 * @date 2021-11-11 星期四
 * @防抖
 */
let timeout = null

function debounce(fn, wait) {
  if(timeout !== null) clearTimeout(timeout)
  timeout = setTimeout(fn, wait)
}

export default debounce