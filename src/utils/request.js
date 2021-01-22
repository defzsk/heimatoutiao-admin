// 网络请求模块
import axios from 'axios'
// 创建一个axios实例
const request = axios.create({
    // 请求的基础路径
    baseURL:'http://ttapi.research.itcast.cn/'
})
// 导出请求方法
export default request