// import logo from './logo.svg';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


import './App.css';
import Header from './components/layout/Header';
import Nav from './components/layout/Nav';
import Footer from './components/layout/Footer';

import HomePage from './pages/HomePage';
import NosotrosPage from './pages/NosotrosPage';
import ContactoPage from './pages/ContactoPage';
import NovedadesPage from './pages/NovedadesPage';


// Instalamos 3 dependencias:1 reac

// importo los componentes atento a las mayusculas
// despues las propiedades 


function App() {
  return (
    <div className="App">

      <Header />

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='nosotros' element={<NosotrosPage />} />
          <Route path='novedades' element={<NovedadesPage />} />
          <Route path='contacto' element={<ContactoPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />

    </div>
  );
}

export default App; 
