import { createAction, handleActions } from 'redux-actions';
import prooduce from 'immer';
import createRequestSaga, {
  createRequestActionTypes,
} from '../lib/createRequestSaga';
import * as postsAPI from '../lib/api/posts';
import { takeLatest } from 'redux-saga/effects';
const INITIALIZE_FORM = 'write/INITIALIZE'; // 모든 내용 초기화
const CHANGE_FIELD = 'write/CHANGE_FIELD'; //특정 KEY 값 바꾸기
const [
  WRITE_POST,
  WRITE_POST_SUCCESS,
  WRITE_POST_FAILURE,
] = createRequestActionTypes('write/WRITE_POST'); //등록
export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form,
    key,
    value,
  }),
);

export const writePost = createAction(
  WRITE_POST,
  ({
    t_id,
    t_name,
    agent_num,
    vuser_num,
    target_server,
    test_time,
    test_count,
    ramp_up_use_yn,
    init_count,
    init_wait_time,
    inc_unit,
    period,
  }) => ({
    t_id,
    t_name,
    agent_num,
    vuser_num,
    target_server,
    test_time,
    test_count,
    ramp_up_use_yn,
    init_count,
    init_wait_time,
    inc_unit,
    period,
  }),
);

const writePostSaga = createRequestSaga(WRITE_POST, postsAPI.writePost);
export function* writeSaga() {
  yield takeLatest(WRITE_POST, writePostSaga);
}

export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);
const initialState = {
  setting: {
    t_id: '',
    t_name: '',
    agent_num: '',
    vuser_num: '',
    target_server: '',
    test_time: '00:00:00',
    test_count: '',
    ramp_up_use_yn: 'Y',
    init_count: '',
    init_wait_time: '',
    inc_unit: '',
    period: '',
    post: null,
    postError: null,
  },
};

const write = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, key, value } }) =>
      prooduce(state, (draft) => {
        draft[form][key] = value;
      }),
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    }),
    [WRITE_POST]: (state) => ({
      ...state,
      //post와 postError를 초기화
      post: null,
      postError: null,
    }),
    [WRITE_POST_SUCCESS]: (state, { payload: post }) => ({
      ...state,
      post,
    }),
    [WRITE_POST_FAILURE]: (state, { payload: postError }) => ({
      ...state,
      postError,
    }),
  },
  initialState,
);

export default write;
