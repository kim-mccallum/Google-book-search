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
                {/* form stuff in here */}
                <h1>Planning to put a form here</h1>
            </div>
        );
    }
}

// Don't even need to export this
export default SearchForm;

