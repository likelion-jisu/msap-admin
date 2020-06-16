import axios from '../customAxios';

const _addTestCase = (testCase) => ({
  type: 'ADD_TestCase',
  testCase,
});

export const addTestCase = (
  setting = {
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
  },
) => {
  return (dispatch) => {
    const testCase = {
      t_id: setting.t_id,
      t_name: setting.t_name,
      agent_num: setting.agent_num,
      vuser_num: setting.vuser_num,
      target_server: setting.target_server,
      test_time: setting.test_time,
      test_count: setting.test_count,
      ramp_up_use_yn: setting.ramp_up_use_yn,
      init_count: setting.init_count,
      init_wait_time: setting.init_wait_time,
      inc_unit: setting.inc_unit,
      period: setting.period,
    };

    return axios.post('testCase/create', testCase).then((result) => {
      dispatch(_addTestCase(result.data));
    });
  };
};

/*const _removeBook = ({ id } = {}) => ({
    type: 'REMOVE_BOOK',
    id
});
 
export const removeBook = ({ id } = {}) => {
    return (dispatch) => {
        return axios.delete(`books/${id}`).then(() => {
            dispatch(_removeBook({ id }));
        })
    }
};
 
const _editBook = (id, updates) => ({
    type: 'EDIT_BOOK',
    id,
    updates
});
 
export const editBook = (id, updates) => {
    return (dispatch) => {
        return axios.put(`books/${id}`, updates).then(() => {
            dispatch(_editBook(id, updates));
        });
    }
};
 */
const _getTestCases = (testCases) => ({
  type: 'GET_TestCase',
  testCases,
});

export const getTestCases = () => {
  return (dispatch) => {
    return axios.get('testCases').then((result) => {
      const testCases = [];

      result.data.forEach((item) => {
        testCases.push(item);
      });

      dispatch(_getTestCases(testCases));
    });
  };
};
