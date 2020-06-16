const testCaseReducerDefaultState = [];

export default (state = testCaseReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_TestCase':
      return [...state, action.testCase];
    case 'REMOVE_TestCase':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_TestCase':
      return state.map((testCase) => {
        if (testCase.id === action.id) {
          return {
            ...testCase,
            ...action.updates,
          };
        } else {
          return testCase;
        }
      });
    case 'GET_TestCase':
      return action.testCases;
    default:
      return state;
  }
};
