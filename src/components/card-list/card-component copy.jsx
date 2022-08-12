import {Component} from 'react';
import CardList from './cardlist';
import './card-list.css';

class CardGroup extends Component {
    render() {

        const {monsters} = this.props;

        return (
            <div className='card-group'>
                {
                    monsters.map((monster) => {

                        const {name, id, phone, website} = monster; // this is called destructuring or mapping object reference to variables. This way: id=monster.id , phone=monster.phone , etc.

                        return (
                            <div className="cardlist" key={id}>
                                <img src={`https://robohash.org/${id}`} alt={name} />
                                <h1>{name}</h1> 
                                <p>- {website} ({phone})</p>
                            </div>
                        )
                    }) //the map method reads an existing array from left to right and creates a new array with all the data
                }

            </div>
        )
    }
}

export default CardGroup;