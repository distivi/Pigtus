import React from 'react';
import ReactDOM from 'react-dom';
import HeaderNotification from './HeaderNotification';

import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import sinon from 'sinon';

describe('<HeaderNotification/>', () => {
  it('renders HeaderNotification without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HeaderNotification />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('HeaderNotification is consistent with mock', () => {
    const component = renderer.create(<HeaderNotification/>);

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('HeaderNotification displays 2 new notifications', () => {
    const notification = shallow(<HeaderNotification count={2}/>);

    expect(notification.text()).toEqual('2');
  });

  it('HeaderNotification displays nothing in case count=0', () => {
    const notification = shallow(<HeaderNotification count={0}/>);

    expect(notification.text()).toEqual('');
  });


  it('HeaderNotification displays nothing in case no count property passed', () => {
    const notification = shallow(<HeaderNotification count={0}/>);

    expect(notification.text()).toEqual('');
  });

  it('HeaderNotification openNotification callback called', () => {
    const openNotificationCallback = sinon.spy();

    const notification = shallow(<HeaderNotification count={0} openNotification={openNotificationCallback}/>);
    expect(openNotificationCallback.calledOnce).toBeFalsy();
    notification.simulate('click');
    expect(openNotificationCallback.calledOnce).toBeTruthy();
  });
});
