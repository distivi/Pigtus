import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import HeaderNotification from './HeaderNotification/HeaderNotification';

import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import sinon from 'sinon';

import { StaticRouter } from 'react-router-dom';

describe('<Header/>', () => {
  it('renders Header without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<StaticRouter location='/' context={ {} }><Header isHome={true}/></StaticRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });


  it('Header is consistent with mockup', () => {
    const component = renderer.create(<StaticRouter location='/' context={ {} }><Header isHome={true} title="Mock" notificationCount={1} handleLogout={() => {}}/></StaticRouter>);

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('Header has title "Mock"', () => {
    const expected = 'Mock';

    const router = shallow(<StaticRouter location='/' context={ {} }><Header isHome={true} title="Mock"/></StaticRouter>);
    const header = router.find(Header).shallow();

    const actual = header.find('.header-title').text();

    expect(actual).toBe(expected);
  });

  it('Header notification counter equal to 2', () => {
    const header = shallow(<Header isHome={true} title="Mock" notificationCount={2}/>);

    expect(header.find('.notification-counter').length).toBe(0);
    expect(header.find(HeaderNotification).shallow().find('.notification-counter').length).toBe(1);
    expect(header.find(HeaderNotification).shallow().find('.notification-counter').text()).toBe('2');
  });

  it('Header handleLogout callback is triggered.', () => {
    const handleLogout = sinon.spy();

    const router = shallow(<StaticRouter location='/' context={ {} }><Header isHome={true} title="Mock" handleLogout={handleLogout}/></StaticRouter>);
    const header = router.find(Header).shallow();

    expect(header.find('.header-action').length).toBe(1);

    const logoutButton = header.find('.header-action');
    logoutButton.simulate('click');

    expect(handleLogout.calledOnce).toBeTruthy();
  });
});
