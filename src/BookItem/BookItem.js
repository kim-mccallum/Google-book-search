import React, { Component } from 'react';
import './BookItem.css';


class BookItem extends Component {
    // Simple component - Receives a single book as props and renders the info

    render() {
        const authors = this.props.authors.toString(); 

        return (
            <div className="BookItem">
                <h1 className="BookTitle">{this.props.title}</h1>
                <img className="BookImage" src={this.props.image}></img>
                <div className="BookDetailsContainer">
                    <p>Author: {authors}</p>
                    <p>Cost: Put this in later</p>
                    <p>{this.props.description}</p>
                </div>
            </div>
        );
    }
}

export default BookItem;