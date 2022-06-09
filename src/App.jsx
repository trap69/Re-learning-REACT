import Main from './components/Main';
import greek from  './greek.svg';
import romanstatue  from './roman-statue.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Main/>
        <img src={greek} className="App-logo" alt="logo"/>
        <img src={romanstatue} className='App-roman' alt='roman'/>
        <a
          className=""
          href=""
          target=""
          rel=""
        >
          
        </a>
      </header>
    </div>
  );
}

export default App;
