import { Routes , Route } from 'react-router-dom';
import './App.css';
import About from './routes/About';
import Contact from './routes/Contact';
import Service from './routes/Service';
import Home from './routes/Home';

function App() {
  return (
    <div className="App">

    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/about" element={<About/>}></Route>
    <Route path="/service" element={<Service/>}></Route>
    <Route path="/contact" element={<Contact/>}></Route>
    </Routes> 
    </div>
  );
}

export default App;
