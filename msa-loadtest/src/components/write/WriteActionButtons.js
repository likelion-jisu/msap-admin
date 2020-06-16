import React from 'react';
import styled from 'styled-components';

import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
}));

const WriteActionButtonsBlock = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
  margin-top: -1.5 remj;
`;

const WriteButton = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button variant="outlined"> 등록 </Button>
      <Button variant="outlined" color="primary">
        수정
      </Button>
      <Button variant="outlined" color="secondary">
        삭제
      </Button>
    </div>
  );
};

const WriteActionButtons = () => {
  return (
    <WriteActionButtonsBlock>
      <WriteButton />
    </WriteActionButtonsBlock>
  );
};

export default WriteActionButtons;
