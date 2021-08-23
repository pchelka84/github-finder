import React, { Component } from "react";
import PropTypes from "prop-types";

class Search extends Component {
  state = {
    text: "",
  };

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
  };

  // This is great when you have multiple input fields
  // as you can reuse it
  // otherwise, you can do
  // this.setState({ text: e.taget.value })
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    this.props.searchUsers(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Searc Users...'
          value={this.state.text}
          onChange={this.onChange}
        />
        <input
          type='submit'
          value='Search'
          className='btn btn-dark btn-block'
        />
      </form>
    );
  }
}

export default Search;
