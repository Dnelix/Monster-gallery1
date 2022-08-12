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

                        return (
                            <CardList items = {monster} /> 
                        )
                    }) //the map method reads an existing array from left to right and creates a new array with all the data
                }

            </div>
        )
    }
}

export default CardGroup;