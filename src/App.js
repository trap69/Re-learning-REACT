import greek from  './greek.svg';
import romanstatue  from './roman-statue.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={greek} className="App-logo" alt="logo"/>
        <img src={romanstatue} className='App-roman' alt='roman'/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
      </header>
    </div>
  );
}

export default App;
