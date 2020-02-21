import React, { Component } from 'react';
import './SearchForm.css';


// Most complex component - Gets the parameters, (Key word search, apply search filters) and formats and makes the request
class SearchForm extends Component {
    // Add methods for calling the API within an onSubmit method
    handleSubmit = (event) => {
        const url = 'https://www.googleapis.com/books/v1/volumes?';
        const apiKEY  = 'AIzaSyC1-pejzfhSrLcjQatjyYXkJ5fwGLmWmNM';
        event.preventDefault();
        // Generate request
        const request = url + 'q=' + event.target.SearchText.value + '&' + event.target.bookType.value + '&' + event.target.printType.value + '&key=' + apiKEY;
        console.log(request)

        fetch(request)
            .then(res => {
            if(!res.ok) {
                throw new Error('Something went wrong, please figure this out.');
            }
            return res;
            })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                this.props.setBookResultsList(data.items)
            })
            .catch(err => {
                console.log(err)
            });
      }

    render() {
        // Return/render a form with event handlers to pass data back to SearchScreen
        return (
            <div className="SearchForm">
                <form onSubmit={e => this.handleSubmit(e)}>
                    <label htmlFor="SearchText">Search:</label>
                    <input 
                        type="text" 
                        name="SearchText" 
                        id="Search" 
                        placeholder="henry"/>
                    <button type="submit" >Search</button>
                    <br/>
                    <label htmlFor="printType">Print Type</label>
                    <select id="printType" name="printType">
                        <option value="printType=all">all</option>
                        <option value="printType=books">books</option>
                        <option value="printType=magazines">magazines</option>
                    </select>
                    <label htmlFor="bookType">Book Type</label>
                    <select id="bookType" name="bookType">
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

