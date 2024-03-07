import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home';
import './App.css';

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          {/* <Route path='projects' element={<Projects />} /> */}
          {/* <Route path='about' element={<About />} /> */}
          {/* <Route path='contact' element={<Contact />} /> */}
        </Route >
      </Routes>
    </Router>

    </>
  );
}

export default App;
