//Components
import React, { Component } from 'react';
import './App.css';
import apiKey from '../config.js';
import Search from './Search';
import Nav from './Nav';
import Results from './Results';
import NotFound from './NotFound';

//React Router

import {
  BrowserRouter,
  Route,
  Switch,
  withRouter
} from 'react-router-dom';


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


  componentDidUpdate(prevProps) {
    console.log("ROUTE CHANGED " +this.props.location);
    if (this.props.location !== prevProps.location) {
      console.log("ROUTE CHANGED " +this.props.location);
      this.performSearch(this.props.location);
    }
  }

  

  performSearch = (tags = 'sunsets') => {

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
    // console.log(this.state.photos);
    // : <Results data={this.state.photos} />

    return (
      <BrowserRouter>
        <div>

          <div>
            <Search onSearch={this.performSearch} />
            <Nav navSearch={this.performSearch} />
          </div>

          <div>
            {
              (this.state.loading)
                ? <p>Loading...</p>
                :
                <Switch>
                 <Route exact path="/" render={() => <Results data={this.state.photos} />} />
                 <Route exact path="/cats" render={() => <Results data={this.state.photos} />} />
                 <Route exact path="/dogs" render={() => <Results data={this.state.photos} />} />
                 <Route exact path="/computers" render={() => <Results data={this.state.photos} />} />
                 {/* <Route exact path="/search/:query" render={() => <Results data={this.state.photos} />} /> */}

                 <Route component={NotFound}/>
                </Switch>

            }

          
          </div>

        </div>

      </BrowserRouter>
    );
  }
}


