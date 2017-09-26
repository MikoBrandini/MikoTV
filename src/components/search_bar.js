import React, {Component } from 'react';
import {Form, FormGroup, FormControl} from 'react-bootstrap';



//la jeno estas funkcia komponanto
// const SearchBar = () => {
// return <input type="text"/>;
// }

class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = { term: ''};
  }
  render(){
    return(
      <Form horizontal>
      <FormGroup>
      <div className="search-bar">
        <FormControl
          type="text"
          placeholder="Miko TV: Search Here"
          value={this.state.term}
          onChange={(event) => this.onInputChange(event.target.value)}
        />
      </div>
      </FormGroup>
      </Form>
      );
}

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
  }

export default SearchBar;
