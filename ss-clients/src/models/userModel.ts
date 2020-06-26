import { Effect, ImmerReducer, Reducer, Subscription, useSelector } from 'umi';
import * as uerServers from '@/services/user';
import { message } from 'antd';

export interface UserModelState {
  loginStatus: boolean;
  username: string;
  password: string;
}

export interface UserModelType {
  namespace: 'user';
  state: UserModelState;
  effects: {
    query: Effect;
    login: Effect;
    register: Effect;
    getEmailCode: Effect;
  };
  reducers: {
    save: Reducer<UserModelState>;
    // 启用 immer 之后
    // save: ImmerReducer<UserModelState>;
  };
  //   subscriptions: { setup: Subscription };
}

const UserModel: UserModelType = {
  namespace: 'user',

  state: {
    loginStatus: false,
    username: '',
    password: '',
  },

  effects: {
    *query({ payload }, { call, put }) {},
    *login({ payload, callback }, { call, put }) {
      try {
        const result = yield call(uerServers.login, payload);

        if (callback && typeof callback === 'function') {
          callback(result);
        }

        // yield put({ type: 'save', payload: result });
      } catch (err) {
        console.log(err);
        message.error('数据获取失败'); // 打印错误信息
      }
    },
    *register({ payload, callback }, { call, put }) {
      try {
        const result = yield call(uerServers.register, payload);

        if (callback && typeof callback === 'function') {
          callback(result);
        }

        // yield put({ type: 'save', payload: result });
      } catch (err) {
        message.error('数据获取失败'); // 打印错误信息
      }
    },
    *getEmailCode({ payload, callback }, { call, put }) {
      try {
        const result = yield call(uerServers.getEmailCode, payload);

        if (callback && typeof callback === 'function') {
          callback(result);
        }

        // yield put({ type: 'save', payload: result });
      } catch (err) {
        message.error('数据获取失败'); // 打印错误信息
      }
    },
  },
  reducers: {
    save(state, action) {
      // console.log(action);
      return {
        ...state,
        ...action.payload,
      };
    },
    // 启用 immer 之后
    // save(state, action) {
    //   state.name = action.payload;
    // },
  },
  //   subscriptions: {
  //     setup({ dispatch, history }) {
  //       return history.listen(({ pathname }) => {
  //         if (pathname === '/') {
  //           dispatch({
  //             type: 'query',
  //           })
  //         }
  //       });
  //     }
  //   }
};

export default UserModel;
