import { Route, Routes } from 'react-router-dom';
import './App.css';
import Auth from './pages/Auth';
import Todo from './pages/Todo';
import NotFound from './pages/NotFound';

const App = () => (
  <Routes>
    <Route path='/' element={<Auth login={false} />} />
    <Route path='/signup' element={<Auth login={false} />} />
    <Route path='/signin' element={<Auth login />} />
    <Route path='/todo' element={<Todo />} />
    <Route path='/NotFound' element={<NotFound />} />
  </Routes>
);

export default App;
