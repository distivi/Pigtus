import React from 'react';
import ReactDOM from 'react-dom';
import { LoadingScreen } from './LoadingScreen';

import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import { ProgressBar } from 'react-bootstrap';

describe('<LoadingScreen/>', () => {
  it('renders LoadingScreen without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LoadingScreen />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('LoadingScreen is consistent with mockup', () => {
    const component = renderer.create(<LoadingScreen loadingPercent={10} />);

    const tree = component.toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('LoadingScreen app name exists', () => {
    const expected = 'PIGTUS';

    const appNameClass = '.app-name';

    const loadingScreen = shallow(<LoadingScreen />);
    const appName = loadingScreen.find(appNameClass).text();

    expect(appName.length).toBeTruthy();
    expect(appName.replace(/ /g, '')).toBe(expected);
  });

  it('LoadingScreen progress-bar width equal to 20 percent', () => {
    const expected = '20%';
    const progressBarClass = '.progress-bar';

    const loadingScreen = shallow(<LoadingScreen loadingPercent={20} />);

    const progressBar = loadingScreen.find(ProgressBar).shallow();

    expect(progressBar.length).toBe(1);
    const progressBarWidth = progressBar.find(progressBarClass).get(0).props
      .style.width;

    expect(progressBarWidth).toBe(expected);
  });
});
