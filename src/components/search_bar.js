import React, {Component } from 'react';
import {Form, FormGroup, FormControl} from 'react-bootstrap';

class SearchBar extends Component{
  constructor(props){
    super(props);

    this.state = { term: ''};

  }
  render(){
    return(
      <Form horizontal className="searchBarForm ">
      <FormGroup>
      <div className="search-bar">
        <FormControl
          type="text"
          placeholder="Miko TV: Search Here"
          value={this.state.term}
          onChange={(event) => this.onInputChange(event.target.value)}
          onKeyPress={this.props.onKeyPress}
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
