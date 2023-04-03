import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import SignForm from './pages/SignForm';

function App() {
  return <>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignForm />} />
      <Route path="/signin" element={<LoginForm />} />
      <Route path="/todo" element={<TodoList />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
  </>;
}

export default App;
