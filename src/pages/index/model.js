import { getFun } from "./service";

export default {
  namespace: 'index',
  state: {
    data: null,
  },

  effects: {
    * getData({ payload, cb }, { call, put }) {
      const res = yield call(getFun, payload);
      const { info = {} } = res || {};
      cb && cb();
      yield put({
        type: 'updateState',
        payload: {
          data: info.data,
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