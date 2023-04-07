import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import InnerWrapper from '../component/InnerWrapper';
import AuthForm from '../component/auth/AuthForm';
import AuthTitle from '../component/auth/AuthTitle';

const Auth = props => {
  const navigate = useNavigate();
  const { login } = props;

  useEffect(() => {
    if (localStorage.getItem('jwt')) navigate('/todo');
  }, []);

  return (
    <InnerWrapper>
      <AuthTitle>{login ? '로그인' : '회원가입'}</AuthTitle>
      <AuthForm login={login} />
    </InnerWrapper>
  );
};

export default Auth;
