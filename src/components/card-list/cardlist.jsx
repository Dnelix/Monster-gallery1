import { Component } from "react";

class CardList extends Component {
    render (){

        const {name, id, phone, website} = this.props.items; // this is called destructuring or mapping object reference to variables. This way: id=monster.id , phone=monster.phone , etc.

        return (
            <div className="cardlist" key={id}>
                <img src={`https://robohash.org/${id}`} alt={name} />
                <h1>{name}</h1> 
                <p>- {website} ({phone})</p>
            </div>
        )
    }
}

export default CardList;