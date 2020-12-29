import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{

  constructor(){
    super();
    this.state = {
      filterArray: '',
      array: ['star', 'wars', 'clone', 'trooper']
    }
  }

  handleChange(filter){
    this.setState({filterArray: filter})
  }

  render() {
    
      let arrayDisplay = this.state.array.filter((element, index) => {
        return element.includes(this.state.filterArray)
      }).map((element, index) => {
        return <h2 key={index}>{element}</h2>
      })
      
        
          return (
          <div className="App">
            <input onChange={e => this.handleChange(e.target.value)} type="text"/>
            {arrayDisplay}
          </div>
            )
        
      
    
  }
}
export default App;
