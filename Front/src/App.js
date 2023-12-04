import React from 'react';
import './App.css';
import Crud from './componentes/Crud'; 
import 'bootstrap/dist/css/bootstrap.min.css';  // Bootstrap CSS
import Header from './componentes/Header'; 
import Footer from './componentes/Footer';  
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ApiPlantas from './componentes/ApiPlantas';

function App() {
  return (
    <div>
      <Router>
        <Header />
        <div className="App">
          <Routes>
            <Route path='/' element={<Crud />} />
            <Route path="/search" element={<ApiPlantas />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
