import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm } from '../../modules/write';
import WriteForm from '../../components/write/WriteForm';
import moment from 'moment';
import 'rc-time-picker/assets/index.css';
const SettingContainer = () => {
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

  const onDatetime = (time) => {
    time = moment(time, 'HH:mm:ss').format('HH:mm:ss');

    dispatch(
      changeField({
        form: 'setting',
        key: 'test_time',
        value: time,
      }),
    );
  };

  const onSubmit = (e) => {
    e.preventDefault();
  };

  const onAddTestCase = (e) => {
    e.preventDefault();
  };

  //const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeForm('setting'));
  }, [dispatch]);

  return (
    <div>
      <WriteForm
        type="setting"
        form={form}
        onChange={onChange}
        onSubmit={onSubmit}
        onDatetime={onDatetime}
        onAddTestCase={onAddTestCase}
      />
    </div>
  );
};

export default SettingContainer;
