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

	render() {
		return (<div className="header">
					<button id="btn-log-out" type="button"
							className="header-action">Log out</button>

					<div className="header-title">
						{this.props.title}
					</div>
					<HeaderNotification count={0}/>
				</div>
		);
	}
}

Header.propTypes = {
	title: PropTypes.string
};

