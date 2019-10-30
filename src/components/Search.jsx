import React, { Component } from "react"

class Search extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      venues: [],
      location: ""
    
    }
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.props.handleSearch(this.state.location);
  }

  render() {
    return (
      <form onSubmit = { this.handleSubmit } className = {""}>
        <input
        name="location"
        className="location-input"
        placeholder="Enter Location"
        onChange={this.handleChange}
      />
      <button>Submit</button>
    </form>
    )
  }
}

export default Search;