import './App.css';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar/>
      </header>
      <main className="App-main">
        <Home/>
      </main>
    </div>
  );
}

export default App;
