import React, { Component } from 'react';
import './BookList.css';

import BookItem from '../BookItem/BookItem';

class BookList extends Component {
    // Simple component - Receives the book results list as props and renders a list using the BookItem component

    render() {
        // Map over the list of books returned to create list of BookItem components
        const results = this.props.responseItems.map((item, idx) => {
            // Construct a call to BookItem
            const title = item.volumeInfo.title;
            const authors = item.volumeInfo.authors;
            //Sometimes there is no price - Deal with this later
            // if (item.saleInfo.saleability === "NOT_FOR_SALE"){
            //     const price = 'Not available';
            // } else {
            //     const price = item.saleInfo.listPrice.amount;
            // }
            const description = item.volumeInfo.description;
            const image = item.volumeInfo.imageLinks.smallThumbnail;
            return <BookItem title={title} authors={authors} description={description} image={image} key={idx}/>
        });
        console.log(results);
        return (
            <div className="BookList">
                {results}
            </div>
        );
    }
}

export default BookList;
