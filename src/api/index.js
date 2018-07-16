/*
包含n个接口请求函数的模块
 */
// export function reqAddress() {
//
// }
import ajax from './ajax'
export const reqAddress = () => ajax(`http://39.108.5.84/demo/adapter/list.do`)
