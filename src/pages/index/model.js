// import Taro from '@tarojs/taro';
// import * as indexApi from './service';

export default {
  namespace: 'index',
  state: {
    count: 1,
  },

  effects: {
    * addCount({ payload }, { call, put }) {
      yield put({
        type: 'updateState',
        payload: {
          count: payload,
        }
      })
    }
  },

  reducers: {
    updateState(state, { payload }) {
      return { ...state, ...payload };
    }
  }
}