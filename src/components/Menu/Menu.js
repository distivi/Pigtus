import React from 'react';
import { Link } from 'react-router-dom';

export class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.defaultItems = [{ title: 'Create Game', path: 'new' },
      { title: 'Join Game', path: 'join' },
      { title: 'Results', path: 'results' },
      { title: 'Friends', path: 'friends' },
      { title: 'Help', path: 'help' },
      { title: 'About', path: 'about' }];
  }

  buildMenu = () => {
    const menuItems = this.props.items ? this.props.items : this.defaultItems;

    const menu = menuItems.map((item, index) => {
      return <Link className="menu-item" to={item.path} key={index}>{item.title}</Link>;
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
