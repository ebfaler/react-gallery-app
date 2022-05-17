//Components
import React, { Component } from 'react';
import './App.css';
import apiKey from '../config.js';
import Search from './Search';
import Nav from './Nav';
import Results from './Results';

//React Router




export default class App extends Component {

  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true
    }
  }

  componentDidMount() {
    this.performSearch();
  }

  performSearch = (tags = 'dogs') => {

    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tags}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData);
        this.setState({ photos: responseData.photos.photo, loading: false });
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });

  }

  render() {
    console.log(this.state.photos);

    return (
      <div>

        <div>
          <Search onSearch={this.performSearch} />

          <Nav />
        </div>

        <div>
          {
            (this.state.loading)
              ? <p>Loading...</p>
              : <Results data={this.state.photos} />
          }

        </div>

      </div>

    );
  }








}





// let serverId = props.serverId;
// let id = props.photoId;
// let secret = props.secret;
// let sizeSuffix = props.sizeSuffix; 
// let alt = props.alt;
