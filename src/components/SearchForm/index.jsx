
import React, { Component } from 'react'
import { getMovies } from '../../api/movieServices'

class SearchForm extends Component {
  state = {
    inputMovie: '' 
  }

  _handleChange = (e) => {
    this.setState({inputMovie: e.target.value})
  } 

  _handleSubmit = (e) => {
    e.preventDefault();
    const {inputMovie} =this.state;
    getMovies(inputMovie)
      .then(result => {
        const { Search = [], totalResults = "0" } = result; 
        console.log({ Search, totalResults })
        this.props.onResults(Search);
      });
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit} >
        <div className="field has-addons">
          <div className="control">
            <input className="input" 
              type="text"
              onChange={this._handleChange} 
              placeholder="Movies to search" />
          </div>
          <div className="control">
            <button className="button is-info">
              Search
            </button>
          </div>
        </div>
      </form>
    )
  }
}

export default SearchForm;
