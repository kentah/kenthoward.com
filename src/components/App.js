import React, { Component } from 'react';
//import { Router } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';
import Splash from './Splash';
import Header from './Header';
import Sound from './Sound';
import Blog from './Blog';
import Paint from './Paint';
import Copyright from './Copyright'


class App extends Component {
  render() {
    return(
      <div className='container'>
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path='/' component={Splash} />
            <Route path='/sound' component={Sound} />
            <Route path='/blog' component={Blog} />
            <Route path='/paintings' component={Paint} />
            <Copyright />

          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
