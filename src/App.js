import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import './App.css';

function App() {
  return (
    <>
    <Router basename='3d-portfolio'>
      <Routes>
        <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path='projects' element={<Projects />} />
        </Route >
      </Routes>
    </Router>

    </>
  );
}

export default App;
