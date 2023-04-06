import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from '../component/auth/AuthForm';

const Auth = props => {
  const navigate = useNavigate();
  const { login } = props;

  useEffect(() => {
    if (localStorage.getItem('jwt')) navigate('/todo');
  }, []);

  return (
    <>
      <p>{login ? '로그인' : '회원가입'}</p>
      <AuthForm login={login} />
    </>
  );
};

export default Auth;
