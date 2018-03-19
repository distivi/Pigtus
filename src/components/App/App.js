import React, { Component } from 'react';
import Header from '../Header/Header';
import { Menu } from '../Menu/Menu';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  get isHome() {
    return Boolean(this.props.location && this.props.location.pathname === '/');
  }

  render() {
    return (
      <div className="app">
        <Header notificationCount={23}
          title="Pigtus"
          isHome={this.isHome}
          history={this.props.history}/>
        <div className="app-view">
          <Switch>
            <Route exact path="/" component={Menu}/>
            <Route exact path="/new" render={() => { return <div>New Game</div>; }}/>
            <Route exact path="/join" render={() => { return <div>Join Game</div>; }}/>
            <Route exact path="/help" render={() => { return <div>Help</div>; }}/>
            <Route exact path="/about" render={() => { return <div>About</div>; }}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
