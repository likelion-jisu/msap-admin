import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm } from '../../modules/write';
import WriteForm from '../../components/write/WriteForm';

const SettingForm = () => {
  const dispatch = useDispatch();
  const { form } = useSelector(({ write }) => ({
    form: write.setting,
  }));

  const onChange = (e) => {
    const { value, name } = e.target;
    dispatch(
      changeField({
        form: 'setting',
        key: name,
        value,
      }),
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    dispatch(initializeForm('setting'));
  }, [dispatch]);

  return (
    <WriteForm
      type="setting"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    />
  );
};

export default SettingForm;
