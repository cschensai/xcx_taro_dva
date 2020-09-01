// request 添加拦截器
import Taro from '@tarojs/taro';
import { BASE_URL } from '../config/config';

let tempRes = {};
async function taroRequest({ url, method = 'GET', data = {} }) {
  try {
    // 对响应结果，添加拦截器chuloi
    Taro.addInterceptor((chain = {}) => {
      return chain.proceed(chain.requestParams).then(res => {
        // 对结果统一处理
        const { statusCode, data: resData, errMsg } = res || {};
        if (statusCode === 200) {
          tempRes = resData;
          return tempRes;
        }
        // 处理页面跳转时，拦截器执行两次的问题
        if (statusCode === undefined) {
           return tempRes;
        }
        throw new Error(`网络请求错误，状态码${statusCode}，${errMsg}`);
      })
    });
    const resData = await Taro.request({
      url: `${BASE_URL}${url}`,
      header: {
        'Content-Type': 'application/json',
      },
      data,
      method: method.toUpperCase(),
      mode: 'cors',
      credentials: 'include', // 允许跨域共享cookie
      timeout: 6000,
      dataType: 'json',
    })
    return resData;
  } catch (error) {
    console.log('请求发生错误', error);
  }
}

export default taroRequest;
