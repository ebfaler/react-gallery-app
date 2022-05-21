//Components
import React, { Component } from 'react';
import './App.css';
import apiKey from '../config.js';
import Search from './Search';
import Nav from './Nav';
import Results from './Results';
// import NotFound from './NotFound';
import Error from './Error';

//React Router

import {

  Route,
  Switch,
  withRouter
} from 'react-router-dom';




class App extends Component {


  constructor() {
    super();
    this.state = {
      photos: [],
      loading: true,
      
    }
  }

  componentDidMount() {
    const search = this.props.location.pathname.substring(1);
    this.performSearch(search);
  }


  componentDidUpdate(prevProps) {
    if (this.props.location.pathname.substring(1) !== prevProps.location.pathname.substring(1)) {
      this.performSearch(this.props.location.pathname.substring(1));
    }
  }

  

  performSearch = (tags) => {
    if(tags === ''){
      tags = 'sunsets';
    }
    console.log(tags);

    fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${tags}&per_page=24&format=json&nojsoncallback=1`)
      .then(response => response.json())
      .then(responseData => {
        console.log(responseData);
        this.setState({ photos: responseData.photos.photo, loading: false});
      })
      .catch(error => {
        console.log('Error fetching and parsing data', error);
      });

  }


  render() {

    return (
    
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
                 <Route exact path="/:query" render={() => <Results data={this.state.photos} />} />
                 {/* <Route exact path="/dogs" render={() => <Results data={this.state.photos} />} />
                 <Route exact path="/computers" render={() => <Results data={this.state.photos} />} /> */}
                 {/* <Route exact path="/:photos" render={() => <Results data={this.state.photos} />} /> */}

                 <Route component={Error}/>
                </Switch>

            }

          
          </div>

        </div>

    );
  }
}


export default withRouter(App);