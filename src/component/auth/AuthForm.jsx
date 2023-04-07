import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Input from '../Input';
import requestHttp from '../../utils/fetch-settings';
import Button from '../Button';
import CONSTANTS from '../../utils/constants';

const AuthForm = props => {
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();
  const emailInput = useRef();
  const pwdInput = useRef();

  const { getAuth } = CONSTANTS;
  const { login } = props;

  let token = '';

  const clearInput = () => {
    emailInput.current.value = '';
    pwdInput.current.value = '';
  };

  const getValue = val => {
    token = val.access_token;
  };

  const httpHandler = async body => {
    if (!login) {
      requestHttp(getAuth(login, body, getValue));
      navigate('/signin', { replace: true });
    } else {
      await requestHttp(getAuth(login, body, getValue));
      localStorage.setItem('jwt', token);
      navigate('/todo', { replace: true });
    }
  };

  const submitHandler = e => {
    e.preventDefault();
    const { value: email } = emailInput.current;
    const { value: password } = pwdInput.current;

    clearInput();
    const body = { email, password };
    setIsValid(false);
    httpHandler(body);
  };

  const validate = () => {
    const { value: email } = emailInput.current;
    const { value: pwd } = pwdInput.current;

    if (email.includes('@') && pwd.length >= 8) setIsValid(true);
    else setIsValid(false);
  };

  return (
    <Form onSubmit={submitHandler}>
      <AuthInput 
        type='text'
        data-testid='email-input'
        placeholder='이메일'
        name='email'
        ref={emailInput}
        onChange={validate} 
      />
      <AuthInput 
        type='password'
        data-testid='password-input'
        placeholder='비밀번호'
        ref={pwdInput}
        onChange={validate}
      />
      <AuthBtn 
        type='submit'
        data-testid={login ? 'signin-button' : 'signup-button'}
        disabled={!isValid}
      >
        {login ? '로그인' : '회원가입'}
      </AuthBtn>
      <AuthLink to={login ? '/signup' : '/signin'} onClick={clearInput} >{login ? '회원가입' : '로그인'}</AuthLink>
    </Form>
  )
};

const Form = styled.form`
  height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AuthInput = styled(Input)`
  width: 350px;
  font-size: 20px;
  height: 40px;
  padding-left: 10px;
  margin-bottom: 20px;

  &::placeholder {
    color: #A0A0A0;
  }
`;

const AuthBtn = styled(Button)`
  margin: 10px 0;
  width: 150px;
  height: 40px;
  background-color: orange;
  color: white;
  font-size: 20px;

  &:disabled {
    background-color: grey;
    box-shadow: none;
    color: #B0B0B0;
    cursor: not-allowed;
  }
`;

const AuthLink = styled(Link)`
  position: relative;
  top: 30px;
  color: blue;
`

export default AuthForm;
