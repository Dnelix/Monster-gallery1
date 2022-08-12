import {Component} from 'react';
//import logo from './logo.svg';
import CardGroup from './components/card-list/card-component';
import SearchBox from './components/search-box/search-box';
import './App.css';

class App extends Component{

  constructor() {
    super();

    this.state = {
      monsters: [], //declaring the monsters empty array
      searchField: '', //declaring a searchfield variable
    }

    //console.log('1');
  }


  componentDidMount() { //componentDidMount is an example of a lifecycle method. It runs the first time the component gets loaded into the DOM.
    //console.log('3');

    fetch('https://jsonplaceholder.typicode.com/users') //retrieves a list of users from the website
      .then(response => response.json()) //stores this result in JSON format
      .then((users) => this.setState(() => {
        
        return { monsters: users} //assign the users array to the monsters array

      },
      () => {
        console.log(this.state);
      }));
  }


  searchChange = (event) => {
    //console.log(event);
    console.log(event.target.value);

    const searchField = event.target.value.toLocaleLowerCase(); //converting the string to lowercase because the includes function is case sensitive

    this.setState(
      () => {
        return { searchField }; 
      }
    );
  };


  render() {
    //console.log('2');

    const { monsters, searchField } = this.state;
    const { searchChange } = this;

    const filteredItems = monsters.filter((item) => {
      return item.name.toLocaleLowerCase().includes(searchField); //converted the item names to lowercase so that comparison is easier
    });


    return (
      <div className="App">
        <h1 class="title"> Monster Gallery </h1>

        <SearchBox onChangeHandler = {searchChange} className = 'homesearch' placeholder="Search for monsters" />

        <CardGroup monsters = {filteredItems} />

      </div>
    );
  }
}

export default App;
