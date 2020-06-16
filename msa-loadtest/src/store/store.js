import { createStore, applyMiddleware } from 'redux';
import testCases from '../reducers/testCases';
import thunk from 'redux-thunk';

export default () => {
  return createStore(testCases, applyMiddleware(thunk));
};
