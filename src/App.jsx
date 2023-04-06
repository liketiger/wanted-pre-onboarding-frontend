import { Route, Routes } from 'react-router-dom';
import './App.css';
import Auth from './pages/Auth';
import Todo from './pages/Todo';

const App = () => (
  <Routes>
    <Route path='/' element={<Auth login />} />
    <Route path='/signup' element={<Auth login={false} />} />
    <Route path='/signin' element={<Auth login />} />
    <Route path='/todo' element={<Todo />} />
  </Routes>
);

export default App;
