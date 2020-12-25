import React from "react";
import axios from 'axios'
import Footer from "../Footer";
import Suggestions from "../Suggestions";

class Search extends React.Component {

  state = {
    query: '',
    results: []
  }

  getInfo = (query) => {
    axios.get("db.json")
      .then(({ data }) => {
        this.setState({
          results: data.images
        })
      })
  }

  handleInputChange = () => {
    this.setState({
      query: this.search.value
    }, () => {
      if (this.state.query && this.state.query.length >= 1) {
        //this.setState({results: "search:"+this.state.query})
        this.getInfo(this.search.value)
      } else if (!this.state.query) {
        //query is empty. show no results.
        this.setState({results: []})
      }
    })
  }

  render() {
    
    return (
      <div className="page">
      
      <form onSubmit={e => {e.preventDefault();}}>
          <input
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}
        />
      </form>
      
      <Suggestions 
        results={this.state.results}
        query = {this.state.query}
        />

      <Footer />
      </div>
    );
  }
}

export default Search;