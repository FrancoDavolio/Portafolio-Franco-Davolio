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
    <div>
    <Navegacion></Navegacion>
    <Presentacion></Presentacion>
    <CardProyectos></CardProyectos>
    <AboutMe></AboutMe>
    <Habilidades></Habilidades>
    <Contant></Contant>
    <Footer></Footer>
    </div>
  );
}

export default App;
