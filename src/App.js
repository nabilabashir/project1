import logo from './logo.svg';
import './App.css';
import Project from './Project';
import Main from './Main';
import AboutUs from './AboutUs'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Project />
      <Main />
      <AboutUs />
    </div>
  );
}

export default App;
