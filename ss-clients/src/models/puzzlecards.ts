import { Effect, ImmerReducer, Reducer, Subscription } from 'umi';
import request from '../util/request'; // request 是 demo 项目脚手架中提供的一个做 http 请求的方法，是对于 fetch 的封装，返回 Promise
import { message } from 'antd';
import * as uerServers from '@/services/user';
const delay = (millisecond: number) => {
  return new Promise(resolve => {
    setTimeout(resolve, millisecond);
  });
};

export interface cardType {
  id: number;
  setup: string;
  punchline: string;
}
export interface puzzlecardsModelState {
  name?: string;
  data: Array<cardType>;
  counter: number;
}
interface IndexModelType {
  namespace: 'puzzlecards';
  state: puzzlecardsModelState;
  effects: {
    queryInitCards: Effect;
  };
  reducers: {
    addNewCard: Reducer<puzzlecardsModelState>;
    // 启用 immer 之后
    // save: ImmerReducer<puzzlecardsModelState>;
  };
  //   subscriptions: { setup: Subscription };
}

const puzzlecards: IndexModelType = {
  namespace: 'puzzlecards',
  state: {
    data: [
      {
        id: 1,
        setup: 'Did you hear about the two silk worms in a race?',
        punchline: 'It ended in a tie',
      },
      {
        id: 2,
        setup: "What happens to a frog's car when it breaks down?",
        punchline: 'It gets toad away',
      },
    ],
    counter: 100,
  },
  reducers: {
    addNewCard(state, { payload: newCard }) {
      if (!state) return { data: [], counter: 0 };
      const nextCounter = state.counter + 1;
      const newCardWithId = { ...newCard, id: nextCounter };
      const nextData = state.data.concat(newCardWithId);
      return {
        data: nextData,
        counter: nextCounter,
      };
    },
  },
  effects: {
    *queryInitCards(_, sagaEffects) {
      const { call, put } = sagaEffects;
      // const endPointURI = 'https://08ad1pao69.execute-api.us-east-1.amazonaws.com/dev/random_joke';
      const endPointURI = '/dev/random_joke';

      try {
        // 加入 try catch 捕获抛错
        const puzzle = yield call(request, endPointURI);
        yield put({ type: 'addNewCard', payload: puzzle });

        yield call(delay, 3000);

        const puzzle2 = yield call(request, endPointURI);
        yield put({ type: 'addNewCard', payload: puzzle2 });
      } catch (e) {
        message.error('数据获取失败'); // 打印错误信息
      }
    },
  },
  //   effects: {
  //     *query({ payload }, { call, put }) {},
  //   },
  //   subscriptions: {
  //     setup({ dispatch, history }) {
  //       return history.listen(({ pathname }) => {
  //         if (pathname === '/') {
  //           dispatch({
  //             type: 'query',
  //           });
  //         }
  //       });
  //     },
  //   },
};
export default puzzlecards;
