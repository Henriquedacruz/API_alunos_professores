import './App.css';
import { useState } from 'react';
import Main from './pages/Main';
import Upload from './pages/Observatorio'
import Observatorio from './pages/Observatorio'
import ObservatoryDetails from './pages/ObeservatoryDetails'
import Erro from './pages/Erro';
import Header from './components/Header';
import Footer from './components/Footer/index.js'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
//import ProtectedRouter from './protectedRouter';

function App() {
  const [isSigned, setIsSigned] = useState(false);

  return (
    <div className='App'>
    <BrowserRouter>
    <Header />
      <Routes>

        <Route path='/' element={<Main/>}/>
        <Route path='*' element={<Erro />}/>
        <Route path= '/Upload' element={<Upload/>}/>
        <Route path= '/Observatorio' element={<Observatorio/>}/>
        <Route path= '/Observatorio/Detalhes' element={<ObservatoryDetails/>}/>
      
      </Routes>
    <Footer />  
    </BrowserRouter>
    </div>
    );
}
  
export default App;
