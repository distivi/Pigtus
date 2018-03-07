import React from 'react';
import PropTypes from 'prop-types';

export class Header extends React.Component {
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
				</div>
		);
	}
}

Header.propTypes = {
	title: PropTypes.string
};

