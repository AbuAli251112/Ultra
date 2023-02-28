import { Component } from 'react';
import './App.css';
import NavbarComponent from './components/Navbar/NavbarComponent';
import AllComponent from './components/All/AllComponent';
import ContactComponent from './components/Contact/ContactComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route exact path='/' element={<AllComponent />} />;
          <Route path='/contact' element={<ContactComponent />} />;
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
