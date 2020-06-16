import React from 'react';
import SettingContainer from '../containers/write/SettingContainer';
import WriteTemplate from '../components/write/WriteTemplate';
import WriteActonButtonsContainer from '../containers/write/WriteActionButtonsContainer';

const WritePage = () => {
  return (
    <WriteTemplate>
      <WriteActonButtonsContainer />
      <SettingContainer type="setting" />
    </WriteTemplate>
  );
};
export default WritePage;
