import Taro from '@tarojs/taro';
import { BASE_URL } from '../config/config';

async function taroRequest({ url, method = 'GET', data = {} }) {
  const res = await Taro.request({
    url: BASE_URL + url,
    header: {
      'Content-Type': 'application/json',
    },
    data,
    method: method.toUpperCase(),
    mode: 'cors',
    credentials: 'include',
    timeout: 6000,
    dataType: 'json',
  })
  const { statusCode, data: resData, errMsg } = res || {};
  if (statusCode === 200) return resData;
  throw new Error(`网络请求错误，状态码${statusCode}，${errMsg}`);
}

export default taroRequest;
