import React from 'react';
import PropsTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class HeaderNotification extends React.Component {
  getNotificationCount = () => {
    return this.props.count ?
      <div className="notification-counter">{this.props.count}</div> :
      '';
  }

  openNotification = () => {
    const callback = this.props.openNotification;

    if (callback) {
      callback();
    } else {
      console.warn('No notification callback provided.');
    }
  }

  renderNotification = () => {

  }

  render() {
    const count = this.getNotificationCount();
    return (
        <Link className="header-notification"
          onClick={this.openNotification}
          to={this.props.target || '/help'}>
          {count}
        </Link>
    );
  }
}

HeaderNotification.propTypes = {
  count: PropsTypes.number,
  target: PropsTypes.string,
  openNotification: PropsTypes.func
};
