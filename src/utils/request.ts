// 创建实例时配置默认值
import axios from "axios";
const request = axios.create({
  baseURL: "https://netease-cloud-music-api-plum-iota.vercel.app",
  timeout: 10000,
});

// 添加响应拦截器
request.interceptors.response.use(
  function (response) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    console.log("response", response);
    if (response.data.code == 200) {
      return response.data;
    }
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    return Promise.reject(error);
  }
);

export default request;
