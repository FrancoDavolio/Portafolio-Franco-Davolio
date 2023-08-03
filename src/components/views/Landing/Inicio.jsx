import Navegacion from '../../common/Navegacion'
import Presentacion from '../ParteSuperior/Presentacion'
import CardProyectos from '../ParteMedia/CardProyectos'
import AboutMe from '../ParteInferior/AboutMe'
import Habilidades from '../ParteInferior/Habilidades'
import Contant from '../../common/Contant'
import Footer from '../../common/Footer'

const Inicio = () => {
    return (
        <>
            <Navegacion></Navegacion>
            <Presentacion></Presentacion>
            <CardProyectos></CardProyectos>
            <AboutMe></AboutMe>
            <Habilidades></Habilidades>
            <Contant></Contant>
            <Footer></Footer>
        </>
    );
};

export default Inicio;