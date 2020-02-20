import React, { Component } from 'react';
import './SearchForm.css';


// Most complex component - Gets the parameters, (Key word search, apply search filters) and formats and makes the request
class SearchForm extends Component {
    // Add methods for calling the API within an onSubmit method
    handleSubmit(e){
        debugger;
        console.log(e.target.value)
        // API stuff - add this soon but first get the values from the form
        const url = 'https://www.googleapis.com/books/v1/volumes?';
        const apiKEY = 'AIzaSyC1-pejzfhSrLcjQatjyYXkJ5fwGLmWmNM';
        
    }

    render() {
        // Return/render a form with event handlers to pass data back to SearchScreen
        return (
            <div className="SearchForm">
                <form onSubmit={e => this.handleSubmit(e)}>
                    <label htmlFor="Search">Search:</label>
                    <input 
                        type="text" 
                        name="Search" 
                        id="Search" 
                        placeholder="henry"/>
                    <button type="submit" >Search</button>
                    <label htmlFor="print-type">Print Type</label>
                    <select id="print-type" name="print-type">
                        <option value="printType=all">all</option>
                        <option value="printType=books">books</option>
                        <option value="printType=magazines">magazines</option>
                    </select>
                    <label htmlFor="book-type">Book Type</label>
                    <select id="book-type" name="book-type">
                        <option value="">No Filter</option>
                        <option value="filter=partial">partial text</option>
                        <option value="filter=full">full text</option>
                        <option value="filter=free-ebooks">free-ebooks</option>
                        <option value="filter=paid-ebooks">paid-ebooks</option>
                        <option value="filter=ebooks">ebooks</option>
                    </select>
                </form>
            </div>
        );
    }
}

// Don't even need to export this
export default SearchForm;

