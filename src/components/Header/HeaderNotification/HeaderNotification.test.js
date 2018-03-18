import React from 'react';
import HeaderNotification from './HeaderNotification';
import { Link, StaticRouter, MemoryRouter } from 'react-router-dom';

import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';

describe('<HeaderNotification/>', () => {
/*  it('renders HeaderNotification without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<StaticRouter location="/"><HeaderNotification /></StaticRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  });
*/
  it('HeaderNotification is consistent with mock', () => {
    const component = renderer.create(<StaticRouter location={ { pathname: '/' } } context={ {} }><HeaderNotification/></StaticRouter>);

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('HeaderNotification renders correct', () => {
    const expected = 1;
    const router = shallow(<StaticRouter location='/' context={ {} }><HeaderNotification count={2}/></StaticRouter>);
    const actual = router.find(HeaderNotification).length;

    expect(actual).toEqual(expected);
  });

  it('HeaderNotification displays certain number of notification', () => {
    const expected = '5';
    const router = mount(<MemoryRouter context={ {} }><HeaderNotification count={5}/></MemoryRouter>);
    const headerNotification = router.find(HeaderNotification);

    expect(headerNotification.length).toEqual(1);

    const actual = headerNotification.find(Link).text();
    expect(actual).toEqual(expected);

    router.unmount();
  });

  it('HeaderNotification displays nothing in case count=0', () => {
    const expected = '<Link />';
    const router = shallow(<StaticRouter location='/' context={ {} }><HeaderNotification count={0}/></StaticRouter>);
    const headerNotification = router.find(HeaderNotification).shallow();

    expect(headerNotification.length).toEqual(1);

    const actual = headerNotification.text();
    expect(actual).toEqual(expected);
  });


  it('HeaderNotification displays nothing in case no count property passed', () => {
    const expected = '<Link />';
    const router = shallow(<StaticRouter location='/' context={ {} }><HeaderNotification/></StaticRouter>);
    const headerNotification = router.find(HeaderNotification).shallow();

    expect(headerNotification.length).toEqual(1);

    const actual = headerNotification.text();
    expect(actual).toEqual(expected);
  });

  it('HeaderNotification openNotification callback called', () => {
    const openNotificationCallback = sinon.spy();

    const router = shallow(<StaticRouter location='/' context={ {} }><HeaderNotification count={0} openNotification={openNotificationCallback}/></StaticRouter>);
    const headerNotification = router.find(HeaderNotification).shallow();
    expect(openNotificationCallback.calledOnce).toBeFalsy();
    headerNotification.simulate('click');
    expect(openNotificationCallback.calledOnce).toBeTruthy();
  });
});
