import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './Components/Header';
import Home from './Components/Home';
import SejaCliente from './Components/SejaCliente';
import Footer from './Components/Footer';
import Vantagens from './Components/Vantagens';
import Icard from './Components/Icard';
import Login from './Components/Login';
import Cadastro from './Components/Cadastro';


function App() {
  return (
  
   <>
  <Router>
  <Header />
    <Routes>
    
    <Route path='/' element={<Home />} />
    <Route path='/SejaCliente' element={<SejaCliente />}  />
    <Route path='/Vantagens' element={<Vantagens />} />
    <Route path='/Icard' element={<Icard />} />
    <Route path='/Login' element={<Login />}/>
    <Route path='/Cadastro' element={<Cadastro />} />
    </Routes>
    <Footer />
  </Router>
   </>
    
   
  );
}

export default App;
