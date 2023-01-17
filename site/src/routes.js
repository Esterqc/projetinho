
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import Home from './pages/home';
import AgendarOrcamento from './pages/agendarOrcamento';
import FotosEtrabalhos from './pages/fotosEtrabalhos';
import HistoricodeOrcamento from './pages/historicodeOrcamento';
import ListarAgendamento from './pages/listarAgendamento';
import TelaDepoimentos from './pages/telaDepoimentos';
import LoginAdmin from './pages/loginAdmin';
import QuemSomos from './pages/quemSomos';
import LoginCliente from './pages/loginCliente';
import ServicosqRealizamos from './pages/servicosqRealizamos';
import TelaAdminstrador from './pages/telaAdministrador';
import TelaCadastro from './pages/telaCadastro';
import OrçamentoParte2 from './pages/OrcamentoParte2';





const Rotas = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/AgendarOrcamento' element={<AgendarOrcamento/>}/>
            <Route path='/FotosEtrabalhos' element={<FotosEtrabalhos/>}/>
            <Route path='/HistoricodeOrcamento' element={<HistoricodeOrcamento/>}/>
            <Route path='/ListarAgendamento' element={<ListarAgendamento/>}/>
            <Route path='/TelaDepoimentos' element={<TelaDepoimentos/>}/>
            <Route path='/LoginAdmin' element={<LoginAdmin/>}/>
            <Route path='QuemSomos' element={<QuemSomos/>}/>
            <Route path= '/LoginCliente' element={<LoginCliente/>}/>
            <Route path='/ServicosqRealizamos' element={<ServicosqRealizamos/>}/>
            <Route path='TelaAdministrador' element={<TelaAdminstrador/>}/>
            <Route path='/TelaCadastro' element={<TelaCadastro/>}/>
            <Route path='/OrçamentoParte2' element={<OrçamentoParte2/>}/>
           





        </Routes>
        </BrowserRouter>
    )
}

export default Rotas;
