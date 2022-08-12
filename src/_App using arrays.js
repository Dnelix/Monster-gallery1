import {Component} from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor() {
    super();
    this.state = {
      monsters: [
        {
          id: 1,
          name: 'Linda',
          ln: 'Felix'
        },
        {
          id: 2,
          name: 'Chidera',
          ln: 'Felix'
        },
        {
          id: 3,
          name: 'Pamela',
          ln: 'Felix'
        },
        {
          id: 4,
          name: 'Christy',
          ln: 'Felix'
        }
      ],
    }
  }

  render(){
    return (
      <div className="App">
        {
          this.state.monsters.map((monster) => {
            return <div key={monster.id}> <h1>{monster.name}</h1> - {monster.ln}</div>;
          }) //the map method reads an existing array from left to right and creates a new array with all the data
        }
      </div>
    );
  }
}

export default App;
