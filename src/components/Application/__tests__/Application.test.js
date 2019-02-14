import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';
import { Application } from 'components/Application';
import { PageNotFound } from 'pages';

Enzyme.configure({ adapter: new EnzymeAdapter() });

describe('Application Component', () => {
  test('Render component', () => {
    const route = {
      routes: [
        { path: '/', exact: true, component: PageNotFound },
      ],
    };
    const wrapper = shallow(<Application route={route} />);
    expect(wrapper.exists()).toBe(true);
  });
});
