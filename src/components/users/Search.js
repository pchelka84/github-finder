import React, { Component } from "react";

class Search extends Component {
  state = {
    text: "",
  };

  // This is great when you have multiple input fields
  // as you can reuse it
  // otherwise, you can do
  // this.setState({ text: e.taget.value })
  onChange = (e) => this.setState({ [e.target.name]: e.target.value });

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state.text);
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
