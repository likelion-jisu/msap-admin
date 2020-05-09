import { createAction, handleActions } from 'redux-actions';
import prooduce from 'immer';
const INITIALIZE_FORM = 'write/INITIALIZE'; // 모든 내용 초기화
const CHANGE_FIELD = 'write/CHANGE_FIELD'; //특정 KEY 값 바꾸기

export const changeField = createAction(
  CHANGE_FIELD,
  ({ form, key, value }) => ({
    form,
    key,
    value,
  }),
);
export const initializeForm = createAction(INITIALIZE_FORM, (form) => form);
const initialState = {
  setting: {
    t_name: '',
    agent_num: '',
    vuser_num: '',
    target_server: '',
    test_time: '',
    test_count: '',
    ramp_up_use_yn: 'Y',
    init_count: '',
    init_wait_time: '',
    inc_unit: '',
    period: '',
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
  },
  initialState,
);

export default write;
