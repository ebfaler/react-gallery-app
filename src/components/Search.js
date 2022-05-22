import React, {Component} from 'react';   
import { withRouter } from 'react-router-dom';

 class Search extends Component {
  
    state = {
      searchText: ''
    }
    
    onSearchChange = e => {
      this.setState({ searchText: e.target.value });
    }
    
    handleSubmit = e => {
      e.preventDefault();
      this.props.onSearch(this.tags.value);
      // console.log(this.tags.value);

      let path = `/${this.tags.value}`;
      console.log(path);
      this.props.history.push(path);

    }
    
    render() {  
      return (
        <form className="search-form" onSubmit={this.handleSubmit} >
          {/* <label className="is-hidden" htmlFor="search">Search</label> */}
          <input type="search" 
                 onChange={this.onSearchChange}
                 name="search" 
                 //input is the callback argument
                 ref ={(input) => this.tags = input}
                 placeholder="Search..." />
          <button type="submit" id="submit" className="search-button"><i className="material-icons icn-search">search</i></button>
        </form>      
      );
    }
  }


  export default withRouter(Search);