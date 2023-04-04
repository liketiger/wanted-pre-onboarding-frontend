import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Todo = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem('jwt')) navigate('/signin');
  }, []);

  return (
    <>
      <p>todo page.</p>
    </>
  );
};

export default Todo;
