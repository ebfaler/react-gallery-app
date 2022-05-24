import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Search extends Component {

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSearch(this.tags.value);
    let path = `/${this.tags.value}`;
    console.log(path);
    this.props.history.push(path);

  }

  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit} >
        <input type="search"
          name="search"
          //input is the callback argument
          ref={(input) => this.tags = input}
          placeholder="Search..." />
        <button type="submit" id="submit" className="search-button"><i className="material-icons icn-search">search</i></button>
      </form>
    );
  }
}


export default withRouter(Search);