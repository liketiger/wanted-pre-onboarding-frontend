import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import requestHttp from '../utils/fetch-settings';

const Auth = props => {
  const [isValid, setIsValid] = useState(false);
  const navigate = useNavigate();
  const { login } = props;
  const emailInput = useRef();
  const pwdInput = useRef();
  let token = '';

  useEffect(() => {
    if (localStorage.getItem('jwt')) navigate('/todo');
  }, []);

  const clearInput = () => {
    emailInput.current.value = '';
    pwdInput.current.value = '';
  };

  const getValue = val => {
    token = val.access_token;
  };

  const httpHandler = async body => {
    const req = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      getValue,
      body
    };
    if (!login) {
      requestHttp({ ...req, url: '/auth/signup' });
      navigate('/signin', { replace: true });
    } else {
      await requestHttp({ ...req, url: '/auth/signin' });
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
      <input
        type='text'
        name='email'
        data-testid='email-input'
        ref={emailInput}
        onChange={validate}
      />
      <input
        type='password'
        name='password'
        data-testid='password-input'
        ref={pwdInput}
        onChange={validate}
      />
      <button
        type='submit'
        data-testid={login ? 'signin-button' : 'signup-button'}
        disabled={!isValid}
      >
        {login ? '로그인' : '회원가입'}
      </button>
    </form>
  );
};

export default Auth;
