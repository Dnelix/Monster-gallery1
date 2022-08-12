import { Component } from "react";
import './search-box.css'; //this CSS file will still apply to everyother thing. Separating her only

class SearchBox extends Component {
    render () {

        return (
            <input 
                className={`box ${this.props.className}`} //used two classNames here. One is explicitly stated (i.e box). The other is dynamically parsed from wherever this input is used
                type="search" 
                placeholder={this.props.placeholder}
                onChange={this.props.onChangeHandler}
            />
        )
    }
    
}

export default SearchBox;