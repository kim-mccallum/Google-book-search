import React, { Component } from 'react';
import './BookList.css';

import BookItem from '../BookItem/BookItem';

class BookList extends Component {
    // Simple component - Receives the book results list as props and renders a list using the BookItem component
 

    render() {
        console.log(this.props.responseItems);
        // Map over the list of books returned to create list of BookItem components
        const results = this.props.responseItems.map((item, idx) => {
            // Construct a call to BookItem
            const title = item.volumeInfo.title;
            const authors = item.volumeInfo.authors;
            // Deal with price issue
            let price = 'NA'
            // const price = item.saleInfo.listPrice.amount;
            if (item.saleInfo.saleability==="FOR_SALE"){
                price = item.saleInfo.listPrice.amount
            }
            const description = item.volumeInfo.description;
            // Add some logic because sometimes there is no thumbnail
            const image = item.volumeInfo.imageLinks.smallThumbnail;
            return <BookItem title={title} authors={authors} price={price} description={description} image={image} key={idx}/>
        });
        return (
            <div className="BookList">
                {results}
            </div>
        );
    }
}

export default BookList;
