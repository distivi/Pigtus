import React from 'react';
import { Button } from 'react-bootstrap';

export class Menu extends React.Component {
	constructor(props) {
		super(props);

		this.defaultItems = ['Create Game', 'Join Game', 'Help', 'About'];
	}

	buildMenu = () => {
		const menuItems = this.props.items ? this.props.items : this.defaultItems;

		const menu = menuItems.map((item, index) => {
			return <Button block color="secondary" size="lg" key={index}>{item}</Button>;
		});

		return menu;
	}

	render() {
		const menu = this.buildMenu();
		return (
			<div className='menu'>
				{menu}
			</div>
		);
	}
}
