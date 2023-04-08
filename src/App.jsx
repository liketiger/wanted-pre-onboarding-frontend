import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Auth from './pages/Auth';
import Todo from './pages/Todo';
import GlobalStyle from './utils/global-style';

const App = () => (
  <>
    <GlobalStyle />
    <Wrapper>
      <Routes>
        <Route path='/' element={<Auth login />} />
        <Route path='/signup' element={<Auth login={false} />} />
        <Route path='/signin' element={<Auth login />} />
        <Route path='/todo' element={<Todo />} />
      </Routes>
    </Wrapper>
  </>
);

const Wrapper = styled.div`
  width: 1000px;
  margin: 100px auto;
`;

export default App;
