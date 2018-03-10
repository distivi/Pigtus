import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import HeaderNotification from './HeaderNotification/HeaderNotification';

import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import sinon from 'sinon';

describe('<Header/>', () => {
  it('renders Header without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Header />, div);
    ReactDOM.unmountComponentAtNode(div);
  });


  it('Header is consistent with mockup', () => {
    const component = renderer.create(<Header title="Mock" notificationCount={1} handleLogout={() => {}}/>);

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Header has title "Mock"', () => {
    const header = shallow(<Header title="Mock"/>);

    expect(header.find('.header-title').text()).toBe('Mock');
  });

  it('Header notification counter equal to 2', () => {
    const header = shallow(<Header title="Mock" notificationCount={2}/>);

    expect(header.find('.notification-counter').length).toBe(0);
    expect(header.find(HeaderNotification).shallow().find('.notification-counter').length).toBe(1);
    expect(header.find(HeaderNotification).shallow().find('.notification-counter').text()).toBe('2');
  });

  it('Header handleLogout callback is triggered.', () => {
    const handleLogout = sinon.spy();

    const header = shallow(<Header title="Mock" handleLogout={handleLogout}/>);
    expect(header.find('.header-action').length).toBe(1);
    const logoutButton = header.find('.header-action');
    logoutButton.simulate('click');
    expect(handleLogout.calledOnce).toBeTruthy();
  });
});
