import React from 'react';
import PropTypes from 'prop-types';
import HeaderNotification from './HeaderNotification/HeaderNotification';

export default class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      text: 'Pigtus'
    };
  }

  makeLogout = () => {
    if (this.props.handleLogout) {
      this.props.handleLogout();
    } else {
      console.warn('No logout handler provided!');
    }
  }

  render() {
    return (
      <div className="header">
        <button
          id="btn-log-out"
          type="button"
          onClick={this.makeLogout}
          className="header-action">
            Log out
        </button>

        <div className="header-title">
          {this.props.title}
        </div>
        <HeaderNotification count={this.props.notificationCount}/>
      </div>
    );
  }
}

Header.propTypes = {
  title: PropTypes.string,
  notificationCount: PropTypes.number,
  handleLogout: PropTypes.func
};

