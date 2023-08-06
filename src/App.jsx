import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navegacion from './components/common/Navegacion';
import Presentacion from './components/views/ParteSuperior/Presentacion';
import CardProyectos from './components/views/ParteMedia/CardProyectos';
import AboutMe from './components/views/ParteInferior/AboutMe';
import Habilidades from './components/views/ParteInferior/Habilidades';
import Contant from './components/common/Contant';
import Footer from './components/common/Footer';


function App() {
  return (
    <div className="app-container">

    <div><Navegacion></Navegacion></div>
    
    <div><Presentacion></Presentacion></div>
    
    <div><CardProyectos></CardProyectos></div>
    
    <div><AboutMe></AboutMe></div>
    
    <div><Habilidades></Habilidades></div>
    
    <div><Contant></Contant></div>
    
    <div><Footer></Footer></div>
    
    </div>
  );
}

export default App;
