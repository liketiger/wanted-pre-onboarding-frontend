import { useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
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
    httpHandler(body);
  };

  const validate = () => {
    const { value: email } = emailInput.current;
    const { value: pwd } = pwdInput.current;

    if (email.includes('@') && pwd.length >= 8) setIsValid(true);
    else setIsValid(false);
  };

  return (
    <form onSubmit={submitHandler}>
      <Input 
        type='text'
        data-testid='email-input'
        ref={emailInput}
        onChange={validate} 
      />
      <Input 
        type='password'
        data-testid='password-input'
        ref={pwdInput}
        onChange={validate}
      />
      <Button 
        type='submit'
        data-testid={login ? 'signin-button' : 'signup-button'}
        disabled={!isValid}
      >
        {login ? '로그인' : '회원가입'}
      </Button>
      <Link to={login ? '/signup' : '/signin'}>{login ? '회원가입' : '로그인'}</Link>
    </form>
  )
};

export default AuthForm;
