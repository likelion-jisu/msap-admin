import client from './client';

export const writePost = ({
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
}) =>
  client.post('api/', {
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
  });
