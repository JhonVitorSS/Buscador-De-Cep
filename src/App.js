import './App.css';
import All from "./components/All"
import React from 'react';

function App() {
  const [dados, setDados] = React.useState(null)
  return (
    <div className="App">

      <All/>


     
    </div>
  );
}

export default App;
