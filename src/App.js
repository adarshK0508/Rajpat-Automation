import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home.js';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import About from './components/About/About.js';
import Projects from './components/Projects/Projects.js';
import Blogs from './components/Blogs/Blogs.js';
import Contact from './components/Contact/Contact.js';
import Privacy from './components/Privacy/Privacy.js';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/projects" element={<Projects />}/>
          <Route exact path="/blogs" element={<Blogs />}/>
          <Route exact path="/contact" element={<Contact />}/>
          <Route exact path="/privacy" element={<Privacy />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
