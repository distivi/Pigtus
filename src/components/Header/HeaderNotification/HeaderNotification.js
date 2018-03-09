import React from 'react';
import PropsTypes from 'prop-types';

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

  render() {
    const count = this.getNotificationCount();
    return (
        <div className="header-notification"
          onClick={this.openNotification}>
          {count}
        </div>
    );
  }
}

HeaderNotification.propTypes = {
  count: PropsTypes.number,
  openNotification: PropsTypes.func
};
