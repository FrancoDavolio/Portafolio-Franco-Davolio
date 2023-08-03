import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Inicio from './components/views/Inicio'

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route exaple path='/' element={<Inicio></Inicio>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
