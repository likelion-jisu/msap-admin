import React from 'react';
import styled from 'styled-components';

const WriteTemplateBlock = styled.div``;

const WriteTemplate = ({ children }) => {
  return <WriteTemplateBlock>{children}</WriteTemplateBlock>;
};

export default WriteTemplate;
