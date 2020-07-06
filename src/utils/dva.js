import { createLogger } from 'redux-logger';
// dva-core：封装了redux和redux-saga的插件
import { create } from 'dva-core';
// dva-loading：管理页面的loading状态
import createLoading from 'dva-loading';
import { IS_SHOW_REDUX_LOGGER } from '../config/config';

let app, store, dispatch, registered;

function createApp(opt = {}) {
  // redux日志
  if (IS_SHOW_REDUX_LOGGER) {
    opt.onAction = [createLogger()];
  }
  app = create(opt);
  // laoding中间件
  app.use(createLoading({}));

  if (!registered) {
    opt.models.forEach(model => app.model(model));
    registered = true;
    app.start();
  }
  store = app._store;
  app.getStore = () => store;
  app.use({
    onError(err) {
      console.log('createApp err', err);
    }
  })
  dispatch = store.dispatch;
  app.dispatch = dispatch;
  return app;
}

export default {
  createApp,
  getDispatch() {
    return app.dispatch;
  }
}

