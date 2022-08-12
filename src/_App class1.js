import {Component} from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  constructor() {
    super();
    this.state = {
      name: {firstname:'Pamela', lastname:'Felix'},
      company: 'KPMG'
    }
  }

  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello I am <code>{this.state.name.firstname} {this.state.name.lastname}</code>. <br/>
            I work at {this.state.company}.
          </p>
          <button
            className="App-link"
            href="#"
            rel="noopener noreferrer"
            onClick={() => {
              //this.state.name = 'Felix'
              this.setState({company: 'Zenith'});
              this.setState({name: {firstname:'Pam', lastname:'Perfect'}});
              console.log(this.state);
            }}
          >
            Change my name (asynchronous)
          </button> 
          
          <br/>
          
          <button
            onClick={() => {
              this.setState(() => {
                return {
                  name: {firstname: 'Andrew', lastname: 'Liver Salt'}
                }
              }, () => {
                console.log(this.state);
              }); //here setstate takes two functions. The fist fnctn is an updater function with a return statement. The second function is the callback function
            }}
          >
            Change state synchronously
          </button>
        </header>
      </div>
    );
  }
}

export default App;
