import React from 'react';
import PropTypes from 'prop-types';
import HeaderNotification from './HeaderNotification/HeaderNotification';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: 'Pigtus'
    };
  }

  makeLogout = () => {
    if (this.props.handleLogout) {
      this.props.handleLogout();
    } else {
      console.warn('No logout handler provided!');
    }
  };

  goBack = () => {
    if (this.props.history.goBack) {
      this.props.history.goBack(-1);
    }
  };

  get logoutButton() {
    return (
      <button
        id="btn-log-out"
        type="button"
        onClick={this.makeLogout}
        className="header-action"
      >
        Log out
      </button>
    );
  }

  get backButton() {
    return (
      <button
        id="btn-log-out"
        type="button"
        onClick={this.goBack}
        className="header-action"
      >
        Back
      </button>
    );
  }

  get headerActionButton() {
    return this.props.isHome ? this.logoutButton : this.backButton;
  }

  render() {
    return (
      <div className="header">
        {this.headerActionButton}
        <div className="header-title">{this.props.title}</div>
        <HeaderNotification
          target="help"
          count={this.props.notificationCount}
        />
      </div>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string,
  isHome: PropTypes.bool.isRequired,
  notificationCount: PropTypes.number,
  handleLogout: PropTypes.func
};
