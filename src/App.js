import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./App.css";
import Inicio from './components/views/Landing/Inicio'
import Navegacion from './components/common/Navegacion';


function App() {
  return (
    <BrowserRouter>
    <Navegacion></Navegacion>
    <Routes>
    <Route exaple path='/inicio' element={<Inicio></Inicio>}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
