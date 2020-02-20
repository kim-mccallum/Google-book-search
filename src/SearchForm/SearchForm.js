import React, { Component } from 'react';
import './SearchForm.css';

// Most complex component - Gets the parameters, (Key word search, apply search filters) and formats and makes the request
class SearchForm extends Component {
    // Add methods for calling the API within an onSubmit method
    // onSubmit()

    render() {
        // Return/render a form with event handlers to pass data back to SearchScreen
        return (
            <div className="SearchForm">
                {/* add later - onSubmit={e => this.handleSubmit(e)} */}
                <form >
                    <label htmlFor="Search">Search:</label>
                    <input 
                        type="text" 
                        name="Search" 
                        id="Search" 
                        placeholder="henry"/>

                    <label htmlFor="print-type">Print Type</label>
                    <select id="print-type" name="print-type">
                        <option value="All">Select one...</option>
                        {/* {options} */}
                    </select>
                    <label htmlFor="book-type">Book Type</label>
                    <select id="book-type" name="book-type">
                        <option value="All">Select one...</option>
                        {/* {options} */}
                    </select>
                </form>
            </div>
        );
    }
}

// Don't even need to export this
export default SearchForm;

