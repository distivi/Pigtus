import React from 'react';
import PropsTypes from 'prop-types';

export default class HeaderNotification extends React.Component {
	getNotificationCount = () => {
		return this.props.count ? 
			<div className="notification-counter">{this.props.count}</div> :
			'';
	}

	render() {
		const count = this.getNotificationCount();
		return (
				<div className="header-notification">
					{count}
				</div>
		);
	}
}

HeaderNotification.propTypes = {
	count: PropsTypes.number,
	target: PropsTypes.string
};
