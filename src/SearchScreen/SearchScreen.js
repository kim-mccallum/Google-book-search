import React, { Component } from 'react';
import './SearchScreen.css';

import SearchForm from '../SearchForm/SearchForm';
import BookList from '../BookList/BookList';


class SearchScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookResults: []
    };
  }

  setBookResultsList(response) {
    // debugger;
    this.setState({
        bookResults: [...response]
    });
  }

  render() {
    return (
      <div className="SearchScreen">
        <h1 className="Banner">Google Book Search</h1>
            {/* Receive data to update state - pass callback props */}
            <SearchForm setBookResultsList={this.setBookResultsList}/>
            {/* Pass data to BookList as props for static */}
            {/* <BookList responseItems={this.props.responseItems}/> */}
            {/* Pass data to BookList as props for static */}
            <BookList responseItems={this.state.bookResults}/>
      </div>
    );
  }
}

export default SearchScreen;
