import './App.css';
import Navbar from './components/navbar/Navbar';
import Home from './components/home/Home';
import About from './components/about/About';
import Contact from './components/contact/Contact';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
      <Navbar /> 

      <main>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
            </Routes>
      </main>

    </>

  );
}

export default App;
