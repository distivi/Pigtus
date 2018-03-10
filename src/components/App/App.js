import React, { Component } from 'react';
import Header from '../Header/Header';
import { Menu } from '../Menu/Menu';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Header title="Pigtus"/>
        <div className="app-view">
          <Switch>
            <Route exact path="/" component={Menu}/>
            <Route exact path="/about" render={() => { return <div>About</div>; }}/>
        </Switch>
        </div>
      </div>
    );
  }
}

export default App;