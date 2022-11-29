
import {useEffect} from 'react';
import './App.css';

function App() {

  useEffect(() => {
    fetch("/movies")
      .then((r) => r.json())
      .then((movies) => console.log(movies));
  }, []);
  return (
    <div className="App">
      
          Learn React
  
    </div>
  );
}

export default App;
