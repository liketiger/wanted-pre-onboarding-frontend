import React from 'react'
import styled from 'styled-components';

const AuthTitle = props => <AuthTitleUI>{props.children}</AuthTitleUI>;

const AuthTitleUI = styled.p`
  margin-top: 20px;
  font-size: 30px;
  color: #696969;
  font-weight: bold;
`;

export default AuthTitle;
