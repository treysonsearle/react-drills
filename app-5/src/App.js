import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Image from './Image'
  



class App extends Component {
  render(){
    return (
      <div className="App">
      <Image url={"https://lumiere-a.akamaihd.net/v1/images/og-generic_02031d2b.png?region=0%2C0%2C1200%2C1200"} />
    </div>
  );
  }
}

export default App;