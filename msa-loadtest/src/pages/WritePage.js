import React from 'react';
import SettingForm from '../containers/write/SettingForm';
import WriteTemplate from '../components/write/WriteTemplate';

const WritePage = () => {
  return (
    <WriteTemplate>
      <SettingForm type="setting" />
    </WriteTemplate>
  );
};
export default WritePage;
