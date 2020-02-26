import React, { Component } from 'react';
import Navbar from './components/Navbar'
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Post1300 from './components/Post1300'
import Post from './components/Post'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About} />
            <Route path='/post1300' component={Post1300} />
            <Route path='/:post_id' component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;