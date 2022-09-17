import { Routes, Route } from 'react-router-dom'
import './App.css';
import Connection from './components/Connection';
import LayoutError from './components/LayoutError';
import About from './pages/About/About';
import Home from './pages/Home/Home';

import Services from './pages/Services/Services';

function App() {
  return (
    <>
      <Routes>

        <Route path='/' element={<Connection />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='service' element={<Services />} />
        </Route>
        <Route path='*' element={<LayoutError />}>
        </Route>
      </Routes>
    </>
  );
}

export default App;
