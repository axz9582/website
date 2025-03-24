import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Experience from './pages/Experience';
import Projects from './pages/Projects';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <main className="App-main">
        <Router>
          <Routes>
            <Route index Component={Home} />
            <Route path="/about" Component={About} />
            <Route path="/contact" Component={Contact} />
            <Route path="/experience" Component={Experience} />
            <Route path="/projects" Component={Projects} />
          </Routes>
        </Router>
      </main>
    </div>
  );
}

export default App;
