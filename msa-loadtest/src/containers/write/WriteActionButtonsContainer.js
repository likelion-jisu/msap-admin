import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { writePost } from '../../modules/write';
//import { withRouter } from 'react-router-dom';
import WriteActionButtons from '../../components/write/WriteActionButtons';

const WriteActionButtonsContainer = ({ history }) => {
  const dispatch = useDispatch();
  const {
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
    post,
    postError,
  } = useSelector(({ write }) => ({
    t_id: write.t_id,
    t_name: write.t_name,
    agent_num: write.agent_num,
    vuser_num: write.vuser_num,
    target_server: write.target_server,
    test_time: write.test_time,
    test_count: write.test_count,
    ramp_up_use_yn: write.ramp_up_use_yn,
    init_count: write.init_count,
    init_wait_time: write.init_wait_time,
    inc_unit: write.inc_unit,
    period: write.period,
    post: write.post,
    postError: write.postError,
  }));

  //등록
  const onPublish = () => {
    dispatch(
      writePost({
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
  };
  useEffect(() => {
    if (postError) {
      console.log(postError);
    }
  }, [history, post, postError]);
  return <WriteActionButtons onPublish={onPublish} />;
};
export default WriteActionButtonsContainer;
