import './App.scss';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/layout';
import Home from './components/home';
import Projects from './components/projects';
import Contact from './components/contact';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Layout />}> 
        <Route index element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
    </>
  );
}

export default App;
