import React from 'react';
import SettingForm from '../../containers/write/SettingContainer';
import { connect } from 'react-redux';
import { addTestCase } from '../../actions/testCases';

const AddTestCase = (props) => (
  <div>
    <SettingForm
      onSubmitTestCase={(testCase) => {
        props.dispatch(addTestCase(testCase));
        props.history.push('/');
      }}
    />
  </div>
);

export default connect()(AddTestCase);
