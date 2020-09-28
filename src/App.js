import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from './components/main/main'
import Main2 from './components/main2/main2'
import Main3 from './components/main3/main3'
import Cards from './components/card/card'

function App() {
  return (
    <div className="App">
      <Main/>
      <Main2/>
      <Main3/>
      <Cards/>
      <div className='plus'>
            <i class="fa fa-commenting" aria-hidden="true" style={{fontSize:'2rem',color:'white'}}></i>
    </div>
    </div>
  );
}

export default App;
