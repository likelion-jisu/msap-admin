import React from 'react';
import styled, { css } from 'styled-components';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import WriteActonButtons from './WriteActionButtons';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

const WriteFormBlock = styled.div`
  h3 {
    margin-top: 1rem;
    color: cyan;
    margin-botton: 3rem;
    margin-left: 0.5rem;
  }
`;
const StyledInput = styled.input`
  width: ${(props) => props.width || '250'}px;
  diplay: flex;
  height: 30px;
  align-items: center;
  justify-content: center;
  margin-left: 0.5rem;
  margin-bottom: 1rem;
`;

const StyledBox = styled.div`
  margin: 0;
  background: ${(props) => props.color || '#7986cb'};
  color: white;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 30px;
  margin-left: 0.5rem;
  margin-bottom: 1rem;
  padding: 2px;
`;

const StyledName = styled.h2`
  color: black;
  margin: 10;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 30px;
`;

const StyledForm = styled.div`
  margin: 0;
  width: 50%;
  height: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
  float: left;
`;

const WriteForm = ({ form, onChange, onSubmit }) => {
  const classes = useStyles();
  return (
    <WriteFormBlock>
      <WriteActonButtons></WriteActonButtons>
      <div>
        <table>
          <td>
            <StyledBox color="#5c6bc0">테스트명</StyledBox>
          </td>
          <td>
            <StyledInput
              width="800"
              name="t_name"
              onChange={onChange}
              value={form.t_name}
            ></StyledInput>
          </td>
        </table>
      </div>
      <div>
        <StyledForm>
          <table>
            <tr>
              <StyledName>기본설정</StyledName>
            </tr>
            <tr>
              <td>
                <StyledBox>에이전트</StyledBox>
              </td>
              <td>
                <StyledInput
                  name="agent_num"
                  onChange={onChange}
                  value={form.agent_num}
                ></StyledInput>
              </td>
            </tr>
            <tr>
              <td>
                <StyledBox>에이전트별 Vuser</StyledBox>
              </td>
              <td>
                <StyledInput
                  name="vuser_num"
                  onChange={onChange}
                  value={form.vuser_num}
                ></StyledInput>
              </td>
            </tr>
            <tr>
              <td>
                <StyledBox>테스트 대상 서버</StyledBox>
              </td>
              <td>
                <StyledInput
                  name="target_server"
                  onChange={onChange}
                  value={form.target_server}
                ></StyledInput>
              </td>
            </tr>
            <tr>
              <td>
                {' '}
                <StyledBox>테스트 기간</StyledBox>
              </td>
              <td className={classes.container} noValidate>
                <TextField
                  id="time"
                  type="datetime"
                  format="hh:mm:ss"
                  defaultValue="00:00"
                  className={classes.textField}
                  InputLabelProps={{
                    shrink: true,
                  }}
                  inputProps={{
                    step: 300, // 5 min
                  }}
                />
              </td>
            </tr>
            <tr>
              <td>
                <StyledBox>실행 횟수</StyledBox>
              </td>
              <td>
                <StyledInput
                  name="test_count"
                  onChange={onChange}
                  value={form.test_count}
                ></StyledInput>
              </td>
            </tr>
          </table>
        </StyledForm>
        <StyledForm>
          {' '}
          <table>
            <tr>
              <StyledName></StyledName>
            </tr>

            <tr>
              <td height="20px">
                <StyledBox>Ramp_up 사용</StyledBox>
              </td>

              <td>
                <RadioGroup
                  row
                  aria-label="position"
                  name="ramp_up_use_yn"
                  value={form.ramp_up_use_yn}
                  onChange={onChange}
                >
                  <FormControlLabel value="Y" control={<Radio />} label="Y" />
                  <FormControlLabel value="N" control={<Radio />} label="N" />
                </RadioGroup>
              </td>
            </tr>
            <tr>
              <td>
                <StyledBox>초기 개수</StyledBox>
              </td>
              <td>
                <StyledInput
                  name="init_count"
                  onChange={onChange}
                  value={form.init_count}
                ></StyledInput>
              </td>
            </tr>
            <tr>
              <td>
                <StyledBox>증가단위</StyledBox>
              </td>
              <td>
                <StyledInput
                  name="inc_unit"
                  onChange={onChange}
                  value={form.inc_unit}
                ></StyledInput>
              </td>
            </tr>
            <tr>
              <td>
                <td>
                  <StyledBox>Ramp_up 주기</StyledBox>
                </td>
              </td>
              <td>
                <StyledInput
                  name="period"
                  onChange={onChange}
                  value={form.period}
                ></StyledInput>
              </td>
            </tr>
          </table>
        </StyledForm>
      </div>
    </WriteFormBlock>
  );
};

export default WriteForm;
